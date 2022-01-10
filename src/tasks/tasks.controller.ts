import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { UpdateTaskStatus } from './dto/update-task-status.dto';
import { TaskStatus } from './task.status.enum';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService:TasksService){}

    // @Get()
    // async getTasks(@Query() filterDto:GetTasksFilterDto):Promise<Task[]>{

    //     if(Object.keys(filterDto).length){

    //         return this.tasksService.getTaskWithFilters(filterDto)

    //     }else{
    //         return this.tasksService.getAllTasks()
    //     }
        
    // }


    // @Post()
    // async createTask(@Body() task:CreateTaskDto):Promise<Task>{
    //     return this.tasksService.createTask(task)
    // }


    // @Get('/:id')
    // async getTaskById(@Param('id') id:string):Promise<Task>{
    //     return this.tasksService.getTaskById(id)
    // }

    // @Delete('/:id')
    // async deleteTaskById(@Param('id') id:string):Promise<string>{
    //     return this.tasksService.deleteATask(id)
    // }

    // @Patch('/:id/status')
    // async updateTask(@Param('id') id:string, @Body() updateTaskStatusDto:UpdateTaskStatus):Promise<Task>{

    //     const {status} = updateTaskStatusDto;
    //     return this.tasksService.updateTask(id, status)
    // }
}
