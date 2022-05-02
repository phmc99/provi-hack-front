import './styles.css'
import fakeCompaniesArray from '../../fakeCompaniesArray'
import Ongs_circle from '../Ongs_circle/ongs_circle'
import { useEffect } from 'react'

export default function BeAVolunteer() {

    useEffect(() => {
        const volunteerLabel = document.querySelector('#volunteer-label')

        volunteerLabel.classList.add('new-margin')

        return () => {
        }
    }, [])

    return (
        <div className='volunteer-container'>
            <div className='volunteer-label' id='volunteer-label'>
                <h3 className='volunteer-hashtag'>#Seja um voluntário</h3>
                <h5 className='volunteer-disclaimer'>Clique eu uma das empresas parceiras para saber mais!</h5>
            </div>
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