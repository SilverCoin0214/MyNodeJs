let obj = {
  name: "sce",
  age: "18",
  arr: [1, 2, 3, 4],
};

let info = obj;
info.name = "info";
info.arr.push("info");

console.log(info, obj);

// obj = "sce";
// console.log(info, obj);

function test(ob) {
  ob.name = "hehe";
  console.log("ob", ob);
  console.log("obj", obj);
  ob = {
    new: "new",
  };
  console.log(ob);
  console.log(obj);
}

// test(obj);

let info2 = Object.assign({}, obj);

info2.name = "info2";
info2.arr.push("info2");
console.log(info2, obj);
