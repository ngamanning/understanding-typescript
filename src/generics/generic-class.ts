// Generic class 

class DataStorage <T> {
    items: T [] = []
    addItem (item :T ) {
        this.items.push(item)
    }
    removeItem (item : T) {
        this.items.splice(this.items.indexOf(item),1)
    }

    getItems () {
        return this.items
    }
}

const numStore = new DataStorage<number>()
numStore.addItem(10)
numStore.addItem(15)
console.log(numStore.getItems())
numStore.removeItem(10)
console.log(numStore.getItems())

const strStore = new DataStorage<string>() 
strStore.addItem('Max')
strStore.addItem('Klaus')
console.log(strStore.getItems())
strStore.removeItem('Max')
console.log(strStore.getItems())