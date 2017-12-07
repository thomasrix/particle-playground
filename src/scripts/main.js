require('../styles/styles.scss');


import CanvasBalls from './canvasballs';
import KeepyUppy from './keepy-uppy';
import Sparks from './sparks';

function init() {

     const ku = new KeepyUppy();
    //  const cb = new CanvasBalls();
    // const sp = new Sparks();

}
document.addEventListener('DOMContentLoaded', () => {
    init(); // Udkommenteres til launch i webdok, da vi ikke får event dér
});

