export const reviewResponseDTO = (review)=>{
    return{
        "article" : review.article,
        "score" : review.score
    };
}
export const missionResponseDTO = (mission)=>{
    return{
        "reward" : mission.reward,
        "mission_spec" : mission.mission_spec
    };
}
//요청하는 날짜의 값 년도월일
// store.dto.js
// 리뷰요청
export const previewReviewResponseDTO = (data) => {

    const reviews = [];

    for (let i = 0; i < data.length; i++) {
        reviews.push({
            "user_name": data[i].user_name,
            "rate": data[i].rate,
            "review_body": data[i].review_content,
            "create_date": formatDate(data[i].created_at)
        })
    }
    return {"reviewData": reviews, "cursorId": data[data.length-1].review_id};
}

// 완료미션

export const completeMissionDTO = (data) => {
    const missions = [] ;
    for(let i=0; i< data.length; i++){
        mission.push({
            "points" : data[i].reward,
            "store": store_id,
            "mission_spec": data[i].mission_spec
            // 리뷰남기기에 대한 클릭
        })
    }
    return {"reviewData": missions, "cursorId": data[data.length-1].mission_id};
}


const formatDate = (date) => {
    return new Intl.DateTimeFormat('kr').format(new Date(date)).replaceAll(" ", "").slice(0, -1);
}
