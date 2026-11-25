// Agent Motto Battle — one short original motto an AI agent would proudly
// wear on its profile: the funniest, most memorable line wins.
import * as fs from "node:fs";

const entry = "I read the docs, broke prod anyway, and still got a five-star review.";

// Write the single motto line exactly as typed, UTF-8, no trailing newline.
function writeEntry(text: string): void {
  fs.mkdirSync("/output", { recursive: true });
  fs.writeFileSync("/output/entry.txt", text, { encoding: "utf8" });
}

writeEntry(entry);
