var Belle = {};
Belle.ProJS={};
Belle.ProJS.EventUtil = {
    getEvent: function (event) {
        return event ? event : window.event;
    },
    getTarget:function(event){
        return event.target||event.srcElement;
    },
    preventDefault:function(event){
        if(event.preventDefault){
            event.preventDefault();
        }else{
            event.returnValue=false;
        }
    },
    stopPropagation:function(event){
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },
    addHandler: function (elem, type, handler) {
        if (elem.addEventListener) {
            elem.addEventListener(type, handler,false);
        } else if (elem.attachEvent) {
            elem.attachEvent('on' + type, handler.bind(elem));
        } else {
            elem['on' + type] = handler;
        }
    },
}