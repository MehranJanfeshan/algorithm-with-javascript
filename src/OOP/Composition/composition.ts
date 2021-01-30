class Pushable {
  sendPushMessage() {
    console.log('You file has been converted successfully!')
  }
}

class Converter {
  push

  constructor() {
    this.push = new Pushable()
  }

  convert() {
    console.log('Converting...')
  }
}


const c1 = new Converter()
c1.convert()

// you are accessing the Pushable function without even creating an instance of it!
c1.push.sendPushMessage()
