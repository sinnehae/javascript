console.log("for문1");
const colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
console.log("for문2");
for (let key in colors) {
  console.log(key + ":" + colors[key]);
}
console.log("while문");
var i = 0;
while (colors[i] != null) {
  console.log(colors[i]);
  i++;
}
