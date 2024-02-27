import { HandwriteIcon, MicrophoneIcon } from '@/lib/icons';
import { TextIcon, Video, VideoIcon } from 'lucide-react';
import React from 'react'

const useIcon = (icon: string) => {
	const className = 'w-4 h-4';
	switch (icon) {
		case 'video':
			return <Video className={className} />;
		case 'audio':
			return <MicrophoneIcon  className={className} />;
		case 'text':
			return <TextIcon  className={className} />;
		case 'handwritten':
			return <HandwriteIcon  className={className} />;
		default:
			return <TextIcon  className={className} />;
	}
}

export default useIcon