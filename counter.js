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

let numberElement = createElement('grade', 'h3', number)

let minusTwoButton = createElement('minus-two-button', 'button', '-2')

let minusButton = createElement('minus-button', 'button', '-')

let resetButton = createElement('reset-button', 'button', 'Reset')

let plusButton = createElement('minus-button', 'button', '+')

let plusTwoButton = createElement('plus-two-button', 'button', '+2')
numbers.append(numberElement, minusTwoButton, minusButton, resetButton, plusButton, plusTwoButton)

minusTwoButton.addEventListener('click', () => {
  number -= 2
  numberElement.textContent = number
})

minusButton.addEventListener('click', () => {
  number--
  numberElement.textContent = number

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
})

resetButton.addEventListener('click', () => {
  number = 5
  numberElement.textContent = number
})

