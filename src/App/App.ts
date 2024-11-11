import { ProductsList } from './Components/ProductsList'

export class App {
	private productsList = new ProductsList()
	constructor() {
	}
	render() {
		return `<h1>App Ecommerce</h1>
		<div>
			${this.productsList.render()}
		</div>`
		
	}
}