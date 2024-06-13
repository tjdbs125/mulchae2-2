const questions = [
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 1,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},  //true들어간게 정답임
            { text: "4", correct: false},
            { text: "5", correct: true},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2v39HOhHvGI-13S2xfJRzXwbh3lprcXXxAmNdYVeWOspEjOOrVIzPQiT7q6gQnDhyphenhyphenpFDNb0YaegiTSKZ6s0rLmaf2r2LI_9E67TSP6Q2HQwiujr1O1TPMuZZhKH5EaalAnkAaRyC-nafssvof0stHbLxNEkEOpoRz4xJ4kCpuPYuDpRiiK8s-D0hovwkH/s320/KakaoTalk_20240531_152224443.jpg", //문제 이미지니까 여기만 바꿔
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh3TpwfTRk8JiiRi5HZVE7SALngOIy4urqjsAJzvEmXzJ_VJyPjcn90pV0T6Z90SF7JACLkfnTkd5GfFvF4I1zkeZY4GWt8VfV_aozOpFejj0UlOLRHqW7HoqSaX4uWRkhJXumnYox34MUJN9rzKe4ggFFnnF4oFPjimoV_VnZ3DB8zFoj3XPZC37b4GOOB/s320/KakaoTalk_20240614_010058107.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 2,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: true},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg35SCSn6NSwij5Raa5I2GL24j-yQnSLc_dmy-8Ox_ZFdDmvKZcmlnp-vv-SHauM1Uk2HXvnVpPl0SZx0fMsVjNVM9BB_SK-9eQlO2F6ABcT8p5U7ywt4ylh4xkEAivtO167uAKya009oIL7dzF23sIc7nM1N_07IGpV8ybAil1nQQOoUFHLezfuxXJOh3A/s320/KakaoTalk_20240531_152224443_01.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgAeobgc5zDpHQTCEkdsYmsM5rop0kIw0W5zN6ZM31g7hoPBqo7E3EwhokgtufSvCIuGnMaKsBs6L8yb7vhzwdEB_dAPsRVx9c-vS9WGAM394WL2-OTsU34AtOl9HkIOxzdYZ5g2g93lmQjq1xRr4fchdSS9T7S7HXMPNOZacLiGtruTwTB7hmKlYT4QsXS/s320/KakaoTalk_20240614_010058107_01.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 3,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: true},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhgtHoi1juKo2nqtXKcsQ6eY6D3-rXflWL62kLsZRIb3QKfPCy972WB7akYaBkcTGcU_t-6W-EQRHV9c9CQ-CtPklBGPT2dtXAptd986ZkYzKLR0xJq0tlKmCq8SlD1yH9fC_z2O4FB4y0vT0IgJNWsqXFP7MaFpY2Dz6H16IRUIVcHpRLFsWDanXGaQr7g/s320/KakaoTalk_20240531_152224443_02.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjc7nsUV1qf4_bArzwRA-F56k8W7uCjSWiiGR65a_-qx4UtMofP46Lm-fxPDabP9_E-5iebVTtK55cBRITiARQYH91097Mubofubfr7YhJw0t6gBIbCQcBQpmnnfNsDBGRFuce0ZTJ7k-2LgP5hp5vMyPSWosDQEr4TTMS75o8RqyWExzQoZpnzN6hw_yax/s320/KakaoTalk_20240614_010058107_02.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 4,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: true},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhMW_Osiq9yqE-osFU49i1OAPWtyimnRSMQdHUqDPrOjc-d4jfAybTI4kENIHyht4hXNutpU2wQA638Za9HsDBEs9U9veT7BX_Ni6UWZV_4cdl_IGOPbxo3HHfuTyXe1QGrRekPpcMYOfXD59dHIeNUdK6tfxI_fNxJ1egDSJk-H4mApb6Ovegl3Gox468F/s320/KakaoTalk_20240531_152224443_03.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhBD_9CH5kP3fa7edbiCXQq2DE2jbIGw2Z9V7ZKTi4Io2otTQtyfQw2_7HxmgNjyN_PRJt8VYxZP9aK_t5hKy87OsUlhxQt-YpWh7vowxDVnx8weh3-OnKV9b5mkJYPhuHVLpIJTZTFAEraaxD8LUglMboj1fXA8h3T9lTRmplJ98EAKMmLAEygk4LxMSWf/s320/KakaoTalk_20240614_010058107_03.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 5,
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi7gCOzMeL4LFj14L9Jmb8a6kiesm_qqAXsNJUtw4YsAz8eVP5sunHoECe84QWbNONO0BeTSY3azmOCGgN7AkaBO0metz7A046-htUGvRfHzxkIKmzRC0RjIsd9oGqpFIdHBVjdDKytv9juNZbRdsicKNKq7wiXPIhbA4b8mTsx_sLuJRHP3V2Vunfw6m-n/s320/KakaoTalk_20240531_152224443_04.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhGFzAvCUZcXfYTxOVDOmCD6jDhXd_uvqZdeNINmqMl1CxCVtizNNeXfFKHvkyFhyphenhyphen8MOU5OwbFebbyL9uTkZBrxtPZBcjOPUKQLJrdjzI21x2JpM6SXT8xSFkwzT140b3_3NAhE5NkE_6qvfhf5oS-yIrRP9K3rv3JzpkvoFq-M0rIT4DrHnznMJM9YdDP2/s320/KakaoTalk_20240614_010058107_04.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 6,
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjz8EaHfRnySUn385c7ejZgVQmnXEBVJoOwbMcpf1tO4-ctW6gMELJ8q3RSgDvM8Mypda93bL9I2iIXu4QGJx-At2FejmOgN5ui11sf5L58JKqxnTlc9gkrKQ6zS0pG7HSSJSIg36WlENt9QJsk3w9bPm3EFSJe9L97euwESYfxZT7gFFExyQYX0YsYzS_f/s320/KakaoTalk_20240531_152224443_05.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUS0cbmUHpHFT9tvPl0g70ElU7saIKGU_wNF4LX71rgfjJtXcVw2uf0ajm0IMBuzQA1uuQ3mDurtCNS-TEhEBcS21s863W08wldf4fpQyWwN4IuELnTZhfXYvxvpudkBIUapWPiS-wM9l7jj0RCGbmT0aKLgx2DepLfzXO8cBJy629ZUjcd3MSLGZlHZ6Z/s320/KakaoTalk_20240614_010058107_05.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 7,
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-5c4JBOegjLMH2gtLQkLviFl9mD5pqjD0yZPlo18IsqlmVXNO2zFVT47PMWigSOHl7Uq_U591EeLMQcmherT4ZBNRbwcsvVBk8yUyGT1MW4XY1eUgkBL3YtUl9CAPIUT636t4c8wpGxcopNpQ2eCcj8hQ1JxW6gGj_e1XWuQvN2mC_GQ_DgLjTZKK6ogO/s320/KakaoTalk_20240531_152224443_06.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg42q4boC0iIxh4UwGqmAd35wZRlNZOyb5E0_QmrWyVo1UBljy1tIe0EQdmfslkAXZrp4RmRevLMmeqUa775Wc4vJjcoQC1hysSGkBXwHW0ruv5IWWtyCTp9kvNuYm0_Ttz3CvwSxy_DLlV_i899RzulMN4QDgPPol4ZiueSfkFcIUoXjpcIa6_AFVohxxB/s320/KakaoTalk_20240614_010058107_06.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 8,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: true},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhaDf9JwDWkJnCLbRkbvJevZHM4g5MQXimnsHu7Y8TA5pJEmnjRDYbzwjJHyIZdH4Wj-lWs-H3Or5tnvorNqxWbuZL-TvWlWWgsqAYJcamA1fx2B5ObC_FLvBJhYH-IrpJK3tj70I8b4HFfwwPYxDNJhVl1XteU6iGqgAqTWqeRCnbKjL5vi_bULe7g0o6m/s320/KakaoTalk_20240531_152224443_07.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhI3Lg6I3Z51R-YLAP-9mOkDpctGQ8FTvpXvCX4ABLYNp17BlpE788jmwr52ERYeIB-7qbl7E3F60apQJH2f7H-qvomRdXBMg0rmSFYyY3AjacFnQbubkCRzXddkb9tpGZ0OFZS4xKLdCA_jOgqiCV5HtyNCzBQB3z4qhUDBS2iMNz_W42yIaiFzLn9D-Pt/s320/KakaoTalk_20240614_010058107_07.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 9,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: true},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgCuU9D3EEgrKfvsiMq227ZKhT7mDnSWQ0uCgMmqADqHIxUn6XoouZd313JmKIPnYhd3Yr8SbRvVKQiqyORTGoLSZDgXXPVrZfEQdqYIQ5HMjcusD0KnGxy3cm-nH6o7YvwoA10PTpq-8Uz6xEQF2BUdV7Vz_qm5Vrfw99K_z0JbbJg751Fuq8YuwGs7_8S/s320/KakaoTalk_20240531_152224443_08.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi3UPzXyD9478WDbgrcHrw0VhCVexX1HhWcr7hdj0a3vGWrrBiNXY3ybijIXCUzC6naY_RtYdPLjDx7riIUAFW37-SyhM6IPr7JZbZcNzYNxCiZ_F2Ozq8R23ZdjxLsa1rHdejHBTXv4WWx5xkBrYPNTlUp2HsX_YJOGdEpctRZbGVZ79GmvHUic8C8JsDC/s320/KakaoTalk_20240614_010058107_08.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 10,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: true},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKmbgIi5XP10Z51KGb_mFWI0y-lvMmXQDB7eMDewqPPMBlkcmvHXfj47imYJO9w5bHa9urLjf1fQptIMITCCIkbvHSTqV6LGldzcFsv16WuTw2drlhOI2pgIkOPopf4FfO1PHihu4VakF9xNeZM4WUfuoUikbtR5Erv_xAdpLoxfP-4Y7-6oqqUeCWwjou/s320/KakaoTalk_20240531_152224443_09.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhuHiTchTrfXkNi9q1zZU92FGiopu0_ugx7jGOfhXk3LjOsjUjn2A_qaEg9uVRf_qlw35yYb9R06EyHKeF_rdkKxIEi7_jZYKTnFsUv-fBmd_MyBjwh4xQTZJhFWbyvDsdl8WO3Be1i0TVMC6wR4-q3fx2iWr1zvo3xBPjXh6NvtlztcN3rIg_wSy3TDfBt/s320/KakaoTalk_20240614_010058107_09.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 11,
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhLEomDyLCKRbg0KQdHlk9fCZ_6eb36Awnn0D4nueAJBzu9vHITJ2OLEgHSuifSWf5peS__o7AAE04zByNlA-oTQMwrP3pRAeAZDW_K310yU37ra2qI1aH40rP09lku5ux6v4A8xTr_5zE40btDVUjsaTNoY_a2U6ODJ8s9FvYmaAcvoM718DVBkDVqQFow/s320/KakaoTalk_20240531_152224443_10.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDgfPgGy3vjhyphenhyphenk_VU-GnILp4mWruH3fRoiyty-MCRSWgo81gUmEBK2AtYqICjTqJ_C73ODDk7GCwQ3UrPTkQ0aAmTcaPUuH-jRmW47gmWegBNwpH9j9_mlz84KswHAKo26UZRx5XZM9zwzB_Pbf2PGugB1K_8iASlBHbrDi3wFn6gGXK9r48eu3SwdQvcZ/s320/KakaoTalk_20240614_010058107_10.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 12,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: true},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2w9XJO-JkzjfReTVnHelTwswAfo_1uDoODdxlY5RVEyKEIBXpaclMN71l7gW6pIkhDeny3Wbk3OJkO7P-U-KW7K9_vFQGNNJtL5DiCZNo4NrIR1PvpPYRjn0cuC-m_aSxHSgkF0H9sRp2QI1-0duuMKQfKciRubjAEQKMBluQGXACvx2tglmQBcxAZqDi/s320/KakaoTalk_20240531_152224443_11.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjmh5wVCb-ZflnhyUJBePAJYpURgVv2bF9MDySxFVr4OXqDoMcYDcgCPUCq9jnf0Gwsze5bfAEosTDBrrc0Ov5RbjriGyrM5YhKw1gCT_obHKrvt8ABdasU1q2aHwaPZL1sEDxa8f69CtAuiEumOF77uqCMSOwVphom3fW-atNYxbopkWpZnqieSJQ21bRk/s320/KakaoTalk_20240614_010058107_11.jpg",
        selectedAnswer: null
    }
];

const imageContainer = document.getElementById("image-container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    
    if (confirm("답을 선택하시겠습니까? \n(한번 고른 답은 바꿀 수 없습니다)")) {
    // 현재 질문에 사용자가 선택한 답 기록
    questions[currentQuestionIndex].selectedAnswer = selectedBtn.innerHTML;

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
}

function showScore() {
    resetState();
    questionElement.innerHTML = `${questions.length} 문제 중 ${score} 문제를 맞추셨습니다.`;

    const incorrectQuestions = questions.filter(q => {
        const correctAnswer = q.answers.find(a => a.correct).text;
        return q.selectedAnswer !== null && q.selectedAnswer !== correctAnswer;
    });
    
    const noteElement = document.querySelector(".note");
    if (noteElement) {
        noteElement.style.display = "none";
    }

    if (incorrectQuestions.length > 0) {
        const incorrectList = document.createElement("ul");
        let headerAdded = false;  // '틀린 문제' 헤더가 추가되었는지 확인하는 변수

        incorrectQuestions.forEach((q, index) => {
            const listItem = document.createElement("li");
            listItem.classList.add("incorrect-question"); // 클래스 추가

            if (!headerAdded) {
                const incorrectHeader = document.createElement("p");
                incorrectHeader.classList.add("incorrect-header"); // 클래스 추가
                incorrectHeader.innerHTML = "틀린 문제";
                questionElement.appendChild(incorrectHeader);
                headerAdded = true;  // 헤더가 추가되었음을 표시
            }

            listItem.innerHTML = `
                ${q.questionnumber}. ${q.question} <br> 
                <span class="answer-text">당신의 답: ${q.selectedAnswer}</span> <br> 
                <span class="answer-text">정답: ${q.answers.find(a => a.correct).text}</span>
            `;
            incorrectList.appendChild(listItem);
        });
        questionElement.appendChild(incorrectList);
    } else {
        questionElement.innerHTML += "<br> 모든 문제를 맞추셨습니다!";
    }

    nextButton.innerHTML = "다시 풀기";
    nextButton.style.display = "block";

    // 해설 보기 버튼 추가
    const explanationButton = document.createElement("button");
    explanationButton.innerHTML = "해설 보기";
    explanationButton.style.display = "block";
    explanationButton.style.marginTop = "20px";
    explanationButton.addEventListener("click", showExplanationButtons);
    questionElement.appendChild(explanationButton);
}



function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
        showImage();
    }else{
        showScore();
        imageContainer.innerHTML = "";
    }
}

function showImage(){
    const currentQuestion = questions[currentQuestionIndex];
    const imagePath = currentQuestion.image;

    if (imagePath) {
        const imageElement = document.createElement("img");
        imageElement.src = imagePath;
        imageElement.alt = "Question Image";
        imageContainer.innerHTML = "";
        imageContainer.appendChild(imageElement);
    }else{
        imageContainer.innerHTML = "";
    }
}
showImage();

function showExplanationButtons() {
    // 이미 해설 버튼들이 생성되었는지 확인
    let explanationContainer = document.getElementById("explanation-container");
    if (!explanationContainer) {
        explanationContainer = document.createElement("div");
        explanationContainer.id = "explanation-container";
        explanationContainer.classList.add("explanation-container")


        questions.forEach((question, index) => {
            const button = document.createElement("button");
            button.innerHTML = `${index + 1}번 문제 해설`;
            button.classList.add("btn", "explanation-btn"); // 스타일 추가
            if (question.selectedAnswer === question.answers.find(a => a.correct).text) {
                button.classList.add("correct");
            } else {
                button.classList.add("incorrect");
            }
            button.addEventListener("click", () => showExplanationImage(index));
            explanationContainer.appendChild(button);
        });

        questionElement.appendChild(explanationContainer);
    }
}

function showExplanationImage(index) {
    const currentQuestion = questions[index];
    const questionImage = currentQuestion.image;
    const explanationImage = currentQuestion.explanationImage;

    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("image-wrapper");

    if (questionImage) {
        const questionImgElement = document.createElement("img");
        questionImgElement.src = questionImage;
        questionImgElement.alt = `Question Image for Question ${index + 1}`;
        questionImgElement.classList.add("question-image");
        imageWrapper.appendChild(questionImgElement);
    }
    
    if (explanationImage) {
        const explanationImgElement = document.createElement("img");
        explanationImgElement.src = explanationImage;
        explanationImgElement.alt = `Explanation Image for Question ${index + 1}`;
        explanationImgElement.classList.add("explanation-image");
        imageWrapper.appendChild(explanationImgElement);
    }

    imageContainer.innerHTML = "";  // 기존 이미지 제거
    imageContainer.appendChild(imageWrapper);
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
        showImage();
    }
});


startQuiz();