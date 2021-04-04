import { createBreadcrumb } from "./Breadcrumb";

export default {
    title: 'Breadcrumb',
    argTypes: {
        align: {
            control: {
                type: 'inline-radio',
                options: ['is-left', 'is-center', 'is-right']
            }
        },
        separator: {
            control: {
                type: 'inline-radio',
                options: ['has-slash', 'has-arrow', 'has-bullet']
            }
        },
        size: {
            control: {
                type: 'inline-radio',
                options: ['is-small', 'is-medium', 'is-large']
            }
        }
    },
    parameters: {
        docs: {
            page: null
        }
    },
}

const Template = ({ ...args }) => {
    return createBreadcrumb(args);
}

export const Breadcrumb = Template.bind({});
