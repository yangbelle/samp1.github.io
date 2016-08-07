(function () {
    var SPACESHIP_SPEED = 2; //飞船飞行速度
    var canavsWidth = 800;
    var canvasHeight = 800;
    var canvasCenter_x = canavsWidth / 2;
    var canvasCenter_y = canvasHeight / 2;
    var ORDIT_LINES = 4;
    var radius = 50;
    var SPACESHIP_SIZE = 80;
    var mediator = null;
    var DEFAULT_CHARGE_RATE = 0.3; //飞船充电速度
    var DEFAULT_DISCHARGE_RATE = 0.2; //飞船放电速度

    var POWERBAR_POS_OFFSET = 5; //电量条位置位移
    var POWERBAR_COLOR_GOOD = "#70ed3f"; //电量良好状态颜色
    var POWERBAR_COLOR_MEDIUM = "#fccd1f"; //电量一般状态颜色
    var POWERBAR_COLOR_BAD = "#fb0000"; //电量差状态颜色
    var POWERBAR_WIDTH = 5; //电量条宽度
    requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
   
    var animationRealize = function () {
        var canvas = document.getElementById("canvas");
        canvas.width = canavsWidth;
        canvas.height = canvasHeight;
        var ctx = canvas.getContext("2d"); //获取屏幕画布

        var cacheCanvas = document.createElement("canvas");
        cacheCanvas.width = canavsWidth;
        cacheCanvas.height = canvasHeight;
        var cacheCtx = cacheCanvas.getContext("2d"); //生成缓存画布
       function drawPlanet(_ctx) {
           var planet = new Image();
           planet.src = "min-iconfont-planet.png";
           planet.onload = function () {
               _ctx.drawImage(planet, canvasCenter_x - SPACESHIP_SIZE/2, canvasCenter_y - SPACESHIP_SIZE/2, SPACESHIP_SIZE, SPACESHIP_SIZE);
           }
       }
       function drawOrbit(_ctx) {
           for (var i = 0; i < ORDIT_LINES; i++) {
               _ctx.strokeStyle = "#999";
               //  _ctx.strokeStyle = "#999";
               _ctx.beginPath();
               _ctx.arc(canvasCenter_x, canvasCenter_y, 100 + radius * i, 0, 2 * Math.PI);
               _ctx.closePath();
               _ctx.stroke();
           }

       }
       (function () {
           var canvas = document.getElementById("background");
           canvas.height = canvasHeight;
           canvas.width = canavsWidth;
           var ctx = canvas.getContext("2d");

           drawPlanet(ctx);
           drawOrbit(ctx);

       })();
        var drawSpaceship = function (_ctx, spaceship) {
            

            var spaceshipImg = new Image(); //创建飞船贴图
            spaceshipImg.src = "min-iconfont-rocket-active.png";
            spaceshipImg.onload = function () { //当飞船贴图加载后开始在画布上画(由于onload是异步进行的，所以执行顺序上会不是太清晰)
                try { //由于存在获取不了画布的情况产生错误，因此采用try..catch将错误丢弃
                    _ctx.save(); //保存画布原有状态
                    _ctx.translate(canvasCenter_x, canvasCenter_y); //更改画布坐标系，将画布坐标原点移到画布中心
                    _ctx.rotate(-spaceship.deg * Math.PI / 180); //根据飞船飞行角度进行画布选择

                    //画电量条，根据电量状态改变颜色
                    _ctx.beginPath();
                        if (spaceship.power > 60) {
                              _ctx.strokeStyle = POWERBAR_COLOR_GOOD;
                          } else if (spaceship.power <= 60 && spaceship.power >= 20) {
                              _ctx.strokeStyle = POWERBAR_COLOR_MEDIUM;
                          } else {
                              _ctx.strokeStyle = POWERBAR_COLOR_BAD;
                          }
                          _ctx.lineWidth = POWERBAR_WIDTH;
                          _ctx.moveTo(spaceship.orbit, -POWERBAR_POS_OFFSET);
                          _ctx.lineTo(spaceship.orbit + SPACESHIP_SIZE * (spaceship.power / 100), -POWERBAR_POS_OFFSET);
                          _ctx.stroke();
                          
                    _ctx.drawImage(spaceshipImg, spaceship.orbit, 0, SPACESHIP_SIZE, SPACESHIP_SIZE); //画飞船贴图
                    _ctx.restore(); //恢复画布到原有状态
                    ctx.clearRect(0, 0, canavsWidth, canvasHeight);
                    ctx.drawImage(cacheCanvas, 0, 0, canavsWidth, canvasHeight); //将缓存画布内容复制到屏幕画布上
                    return true;
                } catch (error) {
                    return false;
                }
            };
        };
        var onDraw = function (spaceships) {
            var self = this;
            if (!(spaceships === undefined || spaceships.every(function (item, index, array) {
                     return item === undefined; //判断飞船队列是否存在，以及飞船队列是否为空；若不是则执行下面步骤
             }))) {
                cacheCtx.clearRect(0, 0, canavsWidth, canvasHeight); //每次更新清空缓存画布
            
                for (var i = 0; i < spaceships.length; i++) { //迭代绘制飞船
                    if (spaceships[i] !== undefined) {
                        drawSpaceship(cacheCtx, spaceships[i]);
                    }
                }
             }else {
                ctx.clearRect(0, 0, canavsWidth, canvasHeight);
                    }
        };
        var animLoop = function () {
            requestAnimationFrame(animLoop);
            onDraw(mediator.getSpaceShips());
        };
        var setMediator = function (_mediator) {
            mediator = _mediator;
        }
        return {
            animloop: animLoop,
            setMediator:setMediator
        };
    };
    var Spaceship = function (id) {
        this.currentState = "stop";
        this.cmd = null;
        this.timer = null;
        this.deg = 0; //飞船初始位置的角度
        this.orbit = 100+id*50-SPACESHIP_SIZE/2;
        this.id = id;
        this.mediator = null;
        this.power = 100;

    };
  /*  Spaceship.prototype.setMediator = function (mediator) {
        this.mediator = mediator;
    }*/
   Spaceship.prototype.energysystem = function () {
       var self = this;
        var discharge = function () {
            var timer = setInterval(function () {
                self.power -= DEFAULT_DISCHARGE_RATE;
                if (self.power<=0) {
                    self.powersystem().stop();
                    self.energysystem().charge();
                    clearInterval(timer);
                }
            }, 20)
    
        }
        var charge = function () {
            //  clearInterval(self.timer);
            var timer = setInterval(function () {
                    self.power += DEFAULT_CHARGE_RATE;
            }, 20);
            if (self.power == 100) {
                clearInterval(timer);
            }

        }
        return {
            charge: charge,
            discharge:discharge
        }
    }
    Spaceship.prototype.powersystem = function () {
        var self = this;
        var fly = function () {
            self.timer = setInterval(function () {
                self.deg +=SPACESHIP_SPEED;
                self.deg = self.deg >= 360 ? 0 : self.deg;
            }, 20)
        }
        var stop = function () {
            clearInterval(self.timer);
        }
        return{
            fly:fly,
            stop:stop
        };
    };
    Spaceship.prototype.destory = function (obj) {
       this.mediator.destory(obj);
    };
    Spaceship.prototype.statement = function () {
        var self = this;
        var states ={
            fly: function () {
                self.currentState = 'fly';
                self.powersystem().fly();
                self.energysystem().discharge();
            },
            stop: function () {
                self.currentState = 'stop';
                self.powersystem().stop();
                self.energysystem().charge();
            },
            destory: function () {
                self.destory(self);
            }
            
        }
        return states;
    }
    Spaceship.prototype.receive = function (_state) {
        var state=this.statement()
        state[_state] &&state[_state]();

    }
   // var Spaceship = new Spaceship();
    function addEventHandler(commander) {
        var id = 0;
        var cmd = null;
        $('input').on('click', function () {
            var index = $(this).parent().index();
            var operate = $(this).attr('value');
            switch (operate) {
                case "launch":
                case "fly":
                case "stop":
                case "destory":
                    cmd = operate;
                    id = index;
                    break;
                default:
                    alert("invalid command");
            }
            commander.commander = cmd;
            commander.id = id;
            commander.send(commander);
        });


    };
    //Commander指挥官发送命令。
    var Commander = function () {
        this.commander = null;
        this.mediator = null;
        this.id = 0;

    }
    Commander.prototype.send = function (commander) {
        this.mediator.send(commander);
    }
    //Commander指挥官通过Mediator介质发送信息。
    var Mediator = function () {
        var spaceships = [];
       // var self=this;
        // var commander = null;
        return {
            register: function (obj) {
                if (obj instanceof Commander) {
                    obj.mediator = this;
                    return true;
                }else if(obj instanceof Spaceship){
                    spaceships[obj.id] = obj;
                    obj.mediator = this;
                    return true;
                }else{
                    return false;
                }
            },
            send: function (obj) {
                var cmd=obj.commander;
                if(cmd=="launch"){
                    
                    this.create(obj);
                }else{
                    spaceships[obj.id].receive(cmd);
                }
            },
            create: function (_obj) {
                if(spaceships[_obj.id]!==undefined){
                    return false;
                }
                var spaceship = new Spaceship(_obj.id);
                this.register(spaceship);
                return true;
            },
            destory: function (obj) {
                delete spaceships[obj.id];
            },
            getSpaceShips: function () {
                return spaceships;
            }
         }
      }
   // }
    window.onload = function () {
        var commander = new Commander();
        var mediator = new Mediator();
        mediator.register(commander);
        animationRealize().setMediator(mediator);
        animationRealize().animloop();
    //  var spaceships = new Spaceship();
      addEventHandler(commander);
    }
})();