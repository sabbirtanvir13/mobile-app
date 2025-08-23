// login button
// 
document.getElementById('login-btn')
.addEventListener("click", function(e) {
    e.preventDefault();

    const mobileNumber = 12345678901;
    const pinNumber = 1234;

    const mobileNumberValue = document.getElementById("mobile-number").value;
    const mobileNumberConvertor = parseInt(mobileNumberValue);

    const pinNumberValue = document.getElementById("pin-number").value;
    const pinNumberConvertor = parseInt(pinNumberValue);

    if (mobileNumberConvertor === mobileNumber && pinNumberConvertor === pinNumber) {
       window.location.href="./main.html"
    } else {
        console.log("invalid");
    }
});