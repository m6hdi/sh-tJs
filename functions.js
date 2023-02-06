//local = let
function wait(ms){
  var start = new Date().getTime();
  var end = start;
  while(end < start + ms) {
    end = new Date().getTime();
   }
 }
function print(cnsl) {
  console.log(cnsl);
}
function countto(num , value) {
  for (let i = 1; i <=num; i++) {
    console.log(value)
    
  }
}
function countno(n) {
  for (let i = 1; i <=n; i++) {
    console.log(i)
}

}
function printTable(v1 , v2 , v11 , v22) {
  console.table({
    Fvalue : v1,
    Svalue : v2
  })
}

function slice(params) {
  for (let i = 0; i < params.length; i++) {
    console.log(params[i]);
  }
}

module.exports = {print ,wait ,countto ,countno , printTable , slice }










