alert("CONNECTED!")

//exercise1: print all numbers between -10 and 19
var number = -10;

while( number < 20 ){
	console.log( number );
	number++;
}


//exercise2: Print all numbers between 10 and 40
console.log("printing all numbers between 10 and 40")
var a = 10;

while( a < 41 ){
	console.log(a);
    a+=2;
}


//exercise3: Print all odd numbers between 300 and 333

var c = 300;

while( c<334 ){
	//important!!! to judge if it is odd this is not c%2 === 1
	if( c % 2 !== 0){  
		console.log(c);
	
	}
	c++
}
