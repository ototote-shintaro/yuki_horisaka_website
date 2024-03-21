"use client";

import ScheduleComponent from "./components/ScheduleComponent";
import Slider from "./components/Slider";
import { Schedule } from "./utils/types";

export default async function Home() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/schedule`
  const res = await fetch(url, {
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  if (!res.ok) throw new Error('Failed to fetch data')
  const schedules: Schedule[] = await res.json()

  return (
    <main className="min-h-screen">
      <div className="pt-12">
        <Slider />
      </div>
      <div className="pt-12 md:px-[30%] md:flex">
        <p className="text-2xl font-bold pr-4 text-center mb-4">Live</p>
        <div className="md:border-l-2 border-black pl-4">
          {schedules.map((schedule) => (
            <ScheduleComponent
              key={schedule.id}
              date={schedule.date}
              imageUrl={schedule.image_url}
              title={schedule.title}
              memo={schedule.memo}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
