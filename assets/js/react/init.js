let containers = [];

export function unmountReactElement(container): Promise
{
    return new Promise((resolve, reject) => {
        import('react-dom').then((ReactDOM) => {
            const result = ReactDOM.default.unmountComponentAtNode(container);
            resolve(result);
        }).catch((err) => {
            console.error(err);
            reject(err);
        })

    });
}

export function initReactElement(container, component, props)
{
    Promise.all([import('react'), import('react-dom')])
        .then(([React, ReactDOM]) => {
            let element = React.default.createElement(component, props);
            ReactDOM.default.render(element, container);
        })
        .catch((err) => {
            console.error(err);
        })
    ;
}

function initContainer(container, resolveComponent)
{
    if(containers.indexOf(container) > -1) return;
    if(!container.hasAttribute('data-react')) return;
    let name = container.getAttribute('data-react');
    let props = container.hasAttribute('data-react-props') ? JSON.parse(container.getAttribute('data-react-props')) : {};

    Promise.all([import('react'), import('react-dom'), resolveComponent(name)])
        .then(([React, ReactDOM, component]) => {
            let element = React.default.createElement(component.default, props);
            ReactDOM.default.render(element, container);
            containers.push(container);
        })
        .catch((err) => {
            console.error(err);
        })
    ;

}

export function initAll(resolveComponent)
{
    let containers = Array.from(document.querySelectorAll('[data-react]'));
    containers.forEach((container) => {
        initContainer(container, resolveComponent);
    });
}