import { ArrowLeft, ArrowRight } from "akar-icons";
import { useRef } from "react";

const Carousel = ({ items, RenderComponent }) => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -350,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 350,
        behavior: "smooth",
      });
    }
  };

  return (
    <section>
      <div
        className="cards-container flex items-center overflow-x-scroll gap-10 mx-auto my-0 py-10 scrollbar-none"
        ref={carouselRef}
      >
        {items.map((item, index) => (
          <RenderComponent key={index} item={item} />
        ))}
      </div>
      <div className="carousel-nav flex gap-10 justify-center items-center">
        <button>
          <ArrowLeft onClick={scrollLeft} />
        </button>

        <button>
          <ArrowRight onClick={scrollRight} />
        </button>
      </div>
    </section>
  );
};

export default Carousel;
