import { useFetch } from "./useFetch";

const baseUrl = "https://jsonplaceholder.typicode.com";

function App() {
  const { data: userData } = useFetch(baseUrl, "users");
  const { data: postData } = useFetch(baseUrl, "posts");

  return (
    <div>
      <h1>useFetch</h1>
      <h2>user</h2>
      {userData && <pre>{JSON.stringify(userData[0], null, 2)}</pre>}
      <h2>post</h2>
      {postData && <pre>{JSON.stringify(postData[0], null, 2)}</pre>}
    </div>
  );
}

export default App;
