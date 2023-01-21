console.log("hello sony");
let box = document.querySelector(".box");
let whteboxes = document.getElementsByClassName("whtebox");

box.addEventListener("dragstart", (e) => {
  console.log("dragstart...");
  e.target.className += " dashed";
  setTimeout(() => {
    e.target.className = "non";
  }, 0);
  // this.whtebox.style.display = "none";
});

box.addEventListener("dragend", (e) => {
  console.log("dragend...");
  e.target.className = "box";
});

for (let whtebox of whteboxes) {
  whtebox.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("dragover...");
  });
  whtebox.addEventListener("dragenter", (e) => {
    console.log("dragoenter...");
    e.target.className += " borderRed";
  });
  whtebox.addEventListener("dragleave", (e) => {
    console.log("dragleave...");
    e.target.className = "whtebox";
  });
  whtebox.addEventListener("drop", (e) => {
    console.log("drop...");
    e.target.append(box);
  });
}