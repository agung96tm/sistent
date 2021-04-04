import '../../src/css/sistent.css';


export const createBreadcrumb = ({ align, size, separator }) => {
    const breadcrumb = document.createElement('div');

    breadcrumb.className = ['breadcrumb', align, size, separator].join(' ');
    breadcrumb.appendChild(
        createBreadcrumbItem({
            text: 'Home',
            href: 'https://www.google.com',
        })
    );
    breadcrumb.appendChild(
        createBreadcrumbItem({
            text: 'News',
            href: '/',
            target: '_blank',
        })
    );
    breadcrumb.appendChild(
        createBreadcrumbItem({
            text: 'Disabled Item',
            href: '/',
            target: '_blank',
            isDisabled: true,
        })
    );
    breadcrumb.appendChild(
        createBreadcrumbItem({
            text: 'Black Lives Matter',
        })
    );

    return breadcrumb;
};

export const createBreadcrumbItem = ({ text, href, target, isDisabled = false }) => {
    const breadcrumbItem = document.createElement('li');
    breadcrumbItem.className = [
        'item',
        ...isDisabled ? ['is-disabled']: [],
    ].join(' ');

    const anchor = document.createElement('a');
    anchor.innerText = text;
    if (href) { anchor.setAttribute('href', href); }
    if (target) { anchor.setAttribute('_target', target); }

    breadcrumbItem.appendChild(anchor);
    return breadcrumbItem;
};
