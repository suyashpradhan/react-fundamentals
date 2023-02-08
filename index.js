/** @format */

function render(reactElement, rootElement) {
	const element = document.createElement(reactElement.type);
	element.innerText = reactElement.children;
	for (const key in reactElement.props) {
		const value = reactElement.props[key];
		element.setAttribute(key, value);
	}

	rootElement.appendChild(element);
}

const reactElement = {
	type: 'div',
	props: {
		'data-att': 'div',
		id: '1',
	},
	children: 'Check my portfolio',
};

const reactElement2 = {
	type: 'a',
	props: {
		href: 'https://google.com',
		id: '1',
		_target: 'blank',
	},
	children: 'Check my portfolio',
};

const rootElement = document.querySelector('#root');

render(reactElement2, rootElement);
