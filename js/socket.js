const channelID = 274004; //CHANGE THIS

async function start() {
    let chatEndpointRequest = await fetch(`https://mixer.com/api/v1/chats/${channelID}/anonymous`);
    let endpontJSON = await chatEndpointRequest.json();

    const ws = new WebSocket(endpontJSON.endpoints[0]);

    ws.onmessage = (message) => {
        let parsedMessage = JSON.parse(message.data);

        if (parsedMessage.event == "WelcomeEvent") {
            ws.send(JSON.stringify({
                "type": "method",
                "method": "auth",
                "arguments": [channelID],
                "id": 0
            }));
        }

        if (parsedMessage.event == "ChatMessage") {
            if (parsedMessage.data.message.meta.is_skill) {
                spawnImage(parsedMessage.data.message.meta.skill.icon_url);
            } else {
                spawnText(buildMessage(parsedMessage.data.message.message));
            }
        }

        if (parsedMessage.event == "SkillAttribution") {
            spawnImage(parsedMessage.data.skill.icon_url);
        }
    }
}

function buildMessage(messageArray) {
    let finalMessage = "";
    for (let x = 0; x < messageArray.length; x++) {
        finalMessage += messageArray[x].text.trim();
    }

    return finalMessage;
}

start();