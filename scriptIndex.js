if (!localStorage.getItem("subscribed")) {
    var ask = confirm("Would You Like To Subscribe To Our Newsletter?\n\nReceive Updates About New Guides, Latest Products, And Exclusive Tips And Tricks To Help You Keep Your Bathroom Tidy.");

    if (ask) {
        var email = prompt("Enter Your Email");
        if (email != null) {
            alert("Thank You For Subscribing!");
            localStorage.setItem("subscribed", true); // Store the flag so the alert doesn't show again
        }
    }
}