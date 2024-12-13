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


});
