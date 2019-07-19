class Stack {
  constructor() {
    this.count = 0

    let _storage = []
    this.setStorage = (storage) => { _storage = storage }
    this.storage = () => (_storage)
  }

  push(item) {
    this.setStorage([...this.storage(), item])
  } 

  pop() {
    const [...tmpStorage] = this.storage()
    const[item, ...newStorage] = tmpStorage.reverse()
    this.setStorage(newStorage.reverse())

    return item
  }

  peek() {
    return this.storage()[this.size() -1]
  }

  size() {
    return this.storage().length
  }
}

module.exports = Stack