const scriptName = "Papago";

const Id = ""; //X-Naver-Client-Id
const Pw = ""; //X-Naver-Client-Secret

const n = "\n";
const nn = "\n".repeat(2);

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  if (msg.startsWith(".번역 ")) {
    try {
    var a = msg.substr(4).replace(" ","☆").replace(" ","☆").split("☆");
    //replier.reply(a);
    var data = JSON.parse(
      org.jsoup.Jsoup.connect("https://openapi.naver.com/v1/papago/n2mt")
        .header("X-Naver-Client-Id", Id)
        .header("X-Naver-Client-Secret", Pw)
        .data("source", a[0]).data("target", a[1])
        .data("text", a[2])
        .ignoreContentType(true).ignoreHttpErrors(true).post().text());
    replier.reply("["+a[0]+"->"+a[1]+"변역 결과]"+nn
                  +data.message.result.translatedText);
  
  } catch(e) { replier.reply("번역할 수 없습니다."); }
  }
  if (msg == ".번역코드") {
  replier.reply(
  "한국어 - ko"+n
  +"영어 - en"+n
  +"일본어 - ja"+n
  +"중국어 간체 - zh-CN"+n
  +"중국어 번체 - zh-TW"+n
  +"베트남어 - vi"+n
  +"인도네시아어 - id"+n
  +"태국어 - th"+n
  +"독일어 - de"+n
  +"러시아어 - ru"+n
  +"스페인어 - es"+n
  +"이탈리아어 - it"+n
  +"프랑스어 - fr"
  );
  }
}
