import Data from "../../models/Data";
import Lesson from "../../models/Lesson";
import Slot from "../../models/Slot";
import choice from "../choice";
import { GraphColoring, Vertex } from "./Graph";

class Scheduler extends GraphColoring<Lesson> {
	protected slots: Slot[];

	constructor(public data: Data) {
		super([]);
		this.slots = this.buildSlots();
		this.vertices = [];
	}

	private buildSlots = () => {
		const slots: Slot[] = [];
		for (const day of this.data.days) for (const slot of this.data.slots) slots.push({ day, time: slot });
		return slots;
	};

	schedule = (): Lesson[] => {
		const lessons = this.getLessonsFromDisciplines();
		this.vertices = this.buildVertices(lessons);
		this.buildEdges();

		return this.greedy()
			.sort((v1, v2) => v1.color - v2.color)
			.map((v) => ({
				...v.data,
				day: this.slots[v.color].day,
				time: this.slots[v.color].time,
			}));
	};

	private getLessonsFromDisciplines = () => {
		const lessons: Lesson[] = [];

		for (let k = 0; k < this.data.recurrence; k++) {
			for (const { name, recurrence, type, tutor, groups, foreground, background } of this.data.disciplines)
				for (let i = 0; i < recurrence; i++)
					lessons.push({
						name,
						type,
						tutor,
						groups,
						foreground,
						background,
						day: "",
						time: "",
						room: choice(this.data.rooms.filter((room) => room.type === type)),
					});
		}

		return lessons;
	};

	private buildVertices = (lessons: Lesson[]) => {
		return lessons.map((lesson) => new Vertex<Lesson>(lesson));
	};

	private buildEdges = () => {
		for (let i = 0; i < this.vertices.length; i++) {
			for (let j = i + 1; j < this.vertices.length; j++) {
				const isSameTutor = this.vertices[i].data.tutor === this.vertices[j].data.tutor;
				const isSameDiscipline = this.vertices[i].data.name === this.vertices[j].data.name;
				const isSameRoom = this.vertices[i].data.room.name === this.vertices[j].data.room.name;
				const isSameGroup =
					this.vertices[i].data.groups.filter((group) => this.vertices[j].data.groups.includes(group))?.length > 0;
				if (isSameTutor || isSameDiscipline || isSameGroup || isSameRoom) {
					this.vertices[i].adj.push(this.vertices[j]);
					this.vertices[j].adj.push(this.vertices[i]);
				}
			}
		}
		return this.vertices;
	};
}

export default Scheduler;
