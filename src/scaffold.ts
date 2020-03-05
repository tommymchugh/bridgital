export function scaffoldApp() : HTMLElement {
    let appRoot = document.createElement("div");
    appRoot.id = "root";
    document.body.appendChild(appRoot);
    return appRoot;
}