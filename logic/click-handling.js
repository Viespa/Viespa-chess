const allSquares = document.getElementsByClassName('square')
//console.log(allSquares)


const clickedElements = [];

for(const x of allSquares){
    x.addEventListener('click',function(){

        //push element in empty Array
        
      //console.log(clickedElements)

      const idOfElement = x.getAttribute("id");
      const innerHtmlOfELement = document.getElementById(idOfElement).innerHTML;

      if(clickedElements.length > 0){
        clickedElements[0].removeAttribute("style");
        clickedElements.length = 0;
      }

     

    
      //console.log(innerHtmlOfELement)
      
      //console.log(x)

      if(innerHtmlOfELement.includes('black') || innerHtmlOfELement.includes('white')){

        document.getElementById(idOfElement).style.backgroundColor = '#b2dbb5'

        clickedElements.push(x);

      }
    });
}