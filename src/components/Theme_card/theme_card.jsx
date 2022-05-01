import { useEffect } from 'react'
import './styles.css'

export default function ThemeCard() {

    useEffect(() => {
        const themes = document.querySelectorAll('#themes')
        const labelH3 = document.querySelector('#label-h3')

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
        labelH3.classList.add('new-margin')
        return () => {
        }
    }, [])

    return (
        <>
            <div className='themes-container'>
                <h3 className='label-h3' id='label-h3'>#Escolha um tema</h3>
                <h2 className='common-theme fs-700' id='themes'>Água</h2>
                <h2 className='common-theme fs-600' id='themes'>Fauna</h2>
                <h2 className='common-theme fs-500' id='themes'>Flora</h2>
                <h2 className='common-theme fs-400' id='themes'>Compostagem</h2>
                <h2 className='common-theme fs-600' id='themes'>Agricultura</h2>
                <h2 className='common-theme fs-400' id='themes'>Resíduos</h2>
                <h2 className='common-theme fs-300' id='themes'>Lixo Orgânico</h2>
                <h2 className='common-theme fs-700' id='themes'>Clima</h2>
                <h2 className='common-theme fs-300' id='themes'>Meio Ambiente</h2>
                <h2 className='common-theme fs-200' id='themes'>Veganismo</h2>
                <h2 className='common-theme fs-400' id='themes'>Consumo</h2>
                <h2 className='common-theme fs-500' id='themes'>Pecuária</h2>
            </div>
        </>
    )
}