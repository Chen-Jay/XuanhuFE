export default class UrlDictionary {
    map;
    baseUrl;
    instance;
    static getInstance() {
        if (!this.instance) {
            this.instance = new UrlDictionary();
            this.instance.init();
        }
        return this.instance;
    }
    constructor() {
        this.map = new Map();
        // this.baseUrl = "http://192.168.1.221/";
        this.baseUrl = window.location.origin + "/";
    }
    init() {
        this.map.set('login', 'login');
        this.map.set('logout', 'logout');
        this.map.set('register', 'reg');
    }
    get(k) {
        return this.map.get(k);
    }
    url(k) {
        return this.baseUrl + this.map.get(k);
    }
    api(k) {
        return this.baseUrl + "api/" + this.map.get(k);
    }
    delete(k) {
        this.map.delete(k);
    }
    concat(str) {
        return this.baseUrl + str;
    }
}