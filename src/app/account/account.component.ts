import { Component, OnInit } from '@angular/core';
import { AccountService } from './../services/account.service';

@Component({
	selector: 'app-account',
	templateUrl: './account.component.html',
	styleUrls: [ './account.component.css' ]
})
export class AccountComponent implements OnInit {
	public isShowProgress: boolean = false;
	accounts: Array<any> = new Array<any>();
	constructor(private accountService: AccountService) {
		this.accountService.showProgress$.subscribe((isShow) => {
			this.isShowProgress = isShow;
		});
	}

	ngOnInit(): void {
		this.getAccounts();
	}

	private getAccounts() {
		this.accountService
			.getAccounts()
			.then((data) => {
				this.accounts = data;
			})
			.catch((error) => {
				console.log(error);
			});
	}
	

	public closeAccount(account: any) {
		this.accountService.close(account);
		this.getAccounts();
	}
}
