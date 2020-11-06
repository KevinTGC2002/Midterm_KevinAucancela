import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css']
})
export class GraphicsComponent implements OnInit {
  portfolioItems;
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.portfolioItems = this.cartService.getGraphicDesignPortfolio();
  }

}