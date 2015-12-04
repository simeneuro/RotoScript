var ignored = ["- Molonjack -","rmcf34","Alfredo duro","Alphaeus","Antonio Antonio","RazzBCN","PaK0","MSGVII","moramora","MEGAZORD","Kenai","JeiniLaNiña","Jeff Lynne","Harringtown","Freilica","EVO-V","eriktirador","eduuu89!!","e-vidente","Carl E. Sagan","buu","Braun","BarbaTuran","Arqvimedes"]

if (document.location.href === "http://www.forocoches.com/foro/forumdisplay.php?f=2") {
	var i=0;
	var f=0;
	for (i = 0; i < 200; i++) {
		x=document.getElementsByTagName("span")[i].childNodes[0];
		for (f = 0; f < ignored.length; f++) {
			if (x.nodeValue === ignored[f]) {
				x.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
			}
		}
	}
} else if (document.location.href === "http://www.forocoches.com/") {
	var i=0;
	var f=0;
	for (i = 0; i < 200; i++) {
		x=document.getElementsByTagName("a")[i].childNodes[0];
		for (f = 0; f < ignored.length; f++) {
			if (x.nodeValue === ignored[f]) {
				x.parentNode.parentNode.parentNode.style.display = 'none';
			}
		}
	}
}
