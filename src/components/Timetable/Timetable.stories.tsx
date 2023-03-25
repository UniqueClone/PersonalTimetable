import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Timetable } from "./Timetable";

export default {
    title: "Pages/Timetable",
    component: Timetable
} as ComponentMeta<typeof Timetable>;

export const TimetablePage: ComponentStory<typeof Timetable> = () => <Timetable />;
