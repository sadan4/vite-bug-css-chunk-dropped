import "./style.css";

export function create() {
    const el = document.createElement("div");
    el.className = "from-core";
    el.textContent = "styled by core css";
    document.body.append(el);
}
