import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task.status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskRepository } from './tasks.respository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
@Injectable()
export class TasksService {

  constructor(
    @InjectRepository(TaskRepository)
    private tasksRepository:TaskRepository,
  ){}

  async getTasks(filterDto:GetTasksFilterDto):Promise<Task[]>{

    const {status,search} = filterDto

    const query = this.tasksRepository.createQueryBuilder('task');


    if(status) query.andWhere('task.status = :status',{status})

    if(search) query.andWhere(
      'LOWER(task.title) LIKE LOWER(:search) OR LOWER(task.description) LIKE LOWER(:search)', {search : `%${search}%`}
    )

    const tasks = await query.getMany()

     if(Object.keys(filterDto).length){

     }


     return tasks;
  };


  async createTask(createTaskDto:CreateTaskDto):Promise<Task>{

    const {title, description} = createTaskDto
    

    const task = this.tasksRepository.create({
      title,
      description,
      status:TaskStatus.OPEN
    });

    await this.tasksRepository.save(task);

    


    return task;
  };


  async getTaskById(id:string):Promise<Task>{

        const found = await this.tasksRepository.findOne(id);

        if(!found) throw new NotFoundException(null,'task not found.')


        return found;
  };

  async deleteATask(id:string):Promise<string>{

      const result = await this.tasksRepository.delete(id);

      if(result.affected > 0) return 'Deleted';


      throw new NotFoundException(null, 'task not found')

      
  }

  async updateTask(id:string,status:TaskStatus):Promise<Task>{
      const task = await this.getTaskById(id)

      task.status = status;

      this.tasksRepository.save(task);

      return task;
  }

  
}
