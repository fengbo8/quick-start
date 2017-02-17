import { Component } from '@angular/core';

@Component({
  selector: 'jas-so',
  template: `<h2>Hello {{ add }} </h2>`
})

export class UserAddComponent  { add = '添加数据哦'; }
