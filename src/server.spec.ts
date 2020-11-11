import { User } from '@/models/User';

describe('Server.ts', () => {
  it('should test', () => {
    const user = new User();
    user.name = 'Teste';
    expect(user.name).toEqual('Teste');
  });
});
