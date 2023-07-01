const form = document.querySelector('#formulario');
const txtv = document.querySelector('#txtvel');

form.addEventListener('submit', (e) => {

    e.preventDefault();
    let velocidade = txtv.value;
    mostrar(velocidade);

})

function mostrar(text) {

    const res = document.querySelector('#res');
    res.innerHTML = `<p>Você está numa velocidade de ${text} KM/H<p>`;
    if (text > 50) {
        res.innerHTML += ' <p><br>Você está acima da velocidade, <strong>multado!!</strong><p>'
    } else {
        res.innerHTML += ' <p><br>Parabens , contiune assim!!<p>'

    }
    const btn = document.createElement('button');
    btn.classList.add('buttonCancel');
    btn.innerHTML = 'Reiniciar';
    res.appendChild(btn);

    btn.addEventListener('click', ()=>{
        location.reload();
    })

    txtv.value = '';
    txtv.focus();


}






