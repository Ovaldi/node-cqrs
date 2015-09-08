"use strict";

var _      = require("lodash");
var postal = require("postal");

/**
 * 服务总线
 */
function ServiceBus(){
    this.map = new Map();
}

_.extend(ServiceBus.prototype, {
    //注册命令处理器
    registerCommandHandler: function(command, handler){
        var handlers = this.map[command] || [];
        handlers.push(handler);
        this.map[command] = handlers;
    },
    //pub/sub
    publish  : _.bind(postal.publish, postal),
    subscribe: _.bind(postal.subscribe, postal)
});

module.exports = ServiceBus;