const quotes = [
    {
        quote:"모범은 훈화보다 유효하다.",
        author:"영국속담",
    },
    {
        quote:"즐거움에 찬 얼굴은 한 접시의 물로도 연회를 만들 수 있다.",
        author:"허버트",
    },
    {
        quote:"말로 하는 사랑은 쉽게 외면할 수 있으나 행동으로 보여주는 사람은 저항할 수가 없다.",
        author:"무늬햄",
    },
    {
        quote:"성공의 비결은 목적을 향해 시종일관하는 것이다.",
        author:"디즈레일리",
    },
    {
        quote:"한 가지 일을 경험하지 않으면 한 가지 지혜가 자라지 않는다.",
        author:"명심보감",
    },
    {
        quote:"말하자마자 행동하는 사람, 그것이 가치 있는 사람이다.",
        author:"엔니우스",
    },
    {
        quote:"한가한 인간은 고여 있는 물이 썩는 것과도 같다",
        author:"프랑스 격언",
    },
    {
        quote:"대화시의 신중은 웅변보다 더 중요하다.",
        author:"그라시안",
    },
    {
        quote:"가시에 찔리지 않고서는 장미꽃을 모을 수가 없다.",
        author:"필페이",
    },
    {
        quote:"두 사람의 머리는 한 사람의 머리보다 낫다.",
        author:"헤이우드",
    },
    {
        quote:"탐구하여 찾아질 수 없을 정도로 어려운 문제는 존재하지 않는다.",
        author:"티랜티우스",
    },
    {
        quote:"아이들에게는 비평보다도 귀감이 필요하다.",
        author:"쥬벨",
    },
    {
        quote:"죽음을 두려워하는 나머지 삶을 시작조차 못하는 사람이 많다.",
        author:"벤다이크",
    },  
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


quote_length = quotes.length;
random_number = Math.floor(Math.random() * quote_length);

const todaysQuote = quotes[random_number];


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
// console.log(quotes.length)
// quote_length = quotes
// console.log(quotes[random_number].quote);
