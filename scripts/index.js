var Homepage_Panel = document.getElementById('Home-Div');
var Quotes_Panel = document.getElementById('Quote-Div');






var PageNum = document.getElementById('PageNum');

var Quot1 = document.getElementById('quotesPage1');
var Quot2 = document.getElementById('quotesPage2');
var Quot3 = document.getElementById('quotesPage3');







function ShowHomepage() {
  HideALL();
  Homepage_Panel.style.display = 'block';
  Homepage_Panel.style.visibility = 'visible'
}


function ShowQuote() {
  HideALL();
  Quotes_Panel.style.display = 'block';
  Quotes_Panel.style.visibility = 'visible';
  PageNum.innerHTML = 'Page 1';
  Quot1.style.display = 'block';
  Quot1.style.visibility = 'visible';
}







function HideALL() {
  Homepage_Panel.style.display = 'none';
  Homepage_Panel.style.visibility = 'hidden';
  
  Quotes_Panel.style.display = 'none';
  Quotes_Panel.style.visibility = 'hidden';
  
  
  
  
  
  
  Quot1.style.display = 'none';
  Quot1.style.visibility = 'hidden';
  
  Quot2.style.display = 'none';
  Quot2.style.visibility = 'hidden';
  
  Quot3.style.display = 'none';
  Quot3.style.visibility = 'hidden';
}


