import React from 'react'

import './Background.css'

export const Background = ({position, slide}) => {

    const pictures = [
        'https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_960_720.png',
        'https://cdn.pixabay.com/photo/2018/01/29/13/03/internet-3116062_960_720.jpg',
        'https://cdn.pixabay.com/photo/2018/03/19/18/20/tea-time-3240766_960_720.jpg',
        'https://cdn.pixabay.com/photo/2016/01/27/04/32/books-1163695_960_720.jpg',
        'https://cdn-japantimes.com/wp-content/uploads/2020/04/np_file_5951-870x489.jpeg',
        'https://cdn.pixabay.com/photo/2021/08/16/18/00/nintendo-6550911_960_720.jpg'
    
    ]
    const ifSlide = `background${slide ? ' slide' : ''}`


    return (
        <div className="backgroundContainer">
            <img className="background" src={pictures[position]} />
            <img className={ifSlide} src={position === pictures.length -1 ? pictures[0] : pictures[position +1]} />
        </div>
    )
}
