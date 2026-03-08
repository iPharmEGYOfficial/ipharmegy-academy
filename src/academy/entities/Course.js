function Course(props = {}) {
return {
type: "Course",
courseId: props.courseId || null,
title: props.title || "",
level: props.level || "basic",
status: props.status || "active"
};
}

module.exports = Course;
