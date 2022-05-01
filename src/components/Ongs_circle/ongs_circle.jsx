import './styles.css'

export default function Ongs_circle({ cia }) {

    return (

        <a
            className='ong-card'
            id='ong-card'
            href={cia.link}
            target="_blank"
        >
            <img className='ong-image' src={cia.image} />
            <span className='ong-name'>{cia.name}</span>
        </a>

    )
}