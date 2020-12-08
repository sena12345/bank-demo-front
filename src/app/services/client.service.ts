import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { FormControl } from '@angular/forms';
import { MyUrls } from './../../utils';
@Injectable({
	providedIn: 'root'
})
export class ClientService extends MyUrls {
	constructor(private http: HttpClient) {
		super();
	}

	/**
	 * 
	 * @param formBody form data of client to be registered
	 */
	public async register(formBody: FormControl) {
		try {
			this.showProgress.next(true);
			const body: any = formBody.value;
			formBody.disable;
			this.http
				.post(this.client.register, body)
				.toPromise()
				.then(() => {
					formBody.reset();
					this.showProgress.next(false);
				})
				.catch((error) => {
					this.showProgress.next(false);
					console.log(error);
				});
		} catch (error) {
			this.showProgress.next(false);
			console.log(error);
		}
	}

	/**
	 * return list of all clients.
	 */
	public async getClients(): Promise<Array<any>> {
		this.showProgress.next(true);
		return await this.http
			.get(this.client.clients)
			.toPromise()
			.then((data) => {
				this.showProgress.next(false);
				return data;
			})
			.catch((error) => {
				this.showProgress.next(false);
				return error;
			});
	}
}
