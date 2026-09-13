const net = require("node:net");

const host = "0.0.0.0";
const port = 25565;
const payload = "r58f4f-r10f\n";

console.log("DEPLOYHATCH_PREVIEW_CANARY=START");
console.log(`NODE_VERSION=${process.version}`);
console.log("SECRETS_REQUIRED=NO");
console.log("DATABASE_REQUIRED=NO");
console.log("EXTERNAL_DEPENDENCIES=NONE");
console.log(`TCP_LISTEN_HOST=${host}`);
console.log(`TCP_LISTEN_PORT=${port}`);

const server = net.createServer((socket) => {
  socket.on("error", (error) => {
    console.log(`TCP_CLIENT_ERROR=${error.code || error.message}`);
  });
  socket.end(payload);
});

server.on("error", (error) => {
  console.error(`TCP_SERVER_ERROR=${error.message}`);
  process.exitCode = 1;
});

server.listen(port, host, () => {
  console.log("DEPLOYHATCH_PREVIEW_CANARY=PASS_RUNNING");
  console.log("TCP_LISTENER=READY");
});

setInterval(() => console.log("PREVIEW_CANARY_HEARTBEAT=OK"), 60000);
