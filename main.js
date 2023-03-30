var width = 1280;
var height = 720;
var prompt = "https://bing.com"
document.getElementById("myFrame").height = height;
document.getElementById("myFrame").width = width

function Submit() {
	prompt = "https://" + document.getElementById("URL").value;
  console.log("Going to " + prompt)
  document.getElementById("myFrame").src = prompt;
}