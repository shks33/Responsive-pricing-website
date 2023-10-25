let x = document.querySelector('#toggle');
let monthly = document.getElementsByClassName('number-monthly')[0];
let monthly2 = document.getElementsByClassName('number-monthly')[1];
let monthly3 = document.getElementsByClassName('number-monthly')[2];
let annually = document.getElementsByClassName('number-annually')[0];
let annually2 = document.getElementsByClassName('number-annually')[1];
let annually3 = document.getElementsByClassName('number-annually')[2];

// x.addEventListener('click', ()=>{
//     monthly.removeAttribute('style');
//     monthly2.removeAttribute('style');
//     monthly3.removeAttribute('style');
//     annually.setAttribute('style','display: none;')
//     annually2.setAttribute('style','display: none;')
//     annually3.setAttribute('style','display: none;')
// });
function switchPrice() {
    if (monthly.hasAttribute('style')) {
        monthly.removeAttribute('style');
        annually.setAttribute('style','display: none;')
    }else{
        annually.removeAttribute('style');
        monthly.setAttribute('style','display: none;')
    }
    if (monthly2.hasAttribute('style')){
        monthly2.removeAttribute('style');
        annually2.setAttribute('style','display: none;')
    }else{
        annually2.removeAttribute('style');
        monthly2.setAttribute('style','display: none;')
    }
    if (monthly3.hasAttribute('style')){
        monthly3.removeAttribute('style');
        annually3.setAttribute('style','display: none;')
    }else{
        annually3.removeAttribute('style');
        monthly3.setAttribute('style','display: none;')
    }
}

// && monthly2.hasAttribute('style') && monthly3.hasAttribute('style')