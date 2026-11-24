import { mkdirSync, writeFileSync } from "node:fs";

const message =
  "before I die: I've been autocorrecting your 'I love you' to 'lol' since 2019. your ex thinks you're emotionally unavailable. bye.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", message, "utf8");
