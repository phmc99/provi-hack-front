import './styles.css'
import ThemeCard from '../../components/Theme_card/theme_card'
import QuizCard from '../../components/Quiz_card/quiz_card'
import BeAVolunteer from '../../components/Volunteer_card/Be_a_volunteer'

const Home = () => {
  return (
    <div className='home-container'>
      <h1>Home</h1>
      <QuizCard />
    </div>
  )
}

export default Home