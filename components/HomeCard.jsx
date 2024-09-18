import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function CardComponent({ img, text }) {
	return (
		<Card className="w-full max-w-md bg-[#19171c] border-[#353535] py-4 mt-10">
			<CardContent className="flex items-center p-6">
				<Avatar className="h-16 w-16 mr-6 rounded-none">
					<AvatarImage src={img} alt="Icon" />
					<AvatarFallback>IC</AvatarFallback>
				</Avatar>
				<div>
					<p className="text-md text-white">{text}</p>
				</div>
			</CardContent>
		</Card>
	);
}
