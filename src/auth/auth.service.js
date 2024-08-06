const userRepository = require('/user.repository');
const userDto = require('/user.dto');

exports.handleKakaoLogin = async (profile) => {
    const userData = userDto.fromKakaoProfile(profile);
    const user = await userRepository.findOrCreate(userData);
    return user;
};