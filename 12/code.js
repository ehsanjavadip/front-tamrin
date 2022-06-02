const btnplus = document.querySelector('#btnplus');
const btnneg = document.querySelector('#btnneg');
const btnzarb = document.querySelector('#btnzarb');
const btntaq = document.querySelector('#btntaq');




// Plus
btnplus.addEventListener('click', function () {
    const txtnum1 = Number(document.querySelector('#txtnum1').value);
    const txtnum2 = Number(document.querySelector('#txtnum2').value);
    const txtresult = document.querySelector('#txtresult');
    var opo = txtnum1 + txtnum2;
    txtresult.value = opo;
    var format = "Plus : " + " " + txtnum1 + " " + " + " + " " + txtnum2 + " " + "=" + " " + opo;
    window.alert(format);
    console.info(format);
});

// Negetive
btnneg.addEventListener('click', function () {
    const txtnum1 = Number(document.querySelector('#txtnum1').value);
    const txtnum2 = Number(document.querySelector('#txtnum2').value);
    const txtresult = document.querySelector('#txtresult');
    var opo = txtnum1 - txtnum2;
    txtresult.value = opo;
    var format = "Plus : " + " " + txtnum1 + " " + " - " + " " + txtnum2 + " " + "=" + " " + opo;
    window.alert(format);
    console.info(format);
});

// Zarb
btnzarb.addEventListener('click', function () {
    const txtnum1 = Number(document.querySelector('#txtnum1').value);
    const txtnum2 = Number(document.querySelector('#txtnum2').value);
    const txtresult = document.querySelector('#txtresult');
    var opo = txtnum1 * txtnum2;
    txtresult.value = opo;
    var format = "Plus : " + " " + txtnum1 + " " + " * " + " " + txtnum2 + " " + "=" + " " + opo;
    window.alert(format);
    console.info(format);
});

// Taqsim
btntaq.addEventListener('click', function () {
    const txtnum1 = Number(document.querySelector('#txtnum1').value);
    const txtnum2 = Number(document.querySelector('#txtnum2').value);
    const txtresult = document.querySelector('#txtresult');
    var opo = txtnum1 / txtnum2;
    txtresult.value = opo;
    var format = "Plus : " + " " + txtnum1 + " " + " / " + " " + txtnum2 + " " + "=" + " " + opo;
    window.alert(format);
    console.info(format);
});