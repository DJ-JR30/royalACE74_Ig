var Homepage_Panel = document.getElementById('Home-Div');
var Quotes_Panel = document.getElementById('Quote-Div');






function ShowHomepage() {
  HideALL();
  Homepage_Panel.style.display = 'block';
  Homepage_Panel.style.visibility = 'visible'
}


function ShowQuote() {
  HideALL();
  Quotes_Panel.style.display = 'block';
  Quotes_Panel.style.visibility = 'visible';
}







function HideALL() {
  Homepage_Panel.style.display = 'none';
  Homepage_Panel.style.visibility = 'hidden';
  
  Quotes_Panel.style.display = 'none';
  Quotes_Panel.style.visibility = 'hidden';
}


