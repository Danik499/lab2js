import Singleton from "./prog"

const example = Singleton.getInstance()

example.addUrl("http://google.com");
example.addUrl("http://instagram.com");
example.addUrl("http://youtube.com");
example.addUrl("http://instagram.com");
example.addUrl("http://telegram.com");
example.addUrl("http://telegram.com");
example.addUrl("http://telegram.com")
example.print()
console.log("----------------------------------------------")
example.clearLogs()
console.log("----------------------------------------------")
example.print()