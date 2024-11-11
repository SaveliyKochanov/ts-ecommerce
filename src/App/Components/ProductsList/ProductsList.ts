import { productsModel } from '../../Models/ProductsModel'
import { appStore } from '../../Store/AppStore'
import { ProductItem } from '../ProductItem/ProductItem'
import { Product } from './../../Interfaces/Product'

export class ProductsList {
	private loading = false
	private error: Error | null = null
	private products: Product[] = []

	constructor() {
		this.fetchProducts()
	}
	fetchProducts() {
		this.loading = true
		productsModel
			.getProducts()
			.then(products => {
				this.products = products
			})
			.catch(error => {
				this.error = error
			})
			.finally(() => {
				this.loading = false
				appStore.$render.next(true)
			})
	}
	render() {
		return `
			<h2>ProductsList</h2>
					${this.products
						.map(product => new ProductItem(product))
						.map(product => product.render())
						.join('')}
					${this.loading ? 'loading...' : ''}
					${this.error ? 'error...' : ''}
			<p>------</p>
			<div>
				<button>prev</button>
				<button>next</button>
			</div>
			`
	}
}
