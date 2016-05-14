// Fizz Buzz
for (var n = 1; n <= 100; n++) {
  var output = "";

  if (n % 5 == 0 && n % 3 == 0 )
    output += "FizzBuzz";

   else  if (n % 3 == 0)
    output += "Fizz";

 else  if (n % 5 == 0)
    output += "Buzz";

  console.log(output || n);
}

// triangle
for (var i =' #' ; i.length < 8; i += '#') {
    console.log(i);
} 

// chess field ( my way ) - MAKE THIS A FUNCTION learnign from the next chapter

for (var i = 1; i <= 8; i++) {

    output = "";

    for (var j = 1; j <=8; j++) {

if ( i % 2 == 0) {
        if (j % 2 == 0 ) {
                output += '#';
            }
        else {
            output += ' ';    
            }
 }
 
 else {
      if (j % 2 == 0 ) {
                output += ' ';
            }
        else {
            output += '#';    
            }
 }          
    }
            console.log(output);    
}   

// na njiihov nacin

for (var i = 1; i <=  8; i++) {
    ko = '';
    for (var j = 1 ; j <= 8; j++) {
        if ((i+j) % 2)  {
            ko += '#';
        }
        else {
            ko += '0';
        }
    }
        console.log(ko);
        }