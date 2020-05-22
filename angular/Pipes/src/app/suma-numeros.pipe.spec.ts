import { SumaNumerosPipe } from './suma-numeros.pipe';

describe('SumaNumerosPipe', () => {
  it('create an instance', () => {
    const pipe = new SumaNumerosPipe();
    expect(pipe).toBeTruthy();
  });
});
