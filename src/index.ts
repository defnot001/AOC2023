import { Day, Util } from './util';
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let parsedDay: number, parsedPart: number;

rl.question('Enter the day: ', (day) => {
  const d = Util.parseIntOrNull(day.trim());

  if (!d) {
    console.error('Invalid input');
    process.exit(1);
  }

  parsedDay = d;

  rl.question('Enter the part: ', (part) => {
    const p = Util.parseIntOrNull(part.trim());

    if (!p || (p !== 1 && p !== 2)) {
      console.error('Invalid input');
      process.exit(1);
    }

    parsedPart = p;

    rl.close();
  });
});

rl.on('close', async () => {
  const day = await import(`./days/day${parsedDay}.ts`);
  const dayInstance = new day.default();
  const functionName = `part${parsedPart}`;

  if (!dayInstance[functionName]) {
    console.error('Invalid input');
    process.exit(1);
  }

  dayInstance[functionName]();
});
