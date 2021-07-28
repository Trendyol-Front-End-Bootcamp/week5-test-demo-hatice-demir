import axios from "axios";
const fetchData = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const newData = new Array(res.data.length).fill(0);
  for (let i = 0; i < res.data.length; i++) {
    newData[res.data.userId]++;
  }
  console.log(newData);
  const sortedData = newData.sort((a, b) => b - a);
  console.log(sortedData[0]);
  console.log("here");
};

export default fetchData;
