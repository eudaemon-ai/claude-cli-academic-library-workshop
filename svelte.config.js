import adapterNode from '@sveltejs/adapter-node';
import adapterStatic from '@sveltejs/adapter-static';

const isStatic = process.env.PUBLIC_STATIC === 'true';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: isStatic
			? adapterStatic({
					pages: 'build-static',
					assets: 'build-static',
					fallback: '404.html',
					precompress: false
				})
			: adapterNode(),
		paths: {
			// GitHub Pages serves from /repo-name/ — set BASE_PATH in CI accordingly
			base: isStatic ? (process.env.BASE_PATH ?? '') : ''
		}
	}
};

export default config;
