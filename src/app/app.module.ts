import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { TableKeyPipe } from './pipes/table-key.pipe';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    TableKeyPipe,
    TableComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [TableKeyPipe],
})
export class AppModule { }
