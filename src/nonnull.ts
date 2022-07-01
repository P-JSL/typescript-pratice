
function closeDialog(dialog : Dialog){
    if(!('id' in dialog)){
        return
    }
    setTimeout(() => {
        // @ts-ignore
        // tslint:disable-next-line:no-unused-expression
        removeFromDOM(dialog, document.getElementById(dialog.id))!
    })
}

function removeFromDOM(dialog : VisibleDialog, element : Element){
    element.parentNode!.removeChild(element)
    // @ts-ignore
    delete dialog.id
}
type VisibleDialog = {id : string}
type DestoryedDialog = {}
type Dialog = VisibleDialog | DestoryedDialog

