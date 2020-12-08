import { Injectable } from '@angular/core';
import { MyUrls } from './../../utils';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Injectable({
	providedIn: 'root'
})
export class AccountService extends MyUrls {
	constructor(private http: HttpClient) {
		super();
	}

	/***
   * function to create new account
   * @param formData: account data from form
   * @param holderId: Id of the account holder..
   */
	public create(formData: FormControl, holderId: number) {
		this.showProgress.next(true);
		this.http
			.post(this.account.create.concat(holderId.toLocaleString()), formData.value)
			.toPromise()
			.then((response) => {
				this.showProgress.next(false);
				console.log(response);
			})
			.catch((error) => {
				this.showProgress.next(false);
				console.log(error);
			});
	}

	/**
   * toggle account status(close/open)
   * @param account: account number
   */
	public close(account: any) {
		this.showProgress.next(true);
		this.http
			.post(this.account.close, account)
			.toPromise()
			.then((status) => {
				this.showProgress.next(false);
				console.log(status);
				return status;
			})
			.catch((err) => {
				this.showProgress.next(false);
				console.log(err);
				return;
			});
	}

	/**
   * returns array of accounts
   */
	public async getAccounts(): Promise<Array<any>> {
		this.showProgress.next(true);
		return await this.http
			.get(this.account.accounts)
			.toPromise()
			.then((data) => {
				this.showProgress.next(false);
				return data;
			})
			.catch((err) => {
				this.showProgress.next(false);
				console.log(err);
				return null;
			});
	}

	/**
   * returns array of client accounts
   * @param clientId : the id of the client to be returned.
   */
	public async getAccount(clientId: number): Promise<any> {
		this.showProgress.next(true);
		return await this.http
			.get(this.account.clientAccounts.concat(clientId.toLocaleString()))
			.toPromise()
			.then((data) => {
				this.showProgress.next(false);
				return data;
			})
			.catch((err) => {
				this.showProgress.next(false);
				console.log(err);
				return null;
			});
	}

	/**
   * consults account
   * @param accountNumber : account number to be sonsulted 
   */
	public async consult(accountNumber: number): Promise<Array<any>> {
		this.showProgress.next(true);
		return await this.http
			.get(this.account.consult.concat(accountNumber.toLocaleString()))
			.toPromise()
			.then((data) => {
				this.showProgress.next(false);
				return data;
			})
			.catch((err) => {
				this.showProgress.next(false);
				console.log(err);
				return null;
			});
	}

	/**
   * return list of account details of a client..
   * @param clientId: id of the client.
   */
	public async accountsFor(clientId: number): Promise<Array<any>> {
		this.showProgress.next(true);
		return await this.http
			.get(this.account.clientAccounts.concat(clientId.toLocaleString()))
			.toPromise()
			.then((data) => {
				this.showProgress.next(false);
				return data;
			})
			.catch((err) => {
				this.showProgress.next(false);
				console.log(err);
				return null;
			});
	}
}
