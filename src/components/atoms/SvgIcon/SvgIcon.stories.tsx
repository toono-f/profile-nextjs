import { SvgIcon } from "@/components/atoms/SvgIcon";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

type T = typeof SvgIcon;
type Story = ComponentStoryObj<T>;

export default { component: SvgIcon, args: {} } as ComponentMeta<T>;

export const Default: Story = {
  args: {
    fileName: "Zenn",
    width: 34,
    height: 34,
    fill: "#3EA8FF",
  },
};
