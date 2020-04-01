var findPrime = function (num) {
  var numberList = [];
  var primeList = [];
  var prime = 2;



  for (var i = 2; i <= num; i++) {
    numberList.push(i);
  };

  numberList.forEach(function (numbie) {
    if (numbie % prime === 0) {

    } else {
      primeList.push(numbie)

    }

  });


  return (primeList);

};


// var prime = 2;
// var primeList = [];

// for (prime = 2; prime < num; prime++) {
//   for (var index = 0; index < numberList.length; index++) {
//     if (numberList[index] % prime !== 0) {
//       numberList = numberList.splice(index, 1);
//     }
//   }
// }

// for (prime = 2; prime <= num; prime++) {
//   numberList = numberList.filter(function (number) {
//     if (number % prime !== 0) {
//       return number;
//     }
//   });
// }


$(document).ready(function () {
  $("#userForm").submit(function (event) {
    event.preventDefault();

    var userNumber = parseInt($("#num").val());

    alert(findPrime(userNumber));

  });


});


