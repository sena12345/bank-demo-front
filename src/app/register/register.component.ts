import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ClientService } from './../services/client.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: [ './register.component.css' ]
})
export class RegisterComponent implements OnInit {
	public isShowProgress: boolean = false;
	constructor(private clientService: ClientService) {}

	ngOnInit(): void {
		this.clientService.showProgress$.subscribe((isShowing) => {
			this.isShowProgress = isShowing;
		});
	}

	/***
	 * function save new clients data..
	 * @param formData client data from form
	 */
	public async register(formData: FormControl) {
		await this.clientService.register(formData);
	}
}
