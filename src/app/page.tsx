import { ONE_WEEK_DEMANDS, ONE_YEAR_DEMANDS } from '@/constants/demands'

const Home = () => (
  <div className="max-w-screen-lg">
    <ul>
      {ONE_WEEK_DEMANDS.map((demand) => (
        <li key={demand.title}>{demand.title}</li>
      ))}
    </ul>

    <ul>
      {ONE_YEAR_DEMANDS.map((demand) => (
        <li key={demand.title}>{demand.title}</li>
      ))}
    </ul>
  </div>
)
export default Home
