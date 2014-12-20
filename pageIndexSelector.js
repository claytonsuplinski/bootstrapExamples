		var numPages = 5;
		var pageIndex = window.location.hash.match(/\d+/) || 1;
		
		window.onhashchange = function() {
			window.location.reload();
		}
	
		function pageIndexSelectorHash(){ //read hash mark, call this function onload,
		
			pageIndex = window.location.hash.match(/\d+/) || 1;
			var hashContent = (pageIndex > numPages || pageIndex < 1 ? 1 : pageIndex); //get integer, or set to 1
			hashContent *= 1;
			var tmpInnerHtml = "";
			//alert(pageIndex + ", " + hashContent);
			
			if(hashContent > 1){
				tmpInnerHtml += "<li>";
				tmpInnerHtml += "<a href='#"+(hashContent-1)+"'>&laquo;</a>";
				tmpInnerHtml += "</li>";
			}
			
			if(hashContent <= 3 || numPages <= 5){
				for(var i=1; i<=Math.min(5, numPages); i++){
					if(i == hashContent){tmpInnerHtml += "<li class='active'>";}
					else{tmpInnerHtml += "<li>";}
					tmpInnerHtml += "<a href='#"+i+"'>"+i+"</a>";
					tmpInnerHtml += "</li>";
				}
			}
			else if(hashContent >= numPages-3){
				for(var i=numPages-4; i<=numPages; i++){
					if(i == hashContent){tmpInnerHtml += "<li class='active'>";}
					else{tmpInnerHtml += "<li>";}
					tmpInnerHtml += "<a href='#"+i+"'>"+i+"</a>";
					tmpInnerHtml += "</li>";
				}
			}
			else{
				for(var i=hashContent-2; i<=Math.min(hashContent+2, numPages); i++){
					if(i == hashContent){tmpInnerHtml += "<li class='active'>";}
					else{tmpInnerHtml += "<li>";}
					tmpInnerHtml += "<a href='#"+i+"'>"+i+"</a>";
					tmpInnerHtml += "</li>";
				}
			}
				
			if(hashContent < numPages){
				tmpInnerHtml += "<li>";
				tmpInnerHtml += "<a href='#"+(hashContent+1)+"'>&raquo;</a>";
				tmpInnerHtml += "</li>";
			}
			
			$("#pageIndexSelector").html(tmpInnerHtml);
		}