var ask = confirm("Would You Like To Subscribe To Our Newsletter?\n\nRecieve Updates About New Guides, Latest Products, And Exclusive Tips And Tricks To Help You Keep Your Bathroom Tidy.");

if(ask == true){
    var email = prompt("Enter Your Email");
    if(email != null){
        alert("Thank You For Subscribing!");
    }
}