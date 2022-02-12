window.addEventListener('load', () => {
    
    const reset = document.querySelector('#reset');
    const editor = document.querySelector('#editor');
    let editorVal = localStorage.getItem('editor');
    editor.value = editorVal;
    editor.addEventListener('input', (event) => {
        editorVal = event.target.value;        
        localStorage.setItem('editor', `${editorVal}`);        
    });
    reset.addEventListener('click', () => {
        editor.value = '';
        localStorage.removeItem('editor');
    });
});