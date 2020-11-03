let submit = document.querySelector(".submit");

submit.onclick = () => {
    let checkValT1 = document.querySelector(".T1").value;
    let checkValT2 = document.querySelector(".T2").value;

    if(checkValT1.indexOf(',') || checkValT2.indexOf(',')) {
        checkValT1 = checkValT1.replace(',','.')
        checkValT2 = checkValT2.replace(',','.')
    }

    let t1 = parseFloat(checkValT1),
        t2 = parseFloat(checkValT2),
        summary = t1 + t2,
        after100Day = 0,
        after100Night = 0,
        before100Day = 0,
        before100Night = 0,
        kvtAfter100Day = 0,
        kvtAfter100Night = 0;

    
    kvtAfter100Day = (100 / summary) * t1;
    kvtAfter100Night = (100 / summary) * t2;

    if (summary > 100) {
        after100Day = (t1 - kvtAfter100Day) * 1.68;
        after100Night = (t2 - kvtAfter100Night) * 0.84;

        before100Day = (100 / summary) * t1 * 0.9;
        before100Night = (100 / summary) * t2 * 0.45;
    } else {
        before100Day = t1 * 0.9;
        before100Night = t2 * 0.45;
    }


    document.querySelector(".under_100_day_current").innerText = `${parseFloat(before100Day.toFixed(2))} грн`;
    document.querySelector(".under_100_night_current").innerText = `${parseFloat(before100Night.toFixed(2))} грн`;
    document.querySelector(".above_100_day_current").innerText = `${parseFloat(after100Day.toFixed(2))} грн`;
    document.querySelector(".above_100_night_current").innerText = `${parseFloat(after100Night.toFixed(2))} грн`;
    let totalSum =
        parseFloat(before100Day.toFixed(2)) +
        parseFloat(before100Night.toFixed(2)) +
        parseFloat(after100Day.toFixed(2)) +
        parseFloat(after100Night.toFixed(2));
    document.querySelector(".result_number").innerText = `${totalSum.toFixed(2)} грн`;
};
