let qrCode = document.getElementById('qrcode');
let qrImage = document.getElementById('qr-image');
let qrText = document.getElementById('qr-text');

function generateQRCode (){
    if(qrText.value.length > 0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;

        qrCode.classList.add('show-img');
        //comment
    }
    else{
        qrText.classList.add('error-msg');
        setTimeout(() => {
            qrText.classList.remove('error-msg')
        }, 1000 );
    }
    
}