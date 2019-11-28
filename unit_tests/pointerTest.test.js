const movePointer = require('./pointerTest');

test('test formatting pointer coordinates X', () => {
    var a = movePointer(3, 5).x;
    //var b = movePointer(3, 5).y;
    expect(a).toBe('3px');
});

test('test formatting pointer coordinates Y', () => {
    //var a = movePointer(3, 5).x;
    var b = movePointer(3, 5).y;
    expect(b).toBe('5px');
});

test('test formatting pointer coordinates Y', () => {
    //var a = movePointer(3, 5).x;
    var b = movePointer(99, 123.13).y;
    expect(b).toBe('123.13px');
});