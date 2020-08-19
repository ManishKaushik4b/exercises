let main = function(){
	foo(3)
}

let foo = function(n){
	if (n<1) return;
	else foo(n-1)
	console.log("Hellow World" + n);    
}

main()