const div= document.createElement('div');
div.setAttribute('data-powers', 'flight super speed');
document.body.appendChild(div);

const powers = div.dataset.powers;


document.getElementsByTagName('button')[0].addEventListener('click', function(){
    document.getElementsByTagName('div')[0].innerHTML= powers;
})