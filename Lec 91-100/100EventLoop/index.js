// Event Loop is js
// Event show How the Js Works as fast language
// what is js? What is Call Stack?
// Asyncronous Callback
// Task Queue
// Event Loop

// js is a single Thread
// non blocking 
// asynchronous concurrent lang
// it have call stack , event loop , callback queue + other APIs
// js runtime(V8) has a call Stack and a heap.
// heap = memory allocation
// stack = exec content
// DOM setTimeout XML HttpsReq dont exist in V8 source code
 

// sometime js can take very large time
// such as setTimeout
// it will run after sometime
// the js script run continusely
// asynchronous callbacks for non-blocking behavior
// js can do one thing at one time

// the rest are queued to the task queue waiting to exec
// it will put the task in the task queue when the setTimeout time ends
// these tasks will be pushed to the stack where they exec

// js runtime based on event loop
// event loop put into the task in stack and queue
// event loop pushes the task from the task_queue to the stack call
