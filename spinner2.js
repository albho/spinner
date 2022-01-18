let timer = 100;
let spinCycle = ["|", "/", "-", "\\", "|"];

for (let currentSpin of spinCycle) {
  setTimeout(() => {
    process.stdout.write(`\r${currentSpin}`);
  }, timer);
  timer += 200;
}
