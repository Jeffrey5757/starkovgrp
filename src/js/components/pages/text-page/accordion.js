
var accordion = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
      panel.style.paddingTop = "0";
    } else {
      // panel.style.maxHeight = panel.scrollHeight + 25 + "px";
      panel.style.maxHeight = "100%";
      panel.style.paddingTop = "25px";
    }
  });
}