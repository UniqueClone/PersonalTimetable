import { Theme, mergeStyleSets } from "@fluentui/react";

/**
 * Get class names for the WelcomeScreen.
 * @param theme Theme.
 * @returns Class names.
 */
export const getWelcomeScreenStyles = (theme?: Theme) => {
    return mergeStyleSets({
        link: {
            color: "white",
            fontWeight: "600",
            textDecoration: "none"
        },
        separator: {
            minWidth: "50rem"
        }
    });
};
