'use client';
import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react';
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';

const RecorderController = () => {
	// const {
	// 	startRecording,
	// 	stopRecording,
	// 	togglePauseResume,
	// 	recordingBlob,
	// 	isRecording,
	// 	isPaused,
	// 	recordingTime,
	// 	mediaRecorder,
	// } = useAudioRecorder();

	const recorderControls = useAudioRecorder();

	const [currentSavedAudio, setCurrentSavedAudio] = useState<Blob>();

	// const addAudioElement = (blob: Blob) => {
	// 	const audioContainer = document.getElementById('audio-container');
	// 	if (!audioContainer) {
	// 		console.log('audiocontainer not found bro');
	// 		return;
	// 	}

	// 	console.log('LESSGOOO audiocontainer found it bro');
	// 	const url = URL.createObjectURL(blob);
	// 	const audio = document.createElement('audio');
	// 	audio.src = url;
	// 	audio.controls = true;
	// 	audioContainer.append(audio);
	// };

	useEffect(() => {
		if (!recorderControls.recordingBlob) {
			console.log('blob non ritornato :(');
			return;
		}
		const audioContainer = document.getElementById('audio-container');
		if (!audioContainer) {
			console.log('audiocontainer not found bro');
			return;
		}

		console.log('LESSGOOO audiocontainer found it bro');
		const url = URL.createObjectURL(recorderControls.recordingBlob);
		const audioElement = document.createElement('audio');
		audioElement.src = url;
		audioElement.controls = true;
		audioElement.id = 'audio-element'

		const previousAudioEl = document.getElementById('audio-element');
		if(previousAudioEl) {
			audioContainer.removeChild(previousAudioEl)
		}

		audioContainer.append(audioElement);

		setCurrentSavedAudio(recorderControls.recordingBlob);

		// recordingBlob will be present at this point after 'stopRecording' has been called
	}, [recorderControls.recordingBlob]);

	const transcribeRecordedAudio = async () => {
		console.log('transcribe method called', currentSavedAudio)

		const response = await fetch('/api/audio', {
			method: 'POST',
			headers: {
				"Content-Type": currentSavedAudio ? currentSavedAudio.type : 'audio/webm;codecs=opus', // Set the MIME type of the blob
			},
			body: currentSavedAudio
		});
	};

	console.log('recordingBlob', recorderControls);

	return (
		<div className='absolute bottom-0 left-0 flex w-full flex-col items-center justify-center bg-red-50 p-2'>
			<div className='flex w-full items-center justify-center gap-2 bg-slate-300 [&:not(:empty)]:p-2'>
				<div id='audio-container' className=''>
					{/* <div>fs</div> */}
				</div>
				<Button
					className='rounded-full'
					onClick={transcribeRecordedAudio}
				>
					Send
				</Button>
			</div>
			<div className='flex items-center justify-center p-2'>
				<AudioRecorder
					// onRecordingComplete={(blob: Blob) => addAudioElement(blob)}
					recorderControls={recorderControls}
					showVisualizer={true}
					classes={{
						AudioRecorderClass: '',
					}}
				/>
			</div>
			<div className='flex'>
				<button onClick={recorderControls.stopRecording}>
					Stop recording
				</button>
			</div>
		</div>
	);
};

export default RecorderController;
