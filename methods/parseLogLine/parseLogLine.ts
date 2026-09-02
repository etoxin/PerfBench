export interface LogLine {
  timestamp: Date;
  level: string;
  message: string;
}

/** Parses `[ISO timestamp] LEVEL message` log lines. */
export function parseLogLine(value: string): LogLine {
  // TODO complete function
}
