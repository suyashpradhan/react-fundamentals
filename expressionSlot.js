/** @format */

// Expression to be compiled
const cars = ['bmw', 'audi', 'porsche'];
const element = `Cars List: ${cars.length}`;

// React render function
function render(reactElement, rootElement) {
	const element = document.createElement(reactElement.type);
	element.innerText = reactElement.children;
	for (const key in reactElement.props) {
		const value = reactElement.props[key];
		element.setAttribute(key, value);
	}

	rootElement.appendChild(element);
}

// React Element
const reactElement = {
	type: 'div',
	children: 'Cars List:',
};

const rootElement = document.querySelector('#root');

render(reactElement, rootElement);
