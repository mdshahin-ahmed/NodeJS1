// event-driven architecture

const EventEmitter = require("events");

const myEmitter = new EventEmitter();

// first listener
myEmitter.on("birthday", () => {
  console.log("Happy birthday to you!");
});

myEmitter.on("birthday", (gift) => {
  console.log(`I will send a ${gift}`);
});
// calling event . .
myEmitter.emit("birthday", "bike");
