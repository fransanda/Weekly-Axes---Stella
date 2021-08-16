
 
  var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1cyRSNprW-B0YG_avA9SLJfAN3hFiNZoMB_eHBgXpduU/edit?usp=sharing';
  
  function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: true } )
  }

 
function showInfo(data, tabletop) {
data.forEach(function(data) {
    SSheader.innerHTML = data.header;
 });
}
  window.addEventListener('DOMContentLoaded', init)
