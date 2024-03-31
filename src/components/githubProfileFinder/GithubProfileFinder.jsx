import { useEffect } from "react";
import { useState } from "react";

export default function GithubProfileFinder() {
  const [username, setUsername] = useState("eshan-sharma");
  const [userData, setUserData] = useState([]);

  function handleSearch() {
    console.log(username);
  }

  async function fetchGithubUserData() {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const userData = await response.json();
    if (userData) {
      setUserData(userData);
      console.log(userData);
    }
  }
  useEffect(() => {
    fetchGithubUserData();
  }, []);

  return (
    <div className="container">
      <div className="input-wrapper">
        <input
          onChange={(e) => setUsername(e.target.value)}
          name="search-by-username"
          type="text"
          placeholder="Enter Github Username"
        ></input>
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}
