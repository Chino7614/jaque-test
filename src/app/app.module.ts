import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { TableKeyPipe } from './pipes/table-key.pipe';
import { TableComponent } from './components/table/table.component';
import { ModalComponent } from './components/modal/modal.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FiltersComponent } from './components/filters/filters.component';
import { SearchPipe } from './pipes/search.pipe';
import { OrderPipe } from './pipes/order.pipe';
import { StatusPipe } from './pipes/status.pipe';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    TableKeyPipe,
    TableComponent,
    ModalComponent,
    FiltersComponent,
    SearchPipe,
    OrderPipe,
    StatusPipe,
    HeaderComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  providers: [SearchPipe, OrderPipe, StatusPipe],
  bootstrap: [AppComponent],
  exports: [TableKeyPipe, SearchPipe, OrderPipe, StatusPipe],
})
export class AppModule { }
