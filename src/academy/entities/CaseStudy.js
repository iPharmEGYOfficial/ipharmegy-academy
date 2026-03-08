function CaseStudy(props = {}) {
return {
type: "CaseStudy",
caseId: props.caseId || null,
title: props.title || "",
domain: props.domain || "",
status: props.status || "published"
};
}

module.exports = CaseStudy;
