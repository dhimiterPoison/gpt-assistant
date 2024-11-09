import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import { getXataClient } from '@/lib/xata';
import Error from 'next/error';
import path from 'path';
import os from 'os';
import { BlobLike, Uploadable } from 'openai/uploads.mjs';
import { XataFile } from '@xata.io/client';
import { revalidatePath } from 'next/cache';

const config = {
	apiKey: process.env.OPENAI_API_KEY,
	api: { bodyParser: false },
};
const openai = new OpenAI(config);

const xata = getXataClient();

export async function GET(req: Request) {
	console.log('chiamata /api/audio è stata iniziata con successo');

	// const json = await req.json();
	// const { messages, previewToken } = json;

	// Check auth

	// const userId = (await auth())?.user.id

	// if (!userId) {
	//   return new Response('Unauthorized', {
	// 	status: 401
	//   })
	// }

	// if (previewToken) {
	// openai.apiKey = previewToken;
	// }
	try {
		let transcription = '';
		
		console.log(transcription);

		return NextResponse.json({ body: transcription });

		// return new StreamingTextResponse(stream);

		//  OLD
		// const answer = gpt4Completion.choices[0]?.message.content;
		// if (answer && answer[0] === '{') {
		// 	const json = JSON.parse(answer);
		// 	console.log('got answer: ', json);
		// 	return NextResponse.json(json);
		// } else {
		// 	console.log('answer not json: ', answer);
		// 	return NextResponse.json({ tryAgain: true });
		// }
	} catch (error: any) {
		console.error('ooopss..', error);
		return NextResponse.json({ error: error }, { status: 500 });
	}
}
async function streamToBuffer(
	readableStream: ReadableStream<Uint8Array>
): Promise<Buffer> {
	const reader = readableStream.getReader();
	const chunks: Uint8Array[] = [];
	let done = false;

	while (!done) {
		const { value, done: streamDone } = await reader.read();
		done = streamDone;
		if (value) {
			chunks.push(value);
		}
	}

	return Buffer.concat(chunks);
}

export async function POST(req: Request) {
	console.log('Received POST /api/audio with req', req);

	try {
		if (!req.body) {
			console.log('body is null');
			return NextResponse.json(
				{ error: 'Request body is null' },
				{ status: 400 }
			);
		}

		console.log('body on server:', req.body)

		// Convert the readable stream to a Buffer
		const buffer = await streamToBuffer(
			req.body as ReadableStream<Uint8Array>
		);

		// Create a temporary file
		const tmpDir = os.tmpdir();
		const tmpFilePath = path.join(tmpDir, `audio-${Date.now()}.webm`);

		const tempFileBuffer = new Uint8Array(buffer);
		
		// Write the buffer to a temporary file
		  fs.writeFileSync(tmpFilePath, tempFileBuffer);

		// const fileLike: Uploadable = {
		// 	size: 1234,
		// 	// lastModified: Date.now(),
		// 	// name: 'test',
		// 	type: 'audio/mpeg',
		// 	text: async () =>
		// 		'This is a sample text representation of the file',
		// 	slice: (start?: number, end?: number) => {
		// 		// Return a new BlobLike object with the sliced data
		// 		return {
		// 			size: end ? end - (start || 0) : 1234,
		// 			type: 'audio/mpeg',
		// 			// lastModified: Date.now(),
		// 			// name: '',
		// 			text: async () => 'This is the sliced text representation',
		// 			slice: (start, end) => fileLike,
		// 		};
		// 	},
		// };

		try {
			// Use the temporary file path with OpenAI
			let transcription = await openai.audio.transcriptions.create({
				file: fs.createReadStream(tmpFilePath),
				model: 'whisper-1',
				response_format: 'text',
			});

			console.log(transcription);

			xata.db.thoughts.create({
				type: 0,
				text: transcription,
				audio_file: [XataFile.fromUint8Array(tempFileBuffer)]
			})

			revalidatePath('/dashboard', 'page')

			return NextResponse.json({ transcription: transcription });
		} finally {
			// Clean up: Delete the temporary file
			fs.unlinkSync(tmpFilePath);
		}
	} catch (error: any) {
		console.error('Error receiving file', error);
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
