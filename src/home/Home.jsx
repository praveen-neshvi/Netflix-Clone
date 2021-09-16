import React from 'react'
import {AcUnit} from '@material-ui/icons'
import './home.scss'
import Navbar from '../components/navbar/Navbar'
import Featured from '../components/featured/Featured'
import List from '../components/list/List';

const Home = () => {
    return (
        <div className="home">
           <Navbar />
           <Featured type=""/>
           <List />
           <List />
        </div>
    )
}

export default Home
