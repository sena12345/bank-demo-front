import { Component, OnInit } from '@angular/core';
import { OperationService } from './../services/operation.service';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'app-transactions',
	templateUrl: './transactions.component.html',
	styleUrls: [ './transactions.component.css' ]
})
export class TransactionsComponent implements OnInit {
	transactions: Array<any> = new Array<any>();
	constructor(private operationService: OperationService) {}

	ngOnInit(): void {}

	public sort(formData: FormControl) {
		this.operationService
			.transactions(formData)
			.then((data) => {
				console.log(data);
				this.transactions = data;
			})
			.catch((err) => {
				console.log(err);
			});
	}
}
