const panels=document.querySelectorAll('.panel');

function toggleopen(){
    console.log('helllo');
    this.classList.toggle('open');
}


function toggleActive(e) {
    this.classList.toggle('open-active');
}
panels.forEach(function(panel){
    panel.addEventListener('click', toggleopen)
});
panels.forEach(function(panel){
    panel.addEventListener('transitionend', toggleActive)
});


