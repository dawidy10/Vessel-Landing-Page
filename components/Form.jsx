"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Form() {
	const [email, setEmail] = useState("");
	const [showAlert, setShowAlert] = useState(false);

	const isValidEmail = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setEmail("");
		setShowAlert(true);
		// console.log("Submitted email:", email);
		const response = await fetch("/api/subscribe", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email }),
		});
		const data = await response.json();
		console.log(data);
	};

	useEffect(() => {
		if (showAlert) {
			setTimeout(() => {
				setShowAlert(false);
			}, 10000);
		}
	}, [showAlert]);
	return (
		<form onSubmit={handleSubmit} className="px-4 md:px-0 w-full max-w-md mt-14">
			<div className="flex w-full max-w-md items-center space-x-2">
				<Input
					className="border-[#353535] text-md"
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Button
					className="bg-white hover:bg-white font-bold text-md text-[#141217]"
					type="submit"
					disabled={!isValidEmail(email)}
				>
					Ține-mă la curent!
				</Button>
			</div>
			{showAlert && (
				<Alert className="bg-[#19171c] border-green-500 mt-4">
					<AlertTitle className="text-green-700">Mulțumim pentru înscriere!</AlertTitle>
					<AlertDescription className="text-white">
						Verifică mail-ul pentru a confirma adresa introdusă. Acolo vei primi actualizări cu privire la
						platforma Vessel!
					</AlertDescription>
				</Alert>
			)}
		</form>
	);
}
