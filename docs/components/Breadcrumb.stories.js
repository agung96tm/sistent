import "../../src/css/sistent.css";

export default {
    title: 'Breadcrumb',
    argTypes: { }
}

const Template = ({...args}) => {
    return `
        <ul class="breadcrumb">
          <li class="breadcrumb__item">
            <a href="#">Home</a>
          </li>
          <li class="breadcrumb__item">
            <a href="#">Documentation</a>
          </li>
          <li class="breadcrumb__item">
            <a href="#">Components</a>
          </li>
          <li class="breadcrumb__item">
            <span>Breadcrumb</span>
          </li>
        </ul>
    `
}

export const Default = Template.bind({});
