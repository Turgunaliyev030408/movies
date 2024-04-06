import { NavLink, json } from 'react-router-dom';
import '../styles/Home.css'
import axios from 'axios';
import { useState } from 'react';
// import Increment from '../api/api';
// import axios from 'axios';
// 'x-api-key': 'NXBW3D0-8FHMJWV-JJWSEDV-JTKHPCB'
export const Home = ()=> {
    const [data, setData] = useState('')
    axios.get('https://api.kinopoisk.dev/ ', {
        'headers': {
            ' X-API-KEY': 'NXBW3D0-8FHMJWV-JJWSEDV-JTKHPCB',
        }
    })
    .then(res => {
        console.log(JSON.stringify(res))
        setData(res.data)
    })
    .catch(err => console.log(err))

    return (
        <>
            <header>
                <div className="container">
                    <div className="wrapper">
                        <div className="site-bar">
                            <NavLink to={'/'}><img className='site-logo' src="../../public/svg/video-logo.svg" alt="video-logo" /></NavLink>
                            <div className="bar-links-wrapper">
                                <NavLink to={'/'}>
                                    <img className='bar-logos' src="../../public/svg/Shape.svg" alt="video-logo" />
                                </NavLink>
                                <NavLink to={'/movies'}>
                                    <img className='bar-logos' src="../../public/svg/Movies.svg" alt="video-logo" />
                                </NavLink>
                                <NavLink to={'/tv'}>
                                    <img className='bar-logos' src="../../public/svg/tv.svg" alt="video-logo" />
                                </NavLink>
                                <NavLink to={'/bookmark'}>
                                    <img className='bar-logos' src="../../public/svg/Path.svg" alt="video-logo" />
                                </NavLink>
                            </div>
                        </div>
                        <main className='right-block'>
                            <form className='search-input'>
                                <img src="../../public/svg/search.svg" alt="search-logo" />
                                <input className='search' type="text" placeholder='Search for movies or TV series'/>
                            </form>
                            <h1>Trending</h1>
                            <div className="data-wrapper">
                                <h1>Bu yerda hozircha video yoq!!! endi qoyiladi</h1>
                            </div>
                        </main>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Home;