(function() {
    var currentDay = document.querySelectorAll('.list-hours li')[new Date().getDay()];

    if (currentDay) {
        currentDay.classList.add('today');
    }
})();