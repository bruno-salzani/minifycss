import CleanCSS from 'clean-css';

export const minify = (cssContent) => {
	// CleanCSS options for browser usage
	// We disable advanced optimizations that might be heavy or risky in browser
	const options = {
		returnPromise: false,
		sourceMap: false,
	};

	const output = new CleanCSS(options).minify(cssContent);

	if (output.errors.length > 0) {
		return { error: output.errors.join(', ') };
	} else {
		return {
			styles: output.styles,
			stats: output.stats,
		};
	}
};

// Check if we are in a worker environment before adding event listener
if (typeof self !== 'undefined' && typeof self.addEventListener === 'function') {
    self.addEventListener('message', (e) => {
        try {
            const result = minify(e.data);
            self.postMessage(result);
        } catch (error) {
            self.postMessage({ error: error.message || 'Unknown error during minification' });
        }
    });
}
