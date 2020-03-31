var findPrime = function (num) {
  var numberList = [];

  for (var i = 0; i < num; i++) {
    numberList.push(i);

  };

  return (numberList);

}

$(document).ready(function () {
  $("#userForm").submit(function (event) {
    event.preventDefault();

    var userNumber = parseInt($("#num").val());

    alert(findPrime(userNumber));

  });


});


