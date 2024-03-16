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

	const msgToAgent = {
		to: agentEmail,
		from: sgEmail,
		subject: 'お問合せがありました',
		text: data.name + '様からお問い合わせがありました' + 'メッセージ:' + data.message + 'アドレス:' + data.email,
		html: `
			<p>【お名前】</p>
			<p>${data.name}</p>
			<p>【メールアドレス】</p>
			<p>${data.email}</p>
			<p>【メッセージ】</p>
			<p>${data.message}</p>
		`,
	};

	try {
		await sgMail.send(msgToAgent);
		return NextResponse.json({ message: "送信しました" }, { status: 200});
	} catch (e) {
		console.log(e);
		return NextResponse.json({ error: 'An error has occurred' }, { status: 500 })
	};
}
