import getListStudents from "./0-get_list_students.js";
import getStudentsByLocation from "./2-get_students_by_loc.js";

export default function getStudentIdsSum(students) {
	return students.reduce((sum, student) => sum + student.id, 0);
}
