"use strict";
class MessageQueue {
    constructor(messages) {
        this.messages = messages;
    }
    static create(messages) {
        return new MessageQueue(messages);
    }
}
// @ts-ignore
class BadQueue extends MessageQueue {
} //확장불가
MessageQueue.create([]); //MessageQueue
//# sourceMappingURL=finalLike.js.map