import { supabase } from "@/app/utils/supabaseClient";
import { NextApiRequest, NextApiResponse } from "next";
import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: NextApiResponse) {
	const id = req.url.split("/schedule/")[1];
	const { data, error } = await supabase
		.from('schedules')
		.select('*')
		.eq("id", id)
		.single();

	if (error) {
		return NextResponse.json(error);
	}

	if (!data) {
		notFound();
	}

	return NextResponse.json(data, { status: 200 });
}

export async function PUT(req: Request, res: NextApiResponse) {
	const AuthEmail = process.env.AUTH_EMAIL || ''
	const AuthPw = process.env.AUTH_PW || ''

	await supabase.auth.signInWithPassword({
		email: AuthEmail,
		password: AuthPw,
	})

	const id = req.url.split("/schedule/")[1];
	const { date, title, memo, image_url } = await req.json();
	const timestamp = new Date().toISOString();

	const { error: updateError } = await supabase
		.from('schedules')
		.update({
			title: title,
			date: date,
			memo: memo,
			image_url: image_url,
			updated_at: timestamp
		})
		.eq("id", id);

	if (updateError) {
		return NextResponse.json(updateError);
	}

	return NextResponse.json({ status: 200 });
}


export async function DELETE(req: Request, res: NextApiResponse) {
	const id = req.url.split("/schedule/")[1];
	const { error: deleteError } = await supabase
		.from('schedules')
		.delete()
		.eq("id", id);

	if (deleteError) {
		return NextResponse.json(deleteError);
	}

	return NextResponse.json({ status: 200 });
}
