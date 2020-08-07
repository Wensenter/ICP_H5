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