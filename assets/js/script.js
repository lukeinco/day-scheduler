var hourNine = document.getElementById("hour-9");
var hourTen = document.getElementById("hour-10");
var hourEleven = document.getElementById("hour-11");
var hourTwelve = document.getElementById("hour-12");
var hourOne = document.getElementById("hour-1");
var hourTwo = document.getElementById("hour-2");
var hourThree = document.getElementById("hour-3");
var hourFour = document.getElementById("hour-4");
var hourFive = document.getElementById("hour-5");
var hour = [
    {
        function: hourNine,
        number: 9,
        selector: document.querySelector("#nine")
    },
    {
        function: hourTen,
        number: 10,
        selector: document.querySelector("#ten")
    },
    {
        function: hourEleven,
        number: 11,
        selector: document.querySelector("#eleven")
    },
    {
        function: hourTwelve,
        number: 12,
        selector: document.querySelector("#twelve")
    }, {
        function: hourOne,
        number: 13,
        selector: document.querySelector("#one")
    }, {
        function: hourTwo,
        number: 14,
        selector: document.querySelector("#two")
    }, {
        function: hourThree,
        number: 15,
        selector: document.querySelector("#three")
    }, {
        function: hourFour,
        number: 16,
        selector: document.querySelector("#four")
    }, {
        function: hourFive,
        number: 17,
        selector: document.querySelector("#five")
    }
]
var currentDay = document.getElementById("currentDay");
var textAreaNine = document.getElementById("nine");
var textAreaTen = document.getElementById("ten");
var textAreaEleven = document.getElementById("eleven");
var textAreaTwelve = document.getElementById("twelve");
var textAreaOne = document.getElementById("one");
var textAreaTwo = document.getElementById("two");
var textAreaThree = document.getElementById("three");
var textAreaFour = document.getElementById("four");
var textAreaFive = document.getElementById("five");
textAreaNine.textContent = localStorage.getItem("9AM");
textAreaTen.textContent = localStorage.getItem("10AM");
textAreaEleven.textContent = localStorage.getItem("11AM");
textAreaTwelve.textContent = localStorage.getItem("12PM");
textAreaOne.textContent = localStorage.getItem("1PM");
textAreaTwo.textContent = localStorage.getItem("2PM");
textAreaThree.textContent = localStorage.getItem("3PM");
textAreaFour.textContent = localStorage.getItem("4PM");
textAreaFive.textContent = localStorage.getItem("5PM");

$(function () {
    setInterval(timer, 1000);
    function timer() {
        time++;
        var time = currentDay.textContent = (dayjs().format('MMM D YYYY h:mm:ss A'));
    }
    timer();


    function pastTimeBlock(time) {
        document.children[0].children[1].children[1].children[time].setAttribute("class", "row time-block past")
    }
    function futureTimeBlock(time) {
        document.children[0].children[1].children[1].children[time].setAttribute("class", "row time-block future")
    }
    function presentTimeBlock(time) {
        document.children[0].children[1].children[1].children[time].setAttribute("class", "row time-block present")
    }

    var currentTime = (dayjs().format('H'));

    for (let i = 0; i < hour.length; i++) {
        if (hour[i].number<currentTime) {
            pastTimeBlock(i);
        } else if (hour[i].number>currentTime) {
            futureTimeBlock(i);
            console.log(hour[i].number);
        } else if (hour[i].number = currentTime) {
            presentTimeBlock(i);
            console.log(hour[i].number);
        }

    }

    var buttonContainer = document.querySelector(".container-lg")
    buttonContainer.addEventListener("click", saveEvent)
    function saveEvent(event) {
        if (event.target.classList[0] === 'btn') {
            var textBox = event.target.previousElementSibling;
            localStorage.setItem(textBox.previousElementSibling.innerHTML, textBox.value)
        }
    }
});
