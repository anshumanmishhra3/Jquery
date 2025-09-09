// $(document).ready(function(){
//     $('button').click(function(){
//         $('.name').hide();
//     })
// })

//fetching the id and making sure we are creting as well deleting the list seperately

//adding list using jquery
$(document).ready(function(){
    $('.addButton').click(function(){
        let text = $('.input').val();
        
        if (text.trim() !== '') {
            let ul = $('.items-listing');
            let li = $('<li>').text(text);
            let delButton = $('<button>').text('Delete');
            delButton.css('background-color','red');
            delButton.css('color','white');
            delButton.css('border-radius','5px');
            delButton.css('width','60px');
            delButton.css('margin-left','10rem');
            delButton.addClass('delete');


            li.append(delButton); 
            ul.append(li); 
            $('.input').val(''); 
        }
    });

    //searching the elements in the todo list
    let ifExist = false;
    let valueFromInput = $('li').text();
    console.log(valueFromInput);

    //deleting this item that is near to the items
    $('.items-listing').on('click', '.delete', function(){
        $(this).closest('li').remove(); 
    });
});
