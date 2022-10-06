//Selecting files using dom and storing into array

const arrayOfFiles = document.querySelectorAll('.files');



const filesNameArray = ["a", "b", "c", "d", "e", "f", "g", "h"];


//counter for filesArray

let fileNumber = 0;


let counter = 1;
for(const i of arrayOfFiles){
    
    for(const el of i.children){
        el.setAttribute('id',filesNameArray[fileNumber] + counter);

        //console.log(el)
        counter++;
    }

    fileNumber++;

}

for(const i of arrayOfFiles){
    //console.log(i.children);
}