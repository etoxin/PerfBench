export interface LogLine {
  timestamp: Date;
  level: string;
  message: string;
}
/** Parses `[ISO timestamp] LEVEL message` log lines. */
export function parseLogLine(value: string): LogLine {
  const match = /^\[([^\]]+)\]\s+([A-Za-z]+)\s+(.*)$/.exec(value);
  if (!match) throw new SyntaxError("invalid log line");
  const timestamp = new Date(match[1]);
  if (Number.isNaN(timestamp.getTime())) {
    throw new SyntaxError("invalid log timestamp");
  }
  return { timestamp, level: match[2].toUpperCase(), message: match[3] };
}
