import { Injectable } from '@angular/core';
import { MyUrls } from './../../utils';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class OperationService extends MyUrls {
	constructor(private http: HttpClient) {
		super();
	}

	/**
	 * 
	 * @param formData 
	 */
	public send(formData: FormControl) {
		this.showProgress.next(true);
		const data = formData.value;
		let from = data.from;
		let to = data.to;
		let amount = data.amount;
		let body = {
			from: { number: from },
			to: { number: to }
		};

		this.http
			.post(this.operations.transfer.concat(amount), body)
			.toPromise()
			.then((res) => {
				formData.reset();
				console.log(res);
				this.showProgress.next(false);
			})
			.catch((err) => {
				this.showProgress.next(false);
				console.log(err);
			});
	}

	/**
	 * 
	 * @param amount 
	 * @param account 
	 */
	public deposit(amount: number, account: number) {
		this.showProgress.next(true);
		this.http
			.post(this.operations.deposit.concat(amount.toLocaleString()), { number: account })
			.toPromise()
			.then((res) => {
				console.log(res);
				this.showProgress.next(false);
				return res;
			})
			.catch((err) => {
				this.showProgress.next(false);
				console.log(err);
				return null;
			});
	}

	/**
	 * 
	 * @param amount to be deposited.
	 * @param account to deposite amount into
	 */
	public withdraw(amount: number, account: number) {
		this.showProgress.next(true);
		this.http
			.post(this.operations.withdraw.concat(amount.toLocaleString()), { number: account })
			.toPromise()
			.then((res) => {
				this.showProgress.next(false);
				console.log(res);
				return res;
			})
			.catch((err) => {
				this.showProgress.next(false);
				console.log(err);
				return null;
			});
	}

	/**
	 * 
	 * @param formdata 
	 */
	public transactions(formdata: FormControl): Promise<Array<any>> {
		let typeValue: number = formdata.value.type;
		return this.http
			.post(this.operations.transactions, { ...formdata.value, type: typeValue })
			.toPromise()
			.then((data) => {
				return data;
			})
			.catch((err) => {
				console.log(err);
				return null;
			});
	}
}
