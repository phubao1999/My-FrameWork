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
    AdminLayoutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    UserLayoutComponent,
    AdminLayoutComponent,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class SharedModule { }
