"use client";

import ScheduleComponent from "./components/ScheduleComponent";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="pt-12">
        <Slider />
      </div>
      <div className="pt-12 md:px-[30%] md:flex">
        <p className="text-2xl font-bold pr-4 text-center mb-4">Live</p>
        <div className="md:border-l-2 border-black pl-4">
          <ScheduleComponent
            date={new Date('2024-04-07')}
            imageUrl={'/20240306.jpg'}
            title={'まあるい集まり'}
            memo={'予約:~~~'}
          />
          <ScheduleComponent
            date={new Date('2024-04-07')}
            imageUrl={'/20240306.jpg'}
            title={'まあるい集まり'}
            memo={'予約:~~~'}
          />
        </div>
      </div>
    </main>
  );
}
