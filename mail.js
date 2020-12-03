async function sendMail() {
    const fullName = document.getElementById('full-name');
    const clientEmail = document.getElementById('client-email');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');

    let status = document.getElementById('status');

    try {
        const response = await fetch('https://aschl-mail.herokuapp.com/send', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin' : '*',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({fullName: fullName.value.trim(), clientEmail: clientEmail.value.trim(), phone: phone.value.trim(), message: message.value.trim()})
        });
        if (response.status === 200) {        
            fullName.value = '';
            clientEmail.value = '';
            phone.value = '';
            message.value = '';
            status.classList.remove('error');
            status.classList.add('success');
            status.textContent = 'Thank you for contacting us!';
        } else if (response.status == 400) {
            const data = await response.json();
            console.log(data);
            status.classList.add('error');
            status.innerHTML = '';
            data.errors.forEach(errorMessage => {
                const eMessage = errorMessage.msg;
                status.innerHTML += eMessage + '<br>'
            });
        }
    } catch (error) {
        console.log(error);
    }
}