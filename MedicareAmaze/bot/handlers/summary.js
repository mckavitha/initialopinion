﻿
module.exports = (session, next) => {
    var summary = "Summary: ";
    for (var prop in session.dialogData.data) {
        summary += prop + ': [' + session.dialogData.data[prop] + ']; ';
    }
    session.send(summary);
    return next();
}