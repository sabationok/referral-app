import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import ActiveBonusesCard from '../Cards/ActiveBonusesCard';
import BlockedBonusesCard from '../Cards/BlockedBonusesCard';

// import 'swiper/css';
import 'swiper/css/bundle';

import s from './BonusCards.module.scss';
const BonusCards = () => {
  return (
    <div className={s.bonusCards}>

      <Swiper
        // spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
      >
        <SwiperSlide>
          <ActiveBonusesCard />
        </SwiperSlide>
        <SwiperSlide>
          <BlockedBonusesCard />
        </SwiperSlide>
      </Swiper>

    </div>
  );
};

export default BonusCards;

// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';

//  const BonusCards = () => {
//   return (
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={3}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       ...
//     </Swiper>
//   );
// };
// export default BonusCards
