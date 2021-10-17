import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './style.css'

export default function Header(){
    const cartSize = useSelector(state => state.cars)
   // console.log()
    function reduceCartSize(){
        if(cartSize.length > 0)
            return cartSize.map(car => car.amount).reduce((x, y) => x + y)
        else
            return 0

    }
    return(
        <header className="flex fixed z-50 justify-between p-6 h-24 w-full bg-gray-900 items-center text-6xl text-yellow-700">
            <div className="flex items-center w-1/4 justify-center">
                <span class="material-icons mr-2 text-4xl">
                    directions_car
                </span>
                    <Link to="/">
                        <button>Jeep</button>
                    </Link>
                <span className="material-icons ml-2 text-4xl">
                    directions_car
                </span>
            </div>
           
            <Link to="/cart">
            <div className="flex" >
                <span className="text-4xl mr-3">{reduceCartSize()}</span>
                
                <span className="material-icons display-right text-4xl">
                    shopping_cart
                </span>
            </div>
            </Link>
        </header>
    )
}