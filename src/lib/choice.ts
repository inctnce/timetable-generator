const choice = <T>(array: T[]): T => array[Math.floor(Math.random() * array.length)];

export default choice;
