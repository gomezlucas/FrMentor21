const toggleSwitch = document.querySelector('#switch-toggle');


switchTheme = (event) => {
    event.target.checked ?
        document.body.setAttribute('data-theme', 'light') :
        document.body.removeAttribute('data-theme')
}



toggleSwitch.addEventListener('click', switchTheme)