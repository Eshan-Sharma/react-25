import { useEffect } from "react";
import { useState } from "react";

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchData(getUrl) {
    try {
      const response = await fetch(getUrl);
      const dataFetched = await response.json();
      setData(dataFetched);
      setLoading(false);
      console.log(dataFetched);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  }

  useEffect(() => {
    setLoading(true);
    fetchData(url);
  }, [url]);

  return <div>Scroll</div>;
}
