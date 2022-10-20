import {useEffect, useState} from "react";
import {Message, SocketObject} from "../models";
import {ws} from "../socket";


export default function useMessages() {

    const [messages, setMessages] = useState<Message[]>([])

    useEffect(() => {

        ws.onmessage = (event: MessageEvent) => {
            const obj: SocketObject = JSON.parse(event.data)
            if (obj.type == "Message") {
                const data: Message = JSON.parse(event.data)
                setMessages(messages => [...messages, data])
            }
        }
    }, [])

    return messages
}

