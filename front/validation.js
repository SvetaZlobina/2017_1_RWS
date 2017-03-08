$(document).ready(function () {
    $('#login-form-link').click(function (e) {
        $("#login-form").delay(100).fadeIn(100);
        $("#register-form").fadeOut(100);
        $('#register-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
    $('#register-form-link').click(function (e) {
        $("#register-form").delay(100).fadeIn(100);
        $("#login-form").fadeOut(100);
        $('#login-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
    
    $(function () {
        $("#login-form").validate({
            rules: {
                username: {
                    required: true
                },
                password: {
                    required: true
                }
            },
            focusCleanup: true,
            focusInvalid: false,
        });
    });
    $(function () {
        $("#register-form").validate({
            rules: {
                username: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true,
                    minlength: 6
                },
                password2: {
                    required: true,
                    minlength: 6,
                    equalTo: "#password"
                }
            },
            focusCleanup: true,
            focusInvalid: false,
        });
    });
    $("#login-submit").click(function(){
       if($("#login-form").valid()){
           console.log($("#login-form").login);
           const SiteService = window.SiteService;
           const siteService = new SiteService();
           siteService.login($("#login-form").login, $("#login-form").password);
           showInd();
       } 
    });
    $("#register-submit").click(function(){
        if($("#register-form").valid()){
            console.log('on click');
            /*const siteService = new siteService();
            siteService.register($("#register-form").login, $("#register-form").email, $("#register-form").password);*/

            showInd();
        }
    });
});