/* 数据格式演示
var aqiSourceData = {
"北京": {
"2016-01-01": 10,
"2016-01-02": 10,
"2016-01-03": 10,
"2016-01-04": 10
}
};
*/

// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
    var y = dat.getFullYear();
    var m = dat.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = dat.getDate();
    d = d < 10 ? '0' + d : d;
    return y + '-' + m + '-' + d;
}
function randomBuildData(seed) {
    var returnData = {};
    var dat = new Date("2016-01-01");
    var datStr = '';
    for (var i = 1; i < 92; i++) {
        datStr = getDateStr(dat);
        returnData[datStr] = Math.ceil(Math.random() * seed);
        dat.setDate(dat.getDate() + 1);
    }
    return returnData;
}

var aqiSourceData = {
    "北京": randomBuildData(500),
    "上海": randomBuildData(300),
    "广州": randomBuildData(200),
    "深圳": randomBuildData(100),
    "成都": randomBuildData(300),
    "西安": randomBuildData(500),
    "福州": randomBuildData(100),
    "厦门": randomBuildData(100),
    "沈阳": randomBuildData(500)
};

// 用于渲染图表的数据
var chartData = {};
var cityName = Object.getOwnPropertyNames(aqiSourceData);

// 记录当前页面的表单选项
var pageState = {
    nowSelectCity: -1,
    nowGraTime: "day"
}

/**
 * 渲染图表
 */
function renderChart() {
    var target = document.getElementsByClassName("aqi-chart-wrap")[0];
    var html='', backgroundColor;
    var citydata=chartData[pageState.nowGraTime][pageState.nowSelectCity];
    for (var item in citydata) {
        backgroundColor = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
        html+="<div title="+item+" style=\"height:"+citydata[item]+"px;background-color:"+backgroundColor+"\"></div>"
    }
    target.innerHTML = html;
}

/**
 * 日、周、月的radio事件点击时的处理函数
 */
function graTimeChange() {
    // 确定是否选项发生了变化 
    var clickVal = this.value;
    if (pageState.nowGraTime != clickVal) {
        pageState.nowGraTime = clickVal;
        renderChart();
    }
    // 设置对应数据

    // 调用图表渲染函数
}

/**
 * select发生变化时的处理函数
 */
function citySelectChange() {
    // 确定是否选项发生了变化 
    var selectItem = this.value;
    if (selectItem != pageState.nowSelectCity) {
        pageState.nowSelectCity = selectItem;
        renderChart();
    }

    // 设置对应数据

    // 调用图表渲染函数
}
function addEventHandler(elem, event, handler) {
    if (elem.addEventListener) {
        elem.addEventListener(event, handler,false);
    } else if (elem.attachEvent) {
        elem.attachEvent('on' + event, handler)
    } else {
        elem['on' + event] = handler;
    }
}
/**
 * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
 */
function initGraTimeForm() {
    var clickItem = document.getElementById("form-gra-time").getElementsByTagName("input");
    for (var i = 0; i < clickItem.length; i++) {
        addEventHandler(clickItem[i], 'click', graTimeChange);
    }
}

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
    // 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项
    var selectCityList = document.getElementById("city-select");
    var html;
    for (var i = 0; i < cityName.length; i++) {
        html += "<option>" + cityName[i] + "</option>";
        selectCityList.innerHTML = html;
    }
    pageState.nowSelectCity = cityName[0];
    // 给select设置事件，当选项发生变化时调用函数citySelectChange
    addEventHandler(selectCityList, 'change', citySelectChange);
}

/**
 * 初始化图表需要的数据格式
 */
function initAqiChartData() {
    // 将原始的源数据处理成图表需要的数据格式
    // 处理好的数据存到 chartData 中
    var daydata = {};
    var monthdata = {};
    var weekdata = {};
    var cityNum = 0;
    for (var city in aqiSourceData) {
        var singleWeek = {};
        var singleMon = {};
        var allcityval = aqiSourceData[city];
        var singleCityVal = Object.getOwnPropertyNames(allcityval);
        var countWeek = 1;
        var weekVal = 0, monthVal = 0;
        for (var i = 0, weekNum = 1, monNum = 1; i < singleCityVal.length; i++, weekNum++, monNum++) {
            var cityMonValDefault = singleCityVal[i].slice(5, 7);
       //   var cityMonDayDefault = singleCityVal[i].slice(-2);
            if (i != singleCityVal.length - 1) {
                var cityMonVal = singleCityVal[i + 1].slice(5, 7);
                var cityMonDay = singleCityVal[i + 1].slice(-2);
            }
            if (cityMonValDefault != cityMonVal || weekNum % 7 == 0 || i == singleCityVal.length - 1) {
                if (weekNum % 7 == 0) {
                    var weekDescribe = cityName[cityNum] + singleCityVal[i].slice(0, 7) + "第" + countWeek + "周";
                    singleWeek[weekDescribe] = weekVal / 7;
                    weekVal = 0;
                    countWeek++;
                    weekNum = 1;
                } else if (cityMonValDefault != cityMonVal && (monNum - 7 * countWeek) > 0) {
                    weekDescribe = cityName[cityNum] + singleCityVal[i - 1].slice(0, 7) + "第" + countWeek + 1 + "周";
                    singleWeek[weekDescribe] = weekVal / (monNum - 7 * countWeek);
                    weekVal = allcityval[singleCityVal[i]];
                    countWeek = 1;
                    weekNum = 1;
                } else if (i == singleCityVal.length - 1) {
                    weekDescribe = cityName[cityNum] + singleCityVal[i].slice(0, 7) + "第" + countWeek + "周";
                    singleWeek[weekDescribe] = weekVal / weekNum;


                }
                if (cityMonValDefault != cityMonVal && i < singleCityVal.length - 1) {
                    var monDescribe = cityName[cityNum] + singleCityVal[i].slice(0, 4) + "第" + cityMonValDefault + "月";
                    singleMon[monDescribe] = monthVal / monNum;
                  //  alert(monDescribe + singleMon[monDescribe]);
                    monthVal = 0;
                    cityMonValDefault = cityMonVal;
                   // cityMonDayDefault = cityMonDay;
                    monNum = 1;
                    countWeek = 1;
                } else if (i == singleCityVal.length - 1) {
                    var monDescribe = cityName[cityNum] + singleCityVal[i].slice(0, 4) + "第" + cityMonValDefault + "月";
                    singleMon[monDescribe] = monthVal / monNum;
                }
            }
            weekVal += allcityval[singleCityVal[i]];
            monthVal += allcityval[singleCityVal[i]];
        }
        weekdata[city] = singleWeek;
        monthdata[city] = singleMon;
        cityNum++;
    }
    chartData.day = aqiSourceData;
    chartData.week = weekdata;
    chartData.month = monthdata;
    renderChart();
}

/**
 * 初始化函数
 */
function init() {
    initGraTimeForm()
    initCitySelector();
    initAqiChartData();
}

init();