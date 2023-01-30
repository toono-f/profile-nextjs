import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { Button } from "@/components/atoms/Button";

type T = typeof Button;
type Story = ComponentStoryObj<T>;

export default {
  component: Button,
  args: { href: "https://github.com/toono-f", children: "Button" },
} as ComponentMeta<T>;

export const Default: Story = {};
