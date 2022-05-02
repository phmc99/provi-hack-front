import './styles.css'
import QuizCard from '../../components/Quiz_card/quiz_card'
import { useEffect, useState } from 'react'
import ThemeCard from '../../components/Theme_card/theme_card'

export default function Main() {
    const [currentQuiz, setCurrentQuiz] = useState('')

    useEffect(() => {
        return () => {
        }
    }, [currentQuiz])

    return (
        <div className='quiz-page-container'>

            {currentQuiz
                ? <QuizCard
                    currentQuiz={currentQuiz}
                    setCurrentQuiz={setCurrentQuiz}
                />
                : <ThemeCard
                    currentQuiz={currentQuiz}
                    setCurrentQuiz={setCurrentQuiz}
                />
            }

        </div>
    )
}