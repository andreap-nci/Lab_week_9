numberSubj = prompt("Please enter how many subjects you have");
while(!(numberSubj>0 && numberSubj<99)){
    numberSubj= prompt("Invalid input. Please enter how many subjects you have");
}


test="";
arrayOfMarks=[];
for(i=0; i<numberSubj;i++){
    test+=` <label>Subject n.${i+1}</label> <input type="number" id="myID${i}" required><br>`;
}
test+='<input type="submit" value="Submit"/>';
document.getElementById("userForm").innerHTML+=test;

function submitInfo(event){
    event.preventDefault();
    
    for(i=0; i<numberSubj; i++){
        arrayOfMarks[i] = parseInt(document.getElementById(`myID${i}`).value);
    }
    console.log(arrayOfMarks);
    alert("Your marks are "+arrayOfMarks);
    calculateGrade();

}

function calculateGrade(){
    let totalMarks = 0;
    let average = 0;
    let finalGrade = "N/A";

    for(i=0;i<numberSubj;i++){
        totalMarks += arrayOfMarks[i];
    }
    
    average = totalMarks/numberSubj;
    if(average>=80){
        finalGrade= "A";
    }
    else if(average>=70){
        finalGrade= "B";
    }
    else if(average>=60){
        finalGrade=  "C";
    }        
    else if(average>=50){
        finalGrade=  "D";
    }  
    else if(average>=40){
        finalGrade=  "E";
    }
    else{
        finalGrade=  "F";
    } 	 
    document.getElementById("finalResult").innerHTML = `Your final grade is ${finalGrade}`;        


}



