import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'models/interfaces/User';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

    async findAll(): Promise<User[]> {
        return await this.userModel.find();
    }

    async findOneOnEmail(email: string): Promise<User> {
        return await this.userModel.findOne({ email: email })
    }
    
    async findOneOnEmailWithoutPassword(email: string): Promise<User> {
        return await this.userModel.findOne({ email: email }).select('-password')
    }

    async findById(id: string): Promise<User> {
        return await this.userModel.findById(id).select('-password');
    }

    async createUser(firstName: string, lastName: string, email: string, password: string): Promise<User> {
        if (await this.findOneOnEmailWithoutPassword(email)) {
            throw new BadRequestException;
        }
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await this.userModel.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword,
            role: 'normal'
        })
        user.password = '';
        const userWithoutPassword = user;
        return userWithoutPassword
    }
}
