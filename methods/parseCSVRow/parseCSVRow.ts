/** Parses one RFC 4180-style CSV row. */
export function parseCSVRow(row: string): string[] {
  const fields: string[] = [];
  let field = "", quoted = false;
  for (let index = 0; index < row.length; index++) {
    const character = row[index];
    if (quoted) {
      if (character === '"' && row[index + 1] === '"') {
        field += '"';
        index++;
      } else if (character === '"') quoted = false;
      else field += character;
    } else if (character === ",") {
      fields.push(field);
      field = "";
    } else if (character === '"' && field === "") quoted = true;
    else field += character;
  }
  if (quoted) throw new SyntaxError("unterminated quoted field");
  fields.push(field);
  return fields;
}
