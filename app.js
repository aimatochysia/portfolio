//globals
let sizeIncrement = 20;
let pointer = document.getElementById('doc-pointer');
let pointerbase = pointer.clientWidth;
//function only at event
//move pointer
document.addEventListener('mousemove', function(e) {
    let pointerX = e.pageX;
    let pointerY = e.pageY;
    pointer.style.left = pointerX + 'px';
    pointer.style.top = pointerY + 'px';
});
//increase size when click
document.addEventListener('click',function(e){
    let pointerX = pointerbase + sizeIncrement;
    pointer.style.width = pointerX + 'px';
    pointer.style.height = pointerX + 'px';
    setTimeout(() => { 
        pointer.style.width = pointerbase + 'px';
        pointer.style.height = pointerbase + 'px';
    }, 100);
});

function pointerHover() {
    pointer.style.border = '2px dashed rgb(189, 189, 189)';
    let pointerX = pointerbase + sizeIncrement;
    pointer.style.width = pointerX + 'px';
    pointer.style.height = pointerX + 'px';
};
function pointerUnhover() {
    pointer.style.border = '2px solid aliceblue';
    pointerX = pointerbase;
    pointer.style.width = pointerX + 'px';
    pointer.style.height = pointerX + 'px';
};