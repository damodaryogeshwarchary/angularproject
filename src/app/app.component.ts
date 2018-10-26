import { Component,Input, HostBinding, OnInit } from '@angular/core';
import { OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked,
     AfterViewInit, AfterViewChecked, OnDestroy{
  title = 'app';
  
  constructor(){
    console.log("hyy this is damodar");
  }
  ngOnInit() {
    console.log("ngoninit");
  }
  ngOnChanges() {
    console.log("ngOnChanges");
  }
  ngDoCheck() {
    console.log("ngDoCheck");
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");        
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }
  ngOnDestroy() {
    console.log("ngOnDestroy");
  }
  // @HostBinding('click',['$event'])
  // onhostclick(event: Event){
  //   alert("hello");
  // }

  changingCase: any[] = [
    { upper: "damu", lower: "YoGi"},
    { upper: "Chary", lower: "VISHWA"}
  ];

  sorting: any[] = [
    { ascend: 4, descend: 30},
    { ascend: 30, descend: 88},
    { ascend: 5, descend: 7},
    { ascend: 65, descend: 100},
    { ascend: 34, descend: 61}
  ];
  
  acd: any[] = [9,8,7,6,5,4,3];
  dcd: any[] = [1,2,3,4,5,6,7,8];

  hl: number = 200;

  // hiorlo: string = "is lower";
}

  