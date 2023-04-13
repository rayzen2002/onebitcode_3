import { calculate } from './calculate.js'
import { input } from './app.js'
export const allowedKeys = [
    '(',
    ')',
    '/',
    '*',
    '-',
    '+',
    '9',
    '8',
    '7',
    '6',
    '5',
    '4',
    '3',
    '2',
    '1',
    '0',
    '.',
    '%',
    ' '
  ]
export function buttons(){

  document.querySelectorAll('.charKey').forEach(charKeyBtn => {
    charKeyBtn.addEventListener('click', () => {
      const value = charKeyBtn.dataset.value
      input.value += value
    })
  })
  document.getElementById('copyToClipboard').addEventListener('click', ev => {
    const button = ev.currentTarget
    if (button.innerText === 'Copy') {
      button.innerText = 'Copied!'
      button.classList.add('success')
      navigator.clipboard.writeText(resultInput.value)
    }else{
      button.innerText = 'Copy'
      button.classList.remove('success')
    }
  })
  
  document.getElementById('clear').addEventListener('click', () => {
    input.value = ''
    input.focus()
  })
  
  document.getElementById('equal').addEventListener('click', () => {
    calculate()
  })

  input.addEventListener('keydown', ev => {
    ev.preventDefault()
    if (allowedKeys.includes(ev.key)) {
      input.value += ev.key
      return
    }
    if (ev.key === 'Backspace') {
      input.value = input.value.slice(0, -1)
    }
    if (ev.key === 'Enter') {
      calculate()
    }
  })
  

}