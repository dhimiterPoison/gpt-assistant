'use client';

import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from '@/app/components/ui/avatar';
import { Button } from '@/app/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/app/components/ui/card';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/app/components/ui/form';
import { Input } from '@/app/components/ui/input';
import { MicrophoneIcon } from '@/lib/icons';
import ChatIllustration from '@/public/illustrations/chat.svg';
import { zodResolver } from '@hookform/resolvers/zod';
import { CameraIcon, UploadIcon } from '@radix-ui/react-icons';
import { useChat } from 'ai/react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

type Message = {
	role: 'user' | 'gpt';
	message: string;
};
const TextualChat = () => {
	// const [messages, setMessages] = React.useState<Message[]>([
	// {
	// 	"role": "user",
	// 	"message": "hey brother"
	// },
	// {
	// 	"role": "gpt",
	// 	"message": "Hello! How can I assist you today?"
	// }
	// ]);
	const { messages, handleSubmit, input, handleInputChange } = useChat();

	const formSchema = z.object({
		question: z.string(),
	});

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			question: '',
		},
	});

	//! DEPRECATED. handling submit through the library hook useChat
	async function onSubmit(values: z.infer<typeof formSchema>) {
		console.log('text chat submit', values);
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		if (values.question.trim() === '') return;

		//TODO: set loading state
		// setMessages((messages) => [
		// 	...messages,
		// 	{ role: 'user', message: values.question },
		// ]);
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
		// setMessages((messages) => [
		// 	...messages,
		// 	{ role: 'gpt', message: data?.answer },
		// ]);

		//reset form
		form.reset();
	}

	console.log('messages', messages);

	return (
		<Card className='flex h-full grow-[2] flex-col overflow-y-hidden'>
			<CardHeader>
				<CardTitle>Chat</CardTitle>
				<CardDescription>
					Ask me anything about your day, I&apos;ll try to help you
					out.
				</CardDescription>
			</CardHeader>
			<CardContent className='flex flex-col h-full content-end items-stretch justify-end p-6'>
				<hr className='mx-6' />
				<div className='flex h-full flex-col gap-4 overflow-y-auto p-6 empty:pb-0'>
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
									<span className='text-xs font-bold uppercase'>
										{message.role}
									</span>
									{message.content}
								</div>
							</div>
						);
					})}
					{messages.length === 0 ? (
						<div className='flex h-full justify-center'>
							<Image
								src={ChatIllustration}
								className='h-full'
								alt='template image for textual chat'
							/>
						</div>
					) : null}
				</div>
				<div className='flex w-full justify-evenly gap-6  overflow-hidden pb-4'>
					<div className='flex flex-col items-center justify-center rounded-xl'>
						<UploadIcon className='h-8 w-8 text-gray-400' />
						<Button
							className='mt-4 shadow-md'
							variant='secondary'
							size='sm'
						>
							Upload
						</Button>
					</div>
					<div className='flex flex-col items-center justify-center rounded-xl  '>
						<CameraIcon className='h-8 w-8 text-gray-400' />
						<Button
							className='mt-4 shadow-md'
							variant='secondary'
							size='sm'
						>
							Live
						</Button>
					</div>
					<div className='flex flex-col items-center justify-center rounded-xl  '>
						<MicrophoneIcon className='h-8 w-8 text-gray-400' />
						<Button
							className='mt-4 shadow-md'
							variant='secondary'
							size='sm'
						>
							Audio
						</Button>
					</div>
				</div>
				<div className='flex items-center gap-4'>
					<div className='my-2 h-[1px] w-full border border-gray-400'></div>
					or
					<div className='my-2 h-[1px] w-full border border-gray-400'></div>
				</div>
				<Form {...form}>
					<form
						// onSubmit={form.handleSubmit(onSubmit)}
						onSubmit={handleSubmit}
						className='space-y-8 justify-self-end'
					>
						<FormField
							control={form.control}
							name='question'
							render={({ field }) => (
								<FormItem className=''>
									<FormLabel>Message</FormLabel>
									<FormControl>
										<div className='flex w-full  gap-4'>
											<Input
												placeholder='Example: I want to eat healthier'
												{...field}
												value={input}
												onChange={handleInputChange}
											/>
											<Button
												type='submit'
												size='icon'
												className='px-2'
											>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													strokeWidth={1.5}
													stroke='currentColor'
													className='h-5 w-5'
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
