/**
 * Listens for the app launching, then creates the window.
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 */
 chrome.app.runtime.onLaunched.addListener(function(launchData) {
	chrome.app.window.create(
    'index.html',
		{
      frame: "none",
			id: 'mainWindow',
			bounds: {width: Math.round(window.screen.width), height: Math.round(window.screen.height)}
		}
	);
});
