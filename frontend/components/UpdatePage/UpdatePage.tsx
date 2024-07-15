export default function UpdateForm() {
	return (
		<div>
			<section className=''>
				<div className='py-8 px-4 mx-auto max-w-2xl lg:py-16'>
					<h2 className='mb-4 text-xl font-bold text-gray-900 dark:text-white'>
						Kundalik ma'lunmotlarini yangilash
					</h2>
					<form action='#'>
						<div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
							<div className='sm:col-span-2'>
								<label
									htmlFor='name'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Kundalik sarlavhasi
								</label>
								<input
									type='text'
									name='name'
									id='name'
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
									required
								/>
							</div>

							<div className='sm:col-span-2'>
								<label
									htmlFor='description'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Kundalik ma'lumoti
								</label>
								<textarea
									id='description'
									rows={8}
									className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
									defaultValue={''}
								/>
							</div>
						</div>
						<button
							type='submit'
							className='inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 dark:bg-blue-700 bg-blue-700 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800'
						>
							Kundalikni yangilash
						</button>
					</form>
				</div>
			</section>
		</div>
	)
}
