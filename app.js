//globals
let sizeIncrement = 20;
const clickableArea = document.querySelectorAll('.clickable');



//function only at event
//move pointer
document.addEventListener('mousemove', function(e) {
    let pointer = document.getElementById('doc-pointer');
    let pointerX = e.pageX;
    let pointerY = e.pageY;
    pointer.style.left = pointerX + 'px';
    pointer.style.top = pointerY + 'px';
});

//increase size when click
document.addEventListener('click',function(e){
    let pointer = document.getElementById('doc-pointer');
    let pointerX = 0;
    let pointerY = 0;
    pointerX = pointer.clientWidth + sizeIncrement;
    pointerY = pointer.clientHeight + sizeIncrement;
    pointer.style.width = pointerX + 'px';
    pointer.style.height = pointerY + 'px';
    setTimeout(() => { 
        pointerX = pointer.clientWidth  - sizeIncrement;
        pointerY = pointer.clientHeight - sizeIncrement;
        pointer.style.width = pointerX + 'px';
        pointer.style.height = pointerY + 'px';
    }, 100);
});

function mouseEnter() {
    let pointer = document.getElementById('doc-pointer');
    pointer.style.border = '2px solid blue';
};

function mouseLeave() {
    let pointer = document.getElementById('doc-pointer');
    pointer.style.border = '2px solid aliceblue';
};

for (let i = 0; i < clickableArea.length; i++) {

    //increase size when hovering
    clickableArea[i].addEventListener('mouseenter',mouseEnter);
    //decrease size when not hovering
    clickableArea[i].addEventListener('mouseleave',mouseLeave);
};