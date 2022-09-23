const myTest = require('./functions')
//writing the test for return two
test("Return Two Test", () => {

    expect(myTest.returnTwo()).toBe(2)
})
//writing the test for greetings 
test("Greeting Test", () => {

    expect(myTest.greeting('Bryton')).toBe("Hello Bryton.")
})
//writing test for add 
test("Adding Test", () => {

    expect(myTest.add(13, 17)).toBe(30)
})