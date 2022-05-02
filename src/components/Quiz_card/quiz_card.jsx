import './styles.css'
import { useEffect, useState } from 'react'
import CustomRadioBtn from '../Custom_Radio_Button/custom_radio_btn'

export default function QuizCard({ currentQuiz, setCurrentQuiz }) {

    const [answer, setAnswer] = useState('')
    const [whichQuestion, setWhichQuestion] = useState(1)
    const [ask, setAsk] = useState('')
    const [answerA, setAnswerA] = useState('')
    const [answerB, setAnswerB] = useState('')
    const [answerC, setAnswerC] = useState('')
    const [answerD, setAnswerD] = useState('')
    const [rightAnswer, setRightAnswer] = useState('')
    const [pointCounter, setPointCounter] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const [finalText, setFinalText] = useState('Texto teste finaaaaaaaal')
    const [currentTheme, setCurrentTheme] = useState('')

    function handleBack() {
        setCurrentQuiz('')
        return
    }

    function handleChooseAnswer(e) {
        setAnswer(e.target.value);
    }

    function showFinalScore() {

        if (pointCounter === 0) { setFinalText('Vamos lá, tá na hora de aprender...ou de ser extinto!') }
        if (pointCounter === 1) { setFinalText('Será que eu tô vendo um Meteoro?') }
        if (pointCounter === 2) { setFinalText('Corre que dá tempo de salvar o planeta!') }
        if (pointCounter === 3) { setFinalText('Que maravilha! Se depender de você, a raça humana persistirá') }
    }

    function handleAnswer(e) {
        e.preventDefault()
        console.log(rightAnswer);

        if (answer === rightAnswer) {
            setPointCounter(pointCounter + 1)
        }
        setWhichQuestion(whichQuestion + 1)


    }

    function grabQuestionInfo(questionNumber) {

        setAsk(currentQuiz.questions[questionNumber - 1].pergunta)
        setAnswerA(currentQuiz.questions[questionNumber - 1].opcao_A)
        setAnswerB(currentQuiz.questions[questionNumber - 1].opcao_B)
        setAnswerC(currentQuiz.questions[questionNumber - 1].opcao_C)
        setAnswerD(currentQuiz.questions[questionNumber - 1].opcao_D)
        setCurrentTheme(currentQuiz.tema)

        const localRightAnswer = currentQuiz.questions[questionNumber - 1].opcao_correta
        setRightAnswer(localRightAnswer)

    }

    useEffect(() => {
        if (whichQuestion > currentQuiz.questions.length) {
            setShowScore(true)
            showFinalScore()
            return
        }

        const cardLabel = document.querySelector('#card-label')
        cardLabel.classList.add('new-margin')

        grabQuestionInfo(whichQuestion);

        return () => {
        }
    }, [whichQuestion])

    return (
        <>
            {showScore
                ?
                <div className='results-container'>
                    <div className='fixed-final-text'>Parabés, você conquistou sua primeira medalha em:</div>
                    <strong className='current-theme-final'>{currentTheme}</strong>
                    <div className='final-text'>
                        {finalText}
                    </div>
                </div>
                :
                <form
                    className='quiz-container'
                    onSubmit={(e) => handleAnswer(e)}
                >
                    <h3 className='card-label' id='card-label'>#Game Quiz</h3>
                    <h1 className='question-label'>Pergunta {whichQuestion}</h1>
                    <div className='question-container'>
                        <p className='question-box'>{ask}</p><span className='span-box' ></span>
                    </div>
                    <div className='answers'>
                        <div className='answer-container'>
                            <div className='answer-box'>
                                <label className='checkboxes'>
                                    <CustomRadioBtn
                                        value={answerA}
                                        answerForRadio={answerA}
                                        name='answer'
                                        handleChooseAnswer={handleChooseAnswer}
                                        answer={answer}
                                        whichQuestion={whichQuestion}
                                    />
                                    {answerA}
                                </label>
                            </div><span className='span-box' ></span>
                        </div>
                        <div className='answer-container'>
                            <div className='answer-box'>
                                <label className='checkboxes'>
                                    <CustomRadioBtn
                                        value={answerB}
                                        answerForRadio={answerB}
                                        name='answer'
                                        handleChooseAnswer={handleChooseAnswer}
                                        answer={answer}
                                        whichQuestion={whichQuestion}
                                    />
                                    {answerB}
                                </label>
                            </div><span className='span-box' ></span>
                        </div>
                        <div className='answer-container'>
                            <div className='answer-box'>
                                <label className='checkboxes'>
                                    <CustomRadioBtn
                                        value={answerC}
                                        answerForRadio={answerC}
                                        name='answer'
                                        handleChooseAnswer={handleChooseAnswer}
                                        answer={answer}
                                        whichQuestion={whichQuestion}
                                    />
                                    {answerC}
                                </label>
                            </div><span className='span-box' ></span>
                        </div>
                        {answerD &&
                            <div className='answer-container'>

                                <div className='answer-box'>
                                    <label className='checkboxes'>
                                        <CustomRadioBtn
                                            value={answerD}
                                            answerForRadio={answerD}
                                            name='answer'
                                            handleChooseAnswer={handleChooseAnswer}
                                            answer={answer}
                                            whichQuestion={whichQuestion}
                                        />
                                        {answerD}
                                    </label>
                                </div><span className='span-box' ></span>
                            </div>
                        }
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
            }
        </>
    )
}