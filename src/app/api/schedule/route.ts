import { supabase } from "@/app/utils/supabaseClient";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: Request, res: NextApiResponse) {
	const { data, error } = await supabase
		.from('schedules')
		.select('*')
		.order('created_at', { ascending: false })
		.limit(12)

	if (error) {
		return NextResponse.json(error)
	}

	return NextResponse.json(data, { status: 200 })
}

export async function POST(req: Request, res: NextApiResponse) {
	const AuthEmail = process.env.AUTH_EMAIL || ''
	const AuthPw = process.env.AUTH_PW || ''

	await supabase.auth.signInWithPassword({
		email: AuthEmail,
		password: AuthPw,
	})

	const { id, title, content, imageUrl } = await req.json();

	const { data, error } = await supabase
		.from('posts').insert([{
			id, title, content, createdAt: new Date().toISOString(), imageUrl
		}]);

	if (error) {
		return NextResponse.json(error);
	}

	return NextResponse.json(data, { status: 201 });
}
