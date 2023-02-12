import { App } from "./App";
import ReactDOM from "react-dom";
import { mergeStyles } from "@fluentui/react";

// Inject some global styles
mergeStyles({
    ":global(body,html,#root)": {
        margin: 0,
        padding: 0,
        height: "100vh"
    }
});

ReactDOM.render(<App />, document.getElementById("root"));

