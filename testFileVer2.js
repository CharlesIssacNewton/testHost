alert('test load of external script');

function initButton()
  {
    var skaBtn = document.getElementById("SKA_ICR_BTN");
    skaBtn.addEventListener("click",onBtnClick);
    
  }
function onBtnClick()
{
  alert("Hello World");
}
