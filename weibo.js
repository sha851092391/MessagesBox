/*
status ״̬��
	-1 δ��¼
	0 δ��Ȩ
	1 ����Ȩ
	2 û��ȡ��Ϣ
*/
function getAuthorInfo(callback){
	$.ajax({
		url: "https://api.t.sina.com.cn/oauth2/authorize?client_id=3551059820&response_type=token&display=js&redirect_uri=https://api.t.sina.com.cn/xd.html", 
		success: function(){
			$.get("https://api.t.sina.com.cn/oauth2/query?source=3551059820&callback=?", function(json){
				sessionStorage.status = json.status;
				sessionStorage.success = json.success;
				if(json.status == 1){
					sessionStorage.access_token = json.access_token;
					sessionStorage.expires_in = json.expires_in;
					sessionStorage.uid = json.uid;
				}
				callback();
			}, "jsonp");},
		dataType: "text",
		mimeType: "text/plain",
		cache: false
	});
}

/*
var status,			//��΢��δ����
	follower,		//�·�˿��
	cmt,			//��������
	dm,				//��˽����
	mention_status,	//���ἰ�ҵ�΢����
	mention_cmt,	//���ἰ�ҵ�������
	group,			//΢Ⱥ��Ϣδ����
	private_group,	//˽��΢Ⱥ��Ϣδ����
	notice,			//��֪ͨδ����
	invite,			//������δ����
	badge,			//��ѫ����
	photo;			//�����Ϣδ����
*/

function getUnreadCount(callback){
	$.ajax({
		// url: "https://rm.api.weibo.com/2/remind/unread_count.json",
		url: "http://rm.api.weibo.com/2/remind/unread_count.json",
		data: {
			source: "3551059820",
			// access_token: sessionStorage.access_token,
			uid: sessionStorage.uid
		},
		dataType: "json",
		cache: false,
		// mimeType: "application/json",
		success: function(json){
			callback(json);
		}
	});
}