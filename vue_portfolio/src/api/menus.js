import { instance } from './index';

async function fetchMenus(data) {
	try {
		return await instance.post('/menu/get-all', data);
	} catch (error) {
		console.log(error);
	}
}