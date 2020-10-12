let singleton = Symbol();
let singletonEnforcer = Symbol();

class Singleton {

    UrlLog = {};

    constructor(enforcer) {

        if (enforcer !== singletonEnforcer)
            throw "Instantiation failed: use Singleton.getInstance() instead of new.";
    }

    static get _instance() {
        if (!this[singleton])
            this[singleton] = new Singleton(singletonEnforcer);
        return this[singleton];
    }

    static set _instance(v) { throw "Can't change constant property!" };
    static getInstance() { return this._instance; };

    addUrl = url => { this.UrlLog[url] ? this.UrlLog[url] += 1 : this.UrlLog[url] = 1 };

    clearLogs = () => {
        this.UrlLog = {};
        this.print();
    }

    print() {
        if (Object.keys(this.UrlLog)[0]) {
            for (const [key, value] of Object.entries(this.UrlLog)) {
                console.log(`URL: ${key}. Followed link: ${value}`);
            }
        } else {
            console.log("Nothing to show here!");
        }
    }
}

export default Singleton;