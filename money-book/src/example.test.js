test('test equal', ()=> {
    expect(2+2).toBe(4)
})

test('test not equal', ()=>{
    expect(2+2).not.toBe(5)
})

test('test to be true or false', ()=>{
    expect(1).toBeTruthy();
    expect(0).toBeFalsy()
})

test('test number', () => {
    expect(4).toBeGreaterThan(3)
    expect(4).toBeLessThan(5)
})

test('test object', () => {
    // 比较对象是否相同 因为每个对象存储地址不同，所以肯定不同
    // expect({ name: 'viking', age: 30 }).toBe({ name: 'viking' })
    //比较对象下面的值
    expect({ name: "viking", age: 30 }).toEqual({ name: "viking", age: 30 });
})