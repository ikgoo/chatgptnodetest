// const { OpenAIApi } = require("openai");
// require("dotenv").config();

// const configiration = new Configuration({
//     organization: 'org-d0YerYEljzYJcKGA85igRpCJ',
//     apiKey: process.env.OPENAI_SECRET_KEY,
// });
// const openai = new OpenAIApi(configiration)

// This code is for v4 of the openai package: npmjs.com/package/openai
const { OpenAI } = require("openai");
require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_SECRET_KEY,
});

async function GetEventInfo(userMsg) {
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                "role": "system",
                "content": "입력 받은 메시지가 이벤트인지 아닌지를 분류하는 작업과 이벤트의 경우 중 이벤트 기간이 있다면 이벤트 기간을 추출하여 정해진 양식으로 결과를 만들어 줘야해\n행사기간은 23-05-10 이런식으로 년도가 짧으면 2023으로 년도를 고청하여 처리해줘\n\n결과 양식:\n1. 행사 구분 : 행사(행사가 아님면 행사 아님으로 표현)\n2. 행사기간 : 2023-05-10 ~ 2034-05-10\n"
            },
            {
                "role": "user",
                "content": userMessage
            },
        ],
        temperature: 0,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    console.log(response.choices[0].message)
    return response;
}

var userMessage = "블루문! 내 목소리 들려?\n들린다면 내 소원을 들어줘!💙\n⠀\n5년만에 우리 앞에 나타난 슈퍼 블루문에\n소원빌고 경품 받아가자!🤩\n⠀\n🌕블루문이 하늘에 뜨는 순간을 캡처해서\n해시태그와 함께 업로드하면\n푸짐한 경품이 팡팡🎁\n⠀\n💌EVENT 1\n블루문이 하늘에 뜨는 순간을 캡처 후\n인스타그램 게시물에 공유하면 선물을 드립니다💝\n⠀\n✔ 이벤트 기간 : 8/30(수) ~ 9/8(금)\n✔ 참여 방법 :\n① 블루문이 하늘에 뜨는 순간을 순간 캡처\n② 해시태그와 함께 인스타그램 게시물에 업로드!\n- 해시태그: #블루문 #소원들들어줘 #CU이벤트\n✔ 당첨자발표 : 9/15(금)\n✔경품 : 달한잔할래요 주병세트 (5명)\n인테리어 무드등 (7명)\nCU모바일상품권 5,000원 (15명)\n⠀\n💌EVENT 2\n주변에 같이 블루문 보러 가고 싶은 사람이 있으신가요?\n그 사람을 태그하면 추첨을 통해 선물을 드려요✨\n⠀\n✔CU 인스타그램 팔로우는 필수!\n✔기간 :8/30(수) ~ 9/8(금)\n✔당첨자 발표 : 9/15(금)게시물 댓글로 발표\n✔경품 : CU모바일상품권 3천원권 (10명)\n⠀\n@아, 혹시 시간되면 나랑 블루문 보러갈래..?💙\n⠀\n#블루문 #슈퍼문 #슈퍼블루문 #보름달\n#이벤트 #캡처이벤트 #경품이벤트\n#댓글이벤트 #CU #씨유 #당신의_좋은친구_CU"
GetEventInfo(userMessage)
