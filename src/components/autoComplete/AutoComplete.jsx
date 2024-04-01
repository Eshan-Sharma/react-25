import { useEffect, useState } from "react";

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

  return (
    <div className="container">
      <input
        className="search-users"
        placeholder="Find user"
        onChange={(e) => {
          handleChange(e);
        }}
      ></input>
      {console.log(filteredUsers)}
      {loading ? <div>Loading please wait!</div> : null}
    </div>
  );
}
