var PageNum = document.getElementById('PageNum');




// Pages
var quotesPage1 = document.getElementById('quotesPage1');
var quotesPage2 = document.getElementById('quotesPage2');
var quotesPage3 = document.getElementById('quotesPage3');
var quotesPage4 = document.getElementById('quotesPage4');
var quotesPage5 = document.getElementById('quotesPage5');
var quotesPage6 = document.getElementById('quotesPage6');
var quotesPage7 = document.getElementById('quotesPage7');
var quotesPage8 = document.getElementById('quotesPage8');
var quotesPage9 = document.getElementById('quotesPage9');







function PageChanger(Dirction) {
  if(Dirction == 'Back') {
    if(PageNum.innerHTML == 'Page 1') {
      Page9();
      return;
    }else{
    if(PageNum.innerHTML == 'Page 2') {
        Page1();
        return;
    }else{
    if (PageNum.innerHTML == 'Page 3') {
        Page2();
        return;
    }else{
    if(PageNum.innerHTML == 'Page 4') {
        Page3();
        return;
    }else{
    if(PageNum.innerHTML == 'Page 5') {
        Page4();
        return;
    }else{
    if(PageNum.innerHTML == 'Page 6') {
        Page5();
        return;
    }else{
    if(PageNum.innerHTML == 'Page 7') {
      Page6();
      return;
    }else{
    if(PageNum.innerHTML == 'Page 8') {
      Page7();
      return;
    }else{
    if(PageNum.innerHTML == 'Page 9'){
      Page8();
      return;
    }
    }}}}}}}}
  }else{
    if(PageNum.innerHTML == 'Page 1') {
        Page2();
        return;
    }else{
    if(PageNum.innerHTML == 'Page 2') {
        Page3();
        return;
    }else{
    if (PageNum.innerHTML == 'Page 3') {
        Page4();
        return;
    }else{
    if(PageNum.innerHTML == 'Page 4') {
        Page5();
        return;
    }else{
    if(PageNum.innerHTML == 'Page 5') {
        Page6()
        return;
    }else{
    if(PageNum.innerHTML == 'Page 6') {
        Page7();
        return;
    }else{
    if(PageNum.innerHTML == 'Page 7') {
      Page8();
      return;
    }else{
    if (PageNum.innerHTML == 'Page 8') {
      Page9();
      return;
    }else{
    if(PageNum.innerHTML == 'Page 9') {
      Page1();
      return;
    }
    }}}}}}}}
  }
}





function Page1() {
  HideAllPages();
  PageNum.innerHTML = 'Page 1';
  quotesPage1.style.display = 'block';
  quotesPage1.style.visibility = 'visible';
}

function Page2() {
  HideAllPages();
  PageNum.innerHTML = 'Page 2';
  quotesPage2.style.display = 'block';
  quotesPage2.style.visibility = 'visible';
}

function Page3() {
  HideAllPages();
  PageNum.innerHTML = 'Page 3';
  quotesPage3.style.display = 'block';
  quotesPage3.style.visibility = 'visible';
}

function Page4() {
  HideAllPages();
  PageNum.innerHTML = 'Page 4';
  quotesPage4.style.display = 'block';
  quotesPage4.style.visibility = 'visible';
}

function Page5() {
  HideAllPages();
  PageNum.innerHTML = 'Page 5';
  quotesPage5.style.display = 'block';
  quotesPage5.style.visibility = 'visible';
}

function Page6() {
  HideAllPages();
  PageNum.innerHTML = 'Page 6';
  quotesPage6.style.display = 'block';
  quotesPage6.style.visibility = 'visible';
}

function Page7() {
  HideAllPages();
  PageNum.innerHTML = 'Page 7';
  quotesPage7.style.display = 'block';
  quotesPage7.style.visibility = 'visible';
}

function Page8() {
  HideAllPages();
  PageNum.innerHTML = 'Page 8';
  quotesPage8.style.display = 'block';
  quotesPage8.style.visibility = 'visible';
}

function Page9() {
  HideAllPages();
  PageNum.innerHTML = 'Page 9';
  quotesPage9.style.display = 'block';
  quotesPage9.style.visibility = 'visible';
}







function HideAllPages() {
  quotesPage1.style.display = 'none';
  quotesPage1.style.visibility = 'hidden';
  
  quotesPage2.style.display = 'none';
  quotesPage2.style.visibility = 'hidden';
  
  quotesPage3.style.display = 'none';
  quotesPage3.style.visibility = 'hidden';
  
  quotesPage4.style.display = 'none';
  quotesPage4.style.visibility = 'hidden';
  
  quotesPage5.style.display = 'none';
  quotesPage5.style.visibility = 'hidden';
  
  quotesPage6.style.display = 'none';
  quotesPage6.style.visibility = 'hidden';
  
  quotesPage7.style.display = 'none';
  quotesPage7.style.visibility = 'hidden';
  
  quotesPage8.style.display = 'none';
  quotesPage8.style.visibility = 'hidden';
  
  quotesPage9.style.display = 'none';
  quotesPage9.style.visibility = 'hidden';
}






function BackPressed() {
  PageChanger('Back');
}

function FrowardPressed() {
  PageChanger('Foward');
}

