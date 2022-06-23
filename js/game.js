const words = ['perro', 'gato', 'lluvia', 'casa', 'auto', 'baño', 'afuera', 'manzana', 'hablar', 'jugar', 'programar', 'javascript', 'java', 'phyton', 'frontend', 'backend'];
let negative;
let positive = 1;
const btn = document.querySelector("#btn_get");
const chars = document.querySelectorAll(".alphabet_char");
const wordArea = document.querySelector(".word_area");
const win = document.querySelector(".win");
let wordRandom;
function charsDisable(boolean){
    for(let i = 0; i < chars.length; i++){
        chars[i].disabled = boolean;
    }
}
charsDisable(true);

function wordI(){
    return words[Math.floor(Math.random() * words.length)];
}

// Iniciar Juego:
btn.addEventListener('click', start);

function start(){
    positive = 0;
    negative = 0;
    limpiarCanvas();
    wordRandom = wordI();
    console.log(wordRandom);
    charsDisable(false);
    btn.disabled = true;
    btn.style.backgroundColor = 'gray';
    wordArea.innerHTML = '';
    for(let i = 0; i < wordRandom.length; i++){
        const span = document.createElement('span');
        wordArea.appendChild(span);
        span.classList.add('word_item');
    }
}
    
for(let i = 0; i < chars.length; i++){
    chars[i].addEventListener('click', clickChars);
}

// Adivinar Letra:
function clickChars(e){
    const wordItems = document.querySelectorAll(".word_item");
    const button = e.target;
    button.disabled = true;
    const charA = button.innerHTML.toUpperCase();
    const wordA = wordRandom.toUpperCase();
    let success = false;
    for(let i = 0; i < wordA.length; i++){
        button.style.backgroundColor = 'red';
        if(charA == wordA[i]){
            wordItems[i].innerHTML = charA;
            success = true;
            positive++
        }
    }
    if(success == false){
        canvasList[negative]();
        negative++
    }else{
        button.style.backgroundColor = 'green';
    }
    if(negative == 9){
        alert(`La palabra era ${wordA}`);
        game_over('lose');
    }
    if(positive == wordA.length){
        game_over('win');
    }
}

// Reiniciar Parámentros del Juego:
function game_over(play){
    for(let i = 0; i < chars.length; i++){
        chars[i].disabled = true;
        chars[i].style.backgroundColor = '#856BDE';
    } 
    btn.disabled = false;
    btn.style.backgroundColor = '#5D37E1';
    wordArea.innerHTML = '';
    if(play == 'win'){
        const winR = document.createElement('span');
        wordArea.appendChild(winR);
        winR.classList.add('win');
    }else{
        const loseR = document.createElement('span');
        wordArea.appendChild(loseR);
        loseR.classList.add('lose');
    }
}
        





