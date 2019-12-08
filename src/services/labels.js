import request from '../utils/axios';

export async function getLabelList(params) {
	return await request('/getLabelList', {
		method: 'post',
		data: params
	});
}
