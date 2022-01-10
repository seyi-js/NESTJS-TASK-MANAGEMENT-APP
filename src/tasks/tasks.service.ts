import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task.status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
@Injectable()
export class TasksService {

  // async getAllTasks():Promise<Task[]>{
  //   return this.tasks;
  // };


  // async createTask(createTaskDto:CreateTaskDto):Promise<Task>{
  //   const task:Task ={
  //       id:uuid(),
  //       title:createTaskDto.title,
  //       description:createTaskDto.description,
  //       status:TaskStatus.OPEN
  //   }


  //   this.tasks.push(task)


  //   return task;
  // };


  // async getTaskById(id:string):Promise<Task>{

  //       const found = this.tasks.find((task)=> task.id === id);

  //       if(!found) throw new NotFoundException(null,'task not found.')


  //       return found;
  // };

  // async deleteATask(id:string):Promise<string>{

  //     this.tasks =  this.tasks.filter((task)=> task.id !== id);

  //     return 'Deleted'
  // }

  // async updateTask(id:string,status:TaskStatus):Promise<Task>{
  //     const task = await this.getTaskById(id)

  //     task.status = status;

  //     return task;
  // }

  // async getTaskWithFilters(filterDto:GetTasksFilterDto):Promise<Task[]>{
  //   const {status, search} = filterDto;

  //   let tasks = await this.getAllTasks();
  //   if(status){

  //     tasks =  tasks.filter((task)=> task.status === status)
  //   }

  //   if(search){
  //     tasks = tasks.filter((task)=> {
  //       if(task.title.includes(search) || task.description.includes(search)) return true;
  //       return false;
  //     })
  //   }

  //   return tasks;
  // }
}
