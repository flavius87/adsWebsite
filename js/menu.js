const menu = document.getElementById('menu');
const menuClose = document.getElementById('menuClose');

function myMenu() {
    if(menu.classList.contains('menuOpen')){
        menu.classList.remove('menuOpen')
    }else{
        menu.classList.add('menuOpen');
    }
}

menuClose.addEventListener('click', function(){
    if(menuClose.classList.contains('menuClose')){
        menuClose.classList.remove('menuClose')
    }else{
        menuClose.classList.add('menuClose');
    }
})

function onNav(url){
    navigation.navigate('#' + url);
    menuClose.classList.remove('menuClose');
    menu.classList.remove('menuOpen');
}