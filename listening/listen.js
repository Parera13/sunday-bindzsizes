// 1. H1 tag= Gyakorlas szinvaltoztatas, sorban ahogy a listaban jonnek a szinek
let h1Tag = document.getElementsByTagName('h1')[0];
    console.log(h1Tag);
let colorIndex = 0;

let colorVariation = [
    'yellow',
    'tomato',
    'green',
    'salmon',
    'rgb(78, 172, 133)'

];
    console.log(colorVariation);
    console.log(colorVariation.length);

h1Tag.addEventListener("mouseover", textColor);

function textColor(){
    h1Tag.style.color = colorVariation[colorIndex];
    if (colorIndex< colorVariation.length){
        colorIndex++
        console.log(`colorIndex ${colorIndex}`);
    }
    else{
        colorIndex = 0;
    }
}

//2. Box random border szin valtoztatasa plusz benne egy szoveg
let box = document.querySelector('.box');
    console.log(box);
    let _colorIndex = 0;
    
    let colors = [
        'yellowgreen',
        'black',
        'slateblue',
    ];
    console.log(colors);
    
    box.addEventListener('click', border);
    //h4.addEventListener('click',border);
    
    function border(){
        let randomNum = Math.floor(
            Math.random() * colors.length
            );
            box.style.borderColor = colors[randomNum];
            console.log(colors[randomNum]);
            console.log(box);
            box.innerHTML = '<h4 class="text">CodeCool</h4>';
            let h4 = box.getElementsByTagName('h4')[0];
            //h4.style.borderColor = colors[randomNum];     //NEM SIKERULT
            //console.log(h4);                              
            
            /*
            function h4text(){
                underBox.addEventListener('click', h4text);
                box.insertAdjacentHTML('afterend',`
                <div class="underBox">Szia azert jottem letre, mert epp a 
                boxban levo szovegre kattintottal</div>`);
                let underBox = document.querySelector('.underbox');
                //underBox.style.textColor = 'red';
            };
            console.log(h4);
            */
};

/*
box.insertAdjacentHTML('afterend',`
                <div class="underBox"></div>`           //NEM SIKERULT
);
*/

let underBox = document.querySelector('.text-box');
console.log(underBox);
let h3 = underBox.querySelector('h3')
underBox.addEventListener('click', () => {
    if (h3.innerHTML === 'Kattintgass valtozik a szin') {
        h3.innerHTML = 'Kattintasra megvaltozott a szoveg';
        h3.style.color = 'pink';
        h3.style.backgroundColor = 'black';
        underBox.style.backgroundColor = 'black';
        
    }
    else{h3.innerHTML === 'Kattintasra megvaltozott a szoveg';
        h3.innerHTML = 'Kattintgass valtozik a szin';
        h3.style.color ='black';
        h3.style.backgroundColor = 'pink';
        underBox.style.backgroundColor = 'pink';
    };
});
console.log('------------------------');
        
//Getting Elements from HTML
let myContentDivs = document.getElementsByClassName('content');
    console.log(myContentDivs);

//Changing Page Content
let myPtag = myContentDivs[0].getElementsByTagName('p');
    console.log(myPtag);
myPtag[1].innerHTML = 'YO NINJAS';

//Accessing and Set Attributes
let lastContent = document.getElementById('last');
    console.log(lastContent);
//Accessing
    console.log(lastContent.getAttribute('class')); 
//Set attributes by method
lastContent.setAttribute('class', 'content last');
    console.log(lastContent);
//Set those by properties
    console.log(lastContent.className);
lastContent.className = "content last thisByClassName";
lastContent.setAttribute('alt', 'new');

//Grab one div and add an ID
let thirdDiv = myContentDivs[2];
    console.log(thirdDiv);
thirdDiv.setAttribute('id', 'third');

//Changing styles
thirdDiv.setAttribute('style', "display: inline-block");
//add more to it
//thirdDiv.setAttribute('style', "display: inline-block; left: 10px"); Hozzaadja de nem mukszik
//Better way
thirdDiv.style.backgroundColor = 'rgb(191, 247, 239)';
thirdDiv.style.color = 'rgb(111, 24, 33)'
let pInThirdDiv = thirdDiv.getElementsByTagName('p');
    console.log(pInThirdDiv);
pInThirdDiv[0].style.backgroundColor = 'rgb(247, 217, 191)';
thirdDiv.style.margin = '10px';

//Add Element
let newLi = document.createElement('li');
    console.log(newLi);
let newA = document.createElement('a');
    console.log(newA);
//Positationing
let menu = lastContent.getElementsByTagName('ul')[0];
    console.log(menu);
menu.appendChild(newLi);      //parent-add hozza a newLi gyereket
newLi.appendChild(newA)
newA.outerHTML = 'Blog';
newA.setAttribute('href',"#")
//Take this new Li to the top of all
menu.insertBefore(newLi, menu.getElementsByTagName('li')[0]) // [0]-ez adja az elso poziciot neki

//Removing Elements - for that, grab the parent and the child(element which you want to remove)
// parent is the menu, child is the newLi
let removed = menu.removeChild(newLi); //beteszem a torolt elemet egy valtozoba igy kesobb hozza lehet ferni
    console.log(removed);



//Events
let secondDiv = document.getElementsByClassName('content')[1].getElementsByTagName('p')[0];
    console.log(secondDiv);
secondDiv.onclick = () =>{
    alert('Hey, you clicked on me!')
}
//Other exemple
let firstDiv = document.getElementsByClassName('content')[0];
    console.log(firstDiv);
firstDiv.onmouseover = () =>{
    firstDiv.setAttribute('style', 'display: inline-block')
    firstDiv.style.backgroundColor = 'rgb(204, 187, 242)';
    let firstP = firstDiv.getElementsByTagName('p')[0];
        console.log(firstP);
    firstP.style.backgroundColor = 'rgb(204, 187, 242)';
    let secP = firstDiv.getElementsByTagName('p')[1];
    secP.style.backgroundColor = 'rgb(204, 187, 242)';

    /*
    for (let index = 0; index < firstDiv.length; index++) {
        firstDiv[index].style.backgroundColor = 'rgb(204, 187, 242)';
        console.log(firstDiv[index]);
        
    }
    */
}





