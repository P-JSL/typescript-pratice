"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RequestBuilder {
    constructor() {
        this.data = null;
        this.method = null;
        this.url = null;
    }
    setURL(url) {
        this.url = url;
        return this;
    }
    setData(data) {
        this.data = data;
        return this;
    }
    send() {
    }
}
new RequestBuilder().setURL("http://s").setData({}).send();
//# sourceMappingURL=BuilderPattern.js.map