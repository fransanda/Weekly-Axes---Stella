
  var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1cyRSNprW-B0YG_avA9SLJfAN3hFiNZoMB_eHBgXpduU/edit?usp=sharing';
  
  function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: false
                   }
                 )
  }

 
function showInfo(data, tabletop) {
data.forEach(function(data) {
    SSheader.innerHTML = data.header;
    SSheader2.innerHTML = data.header2;
    SSbody.innerHTML = data.body;
    SSbody2.innerHTML = data.body2;
    SSbody3.innerHTML = data.body3;
    SSbody4.innerHTML = data.body4;
    SSbody5.innerHTML = data.body5;
    SSbody6.innerHTML = data.body6;
    SSbody7.innerHTML = data.body7;
    SSbody8.innerHTML = data.body8;
    SSbody9.innerHTML = data.body9;
    SSbody10.innerHTML = data.body10;
    SSbody11.innerHTML = data.body11;
    SSbody12.innerHTML = data.body12;
    SSbody13.innerHTML = data.body13;
    SSbody14.innerHTML = data.body14;
    SSbody15.innerHTML = data.body15;
    SSbody16.innerHTML = data.body16;
    SSbody17.innerHTML = data.body17;

 });
}
  window.addEventListener('DOMContentLoaded', init)















































