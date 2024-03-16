"use client";

import ScheduleComponent from "./components/ScheduleComponent";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto pt-12">
        <Slider />
      </div>
      <div className="pt-12 px-[30%] flex">
        <p className="text-2xl font-bold pr-4">Live</p>
        <div className="border-l-2 border-black pl-4">
          <ScheduleComponent
            imageUrl={'/20240407.jpg'}
            imageAlt={'20240407'}
            dateTime={'2024.4.7sun 19:30start'}
            title={'まあるい集まり'}
            performers={'満月カルテット/毛玉'}
            place={'大久保ひかりのうま'}
            price={'予約2,500円/当日3,000円 +1drink'}
            memo={'予約:~~~'}
          />
          <ScheduleComponent
            imageUrl={'/20240306.jpg'}
            imageAlt={'20240407'}
            dateTime={'2024.4.7sun 19:30start'}
            title={'まあるい集まり'}
            performers={'満月カルテット/毛玉'}
            place={'大久保ひかりのうま'}
            price={'予約2,500円/当日3,000円 +1drink'}
            memo={'予約:~~~'}
          />
        </div>
      </div>
    </main>
  );
}
