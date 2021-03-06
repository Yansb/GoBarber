import { injectable, inject } from 'tsyringe';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import User from '@modules/users/infra/typeorm/entities/User';
import { classToClass } from 'class-transformer';

interface IRequest {
  user_id: string;
}

@injectable()
export default class ListProvidersService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({ user_id }: IRequest): Promise<User[]> {
    let users = await this.cacheProvider.recover<User[]>(
      `providers-list:${user_id}`,
    );

    // para desabilitar o cache basta descomentar esse users e comentar o de cima
    // let users = null;

    if (!users) {
      users = await this.usersRepository.findAllProviers({
        except_user_id: user_id,
      });
    }

    await this.cacheProvider.save(
      `providers-list:${user_id}`,
      classToClass(users),
    );

    return users;
  }
}
