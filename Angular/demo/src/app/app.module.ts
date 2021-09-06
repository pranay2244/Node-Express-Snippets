import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BranchPipe } from './custom/branch.pipe';
import { CustomComponent } from './custom/custom.component';
import { PassPipe } from './custom/pass.pipe';
import { ApiComponent } from './api/api.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    CustomComponent,
    BranchPipe,
    PassPipe,
    ApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
	ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
