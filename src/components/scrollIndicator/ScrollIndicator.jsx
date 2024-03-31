import { useEffect } from "react";
import { useState } from "react";

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

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

  function handleScrollPercentage() {
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPercentage((howMuchScrolled / height) * 100);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="fixed top-0 z-10 w-full text-center bg-green-900 text-white">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container w-full h-2 bg-green-300">
          <div
            className="current-progress-bar h-2 bg-red-900"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>

      {loading ? <div>Loading please wait!</div> : null}
      <div>
        {data && data.length > 0
          ? data.map((dataItem) => <p key={dataItem.id}>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
}
