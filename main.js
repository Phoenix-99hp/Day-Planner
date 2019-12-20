$("#currentDay").text(moment().format("MMMM Do YYYY"));
// var currentTime = moment().format('LT');

plans = [];

init();

$(".saveBtn").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    var planText = e.currentTarget.parentElement.previousElementSibling.children[0].value.trim();
    var time = e.currentTarget.parentElement.previousElementSibling.previousElementSibling.textContent;
    var newPlanObject = { time: time, planText: planText };
    for (var i = 0; i < plans.length; i++) {
        if (newPlanObject.time === plans[i].time) {
            plans.splice(i, 1);
        }
    }
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
    }
}

function init() {
    var storedPlans = JSON.parse(localStorage.getItem("plans"));
    if (storedPlans !== null) {
        plans = storedPlans;
    }
    renderPlans();
    checkCurrentTime();
}

function storePlans() {
    localStorage.setItem("plans", JSON.stringify(plans));
}

function checkCurrentTime() {
    var currentTime = moment().format('LT');
    if ((currentTime.charAt(5) == "P") && (currentTime.charAt(0) < 12)) {
        $(".time-block").css("background-color", "rgb(207, 204, 204)");
    }
    else if ((currentTime.charAt(0) === 9) && (currentTime.charAt(5) === "A")) {
        if ($(".hour").attr("data-name") > 0) {
            $(".hour").next().css("background-color", "green");
        }
        else if ($(".hour").attr("data-name") === 0) {
            $(".hour").css("backgroun-color", "red");
        }
    }
    else if ((currentTime.charAt(0) === 10) && (currentTime.charAt(5) === "A")) {
        if ($(".hour").attr("data-name") > 1) {
            $(".hour").next().css("background-color", "green");
        }
        else if ($(".hour").attr("data-name") < 1) {
            $(".hour").next().css("background-color", "rgb(207, 204, 204)");
        }
        else if ($(".hour").attr("data-name") === 1) {
            $(".hour").next().css("background-color", "red");
        }
    }
    else if ((currentTime.charAt(0) === 11) && (currentTime.charAt(5) === "A")) {
        if ($(".hour").attr("data-name") > 2) {
            $(".hour").next().css("background-color", "green");
        }
        else if ($(".hour").attr("data-name") < 2) {
            $(".hour").next().css("background-color", "rgb(207, 204, 204)");
        }
        else if ($(".hour").attr("data-name") === 2) {
            $(".hour").next().css("background-color", "red");
        }
    }
    else if ((currentTime.charAt(0) === 12) && (currentTime.charAt(5) === "P")) {
        if ($(".hour").attr("data-name") > 3) {
            $(".hour").next().css("background-color", "green");
        }
        else if ($(".hour").attr("data-name") < 3) {
            $(".hour").next().css("background-color", "rgb(207, 204, 204)");
        }
        else if ($(".hour").attr("data-name") === 3) {
            $(".hour").next().css("background-color", "red");
        }
    }
    else if ((currentTime.charAt(0) === 1) && (currentTime.charAt(5) === "P")) {
        if ($(".hour").attr("data-name") > 4) {
            $(".hour").next().css("background-color", "green");
        }
        else if ($(".hour").attr("data-name") < 4) {
            $(".hour").next().css("background-color", "rgb(207, 204, 204)");
        }
        else if ($(".hour").attr("data-name") === 4) {
            $(".hour").next().css("background-color", "red");
        }
    }
    else if ((currentTime.charAt(0) === 2) && (currentTime.charAt(5) === "P")) {
        if ($(".hour").attr("data-name") > 5) {
            $(".hour").next().css("background-color", "green");
        }
        else if ($(".hour").attr("data-name") < 5) {
            $(".hour").next().css("background-color", "rgb(207, 204, 204)");
        }
        else if ($(".hour").attr("data-name") === 5) {
            $(".hour").next().css("background-color", "red");
        }
    }
    else if ((currentTime.charAt(0) === 3) && (currentTime.charAt(5) === "P")) {
        if ($(".hour").attr("data-name") > 6) {
            $(".hour").next().css("background-color", "green");
        }
        else if ($(".hour").attr("data-name") < 6) {
            $(".hour").next().css("background-color", "rgb(207, 204, 204)");
        }
        else if ($(".hour").attr("data-name") === 6) {
            $(".hour").next().css("background-color", "red");
        }
    }
    else if ((currentTime.charAt(0) === 4) && (currentTime.charAt(5) === "P")) {
        if ($(".hour").attr("data-name") > 7) {
            $(".hour").next().css("background-color", "green");
        }
        else if ($(".hour").attr("data-name") < 7) {
            $(".hour").next().css("background-color", "rgb(207, 204, 204)");
        }
        else if ($(".hour").attr("data-name") === 7) {
            $(".hour").next().css("background-color", "red");
        }
    }
    else if ((currentTime.charAt(0) === 5) && (currentTime.charAt(5) === "P")) {
        if ($(".hour").attr("data-name") > 8) {
            $(".hour").next().css("background-color", "green");
        }
        else if ($(".hour").attr("data-name") < 8) {
            $(".hour").next().css("background-color", "rgb(207, 204, 204)");
        }
        else if ($(".hour").attr("data-name") === 8) {
            $(".hour").next().css("background-color", "red");
        }
    }
}


// //     else if ((currentTime.charAt(0) === 9) && (currentTime.charAt(5) === "A")) {
// //         if ($(".time-block").parent().text().charAt(0) === 9) {
// //             $(".time-block").css("background-color", "green");
// //         }
// //         else {
// //             $(".time-block").css("background-color", "rgb(207, 204, 204)")
// //         }
// //     }
// // }


// if (currentTime.charAt(0) + " " + currentTime.charAt(5) + currentTime.charAt(6)) == $("#nineAM")


// for (var i = 0; i < $(".hour").length; i++) {


// }