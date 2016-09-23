$(document).ready(function () {
    var contacts = []
    var contactIcon = "<i class=\"fa fa-user\" aria-hidden=\"true\">"
    var space = " "
    var sendEmail = "<div class=\"send_email_container\">" + "<span class=\"email_text\">" + "Send E-mail" + "</span>" + "</div>"
    var createHtml = function(object){
        var html = ""
        html += "<li>"
        html += "<span>"
        html += contactIcon + "</i>" + space
        html += "</span>"
        html += "<span>"
        html += object.name + space
        html += object.secondName + space
        html += "</span>"
        html += "|"
        html += "<span>"
        html += object.phoneNumber + space
        html += "</span>"
        html += "|"
        html += "<span>"
        html += object.email + space
        html += "</span>"
        html += "</li>"
        return html
    }
    var checkForm = function(){
        var result = true
        if ($('#first_name').val() == '' || $('#first_name').val() == undefined){
            $('#first_name').addClass("error");
             $('.first-name-error-text').css("visibility", "visible");
              result = false;
         } 
        if ($('#last_name').val() == '' || $('#last_name').val() == undefined){
            $('#last_name').addClass("error");
             $('.last-name-error-text').css("visibility", "visible");
              result = false;
         } 
        if ($('#phone').val() == '' || $('#phone').val() == undefined){
            $('#phone').addClass("error");
             $('.phone-error-text').css("visibility", "visible");
              result = false;
         } 
        if ($('#email').val() == '' || $('#email').val() == undefined){
            $('#email').addClass("error");
             $('.email-error-text').css("visibility", "visible");
              result = false;
         }
        return result
    }
    
    var hideError = function (){
        
    }
    $("#submit-contact").click(function (e) {
        e.preventDefault();
        if (checkForm() == false){
            return
        }
        var contact = {
            name: $('#first_name').val(),
            secondName: $('#last_name').val(),
            phoneNumber: $('#phone').val(),
            email: $('#email').val()
        }
        
         contacts.push(contact)
         
        
        $('#contact-list ul').append(createHtml(contact));
        $('#contact-form form')[0].reset();
    })
    $("#first_name").focus(function(){
        $(this).removeClass('error')
        $("p.first-name-error-text").css("visibility", "hidden")
    })
    $("#last_name").focus(function(){
        $(this).removeClass('error')
        $("p.last-name-error-text").css("visibility", "hidden")
    })
    $("#phone").focus(function(){
        $(this).removeClass('error')
        $("p.phone-error-text").css("visibility", "hidden")
    })
    $("#email").focus(function(){
        $(this).removeClass('error')
        $("p.email-error-text").css("visibility", "hidden")
    })
    
        
    });
                
//click on person icon or email opens new email