let SideMenu = document.getElementById("side-menu");
let MenuBtn = document.getElementById("menu-btn");



let WelcomePage = document.getElementById("welcomePage");
let GameTeachUsPage = document.getElementById("gameTeachUsPage");
let AboutMePage = document.getElementById("aboutMePage");
let FishingPage = document.getElementById("fishing-div");





function Show_SideMenu() {
  SideMenu.style.display = "block";
  SideMenu.style.visibility = "visible";
  
  MenuBtn.style.display = "hidden";
  MenuBtn.style.visibility = "hidden";
}


function Hide_SideMenu() {
  SideMenu.style.display = "hidden";
  SideMenu.style.visibility = "hidden";
  
  MenuBtn.style.display = "block";
  MenuBtn.style.visibility = "visible";
}



function WelcomeButton_Pressed() {
  SideMenu.style.display = "hidden";
  SideMenu.style.visibility = "hidden";
  
  MenuBtn.style.display = "block";
  MenuBtn.style.visibility = "visible";
  
  
  
  WelcomePage.style.display = "block";
  WelcomePage.style.visibility = "visible";
  
  GameTeachUsPage.style.display = "hidden";
  GameTeachUsPage.style.visibility = "hidden";
  
  AboutMePage.style.display = "hidden";
  AboutMePage.style.visibility = "hidden";
  
  FishingPage.style.display = "hidden";
  FishingPage.style.visibility = "hidden";
}


function GameTeachUsButton_Pressed() {
  SideMenu.style.display = "hidden";
  SideMenu.style.visibility = "hidden";
  
  MenuBtn.style.display = "block";
  MenuBtn.style.visibility = "visible";
  
  
  
  GameTeachUsPage.style.display = "block";
  GameTeachUsPage.style.visibility = "visible";
  
  WelcomePage.style.display = "hidden";
  WelcomePage.style.visibility = "hidden";
  
  AboutMePage.style.display = "hidden";
  AboutMePage.style.visibility = "hidden";
  
  FishingPage.style.display = "hidden";
  FishingPage.style.visibility = "hidden";
}



function AboutMeButton_Pressed() {
  SideMenu.style.display = "hidden";
  SideMenu.style.visibility = "hidden";

  MenuBtn.style.display = "block";
  MenuBtn.style.visibility = "visible";
  
  
  
  AboutMePage.style.display = "block";
  AboutMePage.style.visibility = "visible";

  GameTeachUsPage.style.display = "hidden";
  GameTeachUsPage.style.visibility = "hidden";

  WelcomePage.style.display = "hidden";
  WelcomePage.style.visibility = "hidden";
  
  FishingPage.style.display = "hidden";
  FishingPage.style.visibility = "hidden";
}




function FishingButton_Pressed() {
  SideMenu.style.display = "hidden";
  SideMenu.style.visibility = "hidden";

  MenuBtn.style.display = "block";
  MenuBtn.style.visibility = "visible";



  FishingPage.style.display = "block";
  FishingPage.style.visibility = "visible";

  GameTeachUsPage.style.display = "hidden";
  GameTeachUsPage.style.visibility = "hidden";

  WelcomePage.style.display = "hidden";
  WelcomePage.style.visibility = "hidden";

  AboutMePage.style.display = "hidden";
  AboutMePage.style.visibility = "hidden";
}




