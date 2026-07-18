// 15道测试题目，每题4个选项，计分搭配调整：8个角色均有独立加分渠道，每个角色都能成为唯一最高分
const questionList = [
    {
        q: "闲暇休息时你更偏爱哪种环境？",
        ans: [
            {text:"开满鲜花的花园小院",score:"B"},
            {text:"摆满香薰的安静书房",score:"A"},
            {text:"开阔能看星星的露台",score:"D"},
            {text:"摆满甜品玩偶的卧室",score:"C"}
        ]
    },
    {
        q: "伴侣的哪种行为最让你感到幸福？",
        ans: [
            {text:"温柔地支持你的决定，不会过多阻碍你",score:"E"},
            {text:"时不时给你一个浪漫的惊喜",score:"F"},
            {text:"慢热内敛，慢慢交心不用多话",score:"G"},
            {text:"软糯依赖，凡事都想依靠对方",score:"H"}
        ]
    },
    {
        q: "你理想的恋爱相处模式是？",
        ans: [
            {text:"热情直白，时时刻刻黏在一起",score:"A"},
            {text:"温柔克制，双方都保留私人空间",score:"B"},
            {text:"慢热内敛，慢慢交心不用多话",score:"C"},
            {text:"软糯依赖，凡事都想依靠对方",score:"D"}
        ]
    },
    {
        q: "和伴侣产生矛盾后你会？",
        ans: [
            {text:"直接说出委屈，需要对方哄你",score:"E"},
            {text:"冷静沉默，等对方主动沟通",score:"BF"},
            {text:"独自消化情绪，不愿倾诉",score:"C"},
            {text:"撒娇示弱，很容易被安抚",score:"D"}
        ]
    },
    {
        q: "收到礼物你最心动哪一类？",
        ans: [
            {text:"鲜花、绿植盆栽",score:"A"},
            {text:"香薰、复古首饰",score:"B"},
            {text:"星空摆件、古籍画册",score:"C"},
            {text:"糖果、奶油蛋糕",score:"D"}
        ]
    },
    {
        q: "你更喜欢伴侣哪种性格特质？",
        ans: [
            {text:"阳光元气，活泼开朗",score:"E"},
            {text:"清冷优雅，温柔体贴",score:"F"},
            {text:"寡言细腻，内心柔软",score:"G"},
            {text:"天真单纯，胆小软糯",score:"H"}
        ]
    },
    {
        q: "下雨天居家你会怎么打发时间？",
        ans: [
            {text:"窗边打理花草聊天",score:"A"},
            {text:"点上香薰安静看书",score:"B"},
            {text:"窗边听雨独自发呆",score:"C"},
            {text:"窝沙发吃甜食追剧",score:"D"}
        ]
    },
    {
        q: "感情里你是主动还是被动一方？",
        ans: [
            {text:"大胆主动，直白表达爱意",score:"E"},
            {text:"含蓄被动，等待对方靠近",score:"F"},
            {text:"极度慢热，很难敞开心扉",score:"G"},
            {text:"黏人被动，事事依赖对方",score:"H"}
        ]
    },
    {
        q: "吵架结束你希望对方怎么做？",
        ans: [
            {text:"温柔主动道歉哄你",score:"A"},
            {text:"静下心坐下来好好谈心",score:"B"},
            {text:"安静陪伴，不用过多言语",score:"C"},
            {text:"买甜品零食哄你开心",score:"D"}
        ]
    },
    {
        q: "心中理想的婚礼风格？",
        ans: [
            {text:"户外草坪鲜花婚礼",score:"E"},
            {text:"轻奢复古优雅婚礼",score:"F"},
            {text:"暗夜星空小众婚礼",score:"G"},
            {text:"甜系可爱童话婚礼",score:"H"}
        ]
    },
    {
        q: "假期出行你偏好？",
        ans: [
            {text:"近郊花园短途游玩",score:"A"},
            {text:"复古老城文艺漫步",score:"B"},
            {text:"山野星空长途旅行",score:"C"},
            {text:"乐园甜品城短途游",score:"D"}
        ]
    },
    {
        q: "深夜情绪低落时你会？",
        ans: [
            {text:"拉着伴侣倾诉所有心事",score:"E"},
            {text:"安静靠在对方身边沉默",score:"F"},
            {text:"独自出门看夜景散心",score:"G"},
            {text:"靠甜食缓解负面情绪",score:"H"}
        ]
    },
    {
        q: "家里装修布置你更喜欢？",
        ans: [
            {text:"随处摆放绿植鲜花",score:"A"},
            {text:"香薰复古文艺摆件",score:"B"},
            {text:"暗调简约星空装饰",score:"C"},
            {text:"可爱玩偶甜品摆件",score:"D"}
        ]
    },
    {
        q: "闲暇时更愿意读什么读物？",
        ans: [
            {text:"花艺治愈散文",score:"E"},
            {text:"美学香水鉴赏书籍",score:"F"},
            {text:"星象神秘古籍",score:"G"},
            {text:"轻松可爱童话绘本",score:"H"}
        ]
    },
    {
        q: "长久婚姻关系中你最看重？",
        ans: [
            {text:"热烈直白、明目张胆的偏爱",score:"A"},
            {text:"互相尊重、松弛自在的相处感",score:"B"},
            {text:"沉默长久、不离不弃的守护",score:"C"},
            {text:"温柔治愈、软糯贴心的陪伴",score:"D"}
        ]
    }
];

// 8位单人结局角色数据（全部均可刷出唯一最高分）
const charData = {
    A:{
        name:"角色一号",
        imgUrl:"这里替换成你的图片链接",
        desc:"你命中注定的伴侣热情明媚，喜欢鲜花与自然，永远愿意把最热烈的温柔留给你，婚后会打造满是花草的小家，事事迁就你的小情绪。"
    },
    B:{
        name:"角色二号",
        imgUrl:"这里替换成你的图片链接",
        desc:"对方气质清冷优雅，心思细腻内敛，不善言辞但行动力十足，会默默记住你所有喜好，给你足够独立的私人空间。"
    },
    C:{
        name:"角色三号",
        imgUrl:"这里替换成你的图片链接",
        desc:"偏爱安静独处，热爱星空与山野，情绪稳定包容，不会强迫你倾诉，难过时只需要安静陪在身边就能治愈你。"
    },
    D:{
        name:"角色四号",
        imgUrl:"这里替换成你的图片链接",
        desc:"性格软糯天真，偏爱甜食与可爱事物，很依赖你的陪伴，婚后会每天准备小零食，用简单小事治愈你的疲惫。"
    },
    E:{
        name:"角色五号",
        imgUrl:"这里替换成你的图片链接",
        desc:"元气阳光的恋人，主动又热烈，乐于分享生活里所有小事，永远主动低头和解，直白地向你表达爱意与偏爱。"
    },
    F:{
        name:"角色六号",
        imgUrl:"这里替换成你的图片链接",
        desc:"成熟稳重，审美复古高级，懂得尊重你的边界，遇事冷静沟通，不会冷暴力，给你踏实安心的婚姻生活。"
    },
    G:{
        name:"角色七号",
        imgUrl:"这里替换成你的图片链接",
        desc:"慢热且专一，不擅长甜言蜜语，但长久坚定，愿意陪你奔赴山野看星空，无声的陪伴就是最长情的告白。"
    },
    H:{
        name:"角色八号",
        imgUrl:"这里替换成你的图片链接",
        desc:"软萌黏人，内心敏感细腻，很容易满足，一点甜食和陪伴就能开心很久，婚后会时时刻刻依赖你、信任你。"
    }
};

// 同分多人结婚专属结局配置
const allMarryEnding = {
    name:"全员相伴",
    imgUrl:"这里放一张全员合照图片链接",
    desc:"你的性格太过独特迷人，八位角色全都对你动心，没有人愿意退出。最终所有人一同与你相伴相守，热闹又圆满，每一天都被不同的温柔包围。"
};

// 页面元素获取
const startBox = document.getElementById("start-box");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const startBtn = document.getElementById("start-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart");
const qText = document.getElementById("question");
const ansBox = document.getElementById("answer-box");
const nowQNum = document.getElementById("now-q");
const charImg = document.getElementById("char-img");
const charName = document.getElementById("char-name");
const charDesc = document.getElementById("char-desc");

let currentIndex = 0;
let userSelectRecord = Array(15).fill("");
let scoreCount = {A:0,B:0,C:0,D:0,E:0,F:0,G:0,H:0};

// 点击开始测试
startBtn.onclick = ()=>{
    startBox.classList.add("hide");
    quizBox.classList.remove("hide");
    loadQuestion();
}

// 渲染当前题目
function loadQuestion(){
    const item = questionList[currentIndex];
    nowQNum.innerText = currentIndex + 1;
    qText.innerText = item.q;
    ansBox.innerHTML = "";
    nextBtn.classList.add("hide");
    currentIndex === 0 ? prevBtn.classList.add("hide") : prevBtn.classList.remove("hide");

    item.ans.forEach(ans=>{
        let div = document.createElement("div");
        div.className = "ans-item";
        div.innerText = ans.text;
        div.dataset.score = ans.score;
        if(userSelectRecord[currentIndex] === ans.score){
            div.classList.add("active");
            nextBtn.classList.remove("hide");
        }
        div.onclick = ()=>{
            document.querySelectorAll(".ans-item").forEach(i=>i.classList.remove("active"));
            div.classList.add("active");
            userSelectRecord[currentIndex] = ans.score;
            nextBtn.classList.remove("hide");
        }
        ansBox.appendChild(div);
    })
}

// 上一题
prevBtn.onclick = ()=>{
    currentIndex--;
    loadQuestion();
}

// 下一题/结算
nextBtn.onclick = ()=>{
    currentIndex++;
    if(currentIndex >= questionList.length){
        calcResult();
        return;
    }
    loadQuestion();
}

// 计分结算核心
function calcResult(){
    scoreCount = {A:0,B:0,C:0,D:0,E:0,F:0,G:0,H:0};
    userSelectRecord.forEach(code=>{
        const arr = code.split("");
        arr.forEach(c=>scoreCount[c]++)
    })
    quizBox.classList.add("hide");
    resultBox.classList.remove("hide");

    let maxScore = Math.max(...Object.values(scoreCount));
    const topChars = Object.keys(scoreCount).filter(key => scoreCount[key] === maxScore);

    let finalResult;
    if(topChars.length >= 2){
        finalResult = allMarryEnding;
    }else{
        finalResult = charData[topChars[0]];
    }

    charImg.src = finalResult.imgUrl;
    charName.innerText = finalResult.name;
    charDesc.innerText = finalResult.desc;
}

// 重置重测
restartBtn.onclick = ()=>{
    currentIndex = 0;
    userSelectRecord = Array(15).fill("");
    scoreCount = {A:0,B:0,C:0,D:0,E:0,F:0,G:0,H:0};
    resultBox.classList.add("hide");
    startBox.classList.remove("hide");
}
