let submit = document.querySelector(".submit");

submit.onclick = () => {
    let checkValT1 = document.querySelector(".T1").value;
    let checkValT2 = document.querySelector(".T2").value;

    if (checkValT1.indexOf(",") || checkValT2.indexOf(",")) {
        checkValT1 = checkValT1.replace(",", ".");
        checkValT2 = checkValT2.replace(",", ".");
    }

    let t1 = parseFloat(checkValT1),
        t2 = parseFloat(checkValT2),
        before100Day = t1 * 1.68,
        before100Night = t2 * 0.84;

    document.querySelector(".under_100_day_current").innerText = `${parseFloat(
        before100Day.toFixed(2)
    )} грн`;
    document.querySelector(
        ".under_100_night_current"
    ).innerText = `${parseFloat(before100Night.toFixed(2))} грн`;
    let totalSum =
        parseFloat(before100Day.toFixed(2)) +
        parseFloat(before100Night.toFixed(2));
    document.querySelector(".result_number").innerText = `${totalSum.toFixed(
        2
    )} грн`;
};
