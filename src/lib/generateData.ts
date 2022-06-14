import Data from "../models/Data";
import DisciplineColored from "../models/DisciplineColored";
import Room from "../models/Room";
import Tutor from "../models/Tutor";
import generateColor from "../theme/color";
import choice from "./choice";

const generateData = (streamCount = 1, lessonCount = 18, groupCount = 3, lessonsPerTutor = 2): Data => {
	const roomCount = streamCount * groupCount * 2;
	const disciplines: DisciplineColored[] = [];

	for (let i = 0; i < streamCount; i++) {
		const groups: string[] = [];
		for (let i = 0; i < groupCount; i++) groups.push("G-" + (Math.random() * 10000).toFixed(4));

		const tutors: Tutor[] = [];
		for (let i = 0; i < lessonCount / lessonsPerTutor; i++)
			tutors.push({
				name: "T-" + (Math.random() * 10000).toFixed(4),
				freeTime: [],
			});

		for (let i = 0; i < lessonCount / 2; i++) {
			const type = i % 2 === 0 ? "lecture" : "workshop";
			let disciplineGroups: string[] = [];
			if (type === "workshop") disciplineGroups = [choice(groups)];
			else disciplineGroups = groups.sort(() => 0.5 - Math.random()).slice(0, 3);

			const [foreground, background] = generateColor();
			disciplines.push({
				name: "D-" + (Math.random() * 10000).toFixed(4),
				type: type,
				recurrence: 2,
				foreground,
				background,
				groups: disciplineGroups,
				tutor: choice(tutors),
			});
		}
	}

	const rooms: Room[] = [];
	for (let i = 0; i < roomCount; i++) {
		rooms.push({
			name: "R-" + (Math.random() * 10000).toFixed(4),
			type: i % 2 === 0 ? "lecture" : "workshop",
			equipment: [],
		});
	}

	return {
		days: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница"],
		slots: ["09:30-11:05", "11:15-12:50", "13:40-15:15", "15:25-17:00"],
		recurrence: 1,
		disciplines,
		rooms: rooms,
	};
};

export default generateData;
