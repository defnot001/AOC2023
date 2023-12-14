import { Day, Util } from '../util';

export default class Day1 implements Day {
  private static readonly NUMBERS: string[] = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  public part1(): void {
    this.run(false);
  }

  public part2(): void {
    this.run(true);
  }

  private async run(part2: boolean): Promise<void> {
    let total = 0;

    const inputLines = await Util.readInputLines();

    for (const line of inputLines) {
      firstNum: for (let i = 0; i < line.length; i++) {
        const c = line.charAt(i);

        if (c >= '0' && c <= '9') {
          total += 10 * parseInt(c, 10);
          break;
        }

        if (part2) {
          for (let n = 1; n <= 9; n++) {
            if (line.startsWith(Day1.NUMBERS[n - 1], i)) {
              total += 10 * n;
              break firstNum;
            }
          }
        }
      }

      lastNum: for (let i = line.length - 1; i >= 0; i--) {
        const c = line.charAt(i);

        if (c >= '0' && c <= '9') {
          total += parseInt(c, 10);
          break;
        }

        if (part2) {
          for (let n = 1; n <= 9; n++) {
            if (
              line.startsWith(
                Day1.NUMBERS[n - 1],
                i - Day1.NUMBERS[n - 1].length + 1,
              )
            ) {
              total += n;
              break lastNum;
            }
          }
        }
      }
    }

    console.log(total);
  }
}
