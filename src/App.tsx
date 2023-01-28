import React from "react";
import { initializeIcons } from "@fluentui/react";
import "./App.css";
import { WelcomeScreen } from "./components/WelcomeScreen/WelcomeScreen";

initializeIcons();

export const App: React.FunctionComponent = () => {
    return (
        // TODO Add command bar to top of page

        <WelcomeScreen />
    );
};

