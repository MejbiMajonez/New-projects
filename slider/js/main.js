$(document).ready(function(){
	listener_hoy();
	console.log(console);
});
function fml(){
$('#hoy1').on('click',function(){
		$('.rs1').switchClass( "rs1","rs2",1000);
		$('.rs2').switchClass( "rs2","rs1",1000);
		});
}
function listener_hoy(){
	$('#hoy1').on('click',function(){
		console.log('kliknąłeś mnie');
	});
}