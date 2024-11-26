import { db } from "@/server/db";
import { type RegisterRequest } from "@/server/model/auth.model";
import { type UpdateUserRequest } from "@/server/model/user.model";
import { Role, type User } from "@prisma/client";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

export const findUsers = async (): Promise<User[]> => {
  const users = await db.user.findMany();

  return users;
};

export const findUserByEmail = async (email: string): Promise<User | null> => {
  const user = await db.user.findUnique({ where: { email } });

  return user;
};

export const findUserById = async (id: string): Promise<User | null> => {
  const user = await db.user.findUnique({ where: { id } });

  return user;
};

export const countUserByEmail = async (email: string): Promise<number> => {
  const userCount = await db.user.count({ where: { email } });

  return userCount;
};

export const countUserById = async (id: string): Promise<number> => {
  const userCount = await db.user.count({ where: { id } });

  return userCount;
};

export const insertUser = async (data: RegisterRequest): Promise<User> => {
  const id = uuid();

  const passwordHashed = await bcrypt.hash(data.password, 10);

  const username = `user-${id.slice(0, 8)}`;

  const newUserData = {
    id,
    name: data.name,
    username,
    email: data.email,
    password: passwordHashed,
    role: Role.USER
  };

  const user = await db.user.create({
    data: newUserData,
  });

  return user;
};

export const updateUser = async (id: string, data: UpdateUserRequest): Promise<User> => {
  const oldUserData = await findUserById(id)

  let passwordHashed

  if (data.password) {
    passwordHashed = await bcrypt.hash(data.password, 10);
  }

  const updateUserData = {
    name: data.name ?? oldUserData?.name,
    username: data.username ?? oldUserData?.username,
    email: data.email ?? oldUserData?.email,
    role: data.role as Role ?? oldUserData?.role,
    password: passwordHashed ?? oldUserData?.password
  }

  const user = await db.user.update({ where: { id }, data: updateUserData })

  return user
}

export const destroyUser = async (id: string): Promise<User> => {
  const user = await db.user.delete({ where: { id } })

  return user
}