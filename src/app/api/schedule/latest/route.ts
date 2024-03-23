import { supabase } from "@/app/utils/supabaseClient";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: Request, res: NextApiResponse) {
	const { data, error } = await supabase
		.from('schedules')
		.select('*')
		.order('date', { ascending: false })
		.limit(5)

	if (error) {
		return NextResponse.json(error)
	}

	return NextResponse.json(data, { status: 200 })
}
