$(document).ready(function () {
    var contacts = []
    var space = " "
    var closeSpan = "</span>"
    var sendEmail = "<span class=\"email_text\">" + "Send E-mail" + "</span>" + "</div>"
    var trashIcon = "<i class=\"fa fa-trash-o\" aria-hidden=\"true\">" + "</i>"
    var createHtml = function(object){
        var html = ""
        var contactIcon = "<a href=\"mailto:" + object.email + "\">" +  "<i class=\"fa fa-user\" aria-hidden=\"true\">" + "</i>" + "</a>"
        html += "<li>"
        html += contactIcon + space
        html += "<span>"
        html += object.name + space
        html += object.secondName + space
        html += closeSpan
        html += "|"
        html += "<span>"
        html += object.phoneNumber + space
        html += closeSpan
        html += "|"
        html += "<span>"
        html += object.email + space
        html += closeSpan
        html += trashIcon
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
    
   $( "body" ).delegate( ".fa-trash-o", "click", function() {
  $( this ).parent().remove();
       
});
    
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