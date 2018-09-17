$(document).ready(function () {
    
    $('.alert').addClass('show');
    
    $.ajax({
        url:'scripts/data.json',
        dataType:'json',
        success:function(data){
            $.each(data, function(index, element) {
                console.log(element);
                $('.box-'+index+' .legend > p').html(element.txt);
                $('.box-'+index+' .legend button > p').html(element.btn);
                $('.box-'+index+' .status').html("<img class='"+element.iconClass+"' src='assets/"+element.icon+"' alt='icon'>");
            });        
        }
    });
    
    $('button').click(function(){
        alert("Great! Let's go!");
    })

});