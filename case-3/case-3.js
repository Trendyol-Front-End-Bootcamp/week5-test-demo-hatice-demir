import axios from "axios";

const fetchData = async () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  let hashMap = new Map([
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
  ]);

  try {
    await axios.get(URL).then((res) => console.log(res));
    /* res.forEach((postObj) => {
      let key = hasmpostObj.userId;
      let value = hashMap.get(key);
      hashMap.set(key, hashMap.get(value++));
    });
    console.log(hashMap);*/
  } catch (error) {
    console.log(error);
  }
};

const App = async () => {
  await fetchData();
};

App();
