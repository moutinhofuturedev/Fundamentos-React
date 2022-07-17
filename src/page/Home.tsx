import { FormEvent, useState } from 'react'
import { Card } from '../components/Card'
import './home.scss'

function Home() {
  const [ studentName, setStudentName ] = useState('') // função que armazena o valor digitado no input
  const [ students, setStudents ] = useState([]) //iniciando com um vetor vazio (tipo array) para armazenar um lista de alunos

  function Submit(event: FormEvent) {
    event.preventDefault()

    setStudents([...students, studentName])

  }
  
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
      <form onSubmit={Submit}>
        <h1>Lista de presença</h1>
        <input type="text" placeholder='digite seu nome' onChange={event => setStudentName(event.target.value)}/>

        <button type='submit'>Procurar</button>
      </form>

      <section>
        {students.map(element => { // percorrer uma lista para que a cada renderização eu tenha mais um componente com um novo dado
          return <Card key={element} text={element} time={getTime()}/>
        })}
      </section> 
    </div>
  )
}

export default Home 


