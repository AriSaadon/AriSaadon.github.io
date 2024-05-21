async function loadJSON(url) {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		return await response.json();
	} catch (error) {
		console.error(`Could not load JSON from ${url}:`, error);
		return null;
	}
}


async function updateContent(language) {
	const content = await loadJSON(`content-${language}.json`);
	if (content) {
		document.querySelectorAll('[data-tag]').forEach(t => {
			
			const square = t.closest('.square');
            const squareId = square.getAttribute('data-square');
            const tag = t.getAttribute('data-tag');
					
			t.querySelectorAll('[data-i18n]').forEach(element => {
				
				const key = element.getAttribute('data-i18n');
				const value = content[squareId][tag][key];
								
				element.innerHTML = value;
			});
		});
	}
}
