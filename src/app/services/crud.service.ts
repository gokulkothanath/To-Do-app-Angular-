import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../model/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  serviceURL:string
  constructor(private http:HttpClient) {
             this.serviceURL='http://localhost:3000/tasks'
   }
   addTask(task:Task):Observable<Task>{
       return this.http.post<Task>('/tasks',task)
   }
   getTasks():Observable<Task[]>{
    return this.http.get<Task[]>('/tasks')
   }
   deleteTask(task:Task):Observable<Task>{
    return this.http.delete<Task>('/tasks/'+task.id)
   }
   editTask(task:Task):Observable<Task>{
    return this.http.put<Task>('/tasks/'+task.id,task)
   }

}
