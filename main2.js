$(".dan").on("click", function() {
  var target_value = $(event.target).text()
  let oper = ["+","-","*","/"]
  let result = document.getElementById("result")
  if (target_value == "AC") {
    result.value = "0"; 
    console.log("0");
  }
  else if (target_value == "=") {
    result.value = eval(result.value);
  }
  else if (result.value == "0") {
      result.value = target_value;
    }
    else if(result.value.charAt(0) == "0") {
        result.value = result.value.slice(0, 0)
      }
    else if(oper.includes(result.value.slice(-1)) && oper.includes(target_value)) {
       console.log(result.value.slice(0,-1))
     result.value = result.value.slice(0,-1) + target_value
   }
      else{result.value += target_value;
    }
})
