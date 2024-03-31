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
    <div className="container mx-auto w-90 max-w-1000 p-5 rounded-lg bg-white">
      <div className="input-wrapper flex gap-4 justify-center mb-5">
        <input
          onChange={(e) => setUsername(e.target.value)}
          name="search-by-username"
          type="text"
          className="px-4 py-2 text-lg border rounded"
          placeholder="Enter Github Username"
        ></input>
        <button
          className="px-4 py-1 rounded bg-blue-400 text-black cursor-pointer"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      {loading ? (
        <div>Loding please wait!</div>
      ) : (
        <UserCard user={userData}></UserCard>
      )}
    </div>
  );
}
