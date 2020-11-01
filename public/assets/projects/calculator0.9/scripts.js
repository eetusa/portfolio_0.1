// init
let display = "off";
let power = 0;
let logging = 1;
let openparent = 0;
let dot = 0;
let result = "null";
let gotresult = 0;


printDisplay(display);

{
document.getElementById('calc_num1').addEventListener("click", function(){  
    setChar("1");
});

document.getElementById('calc_num2').addEventListener("click", function(){ 
    setChar("2");
});
  
document.getElementById('calc_num3').addEventListener("click", function(){
    setChar("3");
});

document.getElementById('calc_num4').addEventListener("click", function(){ 
    setChar("4");
});
  
document.getElementById('calc_num5').addEventListener("click", function(){
    setChar("5");
});
  
document.getElementById('calc_num6').addEventListener("click", function(){
    setChar("6");
});
  
document.getElementById('calc_num7').addEventListener("click", function(){
    setChar("7");
});
  
document.getElementById('calc_num8').addEventListener("click", function(){
    setChar("8");
});
  
document.getElementById('calc_num9').addEventListener("click", function(){
    setChar("9");
});
    
document.getElementById('calc_num0').addEventListener("click", function(){
    setChar("0");
});
	
	document.getElementById('calc_dot').addEventListener("click", function(){
		if (dot==0){
			dot=1;
    	setChar(".");
		}
});

} // eventListeners for numbers

{
document.getElementById("calc_power").addEventListener("click",function(){
togglePower();

  document.getElementById("calc_display_content").innerHTML =display;
});

document.getElementById("calc_parent_open").addEventListener("click",function(){
    setChar("(");  
});

document.getElementById("calc_parent_close").addEventListener("click",function(){
    if (openparent>0){
      if (prevChar(display)!="("){
        setChar(")");  
      }
    }

});

document.getElementById("calc_sum").addEventListener("click",function(){
  setOperand("+");
});

document.getElementById("calc_minus").addEventListener("click",function(){
  setOperand("-");
});

document.getElementById("calc_divide").addEventListener("click",function(){
  setOperand("%");
});

document.getElementById("calc_multiply").addEventListener("click", function(){
  setOperand("x");
});

document.getElementById("calc_log").addEventListener("click", function(){
  setOperand("L(");
});

document.getElementById("calc_ln").addEventListener("click", function(){
  setOperand("l(");
});

document.getElementById("calc_exp").addEventListener("click", function(){
  setOperand("^");
});

document.getElementById("calc_square").addEventListener("click", function(){
  setOperand("^2");
});

document.getElementById("calc_delete").addEventListener("click",function(){
  backspace(display);
});

document.getElementById("calc_squareroot").addEventListener("click",function(){
  setOperand("S(");
});

document.getElementById("calc_result").addEventListener("click",function(){
	if (openparent!=0){
		alert("Close parenthesis")
	}else{
			gotresult = 0;
			result = calculateResult(display);
			printDisplay(result);
		  gotresult = 1;
			printLog("");
  		console.log("Result: "+ result);
			display = result;
			ans = result;
	}
});
} // eventListeners for functionals


// func calculateResult(str) calculates input string (ie. "2+2"=4)
// calculates result of str by dividing the str into sections
// using calculation orders as rules and summons itself recursively on those secitons
// uses Math.library for operations
// example how function handles input str "a + (2*(b*c)) + d*e".
//
// SECTION0.0: a+(2*(b*c))+d*e         
// SECTION1.1: [ (2*(b*c)) ] -> 2*(b*c)             
// SECTION1.2: [ (b*c) ] -> b*c = r -> 
// SECTION1.1: [ (2*(b*c)) => 2*r = x ] -> 
// SECTION0.0: a+(2*b(b*c))+d*e => a+x+d*e
// SECTION2.1: [ d*e ] -> y=d*e -> 
// SECTION0.0: a+x+d*e => a+x+y 
// SECTION3.1: [ a+x ] -> z=a+x ->
// SECTION0.0: a+x+y => z+y = result 
function calculateResult(str){ 
  if (power){
		
    let temp = str;
    let section;

		if (temp.indexOf("NaN")>-1){ // A way to somewhat handle NaN
			printLog("NaN");
			return "NaN";
		}

		let next_char="a"; // failsafe if next_char doesn't get defined
		
		temp = placeX(temp); // places the multiply marks and zeroes in eg '3(.5)' -> '3x(0.5)'
// Next 4 loops go through input in calculation order
// parenthesis > exponent & ln & log & sqrt > multiply & divide > sum & minus
// loops call the function recursively if they find a section they can calculate
		
// PARENTHESIS
    for (let i = 0; i < temp.length; i++){ 
			temp = deleteDoubleMinus(temp);		
			
      if (temp[i]=="("){
				
        if (i+getSection(temp,i).length < temp.length ){
					 next_char = temp[i+getSection(temp,i).length];
		
			}
				
        section = getSection(temp,i);
    
        section = section.slice(1,section.length-1);
        printLog({temp, section},"remove parenthesis");
				
        if (i==0){
					if (isNumber(next_char)){
						
					 	
        	} else{
          
          	temp = temp.slice(0,i) + calculateResult(section) + temp.slice(i+section.length+2);
					}
        } else if (isNumber(temp[i-1])){
        
				} else if (isNumber(next_char)){
				
				
				
        } else{
      
          temp = temp.slice(0,i) + calculateResult(section) + temp.slice(i+section.length+2);
        }
        
        i=0;   
      }
    } 
			
// EXPONENT & LN & LOG & SQRROOT
     for (let i = 0; i < temp.length; i++){ // ^ log ln sqrt
				
		temp = deleteDoubleMinus(temp);				
        let tempvalue = "";
  			
        
        section = getSection(temp,i);
        let s_length = section.length;
			 
        
			 
        section = section.slice(1);
        if (temp[i]=="^"){
					tempvalue = getNumberFromOperator(temp,i,0);
					printLog({temp},{section},"^");

          temp=temp.slice(0,i-tempvalue.length)+Math.pow(tempvalue,calculateResult(section))+""+temp.slice(i+s_length);
          
          
        } else if (temp[i]=="S"){ // SQRT
         	printLog({temp, section},"\u221a");
          if(i!=0){
            if (isNumber(temp[i-1])){                 
               
            }
              temp=temp.slice(0,i)+Math.sqrt(calculateResult(section))+""+temp.slice(i+s_length);  
          } else{
            temp=temp.slice(0,i)+Math.sqrt(calculateResult(section))+""+temp.slice(i+s_length);  
          }
        } else if (temp[i]=="L"){ //LOG
					printLog({temp, section},"log");
          if(i!=0){
            
            if (isNumber(temp[i-1])){     
              
              
            } else{
              temp=temp.slice(0,i)+Math.log10(calculateResult(section))+""+temp.slice(i+s_length);  
            }
          } else{
          
          temp=temp.slice(0,i)+Math.log10(calculateResult(section))+""+temp.slice(i+s_length);  
          }
        }else if (temp[i]=="l"){ //ln
					printLog({temp, section},"ln");
          if(i!=0){
            
            if (isNumber(temp[i-1])){     
             
              
            } else{
              temp=temp.slice(0,i)+Math.log(calculateResult(section))+""+temp.slice(i+s_length);  
            }
          } else{
          
          temp=temp.slice(0,i)+Math.log(calculateResult(section))+""+temp.slice(i+s_length);  
          }
        } // ^ sqrt lg ln
        
        
        
      }  
        	
 // MULTIPLY DIVIDE
     for (let i = 0; i < temp.length; i++){ // multiply
			 temp = deleteDoubleMinus(temp);		
     
      if (temp[i]=="x"){
       	
        let section;
        let index = i;
        let a = "";
        let b = "";
        
        
					b = getNumberFromOperator(temp,index,1);
					a = getNumberFromOperator(temp,index,0);
     
        section = a*b;
				printLog({temp, section, a ,b}, "*");
				
        temp = temp.slice(0,index-(a.length))+section+temp.slice(index+b.length+1);
        temp = calculateResult(temp);
      }
			 
			if (temp[i]=="%"){
       	
        let section;
        let index = i;
        let a = "";
        let b = "";
        
					b = getNumberFromOperator(temp,index,1);
					a = getNumberFromOperator(temp,index,0);
     
        section = a/b;
				printLog({temp, section, a ,b}, "/");
				
        temp = temp.slice(0,index-(a.length))+section+temp.slice(index+b.length+1);
        temp = calculateResult(temp);
      }
			 
			 
     }

 // SUM MINUS 
     for (let i = 0; i < temp.length; i++){ //sum minus
			 temp = deleteDoubleMinus(temp);		
// SUM
      if (temp[i]=="+"){
				
        let section;
        let index = temp.indexOf("+");
        let a = "";
        let b = "";
        
        
					b = getNumberFromOperator(temp,index,1);
					a = getNumberFromOperator(temp,index,0);
 
        section = sum(a,b);
				printLog({temp, section,a,b},"+");
        temp = temp.slice(0,index-(a.length))+section+temp.slice(index+b.length+1);
        temp = calculateResult(temp);
      }

// MINUS
      if (temp[i]=="-"){
				
        let section;
        let index = i;
        let a = "";
        let b = "";
				
				if (index==0 & temp.length>1){
					if (temp[index]=="-" && temp[index+1]=="-"){
						printLog({temp},"double minus");
						temp = temp.slice(2);
						
					}
				}
        
				if (index!=0){
					if (index==temp.length-1 && temp[index]=="-"){
						return "error";
					}
								 	
					b = getNumberFromOperator(temp,index,1);
					a = getNumberFromOperator(temp,index,0);
				
					
					section = a - b;
					printLog({temp, section,a,b},"-");
					//alert("temp: "+temp+ " i: "+i+" temp[i]: "+temp[i] + " a: "+a+" b: "+ b+" section: "+section);

        
					//alert("temp:"+temp +"| setti:"+ temp.slice(0,index-numberLength(a)) +"| section:"+section + "|  last:"+temp.slice(index+numberLength(b)+1));
       
        	//alert(a+' : '+b + ' section: ' + section);
        	temp = temp.slice(0,index-(numberLength(a))) + section + temp.slice(index+numberLength(b)+1);
					//alert(temp);
        	temp=calculateResult(temp);
										
      	}
		 }
     } 
    
    return temp;
  }
  return "off";
}

//
function deleteDoubleMinus(str){
	let temp_i = [];
	let temp = str;
	
	for (let i = 0; i < temp.length; i++){
		if (temp[i]=="-"){
			temp_i.push(i);
		} else{
			temp_i = [];
		}
		if (temp_i.length==2){
			printLog({temp},"remove --");
			if (temp_i[0]==0 || temp_i[1]==temp.length-1){
				temp=(replaceSection(temp,"",temp_i[0],2));
			} else{
				if (isNumber(temp[temp_i[0]-1]) && isNumber(temp[temp_i[1]+1])){
					temp=(replaceSection(temp,"+",temp_i[0],2));
					
				}else{
					temp=(replaceSection(temp,"",temp_i[0],2));
				}
			}
			
			//alert(temp);
		}
	}
	return temp;
}

//prints variables name and value in console if global variable logging=1 (1 by default)
//param: as object {param1, param2, ...} or plain variable or text.
//called in calculateResult math loops 
function printLog(){
	if (logging){
		let print = "";
		for (let j = 0; j < arguments.length; j++){
			if (typeof arguments[j] === 'object'){
				for (let i = 0; i < Object.keys(arguments[j]).length; i++){
					print = print + "" + Object.keys(arguments[j])[i] + ": " + Object.values(arguments[j])[i] + ", ";
				}
			} else{
				print = print + '"' + arguments[j] + '", ';
			}
			
		}
		print=print.slice(0,print.length-2);
		console.log(print);
	}
}

// places "x" (multiply) between certain characters, ie. "2(.." -> "2x(.."
// for calculateResult to work correctly. Places 0 before or after "." if
// no number present
function placeX(str){
	let c="";
	let prev="";
	let next="";
		for (let i = 0; i < str.length; i++){
			c = str[i];
			if (i>0){
				prev = str[i-1];
				if (c=="(" || c=="S" || c=="L" || c=="l"){
					if (isNumber(prev)){
						str = placeChar(str,"x",i);
					}
				}
				if (c==")"){
					if (i<str.length-1){
						if (isNumber(str[i+1])){
							str = placeChar(str,"x",i+1);
						}
					}
				}
			}
			if (c=="."){
				if (i==0){
					str = "0"+str;
				}	else if (i==str.length-1){
					str = str+"0";
				} else{
					prev = str[i-1];
					next = str[i+1];
					if (!isNumber(prev)){
						str = placeChar(str,"0",i);
					}
					if (!isNumber(next)){
						str = placeChar(str,"0",i+1);
					}
					
				}

				
			}
			}
			
	
	
		return str;
}


function numberLength(x){
	return x.toString().length;
}

// gets the value from the operator AT index uses for calculations
// direction = 0 gets number left from operator, and 1 right
function getNumberFromOperator(str,index,direction){
	 let a = "";
	if (direction==0){ //left
			if (index==0){
				return "0";
			}
			for (let i = index-1; i >= 0; i--){ // gets the number from left of operator
					//alert("i: "+i+" str[i]: "+str[i]+" a.length: "+a.length);
          if (isNumber(str[i])){            
            a = str[i] + a;
          } else if (i==0 && str[0]=="-"){
            a = str[i] + a;
          } else if (str[i]=="."){
						a = str[i] + a;
					} else if (i>0 && str[i]=="(" && a.length!=0){
						a = str[i] + a;
					} else if (i>0 && str[i]=="(" && a.length==0){
						return "0";
					}	else{
						break;
					}
        }
			return a;
	}
	
	if (direction==1){
		if (index==str.length-1){
			return "0";
		}
		for (let i = index +1; i<str.length; i++){
			if (isNumber(str[i])){
				a = a + str[i];
			} else if(i==index+1 && str[i]=="-"){
				a = a + str[i];
			} else if (str[i]=="."){
				a = a+str[i];
			}else{
				break;
			}
		}
		return a;
	}
}


// calls functions to clean up the input & draws the input on element
// id="calc_display_content"
function printDisplay(str){

  let bd = str;
	
	
	 // elementary "ans" handling for previous result. added as afterthought and it shows
	if (gotresult){
		
		if (bd.indexOf(result)==0){
			if (str.length > result.length){
				if (isNumber(str[result.length])){
					display = str[result.length];
					result = "null";
					printDisplay(display);
					return;
				} else{
					bd = "ans" + bd.slice(result.length);
				}
			}
			
		} else{
			result = "null";
		}
	}
  
  bd=setSup(bd); // set <sup> tags for exponents
	
  drawParent(bd); // draws the "suggestion" closing parenthesis
  
	bd=addSpaces(bd); // added spaces for user readability
  

 	// replaces symbols used internally to more readable symbols in display
  bd=replaceString(bd, "x","\u00d7",0);
  bd=replaceString(bd, "S","\u221a",0);
  bd=replaceString(bd, "l","ln",0);
  bd=replaceString(bd, "L","log",0);
  bd=replaceString(bd, "%","/",0);
	
  document.getElementById("calc_display_content").innerHTML = bd;
}


// draws parenthesis "suggestion";
function drawParent(str){
	
	if (str.indexOf("(")==-1){
		return;
	}
	
	let result = "";
	let index_par = [];
	let index_sup = [];
	
	for (let i = 0; i < str.length; i++){
				
		if (str[i]=="("){
			result=result+")";
		}		
		
		if (i < str.length -4 && str.slice(i,i+5) == "<sup>"){
			result=result+"<sup>";	
		}
		
		if (i < str.length -5 && str.slice(i,i+6) == "</sup>"){
			result=result+"</sup>";	
		}
		
		if (str[i]==")"){ 
			result = result.slice(result.indexOf(")")+1);
		}

	}
      document.getElementById("parent").innerHTML = result; 
	
} 

// adds spaces between certain characters eg "1x1" -> "1 x 1"
function addSpaces(str){
  let operands = ["x","%","+","-","l","L","S"];
  length = str.length;
  let bda = str;
  
    for (let i = 0; i < length; i++){
    
      if (operands.includes(bda[i])){      
        if (bda[i-1]!=" " && bda[i-1]!=undefined){       
          bda = placeChar(bda," ",i);
          length++;
        }
      }   
    if (isNumber(bda[i]) && operands.includes(bda[i-1])){
      bda = placeChar(bda," ",i);
      length++;
    }   // spaces
    //if (bd[i]==l
  }
  return bda;
}

 //sets <sup> tags for exponents
function setSup(str){
  var temp = str;
  
  if (temp.indexOf("^")==-1){
    return temp;
  }
  
  if (temp[temp.length-1]=="^"){
    temp=replaceChar(temp , "<sup>\u25FB</sup>", temp.length-1);
   
  }
  
  if (temp.indexOf("^")>-1){
    var section = getSection(temp,temp.indexOf("^"));
   
    section = section.slice(1);
    temp = replaceSection(temp,'<sup>'+section+'</sup>', temp.indexOf("^") , section.length+1);   
  }
  
  return setSup(temp);
}

// removes length amount of characters from str at pos, with replaceWith string
function replaceSection(str,replaceWith,pos,length){ 
  let start = str.slice(0,pos);
  let end = str.slice(pos+length);
  return start+replaceWith+end;
}

// useful function..
function sum(a,b){
  return +a + +b;
}

// gets mathematically meaningful section from pos start "123", "-123", "(123)", "^3^4^5"
function getSection(str,pos){
  let result = "";
  let parent = 0;
  
	// starts with number
  if (isNumber(str[pos])){ 
    
    for (let i = pos; i < str.length; i++){
      if (isNumber(str[i])){
        result = result + str[i];
      } else if(str[i]=="."){
				result = result + str[i];
			} else{
        break;
      }
    }
    
  } 
  
  if (str[pos]=="-"){    
    result = result+str[pos];
    for (let i = pos+1; i < str.length; i++){
      if (isNumber(str[i])){
        result = result + str[i];
			} else if (str[i]=="."){
				result = result + str[i];
      } else if (str[i]=="("){
        result = result + str[i]
        parent++;
      } else if (str[i]==")"){
        result =  result + str[i];
        parent--;
        if (parent==0){
          break;
        }
      }else{
        if (parent==0){
          break;
        }
      }
    }
  } // starts with minus
  
  if (str[pos]=="("){
    parent = 1;
    result = result+str[pos];
    for (let i = pos+1; i < str.length; i++){
      if (str[i]=="("){
        parent++;
      }
      result = result + str[i];
      if (str[i]==")"){
        parent--;
        if (parent==0){
          return result;
        }
      }
    }
  }
  let prev_ind=0;
  if (str[pos]=="^" || str[pos]=="L" || str[pos]=="l" || str[pos]=="S"){
    let parent = 0;
    
    for (let i = pos; i < str.length; i++){
			if (i>0){
				prev_ind = i-1;
			}
      
      if (isNumber(str[i]) || str[i]=="."){        
        result = result+str[i]; 
      } else if(str[i]=="^" || str[i]=="L" || str[i]=="l" || str[i]=="S"){
       result = result+str[i]; 
      } else if (str[i]=="("){
        result = result+str[i]; 
        parent++;
      
      } else if ( parent>0 && str[i]==")"){
        result = result+str[i]; 
        parent--;
        
        if (parent==0){
           
          return result;
         }
      }else if (parent>0){
            result = result+str[i]; 
        
      } else{
        if (str[prev_ind]=="^" && str[i]=="-"){
					result = result+str[i];
				} else{
        	if (parent==0){
          	return result;
					}
        }

      }
       
         
    }
    
    return result;
  }
  
	/*if (str[pos]=="."){
		result = result+str[pos];
		if (pos!=str.length-1){
    	for (let i = pos+1; i < str.length; i++){
      	if (isNumber(str[i])){
        	result = result + str[i];
				} else{
        	break;
      	}
    	}
		}
	}
	*/
  
  
  
 return result;
  
} 

// replace 1 character at given pos
function replaceChar(str, replaceWith, pos){
  return replaceLastChar(str.slice(0,pos+1),replaceWith)+str.slice(pos+1);
}


// within str replaces all given strings with another starting from pos
// param: str string that is being manipulated
//        toBeReplaced what the function looks for
//        replaceWith what it replaces found strings with
//        pos starting position (also for recursive purposes)
function replaceString(str, toBeReplaced, replaceWith, pos){
  
  if (str.indexOf(toBeReplaced,pos) > -1){   
    let temp = str.slice(0, str.indexOf(toBeReplaced,pos))+replaceWith;
    
    if (str.indexOf(toBeReplaced,pos)<str.length-1){     
      temp = temp + str.slice(str.indexOf(toBeReplaced,pos)+1);
    }
    return replaceString(temp,toBeReplaced, replaceWith,temp.indexOf(replaceWith,pos)+(replaceWith.length));
  } else{
    return str;
  }
}

//removes last user given input from given str. also if input length=1 -> input="0"
function backspace(str){
  if  (power){
 
    //if prev char is parenthesis
    if (prevChar(str)=="("){ 
      openparent--;
    } else if (prevChar(str)==")"){
      openparent++;
    }
    
   // handle length & special cases properly
    if (str.length>1){
      if (prevChar(str,2)[0]=="S" || prevChar(str,2)[0]=="L" || prevChar(str,2)[0]=="l"){
        display = str.slice(0,str.length-2);
      } else{
				if (prevChar(str)=="."){
					dot = 0;
				}
        display = str.slice(0,str.length-1);
      }
    } else if (str.length==1){
       display = "0";
    }
    
    //drawParent(openparent);
    printDisplay(display);
  }
} 

// places given input (operand) to str ("display" in code). has some intelligence eg
// if previous user input is an operand, it replaces the previous operand with given one
function setOperand(str){
  if(power){
		
		dot = 0;
    let prev = prevChar(display);
		let curr = str;
		let starter;
		let operands = ["+","-","%","x","^",];
		let operands2 = ["+","%","x","^","^2"];
		let operands3 = ["L(","l(","S("];
		
		if (display.length==1 && display[0]=="0"){
			starter = 1;
		}
		
		if (curr == "-"){
			if (starter){
				display = curr;
			} else if (operands.indexOf(prev)>-1){
				if (prev != "^"){
					display = replaceLastChar(display,curr);
				} else{
					display = display + curr;
				}
			} else{
				display = display + curr;
			}
		  
		}
    
		if (operands2.indexOf(curr) > -1){
			if (starter){
				display = display + curr;
			} else{
				if (isNumber(prev)){
					display = display + curr;
				} else if (operands.indexOf(prev)>-1){
					if (display.length > 1){
						if (prevChar(display,2)=="(-"){
							return;
						} else{
							display = replaceLastChar(display,curr);
						}
					}
				} else if (prev!="("){
					display = display + curr;
				}
			}
		}
		
		if (operands3.indexOf(curr)>-1){
			if (starter){
				display = curr;
				openparent++;
			} else{
				display = display + curr;
				openparent++;
			}
		}
				
    //drawParent(openparent);
    document.getElementById("temp").innerHTML = display;
    printDisplay(display);
  }
}

//like previous function, places given input (number, dot, parenthesis) to str ("display")
// and has some intelligence to handle certain cases
function setChar(str){
   if (power){
		 if (str=="."){
			 display=display+str;
		 } else{
      if (str!="0" && display=="0"){
        display=str;
      } else{
        if (meaningfulChar(display,str)){
          display=display+str;
          
        } else{
          display=replaceLastChar(display,str);
          
        }
        
      }
		 }
     
      if (str == "("){
        openparent++;
      }
      if (str == ")"){
        openparent--;
      }
      
    printDisplay(display);
     document.getElementById("temp").innerHTML = display;
   
    }
} 

// places string (char) in given string (str) between pos-1 and pos
function placeChar(str,char,pos){
  if (pos==0){
    return char+str;
  }
  return str.slice(0,pos)+char+str.slice(pos);
} 

// finds the position of the start of the latest numeral value||unused?
function findNumberStart(str){
  let numberfound;
  if (!isNumber(str[str.length-1])){
    numberfound=0;
  } else{
    numberfound=1;
  }
  
  for (let i = str.length-1; i >= 0; i--){
    if (!isNumber(str[i]) && numberfound==1){ 
       return i+1; 
    }
  
    if(numberfound==0 && isNumber(str[i])){
      numberfound=1;
    }
    

    if (i==0){
      return 0;
    }
  }
} 

// param: string, n(opt)
// gives last n:th characters from the end of a string, with n defaulting 1 and givin last char
function prevChar(){ 
  if (arguments.length==2){
    return arguments[0].substring(arguments[0].length - arguments[1], arguments[0].length);
  } else{
    return arguments[0].substring(arguments[0].length -1 , arguments[0].length);
  }
}

// checks if given chr is a meaningful number in "str"
// ie. "1+0" -> user inputs "0" -> return false 
// since 1+00 = 1+0
function meaningfulChar(str,chr){
  if (str.length==1 && str[0]=="0" && chr=="0"){return false;}
  if (!(isNumber(prevChar(display,2)[0])) && prevChar(display,2)[1]==0){
		
			if (prevChar(display,2)[0] == "."){
				return true;
			} else{
		
    		return false;
			}
  }
	if (str[str.length-1]=="(" && chr==")"){
		return false;
	}
	
  return true;
} 

// toggles power variable on & off
function togglePower(){
 	dot = 0;
  if (power==0){
     
    power=1;
    
    display="0";
    startstate=1;
  } else if (power==1 && (prevChar(display)!=0 || display.length>1)){
		result = "null";
    display="0";
    openparent = 0;
		dot = 0;
    document.getElementById("parent").innerHTML = "";
  } else{
   	result = "null";
    power=0;
    display="off";
    openparent=0;
  }
	
	
  

	
	
} 

// returns if input is 1-wide 0-9 char.
function isNumber(chr){
  if (chr.length!=1){
    return false;
  }
	
	if (chr===undefined){
		return false;
	}
  
  switch (chr){
    case "0":
      return true;
    case "1":
      return true;
    case "2":
      return true;
    case "3":
      return true;
    case "4":
      return true;
    case "5":
      return true;
    case "6":
      return true;
    case "7":
      return true;
    case "8":
      return true;
    case "9":
      return true;
  }
  return false;
} 

  // replaces last symbol of str with given char
function replaceLastChar(str,char){
  return str.slice(0,str.length-1)+char;
} 

