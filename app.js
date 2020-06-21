// MUHAMMAD FAIZAN KHAN
// WM7588

//Chapter 21-25
//1
var firstNameIs= prompt("Enter Your First Name");
var lastNameIs = prompt("Enter Your Last Name");
var fullName = firstNameIs + " " + lastNameIs;
document.write(fullName);

//2
var mobileM = prompt("Enter favorite mobile phone model");
var lengthOfMobileMl = mobileM.length;
document.write("My Favourite phone  is : " + mobileM + "</br> ")
document.write("Length of string: " + lengthOfMobileMl);

//3
var wordForFind= "Pakistani";
var findCharacterWord = wordForFind.indexOf("n");
document.write("String : " + wordForFind + "<br>");
document.write("Index of 'n': " + findCharacterWord)

//4
var wordForFind = "Hello World";
var findCharacterL = wordForFind.lastIndexOf("l");
document.write("String: " + wordForFind + "<br>");
document.write("Index of 'l': " + findCharacterL);

//5
var wordPK = "Pakistan";
var findIndexAT = wordPK.charAt(3);
document.write("String: " + wordPK + "<br>");
document.write("Character at Index '3': " + findIndexAT);

//6
var yourFName = prompt("Enter First Name");
var yourLName = prompt("Enter Last Name");
var fullName = yourFName.concat(" ", yourLName);
document.write(fullName)

//7
      var cityWantR = "Hyderabad"
      var cityWantToReplace = cityWantR.slice(0, 5).replace("Hyder", "Islam");
      var CityEndP = cityWantR.slice(5)
      document.write("City: " + cityWantR + "<br>");
      document.write("After Replacement: " + cityWantToReplace + CityEndP);

//8
var messageFR = "Ali and Sami are best friends. They play cricket and football together.";
var RPM = messageFR.replace(/and/g, "&");
document.write(RPM);

      //9
var numberForMeasure = "472";
document.write("Value: " + numberForMeasure + "<br>");
document.write("Type: " + typeof(numberForMeasure) + "<br>")
document.write("Value: " + numberForMeasure + "<br>");
document.write("Type: " + typeof(parseInt(numberForMeasure)))


//10
var thingsFU = "peanuts"
var toUpperCase = thingsFU.toUpperCase();
document.write("User Input: " + thingsFU + "<br>");
document.write("Upper case: " + toUpperCase)

//11
var thingsFU = "javascript";
var capitalFirst = thingsFU.slice(0, 1).toUpperCase();
var otherLetter = thingsFU.slice(1);
document.write("User Input : " +thingsFU + " <br>")
document.write("Title Case: "  + capitalFirst + otherLetter)


//12
var num = 35.36;
var removeDotting = num.toString().replace(".", "");
document.write("Number: " + num + "<br>")
document.write("Result: " + removeDotting);


    // 13
    var userNameFor = prompt("Enter username");

    for (let i = 0; i < userNameFor.length; i++) {
        if (userNameFor.charCodeAt(i) == 33 || userNameFor.charCodeAt(i) == 44 || userNameFor.charCodeAt(i) == 46 || userNameFor.charCodeAt(i) == 64) {
            alert("Please enter a valid username");
        }
    }
    
    //14
    var itemsForFind = ["cake", "apple pie", "cookie", "chips", "patties"];
    var checkFind = prompt("Enter item to check");
    var checkSmallLetter = checkFind.toLowerCase();
    
    if (itemsForFind.indexOf(checkSmallLetter) != -1) {
        document.write(checkSmallLetter + " is " + "<b>available</b>" + " at index " + itemsForFind.indexOf(checkSmallLetter) + " in our bakery");
    } else {
        document.write("We are sorry. " + checkSmallLetter + " is " + "<b>not available</b> " + " in our bakery");
    }

            //15
var passwordForCheck = prompt("Enter a password");

if (passwordForCheck.charCodeAt(0) >= 48 && passwordForCheck.charCodeAt(0) <= 57) {
    document.write("Password not start number <br>")
}

if (passwordForCheck.length < 6) {
    document.write("It must at least 6 characters long")
}

//16
  var universityForRow = "University of Karachi";
  var arrayForSplit = universityForRow.split('')

for (let i = 0; i < arrayForSplit.length; i++) {
document.write(arrayForSplit[i] + "<br>")
}
// 17
var countryForFind = "Pakistan";
var lastIndexForFind = countryForFind.charAt(countryForFind.length - 1)
document.write("User Input: " + countryForFind + "<br>")
document.write("Last character of input: " + lastIndexForFind)

// 18
var sentence = "the quick brown fox jumps over the lazy dog";
var counting = sentence.match(/the/g || []).length;
document.write("Text : " + sentence + " <br>")
document.write("There are " + counting + " occurrence(s) of word 'the'")


//chapter 26-30

     //1
     var positiveNumber = 3.145214;
    document.write("number: " + positiveNumber + "<br>")
    document.write("round off value: " + Math.round(positiveNumber) + "<br>")
    document.write("floor value: " + Math.floor(positiveNumber) + "<br>")
    document.write("ceil value: " + Math.ceil(positiveNumber) + "<br>")

    //2
    var negativeNumber = -2.376;
    document.write("number: " + negativeNumber + "<br>")
    document.write("round off value: " + Math.round(negativeNumber) + "<br>")
    document.write("floor value: " + Math.floor(negativeNumber) + "<br>")
    document.write("ceil value: " + Math.ceil(negativeNumber) + "<br>")
//3
document.write("The absolute value of -4 is " + Math.abs(-4))
// 4
document.write("random dice value: " + Math.floor(Math.random() * 7))

//5
var tossing = Math.floor(Math.random() * 3);

document.write(tossing + "<br>")
if (tossing == 1) {
    document.write("random coin value: Heads")
} else if (tossing == 2) {
    document.write("random coin value: Tails")
}

//6
document.write("random number between 1 to 100: " + Math.floor((Math.random() * 100) + 1))

//7
var number = prompt("Enter your weight in kilogram")
var convertInt = parseFloat(number);
document.write("The weight of user is " + convertInt + " kilograms")

  // 8
  var secretN = Math.floor((Math.random() * 10) + 1)
  var checking = prompt("Enter secret number")

  if (secretN == checking) {
      document.write("congratulate the user")
  } else {
      document.write("Try again! Number is " + secretN)
  }
 //chapters 31-34
     //1
     var datePresent = new Date();
    document.write(datePresent)

      //2
      var currentDate = new Date();
      var monthsAll = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      document.write("Current month: " + monthsAll[currentDate.getMonth()])

        //3

        var dateCurrent = new Date();
        var daysCurrent = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        alert("Today is " + daysCurrent[dateCurrent.getDay()].slice(0, 3))
   //4
   var datingNow = new Date();
   if (datingNow.getDay() == 0 || datingNow.getDay() == 6) {
       document.write("It’s Fun day")
   }

   //5
   var dateMethod = new Date();
   if (dateMethod.getDay() < 16) {
       document.write("First fifteen days of the month")
   } else {
       document.write("Last days of the month")
   }
// 6
var dateToday = new Date();
document.write("Current Date: " + dateToday + "<br>")
document.write("Elapsed milliseconds since January 1, 1970: " + dateToday.getTime() + "<br>")
document.write("Elapsed minutes since January 1, 1970: " + dateToday.getTime() / 60000)

// 7
var dateToday = new Date();
if (dateToday.getHours() >= 0 && dateToday.getHours() < 12) {
    document.write("Its AM")
} else {
    document.write("Its PM")
}

// 8
var laterDate = new Date("31/June/2020");
document.write(laterDate)


   // 9
   var startingDate = new Date("June 18, 2015");
   var currentDating = new Date();
   var totalDaysIn = currentDating - startingDate;
   document.write(Math.round(totalDaysIn / 1000 / 60 / 60 / 24) + " days have past since 1st Ramadan, 2015")


 
   // 10
var endingDate = new Date("December 5, 2015");
var startingDate = new Date("January 1, 2015");
var totalSecondsIn = endingDate - startingDate;
document.write("On reference date " + endingDate + "<br>")
document.write(totalSecondsIn / 1000 / 60 + " seconds had passed since beginning of 2015")

// 11
var currentDateOfDay = new Date();
var hoursAhead= new Date(currentDateOfDay.getTime() + 60 * 60 * 1000)
document.write("current date: " + currentDateOfDay + "<br>")
document.write("1 hour ago, it was : " + hoursAhead + "<br>")

// 12
var currentDateOfDay = new Date();
document.write("current date: " + currentDateOfDay + "<br>")
currentDateOfDay.setFullYear(currentDateOfDay.getFullYear() - 100);
document.write("100 years back it was : " + currentDateOfDay + "<br>")


// 13
var age = prompt("Enter your age")
var DateCurrent = new Date();
dateCurrent.setFullYear(dateCurrent.getFullYear() - parseInt(age))
document.write("Your Age: " + age + "<br>")


// 14
var numberOfUnitsPerMonth = 410;
var chargePerUnitInMonth = 16;
var netAmounting = numberOfUnitsPerMonth * chargePerUnitInMonth;
var latePaymenting = netAmounting + 350

document.write("<h1>K-Electric Bill</h1><br>")
document.write("Customer Name: <b>ABC Customer</b><br>")
document.write("Month: <b>Feburary</b><br>")
document.write("Number of units: <b>" + numberOfUnitsPerMonth + "</b><br>")
document.write("Charges per unit: <b>" + chargePerUnitInMonth + "</b><br><br>")
document.write("Net Amount Payable (with Due Date): <b>" + netAmounting + "</b><br>")
document.write("Late payment surcharge: <b>" + 350 + "</b><br>")
document.write("Gross Amount Payable (after Due Date): <b>" + latePaymenting + "</b><br>")


 //chapter 35-38
    //1
    function currentDateOfDay() {
        var currentDateOfDay = new Date();
        return currentDateOfDay;
    }
    
    document.write(currentDateOfDay())


   // 2
function fullNameOfUser(firstName, lastName) {
    var fullNameOfUser = firstName + " " + lastName
    return fullNameOfUser;
}

document.write("Hi " + " " + fullNameOfUser("Muhammad", "Faizan"))


// 3
function sumOfNumbers(number1, number2) {
    var totalOfNumbers = parseInt(number1) + parseInt(number2);
    return totalOfNumbers
}

number1 = prompt("Enter first number")
number2 = prompt("Enter second number")
document.write(sumOfNumbers(number1, number2))

// 4
function calculator(number1, number2, operator) {
    var resultOfSum;

    if (operator == "+") {
        resultOfSum = parseInt(number1) + parseInt(number2);
        return resultOfSum;
    } else if (operator == "-") {
        resultOfSum = parseInt(number1) - parseInt(number2);
        return resultOfSum;
    } else if (operator == "*") {
        resultOfSum = parseInt(number1) * parseInt(number2);
        return resultOfSum;
    } else if (operator == "/") {
        resultOfSum = parseInt(number1) / parseInt(number2);
        return resultOfSum;
    }
}

document.write(calculator(4, 5, "+") + "<br>")
document.write(calculator(22, 5, "-") + "<br>")
document.write(calculator(22, 5, "*") + "<br>")
document.write(calculator(633, 5, "/") + "<br>")  


// 5
function squares(number) {
    return parseInt(number) * parseInt(number);
}

document.write(squares(4))


// 6
function factorial(number) {
    if ((parseInt(number) === 0)) {
        return 1;
    } else {
        return parseInt(number) * factorial(parseInt(number) - 1);
    }
}

document.write(factorial(3))

 // 7
 function counting(firstNum, secondNum) {
    var answer = 0;

    for (var i = firstNum; i <= secondNum; i++) {
        answer += i;
    }

    return answer;
}

document.write(counting(1, 10))

// 8
function calculateSquare(number) {
    return parseInt(number) * parseInt(number);
}

function calculateHypotenus(base, per) {
    var hyp1;
    var base1 = calculateSquare(base);
    var per1 = calculateSquare(per);
    return hyp1 = Math.sqrt(base1 + per1);
}
document.write(calculateHypotenus(5, 4))

// 9
 //i
 function rectangleShape1(height, width) {
    return parseInt(height) * parseInt(width);
}
document.write(rectangleShape1(2, 4) + " <br>")
//ii
function rectangleShape2(height = 3, width = 3) {
    return parseInt(height) * parseInt(width);
}

document.write(rectangleShape2())

//10
function palindrome(sentence) {
    var lengthOfSentence = sentence.length;
    var midPoint = Math.floor(lengthOfSentence / 2);

    for (var i = 0; i < midPoint; i++) {
        if (sentence[i] !== sentence[lengthOfSentence - 1 - i]) {
            return false;
        }
    }
    return true;
}

document.write(palindrome("madam"))

//10
function palindrome(sentence) {
    var lengthOfSentence = sentence.length;
    var midPoint = Math.floor(lengthOfSentence / 2);

    for (var i = 0; i < midPoint; i++) {
        if (sentence[i] !== sentence[lengthOfSentence - 1 - i]) {
            return false;
        }
    }
    return true;
}

document.write(palindrome("madam"))

// 11
function CapitalLetterFirst(sentence) {
    return sentence.toLowerCase().split(' ').map(function(capitalLetter) {
        return capitalLetter.replace(capitalLetter[0], capitalLetter[0].toUpperCase());
    }).join(' ');
}

document.write(CapitalLetterFirst("the quick brown fox"));

// 12
function getLongWord(sentence) {
    var s = sentence.split(" ");
    var longestW = 0;
    var wordExchange;
    for (var i = 0; i < s.length - 1; i++) {
        if (longestW < s[i].length) {
            longestW = s[i].length;
            wordExchange = s[i];
        }
    }
    return wordExchange;
}

document.write(getLongWord("Web Development Tutorial"))


 
// 13
function countGet(wordList, letterForFind) {
    var letterCounting = 0;
    for (var i = 0; i < wordList.length; i++) {
        if (wordList.charAt(i) == letterForFind) {
            letterCounting += 1;
        }
    }
    return letterCounting;
}

document.write(countGet('JSResourceS.com', 'o'));


// 14
function calcCircumference(radiusForFind) {
    return 2 * Math.PI * parseInt(radiusForFind);
}

function calcArea(radiusForFind) {
    return Math.PI * parseInt(radiusForFind) * parseInt(radiusForFind);
}

document.write("The circumference is " + calcCircumference(3) + "<br>")
document.write("The area is " + calcArea(3))

