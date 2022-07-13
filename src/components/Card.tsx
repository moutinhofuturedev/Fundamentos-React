import './card.scss'

type CardProps ={
    text?:string
    time?: string
}

export function Card({text, time}: CardProps) { // sem usar o props, eu uso a desestruturação
    return(
        <div className='box'>
            <strong>{text}</strong>
            <small>{time}</small>
        </div>
    )
}