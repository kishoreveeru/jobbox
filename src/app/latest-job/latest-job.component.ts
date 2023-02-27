import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import * as _ from "lodash";

@Component({
  selector: 'app-latest-job',
  templateUrl: './latest-job.component.html',
  styleUrls: ['./latest-job.component.css']
})
export class LatestJobComponent implements OnInit {

  constructor(private http: HttpClient) { 
    this.getLatestJobs()
  }

  latest_jobs:any = [];
  grouped_latest_jobs:any = [];
  selected_jobs:any = [];

  ngOnInit(): void {
  }


  getLatestJobs(){
    this.http.get(environment.appUrl+"api/job/categories/")
    .subscribe((response:any) => {
        this.latest_jobs = response.job_categories_list;
        this.grouped_latest_jobs = _.groupBy(this.latest_jobs,'category_name');
        this.selected_jobs = Object.values(this.grouped_latest_jobs)[0];
    })
  }

  getJobs(obj:any)
  {
    console.log(obj);
    this.selected_jobs = obj.value;
  }

}
