import './styles.css'
import TemaCard from '../../components/Tema_card/tema_card'
import QuizCard from '../../components/Quiz_card/quiz_card'

const Home = () => {
  return (
    <>
      <div className='home-container'>
        <h1>Home</h1>
        <TemaCard />
      </div>
    </>
  )
}

export default Home