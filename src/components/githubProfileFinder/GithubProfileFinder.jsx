import { useEffect } from "react";
import { useState } from "react";
import UserCard from "./UserCard";

export default function GithubProfileFinder() {
  const [username, setUsername] = useState("eshan-sharma");
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleSearch() {
    fetchGithubUserData();
  }

  async function fetchGithubUserData() {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${username}`);
      const userData = await response.json();
      if (userData) {
        setUserData(userData);
        setLoading(false);
        setUsername("");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
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
      {loading ? (
        <div>Loding please wait!</div>
      ) : (
        <UserCard user={userData}></UserCard>
      )}
    </div>
  );
}
