'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { set, useForm } from 'react-hook-form';
import * as z from 'zod';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import React from 'react';
import { ArrowIcon } from '@/components/lib/icons';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@radix-ui/react-separator';
import Image from 'next/image';
import ChatIllustration from '@/public/illustrations/chat.svg';

type Message = {
	role: 'user' | 'gpt';
	message: string;
};
const TextualChat = () => {
	const [messages, setMessages] = React.useState<Message[]>([
		// {
		// 	"role": "user",
		// 	"message": "hey brother"
		// },
		// {
		// 	"role": "gpt",
		// 	"message": "Hello! How can I assist you today?"
		// }
	]);

	const formSchema = z.object({
		question: z.string(),
	});

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			question: '',
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		console.log('text chat submit', values);
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		if (values.question.trim() === '') return;

		//TODO: set loading state
		setMessages((messages) => [
			...messages,
			{ role: 'user', message: values.question },
		]);
		//send message to backend
		const response = await fetch('/api/chat', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(values),
		});

		const data = await response.json();
		console.log('data', data);
		setMessages((messages) => [
			...messages,
			{ role: 'gpt', message: data?.answer },
		]);

		//reset form
		form.reset();
	}

	console.log('messages', messages);

	return (
		<Card className='flex flex-col h-full overflow-y-hidden grow-[2]'>
			<CardHeader>
				<CardTitle>Chat</CardTitle>
				<CardDescription>
					Ask me anything about your day, I&apos;ll try to help you out.
				</CardDescription>
			</CardHeader>
			<hr className='mx-6' />
			<div className='h-full flex flex-col p-6 gap-4 empty:pb-0 overflow-y-auto'>
				{messages.map((message, index) => {
					return (
						<div key={index} className='flex gap-2'>
							<Avatar>
								<AvatarImage
									src='https://picsum.photos/200'
									alt={message.role}
								/>
								<AvatarFallback>DH</AvatarFallback>
							</Avatar>
							<div className='flex flex-col'>
								<span className='font-bold uppercase text-xs'>
									{message.role}
								</span>
								{message.message}
							</div>
						</div>
					);
				})}
				{messages.length === 0 ? (
					<div className='h-full flex justify-center'>
						<Image
							src={ChatIllustration}
							className='h-full'
							alt='template image for textual chat'
						/>
					</div>
				) : null}
			</div>
			<CardContent className='h-full flex flex-col items-stretch justify-end content-end p-6 '>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='justify-self-end space-y-8'
					>
						<FormField
							control={form.control}
							name='question'
							render={({ field }) => (
								<FormItem className=''>
									<FormLabel>Message</FormLabel>
									<FormControl>
										<div className='flex gap-4  w-full'>
											<Input
												placeholder='Example: I want to eat healthier'
												{...field}
											/>
											<Button type='submit' size='icon' className='px-2'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													strokeWidth={1.5}
													stroke='currentColor'
													className='w-5 h-5'
												>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														d='M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5'
													/>
												</svg>
											</Button>
										</div>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
};

export default TextualChat;
