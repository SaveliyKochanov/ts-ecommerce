import { Product } from '../Product/Product'

export class ProductsList {
	private products: Product[] = [new Product(), new Product(), new Product(), new Product()]
	render() {
		return `
			<h2>ProductsList</h2>
					${this.products.map(product => product.render()).join('')}
			<p>------</p>
			<div>
				<button>prev</button>
				<button>next</button>
			</div>
			`
	}
}
