

// Code related to developer Text
var devText = ["Software Developer", "Full Stack Developer", "Student", "Programmer"];

devSeq(0); // call devSeq Function
function devSeq(a) {

  // Loops the function of devText string over and over again
  if(devText.length > a){
    setTimeout(function() {
      document.getElementById("dev-seq").innerHTML = devText[a];
      devSeq(++a);
    }, 1000); // 1 Second Delay of Function
  } else if(devText.length == a) {
    // Keeps on looping
    devSeq(0);
  }
}
