import { Component, OnInit } from '@angular/core';
import { ClientService } from './../services/client.service';
import { AccountService } from './../services/account.service';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'app-clients',
	templateUrl: './clients.component.html',
	styleUrls: [ './clients.component.css' ]
})
export class ClientsComponent implements OnInit {
	public isShowProgress: boolean = false;
	public clients: Array<any> = new Array<any>();

	constructor(private clientService: ClientService, private accountService: AccountService) {
		this.clientService.showProgress$.subscribe((isShow) => {
			this.isShowProgress = isShow;
		});
	}

	ngOnInit(): void {
		this.clientService.getClients().then((data) => {
			this.clients = data;
		});
	}

	public createAccount(form: FormControl, clientId: number) {
		this.accountService.create(form, clientId);
	}
}
