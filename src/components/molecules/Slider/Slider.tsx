import "@splidejs/react-splide/css";

import { Splide, SplideSlide } from "@splidejs/react-splide";

export const Slider = () => {
  return (
    <>
      <Splide
        aria-label="私のお気に入りの画像集"
        options={{
          autoplay: true,
          interval: 3000,
        }}
      >
        <SplideSlide>
          <img
            className="slide-img"
            src="https://www.pakutaso.com/shared/img/thumb/shikun20220402_114719-2_TP_V.jpg"
            alt="かわいい猫の画像 part1"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className="slide-img"
            src="https://www.pakutaso.com/shared/img/thumb/shikun20220402_122123_TP_V.jpg"
            alt="かわいい猫の画像 part2"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className="slide-img"
            src="https://www.pakutaso.com/shared/img/thumb/sikun_20220402-180657-2_TP_V.jpg"
            alt="かわいい猫の画像 part3"
          />
        </SplideSlide>
      </Splide>

      {/* 画像の高さを揃えて表示させるために以下スタイルを適用 */}
      <style jsx>{`
        .slide-img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </>
  );
};
