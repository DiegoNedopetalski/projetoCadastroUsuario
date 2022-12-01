import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { HashRouter } from "react-router-dom";


import Logo from '../components/templates/Logo'
import Nav from '../components/templates/Nav'
import AppRoutes from './AppRoutes';
import Footer from '../components/templates/Footer'

export default function App() {
    return (
        <HashRouter >
            <div className="app">
                <Logo />
                <Nav />
                <AppRoutes />
                <Footer />
            </div>
        </HashRouter>
    )
}