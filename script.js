const buttons = [...document.querySelectorAll('.activity-tracker__option')]
let data = []

const listenToButtons = (array) => {
    array.forEach(button => {
        button.addEventListener('click', () => {
            activateClickedButton(button)
            const clickedOption = button.dataset.option
            renderCards(clickedOption)
        })
    })
};

const activateClickedButton = (button) => {
    buttons.forEach(b => b.classList.remove('active'))
    button.classList.add('active')
}

