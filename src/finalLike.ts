class MessageQueue{
    private constructor(private messages : string[]){}
    static create(messages:string[]){
        return new MessageQueue(messages)
    }
}

// @ts-ignore
class BadQueue extends MessageQueue{} //확장불가
MessageQueue.create([]) //MessageQueue
