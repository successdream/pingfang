$(function(){
    
//证件类型选择
var showBankDom = document.querySelector('.showBank');
showBankDom.addEventListener('key', function() {
    var bankId = showBankDom.dataset['id'];
    var bankName = showBankDom.dataset['value'];
    var bankSelect = new IosSelect(1, [validateData], {
        container: '.container',
        title: '',
        itemHeight: 50,
        itemShowCount: 3,
        oneLevelId: bankId,
        callback: function(selectOneObj) {
            type_yes = true;
            // showBankDom.innerHTML = selectOneObj.value;
            $('#showBank').html(selectOneObj.value)
            showBankDom.dataset['id'] = selectOneObj.id;
            showBankDom.dataset['value'] = selectOneObj.value;
            // showBankDom.style.color = "#4c4c4c";
            $('#showBank').css('color', '#4c4c4c');
            idType = selectOneObj.value;
            // $("#idTypeNum").attr("disabled", false);
            selectType = selectOneObj.id;
            checkValidateError();
        }
    });

});
    //获取数目
    function getNum(){
       return "123"
    }
    

})

