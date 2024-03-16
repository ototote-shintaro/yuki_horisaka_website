import Image from "next/image";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// 画像置き場
const images = [
	"/01.jpeg",
	"/02.jpg",
	"/03.jpg",
];

export default function BasicSlider() {
	return (
		<Swiper
			effect="fade"
			fadeEffect={{
				crossFade: true
			}}
			modules={[Navigation, Pagination, Autoplay]}
			slidesPerView={1}
			loop={true}
			speed={1000}
			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
			}}
			navigation
			pagination={{
				clickable: true,
			}}
			className="max-w-2xl max-h-96 z-5"
		>
			{images.map((src: string, index: number) => (
				<SwiperSlide key={index}>
					<Image
						src={src}
						width={1024}
						height={780}
						alt="Slider Image"
						className="z-5"
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
}