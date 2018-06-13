// Declaring variables
var table = 9;
var operator = 'subtraction';
var i = 1;

var msg = '';
// The strict equal to operator is used to execute the first if statement. If this statement evaluates to true
// then the while loop will be executed.
if (operator === 'subtraction') {
// If the 'if' statement is true then the while loop will execute    
    while (i < 11) {
    // this is the calculator for the while loop then adds '1' to the count 
    i + ' - ' + table + ' = ' + (i - table) + '<br />';
    i++;
    }
// if the first if statement is false then 'else' will execute     
} else {
    while (i < 11) {
    // this is the calculator for the while loop then adds '1' to the count 
        msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
        i++;
    }
}
// Getting the element blackboard
var el = document.getElementById('blackboard');
el.innerHTML = msg;
