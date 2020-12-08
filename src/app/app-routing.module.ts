import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ClientsComponent } from './clients/clients.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { OperationsComponent } from './operations/operations.component';
import { RegisterComponent } from './register/register.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
	{ path: '', component: RegisterComponent },
	{ path: 'clients', component: ClientsComponent },
	{ path: 'create/:id', component: CreateAccountComponent },
	{ path: 'accounts', component: AccountComponent },
	{ path: 'transaction/:id', component: OperationsComponent },
	{ path: 'transactions', component: TransactionsComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],

	exports: [ RouterModule ]
})
export class AppRoutingModule {}
