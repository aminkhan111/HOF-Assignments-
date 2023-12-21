


const Books =[
    { title: "Deep Work", Author: "cal New port", year: 2012},
    { title: "Monk Who Sold Her Farari",Author: "the Monk", year: 2008},
    { title: " the almanac of  Naval Ravikant ",Author: " Naval Ravikant", year: 2018},
    { title: "7 Habit of Highly effective people",Author: "Stiphen R Convey", year: 2007},
];

// Function to capitalize all letters of a string
function capitalizeString(str) {
    return str.toUpperCase();
 }

// Filter and capitalize the books

const filteredAndCapitalizedBooks = Books.filter(Books => Books.year >= 2010).map(Books => ({...Books, Author: capitalizeString(Books.Author) }));


// Log the result to the console

console.log("Filtered and Capitalized Books:", filteredAndCapitalizedBooks);



