const add = require('../my-test')

test('two plus two is four', () => {
    expect(add(2,2)).toBe(4);
});

test('two plus two is not three', () => {
    expect(add(2,2)).not.toBe(3);
});

test('there is no I in team', () => {
    const testValue = 'team'
    expect(testValue).not.toMatch(/I/);
});
  
test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
});

const shoppingList = [
    'kleenex',
    'trash bags',
    'beer',
];
  
test('the shopping list has beer on it', () => {
    expect(shoppingList).toContain('beer');
});

test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    const value = {one: 1, two: 2};
    expect(data).toEqual(value);
});

test('object containing', () => {
    const data = {one: 1, two: 2};
    const value = {one: 1};
    expect(data).toEqual(expect.objectContaining(value));
});

function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
    expect(compileAndroidCode).toThrow();
    expect(compileAndroidCode).toThrow(Error);
  
    // You can also use the exact error message or a regexp
    expect(compileAndroidCode).toThrow('you are using the wrong JDK');
    expect(compileAndroidCode).toThrow(/JDK/);
});


test('truthliness1', () => {
    const data = null;
    expect(data).toBeNull();
});

test('truthliness2', () => {
    const data = undefined;
    expect(data).toBeUndefined();
});

test('truthliness3', () => {
    const data = true;
    expect(data).toBeTruthy();
});

test('truthliness', () => {
    const data = 6;
    expect(data).toBeGreaterThan(5);
});

test('toBeCloseTo', () => {
    const data = 0.1+0.2;
    expect(data).toBeCloseTo(0.3);
});





