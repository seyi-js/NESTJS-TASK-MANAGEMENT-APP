import { EntityRepository, Repository } from "typeorm";
import { User } from "./user.entity";


@EntityRepository(User)
export class UserRespository extends Repository<User> {

}