import React, { useEffect, useState } from 'react'
import "./Rowpost.css"
import Youtube from 'react-youtube'
import { imageUrl, apiKey } from '../constants/constants'
import axios from 'axios'
function Rowpost(props) {
    const [row, setrow] = useState([])
    const [urlid, seturlid] = useState('')
    useEffect(() => {
        axios.get(props.url).then((response) => {
            console.log(response.data.results);
            setrow(response.data.results);
            // }).catch((e) => {
            //     alert('net error')
        })

    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    const handleMovie = (id) => {
        console.log(id)
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`).then(response => {
            console.log(response.data);
            if (response.data.results.length !== 0) {
                seturlid(response.data.results[0])
            }

        })
    };


    return (

        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {row.map((obj) =>
                    <img onClick={() => handleMovie(obj.id)} className={props.isSmall ? 'smallposter' : 'poster'} src={imageUrl + obj.poster_path} />

                )

                }


            </div>
            {urlid && <Youtube opts={opts} videoId={urlid.key} />}
        </div>
    )
}

export default Rowpost
