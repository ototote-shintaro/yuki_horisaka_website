import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request, res: NextApiResponse) {
	const sgMail = require('@sendgrid/mail');
	const sgApiKey = process.env.SENDGRID_API_KEY;
	sgMail.setApiKey(sgApiKey);

	const data = await req.json();
	if (!data.name || !data.email || !data.message) {
		return NextResponse.json({ message: "入力が不正です", status: 400 });
	}

	const agentEmail = process.env.AGENT_EMAIL;
	const sgEmail = process.env.SG_EMAIL;

	const msgToUser = {
		to: data.email,
		from: sgEmail,
		subject: 'お問合せありがとうございました。',
		text: 'お問合せを受け付けました。回答をお待ちください。\n\n' + data.message,
		html: 'お問合せを受け付けました。回答をお待ちください。\n\n' + data.message,
	};

	const msgToAgent = {
		to: agentEmail,
		from: sgEmail,
		subject: 'お問合せがありました',
		text: data.message,
		html: data.message,
	};

	try {
		await sgMail.send(msgToUser);
		await sgMail.send(msgToAgent);
		return NextResponse.json({ message: "送信しました", status: 200 });
	} catch (e) {
		console.log(e);
		return NextResponse.json({ message: "エラーが発生しました", status: 500 });
	};
}
