/*
*专门用作 处理 输入逻辑 
* -dispatcher-
* 分析: 首先 这个是转发器 ，为啥呢，对于输入，进过预处理后 都要从这里进，然后被分发给 对应的脚本 去处理
* 这也是 和过去不同的一部分，不再是 每个function 各自占用全部逻辑 ，其实也没那么 。。对吧
* 不过是将一些通用命令 交给独立层处理
* 又或则说，这几个其实属于则个独立层嘛～
*/
function checkOrder(order){
	//字母 意味着 独立命令 -这层可以独立出去，具体看操作了～
	if(order >= 'a' && order <='z' || order >= 'A' && order <='Z'){
		indieace_OrderHandler(order);
	}
	if(order >= '0' && order <='9'){
		dispatcher(order);
	}
}


/*
*  处理较为独立的 部分input 指令
*/
function indieace_OrderHandler (order){
	switch (order){
		// case 'q':order_Exit(1);
		case 'w':Character_information(_zhouping); break; 
		case 's':Kungfu_information(_zhouping); break;
		// case 'e':e_Back(_zhouping); break;//跳回上一层建筑 / building or place
		default:
	}
}

/*
*   指令分发器 
* 根据 主角 当前所处 place & buliding 将指令分发给 对应 脚本去接受
*/
function dispatcher (order){
	//switch (where_am_i) ->
	//先 以起始 位置为 门派 place界面 show -> menpaiJS.js 
	menpai_JShandler(order);//menpaiJS
	// showPlace();
}





// /*
// * 处理 门派场景建筑跳转 事件触发  逻辑
// */
// function place_Change (order){
	 
// }


// /*
// *  场景 回退 
// */
// function e_Back (){
// 	var menpai_BuildList = [];
	 
// }










/*
*handel exit game event
* 处理 退出游戏 逻辑
*/
function order_Exit (EXIT_SUCCESS){

}