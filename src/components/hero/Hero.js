import React from 'react'
import './HeroStyles.css'
import { Button } from 'react-bootstrap';


const Hero = () => {
    return (
        <div className='hero'>
            <div className="container">
                <div className="content">
                    <h1>Данные</h1>
                    <h1 className='blue'>Безапостность</h1>
                    <h1>Аналитика</h1>
                    <div><Button>Узнать болшее</Button></div>
                </div>
            </div>
        </div>
    )
}

export default Hero