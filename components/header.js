
Vue.component('common-head',{
    template:'<div>'+
        '<div class="header_search">'+
                '<div class="header_inner">'+
                    '<div class="site_logo">'+
                        ' <a href="#" target="_blank" class="logo_a">'+
                            '<img title="厦門（アモイ）観光" src="images/logo_lag_jp.png"></a>'+
                    '</div>'+
                    '<div class="site_lag">'+
                        '<div class="lag_con">'+
                            '<a href="http://english.visitxm.com">English</a>'+
                            ' <a href="http://jpn.visitxm.com">日本語</a>'+
                            '<a href="http://kor.visitxm.com">한국의</a>'+
                            '<a href="http://rus.visitxm.com">Русский</a>' +
                        '</div>'+
                        '<div class="site_contact">' +
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        ' <div class="header_nav index clearfix">'+
        '<div class="index_nav_menu">'+
        '<div class="menu_panel">'+
        '<div class="inner clearfix">'+
        ' <ul class="menu_list clearfix">'+
        ' <li class="menu_first  menu_nav " id="sysMenuId1005">'+
        '<a title="アモイにフォーカス" href="javascript:void(0)"    onclick="changMenu(\'index.htm\',\'1005\')" >アモイにフォーカス</a>'+
        '</li>'+
        '<li class="menu_nav" id="sysMenuId1020">'+
        ' <a  title="都市ガイド" href="javascript:void(0)"  onclick="changMenu(\'guide_jp.htm\',\'1020\')">都市ガイド</a>'+
        ' </li>'+
        '<li class="menu_nav" id="sysMenuId1021">'+
        '<a  title="文化イベント活動" href="javascript:void(0)"   onclick="changMenu(\'event_jp.htm\',\'1021\')">文化イベント活動</a>'+
        '</li>'+
        ' <li class="menu_nav" id="sysMenuId1022">'+
        ' <a  title="ドライブガイド" href="javascript:void(0)"   onclick="changMenu(\'drive_jp.htm\',\'1022\')">ドライブガイド</a>'+
        ' </li>'+
        '<li class="menu_nav" id="sysMenuId1024">'+
        ' <a  title="周辺出かける" href="javascript:void(0)"   onclick="changMenu(\'edge_jp.htm\',\'1024\')">周辺出かける</a>'+
        ' </li>'+
        '<li class="menu_nav" id="sysMenuId1023">'+
        '<a title="144時間査証免除(ノービザ)政策" href="javascript:void(0)"   onclick="changMenu(\'144_jp.htm\',\'1023\')">144時間査証免除(ノービザ)政策</a>'+
        ' </li>'+
        ' </ul>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="subnav_wrap_bg" id="subnav_wrap_bg"></div>'+
        '<input type="hidden" value="0" name="tabId">'+
        ' </div>'+
        '</div>'


});

function changMenu(href,sysMenuId) {
    $(".menu_nav").removeClass("selected");
    window.location.href=href+"?sysMenuId="+sysMenuId;


}
function initSelect(sysMenuId) {
   
    if(sysMenuId){
        $("#sysMenuId"+sysMenuId).addClass("selected")
    }

}
