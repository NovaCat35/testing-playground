import analyze from '../functions/analyze.js'

let array1 = [1,8,3,4,2,6];
let object1 = {
   average: 4,
   min: 1,
   max: 8,
   length: 6
};
test('happy trail analyze', () => {
   expect(analyze(array1)).toEqual(object1)
})