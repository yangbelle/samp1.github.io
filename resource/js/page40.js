/*var date = {
    "Jan": { 1: 31 },
    "Feb": { 2: 28 },
    "Mar": { 3: 31 },
    "Apr": { 4: 30 },
    "May": { 5: 31 },
    "Jun": { 6: 30 },
    "Jul": { 7: 31 },
    "Aug": { 8: 31 },
    "Sep": { 9: 30 },
    "Oct": { 10: 31 },
    "Nov": { 11: 30 },
    "Dec": { 12: 31 }
}*/
var date = {
    "Jan": 31,
    "Feb": 28,
    "Mar": 31,
    "Apr": 30,
    "May": 31,
    "Jun": 30,
    "Jul": 31,
    "Aug": 31,
    "Sep": 30,
    "Oct": 31,
    "Nov": 30,
    "Dec": 31
};
var inputMon, inputYear, calendar, monthUp, monthDown, yearUp, yearDown, monName,tableDayVal,selectDate;
function getObject() {
     inputMon = document.getElementById("month");
     inputYear = document.getElementById("year");
     calendar = document.getElementById("calendar");
     monthUp = document.getElementById("month_up");
     monthDown = document.getElementById("month_down");
     yearUp = document.getElementById("year_up");
     yearDown = document.getElementById("year_down");
     selectDate = document.getElementById("selectDate");
     monName = Object.getOwnPropertyNames(date);
}
function listenerEventHandler(elem, event, handler) {
    if (elem.addEventListener) {
        elem.addEventListener(event, handler, false);
    } else if (elem.attachEvent) {
        elem.attachEvent("on" + event, handler);
    } else {
        elem["on" + event] = handler;
    }
}
function addListener() {
    listenerEventHandler(monthUp, "click", monthUpFun);
    listenerEventHandler(monthDown, "click", monthDownFun);
    listenerEventHandler(yearUp, "click", yearUpFun);
    listenerEventHandler(yearDown, "click", yearDownFun);
}
function monthUpFun() {
    var monthNameIndex = monName.indexOf(inputMon.value);
    if (monthNameIndex == 0) {
        inputMon.value = monName[11];
    } else{
        inputMon.value = monName[monthNameIndex - 1];
    }
    changeDate();
}
function monthDownFun() {
    var monthNameIndex = monName.indexOf(inputMon.value);
    if (monthNameIndex == 11) {
        inputMon.value = monName[0];
    } else{
        inputMon.value = monName[monthNameIndex + 1];
    }
    changeDate();
}
function yearUpFun() {
    inputYear.value = parseInt(inputYear.value) + 1;
    changeDate();
}
function yearDownFun() {
    inputYear.value = parseInt(inputYear.value) - 1;
    changeDate();
}
/*function fun() {
    this.style.backgroundColor = "#00FFFF";
    var monSelect = parseInt(monName.indexOf(inputMon.value)) + 1;
    var daySelect = this.target.innerText.trim();
    if (monSelect < 10) {
        monSelect = "0" + monSelect;
    }
    if (daySelect < 10) {
        daySelect = "0" + daySelect;
    }
    selectDate.value = inputYear.value + "/" + monSelect + "/" + daySelect;
}*/
function nowDate() {
    var now = new Date();
    var mon = now.getMonth();
    var year = now.getFullYear();
    var firstDay = '';
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
    {
        date["Feb"]= 28;
    } else {
        date["Feb"] = 28;
    }
    inputMon.setAttribute("value",monName[mon]);
    inputYear.setAttribute("value", year);
    firstDay = (new Date(year, mon, 1)).getDay();
    setCalendar(year, date[monName[mon]], firstDay);
   // alert(firstDay);
}
function changeDate() {
    getObject();
    var year = inputYear.value;
    var mon = inputMon.value;
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        date["Feb"] = 29;
    } else {
        date["Feb"] = 28;
    }
    var firstDay = (new Date(year, monName.indexOf(mon), 1)).getDay();
    calendar.innerHTML = '';
    var sd = date[mon];
    setCalendar(year, date[mon], firstDay);
}
function setCalendar(year,mon,firstWeekDay) {
    var html = '';
    var calendarDay = 0;
    var trNum = Math.ceil((mon + firstWeekDay) / 7);
    html += "<thead><tr><th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th></tr></thead><tbody id=\"tableDayVal\">";
    for (var tr = 0; tr < trNum; tr++) {
        html += "<tr>";
        for (var td = 0; td < 7&&calendarDay<mon; td++) {
            if (tr == 0) {
                if (td < firstWeekDay) {
                    html += "<td></td>";
                } else {
                    calendarDay++;
                    html += "<td>" + calendarDay + "</td>"
                }
            } else {
                calendarDay++;
                html += "<td>" + calendarDay + "</td>"
            }
        }
        html += "</tr>";
    }
    html += "</tbody>";
    calendar.innerHTML = calendar.innerHTML + html;
    tableDayVal = document.getElementById("tableDayVal");
  //  listenerEventHandler(tableDayVal, "click", fun);
    listenerEventHandler(tableDayVal, "click", function (elem) {
        //var pattern = /<td\s+class=\"select\">([^<>]*)<\/td>/gi;
       // tableDayVal.innerHTML.replace(pattern, "<td>$1</td>");
       elem.target.setAttribute("class", "select");
        var monSelect = parseInt(monName.indexOf(inputMon.value)) + 1;
        var daySelect=elem.target.innerText.trim();
        if (monSelect < 10) {
            monSelect = "0" + monSelect;
        }
        if (daySelect < 10) {
            daySelect = "0" + daySelect;
        }
        selectDate.value = inputYear.value + "/" + monSelect + "/" + daySelect;
    });
}
function init() {
    getObject();
    nowDate();
    addListener();
}
init();