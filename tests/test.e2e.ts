describe('Electron Testing', () => {
	it('should print application title', async () => {
		const { browser } = await import('@wdio/globals');
		console.log('Hello', await browser.getTitle(), 'application!');
	});
});
