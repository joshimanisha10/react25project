import React, { useState, useEffect } from "react";
import "./style.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function ImageSlider({ url, page, limit }) {
  const [Image, setImage] = useState([]);
  const [currentSlide, setcurrentSlide] = useState(0);

  useEffect(() => {
    if (url !== "") fetchUrl(url);
  }, [url]);

  async function fetchUrl(getUrl) {
    try {
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      console.log(data);

      if (data) {
        setImage(data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  // console.log("slide", currentSlide, Image.length - 1, currentSlide + 1);
  function handlePrevious() {
    // console.log("prv slide", currentSlide, Image.length - 1, currentSlide - 1);

    setcurrentSlide(currentSlide === 0 ? Image.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    // console.log("next slide", currentSlide, Image.length - 1, currentSlide + 1);
    setcurrentSlide(currentSlide === Image.length - 1 ? 0 : currentSlide + 1);
  }
  return (
    <>
      <div className="container">
        <BsArrowLeftCircleFill
          onClick={handlePrevious}
          className="arrow arrow-left"
        />
        {Image && Image.length
          ? Image.map((imageItem, index) => (
              <img
                key={imageItem.id}
                alt={imageItem.download_url}
                src={imageItem.download_url}
                width={"400px"}
                className={
                  currentSlide === index
                    ? "current-image"
                    : "hide-current-image"
                }
              />
            ))
          : null}

        <BsArrowRightCircleFill
          onClick={handleNext}
          className="arrow arrow-left"
        />
      </div>
    </>
  );
}

export default ImageSlider;
