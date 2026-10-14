let changeListeners = []

export function subscriber (callback){
    changeListeners.push(callback)
}

export function action(){
    changeListeners.forEach(fn => fn())
}