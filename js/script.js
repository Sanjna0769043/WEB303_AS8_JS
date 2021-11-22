/*
    Assignment 8
    {}
*/

$(document).ready(function(){
    $.getJSON("js/data.json", 
        function (data) {
            var hero = '';
            // ITERATING THROUGH OBJECTS
            $.each(data, function (key, value) {

                //CONSTRUCTION OF ROWS HAVING
                // DATA FROM JSON OBJECT
                hero += '<tr>';
                hero += '<td>' + 
                    value.name + '</td>';

                hero += '<td>' + 
                    value.weapons + '</td>';

                hero += '<td>' + 
                    value.power + '</td>';

                hero += '<td>' + 
                    value.created + '</td>';

                hero += '</tr>';
            });
            
            //INSERTING ROWS INTO TABLE 
            $('#marvel-hero').append(hero);
        });

});

function search() {
    var input, filter, tr, a, i, txtValue;
    input = $('#searchBox').val();
    filter = input.toUpperCase();
    tr = $('#marvel-hero').find("tr");
    for (i = 1; i < tr.length; i++) {
        a = $(tr[i]).children('td:first').text()
        if (a.toUpperCase().indexOf(filter) > -1 & input.length >0) {
            $(tr[i]).css("background-color", "yellow");
        } else {
            $(tr[i]).css("background-color", "white");
        }
    }
}

function filterFromAToM(){
    var filter_list = ['a', 'b', 'c','d','e','f', 'g', 'h', 'i', 'j', 'k', 'l', 'm']
    // var filter_list = ['c']
        $.each(filter_list, function( index, value ) {
            var new_value = value.toUpperCase()
            var tr = $('#marvel-hero').find("tr");
            for (i = 1; i < tr.length; i++) {
                var a = $(tr[i]).children('td:first').text().toUpperCase()
                console.log(a)
                if (!a.startsWith(new_value)) {
                    $(tr[i]).css("visibility", "show");
                } 
                else {
                    $(tr[i]).css("visibility", "hidden");
                }
            }

    });

}

function filterFromPToZ(){
    var filter_list = ['p', 'q','r','s','t','u','v','w', 'x','y','z']
    // var filter_list = ['c']
        $.each(filter_list, function( index, value ) {
            var new_value = value.toUpperCase()
            var tr = $('#marvel-hero').find("tr");
            for (i = 1; i < tr.length; i++) {
                var a = $(tr[i]).children('td:first').text().toUpperCase()
                console.log(a)
                if (!a.startsWith(new_value)) {
                    $(tr[i]).css("visibility", "show");
                } 
                else {
                    $(tr[i]).css("visibility", "hidden");
                }
            }

    });

}


