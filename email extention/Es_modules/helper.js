// import { Groq } from "groq-sdk";
const Groq = require("groq-sdk")
require('dotenv').config();

// Create a new instance of Groq using the API key from the .env file
const groq = new Groq({ 
    apiKey:"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", 
    dangerouslyAllowBrowser: true 
});

async function main(prompt , type , prom = "") {
    let reponseGenrator;
    if(type == "Yes"){
        reponseGenrator =  await ForYes(prompt)
    }else if(type == "No"){
        reponseGenrator =  await ForNo(prompt)
    }else if(type == "Follow Up"){
        reponseGenrator =  await ForFollouUp(prompt)
    }else{
        reponseGenrator =  await ForGenrate(prompt , prom);
    }

    return reponseGenrator.choices[0]?.message?.content || ""
}

const ForNo = async (prompt)=>{
    return groq.chat.completions.create({
        //
        // Required parameters
        //
        messages: [
            // Set an optional system message. This sets the behavior of the
            // assistant and can be used to provide specific instructions for
            // how it should behave throughout the conversation.
            {
                role: "system",
                content: "You are a skilled communicator and your task is to write a polite and professional reply to the following email, conveying a negative response. Ensure your response is courteous, clearly explains the reasons for the negative reply, and maintains a respectful tone. Do not make any assumptions beyond the information provided in the email. ",
            },
            // Set a user message for the assistant to respond to.
            {
                role: "user",
                content: prompt
            }
        ],
        // The language model which will generate the completion.
        model: "llama3-8b-8192",
        //
        // Optional parameters
        //
        // Controls randomness: lowering results in less random completions.
        // As the temperature approaches zero, the model will become deterministic
        // and repetitive.
        temperature: 0.5,
        // The maximum number of tokens to generate. Requests can use up to
        // 2048 tokens shared between prompt and completion.
        max_tokens: 1024,
        // Controls diversity via nucleus sampling: 0.5 means half of all
        // likelihood-weighted options are considered.
        top_p: 1,
        // A stop sequence is a predefined or user-specified text string that
        // signals an AI to stop generating content, ensuring its responses
        // remain focused and concise. Examples include punctuation marks and
        // markers like "[end]".
        stop: null,
        // If set, partial message deltas will be sent.
        stream: false,


    });
};

const ForYes = async (prompt)=>{
    return groq.chat.completions.create({
        //
        // Required parameters
        //
        messages: [
            // Set an optional system message. This sets the behavior of the
            // assistant and can be used to provide specific instructions for
            // how it should behave throughout the conversation.
            {
                role: "system",
                content: "You are a skilled communicator and your task is to write a polite and professional reply to the following email, conveying a negative response. Ensure your response is courteous, clearly states the negative response, and maintains a respectful tone without assuming any additional context.",
            },
            // Set a user message for the assistant to respond to.
            {
                role: "user",
                content: prompt
            }
        ],
        // The language model which will generate the completion.
        model: "llama3-8b-8192",
        //
        // Optional parameters
        //
        // Controls randomness: lowering results in less random completions.
        // As the temperature approaches zero, the model will become deterministic
        // and repetitive.
        temperature: 0.5,
        // The maximum number of tokens to generate. Requests can use up to
        // 2048 tokens shared between prompt and completion.
        max_tokens: 1024,
        // Controls diversity via nucleus sampling: 0.5 means half of all
        // likelihood-weighted options are considered.
        top_p: 1,
        // A stop sequence is a predefined or user-specified text string that
        // signals an AI to stop generating content, ensuring its responses
        // remain focused and concise. Examples include punctuation marks and
        // markers like "[end]".
        stop: null,
        // If set, partial message deltas will be sent.
        stream: false,


    });
};

const ForFollouUp = async (prompt)=>{
    return groq.chat.completions.create({
        //
        // Required parameters
        //
        messages: [
            // Set an optional system message. This sets the behavior of the
            // assistant and can be used to provide specific instructions for
            // how it should behave throughout the conversation.
            {
                role: "system",
                content: "You are a skilled communicator and your task is to write a polite and professional follow-up reply to the following email. Ensure your response is courteous, addresses any previous concerns or questions, and maintains a respectful and positive tone. Do not make any assumptions beyond the information provided in the email.",
            },
            // Set a user message for the assistant to respond to.
            {
                role: "user",
                content: prompt
            }
        ],
        // The language model which will generate the completion.
        model: "llama3-8b-8192",
        //
        // Optional parameters
        //
        // Controls randomness: lowering results in less random completions.
        // As the temperature approaches zero, the model will become deterministic
        // and repetitive.
        temperature: 0.5,
        // The maximum number of tokens to generate. Requests can use up to
        // 2048 tokens shared between prompt and completion.
        max_tokens: 1024,
        // Controls diversity via nucleus sampling: 0.5 means half of all
        // likelihood-weighted options are considered.
        top_p: 1,
        // A stop sequence is a predefined or user-specified text string that
        // signals an AI to stop generating content, ensuring its responses
        // remain focused and concise. Examples include punctuation marks and
        // markers like "[end]".
        stop: null,
        // If set, partial message deltas will be sent.
        stream: false,


    });
};

const ForGenrate = async (prompt1 , prompt2)=>{
    return groq.chat.completions.create({
        //
        // Required parameters
        //
        messages: [
            // Set an optional system message. This sets the behavior of the
            // assistant and can be used to provide specific instructions for
            // how it should behave throughout the conversation.
            {
                role: "system",
                content: "You are a skilled communicator and your task is to write a reply according to the given prompt. Ensure your response is courteous, professional, and adheres strictly to the instructions provided. Do not make any assumptions beyond the information given. User Given prompt is in prom",
            },
            // Set a user message for the assistant to respond to.
            {
                role: "user",
                content: prompt,
                prom : prompt
            }
        ],
        // The language model which will generate the completion.
        model: "llama3-8b-8192",
        //
        // Optional parameters
        //
        // Controls randomness: lowering results in less random completions.
        // As the temperature approaches zero, the model will become deterministic
        // and repetitive.
        temperature: 0.5,
        // The maximum number of tokens to generate. Requests can use up to
        // 2048 tokens shared between prompt and completion.
        max_tokens: 1024,
        // Controls diversity via nucleus sampling: 0.5 means half of all
        // likelihood-weighted options are considered.
        top_p: 1,
        // A stop sequence is a predefined or user-specified text string that
        // signals an AI to stop generating content, ensuring its responses
        // remain focused and concise. Examples include punctuation marks and
        // markers like "[end]".
        stop: null,
        // If set, partial message deltas will be sent.
        stream: false,


    });
};

// Function to send a message
async function sendMessage() {
  var messageInput = document.getElementById('messageInput');
  var messageText = messageInput.value;

  if (messageText.trim() === '') {
    alert('Please enter a message.');
    return;
  }

  var chat = document.getElementById('chat');
  if (!chat) {
    console.error('Chat container not found.');
    return;
  }

  var message = document.createElement('div');
  message.className = 'message sender';
  message.textContent = messageText;
  chat.appendChild(message);

  // Clear input field after sending message
  messageInput.value = '';

  // Receive message from the model
  const response = await main(messageText);

    console.log(response);

    var resp = document.createElement('div');
    resp.className = 'message receiver';
    resp.textContent = response ;
    document.getElementById('chat').appendChild(resp);

}
// main("Hi")
module.exports = {main};
// main("Hey Amsal, I saw an ad on my instagram about your fitness program. I want to join it but I don't have the funds available right now. Is it possible to pay half")