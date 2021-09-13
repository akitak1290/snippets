import WebSocket from "ws";

const ws: WebSocket = new WebSocket('ws://localhost:8080');

ws.on('open', (): void => {
      console.log('[INFO] connected to ws server');
      ws.send('Hellooo!');
});

ws.on('message', (message: string): void =>{
      console.log(`[Server]: ${message}`);
});