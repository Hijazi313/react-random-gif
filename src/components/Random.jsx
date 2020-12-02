import React from 'react'
import useGif from '../hooks/useGif'

export default function Random() {
    const gif = useGif()
    return (
        <div>
            <img src={gif} width="500" alt="Tag Gif" />
        </div>
    )
}
