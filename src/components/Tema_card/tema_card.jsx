import { useEffect } from 'react'
import './styles.css'

export default function TemaCard() {

    useEffect(() => {
        const themes = document.querySelectorAll('#themes')

        themes[0].classList.add('agua-theme')
        themes[1].classList.add('fauna-theme')
        themes[2].classList.add('flora-theme')
        themes[3].classList.add('compostagem-theme')
        themes[4].classList.add('agricultura-theme')
        themes[5].classList.add('residuos-theme')
        themes[6].classList.add('lixo-organico-theme')
        themes[7].classList.add('clima-theme')
        themes[8].classList.add('meio-ambiente-theme')
        themes[9].classList.add('veganismo-theme')
        themes[10].classList.add('consumo-theme')
        themes[11].classList.add('pecuaria-theme')
        return () => {
        }
    }, [])

    return (
        <>
            <div className='themes-container'>
                <a className='common-theme fs-700' id='themes'>Água</a>
                <a className='common-theme fs-600' id='themes'>Fauna</a>
                <a className='common-theme fs-500' id='themes'>Flora</a>
                <a className='common-theme fs-400' id='themes'>Compostagem</a>
                <a className='common-theme fs-600' id='themes'>Agricultura</a>
                <a className='common-theme fs-400' id='themes'>Resíduos</a>
                <a className='common-theme fs-300' id='themes'>Lixo Orgânico</a>
                <a className='common-theme fs-700' id='themes'>Clima</a>
                <a className='common-theme fs-300' id='themes'>Meio Ambiente</a>
                <a className='common-theme fs-200' id='themes'>Veganismo</a>
                <a className='common-theme fs-400' id='themes'>Consumo</a>
                <a className='common-theme fs-500' id='themes'>Pecuária</a>
            </div>
        </>
    )
}