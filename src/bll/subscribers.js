let changeListener = null

export function subscriber (callback){
    changeListener = callback
}

export function unsubscribe() {
    changeListener = null
}

export function action(){
    if(changeListener){
        changeListener()
    }
}