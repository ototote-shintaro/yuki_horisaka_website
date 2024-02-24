import React from 'react'
import YoutubeContent from '../components/YoutubeComponent'
import Link from 'next/link'

const page = () => {
	return (
		<div>
			<div className='md:grid md:grid-cols-2 md:px-[7%]'>
				<YoutubeContent videoId='R66HM0NS8Gk' label='「夏生まれの片時雨」2022年8月21日at神保町 試聴室' />
				<YoutubeContent videoId='pOBVKlKUDP8' label='『あなたを思うと／ホリサカユキ』ダイジェスト' />
				<YoutubeContent videoId='dM0LhGFR_Ac' label='Yuki Horisaka presents.「City of Stars （From "La La Land" Sound track）」' />
				<YoutubeContent videoId='Z68CMd3lw5k' label='Yuki Horisaka presents. 「Kite / Keiji Matsui」' />
				<YoutubeContent videoId='x2Muv-wE_SU' label='おちていく (Live at echo and cloud studio 2018)' />
				<YoutubeContent videoId='WkoxdXF0UYw' label='夜の羽／ホリサカユキ（2018）' />
			</div>
			<div className='flex justify-center items-center'>
				<Link
					href='https://www.youtube.com/@kyuutarou0129/videos'
					className='border rounded-full px-4 py-2 bg-gray-200'
				>
					Show All Videos
				</Link>
			</div>
		</div>
	)
}

export default page