import { Product } from '../../Interfaces/Product'

export class ProductItem {
	constructor(private product: Product) {}
	render() {
		return `
		<div>
			<h3>${this.product.name}</h3>
			<img src=${this.product.image}></img>
			<p>${this.product.price}</p>
			</div>
			 `
	}
}
