import React, { useState, useEffect } from 'react'
import { Span } from './Span'

import './Word.css'

export const Word = ({ value, changeWord, maxLength, nextWord, setSlide }) => {

    
    const [word, setWord] = useState(value);
    const [stopTwinkle, setStopTwinkle] = useState(false)
    const [writeWord, setWriteWord] = useState(false)
    const [reverseWord, setReverseWord] = useState('') 

    const stop = () => {
        setWord(e => e.substring(0, e.length - 1))
        setStopTwinkle(true)
    }
    
    useEffect(() => {
        const interval = setTimeout(() => {
            if (!writeWord) {
                if (word.length === 0) {
                    setSlide(true)
                    setTimeout(() => {
                        changeWord(e => {
                            if(e === maxLength){
                                return 0
                            }else{
                                return e + 1
                            }
                        }) 
                        setReverseWord(nextWord.split("").reverse().join(""))                   
                        setWriteWord(true)
                        setSlide(false)
                    }, 2000);
                }else{
                    if (word.length === value.length) {
                        setTimeout(() => {
                            stop()
                        }, 3000)
                    }else{
                        stop()
                    }
                }
            }else{
                if (word.length === value.length) {
                    setWriteWord(false)
                    setStopTwinkle(false)
                }else{
                    setWord(e => e + reverseWord[reverseWord.length -1])
                    setReverseWord(e => e.substring(0, e.length - 1))
                }
            }
        }, !writeWord ? 50 : 200);
        return () => {
            clearTimeout(interval)
        }
    }, [writeWord, word, reverseWord])

    return (
        <>
            <p className={'wordChange'} >{word} <Span stopTwinkle={stopTwinkle} /></p>
        </>
    )
}
