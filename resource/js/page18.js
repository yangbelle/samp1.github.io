var datalist = [];
var targetList=document.getElementById("list");
function addToLeft() {
    var inputVal = document.getElementById("inputVal").value.trim();
    if (!isNaN(inputVal)&&inputVal.length!=0) {
        datalist.unshift(inputVal);
        document.getElementById("inputVal").value = '';
        renderList();
    } else {
        alert("请输入合理数字");
    }
}
function addToRight() {
    var inputVal = document.getElementById("inputVal").value.trim();
    if (!isNaN(inputVal) && inputVal.length != 0) {
        datalist.push(inputVal);
        document.getElementById("inputVal").value ="";
        renderList();
    } else {
        alert("请输入合理数字");
    }
}
function delFromLeft() {
   // var inputVal = document.getElementById("inputVal").innerText.trim();
    var firstItem=datalist.shift();
    alert("您删除的数字是" + firstItem)
        renderList();
}
function delFromRight() {
        
    var lastItem = datalist.pop();
    alert("您删除的数字是"+lastItem)
        renderList();

}
function delSelectedItem() {
    //var item = this.innerText;
    var index = this.getAttribute('value');
   // alert("第" + index + "是" + item);
    datalist.splice(index, 1);
    renderList();
}
function addEventHandler(elem, event, hander) {
    if (elem.addEventListener) {
        elem.addEventListener(event,hander,false);
    } else if (elem.attachEvent) {
        elem.attachEvent('on'+event,hander);
    } else {
        elem['on' + event] = hander;
    }
}
function renderList(){
    var html='';
    for(var i=0;i<datalist.length;i++)
    {
        html += "<span class=\"delEvent\" value=\""+i+"\">" + datalist[i] + "</span>";
    }
    targetList.innerHTML = html;
    var span = document.getElementById("list").getElementsByTagName('span');
    for (var i = 0; i < span.length; i++) {
        addEventHandler(span[i], 'click', delSelectedItem);
    }
}

function init(){
    renderList();
}
init();