var PageNum = document.getElementById('PageNum');




// Pages
var quotesPage1 = document.getElementById('quotesPage1');
var quotesPage2 = document.getElementById('quotesPage2');
var quotesPage3 = document.getElementById('quotesPage3');







function PageChanger(Dirction) {
  if(Dirction = 'Back') {
    if(PageNum.innerHTML == 'Page 1') {
      Page3()
    }else{
      if(PageNum.innerHTML == 'Page 2') {
        Page1();
      }else{
        if (PageNum.innerHTML == 'Page 3') {
          Page2();
        }
      }
    }
  }else{
    if(PageNum.innerHTML == 'Page 1') {
      Page2();
    }else{
      if(PageNum.innerHTML == 'Page 2') {
        Page3();
      }else{
        if (PageNum.innerHTML == 'Page 3') {
          Page1();
        }
      }
    }
  }
}





function Page1() {
  HideAllPages();
  PageNum.innerHTML.innerHTML = 'Page 1';
  quotesPage1.style.display = 'block';
  quotesPage1.style.visibility = 'visible';
}

function Page2() {
  HideAllPages();
  PageNum.innerHTML.innerHTML = 'Page 2';
  quotesPage2.style.display = 'block';
  quotesPage2.style.visibility = 'visible';
}

function Page3() {
  HideAllPages();
  PageNum.innerHTML.innerHTML = 'Page 3';
  quotesPage3.style.display = 'block';
  quotesPage3.style.visibility = 'visible';
}







function HideAllPages() {
  quotesPage1.style.display = 'none';
  quotesPage1.style.visibility = 'hidden';
  
  quotesPage2.style.display = 'none';
  quotesPage2.style.visibility = 'hidden';
  
  quotesPage3.style.display = 'none';
  quotesPage3.style.visibility = 'hidden';
}






function BackPressed() {
  PageChanger('Back');
}

function FrowardPressed() {
  PageChanger('Foward');
}

