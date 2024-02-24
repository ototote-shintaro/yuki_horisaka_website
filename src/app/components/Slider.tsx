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
	// ブレイクポイントに基づいて1つのスライドに表示するスライドの数を指定
	const slideSettings = {
		0: {
			slidesPerView: 1.4,
			spaceBetween: 10,
		},
		1024: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
	};

	return (
		<Swiper
			modules={[Navigation, Pagination, Autoplay]}
			breakpoints={slideSettings}
			slidesPerView={"auto"}
			centeredSlides={true}
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
			className='max-w-full'
		>
			{images.map((src: string, index: number) => (
				<SwiperSlide key={index}>
					<Image
						src={src}
						width={1024}
						height={780}
						alt="Slider Image"
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
}