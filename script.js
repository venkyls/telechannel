//    // Timer functionality
//    let minutes = 1;
//    let seconds = 0;

//    function updateTimer() {
//        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
//        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
//    }

//    function startTimer() {
//        const timerInterval = setInterval(function () {
//            if (minutes === 0 && seconds === 0) {
//                clearInterval(timerInterval);
//                // Implement your logic to handle expiration here
//                alert('Link expired.');
//            } else {
//                if (seconds === 0) {
//                    minutes--;
//                    seconds = 59;
//                } else {
//                    seconds--;
//                }
//                updateTimer();
//            }
//        }, 1000);
//    }

//    // Start the timer when the page loads
//    document.addEventListener('DOMContentLoaded', function () {
//        startTimer();
//    });

let minutes = 1;
    let seconds = 0;

    function updateTimer() {
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }

    function startTimer() {
        const timerInterval = setInterval(function () {
            if (minutes === 0 && seconds === 0) {
                clearInterval(timerInterval);
                document.getElementById('timeout-message').textContent = 'Link expired.';
                document.getElementById('timer').style.display = 'none'; // Hide the timer
            } else {
                if (seconds === 0) {
                    minutes--;
                    seconds = 59;
                } else {
                    seconds--;
                }
                updateTimer();
            }
        }, 1000);
    }

    // Start the timer when the page loads
    document.addEventListener('DOMContentLoaded', function () {
        startTimer();
    });