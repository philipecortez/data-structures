const Stack = require('./stack');

describe("Stack", () => {
  
  describe("push", () => {
    test("should push the element passed into the storage", () => {
      let testStack = new Stack()
      testStack.push("item1")
      testStack.push("item2")

      expect(testStack.storage()).toEqual(["item1", "item2"])
    })
  })

  describe("pop", () => {
    test("should pop out the first item on the stack", () => {
      let testStack = new Stack()
      testStack.push("item1")
      testStack.push(2)
      testStack.push("item3")
      testStack.push("item4")

      expect(testStack.pop()).toBe("item4")
      expect(testStack.storage()).toEqual(["item1", 2, "item3"])
    })
  })

  describe("peek", () => {
    test("should return the item on the top of the stack", () => {
      let testStack = new Stack()
      testStack.push("item1")
      testStack.push("item2")

      expect(testStack.peek()).toBe("item2")
    })

    test("should not pop the top item from the stack", () => {
      let testStack = new Stack()
      testStack.push("item1")
      testStack.push("item2")

      testStack.peek()
      expect(testStack.storage()).toEqual(["item1", "item2"])
    })
  })

  describe("size", () => {
    test("should return the size of the stack", () => {
      let testStack = new Stack()

      expect(testStack.size()).toBe(0) 
    })
  })
})