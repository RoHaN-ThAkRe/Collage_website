import React from 'react'
import './About.css'
import about_img from '../../Assets/about.png'
import play_icon from '../../Assets/play-icon.png'

const About = ({setPlaystate}) => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} className='about_img'/>
                <img src={play_icon} className='play_icon' onClick={()=>
                    {setPlaystate(true)}}/>
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In saepe asperiores quod consequuntur
                    debitis corrupti deserunt commodi doloribus ducimus, quos inventore, eveniet, iusto nostrum! Assumenda
                    quibusdam atque omnis amet iure quisquam perspiciatis et quod maiores!
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore temporibus delectus omnis,
                    tempora culpa, voluptas nisi veritatis nostrum, sint libero excepturi rem ut corporis nesciunt?                    
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero facere consequuntur, consequatur
                    quam labore quasi dicta temporibus non iure alias autem ea cumque nam. Tempore corrupti veritatis,
                    sint molestiae.
                </p>
            </div>
        </div>
    )
}

export default About