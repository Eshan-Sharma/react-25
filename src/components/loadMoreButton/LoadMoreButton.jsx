import { useState, useEffect } from "react";

export default function LoadMoreButton() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products/?limit=10&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await response.json();

      if (data.products.length && data && data.products) {
        setProducts((prevData) => [...prevData, ...data.products]);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.error(e);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if ((products && products.length === 100) || count >= 5) {
      setDisableButton(true);
    }
  }, [products, count]);

  return (
    <div className="flex flex-col gap-2">
      {loading ? <div>Loading products! Please wait</div> : <div></div>}
      <div className="grid grid-cols-4 gap-1">
        {products.length && products
          ? products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col p-20 border-solid border-gray-500 gap-1"
              >
                <img src={product.thumbnail} alt={product.title} />
                <p>{product.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="flex flex-col items-center">
        {/* {console.log(disableButton + " Disabled")} */}
        {disableButton ? (
          <button
            type="button"
            disabled={true}
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            You have reached to 100 products
          </button>
        ) : (
          <button
            disabled={disableButton}
            onClick={() => setCount(count + 1)}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Load more Products
          </button>
        )}
      </div>
    </div>
  );
}
