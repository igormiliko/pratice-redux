import { Link } from 'react-router-dom'
import './style.css'

export default function Home() {
    return (
        <div id="home" className="flex flex-wrap content-end w-full h-screen overflow-hidden justify-evenly p-32">
            <div className="absolute top-40 text-8xl text-white-700 transform -rotate-12">Ready For <br/> tomorrow?</div>
                <Link to="/catalog">
                    <button className="text-6xl text-gray-50 bg-yellow-600 px-8 py-4 rounded-xl hover:bg-yellow-500" >Let Buy a car</button>
                </Link>
        </div>
    )
}