import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import React from "react";
import Timetable from "./components/Timetable/Timetable";
import { WelcomeScreen } from "./components/WelcomeScreen/WelcomeScreen";
import { initializeIcons } from "@fluentui/react";
import { msalConfig } from "./authConfig";

initializeIcons();

// TODO Add command bar to top of page.

export const App: React.FunctionComponent = () => {
    const msalInstance = new PublicClientApplication(msalConfig);

    const router = createBrowserRouter([
        {
            path: "/",
            element: <WelcomeScreen />,
            errorElement: <ErrorPage />
        },
        {
            path: "/timetable",
            element: <Timetable />,
            errorElement: <ErrorPage />
        }
    ]);

    return (
        <main>
            <MsalProvider instance={msalInstance}>
                <RouterProvider router={router} />
            </MsalProvider>
        </main>
    );
};

