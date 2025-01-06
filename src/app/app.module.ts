import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { TestInterceptor } from 'src/test.interceptor';
import { ChildComponent } from './childcomponent/child/child.component';
import { ParentComponent } from './parent/parent/parent.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:TestInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
