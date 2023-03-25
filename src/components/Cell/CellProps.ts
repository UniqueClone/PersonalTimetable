/**
 * Props for the Cell component.
 */
export interface CellProps {
    /**
     * Optional class name for css.
     */
    className?: string;

    color?: string;

    /**
     * The class length in hours.
     * @example 1
     * @example 2
     */
    length?: number;

    /**
     * The class location.
     * @example "TH1"
     * @example "JH6"
     */
    room?: string;

    /**
     * The class Code.
     * @example "CS601"
     * @example "EP200"
     */
    class?: string;

    /**
     * The class Name.
     * @example "Introduction to Computer Science"
     */
    name?: string;

    /**
     * The text to display in the cell.
     * Might be used for notes.
     */
    content?: string;
}
