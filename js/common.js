
$(document).ready(function(){
    function closeHamburgerMenu() {
        $('#hamburger-menu').hide();
        $('.nav-bar').show();
    }
    $('#hamburger-menu-icon').click(function() {
        $('#hamburger-menu').show();
        $('.nav-bar').hide();
    });
    $('#hamburger-close-btn').click(function() {
        closeHamburgerMenu();   
    });
    $('.hamburger-menu-link').click(function() {
        closeHamburgerMenu();
    });
});