$(document).ready(function(){

    let url = window.location.href.indexOf("/admin/") + 1;
    
    if(url == 0){

        if(!$('#prd-sets').length){
            $('.set_block').parent('section').css('display','none');
        }

        let discount = $('#prd-sets input[name=sp_economy]').val();
        let iset = $('#prd-sets input[name=sp_iset]').val();
        let productId = $('#prd-sets input[name=sp_product_id]').val();

        let oneSpCprice = $('#prd-sets .set-product:eq(0) input[name=sp_cprice]').val();
        let oneSpOptionPrice = $('#prd-sets .set-product:eq(0) input[name=sp_option_price]').val();
        let oneSpProductId = $('#prd-sets .set-product:eq(0) input[name=sp_product_id]').val();
        let oneSpQuantity = $('#prd-sets .set-product:eq(0) input[name=sp_quantity]').val();
        let oneSpOption = $('#prd-sets .set-product:eq(0) input[name=sp_option]').val();

        let twoSpCprice = $('#prd-sets .set-product:eq(1) input[name=sp_cprice]').val();
        let twoSpOptionPrice = $('#prd-sets .set-product:eq(1) input[name=sp_option_price]').val();
        let twoSpProductId = $('#prd-sets .set-product:eq(1) input[name=sp_product_id]').val();
        let twoSpQuantity = $('#prd-sets .set-product:eq(1) input[name=sp_quantity]').val();
        let twoSpOption = $('#prd-sets .set-product:eq(1) input[name=sp_option]').val();

        let oldEconomyPrice = $('#economy_price').text();
        let oldPrice = Number.parseInt(oneSpCprice)+Number.parseInt(twoSpCprice);
        let procent = oldPrice / 100 * discount.replace("%", "");
        let finalPrice = oldPrice-procent;

        $('#all_sp_economy').val(discount);
        $('#all_sp_iset').val(iset);
        $('#all_sp_product_id').val(productId);

        $('#one_sp_cprice').val(oneSpCprice);
        $('#one_sp_option_price').val(oneSpOptionPrice);
        $('#one_sp_product_id').val(oneSpProductId);
        $('#one_sp_quantity').val(oneSpQuantity);
        $('#one_sp_option').val(oneSpOption);

        $('#two_sp_cprice').val(twoSpCprice);
        $('#two_sp_option_price').val(twoSpOptionPrice);
        $('#two_sp_product_id').val(twoSpProductId);
        $('#two_sp_quantity').val(twoSpQuantity);
        $('#two_sp_option').val(twoSpOption);

        $('#oneProductPrice').html(oneSpCprice+' UAH');
        $('#twoProductPrice').html(twoSpCprice+' UAH');

        $('.set_block_price_old').html(oldPrice+' UAH');
        $('#economy_price').html(oldEconomyPrice + ' ' + String(discount) + '!');
        $('#final').html(finalPrice+' UAH');

        if(!discount){
            $('.set_block_price_old').css('display','none');
            $('.set_block_price_text').css('display','none');
        }
    }



});