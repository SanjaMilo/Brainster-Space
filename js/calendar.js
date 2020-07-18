// Making the Calendar 

// Getting today date:  day, month, year
let now = new Date();
let nowMonth = now.getMonth();
let nowYear = now.getFullYear();

let monthsArr = ['Јануари', 'Февруари', 'Март', 'Април', 'Мај', 'Јуни', 'Јули', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември'];

// Events to be added in the Calendar schedule 
let events = [{
        date: new Date(2020, 5, 9),
        title: 'Deep dive into Data Science',
        time: '10:00 - 18:00',
        day: 'Ден 1',
        bgColor: 'blue',
        color: 'white'
    },
    {
        date: new Date(2020, 5, 10),
        title: 'Deep dive into Data Science',
        time: '10:00 - 12:00',
        day: 'Ден 2',
        bgColor: 'blue',
        color: 'white'
    },
    {
        date: new Date(2020, 5, 23),
        title: 'Deep dive into Marketing',
        time: '12:00 - 18:00',
        day: 'Ден 1',
        bgColor: 'red',
        color: 'white'
    },
    {
        date: new Date(2020, 5, 24),
        title: 'Deep dive into Marketing',
        time: '10:00 - 16:00',
        day: 'Ден 2',
        bgColor: 'red',
        color: 'white'
    },
    {
        date: new Date(2020, 7, 15),
        title: 'Deep dive into Data Science',
        time: '10:00 - 16:00',
        day: 'Ден 1',
        bgColor: 'orange',
        color: 'white'
    },
    {
        date: new Date(2020, 7, 16),
        title: 'Deep dive into Data Science',
        time: '10:00 - 16:00',
        day: 'Ден 2',
        bgColor: 'orange',
        color: 'white'
    }
]

let prevBtn = document.querySelector('#previous');
let nextBtn = document.querySelector('#next');

// invoking the f-unction for showing the created Calendar
showCalendar(nowMonth, nowYear, events);

function previousFunc() {
    nowYear = (nowMonth == 0) ? nowYear - 1 : nowYear;
    nowMonth = (nowMonth == 0) ? 11 : nowMonth - 1;
    showCalendar(nowMonth, nowYear, events);
};

function nextFunc() {
    nowYear = (nowMonth == 11) ? nowYear + 1 : nowYear;
    nowMonth = (nowMonth + 1) % 12;
    showCalendar(nowMonth, nowYear, events);
}

prevBtn.addEventListener('click', previousFunc);
nextBtn.addEventListener('click', nextFunc);

// Function for creating and showing the Calendar
function showCalendar(month, year, event) {

    let today = new Date();
    let firstDay = new Date(year, month).getDay();
    let totalDays = 32 - new Date(year, month, 32).getDate();
    // Calendar container with monthly numbers of days
    let calendarCont = document.querySelector('.month-num');
    // 'month - year' in selection of previous and nest 
    let monthYear = document.querySelector('.month-year');
    let viewedMonth = monthsArr[month]; // test
    console.log(viewedMonth);
    monthYear.innerHTML = `${monthsArr[month]} ${year}`;
    calendarCont.innerHTML = "";
    // scheduled events for a specific month of the year
    let theseEvents = event.filter(even => even.date.getFullYear() == year && even.date.getMonth() == month);
    console.log(theseEvents); // test

    let date = 1;

    for (let i = 0; i < 6; i++) {
        let week = document.createElement('div');
        week.classList.add('weeks');

        for (let j = 0; j < 7; j++) {

            if (i == 0 && j < firstDay) {
                let emptyCell = document.createElement('div');
                emptyCell.classList.add('empty');
                week.appendChild(emptyCell);

            } else if (date <= totalDays) {
                let numCell = document.createElement('div');
                numCell.classList.add('num');

                if (date == today.getDate() && month == today.getMonth() && year == today.getFullYear()) {
                    numCell.classList.add('today');
                };

                let numCellEvent = "";

                let w = window.innerWidth;
                let eventPlan = document.querySelector('.event-plan');
                let leftSideBlue = document.querySelector('.blue');
                let rightSideRed = document.querySelector('.red');

                if (theseEvents.length) {
                    let todayEvent = theseEvents.filter(eve => eve.date.getDate() == date);
                    console.log(todayEvent); // test

                    if (todayEvent.length && w > 992) {
                        numCell.classList.add('event');

                        todayEvent.forEach(ev => {
                            numCellEvent += `<div class="eve" style="border-left:4px solid ${ev.bgColor}"><div>${ev.title}</div><div>${ev.time}</div><div>${ev.day}</div></div><span style="color:white !important">${date}</span>`;
                            numCell.style.backgroundColor = ev.bgColor;
                            numCell.style.color = ev.color;
                        });
                    };

                    // extra for tablet and mobile start 

                    if (todayEvent.length && w < 993) {
                        numCell.classList.remove('event');

                        todayEvent.forEach(ev => {
                            console.log(todayEvent); // test
                            if (ev.date.getMonth() == monthsArr.indexOf(viewedMonth)) {
                                console.log(monthsArr.indexOf(viewedMonth)); // test 4 i ne se menuva, juni vo 5
                                eventPlan.style.display = 'block';
                                console.log(ev.date.getMonth()); // test 4

                                if (ev.bgColor == 'blue') {
                                    leftSideBlue.innerHTML += `<div class="left-event">
                                    <p class="date">${ev.date.getDate()}/${ev.date.getMonth()}/${ev.date.getFullYear()}</p>
                                    <h5 class="title">${ev.title}</h5>
                                    <p class="hours">${ev.time}ч</p>
                                    </div>`;
                                    numCell.style.backgroundColor = ev.bgColor;
                                    numCell.style.color = ev.color;
                                }

                                if (ev.bgColor == 'red') {
                                    rightSideRed.innerHTML += `<div class="right-event">
                                    <p class="date">${ev.date.getDate()}/${ev.date.getMonth()}/${ev.date.getFullYear()}</p>
                                    <h5 class="title">${ev.title}</h5>
                                    <p class="hours">${ev.time}ч</p>
                                    </div>`;
                                    numCell.style.backgroundColor = ev.bgColor;
                                    numCell.style.color = ev.color;
                                }

                                if (ev.bgColor == 'orange') {
                                    leftSideBlue.innerHTML += `<div class="left-event-orange">
                                    <p class="date">${ev.date.getDate()}/${ev.date.getMonth()}/${ev.date.getFullYear()}</p>
                                    <h5 class="title">${ev.title}</h5>
                                    <p class="hours">${ev.time}ч</p>
                                    </div>`;
                                    numCell.style.backgroundColor = ev.bgColor;
                                    numCell.style.color = ev.color;
                                }

                                // } else if (monthsArr.indexOf(viewedMonth) != ev.date.getMonth()) {
                                //     eventPlan.style.display = 'none'; // ne raboti
                            }

                        });

                    };

                } else if (!theseEvents.length) { // ova raboti 
                    leftSideBlue.innerHTML = '';
                    rightSideRed.innerHTML = '';
                    eventPlan.style.display = 'none';
                };
                // extra for tablet and mobile ends here

                numCell.innerHTML = (numCellEvent == "") ?
                    `<span>${date}</span>` : numCellEvent;

                week.appendChild(numCell);

                date++;

            } else if (date > totalDays) {
                let emptyCell = document.createElement('div');
                emptyCell.classList.add('empty');
                week.appendChild(emptyCell);
            };

        };

        calendarCont.appendChild(week);
    };

};