export default function copy( element ) {

    let doc = document,
    text = doc.getElementById( element ),
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
    // document.getElementById("btn").value="Copied";
}