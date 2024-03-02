import Image from 'next/image'
import React from 'react'
import ScheduleComponent from '../components/ScheduleComponent'

const page = () => {
	return (
		<div className='px-[28%] pt-12'>
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
	)
}

export default page