import Image from "next/image";
import Favorite from "./components/Favorite";

export default function Page() {
	const favorites = [
		{
			// name: "アンナチュラル",あああああ
			src: "/image/20250430_142945959_iOS.jpg",
			alt: "アンナチュラルの画像",
		},
		{
			name: "This Is Me",
			src: "/images/20250507_140551000_iOS.jpg",
			alt: "This Is Meの画像",
		},
		{
			name: "FOOD",
			src: "/images/20250305_130609805_iOS.jpg",
			alt: "FOODの画像",
		}
]
	return (
		<div className="flex justify-center">
			<Image src='/images/myface.jpg' alt='私の画像' width={800} height={500} className="w-full max-w-4xl object-contain rounded-2xl" />

		<h1 className="text-5xl text-blue-500 font-bold p-10">堀口紗来</h1>
		{favorites.map((favorite, index) => (
		<Favorite key={index} name={favorite.name} src={favorite.src} alt={favorite.alt} className="w-60" />
      ))}
		</div>
	)
}
