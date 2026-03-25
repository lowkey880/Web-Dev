import { Component, Input, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product!: Product;
  
  likes: number = 0;
  Like(): void{
      this.likes++;
  }

  total: number = ProductCardComponent.length;

  Delete(): void{
    this.total--;
  }
}
