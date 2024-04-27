// Create the Date Object
let currentDate = new Date();


// Get the current year
let currentYear = currentDate.getFullYear();

document.querySelector("#year").innerHTML = currentYear;
document.querySelector("#lastModified").innerHTML = document.lastModified;