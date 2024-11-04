const {normalizeURL,getUrls}=require('./craw.js')
const {test,expect} = require('@jest/globals')
test('normalizeURL strip protocol',()=>{
    const input='https://ddev.com/blog';
    const actual= normalizeURL(input);
    const expected='ddev.com/blog';
    expect(actual).toEqual(expected)
})
test('normalizeURL strip trailing',()=>{
    const input='https://ddev.com/blog/';
    const actual= normalizeURL(input);
    const expected='ddev.com/blog';
    expect(actual).toEqual(expected)
})