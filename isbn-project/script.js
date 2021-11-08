

function getISBN(){
    var quotient;
    n = document.forms["myForm"]["sendISBN"].value;
    const arrayOfDigits = Array.from(String(n), Number);
    sum = 0;
    for (let count = 0; count < arrayOfDigits.length; count++) {
        sum += (arrayOfDigits[count] * (count + 1));
        quotient = sum % (count+1);
    }

    if (arrayOfDigits.length > 10) {
        var msg = "ERROR: entered value is too large";
    } else if (arrayOfDigits.length < 10) {
        msg = "ERROR: entered value is too small";
    } else {
        msg = "Sum: " + sum + "\nQuotient: " + quotient + "\nThe ISBN-10 number you entered is valid.";
    }
    document.getElementById("h4-name").innerHTML = msg;
}
















