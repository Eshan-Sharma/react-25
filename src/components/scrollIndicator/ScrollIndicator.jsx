import { useEffect } from "react";
import { useState } from "react";

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchData(getUrl) {
    try {
      const response = await fetch(getUrl);
      const dataFetched = await response.json();
      if (
        dataFetched &&
        dataFetched.products &&
        dataFetched.products.length > 0
      ) {
        setData(dataFetched.products);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  }

  useEffect(() => {
    setLoading(true);
    fetchData(url);
  }, [url]);

  return (
    <div className="container">
      {loading ? <div>Loading please wait!</div> : null}
      <h1>Custom Scroll Indicator</h1>
      <div>
        {data && data.length > 0
          ? data.map((dataItem) => <p key={dataItem.id}>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
}
