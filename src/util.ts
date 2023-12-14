export abstract class Util {
  public static parseIntOrNull(input: string): number | null {
    const parsed = parseInt(input, 10);
    return isNaN(parsed) ? null : parsed;
  }

  public static async readInputLines(): Promise<string[]> {
    const input = await Bun.file('src/input.txt').text();
    return input.split('\n');
  }
}

export interface Day {
  part1(): void;
  part2(): void;
}
