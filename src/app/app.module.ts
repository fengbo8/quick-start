import { NgModule }  from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';

import { UserAddComponent } from './user-add/user-add.component';
import { UserListComponent, appRoutes } from './user-list/user-list.component';
import { UserRemoveComponent } from './user-remove/user-remove.component';
import { HighLightDirective } from './shared/high-light.directive';

@NgModule({//定义模块
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes), RouterModule.forRoot(appRoutes)],//引用浏览器模块
  declarations: [ AppComponent, UserListComponent, UserAddComponent, UserRemoveComponent, HighLightDirective ],//声明组件
  bootstrap:    [ AppComponent ]//启动组件
})
export class AppModule { } //输出自定义模块
