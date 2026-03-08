function KnowledgeArticle(props = {}) {
return {
type: "KnowledgeArticle",
articleId: props.articleId || null,
title: props.title || "",
category: props.category || "",
status: props.status || "published"
};
}

module.exports = KnowledgeArticle;
