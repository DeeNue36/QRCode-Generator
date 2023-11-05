let qrCode = document.getElementById('qrcode');
let qrImage = document.getElementById('qr-image');
let qrText = document.getElementById('qr-text');

function generateQRCode (){
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;

}