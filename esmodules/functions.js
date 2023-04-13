export function label(atributes){
    const element = document.createElement('label')
    Object.assign(element , atributes)
    return element
}

export function input(atributes){
    const element = document.createElement('input')
    Object.assign(element , atributes)
    return element
}

export function br(atributes){
    const element = document.createElement('br')
    Object.assign(element , atributes)
    return element
}