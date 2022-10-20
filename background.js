var Webs = ["www.friv.com","https://www.facebook.com"]

function StartWeb() {
  document.head.innerHTML = `
  <title> Blocked </title>
  `;
  document.body.innerHTML = `
  <style>
.Image {
position: absolute;
left:30%;
top:20%;
max-width: 1000%;
 max-height: 1000%;


}
body {
  font-family: Georgia, serif;
  background-color:rgb(2, 255, 52);
}
p {
text-align: center;
position: absolute;
left: 37%;
top: 35%;


}
.square {
  height: 50px;
  width: 200px;
  background-color: #555;
  position: absolute;
  left: 32%;
  top: 35%;
  opacity: 0.35;
}


</style>
<img class="Image" src="https://areaprivada.st-patricks.com/images/logo-login-intranet-2016.png"></img>
<p> You're not allowed</p20>
<img  class="Image" style="left: -30%; top: 250%;" src="https://www.pngmart.com/files/22/Computer-PNG-Clipart.png"></img>
<div class="square"</div>

  
  `;



}
chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
  let url = tabs[0].url;
  for (i = 0; i < Webs.length; i++) {

    alert(url);
    alert(Webs[i])
    if (Webs[i] === url) {
       alert("found");
      StartWeb()
    }
  }
});
