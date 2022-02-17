$(document).ready(function(){
    $("button").click(function(){
    if(parseInt($("#uno").val())>parseInt($("#dos").val())){            
        $("div").animate({left:"250px"},4000);
        capaResultado.textContent="El numero A es mayor que el numero B";
                 
    }
    else if(parseInt($("#uno").val())<parseInt($("#dos").val())){  
        $("div").animate({bottom:"250px"},4000);
        capaResultado.textContent="El numero A es menor que el numero B";          
    }
    else{
        capaResultado.textContent="Los numeros son iguales";
    }
  $("div").hide(0);
  setTimeout("location.reload(true);", 4500);
});
});  