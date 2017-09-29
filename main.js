function renderCar() {
  const $img = document.createElement('img')
  $img.setAttribute('id', 'car')
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
      this.location[0] = this.location[0] - this.speed
    }
    else if (this.direction === 'west') {
      this.location[0] = this.location[0] + this.speed
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
let intervalID
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

document.body.onkeyup = (event) => {
  if (event.code === 'Space') {
    intervalID = setInterval(startCar, 1000)
  }
  else if (event.code === 'Digit0') {
    clearInterval(intervalID)
  }
  else if (event.code === 'ArrowUp') {
    $car.turn('north')
  }
  else if (event.code === 'ArrowDown') {
    $car.turn('south')
  }
  else if (event.code === 'ArrowLeft') {
    $car.turn('east')
  }
  else if (event.code === 'ArrowRight') {
    $car.turn('west')
  }
}
