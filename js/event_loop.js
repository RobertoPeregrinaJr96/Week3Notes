



/*
JavaScript single threading language - will only execute one item at a time

Call Stack - the structure that keeps track of execution of items
    - you *push* items to the top of the Call Stack
    - you *pop* items off once there are done executing and move on to the next item
    - each item is called a frame on the Call Stack

function foo() {
  console.log("a");  ---> 1st item to execute
  bar();    ----> pushed to the top of the Call Stack
  *bar* is popped off the Call Stack and resumes this frame execution
  console.log("e"); ----> 5th item to execute
  *foo* is popped of the Call Stack is now empty
}

function bar() {
  console.log("b"); ----> 2nd item to execute
  baz(); ----> pushed to the top of the Call Stack
  *baz* is popped off the Call Stack and resumes this frame
  console.log("d");  4th item to execute
}

function baz() {
  console.log("c"); ----> 3rd item to execute
}

foo();  ---> pushed on the Call Stack
*/

/*
Message Queue - a structure to handle events
    - usually only a thing when Asynchronicity is involved
    - when frames enter the queue its called enqueueing and are placed at the back of the queue
    - when frames are at the front of the queue are ready to execute ,we call that dequeueing
*/


/*
The Event Loop - module of execution
    - consists of the message queue and the call stack
    - if a frame is synch(synchronicity) it will always execute first ignoring any Async item/frame
    - Async items/frames will execute in order of the message queue


    function foo1() {

        setTimeout(() => { ----> enters the message queue and will execute in 600 ms
        console.log("1");
    }, 600)

    bar1(); ----> enters the call stack
    *bar1* is popped off the call stack

    console.log("4"); ----> the 2nd item to execute
}

function bar1() {
    setTimeout(() => { ----> enters the message queue and will execute in 400 ms
        console.log("2");
    }, 400);

    baz1();  ----> enters the call stack
    *baz1* is popped off the call stack

    setTimeout(() => { ----> will enter the queue and execute in 200 ms
        console.log("3");
    }, 200);
}

function baz1() {
    console.log("5"); ----> the 1st item to execute
}
foo1(); ----> enters the call stack
*/
console.log("Synchronous ")

function foo() {
    console.log("a");
    bar();
    console.log("e");
}

function bar() {
    console.log("b");
    baz();
    console.log("d");
}

function baz() {
    console.log("c");
}

foo();

console.log("asynchronous ")

function foo1() {
    setTimeout(() => {
        console.log("1");
    }, 600)
    bar1();
    console.log("4");
}

function bar1() {
    setTimeout(() => {
        console.log("2");
    }, 400);
    baz1();
    setTimeout(() => {
        console.log("3");
    }, 200);
}

function baz1() {
    console.log("5");
}

foo1();
