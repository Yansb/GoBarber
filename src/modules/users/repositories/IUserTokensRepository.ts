import { Secret } from 'jsonwebtoken';
import UserToken from '../infra/typeorm/entities/UserToken';

export default interface IUserTokensRepository {
  generate(user_id: Secret): Promise<UserToken>;
  findByToken(token: string): Promise<UserToken | undefined>;
}
