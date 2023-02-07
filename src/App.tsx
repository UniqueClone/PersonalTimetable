import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import React from "react";
import Timetable from "./components/Timetable/Timetable";
import { WelcomeScreen } from "./components/WelcomeScreen/WelcomeScreen";
import { initializeIcons } from "@fluentui/react";

initializeIcons();

// TODO Add command bar to top of page.

export const App: React.FunctionComponent = () => {
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
            <RouterProvider router={router} />
        </main>
    );
};

