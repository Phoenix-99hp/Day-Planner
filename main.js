$("#currentDay").text(moment().format("MMMM Do YYYY"));

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
    var currentTimeChars = currentTime.charAt(0) + currentTime.charAt(1);
    if (currentTimeChars.includes(":") === true) {
        var slicedTimeChar = currentTimeChars.slice(0, 1);
        currentTimeChars = slicedTimeChar;
    }
    if ((currentTime.charAt(5) == "P") && (currentTimeChars < 12) && (currentTimeChars > 5) || ((currentTime.charAt(6) == "P") && (currentTimeChars < 12) && (currentTimeChars > 5))) {
        $(".time-block").css("background-color", "rgb(207, 204, 204)");
    }
    else if ((currentTime.charAt(0) < 9) && (currentTime.charAt(5) === "A")) {
        $(".time-block").css("background-color", "rgb(207, 204, 204)");
    }
    else if ((currentTimeChars == 12) && (currentTime.charAt(6) === "A")) {
        $(".time-block").css("background-color", "rgb(207, 204, 204)");
    }
    else if ((currentTimeChars == 9) && (currentTime.charAt(5) === "A")) {
        $(".hour").each(function () {
            if ($(this).attr("data-name") > 0) {
                $(this).next().css("background-color", "yellowgreen");
            }
            else if ($(this).attr("data-name") == 0) {
                $(this).next().css("background-color", "red");
            }
        })
    }
    else if ((currentTimeChars == 10) && (currentTime.charAt(6) === "A")) {
        $(".hour").each(function () {
            if ($(this).attr("data-name") > 1) {
                $(this).next().css("background-color", "yellowgreen");
            }
            else if ($(this).attr("data-name") < 1) {
                $(this).next().css("background-color", "rgb(207, 204, 204)");
            }
            else if ($(this).attr("data-name") == 1) {
                $(this).next().css("background-color", "red");
            }
        })
    }
    else if ((currentTimeChars == 11) && (currentTime.charAt(6) === "A")) {
        $(".hour").each(function () {
            if ($(this).attr("data-name") > 2) {
                $(this).next().css("background-color", "yellowgreen");
            }
            else if ($(this).attr("data-name") < 2) {
                $(this).next().css("background-color", "rgb(207, 204, 204)");
            }
            else if ($(this).attr("data-name") == 2) {
                $(this).next().css("background-color", "red");
            }
        })
    }
    else if ((currentTimeChars == 12) && (currentTime.charAt(6) === "P")) {
        $(".hour").each(function () {
            if ($(this).attr("data-name") > 3) {
                $(this).next().css("background-color", "yellowgreen");
            }
            else if ($(this).attr("data-name") < 3) {
                $(this).next().css("background-color", "rgb(207, 204, 204)");
            }
            else if ($(this).attr("data-name") == 3) {
                $(this).next().css("background-color", "red");
            }
        })
    }
    else if ((currentTimeChars == 1) && (currentTime.charAt(5) === "P")) {
        $(".hour").each(function () {
            if ($(this).attr("data-name") > 4) {
                $(this).next().css("background-color", "yellowgreen");
            }
            else if ($(this).attr("data-name") < 4) {
                $(this).next().css("background-color", "rgb(207, 204, 204)");
            }
            else if ($(this).attr("data-name") == 4) {
                $(this).next().css("background-color", "red");
            }
        })
    }
    else if ((currentTimeChars == 2) && (currentTime.charAt(5) === "P")) {
        $(".hour").each(function () {
            if ($(this).attr("data-name") > 5) {
                $(this).next().css("background-color", "yellowgreen");
            }
            else if ($(this).attr("data-name") < 5) {
                $(this).next().css("background-color", "rgb(207, 204, 204)");
            }
            else if ($(this).attr("data-name") == 5) {
                $(this).next().css("background-color", "red");
            }
        })
    }
    else if ((currentTimeChars == 3) && (currentTime.charAt(5) === "P")) {
        $(".hour").each(function () {
            if ($(this).attr("data-name") > 6) {
                $(this).next().css("background-color", "yellowgreen");
            }
            else if ($(this).attr("data-name") < 6) {
                $(this).next().css("background-color", "rgb(207, 204, 204)");
            }
            else if ($(this).attr("data-name") == 6) {
                $(this).next().css("background-color", "red");
            }
        })
    }
    else if ((currentTimeChars == 4) && (currentTime.charAt(5) === "P")) {
        $(".hour").each(function () {
            if ($(this).attr("data-name") > 7) {
                $(this).next().css("background-color", "yellowgreen");
            }
            else if ($(this).attr("data-name") < 7) {
                $(this).next().css("background-color", "rgb(207, 204, 204)");
            }
            else if ($(this).attr("data-name") == 7) {
                $(this).next().css("background-color", "red");
            }
        })
    }
    else if ((currentTimeChars == 5) && (currentTime.charAt(5) === "P")) {
        $(".hour").each(function () {
            if ($(this).attr("data-name") > 8) {
                $(this).next().css("background-color", "yellowgreen");
            }
            else if ($(this).attr("data-name") < 8) {
                $(this).next().css("background-color", "rgb(207, 204, 204)");
            }
            else if ($(this).attr("data-name") == 8) {
                $(this).next().css("background-color", "red");
            }
        })
    }
}