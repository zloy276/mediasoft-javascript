function f1(){
	var1=prompt("Введите пример")
	if (var1) {
	src(var1);
	}
	else f2();
}

function f2(){
	var1=prompt("Произошла какая-то ошибка.Введите пример еще раз.")
	if (var1) {
	src(var1);
	}
	else f2();
}

function src (){
	if(var1.indexOf('+')!=-1){
		res=var1.split('+');
		plus(res);
	}
	else if (var1.indexOf('-')!=-1){
		res=var1.split('-');
		minus(res);
	}
	else if (var1.indexOf('*')!=-1){
		res=var1.split('*');
		umn(res);
	}
	else if (var1.indexOf('/')!=-1){
		res=var1.split('/');
		razd(res);
	}
	else f2();

}
function plus(res){
	a=Number(res[0]);
	b=Number(res[1]);
	alert(a+b);
	f1(); 
}
function minus( res){
	alert(res[0]-res[1]); 
    f1(); 
  
}
function umn( res){
    alert(res[0]*res[1]);
    f1();     
}
function razd( res){
    alert(res[0]/res[1]);
    f1(); 

}   
let var1,res,a,b;
f1();
