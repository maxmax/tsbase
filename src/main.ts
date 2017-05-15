import { sayHello } from "./greet";
import { sayShow } from "./show";

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
}

function showFooter(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
    console.log("showFooter!");
}

showHello("greeting", "Content");
showFooter("footer", "Footer");
