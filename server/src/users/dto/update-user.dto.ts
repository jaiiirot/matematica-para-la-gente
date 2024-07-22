import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { RolesTypes } from '../entities/user.entity';
import { IsString, IsEmail, IsNotEmpty, IsIn } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    @IsIn([RolesTypes.ADMIN, RolesTypes.USER])
    role: RolesTypes;
}
