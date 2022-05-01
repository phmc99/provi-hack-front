import './styles.css'

export default function Ongs_circle({ cia }) {

    function handleChooseOng() {
        console.log(`link da ONG ${cia.name}`);
    }

    return (
        <div
            className='ong-card'
            onClick={() => handleChooseOng()}
        >
            <img className='ong-image' src={cia.image} />
            <span className='ong-name'>{cia.name}</span>
        </div>
    )
}