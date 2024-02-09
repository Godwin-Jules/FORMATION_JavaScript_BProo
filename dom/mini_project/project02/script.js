
const list_para = document.querySelectorAll('p');

list_para.forEach( element => {
    if (element.innerText.includes('erreur')){
        element.classList.add('error');
    } else if (element.innerText.includes('warning')){
        element.classList.add('warning');
    } else if (element.innerText.includes('success')){
        element.classList.add('success');
    } else {
        element.classList.add('normal');
    }
});