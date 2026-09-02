const ENTITIES: Record<string, string> = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
  "&#x27;": "'",
  "&#x2F;": "/",
};
/** Decodes the common named/numeric entities emitted by escapeHtml. */
export function unescapeHtml(value: string): string {
  return value.replace(
    /&(amp|lt|gt|quot|#39|#x27|#x2F);/gi,
    (entity) => ENTITIES[entity] ?? ENTITIES[entity.toLowerCase()],
  );
}
