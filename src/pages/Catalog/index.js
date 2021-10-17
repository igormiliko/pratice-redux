import React, {useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
//import api from '../../services/api';
import json from '../../server.json';

export default function Catalog() {
    const dispatch = useDispatch()
//    const[cars, setCars] = useState([])
    const cars = json.cars

    /*useEffect(() => {
        async function loadApi(){
            const response = await api.get('cars')
            setCars(response.data)
        }

        loadApi()
    }, [])*/

    function handleAdd(car) {
       dispatch({
            type: 'ADD_CAR',
            car
        })
    }

    return (
        <div className="flex flex-wrap p-12 absolute top-12 content-center justify-evenly">
            {cars.map(car =>(
            <div key={car.id} className="bg-gray-500 m-8 rounded-md shadow-2xl" >
                <img className="w-80 h-64 rounded-lg" src={car.image} alt={car.model} />
                <div className="p-4 text-lg">
                    <div>{car.marca} {car.model}</div>
                    <div>Motor: {car.motor}</div>
                    <div>Ano: {car.ano}</div>
                    <div className="text-center text-4xl m-2">{car.price}</div>
                    <div className="flex justify-center">
                        <button onClick={() =>handleAdd(car)}
                                className="m-2 h-12 p-1 flex flex-wrap w-full hover:bg-yellow-600 bg-yellow-700 rounded-lg">
                            <span className="material-icons mr-2 ml-2 text-4xl">
                             directions_car
                            </span>
                            <div className="mt-2 ml-8">C O M P R A R</div>
                        </button>
                    </div>
                </div>
            </div>))}
        </div>
    )
}