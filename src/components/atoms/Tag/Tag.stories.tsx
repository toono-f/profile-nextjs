import { Tag } from "@/components/atoms/Tag";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

export default { component: Tag } as ComponentMeta<typeof Tag>;

export const Index: ComponentStoryObj<typeof Tag> = {
  args: {
    name: "React",
  },
};
