const { readFileSync } = require("fs");
function task() {
  const lines: string[] = readFileSync("./lines.txt", "utf-8")
    .toString()
    .split("\n");
  lines
    .filter((line, i) => i % 2 === 0)
    .filter((line, i) => i >= 2)
    .forEach((line) => console.log(line));
}

task();
