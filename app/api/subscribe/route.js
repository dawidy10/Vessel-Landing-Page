import { NextResponse } from "next/server";

export async function POST(request) {
	const { email } = await request.json();
	if (!email || !email.includes("@")) {
		return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
	}

	const API_KEY = process.env.CONVERTKIT_API_KEY;
	const FORM_ID = process.env.CONVERTKIT_FORM_ID;

	try {
		const response = await fetch(`https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				api_key: API_KEY,
				email: email,
			}),
		});

		if (!response.ok) {
			return NextResponse.json({ error: "Error subscribing to the newsletter" }, { status: 500 });
		}

		return NextResponse.json({ message: "Subscribed successfully!" }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
	}
}
