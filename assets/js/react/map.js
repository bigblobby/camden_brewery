/**
 * React components registered here can be added to a page in Twig
 *
 * Example:
 *
 *     {{ react_component('example', {'title': 'Hello world!'}) }}
 */

export function resolveComponent(name: string): Promise
{
    if(name === 'Dummy') return import('./component/Dummy'); // Sample code

    throw 'Could not resolve React component "' + name + '"';
}