//parse price
//span #mainprice - actual product price.

$(document).ready(function(){

    $('.mainprice').each(function(){
        let actualPrice = $('.mb-6 ins:first-child').not('.uah').text();
        let actualPriceNodiscount = $('.ololo').text();

        if(actualPrice == ''){
            $(this).html(actualPriceNodiscount + ' UAH');
        }else{
            $(this).html(actualPrice);
        }
    });
});