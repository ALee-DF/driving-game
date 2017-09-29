function renderCar() {
  const $img = document.createElement('img')
  $img.setAttribute('id', 'car')
  $img.setAttribute('class', 'south')
  $img.setAttribute('src', 'pictures/red-car.png')
  $img.setAttribute('alt', 'Red Car')
  return $img
}

function renderBoundary() {
  const $div = document.createElement('div')
  $div.setAttribute('id', 'boundary')
  return $div
}

const carPrototype = {
  turn(newDirection) {
    this.direction = newDirection
  },
  accelerate(newSpeed) {
    this.speed = newSpeed
  },
  move() {
    if (this.direction === 'north') {
      this.location[1] = this.location[1] - this.speed
    }
    else if (this.direction === 'south') {
      this.location[1] = this.location[1] + this.speed
    }
    else if (this.direction === 'east') {
      this.location[0] = this.location[0] + this.speed
    }
    else if (this.direction === 'west') {
      this.location[0] = this.location[0] - this.speed
    }
  }
}

function startCar() {
  $car.move()
  const currentLocation = $car.location
  Object.assign($car.style, {
    left: currentLocation[0] + 'px',
    top: currentLocation[1] + 'px'
  })
}

const $car = renderCar()
let intervalID = []
$car['direction'] = 'south'
$car['speed'] = 10
$car['location'] = [0, 0]
Object.assign($car, carPrototype)
Object.assign($car.style, {
  left: '0px',
  top: '0px'
})

const $boundary = renderBoundary()
$boundary.appendChild($car)
document.body.appendChild($boundary)

document.body.onkeydown = event => {
  if (event.code === 'Space') {
    intervalID.push(setInterval(startCar, 1000))
  }
  else if (event.code === 'KeyZ') {
    clearInterval(intervalID[intervalID.length - 1])
    intervalID.pop()
    console.log(intervalID)
  }
}

document.body.onkeyup = event => {
  if (event.code === 'Digit0') {
    intervalID.forEach(id => clearInterval(id))
    intervalID = []
  }
  else if (event.code === 'ArrowUp') {
    $car.turn('north')
    $car.setAttribute('class', 'north')
  }
  else if (event.code === 'ArrowDown') {
    $car.turn('south')
    $car.setAttribute('class', 'south')
  }
  else if (event.code === 'ArrowLeft') {
    $car.turn('west')
    $car.setAttribute('class', 'west')
  }
  else if (event.code === 'ArrowRight') {
    $car.turn('east')
    $car.setAttribute('class', 'east')
  }
}
