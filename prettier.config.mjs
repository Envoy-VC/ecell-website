/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options} */

const config = {
	plugins: ['prettier-plugin-tailwindcss'],
	trailingComma: 'es5',
	tabWidth: 4,
	useTabs: true,
	singleQuote: true,
	jsxSingleQuote: true,
};

export default config;
