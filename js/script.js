let submit = document.querySelector('.submit');

submit.onclick = () => {
    let t1 = document.querySelector('.T1').value;
    let t2 = document.querySelector('.T2').value;
    let summary = Number(t1) + Number(t2);
    let underDay = 100 / summary * Number(t1) * 0.9;
    let underNight = 100 / summary * Number(t2) * 0.45;
    let aboveDay = (Number(t1) - (100 / summary * Number(t1))) * 1.68;
    let aboveNight = (Number(t2) - (100 / summary * Number(t2))) * 0.84;
    document.querySelector('.under_100_day_current').innerText = ""+parseFloat(underDay.toFixed(2))+" грн";
    document.querySelector('.under_100_night_current').innerText = ""+parseFloat(underNight.toFixed(2))+" грн";
    document.querySelector('.above_100_day_current').innerText = ""+parseFloat(aboveDay.toFixed(2))+" грн";
    document.querySelector('.above_100_night_current').innerText = ""+parseFloat(aboveNight.toFixed(2))+" грн";
    let totalSum = parseFloat(underDay.toFixed(2)) + parseFloat(underNight.toFixed(2)) + parseFloat(aboveDay.toFixed(2)) + parseFloat(aboveNight.toFixed(2));
    document.querySelector('.result_number').innerText = ""+totalSum+" грн";
    console.log(underDay.toFixed(2));
    console.log(summary);
}
