
Vue.component('common-head',{
    template:'<div>'+
        '<div class="header_search">'+
                '<div class="header_inner">'+
                    '<div class="site_logo">'+
                        ' <a href="#" target="_blank" class="logo_a">'+
                            '<img title="샤먼 여행" src="images/logo_lag_jp.png"></a>'+
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
        ' <li class="menu_first  menu_nav " id="sysMenuId1025">'+
        '<a title="하문에 초점을 모음" href="javascript:void(0)"    onclick="changMenu(\'index.htm\',\'1025\')" >하문에 초점을 모음</a>'+
        '</li>'+
        '<li class="menu_nav" id="sysMenuId1026">'+
        ' <a  title="도시 안내" href="javascript:void(0)"  onclick="changMenu(\'guide_kr.htm\',\'1026\')">도시 안내</a>'+
        ' </li>'+
        '<li class="menu_nav" id="sysMenuId1027">'+
        '<a  title="문화경축행사" href="javascript:void(0)"   onclick="changMenu(\'event_kr.htm\',\'1027\')">문화경축행사</a>'+
        '</li>'+
        ' <li class="menu_nav" id="sysMenuId1028">'+
        ' <a  title="자체 운전 지침" href="javascript:void(0)"   onclick="changMenu(\'drive_kr.htm\',\'1028\')">자체 운전 지침</a>'+
        ' </li>'+
        '<li class="menu_nav" id="sysMenuId1029">'+
        ' <a  title="주변 관광" href="javascript:void(0)"   onclick="changMenu(\'edge_kr.htm\',\'1029\')">주변 관광</a>'+
        ' </li>'+
        '<li class="menu_nav" id="sysMenuId1030">'+
        '<a title="144시간 경유 비자면제 정책" href="javascript:void(0)"   onclick="changMenu(\'144_kr.htm\',\'1030\')">144시간 경유 비자면제 정책</a>'+
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
