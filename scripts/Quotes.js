var PageNum = document.getElementById('PageNum');
let Page_Current_Num = PageNum.innerHTML;



// Pages
var quotesPage1 = document.getElementById('quotesPage1');



function BackPressed() {
  PageChanger('Back');
}

function FrowardPressed() {
  PageChanger('Foward');
}



function PageChanger(Dirction) {
  if(Dirction = 'Back') {
    if(Page_Current_Num == 1) {
      // Back
    }
  }else{
    if(Page_Current_Num == 1) {
      // Forward
    }
  }
}





function Page1() {
  HideAllPages()
  quotesPage1.display.display = 'block';
  quotesPage1.display.visibility = 'visible';
}







function HideAllPages() {
  quotesPage1.display.display = 'none';
  quotesPage1.display.visibility = 'hidden';
}





