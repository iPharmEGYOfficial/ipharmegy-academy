function DocumentationPage(props = {}) {
return {
type: "DocumentationPage",
pageId: props.pageId || null,
title: props.title || "",
module: props.module || ""
};
}

module.exports = DocumentationPage;
