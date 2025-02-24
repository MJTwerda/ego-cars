export function stripHtmlTags(htmlString: string): string {
  return htmlString.replace(/<[^>]*>/g, "").trim();
};
