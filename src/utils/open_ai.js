// import OpenAI from "openai";
// const client = new OpenAI(
  

// );
import { OPENAI_API_KEY } from "./constant";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true, // ⚠️ allows frontend usage
});

export default client;

