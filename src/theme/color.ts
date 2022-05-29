import randInt from "../lib/randInt";
import HSL from "./hsl";

const generateColor = () => {
	const hue = randInt(0, 360);
	const background = new HSL(hue, 100, 85).toHex();
	const foreground = new HSL(hue, 100, 70).toHex();

	return [foreground, background];
};

export default generateColor;
