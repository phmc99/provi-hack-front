import { useEffect } from 'react'
import './styles.css'
import quizArray from '../../fakeQuestionArray'

export default function ThemeCard({ currentQuiz, setCurrentQuiz }) {

    function handleChooseTheme(e) {
        const choosenTheme = quizArray.find((theme) => {
            return theme.idQuiz === parseInt(e.target.value)
        })

        if (choosenTheme) {
            setCurrentQuiz(choosenTheme)
        }

    }


    useEffect(() => {
        const themes = document.querySelectorAll('#themes')
        const labelH3 = document.querySelector('#label-h3')

        themes[0].classList.add('agua-theme')
        themes[1].classList.add('fauna-theme')
        themes[2].classList.add('flora-theme')
        themes[3].classList.add('compostagem-theme')
        themes[4].classList.add('agricultura-theme')
        themes[5].classList.add('residuos-theme')
        themes[6].classList.add('energia-theme')
        themes[7].classList.add('clima-theme')
        themes[8].classList.add('meio-ambiente-theme')
        themes[9].classList.add('veganismo-theme')
        themes[10].classList.add('consumo-theme')
        themes[11].classList.add('pecuaria-theme')
        labelH3.classList.add('new-margin')
        return () => {
        }
    }, [])

    return (
        <>
            <div className='themes-container'>
                <h3 className='label-h3' id='label-h3'>#Escolha um tema</h3>
                <button className='common-theme fs-700' id='themes' value='1'
                    onClick={(e) => handleChooseTheme(e)}
                >
                    Água
                </button>
                <button className='common-theme fs-600' id='themes' value='2'
                    onClick={(e) => handleChooseTheme(e)}
                >
                    Fauna
                </button>
                <button className='common-theme fs-500' id='themes' value='3'
                    onClick={(e) => handleChooseTheme(e)}
                >
                    Flora
                </button>
                <button className='common-theme fs-400' id='themes' value='4'
                    onClick={(e) => handleChooseTheme(e)}
                >
                    Compostagem
                </button>
                <button className='common-theme fs-600' id='themes' value='5'
                    onClick={(e) => handleChooseTheme(e)}
                >
                    Agricultura
                </button>
                <button className='common-theme fs-400' id='themes' value='6'
                    onClick={(e) => handleChooseTheme(e)}
                >
                    Resíduos
                </button>
                <button className='common-theme fs-300' id='themes' value='7'
                    onClick={(e) => handleChooseTheme(e)}
                >
                    Energia
                </button>
                <button className='common-theme fs-700' id='themes' value='8'
                    onClick={(e) => handleChooseTheme(e)}
                >
                    Clima
                </button>
                <button className='common-theme fs-300' id='themes' value='9'
                    onClick={(e) => handleChooseTheme(e)}
                >
                    Meio Ambiente
                </button>
                <button className='common-theme fs-200' id='themes' value='10'
                    onClick={(e) => handleChooseTheme(e)}
                >
                    Veganismo
                </button>
                <button className='common-theme fs-400' id='themes' value='11'
                    onClick={(e) => handleChooseTheme(e)}
                >
                    Consumo
                </button>
                <button className='common-theme fs-500' id='themes' value='12'
                    onClick={(e) => handleChooseTheme(e)}
                >
                    Pecuária
                </button>
            </div>
        </>
    )
}