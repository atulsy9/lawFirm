import "./carousel.css";
import { Virtual, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import HappyCustomerCard from "../HappyCustomerCard";
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="carouselMainDiv">
      <div className={`right-arrow arrow`}>
        <img src="./leftArrow.png" alt="prev_arrow" />
      </div>
      <div className={`left-arrow arrow `}>
        <img src="./rightArrow.png" alt="next_arrow" />
      </div>
      <Swiper
        modules={[Virtual, Navigation]}
        slidesPerView={3}
        spaceBetween={30}
        navigation={{
          nextEl: ".left-arrow",
          prevEl: ".right-arrow",
        }}
        virtual
      >
        <SwiperSlide>
          <HappyCustomerCard name="Jane Cooper" imgsrc="./happycustomer1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <HappyCustomerCard name="Devon Lane" imgsrc="./happycustomer3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <HappyCustomerCard name="Robert Fox" imgsrc="./happycustomer2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <HappyCustomerCard name="Jane Cooper" imgsrc="./happycustomer1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <HappyCustomerCard name="Devon Lane" imgsrc="./happycustomer3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <HappyCustomerCard name="Robert Fox" imgsrc="./happycustomer2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <HappyCustomerCard name="Jane Cooper" imgsrc="./happycustomer1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <HappyCustomerCard name="Devon Lane" imgsrc="./happycustomer3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <HappyCustomerCard name="Robert Fox" imgsrc="./happycustomer2.png" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
