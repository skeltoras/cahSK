UI.registerHelper('formatDate', function(date) {
  moment.locale("de");
  var globalLocale = moment();
  var localLocale = moment();
  
  localLocale.locale("de");
  return moment(date).format('DD.MM.YY HH:mm');
  //return localLocale(date); 
});