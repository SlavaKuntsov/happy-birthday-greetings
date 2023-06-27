import classNames from 'classnames'
import { useState } from 'react'

import { ArrowDownIcon } from '@chakra-ui/icons'
import cry from '../src/assets/crying.gif'

function App() {
	const [second, setSecond] = useState(false)
	const [third, setThird] = useState(false)
	const [fourth, setFourth] = useState(false)

	const [clickCandles, setClickCandles] = useState(false)
	const [cake, setCake] = useState(false)

	return (
		<div className={
			classNames(
				'wrapper h-full w-full transition-all duration-1000 ease-in-out',
				{'bg-white': fourth},
				{'bg-white': !third},
				{'bg-[#f07167]': second && !fourth}
			)
		}>
			<div
				className={classNames(
					'first flex items-center h-full w-full transition-all duration-1000 ease-in-out flex-col justify-between',
					{ 'bg-red-200': !second },
					{ '-translate-y-full': second }
				)}
			>
				<h1 className='text-3xl mt-96 font-semibold text-white'>
					Sorry...
				</h1>
				<div
					onClick={() => setSecond(true)}
					className='button px-6 py-3 bg-white mb-10 animate-bounce hover:bg-red-300 hover:px-10 transition-all duration-300 ease-in-out rounded-xl'
				>
					<ArrowDownIcon boxSize={18} />
				</div>
			</div>

			<div
				className={classNames(
					'second h-full w-full flex flex-col justify-between items-center transition-all duration-1000 ease-in-out',
					{ 'bg-red-200': !second },
					{ '-translate-y-full  bg-white': second && !third },
					{ '-translate-y-[200%] ': second && third },
					{ ' bg-[#f07167]': third }
				)}
			>
				<div className='content flex flex-row gap-10 items-center justify-center max-w-5xl mt-48'>
					<h1 className='h1 mb-20 font-semibold text-[#282828] text-4xl w-2/3 leading-[42px] tracking-wide'>
						My dear dear friend, please excuse me that I completely
						forgot about such an important day ...
					</h1>
					<img src={cry} alt='cry' className='w-96 h-96 mb-20 ' />
				</div>
				<div
					onClick={() => {
						setThird(true)
						setCake(true)
					}}
					className='button px-6 py-3 bg-slate-200 mb-10 animate-bounce hover:bg-red-200 hover:px-10 transition-all duration-300 ease-in-out rounded-xl'
				>
					<ArrowDownIcon boxSize={18} />
				</div>
			</div>

			<div
				className={classNames(
					'third flex items-center justify-center h-full w-full transition-all duration-1000 ease-in-out flex-col gap-40',
					{ ' bg-white': !third },
					{'-translate-y-[200%]': third && !fourth},
					{'-translate-y-[300%] bg-white': third && fourth},
					{ ' bg-[#f07167]': third },
					
				)}
			>
				{cake && (
					<>
						<div className='cake-wrapper '>
							<div id='birthday-cake'>
								<div className='cake'>
									<div className='middle'></div>
									<div className='chocs'></div>
									<div className='top'></div>
								</div>
								<div
									onClick={() => setClickCandles(true)}
									className='candles'
								>
									<div
										className={classNames(
											'flame',
											{ 'opacity-100': !clickCandles },
											{ 'opacity-0': clickCandles }
										)}
									></div>
									<div
										className={classNames(
											'flame2',
											{ 'opacity-100': !clickCandles },
											{ 'opacity-0': clickCandles }
										)}
									></div>{' '}
									<div
										className={classNames(
											'flame3',
											{ 'opacity-100': !clickCandles },
											{ 'opacity-0': clickCandles }
										)}
									></div>
									<div
										className={classNames(
											'text transition-all ease-in-out duration-500',
											{
												'opacity-0 top-[100px]':
													!clickCandles
											},
											{
												'opacity-100 -top-[90px]':
													clickCandles
											}
										)}
									>
										Happy Birthday!
									</div>
									<div className='shadows'></div>
								</div>
								<p className='text2'>
									*click on the flame to blow candles
								</p>
							</div>
						</div>
						<div
							onClick={() => {
								if(clickCandles) {
									setFourth(true)
									setTimeout(() => {
										setCake(false)
									}, 3000)
								}
							}}
							className={
								classNames(
									'button px-6 py-3 bg-red-200 mb-10 animate-bounce hover:bg-white hover:px-10 transition-all duration-300 ease-in-out rounded-xl',
									{'opacity-0': !clickCandles},
									{'opacity-100': clickCandles}
								)
							}
						>
							<ArrowDownIcon boxSize={18} />
						</div>
					</>
				)}
			</div>

			<div
				className={classNames(
					'fourth flex items-center justify-center h-full w-full transition-all duration-1000 ease-in-out flex-col gap-14 pb-44',
					{ ' bg-white -translate-y-[300%]': fourth },
					{ ' bg-[#f07167]': !fourth }
				)}
			>
				<h2 className='h2 text-red-400 text-5xl mb-10'>Well, congratulations at last !</h2>
				<p className='congratulation text-black max-w-screen-sm text-2xl text-center font-semibold'>Пусть и поздно, но поздравляю с Днем Рождения! <br/> <br/> Конечно же желаю тебе всего самого хорошего, желаю исполнения всего о чем ты желаешь, здоровья, удачи и всего всего! <br />
				Конечно сейчас тебе нужно всей удачи возможной удачи на поступление туда, где тебе будет интересно и не скучно, и откуда ты не захочешь отчислиться) хах <br /> <br />
				Ты прекрасный и безумно умный человек, который способен на очень и очень многое! Уверен что ты и дальше будешь идти вперед и только вперед) <br /> <br />
				Еще раз поздравляю, к сожалению с опозданием..
				</p>
			</div>
		</div>
	)
}

export default App
// bg-[#1e1e20]
