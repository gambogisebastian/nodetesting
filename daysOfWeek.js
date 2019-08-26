let dias = ['dom', 'lun', 'mar', 'mie', 'jue', 'vie', 'sab'];
module.exports.weekdays = dias;

module.exports.getWeekDay = function(dayNo) {
    if (dayNo < 0 || dayNo > 6) dayNo = 0;
    return module.exports.weekdays[dayNo];
};