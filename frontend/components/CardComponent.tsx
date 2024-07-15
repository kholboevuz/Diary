import Image from 'next/image'
import Link from 'next/link'

export default function CardComponent() {
	return (
		<div>
			<div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
				<a href='#'>
					<Image
						width={100}
						height={100}
						className='rounded-t-lg'
						src=''
						alt=''
					/>
				</a>
				<div className='p-5'>
					<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
						Noteworthy technology acquisitions 2021
					</h5>

					<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
						Here are the biggest enterprise technology acquisitions of 2021 so
						far, in reverse chronological order.
					</p>
					<div className='gap-3 flex'>
						<Link
							href='update/dasdasd'
							className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
						>
							<svg
								className='w-6 h-6 text-gray-800 dark:text-white'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								fill='none'
								viewBox='0 0 24 24'
							>
								<path
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z'
								/>
							</svg>
						</Link>
						<Link
							href='#'
							className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
						>
							<svg
								className='w-6 h-6 text-gray-800 dark:text-white'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								fill='none'
								viewBox='0 0 24 24'
							>
								<path
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z'
								/>
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
