import { SelectDropdownComponent } from './components/select-dropdown/select-dropdown.component';
import { ModelSearchComponent } from './components/model-search/model-search.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { RouterModule } from '@angular/router';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserLayoutComponent,
    AdminLayoutComponent,
    DataTableComponent,
    ModelSearchComponent,
    SelectDropdownComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    UserLayoutComponent,
    AdminLayoutComponent,
    DataTableComponent,
    ModelSearchComponent,
    SelectDropdownComponent,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class SharedModule { }
