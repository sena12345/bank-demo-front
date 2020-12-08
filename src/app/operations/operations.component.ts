import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OperationService } from './../services/operation.service';
import { AccountService } from './../services/account.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-operations',
	templateUrl: './operations.component.html',
	styleUrls: [ './operations.component.css' ]
})
export class OperationsComponent implements OnInit {
	isShowProgress: boolean = false;
	clientId: number;
	accounts: Array<any> = new Array<any>();
	constructor(
		private operationService: OperationService,
		private accountService: AccountService,
		private route: ActivatedRoute
	) {
		this.operationService.showProgress$.subscribe((isShow) => {
			this.isShowProgress = isShow;
		});
	}

	ngOnInit(): void {
		this.clientId = this.route.snapshot.params['id'];
		this.accountService.getAccount(this.clientId).then((data) => {
			this.accounts = data;
		});
	}

	public deposit(data: FormControl) {
		let body = data.value;
		let amount: number = body.amount;
		let account: number = body.account;
		let type: number = body.type;
		if (type == 0) {
			this.operationService.deposit(amount, account);
			return;
		} else if (type == 1) this.operationService.withdraw(amount, account);
	}
}
