let controls = (() => {
    let lights = document.querySelectorAll('.light');
    let _onButton = document.querySelector('.general__controls__switch__on');
    let _offButton = document.querySelector(".general__controls__switch__off");
    let _intensityInput = document.querySelector('.general__controls__form__input-intensity');
    let _intensityButton = document.querySelector('.general__controls__form__intensity');
    let lightState = true;

    activeButton();

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

    _intensityButton.addEventListener('click', (event) => {
        if (!lightState) {
            return;
        }

        let value = Number.parseFloat(_intensityInput.value);

        if ( isNaN(value) ) {
            return;
        }

        changeLightsIntensity(value);
        
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

    function changeLightsIntensity(value) {
        for ( let i = 0; i < lights.length; i++ ) {
            lights[i].style.animationDuration = `${value}s`;
        }
    }

})();