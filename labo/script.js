// --- mousemove ---
const mousemove = document.querySelector('.mousemove');
window.addEventListener('mousemove', (e)=> {
    mousemove.style.left = e.pageX + 'px';
    mousemove.style.top = e.pageY + 'px';
})

//   --- bruits ---
const ring = (key) => {
    const audio = new Audio();
    audio.src =  key + '.mp3';
    audio.play();
}
// --- keypress event --
const keypressContainer = document.querySelector('.keypress');
const key = document.getElementById('key');
document.addEventListener('keypress', (e) => {
    key.textContent = e.key;
    if (e.key === '@') ring(e.key);
})

// --- scroll event ---
const nav = document.querySelector('nav')
window.addEventListener('scroll', () => {
    window.scrollY > 120 ? nav.style.top = '0px': nav.style.top = '-50px';
})

// --- form ---
const inputName = document.querySelector('input[type = "text"]');
const select = document.querySelector('select');
const form = document.querySelector('form');
let pseudo = '';
let language = '';

inputName.addEventListener('input', (e) => {
    pseudo = e.target.value;
})
select.addEventListener('input', (e) => {
    language = e.target.value;
})
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (cgv.checked) {
        document.querySelector('.result').innerHTML = `
            <p>${pseudo} aime le ${language}</p>
            `
    } else {
        alert('Veuillez accepter les cgv');
    }
})

// --- load event ---
window.addEventListener('load', () => {
    console.log('Document chargé !')
})

// --- select by classname
// const boxes = document.getElementsByClassName('box') // => capricieux !!
const boxes = document.querySelectorAll('.box')
boxes.forEach((box) => {
    box.addEventListener('click', (e) => {
        console.log(e.target)
    })
})