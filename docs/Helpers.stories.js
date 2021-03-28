import "../src/css/sistent.css";
import { createSpacing } from "./Helpers";

// story
export default {
    title: 'Helpers',
    argTypes: {
        padding: {
            control: {
                type: 'select',
                options: [
                    'pt--1', 'pt--2', 'pt--3', 'pt--4', 'pt--5', 'pt--6', 'pt--7', 'pt--8',
                    'pb--1', 'pb--2', 'pb--3', 'pb--4', 'pb--5', 'pb--6', 'pb--7', 'pb--8',
                    'pr--1', 'pr--2', 'pr--3', 'pr--4', 'pr--5', 'pr--6', 'pr--7', 'pr--8',
                    'pl--1', 'pl--2', 'pl--3', 'pl--4', 'pl--5', 'pl--6', 'pl--7', 'pl--8',
                ]
            },
        },
        margin: {
            control: {
                type: 'select',
                options: [
                    'mt--1', 'mt--2', 'mt--3', 'mt--4', 'mt--5', 'mt--6', 'mt--7', 'mt--8',
                    'mb--1', 'mb--2', 'mb--3', 'mb--4', 'mb--5', 'mb--6', 'mb--7', 'mb--8',
                    'mr--1', 'mr--2', 'mr--3', 'mr--4', 'mr--5', 'mr--6', 'mr--7', 'mr--8',
                    'ml--1', 'ml--2', 'ml--3', 'ml--4', 'ml--5', 'ml--6', 'ml--7', 'ml--8',
                ]
            },
        },
        vertical: {
            control: {
                type: 'select',
                options: [
                    'mx--1', 'mx--2', 'mx--3', 'mx--4', 'mx--5', 'mx--6', 'mx--7', 'mx--8',
                ]
            },
        },
        horizontal: {
            control: {
                type: 'select',
                options: [
                    'my--1', 'my--2', 'my--3', 'my--4', 'my--5', 'my--6', 'my--7', 'my--8',
                ]
            },
        },
    },
};

const Template = ({ ...args }) => {
    return createSpacing(args);
};

export const Spacing = Template.bind({});
Spacing.args = {
    margin: '',
    padding: '',
    vertical: '',
    horizontal: '',
};
