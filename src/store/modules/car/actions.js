export function addCar(car) {
    return {
        type: 'ADD_CAR',
        car
    }
}

export function removeCar(id) {
    return {
        type: 'REMOVE_CAR',
        id
    }
}