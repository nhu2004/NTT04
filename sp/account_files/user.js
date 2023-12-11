$(document).ready(function(e){
    Address.load('#cityId', '#districtId', '#wardId');
    $('#btnsignin').on('click',function () {
        signin();
    });

    if($('input[name="birthday"]').length) {
        $('input[name="birthday"]').datetimepicker({
            i18n: {
                en: { // English
                    months: [
                        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
                    ],
                    dayOfWeek: [
                        "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
                    ]
                },
            },
            lang: 'en',
            timepicker: false,
            format: 'Y-m-d'
        });
    }
    $(".validate").validationEngine();

    $('.auth-mobile-tab').on('click',function () {
        var t = $(this).attr('href');
        $('.auth-mobile-tab').removeClass('auth-mobile-tab_active');
        $(this).addClass('auth-mobile-tab_active');
        $('.auth__col').addClass('auth__col_mobile-hidden');
        $(t).removeClass('auth__col_mobile-hidden');
    });
    $('#btnsingup').on('click',function () {
        signup();
    });

    $(".edit_content input").keyup (function(){
        $(this).parents('.edit_content').find('button.btn').removeClass('btn_disabled');
    });
    $(".edit_content select").change(function(){
        $(this).parents('.edit_content').find('button.btn').removeClass('btn_disabled');
    });

    var isSubmited = false;
    var $url = $('#url_page').val();
    $("#information-form").validationEngine({
        scroll: false, binded: false, showOneMessage: true,
        onValidationComplete: function (form, status) {
            if (status && !isSubmited) {
                isSubmited = true;
                AppAjax.post(
                    '/profile/ajaxedit',
                    {
                        'fullName': $('input[name="fullName"]').val(),
                        'birthday': $('input[name="birthday"]').val(),
                        'email': $('input[name="email"]').val(),
                        'address':$('input[name="address"]').val(),
                        'cityLocationId':  $('select[name="cityId"]').val(),
                        'districtLocationId':  $('select[name="districtId"]').val(),
                        'wardLocationId':  $('select[name="wardId"]').val(),
                    },
                    function(rs){
                        if (rs.code == 1) {
                            showAlertModal('Lưu thông tin thành công !');
                            setTimeout(function () {
                                window.location.href = $url;
                            }, 2000);
                        } else {
                            isSubmited = false;
                            showAlertModal(rs.message);
                        }
                    }
                );
            }
        }
    });

});

function showAlertModal(msg) {
    $('#alertModal .modal-body').html(msg);
    $('#alertModal').modal('show');
}
function signin() {
    if($("#formAcount").validationEngine('validate')){
        AppAjax.ajax({
            type: "POST",
            data: $("#formAcount").serialize(),
            cache: false,
            dataType: 'json',
            url: "/user/ajaxsignin",
            success: function(rs) {
                if(rs.code){
                    window.location.href = '/';
                }
                else if(rs.message['username'] != undefined){
                    alert(rs.message['username']);
                }
                else if(rs.message['email'] != undefined){
                    alert(rs.message['email']);
                } else {
                    alert(rs.message);
                }
            }
        });
    }
}
function signup(){
    if($("#form_account").validationEngine('validate')) {
        AppAjax.ajax({
            type: "POST",
            data: {
                'fullName': $("#form_account input[name='firstName']").val() + ' ' + $("#form_account input[name='lastName']").val(),
                'birthday': $("#form_account input[name='birthday']").val(),
                'email': $("#form_account input[name='email']").val(),
                'password': $("#form_account input[name='password']").val(),
                'mobile':$('#form_account input[name="mobile"]').val(),
            },
            cache: false,
            dataType: 'json',
            url: "/user/ajaxsignup",
            success: function (rs) {
                var $email = $('#email').val();
                if (rs.code || validateEmail($email)) {
                    $("#formAcount input[type='text'], #formAcount input[type='password']").val('');
                    alert('Bạn đã đăng ký thành công');
                    window.location.href = '/user/login';
                } else {
                    alert('Email đã tồn tại. Vui lòng kiểm tra lại!');
                }
            }
        });
    }
}