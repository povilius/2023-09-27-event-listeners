let numbers = document.querySelector('#numbers')

function createElement(className, tag = 'div', text = '') {
  let element = document.createElement(tag)
  if (className) {
    element.classList.add(className)
  }
  element.textContent = text

  return element
}

let number = 5

let input = document.createElement('input')
input.type = 'number'
input.value = 5

let numberElement = createElement('grade', 'h3', number)

let minusTwoButton = createElement('minus-two-button', 'button', '-2')

let minusButton = createElement('minus-button', 'button', '-')

let resetButton = createElement('reset-button', 'button', 'Reset')

let plusButton = createElement('minus-button', 'button', '+')

let plusTwoButton = createElement('plus-two-button', 'button', '+2')

let inputGradesButton = createElement('', 'button', 'Įrašyti balą') 

let gradesElement = createElement('', 'h3', 'Balai: ')

let inputGrades = createElement('', 'ul', '')

numbers.append(input, numberElement, minusTwoButton, minusButton, resetButton, plusButton, plusTwoButton, inputGradesButton, gradesElement, inputGrades)

input.addEventListener('input', function() {
  numberElement.textContent = Number(input.value)
  number = Number(input.value)

  if (number >= 5) {
    numberElement.style.color = 'green'
  } else {
    numberElement.style.color = 'red'
  }
})

minusTwoButton.addEventListener('click', () => {
  number -= 2
  numberElement.textContent = number
  input.value = number

  if (number <= 2) {
    minusTwoButton.setAttribute('disabled', true)
  }

  if (number <= 8) {
    plusTwoButton.removeAttribute('disabled')
  }

  if (number >= 5) {
    numberElement.style.color = 'green'
  } else {
    numberElement.style.color = 'red'
  }
})

minusButton.addEventListener('click', () => {
  number--
  numberElement.textContent = number
  input.value = number

  if (number <= 1) {
    minusButton.setAttribute('disabled', true)
  }

  if (number <= 9) {
    plusButton.removeAttribute('disabled')
  }

  if (number >= 5) {
    numberElement.style.color = 'green'
  } else {
    numberElement.style.color = 'red'
  }
})

plusButton.addEventListener('click', () => {
  number++
  numberElement.textContent = number
  input.value = number

  if (number > 9) {
    plusButton.setAttribute('disabled', true)
  }

  if (number > 1) {
    minusButton.removeAttribute('disabled')
  }

  if (number >= 5) {
    numberElement.style.color = 'green'
  } else {
    numberElement.style.color = 'red'
  }
})

plusTwoButton.addEventListener('click', () => {
  number += 2
  numberElement.textContent = number
  input.value = number

  if (number > 8) {
    plusTwoButton.setAttribute('disabled', true)
  }

  if (number > 2) {
    minusTwoButton.removeAttribute('disabled')
  }

  if (number >= 5) {
    numberElement.style.color = 'green'
  } else {
    numberElement.style.color = 'red'
  }
})

resetButton.addEventListener('click', () => {
  number = 5
  numberElement.textContent = number

  numberElement.style.color = 'green'

  minusTwoButton.removeAttribute('disabled')
  minusButton.removeAttribute('disabled')
  plusButton.removeAttribute('disabled')
  plusTwoButton.removeAttribute('disabled')
})

inputGradesButton.addEventListener('click', function() {
  let gradesItem = document.createElement('li')
  inputGrades.append(gradesItem)
  gradesItem.style.fontWeight = 'bold'
  numberElement.textContent = number
  gradesItem.textContent = number

  if (number >= 5 ) {
    gradesItem.style.color = 'green'
  } else {
    gradesItem.style.color = 'red'
  }

  let cancelButton = document.createElement('button')
  cancelButton.textContent = 'Naikinti'
  gradesItem.append(cancelButton)

  cancelButton.addEventListener('click', function() {
    gradesItem.remove()
  })
})

