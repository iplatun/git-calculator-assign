//Group 1: Jonathan, Mike, Ronisha, Irina

//Program just sits there, then on button 'click' it runs the function calculateTip
document.querySelector('button').addEventListener('click', calculateTip );

//Calculate Tip
function calculateTip() 
{
  //Getting data
    //this takes the data from the html form,            ... document.getElementById("totalBill").value 
    //converts them from string into numbers,            Number( ... )
    // and saves them as our variables,                  let totalBill = ...
  let totalBill = Number( document.getElementById("totalBill").value );
  let rating = Number( document.getElementById("rating").value );
  let guests = Number( document.getElementById("guests").value );
  let finalTip = 0;
  
  //validate input, to make sure they're not entering awful wrong things
  if (typeof totalBill !== 'number' || typeof guests !== 'number') {         // numbers and not names or w/e
    alert("Please enter valid numbers for Total Bill and Number of Guests");
    return;
  }
  if (totalBill < 0 || guests < 1) {        //some joker isn't entering negative bills or less than one person paying
    alert("Please enter valid numbers for Total Bill and Number of Guests");
    return;
  }
  if (guests % 1 !== 0) {             //no half-people, because *any whole number* % 1 == 0
    alert("Please enter a valid numbers for Number of Guests");
    return;
  }

  //ACTUALLY CALCULATING
    //this one single line is the only important part of this whole code!!!
  finalTip = (totalBill * rating) / guests

  //Outputing results
  document.getElementById("tip").innerText = finalTip

  //Debug Logs
    //This is here so that I can tell what I have broken while working
  console.log("printing the values of totalbill, rating, and guests");
  console.log(totalBill);
  console.log(rating);
  console.log(guests);
  console.log("printing the variable types of those variables");
  console.log(typeof totalBill);
  console.log(typeof rating);
  console.log(typeof guests);

  console.log(finalTip)
}

