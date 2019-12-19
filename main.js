plans = [];

init();

$(".saveBtn").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    var planText = e.currentTarget.parentElement.previousElementSibling.children[0].value.trim();
    var time = e.currentTarget.parentElement.previousElementSibling.previousElementSibling.textContent;
    var newPlanObject = { time: time, planText: planText };
    plans.push(newPlanObject);
    storePlans();
})

function renderPlans() {
    for (var i = 0; i < plans.length; i++) {

        if (plans[i].time == $("#nineAM").text()) {
            $("#nineAM").next().children().text(plans[i].planText);
        }
        else if (plans[i].time == $("#tenAM").text()) {
            $("#tenAM").next().children().text(plans[i].planText);
        }
        else if (plans[i].time == $("#elevenAM").text()) {
            $("#elevenAM").next().children().text(plans[i].planText);
        }
        else if (plans[i].time == $("#twelvePM").text()) {
            $("#twelvePM").next().children().text(plans[i].planText);
        }
        else if (plans[i].time == $("#onePM").text()) {
            $("#onePM").next().children().text(plans[i].planText);
        }
        else if (plans[i].time == $("#twoPM").text()) {
            $("#twoPM").next().children().text(plans[i].planText);
        }
        else if (plans[i].time == $("#threePM").text()) {
            $("#threePM").next().children().text(plans[i].planText);
        }
        else if (plans[i].time == $("#fourPM").text()) {
            $("#fourPM").next().children().text(plans[i].planText);
        }
        else if (plans[i].time == $("#fivePM").text()) {
            $("#fivePM").next().children().text(plans[i].planText);
        }

        else {
            console.log("kinda working?");
        }
    }
}

function init() {
    var storedPlans = JSON.parse(localStorage.getItem("plans"));
    if (storedPlans !== null) {
        plans = storedPlans;
    }
    renderPlans();
}

function storePlans() {
    localStorage.setItem("plans", JSON.stringify(plans));
}