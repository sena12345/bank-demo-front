import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { AccountService } from './../services/account.service';
import { OperationService } from './../services/operation.service';

@Component({
	selector: 'app-create-account',
	templateUrl: './create-account.component.html',
	styleUrls: [ './create-account.component.css' ]
})
export class CreateAccountComponent implements OnInit {
	clientId: number;
	public isShowProgress: boolean = false;
	constructor(
		private accountService: AccountService,
		private operations: OperationService,
		private route: ActivatedRoute
	) {
		this.clientId = this.route.snapshot.params['id'];
		this.accountService.showProgress$.subscribe((isShow) => {
			this.isShowProgress = isShow;
		});
	}

	ngOnInit(): void {}

	/**
   * create account for existing client
   * @param formData returns form data of account.
   */
	public createAccount(formData: FormControl) {
		this.accountService.create(formData, this.clientId);
	}

	public transfer(transferData: FormControl) {
		this.operations.send(transferData);
	}
}
