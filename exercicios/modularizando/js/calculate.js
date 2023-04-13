import { resultInput , input} from './app.js'
function calculate() {
    const result = eval(input.value)
    resultInput.value = result
  }

export {  calculate  }