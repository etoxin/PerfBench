import { parseCSVRow } from "../parseCSVRow/parseCSVRow.ts";
/** Parses RFC 4180-style CSV, including newlines inside quoted fields. */
export function parseCSV(value: string): string[][] {
  if (value === "") return [];
  const rows: string[] = [];
  let row = "", quoted = false;
  for (let index = 0; index < value.length; index++) {
    const character = value[index];
    if (character === '"') {
      row += character;
      if (quoted && value[index + 1] === '"') row += value[++index];
      else quoted = !quoted;
    } else if (!quoted && (character === "\n" || character === "\r")) {
      rows.push(row);
      row = "";
      if (character === "\r" && value[index + 1] === "\n") index++;
    } else row += character;
  }
  if (quoted) throw new SyntaxError("unterminated quoted field");
  if (row !== "" || !/[\r\n]$/.test(value)) rows.push(row);
  return rows.map(parseCSVRow);
}
