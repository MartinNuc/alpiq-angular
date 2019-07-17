import { WordsCountPipe } from './words-count.pipe';

describe('WordsCountPipe', () => {
  const pipe = new WordsCountPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return zero for empty string', () => {
    expect(pipe.transform('')).toBe(0);
  });

  it('should count one word', () => {
    expect(pipe.transform('hello')).toBe(1);
  });

  it('should count two words', () => {
    expect(pipe.transform('hello kitty')).toBe(2);
  });
});
