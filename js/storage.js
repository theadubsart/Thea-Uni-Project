let archiveData = [];
let syncCallback = null;
let isListening = false;

function onArchiveSync(cb) {
  syncCallback = cb;
}

// Attach realtime listener ONCE
function loadArchive() {
  if (isListening) return; // prevent duplicate listeners
  isListening = true;

  ARCHIVE_REF.on("value", (snapshot) => {
    const data = snapshot.val();

    // Convert object {id: entry, ...} -> array
    archiveData = data ? Object.values(data) : [];

    // Sort newest first
    archiveData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    if (syncCallback) syncCallback(archiveData);
  });
}

function addToArchive(entry) {
  return ARCHIVE_REF.child(entry.id).set(entry)
    .catch(err => console.error("Firebase write failed:", err));
}
