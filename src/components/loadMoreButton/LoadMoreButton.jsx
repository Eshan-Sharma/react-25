import { useState, useEffect } from "react";

export default function LoadMoreButton() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products/?limit=10&skip=${
          count === 0 ? 0 : count * 10
        }`
      );
      const data = await response.json();
      console.log(data.products);

      if (data && data.products && data.products.length) {
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
  return (
    <div className="flex flex-col gap-20">
      {loading ? <div>Loading products! Please wait</div> : <div></div>}
      <div className="grid grid-cols-4 gap-10">
        {products && products.length
          ? products.map((product) => {
              <div
                key={product.id}
                className="p-20 border-solid border-gray-500 flex flex-col gap-10"
              >
                <img src={product.thumbnail} />
                <p>{product.title}</p>
              </div>;
            })
          : null}
      </div>
      <div className="button-container">
        <button>Load more Products</button>
      </div>
    </div>
  );
}
