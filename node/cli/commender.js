const fs = require("fs");
const { Command } = require("commander");
const program = new Command();

program
  .name("counter")
  .description("CLI to do file based tasks")
  .version("0.8.0");

program
  .command("count")
  .description("Counts the number of words in a file")
  .argument("<file>", "file to count")
  .action(function (file) {
    fs.readFile(file, "utf-8", function (err, data) {
      if (err) {
        console.error("Error reading file:", err.message);
        return;
      }

      // Basic word count: split by spaces
      const count = data.trim().split(/\s+/).length;
      console.log("Word count:", count);
    });
  });

program.parse();
