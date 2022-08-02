$(".dan").on("click", function() {
  var target_value = $(event.target).text()
  let result = document.getElementById("result")
  if (target_value == "AC") {
    result.value = "0"; 
    console.log("0");
  }
  else if (target_value == "=") {
    result.value = eval(result.value);
  }   
    if (result.value == "0") {
      result.value = target_value;
    } 
    else {
      if (result.value.charAt(0) == "0") {
        result.value = result.value.slice(0, 0)
      }
      result.value += target_value;
    }
  }
)

function countup()
{
  sec +=1;
  
  if (sec >10){
    sec = 0;
    min += 1;
  }
  
  if(min >59){
    min = 0;
    hour +=1;
  }
  
  //ume
  sec_number = ('0' + sec).slice(-2);
    min_number = ('0' + min).slice(-2);
    hour_number = ('0' + hour).slice(-2);

    $('#clock').html(hour_number + ':' +  min_number + ':' + sec_number);
  }
  
});

