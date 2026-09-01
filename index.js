console.log("DEPLOYHATCH_PREVIEW_CANARY=START");
console.log(`NODE_VERSION=${process.version}`);
console.log("SECRETS_REQUIRED=NO");
console.log("DATABASE_REQUIRED=NO");
console.log("EXTERNAL_DEPENDENCIES=NONE");
console.log("DEPLOYHATCH_PREVIEW_CANARY=PASS_RUNNING");
setInterval(() => console.log("PREVIEW_CANARY_HEARTBEAT=OK"), 60000);
