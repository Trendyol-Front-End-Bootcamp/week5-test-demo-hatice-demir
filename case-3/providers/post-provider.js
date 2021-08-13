import axios from "axios";
const URL = "https://jsonplaceholder.typicode.com/posts";
const getPosts = async () => {
  try {
    const result = await axios.get(URL);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

console.log(getPosts());
export default getPosts;
