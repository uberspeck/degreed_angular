import { SortByPipe } from './sort-by.pipe';
const stuff = [
  {foo: 'C'},
  {foo: 'A'},
  {foo: 'B'}
];
describe('SortByPipe', () => {
  it('create an instance', () => {
    const pipe = new SortByPipe();
    expect(pipe).toBeTruthy();
  });
  it('return original array if missing sortKey', () => {
    const sortedStuff = new SortByPipe().transform(stuff, null);
    expect(sortedStuff[0].foo).toBe('C');
    expect(sortedStuff[1].foo).toBe('A');
    expect(sortedStuff[2].foo).toBe('B');
  });
  it('sort some stuff', () => {
    const sortedStuff = new SortByPipe().transform(stuff, 'foo');
    expect(sortedStuff[0].foo).toBe('A');
    expect(sortedStuff[1].foo).toBe('B');
    expect(sortedStuff[2].foo).toBe('C');
  });
});
