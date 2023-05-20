/** @format */

import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
const Layout = () => {
	return (
		<div className='overflow-x-hidden'>
			<Header />
			<Home />
			<Footer />
		</div>
	)
}

export default Layout
