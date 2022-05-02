import { useState } from "react";

function usePageProvider() {
    const [currentQuiz, setCurrentQuiz] = useState('')
    const [isQuiz, setIsQuiz] = useState(true)

    return {
        currentQuiz,
        setCurrentQuiz,
        isQuiz,
        setIsQuiz
    }
}

export default usePageProvider