export default function copy( i ) {

    let doc = document,
    text = doc.getElementById( i ),
    range, selection;

    if (doc.body.createTextRange){
        range = doc.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } 

    else if (window.getSelection){
        selection = window.getSelection();        
        range = doc.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    let copyButton = document.querySelector( `.copy-${ i }`);
    copyButton.innerHTML = 'disalin';
    setTimeout(() => copyButton.innerHTML = 'salin', 3000);
}