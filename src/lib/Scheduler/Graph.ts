export class Vertex<T> {
	constructor(
		public data: T,
		public adj: Vertex<T>[] = [],
		public color: number = -1,
		public undesiredColors: number[] = [],
		public forbiddenColors: number[] = []
	) {}
}

export class Graph<T> {
	constructor(protected vertices: Vertex<T>[]) {}
}

export class GraphColoring<T> extends Graph<T> {
	constructor(vertices: Vertex<T>[]) {
		super(vertices);
	}

	greedy = (maxColor?: number) => {
		const sorted = this.vertices.sort((v1, v2) => v2.adj.length - v1.adj.length);
		const maxDegree = maxColor || sorted[0].adj.length;
		const colors = Array.from(Array(maxDegree).keys());

		for (const vertex of this.vertices) {
			const availableColors = this.getAvailableColors(vertex, colors);
			vertex.color = availableColors[0];
		}

		return this.vertices;
	};

	private getAvailableColors = (vertex: Vertex<T>, colors: number[]) => {
		const availableColors = new Set<number>(colors);
		for (const v of vertex.adj) availableColors.delete(v.color);
		for (const forbidden of vertex.forbiddenColors) availableColors.delete(forbidden);

		if (availableColors.size > vertex.undesiredColors.length)
			for (const undesired of vertex.undesiredColors) availableColors.delete(undesired);

		console.log(availableColors);
		console.log(vertex.undesiredColors);
		console.log(vertex.forbiddenColors);
		console.log("================");

		return Array.from(availableColors);
	};
}
