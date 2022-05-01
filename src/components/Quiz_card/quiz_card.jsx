import './styles.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CustomRadioBtn from '../Custom_Radio_Button/custom_radio_btn'
import confirmAnswer from '../../assets/confirm-answer-2.svg'
import backArrow from '../../assets/back-arrow.svg'

export default function QuizCard() {
    const navigate = useNavigate()
    const [answer, setAnswer] = useState('')

    function handleBack() {
        console.log('/');
        navigate(-1)
        return
    }

    function handleChooseAnswer(e) {
        console.log(e.target.value);
        setAnswer(e.target.value);
    }

    function handleAnswer(e) {
        e.preventDefault()

        console.log(answer);
    }

    useEffect(() => {
        const cardLabel = document.querySelector('#card-label')

        cardLabel.classList.add('new-margin')

        return () => {
        }
    }, [])

    return (
        <form
            className='quiz-container'
            onSubmit={(e) => handleAnswer(e)}
        >
            <h3 className='card-label' id='card-label'>#Game Quiz</h3>
            <h1 className='question-label'>Pergunta #n</h1>
            <div className='question-box'>Pergunta a ser feita?</div>
            <div className='answers'>
                <div className='answer-box'>
                    <label className='checkboxes'>
                        <CustomRadioBtn
                            value='Resposta 1'
                            labelForRadio='Resposta 1'
                            name='answer'
                            handleChooseAnswer={handleChooseAnswer}
                            answer={answer}
                        />
                        Resposta 1
                    </label>
                </div>
                <div className='answer-box'>
                    <label className='checkboxes'>
                        <CustomRadioBtn
                            value='Resposta 2'
                            labelForRadio='Resposta 2'
                            name='answer'
                            handleChooseAnswer={handleChooseAnswer}
                            answer={answer}
                        />
                        Resposta 2
                    </label>
                </div>
                <div className='answer-box'>
                    <label className='checkboxes'>
                        <CustomRadioBtn
                            value='Resposta 3'
                            labelForRadio='Resposta 3'
                            name='answer'
                            handleChooseAnswer={handleChooseAnswer}
                            answer={answer}
                        />
                        Resposta 3
                    </label>
                </div>
                <div className='answer-box'>
                    <label className='checkboxes'>
                        <CustomRadioBtn
                            value='Resposta 4'
                            labelForRadio='Resposta 4'
                            name='answer'
                            handleChooseAnswer={handleChooseAnswer}
                            answer={answer}
                        />
                        Resposta 4
                    </label>
                </div>
            </div>
            <div className='buttons'>
                <button
                    className='answer-btn'
                    type='submit'
                >
                    Responder</button>
                <button
                    type='button'
                    className='back-btn'
                    onClick={() => handleBack()}
                >
                    Mudar de tema</button>
            </div>
        </form>
    )
}