var app = (function () {

    class Point{
        constructor(x,y){
            this.x=x;
            this.y=y;
        }        
    }
    
    var stompClient = null;

    var addPointToCanvas = function (point) {        
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(point.x, point.y, 3, 0, 2 * Math.PI);
        ctx.stroke();
    };
    
    
    var getMousePosition = function (evt) {
        canvas = document.getElementById("canvas");
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    };

    var sendPoint = function(px,py){
        var pt = new Point(px,py)
        stompClient.send("/topic/newpoint", {}, JSON.stringify(pt)); 
    };


    var connectAndSubscribe = function (callback) {
        console.info('Connecting to WS...');
        var socket = new SockJS('/stompendpoint');
        stompClient = Stomp.over(socket);
        
        //subscribe to /topic/TOPICXX when connections succeed
        stompClient.connect({}, function (frame) {
            console.log('Connected: ' + frame);
            stompClient.subscribe('/topic/newpoint', function (eventbody) {
                var theObject=JSON.parse(eventbody.body);
                callback(theObject.x,theObject.y)
                //alert(theObject.x + " " +theObject.y)
                
            });
        });
    };
    
	var initMouse = function () {
		console.info('initialized');
		var canvas = document.getElementById("canvas")
		context = canvas.getContext("2d");

		if (window.PointerEvent) {
			canvas.addEventListener("pointerdown", draw, false);
		}
    };
    
    var draw = function () {
        var canvas = document.getElementById("canvas")
        context = canvas.getContext("2d");
        var offsetleft = parseInt(getOffset(canvas).left, 10);
	    var offsettop = parseInt(getOffset(canvas).top, 10);
       // var posicion = getMousePosition(evt);
        var x =  event.pageX - offsetleft;
        var y =  event.pageY - offsettop;
        app.publishPoint(x,y);
        //connectAndSubscribe(app.publishPoint)
    };
    
    var getOffset = function (obj) {
		var offsetLeft = 0;
		var offsetTop = 0;
		do {
			if (!isNaN(obj.offsetLeft)) {
				offsetLeft += obj.offsetLeft;
			}
			if (!isNaN(obj.offsetTop)) {
				offsetTop += obj.offsetTop;
			}
		} while (obj = obj.offsetParent);
		return { left: offsetLeft, top: offsetTop };
	};
    

    return {

        init: function () {
            var can = document.getElementById("canvas");
            
            //websocket connection
            connectAndSubscribe(app.publishPoint);
            initMouse();

        },

        publishPoint: function(px,py){
            var pt=new Point(px,py);
            console.info("publishing point at "+pt);
            addPointToCanvas(pt);
            sendPoint(px,py);
            //publicar el evento
        },



        disconnect: function () {
            if (stompClient !== null) {
                stompClient.disconnect();
            }
            setConnected(false);
            console.log("Disconnected");
        }
    };

})();