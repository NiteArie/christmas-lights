let controls = (() => {
    let lights = document.querySelectorAll('.light');
    let _onButton = document.querySelector('.general__controls__switch__on');
    let _offButton = document.querySelector(".general__controls__switch__off");
    let lightState = true;

    _onButton.addEventListener('click', (event) => {
        if ( lightState ) {
            return;
        }

        turnOnLights();
        toggleLight();
        removeActiveButton();
        activeButton();
    })

    _offButton.addEventListener('click', (event) => {
        if (!lightState) {
            return;
        }

        turnOffLights();
        toggleLight();
        removeActiveButton();
        activeButton();
    })

    function toggleLight() {
        lightState = !lightState;
    }

    function turnOffLights() {
        for ( let i = 0; i < lights.length; i++) {
            lights[i].style.animation = "none";
            lights[i].style.backgroundColor = "hsl(250, 50%, 50%)";
        }
    }

    function turnOnLights() {
        for ( let i = 0; i < lights.length; i++ ) {
            lights[i].removeAttribute('style');
        }
    }

    function removeActiveButton() {
        _onButton.classList.remove('active');
        _offButton.classList.remove('active');
    }

    function activeButton() {
        if ( lightState) {
            _onButton.classList.add('active');
        } else {
            _offButton.classList.add('active');
        }
    }
})();