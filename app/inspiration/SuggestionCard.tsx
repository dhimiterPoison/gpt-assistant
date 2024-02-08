import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Image from 'next/image'
import Link from 'next/link'


interface SuggestionCardProps {
	title: string
	description: string
	link: string,
	image: string
}

const SuggestionCard = ({ title, description, image, link }: SuggestionCardProps) => {
	return (
		<Card className="min-w-[10rem] max-w-[45%]">
			<CardHeader className={`flex flex-row gap-4`}>
				<Image
					src={image}
					alt={title}
					className='w-16 h-16 rounded-full'
					width={100}
					height={100}
				/>
				<div className="header">
					<CardTitle>{title}</CardTitle>
					<CardDescription>{description}</CardDescription>
				</div>
			</CardHeader>
			<CardContent>
			</CardContent>
			<CardFooter className="flex justify-end">
				<Link href={link} target='_blank' className=''>
					<Button variant='outline' className="flex gap-2 items-center text-slate-900">
						<span>View</span>
						<ExternalLink className="w-4 h-4 "/>
					</Button>
				</Link>
			</CardFooter>
		</Card>
	)
}

export default SuggestionCard