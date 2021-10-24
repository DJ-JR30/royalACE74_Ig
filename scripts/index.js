var Homepage_Panel = document.getElementById('Home-Div');
var Quotes_Panel = document.getElementById('Quote-Div');






var PageNum = document.getElementById('PageNum');

var Quot1 = document.getElementById('quotesPage1');
var Quot2 = document.getElementById('quotesPage2');
var Quot3 = document.getElementById('quotesPage3');
var Quot4 = document.getElementById('quotesPage4');
var Quot5 = document.getElementById('quotesPage5');
var Quot6 = document.getElementById('quotesPage6');
var Quot7 = document.getElementById('quotesPage7');
var Quot8 = document.getElementById('quotesPage8');
var Quot9 = document.getElementById('quotesPage9');







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
  
  Quot4.style.display = 'none';
  Quot4.style.visibility = 'hidden';
  
  Quot5.style.display = 'none';
  Quot5.style.visibility = 'hidden';
  
  Quot6.style.display = 'none';
  Quot6.style.visibility = 'hidden';
  
  Quot7.style.display = 'none';
  Quot7.style.visibility = 'hidden';
  
  Quot8.style.display = 'none';
  Quot8.style.visibility = 'hidden';
  
  Quot9.style.display = 'none';
  Quot9.style.visibility = 'hidden';
}


