$(function(){
	
	if(!chrome.extension.getBackgroundPage().bbs_url){
		$("#data").text("��������̳��ַ(�Ҽ�ѡ��)");
		return ;
	}
	
	$("#data").ajaxStart(function(){
	   $(this).text("���Ժ�...");
	 });

	chrome.extension.getBackgroundPage().msgBug();
	$("#data").load(chrome.extension.getBackgroundPage().bbs_url+"?callback= #pm_ntc,#myprompt", function(){
		if(!$(this).text()) {
			$(this).text("���ȵ�¼BBS��");
			chrome.extension.getBackgroundPage().setIconText("");
			return ;
		}
		$("#data a").each(function(){
			$(this).attr("target", "_blank");
		});
		if(/^.{2}(\((\d+)\))?.{2,3}(\((\d+)\))?$/.test($("#data").text())) {
			chrome.extension.getBackgroundPage().process(RegExp.$2, RegExp.$4);
		}
	});
	//chrome.extension.getBackgroundPage().showNotification(3);
	
	
});

