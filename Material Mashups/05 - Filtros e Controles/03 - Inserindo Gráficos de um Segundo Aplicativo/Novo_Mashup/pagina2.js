/*
 * Basic responsive mashup template
 * @owner Enter you name here (xxx)
 */
/*
 *    Fill in host and port for Qlik engine
 */
var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );
var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};
require.config( {
	baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
} );

require( ["js/qlik"], function ( qlik ) {
	qlik.on( "error", function ( error ) {
		$( '#popupText' ).append( error.message + "<br>" );
		$( '#popup' ).fadeIn( 1000 );
	} );
	$( "#closePopup" ).click( function () {
		$( '#popup' ).hide();
	} );

	//callbacks -- inserted here --
	//open apps -- inserted here --
	var app = qlik.openApp('Extensões e Mashups.qvf', config);
	
	//Aplicação de Theme
	qlik.theme.apply('mashup_thema');
	
	//get objects -- inserted here --
	app.getObject('QV_SELECOES','CurrentSelections');
	
	//Graficos KPI
	app.getObject('FMk').then(function(dados){
		$('#kpi_01_1').html(dados.layout.qHyperCube.qDataPages[0].qMatrix[0][1].qText);
		$('#kpi_02_1').html(dados.layout.qHyperCube.qDataPages[0].qMatrix[0][2].qText);
		$('#kpi_03_1').html(dados.layout.qHyperCube.qDataPages[0].qMatrix[0][3].qText);
		$('#kpi_04_1').html(dados.layout.qHyperCube.qDataPages[0].qMatrix[0][4].qText);
		$('#kpi_05_1').html(dados.layout.qHyperCube.qDataPages[0].qMatrix[0][5].qText);
		
		$('#kpi_01_2').html(dados.layout.qHyperCube.qDataPages[0].qMatrix[0][6].qText);
		$('#kpi_02_2').html(dados.layout.qHyperCube.qDataPages[0].qMatrix[0][7].qText);
		$('#kpi_03_2').html(dados.layout.qHyperCube.qDataPages[0].qMatrix[0][8].qText);
		$('#kpi_04_2').html(dados.layout.qHyperCube.qDataPages[0].qMatrix[0][9].qText);
		$('#kpi_05_2').html(dados.layout.qHyperCube.qDataPages[0].qMatrix[0][10].qText);
		
		$('#kpi_01_3').html(dados.layout.qHyperCube.qMeasureInfo[5].qFallbackTitle);
		$('#kpi_02_3').html(dados.layout.qHyperCube.qMeasureInfo[6].qFallbackTitle);
		$('#kpi_03_3').html(dados.layout.qHyperCube.qMeasureInfo[7].qFallbackTitle);
		$('#kpi_04_3').html(dados.layout.qHyperCube.qMeasureInfo[8].qFallbackTitle);
		$('#kpi_05_3').html(dados.layout.qHyperCube.qMeasureInfo[9].qFallbackTitle);
		
	});
	
	
	//Demais Gráficos
	app.getObject('graf_01','jYCHp');
	app.getObject('deykMpf').then(function(dados){
		grafico_pizza(dados,'graf_02');
	});
	
	$('.expandir').click(function(){
		$(this).next('div').toggleClass("expandir_ativo");
		$(this).parent().toggleClass("expandir_ativo");
		qlik.resize();
	});
	
	
	
	
	
	
	
	//create cubes and lists -- inserted here --

} );
