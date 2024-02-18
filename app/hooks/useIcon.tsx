import { HandwriteIcon, MicrophoneIcon } from '@/lib/icons';
import { TextIcon, Video, VideoIcon } from 'lucide-react';
import React from 'react'

const useIcon = (icon: string) => {
	switch (icon) {
		case 'video':
			return <Video />;
		case 'audio':
			return <MicrophoneIcon />;
		case 'text':
			return <TextIcon />;
		case 'handwritten':
			return <HandwriteIcon />;
		default:
			return <TextIcon />;
	}
}

export default useIcon