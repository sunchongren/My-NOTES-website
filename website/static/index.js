function deleteNote(noteId){
    fetch('/delete-Note', {
        method: 'POST',
        body: JSON.stringify({ noteId: noteId }),
    }).then((_res) => {
        window.location.href = '/';
    });
}