import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Admin } from "./components/Admin/Admin";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { Timetable } from "./components/Timetable/Timetable";
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
        },
        {
            path: "/admin",
            element: <Admin />,
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

