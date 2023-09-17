import reverse from '../functions/reverse.js'

test('reverse string', () => {
   expect(reverse('asdf')).toBe('fdsa');
})

test('reverse string', () => {
   expect(reverse('123')).toBe('321');
})

test('reverse string', () => {
   expect(reverse('hello there')).toBe('ereht olleh');
})