import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { UploadIcon } from '@radix-ui/react-icons';
import React from 'react';

const VideoUpload = () => {
	return (
		<Card className='flex flex-col'>
			<CardHeader>
				<CardTitle>Video Upload</CardTitle>
				<CardDescription>
					Drag and drop your video or audio files here or click the button to
					browse your files.
				</CardDescription>
			</CardHeader>
			<CardContent className='flex flex-col items-center justify-center p-6'>
				<UploadIcon className='h-12 w-12 text-gray-400' />
				<Button className='mt-4' variant='outline'>
					Browse Files
				</Button>
			</CardContent>
		</Card>
	);
};

export default VideoUpload;
