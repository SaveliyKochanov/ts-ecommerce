import { BehaviorSubject } from 'rxjs'

export class AppStore {
	static isExist = false
	static instance: AppStore

	public $render: BehaviorSubject<boolean> = new BehaviorSubject(true)
	constructor() {
		if (AppStore.isExist) {
			return AppStore.instance
		}
		AppStore.isExist = true
		AppStore.instance = this
	}
}

export const appStore = new AppStore()
