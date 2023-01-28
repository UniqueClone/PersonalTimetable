/**
 * Props for the LoginDialog component.
 */
export interface LoginDialogProps {
    /**
     * Called when the component is dismissed.
     */
    onDismiss: () => void;

    /**
     * Is the component hidden?
     * @default true
     * @type {boolean}
     */
    hidden: boolean;
}
