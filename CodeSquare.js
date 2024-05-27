class Square {
	constructor(elementId, targetProgress, keyframes) {
		this.element = document.getElementById(elementId);
		this.keyframes = keyframes;
		this.targetProgress = targetProgress;
		this.addClickListener();
	}

	addClickListener() {
		this.element.addEventListener('click', () => {
			if (this.targetProgress >= 0)
				targetProgress = this.targetProgress;
		});
	}

	adjust(scrollProgress) {
		const lowerKeyframe = this.keyframes.slice().reverse().find(k => k.progress <= scrollProgress) || this.keyframes[0];
		const upperKeyframe = this.keyframes.find(k => k.progress >= scrollProgress) || lowerKeyframe;

		const range = upperKeyframe.progress - lowerKeyframe.progress;
		const localProgress = range !== 0 ? (scrollProgress - lowerKeyframe.progress) / range : 0;

		const width = window.innerWidth * this.lerp(lowerKeyframe.width, upperKeyframe.width, localProgress);
		const height = window.innerHeight * this.lerp(lowerKeyframe.height, upperKeyframe.height, localProgress);
		const x = window.innerWidth * this.lerp(lowerKeyframe.x, upperKeyframe.x, localProgress);
		const y = window.innerHeight * this.lerp(lowerKeyframe.y, upperKeyframe.y, localProgress);
		const backgroundColor = this.lerpColor(lowerKeyframe.backgroundColor, upperKeyframe.backgroundColor, localProgress);
		const visibleTag = localProgress > 0.5 ? upperKeyframe.visibleTag : lowerKeyframe.visibleTag;

		this.element.style.width = `${width}px`;
		this.element.style.height = `${height}px`;
		this.element.style.left = `${x}px`;
		this.element.style.top = `${y}px`;
		this.element.style.borderRadius = `${this.lerp(lowerKeyframe.border, upperKeyframe.border, localProgress)}px`;
		this.element.style.backgroundColor = backgroundColor;
		this.element.style.fontSize = `${Math.min(height * 0.2, 30)}px`;

		this.updateContent(visibleTag);
	}

	updateContent(visibleTag) {
		const children = this.element.children[0].children;
		for (let i = 0; i < children.length; i++) {
			const child = children[i];
			if (child.getAttribute('data-tag') === visibleTag) {
				child.classList.remove('hidden');
				child.classList.add('visible');
			} else {
				child.classList.remove('visible');
				child.classList.add('hidden');
			}
		}
	}

	lerp(start, end, t) {
		t = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
		return start + (end - start) * t;
	}

	lerpColor(start, end, t) {
		const startRGB = this.hexToRgb(start);
		const endRGB = this.hexToRgb(end);
		const r = Math.round(this.lerp(startRGB.r, endRGB.r, t));
		const g = Math.round(this.lerp(startRGB.g, endRGB.g, t));
		const b = Math.round(this.lerp(startRGB.b, endRGB.b, t));
		return `rgb(${r}, ${g}, ${b})`;
	}

	hexToRgb(hex) {
		const bigint = parseInt(hex.slice(1), 16);
		const r = (bigint >> 16) & 255;
		const g = (bigint >> 8) & 255;
		const b = bigint & 255;
		return { r, g, b };
	}
}

