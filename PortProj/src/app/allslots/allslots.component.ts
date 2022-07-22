import { Component, OnInit } from '@angular/core';
import { PortService } from '../port.service';
@Component({
  selector: 'app-allslots',
  templateUrl: './allslots.component.html',
  styleUrls: ['./allslots.component.scss']
})
export class AllslotsComponent implements OnInit {
  public ports:any;
  constructor(private service:PortService) { }
  ngOnInit(): void { this.getports();
  }
private getports():void{


  this.service.getPorts().subscribe(result=>{this.ports=result;});

}}
