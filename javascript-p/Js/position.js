// screen x 
var sx = document.getElementById('sx');
// screen y
var sy = document.getElementById('sy');
// page x
var px = document.getElementById('px');
// page y
var py = document.getElementById('py');
// client x
var cx = document.getElementById('cx');
// client y
var cy = document.getElementById('cy');
// daclare the function
function showPosition(event) {
    // update screen element x & y    
    sx.value = event.screenX;
    sy.value = event.screenY;
    // update the page element x & y
    px.value = event.screenX;
    py.value = event.screenY;
    // update client element x & y 
    cx.value = event.screenX;
    cy.value = event.screenY;
}
// grab the body element
var el = document.getElementById('body');
// execute the event and call the function
el.addEventListener('mousemove', showPosition, false);
