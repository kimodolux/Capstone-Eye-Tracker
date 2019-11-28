import * as tf from '@tensorflow/tfjs';
import '@babel/polyfill';

const model = require('./modelTest');

test('Testing model.js', () => {
    var m = model();
    var a = m.isTraining;
    expect(a).toBe(true);
});

test('Testing model.js', () => {
    var m = model();
    var b = m.isTraining;
    expect(b).toBe(true);
});