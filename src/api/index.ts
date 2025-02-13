const ws = new WebSocket("ws://localhost:8000/ws")

const connect = (cb) => {
    ws.onopen = () => {
        console.log("its got connected")
    }

    ws.onmessage = (msg) => {
        console.log("message fron socket: ", msg)
        cb(msg)
    }

    ws.onclose = (event) => {
        console.log("websocket got disconnected", event)
    }
    ws.onerror = (error) => {
        console.log("an error occurred with no actual connection: ", error)
    }
};

const sendMsg = (msg) => {
    console.log("message send: ", msg)
    ws.send(msg)
}

export { connect, sendMsg }
