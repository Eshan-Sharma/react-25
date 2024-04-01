import { useEffect, useState } from "react";
import Suggestions from "./Suggestions";

export default function AutoComplete() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  async function fetchUserData() {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      if (data && data.users && data.users.length > 0) {
        setUserData(data.users.map((userItem) => userItem.firstName));
        // setUserData(data);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    setLoading(true);
    fetchUserData();
  }, []);

  function handleChange(e) {
    const query = e.target.value.toLowerCase();
    setUserInput(query);
    if (query.length >= 1) {
      const filteredData =
        userData && userData.length
          ? userData.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  function handleClick(e) {
    setUserInput(e.target.innerText);
  }
  return (
    <div className="container">
      {loading ? (
        <div>Loading please wait!</div>
      ) : (
        <input
          className="search-users"
          placeholder="Find user"
          value={userInput}
          onChange={(e) => {
            handleChange(e);
          }}
        ></input>
      )}
      {showDropdown ? (
        <Suggestions handleClick={handleClick} data={filteredUsers} />
      ) : null}
    </div>
  );
}
