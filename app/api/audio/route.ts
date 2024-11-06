import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import { getXataClient } from '@/lib/xata';

const config = { apiKey: process.env.OPENAI_API_KEY };
const openai = new OpenAI(config);

const xata = getXataClient();

export async function GET(req: Request) {
	console.log("chiamata /api/audio è stata iniziata con successo")

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
		const transcription = await openai.audio.transcriptions.create({
			file: fs.createReadStream('public/audio/test-rec-therapy.m4a'),
			model: 'whisper-1',
			response_format: 'text',
		});

		console.log(transcription)

		// xata.db.thoughts.getAll();

		return  NextResponse.json({body: transcription});

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
