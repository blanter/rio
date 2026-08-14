$(document).ready(function() {
    $(document).on("focus",".elc_string input",function(){
        $(this).parent().addClass("active").removeClass("error");
    });
    $(document).on("blur",".elc_string input",function(){
        if($(this).val()==""){
            $(this).parent().removeClass("active");
        }
    });
    $(document).on("focus",".elc_string textarea",function(){
        $(this).parent().addClass("active").removeClass("error");
    });
    $(document).on("blur",".elc_string textarea",function(){
        if($(this).val()==""){
            $(this).parent().removeClass("active");
        }
    });
    $(document).off("submit",".elc_ajax form");
    $(document).on("submit",".elc_ajax form",function(e){
        e.preventDefault();
        var $that = $(this),
            formData = new FormData($that.get(0)),
            id = $that.parents(".elc_ajax").attr("id");
        $.ajax({
            url: $that.attr('action'),
            type: $that.attr('method'),
            contentType: false,
            processData: false,
            data: formData,
            success: function(data){
                $("#"+id).html($(data).find("#"+id).html());
                let path = $that.attr('action');
                if(path == "/include/popup-sign-up.php"){
                    if(typeof ym !== "undefined") ym(11222836,'reachGoal','appointment_finish');
//location.href = "/success/appointment_finish.php";
                    if(typeof ga !== "undefined") ga('send','event','appointment','appointment_finish');
                    //gtag('event','appointment_finish');
                }
                if(path == "/include/popup-callback.php"){
                    if(typeof ym !== "undefined") ym(11222836,'reachGoal','callback');
                    if(typeof ga !== "undefined") ga('send','event','form','callback');
                    //gtag('event','callback');
                }
                if(path == "/include/popup-connect-leadership.php"){
                    if(typeof ym !== "undefined") ym(11222836,'reachGoal','communication_with_management');
                    if(typeof ga !== "undefined") ga('send','event','form','communication_with_management');
                    //gtag('event','communication_with_management');
                }
                if(path == "/include/popup-doctor-call.php"){
                    if(typeof ym !== "undefined") ym(11222836,'reachGoal','doctor_home');
                    if(typeof ga !== "undefined") ga('send','event','form','doctor_home');
                    //gtag('event','doctor_home');
                }
                if(path == "/include/popup-review.php"){
console.log("review");
                    if(typeof ym !== "undefined") ym(11222836,'reachGoal','response_finish');
console.log("reachGoal review");

}
                if(path == "/include/popup-connect-manager.php"){
                    if(typeof ym !== "undefined") ym(11222836,'reachGoal','patronage');
                    if(typeof ga !== "undefined") ga('send','event','form','patronage');
                    // gtag('event','patronage');
                }
                if(path == "/include/popup-feedback.php"){
                    if(typeof ym !== "undefined") ym(11222836,'reachGoal','form_finish');
                    if(typeof ga !== "undefined") ga('send','event','form','form_finish');
                    //gtag('event','form_finish');
                }
                if(typeof roistat !== 'undefined') { roistat.event.send('form_all'); }
if(typeof ym !== "undefined") ym(11222836,'reachGoal','form_all');
                console.log($that.attr('action'));
            },
            error: function(err){
                console.log(err);
            }
        })
    });
})
