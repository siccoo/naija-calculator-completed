// // <---- For bills.html ---->
// alert('hello')
// // Validating the data for registration
// const inputs = document.querySelectorAll('input');

// const patterns = {
//     phoneNumber: /^\d{11}$/,
//     password: /^[\w@_]{8,20}$/
// };

// // Validation function
// function validate(field, regex) {
//     // console.log(regex.test(field));
//     if (regex.test(field)) {
//         field.className = 'valid';
//     } else {
//         field.className = 'invalid';
//     }
// }

// inputs.forEach((input) => {
//     input.addEventListener('keyup', (e) => {
//         //console.log(e.target.attributes.name.value );
//         validate(e.target.value, patterns[e.target.attributes.name.value])
//     });

// });


// <---- For calculator.html ---->

//Calculation for Tip

function tipCalculate() {
    let billsAmount = document.getElementById('billsAmount')
    let serviceRendered = document.getElementById('serviceRendered')
    let numberOfPeople = document.getElementById('numberOfPeople')
    let tip = document.getElementById('tip')

    // Validation function
    let bills = +(billsAmount.value)
    let services = +(serviceRendered.value)
    let people = +(numberOfPeople.value)

    // Validation of inputs

    if (bills === "" || services === 0) {
    alert("Abeg enter values you here... Thank you");
    return;
    }
    let result = (bills * services)/people

    tip.textContent = result ? `${result}.00`:'0.00'

};
