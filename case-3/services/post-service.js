import getPosts from "../providers/post-provider.js";

let hashMap = new Map();
let userIDwithMaxPost = -1;
let maxPosts = -1;

const setHashMap = async () => {
  const POSTS = await getPosts();
  POSTS?.forEach((postObj) => {
    let key = postObj.userId;
    hashMap.get(key) === undefined
      ? hashMap.set(key, 1)
      : hashMap.set(key, hashMap.get(key) + 1);
  });
};

const findUserID = async () => {
  await setHashMap();
  hashMap.forEach((key, value) => {
    if (value > maxPosts) userIDwithMaxPost = key;
  });
};

await findUserID();
console.log(userIDwithMaxPost);
