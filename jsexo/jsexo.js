// exo 1 //

var x = 5
 console .log (x)

 // exo 2 //

 var x = 5
 var y = 7
    console .log(x+y)
    console .log(x*y)
    console .log(x-y)
    console .log(x/y)
// exo 3 //
 var x = "coucou petite peruche"
    console .log(x)

// exo 4 //

var x = "coucou"
var y = "petite peruche"
    console .log(x +" "+  y)

// exo 5 //

var x = 5
var y = 6
var z = x
var x = y
var y = z

    console .log(x + " " + y)

// exo 6 //

var a = 20
var b = 30

if (a > b){
    console.log(a)
}
else if (a < b){
    console.log(b)
}

// exo 7 //
 var a = 100
 var b = 15


function comparaison ( x , y ){
    lePlusGrand = "";
    if (x > y){
      lePlusGrand = "x"
    } else if (y > x){
        lePlusGrand = "y"
    } else {
        lePlusGrand = "aucun"
    }
    return lePlusGrand;
}

console.log("le plus grand est "+comparaison(a,b))

// exo 8 //

console.log(Math.random(10,90));

// exo 9 //
console.log ("exo9")
for (var u = 0; u < 10; u++) {
    console.log(Math.floor(Math.random() * 100) + 1);
  }

// exo 10 //
console.log ("exo10")
var u = 0

while (u<90) {
    u = Math.floor(Math.random() * 100) + 1;
    console.log(u)
}

