// const userRepository = require('/user.repository');
// const userDto = require('/user.dto');

// exports.handleKakaoLogin = async (profile) => {
//     const userData = userDto.fromKakaoProfile(profile);
//     const user = await userRepository.findOrCreate(userData);
//     return user;
// };

import { userDao } from "../auth/auth.dao.js";
import axios from "axios";
import jwt from "jsonwebtoken";

const signInKakao = async (kakaoToken) => {
    try {
        const result = await axios.get("https://kapi.kakao.com/v2/user/me", {
            headers: {
                Authorization: `Bearer ${kakaoToken}`,
            },
        });

        const { data } = result;
        console.log("Kakao API Response Data:", data);  // 응답 데이터 로그

        const kakaoId = data.id;
        const email = data.kakao_account?.email;

        if (!kakaoId) {
            throw new Error("카카오 ID를 가져올 수 없습니다.");
        }

        let user = await userDao.getUserById(kakaoId);
        console.log("User Data from DB:", user);  // DB에서 가져온 유저 데이터 로그

        if (!user || user.length === 0) {
            // 유저가 없을 경우 새로 회원가입 처리
            if (!email) {
                throw new Error("이메일 정보가 필요합니다.");
            }
            await userDao.signUp(email, kakaoId);
            user = await userDao.getUserById(kakaoId); // 다시 유저 정보 가져오기
            console.log("Newly Signed-up User Data from DB:", user);  // 로그 추가
        }

        return jwt.sign({ kakao_id: user[0].user_id }, process.env.TOKKENSECRET);
    } catch (err) {
        console.error("Error in signInKakao:", err);  // 오류 로그
        throw err;  // 상위로 다시 오류 던지기
    }
};

export const userService = {
    signInKakao
};

