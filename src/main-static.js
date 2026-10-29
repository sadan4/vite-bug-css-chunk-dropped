import workerUrl from "./worker-url.js";
import { create } from "./core.js";

console.log(workerUrl);
create();
import("./lazy.js").then((m) => m.lazyThing());
