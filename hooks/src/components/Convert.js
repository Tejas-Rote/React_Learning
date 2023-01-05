import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Convert = ({ language, text }) => {
    const [translated, setTranslated] = useState('')
    const [debouncedText, setDebouncedText] = useState(text);

    // to make timer for each input of 500ms to check if the input text changes or not 
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 500);

        return () => {
            clearTimeout(timerId);
        }
    }, [text])



    // to make request with the new changed text 

    useEffect(() => {

        // console.log("new lang or text");

        const doTranslation = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });
            setTranslated(data.data.translations[0].translatedText);

        };

        doTranslation();

    }, [language, debouncedText])

    return (
        <div>
            <h1 style={{ color: 'red' }}>
                {translated}
            </h1>
        </div>
    )
}

export default Convert