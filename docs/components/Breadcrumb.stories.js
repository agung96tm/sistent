import "../../src/css/sistent.css";

export default {
    title: 'Breadcrumb',
    argTypes: { },
    parameters: {
        docs: {
            page: null
        }
    },
}

const Template = () => {
    return `
        <ul class="breadcrumb">
          <li class="item">
            <a href="#">Home</a>
          </li>
          <li class="item">
            <a href="#">Documentation</a>
          </li>
          <li class="item is-disabled">
            <a href="https://www.google.com">Components</a>
          </li>
          <li class="item">
            <span>Breadcrumb</span>
          </li>
        </ul>
    `
}

export const Default = Template.bind({});
