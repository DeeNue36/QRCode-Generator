//js code getting the html div element by its given id 'qrcode'
let qrCode = document.getElementById('qrcode');

//js code getting the html img element by its given id 'qr-image'
let qrImage = document.getElementById('qr-image');

//js code getting the html input element by its given id 'qr-text'
let qrText = document.getElementById('qr-text');

//function to generate a qr code based on the text entered in the html element whose id is 'qr-text' (depicted in js as the variable 'qrText')
function generateQRCode (){
    //conditional if statement which will only allow a qr code to be generated when the text entered in 'qrText' is greater than 0
    if(qrText.value.length > 0){
        //code specifying the QR Code API as the image source and getting the value or data from the input field by adding '+ qrText.value'
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;

        //adds the class 'show-img' to the parent div 'qrcode' (depicted in js as the variable 'qrCode')
        qrCode.classList.add('show-img');
       
    }
    //conditional else statement to add the class 'error-msg' to the variable qrText when the value in it is zero
    else{
        qrText.classList.add('error-msg');
        //code specifying the amount of time the class will be added before it is eventually removed
        setTimeout(() => {
            qrText.classList.remove('error-msg')
        }, 1000 );
    }
    
}