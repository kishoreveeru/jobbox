import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-browse-by-category',
  templateUrl: './browse-by-category.component.html',
  styleUrls: ['./browse-by-category.component.scss']
})
export class BrowseByCategoryComponent implements OnInit {
	title = 'NgxCarouselLibrary'
	public innerWidth: any
	products: any
	products2: any
	products3: any
	options1: any
	options2: any
	options3: any
  constructor(private http: HttpClient) { 
   // this.getJobCategeories();
   this.options1 = {
    animation: {
      animationClass: 'transition',
      animationTime: 500,
    },
    swipe: {
      swipeable: true,
      swipeVelocity: .004,
    },
    drag: {
      draggable: true,
      dragMany: true,
    },
    arrows: true,
    infinite: true,
    autoplay: {
      enabled: false,
      direction: 'right',
      delay: 5000,
      stopOnHover: true,
      speed: 6000,
    },
    breakpoints: [
      {
        width: 768,
        number: 2,
      },
      {
        width: 991,
        number: 3,
      },
      {
        width: 9999,
        number: 4,
      },
    ],
  }
 
  // this.products.push({
  //   title: 'Marketing & Sales',
  //   url: 'https://url',
  //   regularPrice: '150 Jobs Available',
  //   salePrice: '150 Jobs Available',
  //   image: `assets/imgs/page/homepage1/marketing.svg`,
  // })
  // this.products.push({
  //   title: 'Marketing & Sales',
  //   url: 'https://url',
  //   regularPrice: '150 Jobs Available',
  //   salePrice: '150 Jobs Available',
  //   image: `assets/imgs/page/homepage1/marketing.svg`,
  // })
  // this.products.push({
  //   title: 'Marketing & Sales',
  //   url: 'https://url',
  //   regularPrice: '150 Jobs Available',
  //   salePrice: '150 Jobs Available',
  //   image: `assets/imgs/page/homepage1/marketing.svg`,
  // })
  // this.products.push({
  //   title: 'Marketing & Sales',
  //   url: 'https://url',
  //   regularPrice: '150 Jobs Available',
  //   image: `assets/imgs/page/homepage1/marketing.svg`,
  // })
  // this.products.push({
  //   title: 'Marketing & Sales',
  //   url: 'https://url',
  //   regularPrice: '150 Jobs Available',
  //   image: `assets/imgs/page/homepage1/marketing.svg`,
  // })
  // this.products.push({
  //   title: 'Marketing & Sales',
  //   url: 'https://url',
  //   regularPrice: '150 Jobs Available',
  //   salePrice: '150 Jobs Available',
  //   image: `assets/imgs/page/homepage1/marketing.svg`,
  // })
  // this.products.push({
  //   title: 'Marketing & Sales',
  //   url: 'https://url',
  //   regularPrice: '150 Jobs Available',
  //   salePrice: '150 Jobs Available',
  //   image: `assets/imgs/page/homepage1/marketing.svg`,
  // })
  // this.products.push({
  //   title: 'Marketing & Sales',
  //   url: 'https://url',
  //   regularPrice: '150 Jobs Available',
  //   image: `assets/imgs/page/homepage1/marketing.svg`,
  // })
  // this.products.push({
  //   title: 'Marketing & Sales',
  //   url: 'https://url',
  //   regularPrice: '150 Jobs Available',
  //   image: `assets/imgs/page/homepage1/marketing.svg`,
  // })
  
  }

  job_categories_list:any = [];

 async ngOnInit() {
   await this.getJobCategeories()
  }
  click(i:any) {
    alert(`${i}`);
  }

  getJobCategeories(){
    this.products = [];
    this.http.get(environment.appUrl+"api/job/categories/count/")
    .subscribe((response:any) => {
        this.job_categories_list = response.job_categories_list;
        console.log(this.job_categories_list);
        this.job_categories_list.forEach((jl:any) => {
          this.products.push({
            title: jl.category__name,
            url: 'https://url',
            regularPrice: jl.job_status__count,
            salePrice: '150 Jobs Available',
            image: `assets/imgs/page/homepage1/marketing.svg`,
          });
        });
    });
  }


}
