function SOPDocument(props = {}) {
return {
type: "SOPDocument",
title: props.title || "",
department: props.department || "",
version: props.version || "1.0",
status: props.status || "draft"
};
}

module.exports = SOPDocument;
