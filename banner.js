import React, { useEffect } from 'react'
import './banner.css'
import { apiKey, imageUrl } from '../constants/constants'
import axios from 'axios'

import { useState } from 'react'


function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {

        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&language=en-US`)
            .then((respone) => {
                console.log(respone.data.results[0])
                setMovie(respone.data.results[Math.floor(Math.random() * 20 + 1)])
            }
            )
            .catch((e) => console.log("error:" + e));
    }, [])

    return (
        <div style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})` }}
            className='banner'>
            <div className='content'>
                <h1 className='title' >{movie ? movie.title : ""}</h1>
                <div className='buttons' >
                    <button className='button' >play</button>
                    <button className='button' >my list</button>

                </div>
                <h1 className='discription' >{movie ? movie.overview : ""}</h1>


            </div>
            <div className="fade"></div>

        </div>
    )
}

export default Banner
