import {ws} from "../socket"
import {Message} from "../models";
import {useEffect, useState} from "react";
import {Animated} from "react-native";
import delay = Animated.delay;

export default async function sendMessage(message: Message): Promise<boolean> {

    try {
        ws.send(JSON.stringify(message))
    } catch (e) {
        console.log(e)
    }
    useEffect(() => {
        const [ackTimer, setAckTimer] = useState(0)
        if (ackTimer < 5) {
            ws.onmessage= (e: MessageEvent) => {
                if (e.data == true) {
                    return
                }
            }
        } else return
        useEffect(() => {
            delay(1000)
            setAckTimer(ackTimer => ackTimer + 1)
        }, [ackTimer])

    },[true])
    return false
}
