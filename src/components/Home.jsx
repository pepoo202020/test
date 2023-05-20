/** @format */

import React from 'react'
import item from '../assets/01.png'
import item01 from '../assets/watch01.png'
import item02 from '../assets/tag.png'
import item03 from '../assets/plus.png'
import item04 from '../assets/user.png'
import plus from '../assets/plusSign.png'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'
const Home = () => {
	const data01 = [
		{ name: 'Time', img: item01 },
		{ name: 'Cost', img: item02 },
		{ name: 'Benefit', img: item03 },
		{ name: 'Pro', img: item04 },
		{ name: 'Benefit', img: item03 },
		{ name: 'Pro', img: item04 },
	]
	const data02 = ['Question 1', 'Question 2', 'Question 3', 'Question 4']
	const data03 = [
		{
			name: 'Guide',
			p: '10 Steps To Your Dream Kitchen Extension',
			link: 'Visit Page',
		},
		{
			name: 'Blog',
			p: 'Why It Pays To Extend Your Home In London',
			link: 'Read More',
		},
		{
			name: 'Case Study',
			p: 'Builder Reveals His Top 5 Money Saving Tips',
			link: 'Read More',
		},
	]
	return (
		<div className='w-screen overflow-x-hidden'>
			<div className='pt-36 lg:pl-32 lg:px-0 px-8 flex flex-col lg:items-start items-center justify-center overflow-x-hidden'>
				<h1 className='poppins font-bold lg:text-6xl text-3xl mb-8'>
					Measured Survey
				</h1>
				<p className='lg:max-w-2xl mb-28 font-light lg:text-start text-center poppins lg:text-2xl text-lg'>
					We make it easy to extend your Victorian Home. Survey, design and
					planning - it couldn’t be simpler!
				</p>
				<div className='px-11 py-3 bg-black text-white rounded-full lg:text-xl text-base poppins font-medium cursor-pointer hover:bg-transparent hover:text-black hover:border hover:border-black hover:scale-110 transition-all mb-24'>
					Speak With A Pro
				</div>
			</div>

			<div className='w-full overflow-hidden bg-[#E8E8E8] flex lg:flex-row flex-col items-center justify-between lg:px-36 px-10 py-28'>
				<div className='flex flex-col lg:items-start items-center lg:w-1/2 w-full justify-center lg:mt-20'>
					<h1 className='poppins font-medium lg:text-5xl text-2xl mb-5'>
						Surveying Made Simple
					</h1>
					<p className='poppins font-light lg:text-xl lg:text-start text-center text-sm mb-28'>
						We’re on a mission to help you unlock the untapped potential of your
						Victorian home. Whether you need more space to entertain, want to
						boost its value, or just want to give it a facelift, we’ve got your
						back.
					</p>
					<div className='px-11 py-3 bg-black text-white rounded-full lg:text-xl text-base poppins font-medium cursor-pointer hover:bg-transparent hover:text-black hover:border hover:border-black hover:scale-110 transition-all mb-24'>
						Get Started
					</div>
				</div>
				<div className='lg:w-1/2 lg:px-10 w-full'>
					<div className=' lg:mx-24 mx-20 h-5 rounded-t bg-[#B4B3B3]'></div>
					<div className=' lg:mx-20 mx-16 h-5 rounded-t bg-[#CECECE]'></div>
					<div className=' lg:mx-16 mx-14 rounded py-9 lg:px-20 px-8 bg-white'>
						<h1 className='text-[#707070] poppins font-medium mb-5'>STAGE 3</h1>
						<img
							src={item}
							alt='item'
							className='w-28 h-28 mb-5'
						/>
						<h1 className='poppins font-bold'>Digital Twin</h1>
						<p className='poppins font-light text-[#707070]'>
							We’re on a mission to help you unlock the untapped potential of
							your Victorian home. Whether you need more space to entertain,
							want to boost its value, or just want to give it a facelift, we’ve
							got your back.
						</p>
					</div>
				</div>
			</div>

			<div className='w-full overflow-hidden flex flex-col items-center py-28'>
				<h1 className='poppins lg:text-5xl font-medium text-2xl'>
					The Nitty-Gritty
				</h1>
				<div className='lg:px-20 px-10 w-full flex lg:flex-row flex-col items-center justify-between'>
					{data01.map((itemData, i) => (
						<div
							key={i}
							className='flex flex-col items-center justify-center w-48 h-48 bg-[#D6D6D6] my-8 rounded'
						>
							<img
								src={itemData.img}
								alt='item data'
								className='w-16 h-16'
							/>
							<h1>{itemData.name}</h1>
						</div>
					))}
				</div>
			</div>

			<div className='w-full overflow-hidden lg:px-20 px-10 flex flex-col items-center py-28'>
				<h1 className='poppins lg:text-4xl text-2xl text-center mb-20'>
					Frequently Asked Questions
				</h1>
				<div className=' w-full bg-[#CBCBCB] rounded-2xl flex flex-col py-14 lg:px-20 px-10 justify-center'>
					{data02.map((itemData, i) => (
						<div
							className={`w-full flex items-center justify-between ${
								i === 3 ? '' : 'border-b border-black'
							}`}
						>
							<h1 className='lg:mx-10 mx-5 my-5 poppins font-bold '>
								{itemData}
							</h1>
							<img
								src={plus}
								alt='pulse'
								className='w-8 h-8 cursor-pointer'
							/>
						</div>
					))}
				</div>
			</div>

			<div className='w-full bg-black flex flex-col items-center py-28'>
				<h1 className='text-white poppins lg:text-4xl text-2xl text-center font-medium mb-10'>
					Questions? Speak With A Planning Pro
				</h1>
				<div className='flex items-center justify-center w-full gap-8'>
					<BsArrowLeft className='lg:block hidden w-10 h-10 bg-white rounded-full cursor-pointer text-xs px-2 py-2' />
					<div className='bg-white py-4 px-7 rounded-xl gap-2 text-black flex flex-col items-center justify-center'>
						<h1 className='poppins text-base font-medium'>THU</h1>
						<h1 className='poppins text-lg font-bold'>20</h1>
						<h1 className='poppins text-base font-medium'>APR</h1>
					</div>
					<div className='bg-white py-4 px-7 rounded-xl gap-2 text-black flex flex-col items-center justify-center'>
						<h1 className='poppins text-base font-medium'>FRI</h1>
						<h1 className='poppins text-lg font-bold'>21</h1>
						<h1 className='poppins text-base font-medium'>APR</h1>
					</div>
					<div className='bg-white py-4 px-7 rounded-xl gap-2 text-black flex flex-col items-center justify-center'>
						<h1 className='poppins text-base font-medium'>MON</h1>
						<h1 className='poppins text-lg font-bold'>24</h1>
						<h1 className='poppins text-base font-medium'>APR</h1>
					</div>
					<BsArrowRight className='lg:block hidden w-10 h-10 bg-white rounded-full text-xs px-2 py-2 cursor-pointer' />
				</div>
			</div>

			<div className='w-full lg:px-20 px-10 bg-[#A7A7A7] flex flex-col items-center py-28'>
				<h1 className='text-white poppins lg:text-4xl text-2xl text-center font-medium mb-10'>
					Victorian Extension Advice Hub
				</h1>
				<div className='w-full flex lg:flex-row flex-col lg:gap-0 gap-8 items-center justify-between'>
					{data03.map((itemData, i) => (
						<div
							key={i}
							className='bg-white flex flex-col items-start justify-center py-9 px-7 rounded-xl'
						>
							<h1 className='poppins mb-56'>{itemData.name}</h1>
							<p className='poppins max-w-xs mb-5'>{itemData.p}</p>
							<div className='flex items-center gap-2'>
								<h1 className='poppins underline font-bold cursor-pointer'>
									{itemData.link}
								</h1>
								<BsArrowRight className='text-xl font-bold' />
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Home
