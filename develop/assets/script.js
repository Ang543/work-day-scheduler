var todaysDate = moment().format('MMMM d, YYYY')
var workTimes = ['8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm'];

// show todays date
document.getElementById('currentDay').innerHTML = todaysDate;


$(".saveBtn").on("click", function() {
    var saveInfo = $(this).attr("data-id")


    localStorage.setItem(saveInfo, $("#" + workTimes[saveInfo]).val())
});