import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weathersearch',
  templateUrl: './weathersearch.component.html',
  styleUrls: ['./weathersearch.component.css']
})
export class WeathersearchComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }


  ngOnInit() {
    this.keywordUrl;
    console.log(this.keywordUrl);
  }

  public keywordUrl = this.route.snapshot.paramMap.get('keyword');

  search(keyword: string): void{
    
    const url = `search/${keyword}`;
    // this.router.navigate(['search', keyword]);
     this.redirectTo(url);
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));}
}
