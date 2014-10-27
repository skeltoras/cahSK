UI.registerHelper('formatDate', function(date) {
  moment.locale("de");
  var globalLocale = moment();
  var localLocale = moment();
  
  localLocale.locale("de");
  return moment(date).format('DD.MM.YY HH:mm');
  //return localLocale(date); 
});

UI.registerHelper('range', function(start, end) {
  var rangeArr = [];
  for (var i = start; i <= end; i++) {
    rangeArr.push(i);
  }
  return rangeArr;
});