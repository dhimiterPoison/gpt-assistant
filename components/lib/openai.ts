export function connectToOpenAI() {
	console.log("Connecting to OpenAI...", process.env.TEST);
	
  const openai = new OpenAI();
  return "openai";
}