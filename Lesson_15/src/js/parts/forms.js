function forms() {

let form = document.getElementsByClassName('main-form')[0],
formBottom = document.getElementById('form'),
input = form.getElementsByTagName('input'),
statusMessage = document.createElement('div'),
message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так...'
};
statusMessage.classList.add('status');

function sendForm(elem) {
elem.addEventListener('submit', function(e) {
    e.preventDefault();
    elem.appendChild(statusMessage);

    let formData = new FormData(elem);

    let obj = {};
    formData.forEach(function (value, key) {
        obj[key] = value;
    });
    let json = JSON.stringify(obj);


    function postData(data) {
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
            request.onreadystatechange = function() {
                if (request.readyState < 4) {
                    resolve()
                } else if (request.readyState === 4 && request.status == 200) {
                    resolve()
                } else {
                    reject()
                }
            }
            
            request.send(json); 
        });    
    }   


    function clearInput() {    
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    } 
    
    postData(json)
        .then(()=> statusMessage.innerHTML = message.loading)
        .then(()=> statusMessage.innerHTML = message.success)
        .catch(()=> statusMessage.innerHTML = message.failure)
        .then(clearInput)
    });


    }
    sendForm(form);
    sendForm(formBottom);

}

export default forms;
