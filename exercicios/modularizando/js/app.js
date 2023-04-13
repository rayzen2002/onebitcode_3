import { theme } from './theme.js'
import { buttons  } from './buttons.js'

export const main = document.querySelector('main')
export const root = document.querySelector(':root')
export const input = document.getElementById('input')
export const resultInput = document.getElementById('result')


export function app(){
    theme()
    buttons()
}

