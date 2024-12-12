$(document).ready(function () {
    var data = [
        {"text": "Air Freshener", "href": "../products/prodAir.html"},
        {"text": "All-Purpose Cleaner", "href": "../products/prodAllpurpose.html"},
        {"text": "Bath Tub Cleaner", "href": "../products/prodBathTub.html"},
        {"text": "Disinfectant", "href": "../products/prodDisinfectant.html"},
        {"text": "Drain Cleaner", "href": "../products/prodDrain.html"},
        {"text": "Tile & Grout Cleaner", "href": "../products/prodTile.html"},
        {"text": "Toilet Bowl Cleaner", "href": "../products/prodToilet.html"},
        {"text": "Window Cleaner", "href": "../products/prodWindow.html"},
        {"text": "Bathroom Cleaning Life Hacks", "href": "../guides/guidesLifeHacks.html"},
        {"text": "How To Clean a Bathtub", "href": "../guides/guidesBathtub.html"},
        {"text": "How To Clean a Drain", "href": "../guides/guidesDrain.html"},
        {"text": "How To Clean a Mirror", "href": "../guides/guidesMirror.html"},
        {"text": "How To Clean a Shower Head", "href": "../guides/guidesShowerhead.html"},
        {"text": "How To Clean Tiles", "href": "../guides/guidesTiles.html"},
        {"text": "How To Clean a Toilet Bowl", "href": "../guides/guideToiletBowl.html"},
        {"text": "Tips for Cleaning your Bathroom", "href": "../guides/guidesTips.html"}
    ];


    $("input[name=q]").keyup(function() {
        var q = $(this).val().toLowerCase();
        $("#qResults").empty();
        
        if(q.length > 0) {
            $.each(data, function(key, value) {
                if(value.text.toLowerCase().indexOf(q) > -1) {
                    var row = '<a href="' + value.href + '">' + value.text + '</a>';
                    $("#qResults").append(row);
                } 
            });
            $("#qResults").show();
        } else {
            $("#qResults").hide();
        }
    });

    

    $(document).click(function(event) {
        if (!$(event.target).closest('.search-container').length) {
           $("#qResults").hide();
       }
   });

    $(".search-container").mouseenter(function() {
        var q = $("input[name=q]").val().toLowerCase();
        if (q.length > 0) {
            $("#qResults").show();
        }
    });



    let cart = [];

        if (localStorage.getItem('cartItems')) {
            cart = JSON.parse(localStorage.getItem('cartItems'));
            updateCart();
        }

        $('#cart-button').click(function () {
            $('.cart-item-container').toggle();
        });

        $('.add-to-cart-btn').click(function () {
            const name = $(this).data('name');
            const url = $(this).data('url');

            const itemExists = cart.some(item => item.name === name);
            if (itemExists) {
                alert(`${name} is already in the cart!`);
                return;
            }

            cart.push({name, url});
            saveCart();
            updateCart();
        });

        function updateCart() {
            const cartItemsContainer = $('.cart-items');
            cartItemsContainer.empty();
            let total = 0;

            cart.forEach((item, index) => {
                cartItemsContainer.append(`
                    <div class="cart-item">
                        <a href = "${item.url}"><span>${item.name}</span></a>
                        <button data-index="${index}"><b>DELETE</b></button>
                    </div>
                `);
            });

            $('.cart-total').text(`$${total.toFixed(2)}`);
        }

        function saveCart() {
            localStorage.setItem('cartItems', JSON.stringify(cart));
        }

        $(document).on('click', '.cart-item button', function () {
            const index = $(this).data('index');
            cart.splice(index, 1);
            saveCart();
            updateCart();
        });

});
