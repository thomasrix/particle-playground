require('../styles/styles.scss');


import CanvasBalls from './canvasballs';
import Sparks from './sparks';

function init() {

     const cb = new CanvasBalls();
    // const sp = new Sparks();

}
document.addEventListener('DOMContentLoaded', () => {
    init(); // Udkommenteres til launch i webdok, da vi ikke får event dér
});

