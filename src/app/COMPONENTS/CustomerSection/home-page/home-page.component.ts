import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/MODELS/Category.model';
import { CategoryServiceService } from 'src/app/SERVICES/AdminService/category-service.service';
import { CartService } from 'src/app/SERVICES/CustomerService/cart.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  categories: Category[] = [];
  category: Category= {
    id:0,
    categoryName:'',
    categoryImage:''
  }
  categoryList:Category[]=[];
  public totalItem: number = 0;
  constructor(public catservice:CategoryServiceService,private cartService:CartService) { }

  ngOnInit(): void {
    this.getAllCategories();
    this.cartService.getProducts()
      .subscribe(res => {
        this.totalItem = res.length;
      })
  }

  getAllCategories(){
    this.catservice.getCategories()
    .subscribe(
      res=>{
       this.categoryList=res;
      console.log(res);
     

    })
  }
  getCategoryByname(){
    this.catservice.getCategoryByName().subscribe(
      res=>
      {
        this.category;
        console.log(this.category);

      })
  }
 
  searchCategory='';

 
}
