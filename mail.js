async function sendMail() {

    const fullName = document.getElementById('full-name');
    const clientEmail = document.getElementById('client-email');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');
    const sendCopy = document.getElementById('send-copy');

    let button = document.getElementById('submit');
    let loader = document.getElementById('loader');
    let status = document.getElementById('status');

    let eFullName = document.getElementById('eFullName');
    let eEmail = document.getElementById('eEmail');
    let ePhone = document.getElementById('ePhone');
    let eMessage = document.getElementById('eMessage');

    eFullName.textContent = '';
    eEmail.textContent = '';
    ePhone.textContent = '';
    eMessage.textContent = '';

    if (status.classList.contains('success')) {
        status.classList.remove('success');
        status.innerText = '';
    }

    // Hide the button and display the loader until we get a response.
    button.style.display = 'none';
    loader.style.display = 'inline';

    try {
        const response = await fetch('https://aschl-mail.herokuapp.com/send', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ fullName: fullName.value.trim(), clientEmail: clientEmail.value.trim(), phone: phone.value.trim(), message: message.value.trim(), sendCopy: sendCopy.checked })
        });

        if (response.status === 200) {

            // Show button, hide loader.
            button.style.display = 'inline';
            loader.style.display = 'none';

            // Clear the form.
            fullName.value = '';
            clientEmail.value = '';
            phone.value = '';
            message.value = '';
            sendCopy.checked = false;

            status.classList.add('success');
            status.innerText = 'Thank you for contacting us!'

        } else if (response.status == 400) {

            // Show button, hide loader.
            button.style.display = 'inline';
            loader.style.display = 'none';

            // In case of an error, we get a response back.
            const data = await response.json();
            console.log(data)
            
            // Display errors in placeholders.
            data.errors.forEach(errorMessage => {
                const prm = errorMessage.param;
                const eMsg = errorMessage.msg;
                if (prm === 'fullName') {
                    eFullName.textContent = eMsg;
                } else if (prm === 'clientEmail') {
                    eEmail.textContent = eMsg;
                } else if (prm === 'phone') {
                    ePhone.textContent = eMsg;
                } else if (prm === 'message') {
                    eMessage.textContent = eMsg;
                }
            });
        }
    } catch (error) {

        // Show button, hide loader.
        button.style.display = 'inline';
        loader.style.display = 'none';
        console.log(error);
    }
}

