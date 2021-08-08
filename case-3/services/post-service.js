import getPosts from "../providers/post-provider.js";

console.log(await getPosts());

/* let hashMap = new Map([
  [1, 0],
  [2, 0],
  [3, 0],
  [4, 0],
  [5, 0],
  [6, 0],
  [7, 0],
  [8, 0],
  [9, 0],
  [10, 0],
]); */
/* res.forEach((postObj) => {
      let key = hasmpostObj.userId;
      let value = hashMap.get(key);
      hashMap.set(key, hashMap.get(value++));
    });
    console.log(hashMap);*/
