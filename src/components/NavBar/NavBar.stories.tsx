import { ComponentMeta, ComponentStory } from "@storybook/react";
import { NavBar } from "./NavBar";

export default {
    title: "Components/NavBar",
    component: NavBar
} as ComponentMeta<typeof NavBar>;

export const NavBarLoggedOut: ComponentStory<typeof NavBar> = () => <NavBar />;
