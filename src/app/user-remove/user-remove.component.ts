import { Component } from '@angular/core';

@Component({
  selector: 'jas-re',
  template: `<h4>hello {{ remove }}</h4>`
})

export class UserRemoveComponent { remove = '减少数据哦'; }
