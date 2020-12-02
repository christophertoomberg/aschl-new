async function sendMail() {
    const fullName = document.getElementById('full-name').value;
    const clientEmail = document.getElementById('client-email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const response = await fetch('https://aschl-mail.herokuapp.com/send', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin' : '*',
            'Content-Type' : 'application/json',
            'Accept' : '*/*',
            'Accept-Encoding' : 'gzip, deflate, br',
            'Connection' : 'keep-alive'

        },
        body: {'fullName': fullName, 'clientEmail': clientEmail, 'phone': phone, 'message': message}
    });
    console.log(response);
}