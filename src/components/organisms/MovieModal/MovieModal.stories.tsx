import { MovieModal } from "@/components/organisms/MovieModal";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

type T = typeof MovieModal;
type Story = ComponentStoryObj<T>;

export default { component: MovieModal, args: {} } as ComponentMeta<T>;

export const Default: Story = {};