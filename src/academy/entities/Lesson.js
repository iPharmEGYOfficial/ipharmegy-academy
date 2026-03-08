function Lesson(props = {}) {
return {
type: "Lesson",
lessonId: props.lessonId || null,
courseId: props.courseId || null,
title: props.title || "",
duration: props.duration || 0
};
}

module.exports = Lesson;
