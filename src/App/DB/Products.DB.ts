import { Product } from '../Interfaces/Product'

const PRODUCTS: Product[] = [
	{
		id: 'product-1',
		name: 'Увлажнитель воздуха',
		image: 'https://avatars.mds.yandex.net/get-mpic/6982353/img_id1870050481315232315.jpeg/optimize',
		price: 140,
		favorite: false,
	},
	{
		id: 'product-2',
		name: 'Микроволновая печь',
		image: 'https://avatars.mds.yandex.net/get-mpic/11722550/2a0000018b8c1fef79867d773e93fd6696c4/optimize',
		price: 120,
		favorite: false,
	},
	{
		id: 'product-3',
		name: '',
		image: 'https://avatars.mds.yandex.net/get-mpic/4888456/img_id2851750770468989284.jpeg/optimize',
		price: 160,
		favorite: true,
	},
	{
		id: 'product-4',
		name: 'product-1',
		image: 'https://avatars.mds.yandex.net/get-mpic/11470463/2a0000018dac8cf4b5b04fed4ce138ce3a40/optimize',
		price: 120,
		favorite: false,
	},
	{
		id: 'product-5',
		name: 'product-1',
		image: 'https://avatars.mds.yandex.net/get-mpic/5236733/img_id7831773979972925181.jpeg/optimize',
		price: 1245.45,
		favorite: false,
	},
]

export const getProducts = (): Promise<Product[]> => {
	return new Promise<Product[]>((resolve, reject) => {
		setTimeout(() => {
			resolve(PRODUCTS)
		}, 500)
	})
}
