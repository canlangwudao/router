import { CanDeactivate} from '@angular/router';
import {ProductComponent} from '../product/product.component';

export class LogoutGuard implements CanDeactivate<ProductComponent> {
  canDeactivate(component: ProductComponent) {
     return window.confirm('您未保存，确认离开吗?');
  }
}
