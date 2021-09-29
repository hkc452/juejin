const  request  =  require('request')
const  schedule  =  require('node-schedule')// 这里输入你的cookie，可以打开掘金控制台，随便找一个network，在Request headers里找到cookie，复制过来
const  hacpaiSignRequest  =  (signUrl,method)  => {  
  //读cookie  
  let  hacCookie  =  cookies  
  //设置请求参数  
  let  options  = {    url: signUrl,    method,    headers: {      'Referer': 'https://juejin.cn/',      'Upgrade-Insecure-Requests': 1,      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36',      'cookie': hacCookie    }  }  
  let  nowTime  =  new  Date();  
  console.log("时间："  +  nowTime.toLocaleTimeString());  
  //发起请求  
  request(options, (err, res, body)  => {    
    nowtime  =  new  Date();    
    if  (err) {      
      console.log(nowTime.toLocaleTimeString()  +  "---->签到请求失败---->\n"  +  err);    
    } else {      
      console.log(nowTime.toLocaleTimeString()  +  "---->签到请求成功---->\n");       
      console.log(body)    
    }  })}
const  signTask = () => {
// 定时每天00:00:02发起签到 
  schedule.scheduleJob('2 0 0 * * *', ()  => {    
    let  nowTime  =  new  Date();    
    console.log("\n\n\n")   
    console.log("----->"  +  nowTime.toLocaleDateString()  +  "-开始签到<-----");
    //这里的url替换成签到的url，我这个只是示例    
    hacpaiSignRequest('https://api.juejin.cn/interact_api/v1/message/count','POST')  
  })}
signTask()
