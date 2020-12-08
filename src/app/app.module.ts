import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { MyUrls } from '../utils';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ClientsComponent } from './clients/clients.component';
import { AccountComponent } from './account/account.component';
import { OperationsComponent } from './operations/operations.component';
import { TransactionsComponent } from './transactions/transactions.component';

@NgModule({
	declarations: [ AppComponent, RegisterComponent, CreateAccountComponent, ClientsComponent, AccountComponent, OperationsComponent, TransactionsComponent ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MatProgressBarModule
	],
	providers: [ MyUrls ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
