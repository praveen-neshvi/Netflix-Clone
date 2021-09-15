import React from 'react'
import {AcUnit} from '@material-ui/icons'
import './home.scss'
import Navbar from '../components/navbar/Navbar'

const Home = () => {
    return (
        <div className="home">
           <Navbar />
           <img width="100%" src="http://20.theladbiblegroup.com/s3/content/481a7d29587cf3eb3f659f54dbb3cfd3.jpg" alt="" />
        </div>
    )
}

export default Home
