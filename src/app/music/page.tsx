import React from 'react'
import YoutubeContent from '../components/YoutubeComponent'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

const page = () => {
	return (
		<div>
			<div className='md:grid md:grid-cols-2 md:px-[7%]'>
				<div>
					<YoutubeContent
						videoId='R66HM0NS8Gk'
						title='「夏生まれの片時雨」2022年8月21日at神保町 試聴室'
						caption={
							`Vo：ホリサカユキ
							Cho：yuukitakami（aqubi）
							Vn：北床宗太郎
							Pf：ryo sugimoto（aqubi）`
						}
					/>
				</div>
				<div>
					<YoutubeContent
						videoId='pOBVKlKUDP8'
						title='『あなたを思うと／ホリサカユキ』ダイジェスト'
						caption={
							`収録曲
							1.そうそうと
							2.あざみ
							3.約束
							4.あなたを思うと
							5.日々を浴びる
							6.花鳥`
						}
					/>
				</div>
				<div>
					<YoutubeContent
						videoId='dM0LhGFR_Ac'
						title='Yuki Horisaka presents.「City of Stars （From "La La Land" Sound track）」'
						caption={
							`vocal, violin : Yuki Horisaka
							vocal, guitar : Keiji Matsui`
						}
					/>
				</div>
				<div>
					<YoutubeContent
						videoId='Z68CMd3lw5k'
						title='Yuki Horisaka presents. 「Kite / Keiji Matsui」'
						caption={
							`vocal,guitar : Keiji Matsui
							vocal,violin : Yuki Horisaka`
						}
					/>
				</div>
				<div>
					<YoutubeContent
						videoId='x2Muv-wE_SU'
						title='おちていく (Live at echo and cloud studio 2018)'
						caption={
							`作詞・作曲／ホリサカユキ
							歌／ホリサカユキ`
						}
					/>
				</div>
				<div>
					<YoutubeContent
						videoId='WkoxdXF0UYw'
						title='夜の羽／ホリサカユキ（2018）'
						caption=''
					/>
				</div>
			</div>
			<div className='flex justify-center items-center pt-8'>
				<Link
					href='https://www.youtube.com/@kyuutarou0129/videos'
					className='border rounded-full px-6 py-3 bg-gray-300 flex items-center'
				>
					Show All Videos
					<FontAwesomeIcon icon={faYoutube} className='h-[24px] ml-2' />
				</Link>
			</div>
		</div>
	)
}

export default page