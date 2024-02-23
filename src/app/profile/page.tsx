import Image from 'next/image'
import React from 'react'

const page = () => {
	return (
		<div className='mx-12'>
			<h2 className='font-bold text-lg'>
				Profile
			</h2>
			<div className='pt-2 flex justify-center'>
				<p className='pr-12'>
					大阪府出身。<br /><br />
					夕陽丘高等学校音楽科卒業、大阪教育大学教育学部教養学科芸術専攻音楽コース卒業。<br /><br />
					バイオリンを専門にクラシック音楽を学びながら、学生時代よりシンガーソングライター・ヴォーカリストとして府内のライブハウスに出演。上京後、ヴォーカリスト・バイオリニストとして東京を中心に活動している。<br /><br />
					ソロ活動以外にバイオリンでのサポートや田中慎太郎との「静かの基地」、身体表現と演奏の即興を主体としたグループ「満月カルテット」などでも活動。<br /><br />
				</p>
				<Image className='m-auto py-4 md:max-w-3xl md:max-h-3xl'
					src='/prof.jpg'
					alt=''
					width={780}
					height={300}
				/>
			</div>
		</div>
	)
}

export default page