import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discountPrice',
  standalone: true,
})
export class DiscountPricePipe implements PipeTransform {
  transform(price: number, discountPercentage?: number): string {
    if (!discountPercentage || discountPercentage === 0) {
      return `$${price.toFixed(2)}`;
    }

    const discountedPrice = price - (price * discountPercentage) / 100;

    // Return the price before and after the discount
    return `Original: $${price.toFixed(
      2
    )} | Discounted: $${discountedPrice.toFixed(2)}`;
  }
}
