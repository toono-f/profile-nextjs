import { Spacer } from "@/components/atoms/Spacer";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

export default { component: Spacer } as ComponentMeta<typeof Spacer>;

export const Index: ComponentStoryObj<typeof Spacer> = {
  args: {
    size: "md",
  },
};
