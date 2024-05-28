function initializeSquares(){
	
	const color = '#1F1F1F';

	const width = window.innerWidth;
	const height = window.innerHeight;

	return width >= 1500 ? 
	[
		new Square('squareA', -1, [
			{ progress: 0.0, x: 0.235, y: 0.13, width: 0.13, height: 0.65, border: 0, backgroundColor: color, visibleTag: 'detail' },
			{ progress: 1.0, x: 0.235, y: 0.13, width: 0.13, height: 0.65, border: 0, backgroundColor: color, visibleTag: 'detail' },
		]),
		new Square('squareB', 0.16, [
			{ progress: 0.0, x: 0.425, y: 0.3, width: 0.425, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 0.16, x: 0.425, y: 0.29, width: 0.425, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'detail' },
			{ progress: 0.33, x: 0.425, y: 0.125, width: 0.425, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 0.83, x: 0.425, y: 0.125, width: 0.425, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 1.0, x: 0.425, y: 0.3, width: 0.425, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
		]),
		new Square('squareC', 0.33, [
			{ progress: 0.0, x: 0.425, y: 0.4, width: 0.425, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 0.16, x: 0.425, y: 0.65, width: 0.425, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 0.33, x: 0.425, y: 0.24, width: 0.425, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'detail' },
			{ progress: 0.5, x: 0.425, y: 0.2, width: 0.425, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 0.83, x: 0.425, y: 0.2, width: 0.425, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 1.0, x: 0.425, y: 0.4, width: 0.425, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
		]),
		new Square('squareD', 0.5, [
			{ progress: 0.0, x: 0.425, y: 0.5, width: 0.425, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 0.16, x: 0.425, y: 0.725, width: 0.425, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 0.33, x: 0.425, y: 0.725, width: 0.425, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 0.5, x: 0.425, y: 0.29, width: 0.425, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'detail' },
			{ progress: 0.66, x: 0.425, y: 0.275, width: 0.425, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 0.83, x: 0.425, y: 0.275, width: 0.425, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 1.0, x: 0.425, y: 0.5, width: 0.425, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
		]),
		new Square('squareE', 0.66, [
			{ progress: 0.0, x: 0.425, y: 0.6, width: 0.425, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 0.16, x: 0.425, y: 0.8, width: 0.425, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 0.33, x: 0.425, y: 0.8, width: 0.425, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 0.5, x: 0.425, y: 0.8, width: 0.425, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 0.66, x: 0.425, y: 0.38, width: 0.425, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'detail' },
			{ progress: 0.83, x: 0.425, y: 0.35, width: 0.425, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 1.0, x: 0.425, y: 0.6, width: 0.425, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
		]),
	] 
	: (width / height) > 0.75 ?	
	[
		new Square('squareA', -1, [
			{ progress: 0.0, x: 0.01, y: 0.1, width: 0.24, height: 0.65, border: 0, backgroundColor: color, visibleTag: 'detail' },
			{ progress: 1.0, x: 0.01, y: 0.1, width: 0.24, height: 0.65, border: 0, backgroundColor: color, visibleTag: 'detail' },
		]),
		new Square('squareB', 0.16, [
			{ progress: 0.0, x: 0.27, y: 0.3, width: 0.72, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 0.16, x: 0.27, y: 0.29, width: 0.72, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'detail' },
			{ progress: 0.33, x: 0.27, y: 0.125, width: 0.72, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 0.83, x: 0.27, y: 0.125, width: 0.72, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 1.0, x: 0.27, y: 0.3, width: 0.72, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
		]),
		new Square('squareC', 0.33, [
			{ progress: 0.0, x: 0.27, y: 0.4, width: 0.72, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 0.16, x: 0.27, y: 0.65, width: 0.72, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 0.33, x: 0.27, y: 0.24, width: 0.72, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'detail' },
			{ progress: 0.5, x: 0.27, y: 0.2, width: 0.72, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 0.83, x: 0.27, y: 0.2, width: 0.72, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 1.0, x: 0.27, y: 0.4, width: 0.72, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
		]),
		new Square('squareD', 0.5, [
			{ progress: 0.0, x: 0.27, y: 0.5, width: 0.72, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 0.16, x: 0.27, y: 0.725, width: 0.72, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 0.33, x: 0.27, y: 0.725, width: 0.72, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 0.5, x: 0.27, y: 0.29, width: 0.72, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'detail' },
			{ progress: 0.66, x: 0.27, y: 0.275, width: 0.72, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 0.83, x: 0.27, y: 0.275, width: 0.72, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 1.0, x: 0.27, y: 0.5, width: 0.72, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
		]),
		new Square('squareE', 0.66, [
			{ progress: 0.0, x: 0.27, y: 0.6, width: 0.72, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 0.16, x: 0.27, y: 0.8, width: 0.72, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 0.33, x: 0.27, y: 0.8, width: 0.72, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 0.5, x: 0.27, y: 0.8, width: 0.72, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 0.66, x: 0.27, y: 0.38, width: 0.72, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'detail' },
			{ progress: 0.83, x: 0.27, y: 0.35, width: 0.72, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 1.0, x: 0.27, y: 0.6, width: 0.72, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
		]),
	]
	:
	[
		new Square('squareA', -1, [
			{ progress: 0.0, x: 0.02, y: 0.01, width: 0.96, height: 0.24, border: 0, backgroundColor: color, visibleTag: 'detail' },
			{ progress: 1.0, x: 0.02, y: 0.01, width: 0.96, height: 0.24, border: 0, backgroundColor: color, visibleTag: 'detail' },
		]),
		new Square('squareB', 0.16, [
			{ progress: 0.0, x: 0.04, y: 0.25, width: 0.94, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 0.16, x: 0.04, y: 0.3, width: 0.94, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'detail' },
			{ progress: 0.33, x: 0.04, y: 0.2, width: 0.94, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 0.83, x: 0.04, y: 0.2, width: 0.94, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 1.0, x: 0.04, y: 0.25, width: 0.94, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
		]),
		new Square('squareC', 0.33, [
			{ progress: 0.0, x: 0.04, y: 0.325, width: 0.94, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 0.16, x: 0.04, y: 0.75, width: 0.94, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 0.33, x: 0.04, y: 0.34, width: 0.94, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'detail' },
			{ progress: 0.5, x: 0.04, y: 0.25, width: 0.94, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 0.83, x: 0.04, y: 0.25, width: 0.94, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 1.0, x: 0.04, y: 0.325, width: 0.94, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
		]),
		new Square('squareD', 0.5, [
			{ progress: 0.0, x: 0.04, y: 0.4, width: 0.94, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 0.16, x: 0.04, y: 0.8, width: 0.94, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 0.33, x: 0.04, y: 0.8, width: 0.94, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 0.5, x: 0.04, y: 0.33, width: 0.94, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'detail' },
			{ progress: 0.66, x: 0.04, y: 0.3, width: 0.94, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 0.83, x: 0.04, y: 0.3, width: 0.94, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 1.0, x: 0.04, y: 0.4, width: 0.94, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
		]),
		new Square('squareE', 0.66, [
			{ progress: 0.0, x: 0.04, y: 0.475, width: 0.94, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 0.16, x: 0.04, y: 0.85, width: 0.94, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 0.33, x: 0.04, y: 0.85, width: 0.94, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 0.5, x: 0.04, y: 0.85, width: 0.94, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 0.66, x: 0.04, y: 0.4, width: 0.94, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'detail' },
			{ progress: 0.83, x: 0.04, y: 0.35, width: 0.94, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
			{ progress: 1.0, x: 0.04, y: 0.475, width: 0.94, height: 0.05, border: 0, backgroundColor: color, visibleTag: 'summary' },
		]),
	];
}