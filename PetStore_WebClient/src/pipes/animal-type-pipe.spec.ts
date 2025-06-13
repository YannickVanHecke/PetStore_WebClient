import { AnimalTypePipe } from '../app/animal-type-pipe';

describe('AnimalTypePipe', () => {
  it('create an instance', () => {
    const pipe = new AnimalTypePipe();
    expect(pipe).toBeTruthy();
  });
});
