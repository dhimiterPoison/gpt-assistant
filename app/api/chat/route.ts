import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
	const body = await req.json();
	console.log('logggbro body', body);
	try {
		const gpt4Completion = await openai.chat.completions.create({
			model: 'gpt-3.5-turbo-1106',
			response_format: { type: 'json_object' },
			messages: [
				{
					role: 'system',
					content: `You are a helpful assistant that helps the user in time planning, activities planning, task automation. Provide your answer in JSON structure like this {"answer": "<your answer>"}`,
				},
				{ role: 'user', content: body.question },
			],
		});

		const answer = gpt4Completion.choices[0]?.message.content;
		if (answer && answer[0] === '{') {
			const json = JSON.parse(answer);
			console.log('got answer: ', json);
			return NextResponse.json(json);
		} else {
			console.log('answer not json: ', answer);
			return NextResponse.json({ tryAgain: true });
		}
	} catch (error: any) {
		console.error('ooopss..', error);
		return NextResponse.json({ error: error }, { status: 500 });
	}
}
