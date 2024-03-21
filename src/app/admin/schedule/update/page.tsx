"use client";

import { supabase } from '@/app/utils/supabaseClient';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useState } from 'react'

const UpdateSchedule = () => {
	return (
		<div className='min-h-screen px-4 md:px-[15%]'>
			<h2 className='text-2xl font-bold mb-4 '>更新</h2>
			工事中だよ
			{/* TODO: UPDATE METHOD */}
		</div>
	)
}

export default UpdateSchedule;
