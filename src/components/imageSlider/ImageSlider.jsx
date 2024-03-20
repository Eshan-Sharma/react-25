/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";

export default async function ImageSlider({ url, limit = 5, page = 1 }) {
  const [currSlide, setCurrSlide] = useState(0);
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchImages(url) {
    try {
      setLoading(true);
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImage(data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      throw new Error(e);
    }
  }

  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, [fetchImages, url]);

  return (
    <div className="container">
      {setLoading(true)}
      {loading ? (
        <div className="flex justify-center content-center">{"Loading..."}</div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
