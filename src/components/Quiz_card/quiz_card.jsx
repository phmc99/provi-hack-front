import './styles.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function QuizCard() {
    const navigate = useNavigate()
    const [answer, setAnswer] = useState('')

    function handleBack() {
        console.log('/');
        navigate(-1)
        return
    }

    function handleChooseAnswer(e) {
        setAnswer(e.target.value);
    }

    function handleAnswer(e) {
        e.preventDefault()

        console.log(answer);
    }

    return (
        <form
            className='quiz-container'
            onSubmit={(e) => handleAnswer(e)}
        >
            <h1 className='question-label'>Pergunta #n</h1>
            <div className='question-box'>Pergunta a ser feita?</div>
            <div className='answers'>
                <div className='answer-box'>
                    <label>
                        <input
                            type={'radio'}
                            className='checkboxes'
                            value='Resposta 1'
                            name='answer'
                            onChange={(e) => handleChooseAnswer(e)}
                        />
                        Resposta 1
                    </label>
                </div>
                <div className='answer-box'>
                    <label>
                        <input
                            type={'radio'}
                            className='checkboxes'
                            value='Resposta 2'
                            name='answer'
                            onChange={(e) => handleChooseAnswer(e)} />
                        Resposta 2
                    </label>
                </div>
                <div className='answer-box'>
                    <label>
                        <input
                            type={'radio'}
                            className='checkboxes'
                            value='Resposta 3'
                            name='answer'
                            onChange={(e) => handleChooseAnswer(e)} />
                        Resposta 3
                    </label>
                </div>
                <div className='answer-box'>
                    <label>
                        <input
                            type={'radio'}
                            className='checkboxes'
                            value='Resposta 4'
                            name='answer'
                            onChange={(e) => handleChooseAnswer(e)} />
                        Resposta 4
                    </label>
                </div>
            </div>
            <div className='buttons'>
                <button type='sumbmit'>Responder</button>
                <button
                    type='button'
                    onClick={() => handleBack()}
                >Mudar de tema</button>
            </div>
        </form>
    )
}