const fs = require("fs");
const path = require("path");

let writeStream = fs.createWriteStream(path.join(__dirname, "text.txt"));
const { stdout, stderr, stdin, exit } = process;

stdout.write("Введите свой текст, для записи в файл:\n");
stdin.on("data", (input) => {
  if (input.toString().trim() === "exit") {
    exitCase();
  }
  writeStream.write(input);
});

process.on("SIGINT", exitCase);
function exitCase() {
    process.on('exit', () => stdout.write('Удачи в изучении Node.js!'));
    writeStream.pipe(process.stdout);
    exit();
  
}



