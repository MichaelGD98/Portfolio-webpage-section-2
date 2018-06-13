// grabbing a specific element
var list = document.getElementsByTagName('ul')[0];

var newItemLast = document.createElement('li'); // creating a new <li> element
var newTextLast = document.createTextNode('cream'); // creating a new text node
newItemLast.appendChild(newTextLast);   // add the new text node to the element
list.appendChild(newItemLast);  // add the element end of list

var newItemFirst = document.createElement('li');    // creating a new element
var newTextFirst = document.createTextNode('kale'); // creating a new text node
newItemFirst.appendChild(newTextFirst); // adding the new text node to an element
list.insertBefore(newItemFirst, list.firstChild);   // adding the element to the list 

var listItems = document.querySelectorAll('li'); // selects all the <li> elements

var i;
for (i = 0; i < listItems.length; i++) { // looping through the elements
    listItems[i].className = 'cool'; // changing the class name to cool
}

var heading = document.querySelector('h2'); // selecting the <h2> element
var headingText = heading.firstChild.nodeValue; // the text in the <h2> element
var totalItems = listItems.length; // lists the number of <li> elements
var newHeading = headingText + '<span>' + totalItems + '</span>'; 
heading.innerHTML = newHeading; // updates <h2>



