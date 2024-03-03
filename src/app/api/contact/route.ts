import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const sgMail = require('@sendgrid/mail');
	const sgApiKey = process.env.SENDGRID_API_KEY;
	sgMail.setApiKey(sgApiKey);

	const { name, email, message } = req.body;
	if (!name || !email || !message) {
		return res.status(400).json({ message: "入力が不正です" });
	}

	const agentEmail = process.env.AGENT_EMAIL;

	const msgToUser = {
		to: email,
		from: agentEmail,
		subject: 'お問合せありがとうございました。',
		text: 'お問合せを受け付けました。回答をお待ちください。' + req.body.message,
		html: 'お問合せを受け付けました。回答をお待ちください。' + req.body.message,
	};

	const msgToAgent = {
		to: agentEmail,
		from: agentEmail,
		subject: 'お問合せがありました',
		text: req.body.message,
		html: req.body.message,
	};

	(async () => {
		try {
			await sgMail.send(msgToUser);
			await sgMail.send(msgToAgent);
			return res.status(200).json({ message: "送信しました" });
		} catch (e) {
			console.log(e);
			return res.status(500).json({ message: "エラーが発生しました" });
		}
	})();
}
