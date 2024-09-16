import { Routes } from '@angular/router';
import { ProductAppComponent } from './product-app/product-app.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersComponent } from './orders/orders.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { DetailsComponent } from './details/details.component';
import { HomePageComponent } from './home-page/home-page.component';


export const routes: Routes = [
  {
    path: "",
    component:HomePageComponent,
    title: 'Home page',
  },
  {
    path:"product-app",
    component: ProductAppComponent,
    title: 'Product App'
  },
  {
    path:"products/:id",
    component: DetailsComponent,
    title: 'Product Details page',
  },
  {
    path:"login",
    component: LoginComponent,
    title: 'Login page',

  },
  {
    path:"register",
    component: RegisterComponent,
    title: 'Register page',
  },
  {
    path:"cart",
    component: CartComponent,
    title: 'Cart page',
  },
  {
    path:"checkout",
    component: CheckoutComponent,
    title: 'Checkout page',
  },
  
  {
    path:"orders",
    component: OrdersComponent,
    title: 'Orders page',
  },
  {
    path:"**",
    component: NotFoundPageComponent,
    title: 'Not Found page',
  }
];
