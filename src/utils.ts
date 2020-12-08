import { BehaviorSubject, Observable } from 'rxjs';

export class MyUrls {
	public showProgress: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	public showProgress$: Observable<boolean> = this.showProgress.asObservable();

	constructor() {}
	// private baseUrl: string = 'https://bank-demo-api.herokuapp.com/api/';
	private baseUrl: string = 'http://localhost:9191/api/';
	public client = {
		register: this.baseUrl.concat('client/register'),
		clients: this.baseUrl.concat('client/clients')
	};
	public account = {
		create: this.baseUrl.concat('account/create/'),
		accounts: this.baseUrl.concat('account/accounts'),
		close: this.baseUrl.concat('account/close'),
		consult: this.baseUrl.concat('account/consult/'),
		clientAccounts: this.baseUrl.concat('account/client/')
	};

	public operations = {
		transfer: this.baseUrl.concat('operation/transfer/'),
		deposit: this.baseUrl.concat('operation/deposit/'),
		withdraw: this.baseUrl.concat('operation/withdraw/'),
		transactions: this.baseUrl.concat('operation/transactions/')
	};
}
