import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Task } from 'src/app/model/task';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  taskObj:Task=new Task()
  taskArray:Task[]=[];
  addTaskValue:string='';
  editTaskValue:string = '';
  constructor(private crudService:CrudService){

  }
ngOnInit(): void {
  // this.taskObj=new Task();
   this.taskArray=[]
  this.editTaskValue = '';
  this.getAllTask()
}
getAllTask(){
 this.crudService.getTasks().subscribe(res=>{
  this.taskArray=res
 })
}
addTask(){
  this.taskObj.task_name=this.addTaskValue
  this.taskObj.id= Math.floor(Math.random() * 51);
  this.crudService.addTask(this.taskObj).subscribe(res=>{
    this.ngOnInit();
    this.addTaskValue=''
  })
}
editTask(){
  this.taskObj.task_name = this.editTaskValue;
  this.crudService.editTask(this.taskObj).subscribe(res=>{
    this.ngOnInit()
  })
}
deleteTask(etask:Task){
  this.crudService.deleteTask(etask).subscribe(res=>{this.ngOnInit()})
}
}
