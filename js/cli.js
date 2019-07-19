$(document).ready(function(){
    $.get("http://ozansz.pythonanywhere.com/q/list/", function(data){
        data.forEach(element => {
            $("#ans-ul").append("<li class=\"ans-li\"><p>"+element.question_text+"</p><p>"+element.answer_text+"</p><p>"+element.sender_name+"&nbsp;&nbsp;&nbsp;<span>"+element.sender_school+"</span></p></li>")
        });
        console.log(data)
    })
})
