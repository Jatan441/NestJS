import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    private  users = [
        {
            "id" : 1,
            "name" : "Jatan",
            "email" : "jatan@gmail.com",
            "role" : "INTERN"
        },
        {
            "id" : 2,
            "name" : "abc",
            "email" : "abc@gmail.com",
            "role" : "INTERN"
        },
        {
            "id" : 3,
            "name" : "xyz",
            "email" : "xyz@gmail.com",
            "role" : "ADMIN"
        },
        {
            "id" : 4,
            "name" : "tony",
            "email" : "tony@gmail.com",
            "role" : "ADMIN"
        },
        {
            "id" : 5,
            "name" : "steve",
            "email" : "steve@gmail.com",
            "role" : "ENGINEER"
        },
    
    ]

    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN'){
        if(role){
            const roleArray =  this.users.filter( user => user.role === role)
            if(roleArray.length === 0 )
            throw new NotFoundException("User not found")
        return roleArray
        }


        return this.users
    }

    findOne(id : number){
        const user = this.users.find(user  => user.id === id)
        if(!user)  throw new NotFoundException("User not found")
        return user
    }

    create(createUserDto: CreateUserDto){
        const usersByHighestId = [...this.users].sort((a,b)=> b.id - a.id)
        const newUser  ={
            id : usersByHighestId[0].id + 1,
            ...createUserDto
        }
        this.users.push(newUser)
        return newUser
        
    }

    update(id: number, updatedUserDto : UpdateUserDto){
        this.users = this.users.map(user =>{
            if(user.id === id){

                return{...user , ...updatedUserDto}
            }

           

            return user
        })

        return this.findOne(id)

    }


    delete(id : number){
        const removedUser  = this.findOne(id)
        
        this.users = this.users.filter(user => user.id !== id)

        return removedUser
    }

}
