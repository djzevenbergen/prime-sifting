var findPrime = function (num) {
  var numberList = [];

  for (var i = 2; i <= num; i++) {
    numberList.push(i);
  };

  // for(var i=0; i < numberList.length; i++) {
  //   var prime = i;

  //   for (var n = 0; i <numberList.length; i++) {
  //     if(numberLis)
  //   }
  // }

  var prime = 2;
  var primeList = [];

  for (prime = 2; prime <= num; prime++) {
    numberList = numberList.filter(function (number) {
      if (number % prime !== 0) {
        return number;
      }
    });
  }


  return (numberList);

}

$(document).ready(function () {
  $("#userForm").submit(function (event) {
    event.preventDefault();

    var userNumber = parseInt($("#num").val());

    alert(findPrime(userNumber));

  });


});


