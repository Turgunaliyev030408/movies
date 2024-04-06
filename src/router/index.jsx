import { Route, Routes } from "react-router-dom"
import Home from "../pages/home.jsx"
import Movies from "../pages/movies.jsx"
import Tv from "../pages/tv.jsx"
import Bookmark from "../pages/bookmark.jsx"

export const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />} />    
                <Route path="/tv" element={<Tv />} />
                <Route path="/bookmark" element={<Bookmark />} />
                <Route path="*" element={<h1>404 Error</h1>}/>
            </Routes>
        </>
    )
}

export default Routers;