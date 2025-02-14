import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilterPainelComponent } from './filter-painel/filter-painel.component';
import { TransactionsPainelComponent } from './transactions-painel/transactions-painel.component';
import { ListPageComponent } from './list-page/list-page.component';
import { NewTransactionPageComponent } from './new-transaction-page/new-transaction-page.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { TitleOfPageComponent } from './title-of-page/title-of-page.component';

const routes: Routes =[

  { path: '', component: HomePageComponent},
  { path: 'list', component: ListPageComponent},
  { path: 'newTransaction', component: NewTransactionPageComponent},
  { path: '**', redirectTo: ''}

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterPainelComponent,
    TransactionsPainelComponent,
    ListPageComponent,
    NewTransactionPageComponent,
    HomePageComponent,
    TitleOfPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent],
  exports:[
    RouterModule
  ]
})
export class AppModule { }
