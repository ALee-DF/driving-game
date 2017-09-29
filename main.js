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

const $car = renderCar()
const $boundary = renderBoundary()
$boundary.appendChild($car)
document.body.appendChild($boundary)
