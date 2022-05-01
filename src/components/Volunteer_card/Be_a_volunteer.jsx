import './styles.css'
import fakeCompaniesArray from '../../fakeCompaniesArray'
import Ongs_circle from '../Ongs_circle/ongs_circle'

export default function BeAVolunteer() {


    return (
        <div className='volunteer-container'>
            <h3>#Seja um voluntário</h3>
            <h5>Clique eu uma das empresas parceiras para saber mais!</h5>
            <div className='ongs-container'>
                {fakeCompaniesArray.map((cia) => (
                    < Ongs_circle
                        key={cia.id}
                        cia={cia}
                    />
                ))}
            </div>
        </div>
    )
}