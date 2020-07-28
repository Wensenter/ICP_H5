let wxInputScroll = new WxInputScroll();
let LIST = null;
$('input, textarea').on('blur',function(){
    wxInputScroll.iptBlur(); 
}).on('focus',function(){
    wxInputScroll.iptFocus();
});
$('select').on('change',function(){
    wxInputScroll.iptBlur();
});

function handleSearchClick(el){
    $.ajax({
        url:'../json/search.json',
        success:function(data){
            let temp = '';
            let {list} = data;
            LIST = list;
            for(i = 0; i < list.length; i++){
                temp += `<li listId="${list[i].id}">${list[i].msg}</li>`
            }
            $('.related-record .list').html(temp);
        }
    })
}

function handleClearInput(){
    $('.search-input').val('');
    $('.search-link').show();
    $('.hot-search').show();
    $('.related-record').hide();
}

function handleInput(el){
    if(!$(el).val()){
        $('.clear').hide()
    }else{
        $('.clear').show()
    }

    $('.search-link').hide();
    $('.hot-search').hide();
    $('.related-record').show();
    let search_text = $(el).val();
    let temp = '';
    for(i = 0; i < LIST.length; i++){
        let item =  LIST[i].msg.replace(search_text,`<span class="key">${search_text}</span>`)
        temp += `<li listId="${LIST[i].id}">${item}</li>`
    }
    $('.related-record .list').html(temp);
}