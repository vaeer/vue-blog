import request from '../utils/axios';

export async function getArticle(params) {
	return await request('/getArticle', {
		method: 'post',
		data: params
	});
}

export async function getArticleList(params) {
	return await request('/getArticleList', {
		method: 'post',
		data: params
	});
}