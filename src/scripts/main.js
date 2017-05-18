require('../styles/styles.scss');


import CanvasBalls from './canvasballs';

function init() {

    const cb = new CanvasBalls();

}
document.addEventListener('DOMContentLoaded', () => {
    init(); // Udkommenteres til launch i webdok, da vi ikke får event dér
});

