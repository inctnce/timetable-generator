class HSL {
	readonly hue: number;
	readonly saturation: number;
	readonly lightness: number;

	constructor(hue: number, saturation: number, lightness: number) {
		this.validate(hue, saturation, lightness);
		this.hue = hue;
		this.saturation = saturation;
		this.lightness = lightness;
	}

	private validate(hue: number, saturation: number, lightness: number) {
		if (hue > 360) throw new Error("Wrong hue: " + hue);
		if (saturation > 100) throw new Error("Wrong saturation: " + saturation);
		if (lightness > 100) throw new Error("Wrong lightness: " + lightness);
	}

	toHex() {
		let h = this.hue / 360;
		let s = this.saturation / 100;
		let l = this.lightness / 100;
		let r, g, b;
		if (s === 0) {
			r = g = b = l; // achromatic
		} else {
			const hue2rgb = (p: number, q: number, t: number) => {
				if (t < 0) t += 1;
				if (t > 1) t -= 1;
				if (t < 1 / 6) return p + (q - p) * 6 * t;
				if (t < 1 / 2) return q;
				if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
				return p;
			};
			const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
			const p = 2 * l - q;
			r = hue2rgb(p, q, h + 1 / 3);
			g = hue2rgb(p, q, h);
			b = hue2rgb(p, q, h - 1 / 3);
		}
		const __toHex = (x: number) => {
			const hex = Math.round(x * 255).toString(16);
			return hex.length === 1 ? "0" + hex : hex;
		};
		return `#${__toHex(r)}${__toHex(g)}${__toHex(b)}`;
	}
}

export default HSL;
