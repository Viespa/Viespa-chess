

const arrayOfPawn = [];

console.log(filesNameArray)

for (const i of filesNameArray) {
   arrayOfPawn.push(document.getElementById(i + 2));
  
    
}
for (const i of filesNameArray) {
   arrayOfPawn.push(document.getElementById(i + 7));

}
console.log(arrayOfPawn)
for(const i of arrayOfPawn){
    i.addEventListener('click',() =>{
        const currentId = i.getAttribute("id")
        console.log(currentId)
        let change = currentId[1];

        const stepsSquare = [];

        for(let i = 0;i < 2; i++){
            change ++;
            stepsSquare.push(
                document.getElementById(currentId[0] + change))
        }
        //console.log(stepsSquare);
        highLightingCircle(stepsSquare);
    })
}

//function to add highLighting

const highLightingCircle = function ([first, second]){
    let circle = document.createElement('div');
    //document.body.appendChild(circle);
    //console.log(first,second)
    //document.body.insertBefore(newDiv, currentDiv)
    console.log(first.appendChild(circle));
    console.log(second.appendChild(circle));


};