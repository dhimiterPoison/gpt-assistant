import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { v4 as uuidv4 } from 'uuid';

const config = { apiKey: process.env.OPENAI_API_KEY };
const openai = new OpenAI(config);

export async function POST(req: Request) {
	const json = await req.json()
	const { messages, previewToken } = json
	// const userId = (await auth())?.user.id
  
	// if (!userId) {
	//   return new Response('Unauthorized', {
	// 	status: 401
	//   })
	// }
  
	if (previewToken) {
	  openai.apiKey = previewToken
	}
	try {
		const response = await openai.chat.completions.create({
			model: 'gpt-4-0613',
			stream: true,
			max_tokens: 1500,
			messages: [
				// {
				// 	role: 'system',
				// 	content: `You are a helpful assistant that helps the user in time planning, activities planning, task automation. Provide your answer in JSON structure like this {"answer": "<your answer>"}`,
				// },
				...messages,
			],
		});

		const stream = OpenAIStream(response, {
			onStart: () => console.log('started'),
			async onCompletion(completion) {
				const title = json.messages[0].content.substring(0, 100)
				const id = json.id ?? uuidv4()
				const createdAt = Date.now()
				// const path = `/chat/${id}`
				const payload = {
				  id,
				  title,
				//   userId,
				  createdAt,
				//   path,
				  messages: [
					...messages,
					{
					  content: completion,
					  role: 'assistant'
					}
				  ]
				}
				// await kv.hmset(`chat:${id}`, payload)
				// await kv.zadd(`user:chat:${userId}`, {
				//   score: createdAt,
				//   member: `chat:${id}`
				// })
			  }
		});
		
		return new StreamingTextResponse(stream);
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
