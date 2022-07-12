//parse price
//span #mainprice - actual product price.

$(document).ready(function(){

    $('.mainprice').each(function(){
        let actualPrice = $('.mb-6 ins:first-child').not('.uah').text();
        let actualPriceNodiscount = $('.ololo').text();

        if(actualPriceNodiscount == ''){
            $(this).html(actualPrice.substring(0,actualPrice.indexOf('.'))+' UAH');
        }else{
            $(this).html(actualPriceNodiscount.substring(0,actualPriceNodiscount.indexOf('.'))+' UAH');
        }
    });
});