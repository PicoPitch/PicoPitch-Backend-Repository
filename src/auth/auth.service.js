// const userRepository = require('/user.repository');
// const userDto = require('/user.dto');

// exports.handleKakaoLogin = async (profile) => {
//     const userData = userDto.fromKakaoProfile(profile);
//     const user = await userRepository.findOrCreate(userData);
//     return user;
// };

// ES6 모듈 방식
import { userDao } from "../auth/auth.dao.js";
import axios from "axios";
import jwt from "jsonwebtoken";

const signInKakao = async (kakaoToken) => {
    const result = await axios.get("https://kapi.kakao.com/v2/user/me", {
        headers: {
            Authorization: `Bearer ${kakaoToken}`,
        },
    });
    const { data } = result;
    const kakaoId = data.id; //카카오 디벨롭퍼 이슈로 일단 id 밖에 못받음 ㅜㅜ


    if (!kakaoId) throw new Error("KEY_ERROR", 400);

    const user = await userDao.getUserById(kakaoId);

    if (!user) {
        await userDao.signUp(email, kakaoId);
    }

    return jwt.sign({ kakao_id: user[0].kakao_id }, process.env.TOKKENSECRET);
};

export { signInKakao };
