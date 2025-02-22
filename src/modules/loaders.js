import { App } from './app';

const Loaders = (function () {
	const Loaders = {};

	function init (LoaderClass) {
		Loaders[LoaderClass.name] = new LoaderClass(App.manager);
	}

	async function load (options) {
		const item = await Loaders[options.loader].loadAsync(options.url);

		return item;
	}

	return {

		init,
		load

	};
})(App);

export { Loaders };
