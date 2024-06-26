import PasswordDAO from '../DAO/passwordDAO';
import TokenDAO from '../DAO/tokenDAO';
import UserDAO from '../DAO/userDAO';
import applicationException from '../service/applicationException';
import sha1 from 'sha1';

function create(context) {

  function hashString(password) {
    return sha1(password);
  }

  async function authenticate(name, password) {
    let userData;
    const user = await UserDAO.getByEmailOrName(name);
    if (!user) {
      throw applicationException.new(applicationException.UNAUTHORIZED, 'User with that email does not exist');
    }
    userData = await user;
    await PasswordDAO.authorize(user.id, hashString(password));
    const token = await TokenDAO.create(userData);
    return getToken(token);
  }

  function getToken(token) {
    return { token: token.value };
  }

  async function createNewOrUpdate(userData) {
    const user = await UserDAO.createNewOrUpdate(userData);
    if (await userData.password) {
      return await PasswordDAO.createOrUpdate({ userId: user.id, password: hashString(userData.password) });
    } else {
      return user;
    }
  }

  async function update(userId, userData) {
    if (userData.newPassword) {
      await PasswordDAO.createOrUpdate({ userId: userId, password: hashString(userData.newPassword) });
    }
    return await UserDAO.createNewOrUpdate({ ...userData, id: userId });
  }

  async function get(id) {
    return await UserDAO.get(id);
  }

  async function removeHashSession(userId) {
    return await TokenDAO.remove(userId);
  }

  return {
    authenticate: authenticate,
    createNewOrUpdate: createNewOrUpdate,
    update: update,
    get: get,
    removeHashSession: removeHashSession
  };
}

export default {
  create: create
};
