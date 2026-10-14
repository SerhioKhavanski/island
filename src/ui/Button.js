
export function Button (callBackFn, btnText){
    const button = document.createElement('button')
    button.textContent = btnText
    button.className = 'btn'
    button.addEventListener('click', callBackFn)
    return button
}

