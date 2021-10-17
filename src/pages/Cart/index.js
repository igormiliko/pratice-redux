import React from "react"
import { useSelector, useDispatch } from "react-redux"
import './style.css'

export default function Cart() {
    const cart = useSelector( state => state.cars)
    const dispatch = useDispatch()

    function calcTotal () {
        let total = 0;
        if(cart.length > 0){
            let carsPrices = cart.map( car => car.price)
                                .map(price => price
                                    .split(/[R$-.-,]/)
                                    .filter(n => n !== '' && n !== '00' 
                                )
                                    .join('')).map(n => n * 1)
            let amount = cart.map( car => Number(car.amount))

            total = carsPrices.map((price, ix) => price * amount[ix]).reduce((x,y)=>x+y)
     
        }
       return total
                                
    }

    function handleRemove(id) {
        dispatch({
            type: 'REMOVE_CAR',
            id,
        })
    }

    function handleAdd(car) {
        dispatch({
            type: 'ADD_AMOUNT',
            car,
        })
    }

    function handleMinus(car) {
        dispatch({
            type: 'MINUS_AMOUNT',
            car,
        })
    }

    //console.log(cart)
    return (
        <div className="flex flex-col p-12 w-full absolute top-12 justify-center">
            <h1 className="my-12 text-center text-7xl" >TOTAL R${calcTotal()},00</h1>
           {cart.map(car =>(
            <div key={car.id} className="flex flex-wrap mx-auto h-80 relative items-center bg-gray-500  w-4/6 m-8 rounded-md shadow-2xl" >
                <span onClick={() => handleRemove(car.id)} class="absolute cursor-pointer top-2 right-2 material-icons text-yellow-600 text-4xl">
                    delete
                </span>
                <img className="w-80 h-full rounded-lg" src={car.image} alt={car.model} />
                <div className="p-4 text-lg w-1/3">
                    <div className="text-1xl m-4">{car.marca} {car.model}</div>
                    <div className="text-1xl m-4">Motor: {car.motor}</div>
                    <div className="text-1xl m-4">Ano: {car.ano}</div>
                    <div className="text-4xl m-4">{car.price}</div>
                </div>
                <div id="amount" className="ml-16 text-7xl">
                    <span onClick={() => handleMinus(car)} className="cursor-pointer">-</span>
                     <span className="mx-4 text-gray-700">{car.amount}</span>
                    <span onClick={() => handleAdd(car)} className="cursor-pointer">+</span>
                </div>
            </div>))}
        </div>
    )
}