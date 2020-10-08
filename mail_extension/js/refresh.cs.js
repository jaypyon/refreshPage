/**
* refresh.cs.js
* 박재용 <scorpion@dgu.ac.kr>
* 2020.07.24.
* 
* 메일 새로고침
*/

const refresh_sec = 60; // 새로고침 초 설정.

function req_after_sec() {
	return new Promise(function(resolve) {
		setTimeout(function() {
			document.querySelector('.mc-bu1').click();
			//해당 메일의 초기화 버튼 누르기. 
			resolve();
		}, refresh_sec * 1000);
	});
}

window.onload = async function() {
	if ( !document.URL.split('/').includes('login') ) {
		while (true)
			await req_after_sec();
	}
}

