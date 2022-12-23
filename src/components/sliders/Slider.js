import { Swiper, SwiperSlide } from "swiper/react";
import "./swiper.css";
import { Pagination, Autoplay } from "swiper";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../../context.js/ProductsContext";
function Slider({ cate }) {
  const {getProductsWithCategory} = useContext(ProductsContext)
  const items = getProductsWithCategory(cate)
  const item = items.map((item) => {
    // console.log(item);
    return (
      <SwiperSlide key={item.id}>
          <Link to={`/product/${item.id}`}>
          {/* <h4>{item.title}</h4> */}
          <img
            src={item.image}
            alt={item.title}
          />
        </Link>
        </SwiperSlide>
    );
  });

  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        spaceBetween={30}
        // loop={true}
        modules={[Autoplay]}
        className="mySwiper">
        {item}
      </Swiper>
    </>
  );
}

export default Slider;
