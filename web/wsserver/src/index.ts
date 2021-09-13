import WebSocket from "ws";

const port: number = Number(process.env.SERVER_PORT_NUMBER) || 8080;

const serverOptions: WebSocket.ServerOptions = {
      port: port
};

const wss: WebSocket.Server = new WebSocket.Server(
      serverOptions
);

//Starting server------
console.log(`[INFO] started server on port ${port}`);

wss.on('connection', (ws: WebSocket): void => {
      ws.on('message', (message: string): void =>{
            console.log(`[Client]: ${message}`);
      });
      ws.send('Hi there!');
});

