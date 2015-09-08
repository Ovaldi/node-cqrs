"use strict";

var util = require("./util");

/**
 * 命令基类
 */
function Command(sender){
    this.id     = util.uuid();
    //命令发出者，一般指向上一个命令
    this.sender = sender;
}

module.exports = Command;