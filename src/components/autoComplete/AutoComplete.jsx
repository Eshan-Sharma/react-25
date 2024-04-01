import { useEffect, useState } from "react";

export default function AutoComplete() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

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

  return (
    <div className="container">
      <input
        className="search-users"
        placeholder="Find user"
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
      ></input>
      {console.log(userData)}
      {loading ? <div>Loading please wait!</div> : null}
    </div>
  );
}
