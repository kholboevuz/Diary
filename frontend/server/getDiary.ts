import axios from 'axios'
export const getDiary = async () => {
	const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/diary`)
	console.log(data)
	return data
}
