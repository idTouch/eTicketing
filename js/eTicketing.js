(function(){
	var app = angular.module('eTicketing',[]);

	app.controller('boardController', function(){
		this.notes = tickets;
	});

	var tickets = [
		{
			author: 'João das Neves',
			textBody: 'Saber alguma coisa',
			data: '1388123412323',
			upVotes: 1,
		},
		{
			author: 'João das Neves',
			textBody: 'Saber outra coisa',
			data: '1388123412323',
			upVotes: 3,
		},
		{
			author: 'Tiago das Neves',
			textBody: 'Não saber nada',
			data: '1388123412323',
			upVotes:2,
		},
		{
			author: 'Tiago das Neves',
			textBody: 'O desvario acidental de quem não tem o que dizer',
			data: '1388123412323',
			upVotes:2,
		}
	]
})();
