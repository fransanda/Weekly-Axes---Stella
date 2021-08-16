
 
  var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1cyRSNprW-B0YG_avA9SLJfAN3hFiNZoMB_eHBgXpduU/edit?usp=sharing';

function init() {
          Papa.parse(publicSpreadsheetUrl, {
          download: true,
          header: true,
          complete: showInfo(results) {
            var data = results.data
            console.log(data)
          }
        })

 
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
    SSbody18.innerHTML = data.body18;
    SSbody19.innerHTML = data.body19;
    SSbody20.innerHTML = data.body20;
    SSbody21.innerHTML = data.body21;
    SSbody22.innerHTML = data.body22;
    SSbody23.innerHTML = data.body23;
    SSbody24.innerHTML = data.body24;
    SSbody25.innerHTML = data.body25;
    SSbody26.innerHTML = data.body26;
    SSbody27.innerHTML = data.body27;
    SSbody28.innerHTML = data.body28;
    SSbody29.innerHTML = data.body29;
    SSbody30.innerHTML = data.body30;
    SSbody31.innerHTML = data.body31;
    SSbody32.innerHTML = data.body32;
    SSbody33.innerHTML = data.body33;
    SSbody34.innerHTML = data.body34;
    SSbody35.innerHTML = data.body35;
    SSbody36.innerHTML = data.body36;
    SSbody37.innerHTML = data.body37;
    SSbody38.innerHTML = data.body38;
    SSbody39.innerHTML = data.body39;
    SSbody40.innerHTML = data.body40;
    SSbody41.innerHTML = data.body41;
 });
}
  window.addEventListener('DOMContentLoaded', init)
