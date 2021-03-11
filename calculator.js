document.getElementById("hystory").innerHTML="0";
document.getElementById("output").innerHTML="0";

function sethystory(num){
	document.getElementById("hystory").innerHTML=num;
}

function setoutput(num){
	if(document.getElementById("output").innerHTML.length>=11){
		document.getElementById("warning").style.display="block";
	}
	else{
	document.getElementById("output").innerHTML=num;	
	}
}

function geto(){
	return document.getElementById("output").innerHTML;
}

function geth(){
	return document.getElementById("hystory").innerHTML;
}
nuum=document.getElementsByClassName("number");

for(i=0;i<nuum.length;i++){
	nuum[i].addEventListener("click",function(){
		val=geto();
		if(val=="0"){
			setoutput(String(this.innerHTML));
		}
		else{
			setoutput(String(val)+String(this.innerHTML));
		}
		
	})
	
	
}


op=document.getElementsByClassName("operator");
for(i=0;i<4;i++){
	
	op[i].addEventListener("click",function(){
		val=geto();
		if(Number.isFinite(parseInt(val[val.length-1]))){
				setoutput(String(val)+String(this.innerHTML));
		}
		else{
			ans="";
			for(let jj=0;jj<val.length-1;jj++){
				ans=ans+val[jj];
			}
			setoutput(String(ans)+String(this.innerHTML));
			
		}
		
	})
}

op[4].addEventListener("click",function(){
	document.getElementById("output").innerHTML="0";	
	document.getElementById("warning").style.display="none";
})

op[5].addEventListener("click",function(){
	document.getElementById("output").innerHTML=eval(document.getElementById("output").innerHTML);	
	var s=document.getElementById("output").innerHTML;
	if(s.length>11){
		ans="";
		for(var i=0;i<11;i++){
			ans=ans+s[i];
		}
		document.getElementById("output").innerHTML=ans;
	}
	document.getElementById("hystory").innerHTML=document.getElementById("output").innerHTML;
})


