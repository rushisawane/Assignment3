import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { GetEmpComponent } from './get-emp/get-emp.component';
import { SetEmpComponent } from './set-emp/set-emp.component';

@NgModule({
  declarations: [
    AppComponent,
    GetEmpComponent,
    SetEmpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
