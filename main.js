var count = 0;
var x = document.getElementById("myAudio");
function displayele() {
  if (count == 0) {
    document.getElementById("tablesec").style.display = "table-cell";
    console.log("wok?");
    count++;
  }
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
var c = 0;
async function imgremove(prop) {
  if (c == 0) {
    prop.remove();
    x.play();
    document.getElementById("mainblock").style.display = "block";
    console.log("done");

    await sleep(3000);
    displayele();
  }
}
