import './landingPage.css'
// import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div className="lando">
            {/* <a href='/home'>
            <button className="boton" ></button>
            </a> */}
            <div className='badge' >
            <a href='/home' className='text' >
                    <h3 className='frase' >vamos</h3>
            </a>
            </div>
        </div>
    )
}

export default LandingPage;