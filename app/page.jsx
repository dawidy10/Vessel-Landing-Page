import Image from "next/image";
import logo from "@/public/nav-logo-updated.svg";
import footerLogo from "@/public/footerLogo.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import animation from "@/public/animation.gif";
import scribble from "@/public/scribble.svg";
import styles from "@/app/app.module.css";
import CardComponent from "@/components/HomeCard";
import Form from "@/components/Form";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<div className="flex flex-col items-center py-4 relative pb-10">
				<Image className="z-10" src={logo} width={130} height={100} alt="Vessel Logo" />
				<h1 className="z-10 font-bold text-4xl md:text-6xl text-center mt-20 w-full md:w-3/4 z-1 md:leading-normal leading-normal px-4 md:px-0">
					Locul Unde Slujitorii Pot{" "}
					<span className="z-10 px-1 bg-accent z-0 inline-block skew-y-1">
						<span className="z-10 skew-y-0">Studia</span>
					</span>{" "}
					<span className="z-10 px-1 bg-accent z-0 inline-block skew-y-1"> Scriptura</span> Împreună
				</h1>
				<div className="z-10 flex mt-14">
					<Avatar className="z-10 border-2 border-[#141217]">
						<AvatarImage src="/avatars/me.jpg" />
						<AvatarFallback>User</AvatarFallback>
					</Avatar>
					<Avatar className="z-10 border-2 border-[#141217] -ml-2">
						<AvatarImage src="/avatars/2.jpg" />
						<AvatarFallback>User</AvatarFallback>
					</Avatar>
					<Avatar className="z-10 border-2 border-[#141217] -ml-2">
						<AvatarImage src="/avatars/3.jpg" />
						<AvatarFallback>User</AvatarFallback>
					</Avatar>
					<Avatar className="z-10 border-2 border-[#141217] -ml-2">
						<AvatarImage src="/avatars/4.jpg" />
						<AvatarFallback>User</AvatarFallback>
					</Avatar>
					<Avatar className="z-10 border-2 border-[#141217] -ml-2">
						<AvatarImage src="/avatars/5.jpg" />
						<AvatarFallback>User</AvatarFallback>
					</Avatar>
					<Avatar className="z-10 border-2 border-[#141217] -ml-2">
						<AvatarImage src="/avatars/6.jpg" />
						<AvatarFallback>User</AvatarFallback>
					</Avatar>
				</div>
				<p className="z-10 font-normal text-lg mt-4 px-4 md:px-0	 text-center w-96">
					Studiul personal întâlnește socializarea într-o manieră organizată și productivă.
				</p>
				<Button className="z-10 mt-8 font-normal text-white text-2xl px-8 py-6 bg-gradient-to-r from-accent to-[#991F1F]">
					<Link href="/#waitlist">Alătură-te</Link>
				</Button>
				<div className="bg-accent opacity-15 w-[500px] h-[500px] absolute z-0 top-96 blur-3xl circle rounded-full"></div>
				<div className={`${styles.fadeEffect} px-4 md:px-0 mt-20 z-10`}>
					<Image
						className={`${styles.gif} z-10 border border-[#353535] rounded`}
						src={animation}
						width={800}
						height={450}
						alt="Animation"
					/>
				</div>
				<p className="z-10 text-5xl mt-20 text-center px-4 md:px-0 w-full md:w-2/3">
					Un Nou Mod De A Aprofunda Cuvântul
				</p>
				<div className="flex flex-col md:flex-row items-center justify-evenly w-3/4 mt-10">
					<div className="text-center md:text-left">
						<p className="text-2xl">Dacă te confrunți cu:</p>
						<ul className="list-disc text-xl mt-4 md:mt-2">
							<li>dezorganizare</li>
							<li>lipsa unei comunități</li>
							<li>lipsa clarității în idei</li>
						</ul>
					</div>
					<Image className="mt-8 md:mt-0" src={scribble} width={220} height={200} alt="scribble" />
				</div>
				<p className="z-10 text-3xl mt-20 text-center px-4 md:px-0 w-full md:w-2/3">
					nu trebuie să mai cauți, <span className="underline">aici e locul tău.</span>
				</p>
				<div className="px-4 md:px-0">
					<CardComponent img="/discussion.svg" text="Pornește discuții și explorează subiecte teologice." />
					<CardComponent img="/annotation.svg" text="Distribuie adnotări și observații pe pasaje Biblice." />
					<CardComponent img="/connection.svg" text="Creează conexiuni între pasaje din Scriptură." />
				</div>
				<p className="z-10 text-3xl mt-20 text-center px-4 md:px-0 w-full md:w-1/2">
					...toate acestea în cadrul unei comunități de oameni pasionați.
				</p>
				<span className="h-0.5 w-1/2 bg-[#353535] mt-14"></span>
				<p className="z-10 text-4xl mt-20 text-center px-4 md:px-0 w-full md:w-1/2">
					Fii primul care primește acces!
				</p>
				<p id="waitlist" className="z-10 text-lg mt-4 text-center px-4 w-full md:w-1/2">
					Vessel nu este încă deschis publicului, înscrie-te mai jos pentru a fi primul care află când
					platforma este gata!
				</p>
				<Form />
				<Image className="mt-20" src={footerLogo} width={50} height={50} alt="logo" />
			</div>
		</>
	);
}
