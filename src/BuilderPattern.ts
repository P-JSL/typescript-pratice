import {resolveObjectURL} from "buffer";

class RequestBuilder{
    private data : object | null = null
    private method : 'get'|'post'|null = null
    private url : string | null = null
    setURL(url:string) : this {
        this.url = url
        return this
    }
    setData(data:object) : this {
        this.data = data
        return this
    }
    send(){
    }
}

new RequestBuilder().setURL("http://s").setData({}).send()