import { Card } from '../components/Card'
import './home.scss'

function Home() {

  function getTime() {
    const time = new Date()

    const H = formatTime(time.getHours())
    const M = formatTime(time.getMinutes())
    const S = formatTime(time.getSeconds())

    function formatTime(f: any) {
      return String(f).padStart(2, '0')
    }

    return `${H} : ${M} : ${S}`
  }

  return(
    <div className='container'>
      <form action=''>
        <h1>Lista de presença</h1>
        <input type="text" placeholder='digite seu nome' />

        <button type='submit'>Procurar</button>
      </form>

      <section>
        <Card text='Paulo Moutinho' time={getTime()} />
        <Card text='Guilherme Moura' time={getTime()} />
        <Card text='Eduardo Costa' time={getTime()} />
        <Card text='Luíz Vertullo' time={getTime()} />
      </section> 
    </div>
  )
}

export default Home 
