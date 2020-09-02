let butomOk = document.querySelector(".aceptar");
let passField = document.querySelector("#pass");
let passContainer = document.querySelector(".password");
let col1 = document.querySelector("#col1");
let col2 = document.querySelector("#col2");
let center = document.querySelector(".center");
let varSup = document.querySelector(".varSup");
let letter = document.createElement("img");
letter.src = "./images/letter16.png";
letter.classList.add("letter");


//Validate the password
butomOk.addEventListener("click", ()=>{
    let pass = passField.value;
    if(pass == "16M35e50f10V3"){
        //Correct pass
        passContainer.innerHTML = "";
        varSup.innerHTML = "Felices 16 meses cariño ♥"
        putImages();
        setTimeout(()=>{
            center.appendChild(letter);
        },1000);
    }else{
        //Incorrect pass
        passField.classList.add("shake-horizontal");
        passField.classList.add("shake-constant");
        passField.classList.add("err");
        setTimeout(()=>{
            passField.classList.remove("shake-horizontal");
            passField.classList.remove("shake-constant");
            passField.classList.remove("err");
        },1000);
    }
    passField.value = "";
})


class Images{
    constructor(){
         this.imgArr = this.forImg();
    }
    forImg(){
        let imgArr = [];
        for(let i = 1; i <= 8; i++ ){
            let direc = `./images/${i}.jpeg`;
            imgArr.push(direc);
        }
        return imgArr;
    }
}

function putImages(){
    let images = new Images();
    for(let i=0; i<4; i++){
        let img = document.createElement("img");
        img.src = images.imgArr[i];
        col1.appendChild(img);
    }
    for(let i=4; i<8; i++){
        let img = document.createElement("img");
        img.src = images.imgArr[i];
        col2.appendChild(img);
    }
}
