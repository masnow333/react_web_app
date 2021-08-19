import React, { useState, useEffect } from 'react'
import { Span } from './Span'

import './Word.css'

export const Word = ({ value, changeWord, maxLength, nextWord }) => {
    console.log(nextWord)

    
    const [word, setWord] = useState(value);
    const [stopTwinkle, setStopTwinkle] = useState(true)
    const [writeWord, setWriteWord] = useState(false)
    const [reverseWord, setReverseWord] = useState('') 

    const stop = () => {
        setTimeout(() => {
            setWriteWord(false)
            setStopTwinkle(true)
        }, 3000);
    }
    
    useEffect(() => {
        const interval = setTimeout(() => {
            if (!writeWord) {
                if (word.length === 0) {
                    changeWord(e => {
                        console.log(e, 'position')
                        if(e === maxLength){
                            return 0
                        }else{
                            return e + 1
                        }
                    }) 
                    setReverseWord(nextWord.split("").reverse().join(""))                   
                    setWriteWord(true)
                }else{
                    setWord(e => e.substring(0, e.length - 1))
                }
            }else{
                if (word.length === value.length) {
                    setStopTwinkle(false)
                    stop()
                }else{
                    setWord(e => e + reverseWord[reverseWord.length -1])
                    setReverseWord(e => e.substring(0, e.length - 1))
                }
            }
        }, !writeWord ? 50 : 300);
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
