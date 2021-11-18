import axios from 'axios';

function createInstance() {
	const instance = axios.create();
	return instance;
}
export const instance = createInstance();