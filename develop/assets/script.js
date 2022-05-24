var todaysDate = moment().format('MMMM d, YYYY')
var workTimes = ['8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm'];
var twentyFourHour = [8, 9, 10, 11, 12, 13, 14, 15, 16];
var currentHour = moment().hour()

// show todays date
document.getElementById('currentDay').innerHTML = todaysDate;


for (var a = 0; a < twentyFourHour.length; a++) {

    var LSGI = localStorage.getItem(a)
    $("#" + workTimes[a]).val(LSGI)

    if (currentHour === twentyFourHour[a]) {
        $("#" + workTimes[a]).addClass("present")

    } else if (currentHour > twentyFourHour[a]) {
        $("#" + workTimes[a]).addClass("past")

    } else if (currentHour < twentyFourHour[a]) {
        $("#" + workTimes[a]).addClass("future")
    }
};


// save button functionality
$(".saveBtn").on("click", function () {
    var saveInfo = $(this).attr("data-id")
    localStorage.setItem(saveInfo, $("#" + workTimes[saveInfo]).val())
});