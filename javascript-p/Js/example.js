(function(){
    // PART ONE: CREATE HOTEL OBJECT AND WRITE OUT THE OFFER DETAILS 

var hotel = {
    name: 'Park', 
    roomRate: 240, // Amount in dollars
    discount: 15, // Percentage discount 
    offerPrice: function(){
        var offerRate = this.roomRate * ((100 - this.discount) / 100);
        return offerRate;

    }

};
// Write out the hotel name, standard rate, and the special 
var hotelName, roomRate, specialRate;           // Declaring the variables

hotelName = document.getElementById('hotelName');       // Getting the elements
roomRate = document.getElementById('roomRate');
specialRate = document.getElementById('specialRate');

hotelName.textContent = hotel.name;                     // write hotel name
roomRate.textContent = '$' + hotel.roomRate.toFixed(2); // Write room rate
specialRate.textContent = '$' + hotel.offerPrice();     // write offer price

// PART TWO: CALCULATE AND WRITE OUT THE EXPIRY DETAILS FOR THE OFFER
var expiryMSG; // Message displayed to users 
var today;     // Todays date
var elEnds;    // The elements that shows the message about the offer ending

function offerExpires(today) {
    // Declare variables within the function for local scope
    var weekFromToday, day, date, month, year, dayNames, monthNames;
    // Add 7 days time (added in milliseconds)
    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    // Create arrays to hold the names of the days / months 
    dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'];
    // Collect the parts of the date to show on the page
    day = dayNames[weekFromToday.getDay()]
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();
    // Create the message
    expiryMSG = 'Offer expires next ';
    expiryMSG += day + '<br />(' + date + ' ' + month + ' ' + year + ')';
    return expiryMSG;
}

today = new Date();
elEnds = document.getElementById('offerEnds');
elEnds = innerHTML = offerExpires(today);

// Finnish the immediately invoked function expression
}

)