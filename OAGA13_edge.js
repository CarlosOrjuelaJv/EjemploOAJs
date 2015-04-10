/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['Arial']='';

var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'fondo-azul',
                type: 'image',
                rect: ['0', '0px','1024px','640px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"fondo-azul.png",'0px','0px']
            },
            {
                id: 'contextualizacion',
                display: 'none',
                type: 'group',
                rect: ['-8', '-85','1047','743','auto', 'auto'],
                c: [
                {
                    id: 'contex_fondo',
                    type: 'image',
                    rect: ['0px', '156px','1047px','587px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"contex_fondo.png",'0px','0px']
                },
                {
                    id: 'contex_maleta',
                    type: 'image',
                    rect: ['797px', '457px','126px','250px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"contex_maleta.png",'0px','0px']
                },
                {
                    id: 'contex_per1',
                    type: 'image',
                    rect: ['87px', '313px','223px','394px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"contex_per1.png",'0px','0px']
                },
                {
                    id: 'contex_per2',
                    type: 'image',
                    rect: ['857px', '315px','160px','402px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"contex_per2.png",'0px','0px']
                },
                {
                    id: 'contex_cartel',
                    display: 'block',
                    type: 'image',
                    rect: ['142px', '138px','807px','685px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"contex_cartel.png",'0px','0px'],
                    transform: [[],[],[],['0.7','0.7']]
                },
                {
                    id: 'contex_contVideo',
                    type: 'rect',
                    rect: ['210px', '216px','715px','406px','auto', 'auto'],
                    fill: ["rgba(122,166,248,0)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'botonPlay',
                    type: 'group',
                    rect: ['474px', '357px','169','169','auto', 'auto'],
                    c: [
                    {
                        id: 'borde',
                        type: 'ellipse',
                        rect: ['7px', '7px','148px','148px','auto', 'auto'],
                        borderRadius: ["50%", "50%", "50%", "50%"],
                        fill: ["rgba(255,255,255,0.00)"],
                        stroke: [3,"rgba(255,255,255,1.00)","solid"]
                    },
                    {
                        id: 'boton_play',
                        type: 'image',
                        rect: ['0px', '0px','169px','169px','auto', 'auto'],
                        cursor: ['pointer'],
                        fill: ["rgba(0,0,0,0)",im+"boton_play.png",'0px','0px']
                    }]
                }]
            },
            {
                id: 'material_estudio',
                display: 'none',
                type: 'group',
                rect: ['-7', '1','3438','651','auto', 'auto'],
                c: [
                {
                    id: 'fondoMov',
                    type: 'group',
                    rect: ['1', '64','3437','587','auto', 'auto'],
                    c: [
                    {
                        id: 'material_fondo',
                        type: 'image',
                        rect: ['0px', '0px','3431px','587px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"material_fondo.png",'0px','0px']
                    },
                    {
                        id: 'material_carro1',
                        type: 'rect',
                        rect: ['206', '141','auto','auto','auto', 'auto']
                    },
                    {
                        id: 'material_carro2',
                        type: 'rect',
                        rect: ['397', '159','auto','auto','auto', 'auto']
                    },
                    {
                        id: 'barco4',
                        type: 'rect',
                        rect: ['261', '193','auto','auto','auto', 'auto']
                    },
                    {
                        id: 'material_puente',
                        type: 'image',
                        rect: ['68px', '137px','1152px','159px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"material_puente.png",'0px','0px']
                    },
                    {
                        id: 'material_arena',
                        type: 'image',
                        rect: ['735px', '226px','2702px','150px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"material_arena.png",'0px','0px']
                    },
                    {
                        id: 'aion',
                        type: 'rect',
                        rect: ['2234', '22','auto','auto','auto', 'auto']
                    },
                    {
                        id: 'material_pasto',
                        type: 'image',
                        rect: ['655px', '268px','354px','86px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"material_pasto.png",'0px','0px']
                    },
                    {
                        id: 'material_flores1',
                        type: 'image',
                        rect: ['974px', '294px','256px','58px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"material_flores1.png",'0px','0px']
                    },
                    {
                        id: 'material_flores2',
                        type: 'image',
                        rect: ['2142px', '294px','144px','58px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"material_flores2.png",'0px','0px']
                    },
                    {
                        id: 'material_flores3',
                        type: 'image',
                        rect: ['3282px', '294px','144px','58px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"material_flores2.png",'0px','0px']
                    },
                    {
                        id: 'material_edificio1',
                        type: 'image',
                        rect: ['741px', '124px','255px','227px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"material_edificio1.png",'0px','0px']
                    },
                    {
                        id: 'material_edificio2',
                        type: 'image',
                        rect: ['1594px', '110px','289px','242px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"material_edificio2.png",'0px','0px']
                    },
                    {
                        id: 'material_edificio3',
                        type: 'image',
                        rect: ['2268px', '114px','281px','239px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"material_edificio3.png",'0px','0px']
                    },
                    {
                        id: 'material_edificio4',
                        type: 'image',
                        rect: ['2833px', '96px','153px','253px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"material_edificio4.png",'0px','0px']
                    },
                    {
                        id: 'material_palmas1',
                        type: 'image',
                        rect: ['1455px', '194px','160px','165px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"material_palmas1.png",'0px','0px']
                    },
                    {
                        id: 'material_palmas2',
                        type: 'image',
                        rect: ['2748px', '219px','91px','136px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"material_palmas2.png",'0px','0px']
                    },
                    {
                        id: 'material_tienda1',
                        type: 'image',
                        rect: ['1195px', '106px','292px','243px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"material_tienda1.png",'0px','0px']
                    },
                    {
                        id: 'material_tienda2',
                        type: 'image',
                        rect: ['1895px', '110px','236px','242px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"material_tienda2.png",'0px','0px']
                    },
                    {
                        id: 'material_tienda3',
                        type: 'image',
                        rect: ['2560px', '106px','214px','245px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"material_tienda3.png",'0px','0px']
                    },
                    {
                        id: 'material_tienda4',
                        type: 'image',
                        rect: ['2997px', '84px','263px','267px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"material_tienda4.png",'0px','0px']
                    },
                    {
                        id: 'ma_boton1',
                        type: 'image',
                        rect: ['1386px', '164px','70px','105px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"material_indicador1.png",'0px','0px']
                    },
                    {
                        id: 'ma_boton2',
                        type: 'image',
                        rect: ['2052px', '159px','70px','105px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"material_indicador2.png",'0px','0px']
                    },
                    {
                        id: 'ma_boton3',
                        type: 'image',
                        rect: ['2694px', '159px','70px','105px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"material_indicador3.png",'0px','0px']
                    },
                    {
                        id: 'ma_boton4',
                        type: 'image',
                        rect: ['3191px', '157px','70px','105px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"material_indicador4.png",'0px','0px']
                    },
                    {
                        id: 'material_calle',
                        type: 'image',
                        rect: ['0px', '338px','3423px','43px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"material_calle.png",'0px','0px']
                    },
                    {
                        id: 'carro1',
                        type: 'rect',
                        rect: ['2418', '311','auto','auto','auto', 'auto']
                    },
                    {
                        id: 'material_letrero',
                        type: 'image',
                        rect: ['590px', '227px','102px','125px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"material_letrero.png",'0px','0px']
                    }]
                },
                {
                    id: 'material_fondo_rollover',
                    type: 'image',
                    rect: ['774px', '576px','247px','62px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"material_fondo_rollover.png",'0px','0px']
                },
                {
                    id: 'roll1',
                    type: 'text',
                    rect: ['799px', '594px','200px','28px','auto', 'auto'],
                    text: "CRM - Satisfacción del Ciente ",
                    align: "center",
                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,18,45,1.00)", "700", "none", "normal"]
                },
                {
                    id: 'roll2',
                    type: 'text',
                    rect: ['796px', '592px','200px','28px','auto', 'auto'],
                    text: "Administración de Proyectos <br>de Negocios Online",
                    align: "center",
                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,18,45,1.00)", "700", "none", "normal"]
                },
                {
                    id: 'roll3',
                    type: 'text',
                    rect: ['799px', '592px','200px','28px','auto', 'auto'],
                    text: "Determinación del Precio <br>de un Servicio de Mercadeo",
                    align: "center",
                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,18,45,1.00)", "700", "none", "normal"]
                },
                {
                    id: 'roll4',
                    type: 'text',
                    rect: ['796px', '600px','200px','20px','auto', 'auto'],
                    text: "Inglés",
                    align: "center",
                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,18,45,1.00)", "700", "none", "normal"]
                },
                {
                    id: 'personaje1_material',
                    type: 'group',
                    rect: ['198px', '324px','308','275','auto', 'auto'],
                    c: [
                    {
                        id: 'material_moto',
                        type: 'image',
                        rect: ['0px', '75px','308px','187px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"material_moto.png",'0px','0px']
                    },
                    {
                        id: 'emiter1',
                        type: 'ellipse',
                        rect: ['-7px', '226px','50px','50px','auto', 'auto'],
                        borderRadius: ["50%", "50%", "50%", "50%"],
                        fill: ["rgba(122,166,248,0.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'cabeza_per1_ma',
                        type: 'group',
                        rect: ['1', '0','668','324','auto', 'auto'],
                        c: [
                        {
                            id: 'material_per_cabeza',
                            type: 'image',
                            rect: ['103px', '-1px','96px','98px','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"material_per_cabeza.png",'0px','0px']
                        },
                        {
                            id: 'sprite_ojos_instrucciones',
                            type: 'image',
                            rect: ['115px', '101px','550px','40px','auto', 'auto'],
                            clip: ['rect(0px 48.64349365234375px 14.089519500732422px 0px)'],
                            fill: ["rgba(0,0,0,0)",im+"sprite_ojos_instrucciones.png",'0px','0px','35%','35%'],
                            transform: [[],['12']]
                        }]
                    }]
                },
                {
                    id: 'instrucciones',
                    type: 'group',
                    rect: ['85', '94','149','231','auto', 'auto'],
                    c: [
                    {
                        id: 'instru_teclado_texto',
                        type: 'image',
                        rect: ['0px', '79px','149px','152px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"instru_teclado_texto.png",'0px','0px']
                    },
                    {
                        id: 'glow1Tecla',
                        type: 'rect',
                        rect: ['19px', '5px','113px','78px','auto', 'auto'],
                        borderRadius: ["17px 17px", "26px 26px", "28px 28px", "21px 21px"],
                        fill: ["rgba(192,192,192,1)"],
                        stroke: [0,"rgba(0,0,0,1)","none"]
                    },
                    {
                        id: 'instru_teclado',
                        type: 'image',
                        rect: ['12px', '0px','126px','90px','auto', 'auto'],
                        cursor: ['pointer'],
                        fill: ["rgba(0,0,0,0)",im+"instru_teclado.png",'0px','0px']
                    }]
                }]
            },
            {
                id: 'guia_PDF',
                display: 'none',
                type: 'group',
                rect: ['-8', '71','1047','587','auto', 'auto'],
                c: [
                {
                    id: 'guiaPDF_fondo',
                    type: 'image',
                    rect: ['0px', '0px','1047px','587px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"contex_fondo.png",'0px','0px']
                },
                {
                    id: 'guiaPDF_maleta',
                    type: 'image',
                    rect: ['183px', '304px','345px','259px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"guiaPDF_maleta.png",'0px','0px']
                },
                {
                    id: 'persoGuiaPdf',
                    type: 'group',
                    rect: ['337', '16','794','557','auto', 'auto'],
                    c: [
                    {
                        id: 'guiaPDF_per_cuerpo',
                        type: 'image',
                        rect: ['169px', '190px','365px','367px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"guiaPDF_per_cuerpo.png",'0px','0px']
                    },
                    {
                        id: 'cabezaPer1',
                        type: 'rect',
                        rect: ['0px', '0px','auto','auto','auto', 'auto']
                    }]
                },
                {
                    id: 'guiaPDF_boton',
                    type: 'image',
                    rect: ['710px', '325px','145px','141px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"guiaPDF_boton.png",'0px','0px']
                }]
            },
            {
                id: 'diseno_evidencias',
                display: 'none',
                type: 'group',
                rect: ['-10', '0','1042','655','auto', 'auto'],
                c: [
                {
                    id: 'evi_fondo',
                    type: 'image',
                    rect: ['10px', '80px','1042px','574px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"evi_fondo.png",'0px','0px']
                },
                {
                    id: 'Group2',
                    type: 'group',
                    rect: ['303', '69','652','586','auto', 'auto'],
                    c: [
                    {
                        id: 'evi_isla1',
                        type: 'image',
                        rect: ['0px', '0px','500px','586px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"evi_isla1.png",'0px','0px']
                    },
                    {
                        id: 'evi_isla2',
                        type: 'image',
                        rect: ['476px', '295px','176px','119px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"evi_isla2.png",'0px','0px']
                    }]
                },
                {
                    id: 'evi_puente',
                    type: 'image',
                    rect: ['482px', '78px','224px','88px','auto', 'auto'],
                    clip: ['rect(0px 224px 88px 217px)'],
                    fill: ["rgba(0,0,0,0)",im+"evi_puente.png",'0px','0px']
                },
                {
                    id: 'Group4',
                    type: 'group',
                    rect: ['143', '173','303','325','auto', 'auto'],
                    c: [
                    {
                        id: 'b2',
                        type: 'rect',
                        rect: ['20', '0','auto','auto','auto', 'auto']
                    },
                    {
                        id: 'b3',
                        type: 'rect',
                        rect: ['182', '247','auto','auto','auto', 'auto']
                    },
                    {
                        id: 'evi_moto',
                        type: 'image',
                        rect: ['583px', '162px','57px','40px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"evi_moto.png",'0px','0px']
                    }]
                },
                {
                    id: 'Group5',
                    type: 'group',
                    rect: ['779', '220','171','66','auto', 'auto'],
                    c: [
                    {
                        id: 'barco3',
                        type: 'rect',
                        rect: ['0', '0','auto','auto','auto', 'auto']
                    }]
                },
                {
                    id: 'Group6',
                    type: 'group',
                    rect: ['367', '135','342','442','auto', 'auto'],
                    c: [
                    {
                        id: 'evi_edificio1',
                        type: 'image',
                        rect: ['0px', '114px','67px','57px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"evi_edificio1.png",'0px','0px']
                    },
                    {
                        id: 'evi_edificio2',
                        type: 'image',
                        rect: ['67px', '0px','47px','68px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"evi_edificio2.png",'0px','0px']
                    },
                    {
                        id: 'evi_edificio3',
                        type: 'image',
                        rect: ['154px', '61px','43px','67px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"evi_edificio3.png",'0px','0px']
                    },
                    {
                        id: 'evi_edificio4',
                        type: 'image',
                        rect: ['270px', '112px','72px','78px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"evi_edificio4.png",'0px','0px']
                    },
                    {
                        id: 'evi_edificio5',
                        type: 'image',
                        rect: ['205px', '186px','57px','79px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"evi_edificio5.png",'0px','0px']
                    },
                    {
                        id: 'evi_edificio6',
                        type: 'image',
                        rect: ['155px', '271px','59px','81px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"evi_edificio6.png",'0px','0px']
                    },
                    {
                        id: 'evi_edificio7',
                        type: 'image',
                        rect: ['85px', '331px','42px','75px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"evi_edificio7.png",'0px','0px']
                    },
                    {
                        id: 'evi_edificio8',
                        type: 'image',
                        rect: ['227px', '376px','43px','66px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"evi_edificio8.png",'0px','0px']
                    }]
                },
                {
                    id: 'Group10',
                    type: 'group',
                    rect: ['179', '79','720','444','auto', 'auto'],
                    c: [
                    {
                        id: 'evi_boton1',
                        type: 'group',
                        rect: ['402px', '352px','77','92','auto', 'auto'],
                        cursor: ['pointer'],
                        c: [
                        {
                            id: 'evi_indicador_azul1',
                            type: 'image',
                            rect: ['0px', '0px','77px','92px','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"evi_indicador_azul1.png",'0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['19px', '23px','42px','32px','auto', 'auto'],
                            text: "1",
                            align: "center",
                            font: ['Arial', 24, "rgba(0,36,55,1.00)", "700", "none", ""]
                        }]
                    },
                    {
                        id: 'evi_boton2',
                        type: 'group',
                        rect: ['252px', '306px','77','92','auto', 'auto'],
                        cursor: ['pointer'],
                        c: [
                        {
                            id: 'evi_indicador_azul1Copy',
                            type: 'image',
                            rect: ['0px', '0px','77px','92px','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"evi_indicador_azul1.png",'0px','0px']
                        },
                        {
                            id: 'TextCopy2',
                            type: 'text',
                            rect: ['19px', '23px','42px','32px','auto', 'auto'],
                            text: "2",
                            align: "center",
                            font: ['Arial', 24, "rgba(0,36,55,1.00)", "700", "none", ""]
                        }]
                    },
                    {
                        id: 'evi_boton3',
                        type: 'group',
                        rect: ['142px', '254px','77','92','auto', 'auto'],
                        cursor: ['pointer'],
                        c: [
                        {
                            id: 'evi_indicador_azul2Copy2',
                            type: 'image',
                            rect: ['0px', '0px','77px','92px','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"evi_indicador_azul2.png",'0px','0px']
                        },
                        {
                            id: 'TextCopy3',
                            type: 'text',
                            rect: ['20px', '25px','42px','32px','auto', 'auto'],
                            text: "3",
                            align: "center",
                            font: ['Arial', 24, "rgba(0,36,55,1.00)", "700", "none", ""]
                        }]
                    },
                    {
                        id: 'evi_boton4',
                        type: 'group',
                        rect: ['331px', '254px','77','92','auto', 'auto'],
                        cursor: ['pointer'],
                        c: [
                        {
                            id: 'evi_indicador_azul2Copy6',
                            type: 'image',
                            rect: ['0px', '0px','77px','92px','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"evi_indicador_azul2.png",'0px','0px']
                        },
                        {
                            id: 'TextCopy12',
                            type: 'text',
                            rect: ['20px', '25px','42px','32px','auto', 'auto'],
                            text: "4",
                            align: "center",
                            font: ['Arial', 24, "rgba(0,36,55,1.00)", "700", "none", ""]
                        }]
                    },
                    {
                        id: 'evi_boton5',
                        type: 'group',
                        rect: ['382px', '168px','77','92','auto', 'auto'],
                        cursor: ['pointer'],
                        c: [
                        {
                            id: 'evi_indicador_azul1Copy2',
                            type: 'image',
                            rect: ['0px', '0px','77px','92px','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"evi_indicador_azul1.png",'0px','0px']
                        },
                        {
                            id: 'TextCopy7',
                            type: 'text',
                            rect: ['19px', '23px','42px','32px','auto', 'auto'],
                            text: "5",
                            align: "center",
                            font: ['Arial', 24, "rgba(0,36,55,1.00)", "700", "none", ""]
                        }]
                    },
                    {
                        id: 'evi_boton6',
                        type: 'group',
                        rect: ['532px', '178px','77','92','auto', 'auto'],
                        cursor: ['pointer'],
                        c: [
                        {
                            id: 'evi_indicador_azul1Copy3',
                            type: 'image',
                            rect: ['0px', '0px','77px','92px','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"evi_indicador_azul1.png",'0px','0px']
                        },
                        {
                            id: 'TextCopy8',
                            type: 'text',
                            rect: ['19px', '23px','42px','32px','auto', 'auto'],
                            text: "6",
                            align: "center",
                            font: ['Arial', 24, "rgba(0,36,55,1.00)", "700", "none", ""]
                        }]
                    },
                    {
                        id: 'evi_boton7',
                        type: 'group',
                        rect: ['638px', '226px','77','92','auto', 'auto'],
                        cursor: ['pointer'],
                        c: [
                        {
                            id: 'evi_indicador_azul2',
                            type: 'image',
                            rect: ['0px', '0px','77px','92px','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"evi_indicador_azul2.png",'0px','0px']
                        },
                        {
                            id: 'TextCopy',
                            type: 'text',
                            rect: ['20px', '25px','42px','32px','auto', 'auto'],
                            text: "7",
                            align: "center",
                            font: ['Arial', 24, "rgba(0,36,55,1.00)", "700", "none", ""]
                        }]
                    },
                    {
                        id: 'evi_boton8',
                        type: 'group',
                        rect: ['643px', '60px','77','92','auto', 'auto'],
                        cursor: ['pointer'],
                        c: [
                        {
                            id: 'evi_indicador_azul2Copy5',
                            type: 'image',
                            rect: ['0px', '0px','77px','92px','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"evi_indicador_azul2.png",'0px','0px']
                        },
                        {
                            id: 'TextCopy6',
                            type: 'text',
                            rect: ['20px', '25px','42px','32px','auto', 'auto'],
                            text: "8",
                            align: "center",
                            font: ['Arial', 24, "rgba(0,36,55,1.00)", "700", "none", ""]
                        }]
                    },
                    {
                        id: 'evi_boton9',
                        type: 'group',
                        rect: ['440px', '86px','77','92','auto', 'auto'],
                        cursor: ['pointer'],
                        c: [
                        {
                            id: 'evi_indicador_azul2Copy4',
                            type: 'image',
                            rect: ['0px', '0px','77px','92px','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"evi_indicador_azul2.png",'0px','0px']
                        },
                        {
                            id: 'TextCopy5',
                            type: 'text',
                            rect: ['20px', '25px','42px','32px','auto', 'auto'],
                            text: "9",
                            align: "center",
                            font: ['Arial', 24, "rgba(0,36,55,1.00)", "700", "none", ""]
                        }]
                    },
                    {
                        id: 'evi_boton10',
                        type: 'group',
                        rect: ['486px', '0px','77','92','auto', 'auto'],
                        cursor: ['pointer'],
                        c: [
                        {
                            id: 'evi_indicador_azul1Copy4',
                            type: 'image',
                            rect: ['0px', '0px','77px','92px','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"evi_indicador_azul1.png",'0px','0px']
                        },
                        {
                            id: 'TextCopy9',
                            type: 'text',
                            rect: ['19px', '23px','42px','32px','auto', 'auto'],
                            text: "10",
                            align: "center",
                            font: ['Arial', 24, "rgba(0,36,55,1.00)", "700", "none", ""]
                        }]
                    },
                    {
                        id: 'evi_boton11',
                        type: 'group',
                        rect: ['321px', '36px','77','92','auto', 'auto'],
                        cursor: ['pointer'],
                        c: [
                        {
                            id: 'evi_indicador_azul1Copy5',
                            type: 'image',
                            rect: ['0px', '0px','77px','92px','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"evi_indicador_azul1.png",'0px','0px']
                        },
                        {
                            id: 'TextCopy10',
                            type: 'text',
                            rect: ['19px', '23px','42px','32px','auto', 'auto'],
                            text: "11",
                            align: "center",
                            font: ['Arial', 24, "rgba(0,36,55,1.00)", "700", "none", ""]
                        }]
                    },
                    {
                        id: 'evi_boton12',
                        type: 'group',
                        rect: ['175px', '87px','77','92','auto', 'auto'],
                        cursor: ['pointer'],
                        c: [
                        {
                            id: 'evi_indicador_azul2Copy3',
                            type: 'image',
                            rect: ['0px', '0px','77px','92px','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"evi_indicador_azul2.png",'0px','0px']
                        },
                        {
                            id: 'TextCopy4',
                            type: 'text',
                            rect: ['19px', '25px','42px','32px','auto', 'auto'],
                            text: "12",
                            align: "center",
                            font: ['Arial', 24, "rgba(0,36,55,1.00)", "700", "none", ""]
                        }]
                    },
                    {
                        id: 'evi_boton13',
                        type: 'group',
                        rect: ['0px', '16px','77','92','auto', 'auto'],
                        cursor: ['pointer'],
                        c: [
                        {
                            id: 'evi_indicador_azul1Copy6',
                            type: 'image',
                            rect: ['0px', '0px','77px','92px','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"evi_indicador_azul1.png",'0px','0px']
                        },
                        {
                            id: 'TextCopy11',
                            type: 'text',
                            rect: ['18px', '23px','42px','32px','auto', 'auto'],
                            text: "13",
                            align: "center",
                            font: ['Arial', 24, "rgba(0,36,55,1.00)", "700", "none", ""]
                        }]
                    }]
                },
                {
                    id: 'evi_barco_rollover',
                    type: 'group',
                    rect: ['660px', '505','364','130','auto', 'auto'],
                    c: [
                    {
                        id: 'bar1',
                        type: 'rect',
                        rect: ['11', '0','auto','auto','auto', 'auto']
                    }]
                },
                {
                    id: 'evi_roll1',
                    type: 'text',
                    rect: ['834px', '540px','169px','71px','auto', 'auto'],
                    text: "Foro “Del Marketing de Servicios y Transaccional al Marketing Relacional” ",
                    align: "center",
                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,18,45,1)", "bold", "none", "normal"]
                },
                {
                    id: 'evi_roll2',
                    type: 'text',
                    rect: ['834px', '549px','169px','54px','auto', 'auto'],
                    text: "Comics “Estrategias de una Empresa para Establecer un CRM”",
                    align: "center",
                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,18,45,1)", "bold", "none", "normal"]
                },
                {
                    id: 'evi_roll3',
                    type: 'text',
                    rect: ['834px', '564px','169px','24px','auto', 'auto'],
                    text: "Informe Software ACT ",
                    align: "center",
                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,18,45,1)", "bold", "none", "normal"]
                },
                {
                    id: 'evi_roll4',
                    type: 'text',
                    rect: ['834px', '551px','169px','24px','auto', 'auto'],
                    text: "Cuadro Comparativo “Estrategias de Marketing”",
                    align: "center",
                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,18,45,1)", "bold", "none", "normal"]
                },
                {
                    id: 'evi_roll5',
                    type: 'text',
                    rect: ['834px', '542px','169px','24px','auto', 'auto'],
                    text: "Actividad Interactiva – Descubre la Palabra “Inteligencia de Mercados y CRM” ",
                    align: "center",
                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,18,45,1)", "bold", "none", "normal"]
                },
                {
                    id: 'evi_roll6',
                    type: 'text',
                    rect: ['834px', '551px','169px','48px','auto', 'auto'],
                    text: "Actividad Evaluativa “CRM – Satisfacción del Cliente” ",
                    align: "center",
                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,18,45,1)", "bold", "none", "normal"]
                },
                {
                    id: 'evi_roll7',
                    type: 'text',
                    rect: ['834px', '550px','169px','48px','auto', 'auto'],
                    text: "Test Blackboard “Administración de Negocios Online”",
                    align: "center",
                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,18,45,1)", "bold", "none", "normal"]
                },
                {
                    id: 'evi_roll8',
                    type: 'text',
                    rect: ['834px', '550px','169px','48px','auto', 'auto'],
                    text: "Actividad Interactiva “Desarrollo de una Situación Problémica”",
                    align: "center",
                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,18,45,1)", "bold", "none", "normal"]
                },
                {
                    id: 'evi_roll9',
                    type: 'text',
                    rect: ['834px', '550px','169px','48px','auto', 'auto'],
                    text: "Promoting Customer Service- Executive Summary",
                    align: "center",
                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,18,45,1)", "bold", "none", "normal"]
                },
                {
                    id: 'evi_roll10',
                    type: 'text',
                    rect: ['834px', '550px','169px','48px','auto', 'auto'],
                    text: "Sesión Virtual en Blackboard Collaborate – Exposición B2B",
                    align: "center",
                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,18,45,1)", "bold", "none", "normal"]
                },
                {
                    id: 'evi_roll11',
                    type: 'text',
                    rect: ['834px', '550px','169px','48px','auto', 'auto'],
                    text: "Artículo de Opinión “Competencia de Precios”",
                    align: "center",
                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,18,45,1)", "bold", "none", "normal"]
                },
                {
                    id: 'evi_roll12',
                    type: 'text',
                    rect: ['834px', '550px','169px','48px','auto', 'auto'],
                    text: "Wiki “Ventajas del Uso de un Blog Empresarial”",
                    align: "center",
                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,18,45,1)", "bold", "none", "normal"]
                },
                {
                    id: 'evi_roll13',
                    type: 'text',
                    rect: ['834px', '550px','169px','48px','auto', 'auto'],
                    text: "Video Diapositiva “Escuelas de Negocios en Latinoamérica”",
                    align: "center",
                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,18,45,1)", "bold", "none", "normal"]
                },
                {
                    id: 'personaje1_evidencias',
                    type: 'group',
                    rect: ['94px', '258px','219','353','auto', 'auto'],
                    c: [
                    {
                        id: 'evi_piedra',
                        type: 'image',
                        rect: ['18px', '295px','131px','97px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"evi_piedra.png",'0px','0px']
                    },
                    {
                        id: 'cabezaEvide',
                        type: 'rect',
                        rect: ['-122', '0','auto','auto','auto', 'auto']
                    },
                    {
                        id: 'evi_per1_brazo',
                        type: 'image',
                        rect: ['86px', '52px','133px','139px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"evi_per1_brazo.png",'0px','0px']
                    },
                    {
                        id: 'evi_per1_cuerpo',
                        type: 'image',
                        rect: ['19px', '114px','113px','239px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"evi_per1_cuerpo.png",'0px','0px']
                    }]
                }]
            },
            {
                id: 'evidencias',
                display: 'none',
                type: 'group',
                rect: ['96px', '78px','1012','555','auto', 'auto'],
                c: [
                {
                    id: 'fondo_gris_mapa',
                    display: 'block',
                    type: 'image',
                    rect: ['166px', '92px','742px','431px','auto', 'auto'],
                    clip: ['rect(21.333251953125px 742px 431px 0px)'],
                    fill: ["rgba(0,0,0,0)",im+"fondo_gris_mapa2.png",'0px','0px']
                },
                {
                    id: 'cont1',
                    display: 'block',
                    type: 'group',
                    rect: ['12px', '0px','894','555','auto', 'auto'],
                    c: [
                    {
                        id: 'conte_evi1',
                        type: 'rect',
                        rect: ['180px', '120px','687px','372px','auto', 'auto'],
                        fill: ["rgba(84,255,0,0.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"],
                        c: [
                        {
                            id: 'text_evidencia1',
                            type: 'group',
                            rect: ['37px', '26px','620','286','auto', 'auto'],
                            c: [
                            {
                                id: 'Group13',
                                type: 'group',
                                rect: ['0', '40','580','629','auto', 'auto'],
                                c: [
                                {
                                    id: 'Text5Copy136',
                                    type: 'text',
                                    rect: ['0px', '609px','620px','41px','auto', 'auto'],
                                    text: "Aportes al Foro “Satisfacción al Cliente”.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy135',
                                    type: 'text',
                                    rect: ['0px', '569px','620px','26px','auto', 'auto'],
                                    text: "DESCRIPCIÓN<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy134',
                                    type: 'text',
                                    rect: ['0px', '300px','620px','64px','auto', 'auto'],
                                    text: "Después de observar el material complementario y documentarse de manera autónoma a través de otras fuentes de información, responda la siguiente pregunta:<br><br>1.\t¿Cómo satisfacer las necesidades de unos clientes que están alineados a la globalización de los mercados, pero con diferenciados lazos y rasgos culturales? <br><br>2.\t¿Cuáles son las cualidades que deben tener las empresas del sector outsourcing, que les permita ser potencialmente subcontradas bien sea para la producción (de bienes) o servucción y (de servicios), teniendo siempre en cuenta que debe garantizarse que esté orientado a la satisfacción de las necesidades de los clientes?<br><br>Justifique y realice aportes a las respuestas de dos de sus compañeros como mínimo.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy133',
                                    type: 'text',
                                    rect: ['0px', '220px','620px','64px','auto', 'auto'],
                                    text: "Menú principal / Materiales del Programa / Proyecto Formativo / Fase Evaluación / Actividad de proyecto 5 / Actividad de Aprendizaje 10 / Material Complementario / Video: video 1: La Clave para la Satisfacción del cliente.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "italic"]
                                },
                                {
                                    id: 'Text5Copy132',
                                    type: 'text',
                                    rect: ['0px', '180px','620px','26px','auto', 'auto'],
                                    text: "Disponible en la siguiente ruta: <br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy131',
                                    type: 'text',
                                    rect: ['0px', '140px','620px','26px','auto', 'auto'],
                                    text: "Video: Video 1: La Clave para la satisfacción del Cliente.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy130',
                                    type: 'text',
                                    rect: ['0px', '80px','620px','41px','auto', 'auto'],
                                    text: "Para fortalecer sus conocimientos previos, realice la lectura y el análisis del siguiente material complementario: <br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy129',
                                    type: 'text',
                                    rect: ['0px', '40px','620px','26px','auto', 'auto'],
                                    text: "DESCRIPCIÓN<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy128',
                                    type: 'text',
                                    rect: ['0px', '0px','620px','39px','auto', 'auto'],
                                    text: "Foro “Satisfacción al Cliente” <br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                }]
                            },
                            {
                                id: 'Text5Copy127',
                                type: 'text',
                                rect: ['0px', '0px','620px','26px','auto', 'auto'],
                                text: "EVIDENCIA 1<br>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                            }]
                        },
                        {
                            id: 'text_evidencia1_1',
                            type: 'group',
                            rect: ['37px', '37px','620','285','auto', 'auto'],
                            c: [
                            {
                                id: 'Group18',
                                type: 'group',
                                rect: ['0', '71','580','368','auto', 'auto'],
                                c: [
                                {
                                    id: 'Text5Copy126',
                                    type: 'text',
                                    rect: ['0px', '0px','580px','422px','auto', 'auto'],
                                    text: "Para enviar la Evidencia 1: Foro “Satisfacción al Cliente”, al instructor, debe hacerlo por la siguiente ruta: <br><br>1.\tClic en Menú principal <br><br>2.\tClic en Actividades<br><br>3.\tClic en la carpeta Proyecto Formativo<br><br>4.\tClic en la carpeta Fase Evaluación<br><br>5.\tClic en la carpeta Actividad de proyecto 5<br><br>6.\tClic en la carpeta  Actividad de Aprendizaje 10<br><br>7.\tClic en la carpeta Evidencias de la Actividad de Aprendizaje 10<br><br>8.\tClic en el enlace espacio para Evidencia 1: Foro “Satisfacción al Cliente”.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                }]
                            },
                            {
                                id: 'Text5Copy125',
                                type: 'text',
                                rect: ['0px', '505px','580px','26px','auto', 'auto'],
                                text: "FORMA DE ENTREGA<br>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                            }]
                        },
                        {
                            id: 'text_evidencia1_2',
                            type: 'group',
                            rect: ['37px', '48px','620','484','auto', 'auto'],
                            c: [
                            {
                                id: 'Group19',
                                type: 'group',
                                rect: ['0', '8','580','683','auto', 'auto'],
                                c: [
                                {
                                    id: 'Text5Copy124',
                                    type: 'text',
                                    rect: ['0px', '657px','580px','26px','auto', 'auto'],
                                    text: "Lista de Chequeo.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy123',
                                    type: 'text',
                                    rect: ['0px', '619px','580px','26px','auto', 'auto'],
                                    text: "INSTRUMENTO DE EVALUACIÓN<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy122',
                                    type: 'text',
                                    rect: ['0px', '38px','580px','285px','auto', 'auto'],
                                    text: "•\tPropone los soportes a los procesos de las estrategias de comercialización de servicios, según políticas de la organización.<br><br>•\tEvalúa el desarrollo de las relaciones con los clientes, según políticas de la organización, objetivos y estrategias del plan de mercadeo.<br><br>•\tRevisa el código de ética de la organización teniendo en cuenta los criterios definidos en las acciones de mejora.<br><br>•\tCoteja los manuales de protocolo de productos y servicio, establecidos en el plan de mejora según políticas de la empresa.<br><br>•\tDiseña actividades del programa de mejoramiento, teniendo en cuenta los resultados del servicio y los tipos de cliente.<br><br>•\tEvalúa la información del plan de mejora, teniendo en cuenta las herramientas y tecnologías establecidas por la empresa.<br><br>•\tElabora la propuesta de solución de servicio, de acuerdo a las necesidades, intereses y exigencias del mercado objetivo.<br><br>•\tDetermina la propuesta de servicio, teniendo en cuenta las necesidades de los clientes.<br><br>•\tInteractúa con las partes interesadas sobre la propuesta de solución del servicio, de acuerdo con los protocolos de comunicación de la organización.<br><br>•\tMejora los elementos de la propuesta de solución del servicio, según las solicitudes del cliente.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy121',
                                    type: 'text',
                                    rect: ['0px', '0px','580px','26px','auto', 'auto'],
                                    text: "CRITERIOS DE EVALUACIÓN<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                }]
                            }]
                        }]
                    }]
                },
                {
                    id: 'cont2',
                    display: 'block',
                    type: 'group',
                    rect: ['12px', '0px','894','555','auto', 'auto'],
                    c: [
                    {
                        id: 'conte_evi2',
                        type: 'rect',
                        rect: ['180px', '120px','687px','372px','auto', 'auto'],
                        fill: ["rgba(84,255,0,0.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"],
                        c: [
                        {
                            id: 'text_evidencia2',
                            type: 'group',
                            rect: ['38px', '35px','569px','382','auto', 'auto'],
                            c: [
                            {
                                id: 'Group21',
                                type: 'group',
                                rect: ['0', '52','580','724','auto', 'auto'],
                                c: [
                                {
                                    id: 'Text5Copy120',
                                    type: 'text',
                                    rect: ['0px', '682px','580px','200px','auto', 'auto'],
                                    text: "Documento en Word, PDF o cualquier otra herramienta de su preferencia con el Documento Estudio de Caso “Un Centro de Servicios con Desempeño Dudoso”.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy119',
                                    type: 'text',
                                    rect: ['0px', '642px','580px','25px','auto', 'auto'],
                                    text: "PRODUCTO ENTREGABLE<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy118',
                                    type: 'text',
                                    rect: ['0px', '576px','580px','62px','auto', 'auto'],
                                    text: "puede tener en cuenta las herramientas de Word, PDF, o cualquier otra de su preferencia. <br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy117',
                                    type: 'text',
                                    rect: ['0px', '558px','580px','62px','auto', 'auto'],
                                    text: "Estudio de Caso “Un Centro de Servicios con Desempeño Dudoso”, ",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy116',
                                    type: 'text',
                                    rect: ['0px', '318px','580px','62px','auto', 'auto'],
                                    text: "Después de realizar la lectura del segundo capítulo, de respuesta a los siguientes interrogantes:<br><br>1.\tSegún las influencias del entorno global, identifique cuál de ellas influyó en mayor medida, para que se presentara la situación descrita en el caso UN CENTRO DE SERVICIOS CON DESEMPEÑO DUDOSO. Justifique su respuesta.<br><br>2.\t¿Cuál(es) estrategia(s) debió utilizar el Centro de Servicios, para mitigar el impacto que le ha generado el o los macro entorno(s) (identificado(s) en el punto anterior), y así poder garantizar un mejor servicio, y posterior satisfacción de las necesidades de sus clientes? Justifique su respuesta.<br><br>Para la elaboración del Documento",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy115',
                                    type: 'text',
                                    rect: ['0px', '238px','580px','62px','auto', 'auto'],
                                    text: "Menú principal / Materiales del Programa / Proyecto Formativo / Fase Evaluación / Actividad de proyecto 5 / Actividad de Aprendizaje 10 / Material Complementario / Documento: Una Perspectiva de la Logística desde la Academia.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "italic"]
                                },
                                {
                                    id: 'Text5Copy114',
                                    type: 'text',
                                    rect: ['0px', '198px','580px','22px','auto', 'auto'],
                                    text: "Disponible en la siguiente ruta: <br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy113',
                                    type: 'text',
                                    rect: ['0px', '160px','580px','25px','auto', 'auto'],
                                    text: "Documento: Una Perspectiva de la Logística desde la Academia. (Capítulo 2)<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy112',
                                    type: 'text',
                                    rect: ['0px', '80px','580px','200px','auto', 'auto'],
                                    text: "Después de estudiar el material de formación titulado El ABC para la Satisfacción al Cliente y documentarse sobre el tema a través de otras fuentes de información, realice la lectura del siguiente material complementario:<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy111',
                                    type: 'text',
                                    rect: ['0px', '40px','580px','25px','auto', 'auto'],
                                    text: "DESCRIPCIÓN<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy110',
                                    type: 'text',
                                    rect: ['0px', '0px','580px','21px','auto', 'auto'],
                                    text: "Estudio de Caso “Un Centro de Servicios con Desempeño Dudoso” <br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                }]
                            },
                            {
                                id: 'Text5Copy109',
                                type: 'text',
                                rect: ['0px', '12px','580px','25px','auto', 'auto'],
                                text: "EVIDENCIA 2<br>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                            }]
                        },
                        {
                            id: 'text_evidencia2_1',
                            type: 'group',
                            rect: ['38', '38','569','498','auto', 'auto'],
                            c: [
                            {
                                id: 'Group26',
                                type: 'group',
                                rect: ['0', '47','580','383','auto', 'auto'],
                                c: [
                                {
                                    id: 'Text5Copy108',
                                    type: 'text',
                                    rect: ['0px', '0px','580px','383px','auto', 'auto'],
                                    text: "Para realizar su aporte en la Evidencia 2: Estudio de Caso “Un Centro de Servicios con Desempeño Dudoso”, debe hacerlo por la siguiente ruta: <br><br>1.\tClic en Menú principal <br><br>2.\tClic en Actividades<br><br>3.\tClic en la carpeta Proyecto Formativo<br><br>4.\tClic en la carpeta Fase Evaluación<br><br>5.\tClic en la carpeta Actividad de proyecto 5<br><br>6.\tClic en la carpeta  Actividad de Aprendizaje 10<br><br>7.\tClic en la carpeta Evidencias de la Actividad de Aprendizaje 10<br><br>8.\tClic en el enlace espacio para Evidencia 2: Estudio de Caso “Un Centro de Servicios con Desempeño Dudoso”.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                }]
                            },
                            {
                                id: 'Text5Copy107',
                                type: 'text',
                                rect: ['0px', '94px','580px','25px','auto', 'auto'],
                                text: "FORMA DE ENTREGA<br>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                            }]
                        },
                        {
                            id: 'text_evidencia2_2',
                            type: 'group',
                            rect: ['38', '34px','569','485','auto', 'auto'],
                            c: [
                            {
                                id: 'Group27',
                                type: 'group',
                                rect: ['0', '24','580','686','auto', 'auto'],
                                c: [
                                {
                                    id: 'Text5Copy106',
                                    type: 'text',
                                    rect: ['0px', '659px','580px','27px','auto', 'auto'],
                                    text: "Lista de Chequeo.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy105',
                                    type: 'text',
                                    rect: ['0px', '620px','580px','25px','auto', 'auto'],
                                    text: "INSTRUMENTO DE EVALUACIÓN<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy104',
                                    type: 'text',
                                    rect: ['0px', '38px','580px','281px','auto', 'auto'],
                                    text: "•\tPropone los soportes a los procesos de las estrategias de comercialización de servicios, según políticas de la organización.<br><br>•\tEvalúa el desarrollo de las relaciones con los clientes, según políticas de la organización, objetivos y estrategias del plan de mercadeo.<br><br>•\tRevisa el código de ética de la organización teniendo en cuenta los criterios definidos en las acciones de mejora.<br><br>•\tCoteja los manuales de protocolo de productos y servicio, establecidos en el plan de mejora según políticas de la empresa.<br><br>•\tDiseña actividades del programa de mejoramiento, teniendo en cuenta los resultados del servicio y los tipos de cliente.<br><br>•\tEvalúa la información del plan de mejora, teniendo en cuenta las herramientas y tecnologías establecidas por la empresa.<br><br>•\tElabora la propuesta de solución de servicio, de acuerdo a las necesidades, intereses y exigencias del mercado objetivo.<br><br>•\tDetermina la propuesta de servicio, teniendo en cuenta las necesidades de los clientes.<br><br>•\tInteractúa con las partes interesadas sobre la propuesta de solución del servicio, de acuerdo con los protocolos de comunicación de la organización.<br><br>•\tMejora los elementos de la propuesta de solución del servicio, según las solicitudes del cliente.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy103',
                                    type: 'text',
                                    rect: ['0px', '0px','580px','25px','auto', 'auto'],
                                    text: "CRITERIOS DE EVALUACIÓN<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                }]
                            }]
                        }]
                    }]
                },
                {
                    id: 'cont3',
                    display: 'block',
                    type: 'group',
                    rect: ['12px', '0px','894','555','auto', 'auto'],
                    c: [
                    {
                        id: 'conte_evi3',
                        type: 'rect',
                        rect: ['180px', '120px','687px','372px','auto', 'auto'],
                        fill: ["rgba(84,255,0,0.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"],
                        c: [
                        {
                            id: 'text_evidencia3',
                            type: 'group',
                            rect: ['38', '38px','621px','296px','auto', 'auto'],
                            c: [
                            {
                                id: 'Group40',
                                type: 'group',
                                rect: ['0', '60px','623px','222px','auto', 'auto'],
                                c: [
                                {
                                    id: 'Text5Copy102',
                                    type: 'text',
                                    rect: ['0px', '263px','580px','39px','auto', 'auto'],
                                    text: "Usted cuenta con tres intentos para realizar la actividad.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy101',
                                    type: 'text',
                                    rect: ['0px', '263px','580px','39px','auto', 'auto'],
                                    text: "Reintentar. ",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy100',
                                    type: 'text',
                                    rect: ['0px', '243px','580px','39px','auto', 'auto'],
                                    text: "usted aprobará la actividad; de lo contrario haga clic en el botón ",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy99',
                                    type: 'text',
                                    rect: ['0px', '244px','580px','20px','auto', 'auto'],
                                    text: "3/5,  ",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy98',
                                    type: 'text',
                                    rect: ['0px', '203px','580px','39px','auto', 'auto'],
                                    text: "Cuando de respuesta a las cinco preguntas relacionadas con el estudio de caso “WONDER TECH”, automáticamente le aparecerá su respectiva calificación. Recuerde que hasta obtener un resultado igual o superior a ",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy97',
                                    type: 'text',
                                    rect: ['0px', '163px','580px','25px','auto', 'auto'],
                                    text: "PRODUCTO ENTREGABLE",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy96',
                                    type: 'text',
                                    rect: ['0px', '80px','580px','103px','auto', 'auto'],
                                    text: "Para el desarrollo de esta actividad, usted debe observar en primera medida el video del estudio de caso “WONDER TECH”, para así continuar con el Test interactivo relacionado con el mismo.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy95',
                                    type: 'text',
                                    rect: ['0px', '40px','580px','21px','auto', 'auto'],
                                    text: "DESCRIPCIÓN<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy94',
                                    type: 'text',
                                    rect: ['0px', '0px','580px','22px','auto', 'auto'],
                                    text: "Actividad Interactiva – Estudio de Caso “WONDER TECH”<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                }]
                            },
                            {
                                id: 'Text5Copy93',
                                type: 'text',
                                rect: ['0px', '17px','580px','23px','auto', 'auto'],
                                text: "EVIDENCIA 3<br>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                            }]
                        },
                        {
                            id: 'text_evidencia3_1',
                            type: 'group',
                            rect: ['38', '45px','621px','291px','auto', 'auto'],
                            c: [
                            {
                                id: 'Group43',
                                type: 'group',
                                rect: ['0', '65px','620px','207px','auto', 'auto'],
                                c: [
                                {
                                    id: 'Text5Copy92',
                                    type: 'text',
                                    rect: ['0px', '440px','580px','43px','auto', 'auto'],
                                    text: "Una vez haya enviado su calificación es necesario que verifique su nota en el Centro de Calificaciones; si ésta no aparece por favor realice la actividad nuevamente. <br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "italic"]
                                },
                                {
                                    id: 'Text5Copy91',
                                    type: 'text',
                                    rect: ['0px', '400px','580px','25px','auto', 'auto'],
                                    text: "NOTA:<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "italic"]
                                },
                                {
                                    id: 'Text5Copy90',
                                    type: 'text',
                                    rect: ['0px', '0px','580px','387px','auto', 'auto'],
                                    text: "Para realizar su aporte en la Evidencia 3: Actividad Interactiva – Estudio de Caso “WONDER TECH”, debe hacerlo por la siguiente ruta: <br><br>1.\tClic en Menú principal <br><br>2.\tClic en Actividades<br><br>3.\tClic en la carpeta Proyecto Formativo<br><br>4.\tClic en la carpeta Fase Evaluación<br><br>5.\tClic en la carpeta Actividad de proyecto 5<br><br>6.\tClic en la carpeta  Actividad de Aprendizaje 10<br><br>7.\tClic en la carpeta Evidencias de la Actividad de Aprendizaje 10<br><br>8.\tClic en el enlace espacio para Evidencia 3: Actividad Interactiva – Estudio de Caso “WONDE RTECH”.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                }]
                            },
                            {
                                id: 'Text5Copy89',
                                type: 'text',
                                rect: ['0px', '15px','580px','25px','auto', 'auto'],
                                text: "FORMA DE ENTREGA<br>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                            }]
                        },
                        {
                            id: 'text_evidencia3_2',
                            type: 'group',
                            rect: ['38', '53px','580px','485','auto', 'auto'],
                            c: [
                            {
                                id: 'Group44',
                                type: 'group',
                                rect: ['0', '11px','619px','243px','auto', 'auto'],
                                c: [
                                {
                                    id: 'Text5Copy88',
                                    type: 'text',
                                    rect: ['0px', '657px','580px','27px','auto', 'auto'],
                                    text: "Cuestionario.",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy87',
                                    type: 'text',
                                    rect: ['0px', '623px','580px','25px','auto', 'auto'],
                                    text: "INSTRUMENTO DE EVALUACIÓN<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy86',
                                    type: 'text',
                                    rect: ['0px', '43px','580px','283px','auto', 'auto'],
                                    text: "•\tPropone los soportes a los procesos de las estrategias de comercialización de servicios, según políticas de la organización.<br><br>•\tEvalúa el desarrollo de las relaciones con los clientes, según políticas de la organización, objetivos y estrategias del plan de mercadeo.<br><br>•\tRevisa el código de ética de la organización teniendo en cuenta los criterios definidos en las acciones de mejora.<br><br>•\tCoteja los manuales de protocolo de productos y servicio, establecidos en el plan de mejora según políticas de la empresa.<br><br>•\tDiseña actividades del programa de mejoramiento, teniendo en cuenta los resultados del servicio y los tipos de cliente.<br><br>•\tEvalúa la información del plan de mejora, teniendo en cuenta las herramientas y tecnologías establecidas por la empresa.<br><br>•\tElabora la propuesta de solución de servicio, de acuerdo a las necesidades, intereses y exigencias del mercado objetivo.<br><br>•\tDetermina la propuesta de servicio, teniendo en cuenta las necesidades de los clientes.<br><br>•\tInteractúa con las partes interesadas sobre la propuesta de solución del servicio, de acuerdo con los protocolos de comunicación de la organización.<br><br>•\tMejora los elementos de la propuesta de solución del servicio, según las solicitudes del cliente.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy85',
                                    type: 'text',
                                    rect: ['0px', '0px','580px','25px','auto', 'auto'],
                                    text: "CRITERIOS DE EVALUACIÓN<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                }]
                            }]
                        }]
                    }]
                },
                {
                    id: 'cont4',
                    display: 'block',
                    type: 'group',
                    rect: ['12px', '0px','894','555','auto', 'auto'],
                    c: [
                    {
                        id: 'conte_evi4',
                        type: 'rect',
                        rect: ['180px', '120px','687px','372px','auto', 'auto'],
                        fill: ["rgba(84,255,0,0.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"],
                        c: [
                        {
                            id: 'text_evidencia4',
                            type: 'group',
                            rect: ['38', '26','612','324','auto', 'auto'],
                            c: [
                            {
                                id: 'Group45',
                                type: 'group',
                                rect: ['0', '73px','622px','222px','auto', 'auto'],
                                c: [
                                {
                                    id: 'Text5Copy84',
                                    type: 'text',
                                    rect: ['0px', '456px','582px','20px','auto', 'auto'],
                                    text: "“Reglas de Oro en el Trato al Cliente”.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy83',
                                    type: 'text',
                                    rect: ['0px', '436px','582px','39px','auto', 'auto'],
                                    text: "Presentación en Word, PDF, Slideshare, Prezi, PPT o cualquier otra herramienta de su preferencia, sobre las ",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy82',
                                    type: 'text',
                                    rect: ['0px', '406px','582px','25px','auto', 'auto'],
                                    text: "PRODUCTO ENTREGABLE",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy81',
                                    type: 'text',
                                    rect: ['0px', '345px','580px','40px','auto', 'auto'],
                                    text: "puede tener en cuenta las herramientas de Word, PDF, Slideshare, Prezi, PPT o cualquier otra de su preferencia.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy80',
                                    type: 'text',
                                    rect: ['0px', '345px','580px','40px','auto', 'auto'],
                                    text: "Presentación “Reglas de Oro en el Trato al Cliente”, ",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy79',
                                    type: 'text',
                                    rect: ['0px', '325px','580px','40px','auto', 'auto'],
                                    text: "una presentación citando ejemplos reales frente a dicha información. Para la elaboración de la ",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy78',
                                    type: 'text',
                                    rect: ['0px', '240px','580px','62px','auto', 'auto'],
                                    text: "Menú principal / Materiales del Programa / Proyecto Formativo / Fase Evaluación / Actividad de proyecto 5 / Actividad de Aprendizaje 10 / Material Complementario / Documento: Reglas de Oro en el Trato al Cliente.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "italic"]
                                },
                                {
                                    id: 'Text5Copy77',
                                    type: 'text',
                                    rect: ['0px', '200px','580px','22px','auto', 'auto'],
                                    text: "Disponible en la siguiente ruta: <br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy76',
                                    type: 'text',
                                    rect: ['0px', '158px','580px','25px','auto', 'auto'],
                                    text: "Documento: Reglas de Oro en el Trato al Cliente.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy75',
                                    type: 'text',
                                    rect: ['0px', '76px','582px','62px','auto', 'auto'],
                                    text: "Después de estudiar el material de formación titulado El ABC para la Satisfacción al Cliente y documentarse sobre el tema a través de otras fuentes de información, realice la lectura del siguiente material complementario:<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy74',
                                    type: 'text',
                                    rect: ['0px', '42px','581px','18px','auto', 'auto'],
                                    text: "DESCRIPCIÓN<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy73',
                                    type: 'text',
                                    rect: ['0px', '0px','581px','22px','auto', 'auto'],
                                    text: "Presentación “Reglas de Oro en el Trato al Cliente” <br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                }]
                            },
                            {
                                id: 'Text5Copy72',
                                type: 'text',
                                rect: ['0px', '29px','581px','22px','auto', 'auto'],
                                text: "EVIDENCIA 4",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                            }]
                        },
                        {
                            id: 'text_evidencia4_1',
                            type: 'group',
                            rect: ['38', '46','580','529','auto', 'auto'],
                            c: [
                            {
                                id: 'Group46',
                                type: 'group',
                                rect: ['0', '64px','620px','205px','auto', 'auto'],
                                c: [
                                {
                                    id: 'Text5Copy71',
                                    type: 'text',
                                    rect: ['0px', '0px','580px','382px','auto', 'auto'],
                                    text: "Para realizar su aporte a la Presentación “Reglas de Oro en el Trato al Cliente”, debe hacerlo por la siguiente ruta: <br><br>1.\tClic en Menú principal <br><br>2.\tClic en Actividades<br><br>3.\tClic en la carpeta Proyecto Formativo<br><br>4.\tClic en la carpeta Fase Evaluación<br><br>5.\tClic en la carpeta Actividad de proyecto 5<br><br>6.\tClic en la carpeta  Actividad de Aprendizaje 10<br><br>7.\tClic en la carpeta Evidencias de la Actividad de Aprendizaje 10<br><br>8.\tClic en el enlace espacio para Evidencia 5: Presentación “Reglas de Oro en el Trato al Cliente”.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                }]
                            },
                            {
                                id: 'Text5Copy70',
                                type: 'text',
                                rect: ['0px', '18px','580px','25px','auto', 'auto'],
                                text: "FORMA DE ENTREGA<br>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                            }]
                        },
                        {
                            id: 'text_evidencia4_2',
                            type: 'group',
                            rect: ['38px', '35px','580px','485','auto', 'auto'],
                            c: [
                            {
                                id: 'Group47',
                                type: 'group',
                                rect: ['0', '22','619px','262px','auto', 'auto'],
                                c: [
                                {
                                    id: 'Text5Copy69',
                                    type: 'text',
                                    rect: ['0px', '663px','580px','27px','auto', 'auto'],
                                    text: "Rúbrica.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy68',
                                    type: 'text',
                                    rect: ['0px', '623px','580px','25px','auto', 'auto'],
                                    text: "INSTRUMENTO DE EVALUACIÓN<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy67',
                                    type: 'text',
                                    rect: ['0px', '38px','580px','282px','auto', 'auto'],
                                    text: "•\tPropone los soportes a los procesos de las estrategias de comercialización de servicios, según políticas de la organización.<br><br>•\tEvalúa el desarrollo de las relaciones con los clientes, según políticas de la organización, objetivos y estrategias del plan de mercadeo.<br><br>•\tRevisa el código de ética de la organización teniendo en cuenta los criterios definidos en las acciones de mejora.<br><br>•\tCoteja los manuales de protocolo de productos y servicio, establecidos en el plan de mejora según políticas de la empresa.<br><br>•\tDiseña actividades del programa de mejoramiento, teniendo en cuenta los resultados del servicio y los tipos de cliente.<br><br>•\tEvalúa la información del plan de mejora, teniendo en cuenta las herramientas y tecnologías establecidas por la empresa.<br><br>•\tElabora la propuesta de solución de servicio, de acuerdo a las necesidades, intereses y exigencias del mercado objetivo.<br><br>•\tDetermina la propuesta de servicio, teniendo en cuenta las necesidades de los clientes.<br><br>•\tInteractúa con las partes interesadas sobre la propuesta de solución del servicio, de acuerdo con los protocolos de comunicación de la organización.<br><br>•\tMejora los elementos de la propuesta de solución del servicio, según las solicitudes del cliente.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy66',
                                    type: 'text',
                                    rect: ['0px', '0px','580px','25px','auto', 'auto'],
                                    text: "CRITERIOS DE EVALUACIÓN<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                }]
                            }]
                        }]
                    }]
                },
                {
                    id: 'cont5',
                    display: 'block',
                    type: 'group',
                    rect: ['12px', '0px','894','555','auto', 'auto'],
                    c: [
                    {
                        id: 'conte_evi5',
                        display: 'block',
                        type: 'rect',
                        rect: ['180px', '120px','687px','372px','auto', 'auto'],
                        fill: ["rgba(84,255,0,0.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"],
                        c: [
                        {
                            id: 'text_evidencia5',
                            type: 'group',
                            rect: ['34px', '26','620','324','auto', 'auto'],
                            c: [
                            {
                                id: 'Group48',
                                type: 'group',
                                rect: ['-1', '72px','622px','224px','auto', 'auto'],
                                c: [
                                {
                                    id: 'Text5Copy65',
                                    type: 'text',
                                    rect: ['0px', '547px','582px','46px','auto', 'auto'],
                                    text: "Documento en Word, PDF, PPT, Slideshare, Prezi o cualquier otra herramienta de su preferencia con el Diseño y Aplicación de una Encuesta.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy64',
                                    type: 'text',
                                    rect: ['0px', '508px','582px','25px','auto', 'auto'],
                                    text: "PRODUCTO ENTREGABLE",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy63',
                                    type: 'text',
                                    rect: ['1px', '422px','579px','18px','auto', 'auto'],
                                    text: "Para la elaboración del  Diseño y la Aplicación de la Encuesta, puede tener en cuenta las herramientas de Word, PDF, Slideshare, Prezi, PPT o cualquier otra de su preferencia. <br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy62',
                                    type: 'text',
                                    rect: ['1px', '402px','579px','18px','auto', 'auto'],
                                    text: "Diseñe y Aplique una Encuesta para la Satisfacción del Cliente en el Idioma Inglés. ",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy61',
                                    type: 'text',
                                    rect: ['1px', '342px','579px','18px','auto', 'auto'],
                                    text: "y desarrolle las actividades propuestas.  <br><br>Después de realizar la lectura del material, ",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy60',
                                    type: 'text',
                                    rect: ['1px', '342px','579px','18px','auto', 'auto'],
                                    text: "Customer service ",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy59',
                                    type: 'text',
                                    rect: ['1px', '342px','579px','18px','auto', 'auto'],
                                    text: "y Reading: ",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy58',
                                    type: 'text',
                                    rect: ['1px', '342px','579px','18px','auto', 'auto'],
                                    text: "Customer service process ",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy57',
                                    type: 'text',
                                    rect: ['1px', '320px','579px','18px','auto', 'auto'],
                                    text: "Listening: ",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy56',
                                    type: 'text',
                                    rect: ['1px', '320px','579px','18px','auto', 'auto'],
                                    text: "Practical Activities: ",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy55',
                                    type: 'text',
                                    rect: ['1px', '240px','579px','84px','auto', 'auto'],
                                    text: "y analice como diseñar un instrumento de evaluación para reconocer los intereses de los clientes. <br><br>Para afianzar sus conocimientos ingrese a la sección ",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy54',
                                    type: 'text',
                                    rect: ['1px', '240px','579px','21px','auto', 'auto'],
                                    text: "Writing a satisfaction survey or questionnaire",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy53',
                                    type: 'text',
                                    rect: ['1px', '180px','579px','84px','auto', 'auto'],
                                    text: "y escuche los aspectos a tener en cuenta para tratar con clientes o consumidores. <br><br>Luego ingrese a la sección Writing:",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy52',
                                    type: 'text',
                                    rect: ['1px', '160px','579px','22px','auto', 'auto'],
                                    text: "Customer service process",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy51',
                                    type: 'text',
                                    rect: ['1px', '160px','579px','22px','auto', 'auto'],
                                    text: "en la sección Listening: ",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy50',
                                    type: 'text',
                                    rect: ['1px', '160px','579px','23px','auto', 'auto'],
                                    text: "“The Salesforce” ",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy49',
                                    type: 'text',
                                    rect: ['1px', '80px','579px','84px','auto', 'auto'],
                                    text: "En el área de inglés reconocerá las necesidades de los clientes a partir del diseño y aplicación de una encuesta para planear y estructurar procesos de servicios que satisfagan a los usuarios en la compañía. <br><br>Para ello, ingrese al material ",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy48',
                                    type: 'text',
                                    rect: ['1px', '40px','579px','26px','auto', 'auto'],
                                    text: "DESCRIPCIÓN<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy47',
                                    type: 'text',
                                    rect: ['1px', '0px','579px','26px','auto', 'auto'],
                                    text: "Diseño y Aplicación de una Encuesta <br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                }]
                            },
                            {
                                id: 'Text5Copy46',
                                type: 'text',
                                rect: ['0px', '31px','579px','26px','auto', 'auto'],
                                text: "EVIDENCIA 5<br>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                            }]
                        },
                        {
                            id: 'text_evidencia5_1',
                            type: 'group',
                            rect: ['38', '46','580','529','auto', 'auto'],
                            c: [
                            {
                                id: 'Group49',
                                type: 'group',
                                rect: ['0', '40','622px','248px','auto', 'auto'],
                                c: [
                                {
                                    id: 'Text5Copy45',
                                    type: 'text',
                                    rect: ['0px', '0px','580px','382px','auto', 'auto'],
                                    text: "Para realizar su aporte sobre al Diseño y Aplicación de una Encuesta, debe hacerlo por la siguiente ruta: <br><br>1.\tClic en Menú principal <br><br>2.\tClic en Actividades<br><br>3.\tClic en la carpeta Proyecto Formativo<br><br>4.\tClic en la carpeta Fase Evaluación<br><br>5.\tClic en la carpeta Actividad de proyecto 5<br><br>6.\tClic en la carpeta  Actividad de Aprendizaje 10<br><br>7.\tClic en la carpeta Evidencias de la Actividad de Aprendizaje 10<br><br>8.\tClic en el enlace espacio para Evidencia 5: E Diseño y Aplicación de una Encuesta <br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                }]
                            },
                            {
                                id: 'Text5Copy44',
                                type: 'text',
                                rect: ['0px', '0px','580px','25px','auto', 'auto'],
                                text: "FORMA DE ENTREGA<br>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                            }]
                        },
                        {
                            id: 'text_evidencia5_2',
                            type: 'group',
                            rect: ['37', '48px','620','484','auto', 'auto'],
                            c: [
                            {
                                id: 'Group50',
                                type: 'group',
                                rect: ['0', '7px','619px','259px','auto', 'auto'],
                                c: [
                                {
                                    id: 'Text5Copy43',
                                    type: 'text',
                                    rect: ['0px', '661px','580px','26px','auto', 'auto'],
                                    text: "Lista de Chequeo.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy42',
                                    type: 'text',
                                    rect: ['0px', '622px','580px','26px','auto', 'auto'],
                                    text: "INSTRUMENTO DE EVALUACIÓN<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy41',
                                    type: 'text',
                                    rect: ['0px', '38px','580px','300px','auto', 'auto'],
                                    text: "•\tPropone los soportes a los procesos de las estrategias de comercialización de servicios, según políticas de la organización.<br><br>•\tEvalúa el desarrollo de las relaciones con los clientes, según políticas de la organización, objetivos y estrategias del plan de mercadeo.<br><br>•\tRevisa el código de ética de la organización teniendo en cuenta los criterios definidos en las acciones de mejora.<br><br>•\tCoteja los manuales de protocolo de productos y servicio, establecidos en el plan de mejora según políticas de la empresa.<br><br>•\tDiseña actividades del programa de mejoramiento, teniendo en cuenta los resultados del servicio y los tipos de cliente.<br><br>•\tEvalúa la información del plan de mejora, teniendo en cuenta las herramientas y tecnologías establecidas por la empresa.<br><br>•\tElabora la propuesta de solución de servicio, de acuerdo a las necesidades, intereses y exigencias del mercado objetivo.<br><br>•\tDetermina la propuesta de servicio, teniendo en cuenta las necesidades de los clientes.<br><br>•\tInteractúa con las partes interesadas sobre la propuesta de solución del servicio, de acuerdo con los protocolos de comunicación de la organización.<br><br>•\tMejora los elementos de la propuesta de solución del servicio, según las solicitudes del cliente.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy40',
                                    type: 'text',
                                    rect: ['0px', '0px','580px','26px','auto', 'auto'],
                                    text: "CRITERIOS DE EVALUACIÓN<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                }]
                            }]
                        }]
                    }]
                },
                {
                    id: 'cont6',
                    display: 'block',
                    type: 'group',
                    rect: ['12px', '0px','894','555','auto', 'auto'],
                    c: [
                    {
                        id: 'conte_evi6',
                        type: 'rect',
                        rect: ['180px', '120px','687px','372px','auto', 'auto'],
                        fill: ["rgba(84,255,0,0.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"],
                        c: [
                        {
                            id: 'text_evidencia6',
                            type: 'group',
                            rect: ['38', '25px','612','324','auto', 'auto'],
                            c: [
                            {
                                id: 'Group51',
                                type: 'group',
                                rect: ['0', '78px','622px','236px','auto', 'auto'],
                                c: [
                                {
                                    id: 'Text5Copy39',
                                    type: 'text',
                                    rect: ['0px', '455px','580px','46px','auto', 'auto'],
                                    text: "Documento en Word, PDF, PPT, Slideshare, Prezi o cualquier otra herramienta de su preferencia con el Informe “Direccionamiento Estratégico de las Empresas”.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy38',
                                    type: 'text',
                                    rect: ['0px', '418px','580px','25px','auto', 'auto'],
                                    text: "PRODUCTO ENTREGABLE",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy37',
                                    type: 'text',
                                    rect: ['0px', '316px','580px','25px','auto', 'auto'],
                                    text: "Después de realizar la lectura del instructivo, desarrolle el informe allí planteado. Para la elaboración del Informe “Direccionamiento Estratégico de las Empresas”, puede tener en cuenta las herramientas de Word, PDF, Slideshare, Prezi, PPT o cualquier otra de su preferencia. <br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy36',
                                    type: 'text',
                                    rect: ['0px', '236px','580px','25px','auto', 'auto'],
                                    text: "Menú principal / Materiales del Programa / Proyecto Formativo / Fase Evaluación / Actividad de proyecto 5 / Actividad de Aprendizaje 10 / Material Complementario / Instructivo: Informe “Direccionamiento Estratégico de las Empresas”.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "italic"]
                                },
                                {
                                    id: 'Text5Copy35',
                                    type: 'text',
                                    rect: ['0px', '196px','580px','23px','auto', 'auto'],
                                    text: "Disponible en la siguiente ruta: <br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy34',
                                    type: 'text',
                                    rect: ['0px', '157px','580px','25px','auto', 'auto'],
                                    text: "Instructivo: Informe “Direccionamiento Estratégico de las Empresas”.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy33',
                                    type: 'text',
                                    rect: ['0px', '74px','580px','41px','auto', 'auto'],
                                    text: "Después de estudiar el material de formación titulado El ABC para la Satisfacción al Cliente y documentarse sobre el tema a través de otras fuentes de información, realice la lectura del siguiente material complementario:<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy32',
                                    type: 'text',
                                    rect: ['0px', '40px','580px','18px','auto', 'auto'],
                                    text: "DESCRIPCIÓN<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy31',
                                    type: 'text',
                                    rect: ['0px', '0px','580px','22px','auto', 'auto'],
                                    text: "Informe “Direccionamiento Estratégico de las Empresas” <br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                }]
                            },
                            {
                                id: 'Text5Copy30',
                                type: 'text',
                                rect: ['0px', '32px','580px','22px','auto', 'auto'],
                                text: "EVIDENCIA 6",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                            }]
                        },
                        {
                            id: 'text_evidencia6_1',
                            type: 'group',
                            rect: ['38', '46','580','486','auto', 'auto'],
                            c: [
                            {
                                id: 'Group52',
                                type: 'group',
                                rect: ['0', '40','620px','243px','auto', 'auto'],
                                c: [
                                {
                                    id: 'Text5Copy29',
                                    type: 'text',
                                    rect: ['0px', '0px','580px','379px','auto', 'auto'],
                                    text: "Para realizar su aporte sobre el Informe “Direccionamiento Estratégico de las Empresas”, debe hacerlo por la siguiente ruta: <br><br>1.\tClic en Menú principal <br><br>2.\tClic en Actividades<br><br>3.\tClic en la carpeta Proyecto Formativo<br><br>4.\tClic en la carpeta Fase Evaluación<br><br>5.\tClic en la carpeta Actividad de proyecto 5<br><br>6.\tClic en la carpeta  Actividad de Aprendizaje 10<br><br>7.\tClic en la carpeta Evidencias de la Actividad de Aprendizaje 10<br><br>8.\tClic en el enlace espacio para Evidencia 6: Informe “Direccionamiento Estratégico de las Empresas”.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                }]
                            },
                            {
                                id: 'Text5Copy28',
                                type: 'text',
                                rect: ['0px', '0px','580px','25px','auto', 'auto'],
                                text: "FORMA DE ENTREGA<br>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                            }]
                        },
                        {
                            id: 'text_evidencia6_2',
                            type: 'group',
                            rect: ['38', '47','621','280','auto', 'auto'],
                            c: [
                            {
                                id: 'Group53',
                                type: 'group',
                                rect: ['0', '17px','618px','246px','auto', 'auto'],
                                c: [
                                {
                                    id: 'Text5Copy27',
                                    type: 'text',
                                    rect: ['0px', '663px','580px','27px','auto', 'auto'],
                                    text: "Lista de Chequeo.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy26',
                                    type: 'text',
                                    rect: ['0px', '625px','580px','25px','auto', 'auto'],
                                    text: "INSTRUMENTO DE EVALUACIÓN<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy25',
                                    type: 'text',
                                    rect: ['0px', '44px','580px','282px','auto', 'auto'],
                                    text: "•\tPropone los soportes a los procesos de las estrategias de comercialización de servicios, según políticas de la organización.<br><br>•\tEvalúa el desarrollo de las relaciones con los clientes, según políticas de la organización, objetivos y estrategias del plan de mercadeo.<br><br>•\tRevisa el código de ética de la organización teniendo en cuenta los criterios definidos en las acciones de mejora.<br><br>•\tCoteja los manuales de protocolo de productos y servicio, establecidos en el plan de mejora según políticas de la empresa.<br><br>•\tDiseña actividades del programa de mejoramiento, teniendo en cuenta los resultados del servicio y los tipos de cliente.<br><br>•\tEvalúa la información del plan de mejora, teniendo en cuenta las herramientas y tecnologías establecidas por la empresa.<br><br>•\tElabora la propuesta de solución de servicio, de acuerdo a las necesidades, intereses y exigencias del mercado objetivo.<br><br>•\tDetermina la propuesta de servicio, teniendo en cuenta las necesidades de los clientes.<br><br>•\tInteractúa con las partes interesadas sobre la propuesta de solución del servicio, de acuerdo con los protocolos de comunicación de la organización.<br><br>•\tMejora los elementos de la propuesta de solución del servicio, según las solicitudes del cliente.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy24',
                                    type: 'text',
                                    rect: ['0px', '0px','580px','25px','auto', 'auto'],
                                    text: "CRITERIOS DE EVALUACIÓN<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                }]
                            }]
                        }]
                    }]
                },
                {
                    id: 'cont7',
                    display: 'block',
                    type: 'group',
                    rect: ['11px', '0px','894','555','auto', 'auto'],
                    c: [
                    {
                        id: 'conte_evi7',
                        type: 'rect',
                        rect: ['180px', '120px','687px','372px','auto', 'auto'],
                        fill: ["rgba(84,255,0,0.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"],
                        c: [
                        {
                            id: 'text_evidencia7',
                            type: 'group',
                            rect: ['34', '26','580','708','auto', 'auto'],
                            c: [
                            {
                                id: 'Group54',
                                type: 'group',
                                rect: ['0', '73px','621px','234px','auto', 'auto'],
                                c: [
                                {
                                    id: 'Text5Copy23',
                                    type: 'text',
                                    rect: ['0px', '458px','580px','39px','auto', 'auto'],
                                    text: "Documento en Excel. Word, PDF, PPT, Slideshare, Prezi o cualquier otra herramienta de su preferencia con la Salida de Campo.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy22',
                                    type: 'text',
                                    rect: ['0px', '417px','580px','26px','auto', 'auto'],
                                    text: "PRODUCTO ENTREGABLE<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy21',
                                    type: 'text',
                                    rect: ['0px', '331px','580px','74px','auto', 'auto'],
                                    text: "Después de realizar la lectura del instructivo, desarrolle el informe allí planteado. Para la elaboración del Documento “Salida de Campo”, puede tener en cuenta las herramientas de Word, PDF, Slideshare, Prezi, PPT o cualquier otra de su preferencia. <br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy20',
                                    type: 'text',
                                    rect: ['0px', '248px','580px','64px','auto', 'auto'],
                                    text: "Menú principal / Materiales del Programa / Proyecto Formativo / Fase Evaluación / Actividad de proyecto 5 / Actividad de Aprendizaje 10 / Material Complementario / Instructivo: Informe “Salida de Campo”.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "italic"]
                                },
                                {
                                    id: 'Text5Copy19',
                                    type: 'text',
                                    rect: ['0px', '208px','580px','26px','auto', 'auto'],
                                    text: "Disponible en la siguiente ruta: <br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy18',
                                    type: 'text',
                                    rect: ['0px', '165px','580px','23px','auto', 'auto'],
                                    text: "Instructivo: “Salida de Campo”.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy17',
                                    type: 'text',
                                    rect: ['0px', '80px','580px','39px','auto', 'auto'],
                                    text: "Después de estudiar el material de formación titulado El ABC para la Satisfacción al Cliente y documentarse sobre el tema a través de otras fuentes de información, realice la lectura del siguiente material complementario:<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy16',
                                    type: 'text',
                                    rect: ['0px', '40px','580px','26px','auto', 'auto'],
                                    text: "DESCRIPCIÓN<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy15',
                                    type: 'text',
                                    rect: ['0px', '0px','580px','26px','auto', 'auto'],
                                    text: "Salida de Campo <br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                }]
                            },
                            {
                                id: 'Text5Copy14',
                                type: 'text',
                                rect: ['0px', '23px','580px','26px','auto', 'auto'],
                                text: "EVIDENCIA 7<br>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                            }]
                        },
                        {
                            id: 'text_evidencia7_1',
                            type: 'group',
                            rect: ['37', '37px','620','285','auto', 'auto'],
                            c: [
                            {
                                id: 'Group55',
                                type: 'group',
                                rect: ['0', '50px','621px','244px','auto', 'auto'],
                                c: [
                                {
                                    id: 'Text5Copy13',
                                    type: 'text',
                                    rect: ['0px', '0px','580px','384px','auto', 'auto'],
                                    text: "Para realizar su aporte sobre al documento  “Salida de Campo”, debe hacerlo por la siguiente ruta: <br><br>1.\tClic en Menú principal <br><br>2.\tClic en Actividades<br><br>3.\tClic en la carpeta Proyecto Formativo<br><br>4.\tClic en la carpeta Fase Evaluación<br><br>5.\tClic en la carpeta Actividad de proyecto 5<br><br>6.\tClic en la carpeta  Actividad de Aprendizaje 10<br><br>7.\tClic en la carpeta Evidencias de la Actividad de Aprendizaje 10<br><br>8.\tClic en el enlace espacio para Evidencia 7: Salida de Campo.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                }]
                            },
                            {
                                id: 'Text5Copy12',
                                type: 'text',
                                rect: ['0px', '9px','580px','26px','auto', 'auto'],
                                text: "FORMA DE ENTREGA<br>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                            }]
                        },
                        {
                            id: 'text_evidencia7_2',
                            type: 'group',
                            rect: ['37', '48px','620','484','auto', 'auto'],
                            c: [
                            {
                                id: 'Group57',
                                type: 'group',
                                rect: ['0', '8px','621px','264px','auto', 'auto'],
                                c: [
                                {
                                    id: 'Text5Copy11',
                                    type: 'text',
                                    rect: ['0px', '653px','580px','26px','auto', 'auto'],
                                    text: "Lista de Chequeo.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy10',
                                    type: 'text',
                                    rect: ['0px', '620px','580px','26px','auto', 'auto'],
                                    text: "INSTRUMENTO DE EVALUACIÓN<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy9',
                                    type: 'text',
                                    rect: ['0px', '38px','580px','285px','auto', 'auto'],
                                    text: "•\tPropone los soportes a los procesos de las estrategias de comercialización de servicios, según políticas de la organización.<br><br>•\tEvalúa el desarrollo de las relaciones con los clientes, según políticas de la organización, objetivos y estrategias del plan de mercadeo.<br><br>•\tRevisa el código de ética de la organización teniendo en cuenta los criterios definidos en las acciones de mejora.<br><br>•\tCoteja los manuales de protocolo de productos y servicio, establecidos en el plan de mejora según políticas de la empresa.<br><br>•\tDiseña actividades del programa de mejoramiento, teniendo en cuenta los resultados del servicio y los tipos de cliente.<br><br>•\tEvalúa la información del plan de mejora, teniendo en cuenta las herramientas y tecnologías establecidas por la empresa.<br><br>•\tElabora la propuesta de solución de servicio, de acuerdo a las necesidades, intereses y exigencias del mercado objetivo.<br><br>•\tDetermina la propuesta de servicio, teniendo en cuenta las necesidades de los clientes.<br><br>•\tInteractúa con las partes interesadas sobre la propuesta de solución del servicio, de acuerdo con los protocolos de comunicación de la organización.<br><br>•\tMejora los elementos de la propuesta de solución del servicio, según las solicitudes del cliente.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy8',
                                    type: 'text',
                                    rect: ['0px', '0px','580px','26px','auto', 'auto'],
                                    text: "CRITERIOS DE EVALUACIÓN<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                }]
                            }]
                        }]
                    }]
                },
                {
                    id: 'cont8',
                    display: 'block',
                    type: 'group',
                    rect: ['11px', '0px','894','555','auto', 'auto'],
                    c: [
                    {
                        id: 'conte_evi8',
                        type: 'rect',
                        rect: ['180px', '120px','687px','372px','auto', 'auto'],
                        fill: ["rgba(84,255,0,0.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"],
                        c: [
                        {
                            id: 'text_evidencia8',
                            type: 'group',
                            rect: ['34', '26','580','708','auto', 'auto'],
                            c: [
                            {
                                id: 'Group54Copy',
                                type: 'group',
                                rect: ['0', '73px','621px','234px','auto', 'auto'],
                                c: [
                                {
                                    id: 'Text5Copy152',
                                    type: 'text',
                                    rect: ['0px', '458px','580px','39px','auto', 'auto'],
                                    text: "Documento en Excel. Word, PDF, PPT, Slideshare, Prezi o cualquier otra herramienta de su preferencia con la Salida de Campo.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy151',
                                    type: 'text',
                                    rect: ['0px', '417px','580px','26px','auto', 'auto'],
                                    text: "PRODUCTO ENTREGABLE<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy150',
                                    type: 'text',
                                    rect: ['0px', '331px','580px','74px','auto', 'auto'],
                                    text: "Después de realizar la lectura del instructivo, desarrolle el informe allí planteado. Para la elaboración del Documento “Salida de Campo”, puede tener en cuenta las herramientas de Word, PDF, Slideshare, Prezi, PPT o cualquier otra de su preferencia. <br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy149',
                                    type: 'text',
                                    rect: ['0px', '248px','580px','64px','auto', 'auto'],
                                    text: "Menú principal / Materiales del Programa / Proyecto Formativo / Fase Evaluación / Actividad de proyecto 5 / Actividad de Aprendizaje 10 / Material Complementario / Instructivo: Informe “Salida de Campo”.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "italic"]
                                },
                                {
                                    id: 'Text5Copy148',
                                    type: 'text',
                                    rect: ['0px', '208px','580px','26px','auto', 'auto'],
                                    text: "Disponible en la siguiente ruta: <br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy147',
                                    type: 'text',
                                    rect: ['0px', '165px','580px','23px','auto', 'auto'],
                                    text: "Instructivo: “Salida de Campo”.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy146',
                                    type: 'text',
                                    rect: ['0px', '80px','580px','39px','auto', 'auto'],
                                    text: "Después de estudiar el material de formación titulado El ABC para la Satisfacción al Cliente y documentarse sobre el tema a través de otras fuentes de información, realice la lectura del siguiente material complementario:<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy145',
                                    type: 'text',
                                    rect: ['0px', '40px','580px','26px','auto', 'auto'],
                                    text: "DESCRIPCIÓN<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy144',
                                    type: 'text',
                                    rect: ['0px', '0px','580px','26px','auto', 'auto'],
                                    text: "Salida de Campo <br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                }]
                            },
                            {
                                id: 'Text5Copy143',
                                type: 'text',
                                rect: ['0px', '23px','580px','26px','auto', 'auto'],
                                text: "EVIDENCIA 7<br>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                            }]
                        },
                        {
                            id: 'text_evidencia8_1',
                            type: 'group',
                            rect: ['37', '37px','620','285','auto', 'auto'],
                            c: [
                            {
                                id: 'Group55Copy',
                                type: 'group',
                                rect: ['0', '50px','621px','244px','auto', 'auto'],
                                c: [
                                {
                                    id: 'Text5Copy142',
                                    type: 'text',
                                    rect: ['0px', '0px','580px','384px','auto', 'auto'],
                                    text: "Para realizar su aporte sobre al documento  “Salida de Campo”, debe hacerlo por la siguiente ruta: <br><br>1.\tClic en Menú principal <br><br>2.\tClic en Actividades<br><br>3.\tClic en la carpeta Proyecto Formativo<br><br>4.\tClic en la carpeta Fase Evaluación<br><br>5.\tClic en la carpeta Actividad de proyecto 5<br><br>6.\tClic en la carpeta  Actividad de Aprendizaje 10<br><br>7.\tClic en la carpeta Evidencias de la Actividad de Aprendizaje 10<br><br>8.\tClic en el enlace espacio para Evidencia 7: Salida de Campo.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                }]
                            },
                            {
                                id: 'Text5Copy141',
                                type: 'text',
                                rect: ['0px', '9px','580px','26px','auto', 'auto'],
                                text: "FORMA DE ENTREGA<br>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                            }]
                        },
                        {
                            id: 'text_evidencia8_2',
                            type: 'group',
                            rect: ['37', '48px','620','484','auto', 'auto'],
                            c: [
                            {
                                id: 'Group57Copy',
                                type: 'group',
                                rect: ['0', '8px','621px','264px','auto', 'auto'],
                                c: [
                                {
                                    id: 'Text5Copy140',
                                    type: 'text',
                                    rect: ['0px', '653px','580px','26px','auto', 'auto'],
                                    text: "Lista de Chequeo.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy139',
                                    type: 'text',
                                    rect: ['0px', '620px','580px','26px','auto', 'auto'],
                                    text: "INSTRUMENTO DE EVALUACIÓN<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy138',
                                    type: 'text',
                                    rect: ['0px', '38px','580px','285px','auto', 'auto'],
                                    text: "•\tPropone los soportes a los procesos de las estrategias de comercialización de servicios, según políticas de la organización.<br><br>•\tEvalúa el desarrollo de las relaciones con los clientes, según políticas de la organización, objetivos y estrategias del plan de mercadeo.<br><br>•\tRevisa el código de ética de la organización teniendo en cuenta los criterios definidos en las acciones de mejora.<br><br>•\tCoteja los manuales de protocolo de productos y servicio, establecidos en el plan de mejora según políticas de la empresa.<br><br>•\tDiseña actividades del programa de mejoramiento, teniendo en cuenta los resultados del servicio y los tipos de cliente.<br><br>•\tEvalúa la información del plan de mejora, teniendo en cuenta las herramientas y tecnologías establecidas por la empresa.<br><br>•\tElabora la propuesta de solución de servicio, de acuerdo a las necesidades, intereses y exigencias del mercado objetivo.<br><br>•\tDetermina la propuesta de servicio, teniendo en cuenta las necesidades de los clientes.<br><br>•\tInteractúa con las partes interesadas sobre la propuesta de solución del servicio, de acuerdo con los protocolos de comunicación de la organización.<br><br>•\tMejora los elementos de la propuesta de solución del servicio, según las solicitudes del cliente.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy137',
                                    type: 'text',
                                    rect: ['0px', '0px','580px','26px','auto', 'auto'],
                                    text: "CRITERIOS DE EVALUACIÓN<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                }]
                            }]
                        }]
                    }]
                },
                {
                    id: 'cont9',
                    display: 'block',
                    type: 'group',
                    rect: ['11px', '0px','894','555','auto', 'auto'],
                    c: [
                    {
                        id: 'conte_evi9',
                        type: 'rect',
                        rect: ['180px', '120px','687px','372px','auto', 'auto'],
                        fill: ["rgba(84,255,0,0.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"],
                        c: [
                        {
                            id: 'text_evidencia9',
                            type: 'group',
                            rect: ['34', '26','580','708','auto', 'auto'],
                            c: [
                            {
                                id: 'Group54Copy2',
                                type: 'group',
                                rect: ['0', '73px','621px','234px','auto', 'auto'],
                                c: [
                                {
                                    id: 'Text5Copy168',
                                    type: 'text',
                                    rect: ['0px', '458px','580px','39px','auto', 'auto'],
                                    text: "Documento en Excel. Word, PDF, PPT, Slideshare, Prezi o cualquier otra herramienta de su preferencia con la Salida de Campo.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy167',
                                    type: 'text',
                                    rect: ['0px', '417px','580px','26px','auto', 'auto'],
                                    text: "PRODUCTO ENTREGABLE<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy166',
                                    type: 'text',
                                    rect: ['0px', '331px','580px','74px','auto', 'auto'],
                                    text: "Después de realizar la lectura del instructivo, desarrolle el informe allí planteado. Para la elaboración del Documento “Salida de Campo”, puede tener en cuenta las herramientas de Word, PDF, Slideshare, Prezi, PPT o cualquier otra de su preferencia. <br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy165',
                                    type: 'text',
                                    rect: ['0px', '248px','580px','64px','auto', 'auto'],
                                    text: "Menú principal / Materiales del Programa / Proyecto Formativo / Fase Evaluación / Actividad de proyecto 5 / Actividad de Aprendizaje 10 / Material Complementario / Instructivo: Informe “Salida de Campo”.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "italic"]
                                },
                                {
                                    id: 'Text5Copy164',
                                    type: 'text',
                                    rect: ['0px', '208px','580px','26px','auto', 'auto'],
                                    text: "Disponible en la siguiente ruta: <br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy163',
                                    type: 'text',
                                    rect: ['0px', '165px','580px','23px','auto', 'auto'],
                                    text: "Instructivo: “Salida de Campo”.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy162',
                                    type: 'text',
                                    rect: ['0px', '80px','580px','39px','auto', 'auto'],
                                    text: "Después de estudiar el material de formación titulado El ABC para la Satisfacción al Cliente y documentarse sobre el tema a través de otras fuentes de información, realice la lectura del siguiente material complementario:<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy161',
                                    type: 'text',
                                    rect: ['0px', '40px','580px','26px','auto', 'auto'],
                                    text: "DESCRIPCIÓN<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy160',
                                    type: 'text',
                                    rect: ['0px', '0px','580px','26px','auto', 'auto'],
                                    text: "Salida de Campo <br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                }]
                            },
                            {
                                id: 'Text5Copy159',
                                type: 'text',
                                rect: ['0px', '23px','580px','26px','auto', 'auto'],
                                text: "EVIDENCIA 7<br>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                            }]
                        },
                        {
                            id: 'text_evidencia9_1',
                            type: 'group',
                            rect: ['37', '37px','620','285','auto', 'auto'],
                            c: [
                            {
                                id: 'Group55Copy2',
                                type: 'group',
                                rect: ['0', '50px','621px','244px','auto', 'auto'],
                                c: [
                                {
                                    id: 'Text5Copy158',
                                    type: 'text',
                                    rect: ['0px', '0px','580px','384px','auto', 'auto'],
                                    text: "Para realizar su aporte sobre al documento  “Salida de Campo”, debe hacerlo por la siguiente ruta: <br><br>1.\tClic en Menú principal <br><br>2.\tClic en Actividades<br><br>3.\tClic en la carpeta Proyecto Formativo<br><br>4.\tClic en la carpeta Fase Evaluación<br><br>5.\tClic en la carpeta Actividad de proyecto 5<br><br>6.\tClic en la carpeta  Actividad de Aprendizaje 10<br><br>7.\tClic en la carpeta Evidencias de la Actividad de Aprendizaje 10<br><br>8.\tClic en el enlace espacio para Evidencia 7: Salida de Campo.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                }]
                            },
                            {
                                id: 'Text5Copy157',
                                type: 'text',
                                rect: ['0px', '9px','580px','26px','auto', 'auto'],
                                text: "FORMA DE ENTREGA<br>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                            }]
                        },
                        {
                            id: 'text_evidencia9_2',
                            type: 'group',
                            rect: ['37', '48px','620','484','auto', 'auto'],
                            c: [
                            {
                                id: 'Group57Copy2',
                                type: 'group',
                                rect: ['0', '8px','621px','264px','auto', 'auto'],
                                c: [
                                {
                                    id: 'Text5Copy156',
                                    type: 'text',
                                    rect: ['0px', '653px','580px','26px','auto', 'auto'],
                                    text: "Lista de Chequeo.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy155',
                                    type: 'text',
                                    rect: ['0px', '620px','580px','26px','auto', 'auto'],
                                    text: "INSTRUMENTO DE EVALUACIÓN<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy154',
                                    type: 'text',
                                    rect: ['0px', '38px','580px','285px','auto', 'auto'],
                                    text: "•\tPropone los soportes a los procesos de las estrategias de comercialización de servicios, según políticas de la organización.<br><br>•\tEvalúa el desarrollo de las relaciones con los clientes, según políticas de la organización, objetivos y estrategias del plan de mercadeo.<br><br>•\tRevisa el código de ética de la organización teniendo en cuenta los criterios definidos en las acciones de mejora.<br><br>•\tCoteja los manuales de protocolo de productos y servicio, establecidos en el plan de mejora según políticas de la empresa.<br><br>•\tDiseña actividades del programa de mejoramiento, teniendo en cuenta los resultados del servicio y los tipos de cliente.<br><br>•\tEvalúa la información del plan de mejora, teniendo en cuenta las herramientas y tecnologías establecidas por la empresa.<br><br>•\tElabora la propuesta de solución de servicio, de acuerdo a las necesidades, intereses y exigencias del mercado objetivo.<br><br>•\tDetermina la propuesta de servicio, teniendo en cuenta las necesidades de los clientes.<br><br>•\tInteractúa con las partes interesadas sobre la propuesta de solución del servicio, de acuerdo con los protocolos de comunicación de la organización.<br><br>•\tMejora los elementos de la propuesta de solución del servicio, según las solicitudes del cliente.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy153',
                                    type: 'text',
                                    rect: ['0px', '0px','580px','26px','auto', 'auto'],
                                    text: "CRITERIOS DE EVALUACIÓN<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                }]
                            }]
                        }]
                    }]
                },
                {
                    id: 'cont10',
                    display: 'block',
                    type: 'group',
                    rect: ['11px', '0px','894','555','auto', 'auto'],
                    c: [
                    {
                        id: 'conte_evi10',
                        type: 'rect',
                        rect: ['180px', '120px','687px','372px','auto', 'auto'],
                        fill: ["rgba(84,255,0,0.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"],
                        c: [
                        {
                            id: 'text_evidencia10',
                            type: 'group',
                            rect: ['34', '26','580','708','auto', 'auto'],
                            c: [
                            {
                                id: 'Group54Copy3',
                                type: 'group',
                                rect: ['0', '73px','621px','234px','auto', 'auto'],
                                c: [
                                {
                                    id: 'Text5Copy184',
                                    type: 'text',
                                    rect: ['0px', '458px','580px','39px','auto', 'auto'],
                                    text: "Documento en Excel. Word, PDF, PPT, Slideshare, Prezi o cualquier otra herramienta de su preferencia con la Salida de Campo.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy183',
                                    type: 'text',
                                    rect: ['0px', '417px','580px','26px','auto', 'auto'],
                                    text: "PRODUCTO ENTREGABLE<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy182',
                                    type: 'text',
                                    rect: ['0px', '331px','580px','74px','auto', 'auto'],
                                    text: "Después de realizar la lectura del instructivo, desarrolle el informe allí planteado. Para la elaboración del Documento “Salida de Campo”, puede tener en cuenta las herramientas de Word, PDF, Slideshare, Prezi, PPT o cualquier otra de su preferencia. <br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy181',
                                    type: 'text',
                                    rect: ['0px', '248px','580px','64px','auto', 'auto'],
                                    text: "Menú principal / Materiales del Programa / Proyecto Formativo / Fase Evaluación / Actividad de proyecto 5 / Actividad de Aprendizaje 10 / Material Complementario / Instructivo: Informe “Salida de Campo”.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "italic"]
                                },
                                {
                                    id: 'Text5Copy180',
                                    type: 'text',
                                    rect: ['0px', '208px','580px','26px','auto', 'auto'],
                                    text: "Disponible en la siguiente ruta: <br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy179',
                                    type: 'text',
                                    rect: ['0px', '165px','580px','23px','auto', 'auto'],
                                    text: "Instructivo: “Salida de Campo”.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy178',
                                    type: 'text',
                                    rect: ['0px', '80px','580px','39px','auto', 'auto'],
                                    text: "Después de estudiar el material de formación titulado El ABC para la Satisfacción al Cliente y documentarse sobre el tema a través de otras fuentes de información, realice la lectura del siguiente material complementario:<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy177',
                                    type: 'text',
                                    rect: ['0px', '40px','580px','26px','auto', 'auto'],
                                    text: "DESCRIPCIÓN<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy176',
                                    type: 'text',
                                    rect: ['0px', '0px','580px','26px','auto', 'auto'],
                                    text: "Salida de Campo <br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                }]
                            },
                            {
                                id: 'Text5Copy175',
                                type: 'text',
                                rect: ['0px', '23px','580px','26px','auto', 'auto'],
                                text: "EVIDENCIA 7<br>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                            }]
                        },
                        {
                            id: 'text_evidencia10_1',
                            type: 'group',
                            rect: ['37', '37px','620','285','auto', 'auto'],
                            c: [
                            {
                                id: 'Group55Copy3',
                                type: 'group',
                                rect: ['0', '50px','621px','244px','auto', 'auto'],
                                c: [
                                {
                                    id: 'Text5Copy174',
                                    type: 'text',
                                    rect: ['0px', '0px','580px','384px','auto', 'auto'],
                                    text: "Para realizar su aporte sobre al documento  “Salida de Campo”, debe hacerlo por la siguiente ruta: <br><br>1.\tClic en Menú principal <br><br>2.\tClic en Actividades<br><br>3.\tClic en la carpeta Proyecto Formativo<br><br>4.\tClic en la carpeta Fase Evaluación<br><br>5.\tClic en la carpeta Actividad de proyecto 5<br><br>6.\tClic en la carpeta  Actividad de Aprendizaje 10<br><br>7.\tClic en la carpeta Evidencias de la Actividad de Aprendizaje 10<br><br>8.\tClic en el enlace espacio para Evidencia 7: Salida de Campo.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                }]
                            },
                            {
                                id: 'Text5Copy173',
                                type: 'text',
                                rect: ['0px', '9px','580px','26px','auto', 'auto'],
                                text: "FORMA DE ENTREGA<br>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                            }]
                        },
                        {
                            id: 'text_evidencia10_2',
                            type: 'group',
                            rect: ['37', '48px','620','484','auto', 'auto'],
                            c: [
                            {
                                id: 'Group57Copy3',
                                type: 'group',
                                rect: ['0', '8px','621px','264px','auto', 'auto'],
                                c: [
                                {
                                    id: 'Text5Copy172',
                                    type: 'text',
                                    rect: ['0px', '653px','580px','26px','auto', 'auto'],
                                    text: "Lista de Chequeo.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy171',
                                    type: 'text',
                                    rect: ['0px', '620px','580px','26px','auto', 'auto'],
                                    text: "INSTRUMENTO DE EVALUACIÓN<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy170',
                                    type: 'text',
                                    rect: ['0px', '38px','580px','285px','auto', 'auto'],
                                    text: "•\tPropone los soportes a los procesos de las estrategias de comercialización de servicios, según políticas de la organización.<br><br>•\tEvalúa el desarrollo de las relaciones con los clientes, según políticas de la organización, objetivos y estrategias del plan de mercadeo.<br><br>•\tRevisa el código de ética de la organización teniendo en cuenta los criterios definidos en las acciones de mejora.<br><br>•\tCoteja los manuales de protocolo de productos y servicio, establecidos en el plan de mejora según políticas de la empresa.<br><br>•\tDiseña actividades del programa de mejoramiento, teniendo en cuenta los resultados del servicio y los tipos de cliente.<br><br>•\tEvalúa la información del plan de mejora, teniendo en cuenta las herramientas y tecnologías establecidas por la empresa.<br><br>•\tElabora la propuesta de solución de servicio, de acuerdo a las necesidades, intereses y exigencias del mercado objetivo.<br><br>•\tDetermina la propuesta de servicio, teniendo en cuenta las necesidades de los clientes.<br><br>•\tInteractúa con las partes interesadas sobre la propuesta de solución del servicio, de acuerdo con los protocolos de comunicación de la organización.<br><br>•\tMejora los elementos de la propuesta de solución del servicio, según las solicitudes del cliente.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy169',
                                    type: 'text',
                                    rect: ['0px', '0px','580px','26px','auto', 'auto'],
                                    text: "CRITERIOS DE EVALUACIÓN<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                }]
                            }]
                        }]
                    }]
                },
                {
                    id: 'cont11',
                    display: 'block',
                    type: 'group',
                    rect: ['11px', '0px','894','555','auto', 'auto'],
                    c: [
                    {
                        id: 'conte_evi11',
                        type: 'rect',
                        rect: ['180px', '120px','687px','372px','auto', 'auto'],
                        fill: ["rgba(84,255,0,0.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"],
                        c: [
                        {
                            id: 'text_evidencia11',
                            type: 'group',
                            rect: ['34', '26','580','708','auto', 'auto'],
                            c: [
                            {
                                id: 'Group54Copy4',
                                type: 'group',
                                rect: ['0', '73px','621px','234px','auto', 'auto'],
                                c: [
                                {
                                    id: 'Text5Copy200',
                                    type: 'text',
                                    rect: ['0px', '458px','580px','39px','auto', 'auto'],
                                    text: "Documento en Excel. Word, PDF, PPT, Slideshare, Prezi o cualquier otra herramienta de su preferencia con la Salida de Campo.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy199',
                                    type: 'text',
                                    rect: ['0px', '417px','580px','26px','auto', 'auto'],
                                    text: "PRODUCTO ENTREGABLE<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy198',
                                    type: 'text',
                                    rect: ['0px', '331px','580px','74px','auto', 'auto'],
                                    text: "Después de realizar la lectura del instructivo, desarrolle el informe allí planteado. Para la elaboración del Documento “Salida de Campo”, puede tener en cuenta las herramientas de Word, PDF, Slideshare, Prezi, PPT o cualquier otra de su preferencia. <br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy197',
                                    type: 'text',
                                    rect: ['0px', '248px','580px','64px','auto', 'auto'],
                                    text: "Menú principal / Materiales del Programa / Proyecto Formativo / Fase Evaluación / Actividad de proyecto 5 / Actividad de Aprendizaje 10 / Material Complementario / Instructivo: Informe “Salida de Campo”.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "italic"]
                                },
                                {
                                    id: 'Text5Copy196',
                                    type: 'text',
                                    rect: ['0px', '208px','580px','26px','auto', 'auto'],
                                    text: "Disponible en la siguiente ruta: <br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy195',
                                    type: 'text',
                                    rect: ['0px', '165px','580px','23px','auto', 'auto'],
                                    text: "Instructivo: “Salida de Campo”.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy194',
                                    type: 'text',
                                    rect: ['0px', '80px','580px','39px','auto', 'auto'],
                                    text: "Después de estudiar el material de formación titulado El ABC para la Satisfacción al Cliente y documentarse sobre el tema a través de otras fuentes de información, realice la lectura del siguiente material complementario:<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy193',
                                    type: 'text',
                                    rect: ['0px', '40px','580px','26px','auto', 'auto'],
                                    text: "DESCRIPCIÓN<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy192',
                                    type: 'text',
                                    rect: ['0px', '0px','580px','26px','auto', 'auto'],
                                    text: "Salida de Campo <br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                }]
                            },
                            {
                                id: 'Text5Copy191',
                                type: 'text',
                                rect: ['0px', '23px','580px','26px','auto', 'auto'],
                                text: "EVIDENCIA 7<br>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                            }]
                        },
                        {
                            id: 'text_evidencia11_1',
                            type: 'group',
                            rect: ['37', '37px','620','285','auto', 'auto'],
                            c: [
                            {
                                id: 'Group55Copy4',
                                type: 'group',
                                rect: ['0', '50px','621px','244px','auto', 'auto'],
                                c: [
                                {
                                    id: 'Text5Copy190',
                                    type: 'text',
                                    rect: ['0px', '0px','580px','384px','auto', 'auto'],
                                    text: "Para realizar su aporte sobre al documento  “Salida de Campo”, debe hacerlo por la siguiente ruta: <br><br>1.\tClic en Menú principal <br><br>2.\tClic en Actividades<br><br>3.\tClic en la carpeta Proyecto Formativo<br><br>4.\tClic en la carpeta Fase Evaluación<br><br>5.\tClic en la carpeta Actividad de proyecto 5<br><br>6.\tClic en la carpeta  Actividad de Aprendizaje 10<br><br>7.\tClic en la carpeta Evidencias de la Actividad de Aprendizaje 10<br><br>8.\tClic en el enlace espacio para Evidencia 7: Salida de Campo.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                }]
                            },
                            {
                                id: 'Text5Copy189',
                                type: 'text',
                                rect: ['0px', '9px','580px','26px','auto', 'auto'],
                                text: "FORMA DE ENTREGA<br>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                            }]
                        },
                        {
                            id: 'text_evidencia11_2',
                            type: 'group',
                            rect: ['37', '48px','620','484','auto', 'auto'],
                            c: [
                            {
                                id: 'Group57Copy4',
                                type: 'group',
                                rect: ['0', '8px','621px','264px','auto', 'auto'],
                                c: [
                                {
                                    id: 'Text5Copy188',
                                    type: 'text',
                                    rect: ['0px', '653px','580px','26px','auto', 'auto'],
                                    text: "Lista de Chequeo.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy187',
                                    type: 'text',
                                    rect: ['0px', '620px','580px','26px','auto', 'auto'],
                                    text: "INSTRUMENTO DE EVALUACIÓN<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy186',
                                    type: 'text',
                                    rect: ['0px', '38px','580px','285px','auto', 'auto'],
                                    text: "•\tPropone los soportes a los procesos de las estrategias de comercialización de servicios, según políticas de la organización.<br><br>•\tEvalúa el desarrollo de las relaciones con los clientes, según políticas de la organización, objetivos y estrategias del plan de mercadeo.<br><br>•\tRevisa el código de ética de la organización teniendo en cuenta los criterios definidos en las acciones de mejora.<br><br>•\tCoteja los manuales de protocolo de productos y servicio, establecidos en el plan de mejora según políticas de la empresa.<br><br>•\tDiseña actividades del programa de mejoramiento, teniendo en cuenta los resultados del servicio y los tipos de cliente.<br><br>•\tEvalúa la información del plan de mejora, teniendo en cuenta las herramientas y tecnologías establecidas por la empresa.<br><br>•\tElabora la propuesta de solución de servicio, de acuerdo a las necesidades, intereses y exigencias del mercado objetivo.<br><br>•\tDetermina la propuesta de servicio, teniendo en cuenta las necesidades de los clientes.<br><br>•\tInteractúa con las partes interesadas sobre la propuesta de solución del servicio, de acuerdo con los protocolos de comunicación de la organización.<br><br>•\tMejora los elementos de la propuesta de solución del servicio, según las solicitudes del cliente.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy185',
                                    type: 'text',
                                    rect: ['0px', '0px','580px','26px','auto', 'auto'],
                                    text: "CRITERIOS DE EVALUACIÓN<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                }]
                            }]
                        }]
                    }]
                },
                {
                    id: 'cont12',
                    display: 'block',
                    type: 'group',
                    rect: ['11px', '0px','894','555','auto', 'auto'],
                    c: [
                    {
                        id: 'conte_evi12',
                        type: 'rect',
                        rect: ['180px', '120px','687px','372px','auto', 'auto'],
                        fill: ["rgba(84,255,0,0.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"],
                        c: [
                        {
                            id: 'text_evidencia12',
                            type: 'group',
                            rect: ['34', '26','580','708','auto', 'auto'],
                            c: [
                            {
                                id: 'Group54Copy5',
                                type: 'group',
                                rect: ['0', '73px','621px','234px','auto', 'auto'],
                                c: [
                                {
                                    id: 'Text5Copy216',
                                    type: 'text',
                                    rect: ['0px', '458px','580px','39px','auto', 'auto'],
                                    text: "Documento en Excel. Word, PDF, PPT, Slideshare, Prezi o cualquier otra herramienta de su preferencia con la Salida de Campo.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy215',
                                    type: 'text',
                                    rect: ['0px', '417px','580px','26px','auto', 'auto'],
                                    text: "PRODUCTO ENTREGABLE<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy214',
                                    type: 'text',
                                    rect: ['0px', '331px','580px','74px','auto', 'auto'],
                                    text: "Después de realizar la lectura del instructivo, desarrolle el informe allí planteado. Para la elaboración del Documento “Salida de Campo”, puede tener en cuenta las herramientas de Word, PDF, Slideshare, Prezi, PPT o cualquier otra de su preferencia. <br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy213',
                                    type: 'text',
                                    rect: ['0px', '248px','580px','64px','auto', 'auto'],
                                    text: "Menú principal / Materiales del Programa / Proyecto Formativo / Fase Evaluación / Actividad de proyecto 5 / Actividad de Aprendizaje 10 / Material Complementario / Instructivo: Informe “Salida de Campo”.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "italic"]
                                },
                                {
                                    id: 'Text5Copy212',
                                    type: 'text',
                                    rect: ['0px', '208px','580px','26px','auto', 'auto'],
                                    text: "Disponible en la siguiente ruta: <br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy211',
                                    type: 'text',
                                    rect: ['0px', '165px','580px','23px','auto', 'auto'],
                                    text: "Instructivo: “Salida de Campo”.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy210',
                                    type: 'text',
                                    rect: ['0px', '80px','580px','39px','auto', 'auto'],
                                    text: "Después de estudiar el material de formación titulado El ABC para la Satisfacción al Cliente y documentarse sobre el tema a través de otras fuentes de información, realice la lectura del siguiente material complementario:<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy209',
                                    type: 'text',
                                    rect: ['0px', '40px','580px','26px','auto', 'auto'],
                                    text: "DESCRIPCIÓN<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy208',
                                    type: 'text',
                                    rect: ['0px', '0px','580px','26px','auto', 'auto'],
                                    text: "Salida de Campo <br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                }]
                            },
                            {
                                id: 'Text5Copy207',
                                type: 'text',
                                rect: ['0px', '23px','580px','26px','auto', 'auto'],
                                text: "EVIDENCIA 7<br>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                            }]
                        },
                        {
                            id: 'text_evidencia12_1',
                            type: 'group',
                            rect: ['37', '37px','620','285','auto', 'auto'],
                            c: [
                            {
                                id: 'Group55Copy5',
                                type: 'group',
                                rect: ['0', '50px','621px','244px','auto', 'auto'],
                                c: [
                                {
                                    id: 'Text5Copy206',
                                    type: 'text',
                                    rect: ['0px', '0px','580px','384px','auto', 'auto'],
                                    text: "Para realizar su aporte sobre al documento  “Salida de Campo”, debe hacerlo por la siguiente ruta: <br><br>1.\tClic en Menú principal <br><br>2.\tClic en Actividades<br><br>3.\tClic en la carpeta Proyecto Formativo<br><br>4.\tClic en la carpeta Fase Evaluación<br><br>5.\tClic en la carpeta Actividad de proyecto 5<br><br>6.\tClic en la carpeta  Actividad de Aprendizaje 10<br><br>7.\tClic en la carpeta Evidencias de la Actividad de Aprendizaje 10<br><br>8.\tClic en el enlace espacio para Evidencia 7: Salida de Campo.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                }]
                            },
                            {
                                id: 'Text5Copy205',
                                type: 'text',
                                rect: ['0px', '9px','580px','26px','auto', 'auto'],
                                text: "FORMA DE ENTREGA<br>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                            }]
                        },
                        {
                            id: 'text_evidencia12_2',
                            type: 'group',
                            rect: ['37', '48px','620','484','auto', 'auto'],
                            c: [
                            {
                                id: 'Group57Copy5',
                                type: 'group',
                                rect: ['0', '8px','621px','264px','auto', 'auto'],
                                c: [
                                {
                                    id: 'Text5Copy204',
                                    type: 'text',
                                    rect: ['0px', '653px','580px','26px','auto', 'auto'],
                                    text: "Lista de Chequeo.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy203',
                                    type: 'text',
                                    rect: ['0px', '620px','580px','26px','auto', 'auto'],
                                    text: "INSTRUMENTO DE EVALUACIÓN<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy202',
                                    type: 'text',
                                    rect: ['0px', '38px','580px','285px','auto', 'auto'],
                                    text: "•\tPropone los soportes a los procesos de las estrategias de comercialización de servicios, según políticas de la organización.<br><br>•\tEvalúa el desarrollo de las relaciones con los clientes, según políticas de la organización, objetivos y estrategias del plan de mercadeo.<br><br>•\tRevisa el código de ética de la organización teniendo en cuenta los criterios definidos en las acciones de mejora.<br><br>•\tCoteja los manuales de protocolo de productos y servicio, establecidos en el plan de mejora según políticas de la empresa.<br><br>•\tDiseña actividades del programa de mejoramiento, teniendo en cuenta los resultados del servicio y los tipos de cliente.<br><br>•\tEvalúa la información del plan de mejora, teniendo en cuenta las herramientas y tecnologías establecidas por la empresa.<br><br>•\tElabora la propuesta de solución de servicio, de acuerdo a las necesidades, intereses y exigencias del mercado objetivo.<br><br>•\tDetermina la propuesta de servicio, teniendo en cuenta las necesidades de los clientes.<br><br>•\tInteractúa con las partes interesadas sobre la propuesta de solución del servicio, de acuerdo con los protocolos de comunicación de la organización.<br><br>•\tMejora los elementos de la propuesta de solución del servicio, según las solicitudes del cliente.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy201',
                                    type: 'text',
                                    rect: ['0px', '0px','580px','26px','auto', 'auto'],
                                    text: "CRITERIOS DE EVALUACIÓN<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                }]
                            }]
                        }]
                    }]
                },
                {
                    id: 'cont13',
                    display: 'block',
                    type: 'group',
                    rect: ['11px', '0px','894','555','auto', 'auto'],
                    c: [
                    {
                        id: 'conte_evi13',
                        type: 'rect',
                        rect: ['180px', '120px','687px','372px','auto', 'auto'],
                        fill: ["rgba(84,255,0,0.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"],
                        c: [
                        {
                            id: 'text_evidencia13',
                            type: 'group',
                            rect: ['34', '26','580','708','auto', 'auto'],
                            c: [
                            {
                                id: 'Group54Copy6',
                                type: 'group',
                                rect: ['0', '73px','621px','234px','auto', 'auto'],
                                c: [
                                {
                                    id: 'Text5Copy232',
                                    type: 'text',
                                    rect: ['0px', '458px','580px','39px','auto', 'auto'],
                                    text: "Documento en Excel. Word, PDF, PPT, Slideshare, Prezi o cualquier otra herramienta de su preferencia con la Salida de Campo.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy231',
                                    type: 'text',
                                    rect: ['0px', '417px','580px','26px','auto', 'auto'],
                                    text: "PRODUCTO ENTREGABLE<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy230',
                                    type: 'text',
                                    rect: ['0px', '331px','580px','74px','auto', 'auto'],
                                    text: "Después de realizar la lectura del instructivo, desarrolle el informe allí planteado. Para la elaboración del Documento “Salida de Campo”, puede tener en cuenta las herramientas de Word, PDF, Slideshare, Prezi, PPT o cualquier otra de su preferencia. <br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy229',
                                    type: 'text',
                                    rect: ['0px', '248px','580px','64px','auto', 'auto'],
                                    text: "Menú principal / Materiales del Programa / Proyecto Formativo / Fase Evaluación / Actividad de proyecto 5 / Actividad de Aprendizaje 10 / Material Complementario / Instructivo: Informe “Salida de Campo”.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "italic"]
                                },
                                {
                                    id: 'Text5Copy228',
                                    type: 'text',
                                    rect: ['0px', '208px','580px','26px','auto', 'auto'],
                                    text: "Disponible en la siguiente ruta: <br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy227',
                                    type: 'text',
                                    rect: ['0px', '165px','580px','23px','auto', 'auto'],
                                    text: "Instructivo: “Salida de Campo”.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy226',
                                    type: 'text',
                                    rect: ['0px', '80px','580px','39px','auto', 'auto'],
                                    text: "Después de estudiar el material de formación titulado El ABC para la Satisfacción al Cliente y documentarse sobre el tema a través de otras fuentes de información, realice la lectura del siguiente material complementario:<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy225',
                                    type: 'text',
                                    rect: ['0px', '40px','580px','26px','auto', 'auto'],
                                    text: "DESCRIPCIÓN<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy224',
                                    type: 'text',
                                    rect: ['0px', '0px','580px','26px','auto', 'auto'],
                                    text: "Salida de Campo <br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                }]
                            },
                            {
                                id: 'Text5Copy223',
                                type: 'text',
                                rect: ['0px', '23px','580px','26px','auto', 'auto'],
                                text: "EVIDENCIA 7<br>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                            }]
                        },
                        {
                            id: 'text_evidencia13_1',
                            type: 'group',
                            rect: ['37', '37px','620','285','auto', 'auto'],
                            c: [
                            {
                                id: 'Group55Copy6',
                                type: 'group',
                                rect: ['0', '50px','621px','244px','auto', 'auto'],
                                c: [
                                {
                                    id: 'Text5Copy222',
                                    type: 'text',
                                    rect: ['0px', '0px','580px','384px','auto', 'auto'],
                                    text: "Para realizar su aporte sobre al documento  “Salida de Campo”, debe hacerlo por la siguiente ruta: <br><br>1.\tClic en Menú principal <br><br>2.\tClic en Actividades<br><br>3.\tClic en la carpeta Proyecto Formativo<br><br>4.\tClic en la carpeta Fase Evaluación<br><br>5.\tClic en la carpeta Actividad de proyecto 5<br><br>6.\tClic en la carpeta  Actividad de Aprendizaje 10<br><br>7.\tClic en la carpeta Evidencias de la Actividad de Aprendizaje 10<br><br>8.\tClic en el enlace espacio para Evidencia 7: Salida de Campo.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                }]
                            },
                            {
                                id: 'Text5Copy221',
                                type: 'text',
                                rect: ['0px', '9px','580px','26px','auto', 'auto'],
                                text: "FORMA DE ENTREGA<br>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                            }]
                        },
                        {
                            id: 'text_evidencia13_2',
                            type: 'group',
                            rect: ['37', '48px','620','484','auto', 'auto'],
                            c: [
                            {
                                id: 'Group57Copy6',
                                type: 'group',
                                rect: ['0', '8px','621px','264px','auto', 'auto'],
                                c: [
                                {
                                    id: 'Text5Copy220',
                                    type: 'text',
                                    rect: ['0px', '653px','580px','26px','auto', 'auto'],
                                    text: "Lista de Chequeo.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy219',
                                    type: 'text',
                                    rect: ['0px', '620px','580px','26px','auto', 'auto'],
                                    text: "INSTRUMENTO DE EVALUACIÓN<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy218',
                                    type: 'text',
                                    rect: ['0px', '38px','580px','285px','auto', 'auto'],
                                    text: "•\tPropone los soportes a los procesos de las estrategias de comercialización de servicios, según políticas de la organización.<br><br>•\tEvalúa el desarrollo de las relaciones con los clientes, según políticas de la organización, objetivos y estrategias del plan de mercadeo.<br><br>•\tRevisa el código de ética de la organización teniendo en cuenta los criterios definidos en las acciones de mejora.<br><br>•\tCoteja los manuales de protocolo de productos y servicio, establecidos en el plan de mejora según políticas de la empresa.<br><br>•\tDiseña actividades del programa de mejoramiento, teniendo en cuenta los resultados del servicio y los tipos de cliente.<br><br>•\tEvalúa la información del plan de mejora, teniendo en cuenta las herramientas y tecnologías establecidas por la empresa.<br><br>•\tElabora la propuesta de solución de servicio, de acuerdo a las necesidades, intereses y exigencias del mercado objetivo.<br><br>•\tDetermina la propuesta de servicio, teniendo en cuenta las necesidades de los clientes.<br><br>•\tInteractúa con las partes interesadas sobre la propuesta de solución del servicio, de acuerdo con los protocolos de comunicación de la organización.<br><br>•\tMejora los elementos de la propuesta de solución del servicio, según las solicitudes del cliente.<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text5Copy217',
                                    type: 'text',
                                    rect: ['0px', '0px','580px','26px','auto', 'auto'],
                                    text: "CRITERIOS DE EVALUACIÓN<br>",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                                }]
                            }]
                        }]
                    }]
                },
                {
                    id: 'boton_siguiente1',
                    display: 'block',
                    type: 'image',
                    rect: ['543px', '505px','51px','46px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"boton-siguiente3.png",'0px','0px']
                },
                {
                    id: 'boton_atras1',
                    display: 'block',
                    type: 'image',
                    rect: ['483px', '503px','52px','50px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"boton-atras3.png",'0px','0px']
                },
                {
                    id: 'fondo_gris_mapaCopy',
                    display: 'block',
                    type: 'image',
                    rect: ['166px', '92px','742px','431px','auto', 'auto'],
                    clip: ['rect(21.333251953125px 742px 431px 0px)'],
                    fill: ["rgba(0,0,0,0)",im+"fondo_gris_mapa2.png",'0px','0px']
                },
                {
                    id: 'eviCon_1',
                    display: 'block',
                    type: 'group',
                    rect: ['230px', '215px','612','203','auto', 'auto'],
                    c: [
                    {
                        id: 'Text5Copy7',
                        type: 'text',
                        rect: ['0px', '40px','612px','170px','auto', 'auto'],
                        text: "Verificar la satisfacción del cliente y usuario, de acuerdo con las políticas de la organización y la trazabilidad del servicio.<br><br>Verificar la pertinencia de los criterios definidos en las acciones de mejora para la prestación del servicio, de acuerdo con las políticas de servicio de la organización.<br><br>Validar la propuesta de solución del servicio, a partir de las solicitudes del cliente.<br><br>Analizar los resultados de las evaluaciones del servicio, teniendo en cuenta los parámetros o estándares establecidos.<br><br>Identificar formas gramaticales básicas en textos y documentos elementales escritos en inglés.<br>",
                        align: "justify",
                        font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text5Copy6',
                        type: 'text',
                        rect: ['0px', '0px','612px','25px','auto', 'auto'],
                        text: "RESULTADOS DE APRENDIZAJE<br><br>",
                        align: "justify",
                        font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                    }]
                },
                {
                    id: 'eviCon_2',
                    display: 'block',
                    type: 'group',
                    rect: ['230px', '155px','612','203','auto', 'auto'],
                    c: [
                    {
                        id: 'Text5Copy5',
                        type: 'text',
                        rect: ['1px', '150px','612px','49px','auto', 'auto'],
                        text: "LMS, Redes Sociales, Redes de Bibliotecas Virtuales, Sistemas Especializados de Información, Ambientes Virtuales de Aprendizaje.<br>",
                        align: "justify",
                        font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text5Copy4',
                        type: 'text',
                        rect: ['1px', '110px','612px','25px','auto', 'auto'],
                        text: "AMBIENTE (S) REQUERIDO<br>",
                        align: "justify",
                        font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                    }]
                },
                {
                    id: 'eviCon_3',
                    display: 'block',
                    type: 'group',
                    rect: ['230px', '151px','612','203','auto', 'auto'],
                    c: [
                    {
                        id: 'Group9',
                        type: 'group',
                        rect: ['0', '40','580','282','auto', 'auto'],
                        c: [
                        {
                            id: 'Text5Copy3',
                            type: 'text',
                            rect: ['0px', '0px','612px','282px','auto', 'auto'],
                            text: "•\tTrabajo con materiales multimedia interactivos.<br><br>•\tTécnicas centradas en el pensamiento crítico.<br><br>•\tTécnicas centradas en la creatividad.<br><br>•\tTutorías públicas.<br><br>•\tEstudio de casos.<br><br>•\tGlosarios colaborativos.<br><br>•\tResolución de ejercicios en grupos.<br><br>•\tAprendizaje autónomo.<br><br>•\tBúsqueda y análisis de la información.<br>",
                            align: "justify",
                            font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                        }]
                    },
                    {
                        id: 'Text5Copy2',
                        type: 'text',
                        rect: ['0px', '0px','612px','25px','auto', 'auto'],
                        text: "ESTRATEGIAS DE APRENDIZAJE<br>",
                        align: "justify",
                        font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                    }]
                },
                {
                    id: 'eviCon_4',
                    display: 'block',
                    type: 'group',
                    rect: ['230px', '236px','612','203','auto', 'auto'],
                    c: [
                    {
                        id: 'Group12',
                        type: 'group',
                        rect: ['-4', '-21','580','452','auto', 'auto'],
                        c: [
                        {
                            id: 'Text5Copy',
                            type: 'text',
                            rect: ['0px', '0px','628px','233px','auto', 'auto'],
                            text: "García, E. (2006). Indicadores de gestión. Gobierno Regional Junín: Huancayo. http://www.regionjunin.gob.pe<br><br>High Logistics (2010). Modelo de Indicador de Evaluación y Certificación de Proveedores. http://www.highlogistics.com/ <br><br>High Logistics (2010). Modelo de Indicador de Productos Entregados. http://www.highlogistics.com/ <br><br>High Logistics (2010). Modelo de Indicador de Logística en Centros de Distribución. http://www.highlogistics.com/<br><br>High Logistics (2010). Modelo de Indicador de Selección de Transportadores y Operadores Logísticos. http://www.highlogistics.com/ <br><br>Iceberg Inteligencia Cultural (s.f.) Un Centro De Servicios Con Desempeño Dudoso. http://bloginteligenciacultural.com/2014/03/30/un-centro-de-servicios-con-desempeno-dudoso/        <br>                          <br>Infinito (2013). Videos países BRIC. http://www.la.infinito.com/videos/bric-episodio1                              <br><br>Pérez Pravia, Leyva Cardeñosa y Leyva Rodríguez (2009). \"La gestión logística en los servicios, elemento clave en la satisfacción del cliente\" en Contribuciones a la Economía. http://www.eumed.net/ce/2009a/pcr.htm<br><br>Rutureta Álvarez, Elsa. Estadística Inferencia. Técnicas de muestreo. http://es.slideshare.net/HOTELES2/tcnicas-de-muestreo. Consultado el 23 de Septiembre de 2014.<br><br>Senge, P (1997). La Quinta Disciplina. Una historia real del caso de Wonder-Tech. Barcelona: Editorial Juan Granica, S. A.      <br>           <br>Tschohl, Jhon (2008). Video 1: La clave para la satisfacción del cliente. [Video]. Disponible en: https://www.youtube.com/watch?v=G43vru8acFM<br>",
                            align: "justify",
                            font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "400", "none", "normal"]
                        }]
                    },
                    {
                        id: 'Text5',
                        type: 'text',
                        rect: ['-4px', '-61px','612px','25px','auto', 'auto'],
                        text: "BIBLIOGRAFÍA<br>",
                        align: "justify",
                        font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,57,86,1.00)", "700", "none", "normal"]
                    }]
                },
                {
                    id: 'botonesGenericos',
                    display: 'block',
                    type: 'group',
                    rect: ['554px', '57px','331','57','auto', 'auto'],
                    c: [
                    {
                        id: 'btn_eviGen0',
                        type: 'rect',
                        rect: ['-80px', '0px','83px','57px','auto', 'auto'],
                        clip: ['rect(-3.800048828125px 83px 57px 0px)'],
                        fill: ["rgba(84,255,0,1.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"],
                        c: [
                        {
                            id: 'btn1',
                            type: 'group',
                            rect: ['0px', '-57px','87','115','auto', 'auto'],
                            c: [
                            {
                                id: 'RectangleCopy5',
                                type: 'rect',
                                rect: ['0px', '0px','83px','114px','auto', 'auto'],
                                fill: ["rgba(255,109,59,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'evidencias12',
                                type: 'image',
                                rect: ['4px', '60px','83px','55px','auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"evidencias12.png",'0px','0px']
                            },
                            {
                                id: 'Text3Copy6',
                                type: 'text',
                                rect: ['0px', '21px','83px','17px','auto', 'auto'],
                                text: "Evidencias",
                                align: "center",
                                font: ['Arial, Helvetica, sans-serif', 14, "rgba(255,255,255,1.00)", "400", "none", "normal"]
                            }]
                        },
                        {
                            id: 'Rectangle5Copy4',
                            type: 'rect',
                            rect: ['0px', '-3px','83px','5px','auto', 'auto'],
                            fill: ["rgba(229,64,19,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        }]
                    },
                    {
                        id: 'btn_eviGen1',
                        type: 'rect',
                        rect: ['0px', '0px','83px','57px','auto', 'auto'],
                        clip: ['rect(-2.949951171875px 83px 57px 0px)'],
                        fill: ["rgba(84,255,0,1.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"],
                        c: [
                        {
                            id: 'btn2',
                            type: 'group',
                            rect: ['0px', '-57px','83','114','auto', 'auto'],
                            c: [
                            {
                                id: 'RectangleCopy4',
                                type: 'rect',
                                rect: ['0px', '0px','83px','114px','auto', 'auto'],
                                fill: ["rgba(241,52,52,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'resultados_aprendizaje5',
                                type: 'image',
                                rect: ['0px', '59px','83px','55px','auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"resultados_aprendizaje2.png",'0px','0px']
                            },
                            {
                                id: 'Text3Copy5',
                                type: 'text',
                                rect: ['0px', '3px','83px','49px','auto', 'auto'],
                                text: "Resultados de Aprendizaje",
                                align: "center",
                                font: ['Arial, Helvetica, sans-serif', 14, "rgba(255,255,255,1.00)", "400", "none", "normal"]
                            }]
                        },
                        {
                            id: 'Rectangle5Copy3',
                            type: 'rect',
                            rect: ['0px', '-3px','83px','5px','auto', 'auto'],
                            fill: ["rgba(216,141,19,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        }]
                    },
                    {
                        id: 'btn_eviGen2',
                        type: 'rect',
                        rect: ['83px', '0px','83px','57px','auto', 'auto'],
                        clip: ['rect(-3px 83px 57px 0px)'],
                        fill: ["rgba(84,255,0,1.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"],
                        c: [
                        {
                            id: 'btn3',
                            type: 'group',
                            rect: ['-1px', '-57px','85','114','auto', 'auto'],
                            c: [
                            {
                                id: 'RectangleCopy3',
                                type: 'rect',
                                rect: ['1px', '0px','83px','114px','auto', 'auto'],
                                fill: ["rgba(252,185,59,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'ambientes_requeridos',
                                type: 'image',
                                rect: ['2px', '59px','83px','55px','auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"ambientes_requeridos2.png",'0px','0px']
                            },
                            {
                                id: 'Text3Copy4',
                                type: 'text',
                                rect: ['0px', '10px','83px','35px','auto', 'auto'],
                                text: "Ambientes Requeridos",
                                align: "center",
                                font: ['Arial, Helvetica, sans-serif', 14, "rgba(255,255,255,1.00)", "400", "none", "normal"]
                            }]
                        },
                        {
                            id: 'Rectangle5Copy2',
                            type: 'rect',
                            rect: ['0px', '-3px','83px','5px','auto', 'auto'],
                            fill: ["rgba(216,141,19,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        }]
                    },
                    {
                        id: 'btn_eviGen3',
                        type: 'rect',
                        rect: ['165px', '0px','83px','57px','auto', 'auto'],
                        clip: ['rect(-3px 83px 57px 0px)'],
                        fill: ["rgba(84,255,0,1.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"],
                        c: [
                        {
                            id: 'btn4',
                            type: 'group',
                            rect: ['0px', '-57px','83','114','auto', 'auto'],
                            c: [
                            {
                                id: 'RectangleCopy2',
                                type: 'rect',
                                rect: ['0px', '0px','83px','114px','auto', 'auto'],
                                fill: ["rgba(0,160,160,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'estrategias_aprendizaje',
                                type: 'image',
                                rect: ['0px', '59px','83px','55px','auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"estrategias_aprendizaje2.png",'0px','0px']
                            },
                            {
                                id: 'Text3Copy3',
                                type: 'text',
                                rect: ['0px', '4px','83px','49px','auto', 'auto'],
                                text: "Estrategias de Aprendizaje",
                                align: "center",
                                font: ['Arial, Helvetica, sans-serif', 14, "rgba(255,255,255,1.00)", "400", "none", "normal"]
                            }]
                        },
                        {
                            id: 'Rectangle5Copy',
                            type: 'rect',
                            rect: ['0px', '-3px','83px','5px','auto', 'auto'],
                            fill: ["rgba(0,130,126,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        }]
                    },
                    {
                        id: 'btn_eviGen4',
                        type: 'rect',
                        rect: ['247px', '0px','83px','57px','auto', 'auto'],
                        clip: ['rect(-3px 83px 57px 0px)'],
                        fill: ["rgba(84,255,0,1.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"],
                        c: [
                        {
                            id: 'btn5',
                            type: 'group',
                            rect: ['0px', '-100%','83','114','auto', 'auto'],
                            c: [
                            {
                                id: 'RectangleCopy',
                                type: 'rect',
                                rect: ['0px', '0px','83px','114px','auto', 'auto'],
                                fill: ["rgba(4,81,125,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'bibliografia',
                                type: 'image',
                                rect: ['0px', '59px','83px','55px','auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"bibliografia2.png",'0px','0px']
                            },
                            {
                                id: 'Text3Copy2',
                                type: 'text',
                                rect: ['0px', '20px','83px','19px','auto', 'auto'],
                                text: "Bibliografía",
                                align: "center",
                                font: ['Arial, Helvetica, sans-serif', 14, "rgba(255,255,255,1.00)", "400", "none", "normal"]
                            }]
                        },
                        {
                            id: 'Rectangle5',
                            type: 'rect',
                            rect: ['0px', '-3px','83px','5px','auto', 'auto'],
                            fill: ["rgba(0,60,86,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        }]
                    }]
                },
                {
                    id: 'botonVolver2',
                    display: 'block',
                    type: 'rect',
                    rect: ['0px', '24px','auto','auto','auto', 'auto'],
                    cursor: ['pointer']
                },
                {
                    id: 'volverNOBorrar',
                    type: 'rect',
                    rect: ['968px', '74px','44px','44px','auto', 'auto'],
                    fill: ["rgba(84,255,0,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'personaje2_evi',
                    type: 'group',
                    rect: ['12', '209','165','294','auto', 'auto'],
                    c: [
                    {
                        id: 'evi_per2_cuerpo',
                        type: 'image',
                        rect: ['57px', '120px','100px','174px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"evi_per2_cuerpo.png",'0px','0px']
                    },
                    {
                        id: 'cabeza_per2_evi',
                        type: 'group',
                        rect: ['-99', '0','713','173','auto', 'auto'],
                        c: [
                        {
                            id: 'evi_per2_cabeza',
                            type: 'image',
                            rect: ['130px', '0px','134px','145px','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"evi_per2_cabeza.png",'0px','0px']
                        },
                        {
                            id: 'sprite_ojos_instrucciones3',
                            type: 'image',
                            rect: ['163px', '74px','550px','40px','auto', 'auto'],
                            clip: ['rect(0px 71.33349609375px 21.333251953125px 0px)'],
                            fill: ["rgba(0,0,0,0)",im+"sprite_ojos_instrucciones.png",'0px','0px','52%','52%']
                        },
                        {
                            id: 'sprite_bocas_instru',
                            type: 'image',
                            rect: ['0px', '108px','680px','65px','auto', 'auto'],
                            clip: ['rect(0px 229.3330078125px 27.66650390625px 176px)'],
                            fill: ["rgba(0,0,0,0)",im+"sprite_bocas_instru.png",'0px','0px','40%','40%']
                        }]
                    },
                    {
                        id: 'evi_per2_brazo1',
                        type: 'image',
                        rect: ['35px', '136px','57px','86px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"evi_per2_brazo1.png",'0px','0px']
                    },
                    {
                        id: 'evi_per2_brazo2',
                        type: 'image',
                        rect: ['113px', '126px','51px','58px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"evi_per2_brazo2.png",'0px','0px']
                    },
                    {
                        id: 'evi_per2_maleta',
                        type: 'image',
                        rect: ['0px', '140px','77px','142px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"evi_per2_maleta.png",'0px','0px']
                    }]
                }]
            },
            {
                id: 'fondo_general_creditos',
                display: 'block',
                type: 'image',
                rect: ['-12px', '73px','1051px','579px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"fondo-opacidad12.png",'0px','0px']
            },
            {
                id: 'creative-commons',
                display: 'none',
                type: 'group',
                rect: ['145', '246','570','342','auto', 'auto'],
                c: [
                {
                    id: 'creative',
                    display: 'block',
                    type: 'image',
                    rect: ['0px', '0px','570px','342px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"creative-commons.png",'0px','0px']
                },
                {
                    id: 'boton-cerrar8',
                    type: 'image',
                    rect: ['526px', '-10px','53px','58px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"boton-cerrar3.png",'0px','0px']
                }]
            },
            {
                id: 'refeImagenes',
                display: 'none',
                type: 'group',
                rect: ['142px', '149px','682','442','auto', 'auto'],
                c: [
                {
                    id: 'referencias-imagenes2',
                    display: 'block',
                    type: 'image',
                    rect: ['-48px', '-47px','911px','490px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"referencias-imagenes2.png",'0px','0px']
                },
                {
                    id: 'fondo_referencias',
                    display: 'block',
                    type: 'rect',
                    rect: ['87px', '54px','647px','291px','auto', 'auto'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    opacity: 0.07,
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'mask',
                    type: 'group',
                    rect: ['87', '54','647','476','auto', 'auto'],
                    clip: ['rect(0px 647px 476px 0px)'],
                    c: [
                    {
                        id: 'vista',
                        type: 'group',
                        rect: ['0px', '0px','647','476','auto', 'auto'],
                        c: [
                        {
                            id: 'slider-0',
                            type: 'group',
                            rect: ['0', '0','647','475','auto', 'auto'],
                            c: [
                            {
                                id: 'indice_figuras_cont1',
                                display: 'none',
                                type: 'group',
                                rect: ['68px', '41px','530','275','auto', 'auto'],
                                userClass: "s",
                                c: [
                                {
                                    id: 'Text9Copy25',
                                    display: 'block',
                                    type: 'text',
                                    rect: ['-10px', '1px','530px','24px','auto', 'auto'],
                                    text: "ÍNDICE DE FIGURAS CONTENIDO OVA – CRM SATISFACCIÓN <br>DEL CLIENTE",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(12,92,117,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text9Copy24',
                                    display: 'block',
                                    type: 'text',
                                    rect: ['-10px', '59px','530px','130px','auto', 'auto'],
                                    text: "Figura 1. Tres pasos para medir la satisfacción de los clientes<br>\t<br>Figura 2. Marketing holístico\t<br><br>Figura 3. Interacción del CRM\t<br><br>Figura 4. La orientación del marketing relacional: Integradora del servicio al cliente<br>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(28,28,30,1.00)", "400", "none", "normal"]
                                }]
                            },
                            {
                                id: 'indice_figuras_cont2',
                                display: 'none',
                                type: 'group',
                                rect: ['58px', '40px','530','275','auto', 'auto'],
                                userClass: "s",
                                c: [
                                {
                                    id: 'Text9Copy23',
                                    display: 'block',
                                    type: 'text',
                                    rect: ['1px', '-2px','530px','24px','auto', 'auto'],
                                    text: "ÍNDICE DE FIGURAS CONTENIDO PDF – DETERMINACIÓN DEL PRECIO DE UN SERVICIO DE MERCADEO",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(12,92,117,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text9Copy22',
                                    display: 'block',
                                    type: 'text',
                                    rect: ['1px', '59px','530px','159px','auto', 'auto'],
                                    text: "Figura 1. Componentes del precio de un servicio\t<br><br>Figura 2. Relación entre el costo y el servicio\t<br><br>Figura 3. Factores externos que influyen en las empresas\t<br><br>Figura 4. Tipos de impactos del entorno en las empresas<br>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(28,28,30,1.00)", "400", "none", "normal"]
                                }]
                            },
                            {
                                id: 'indice_figuras_cont3',
                                display: 'none',
                                type: 'group',
                                rect: ['58px', '40px','530','275','auto', 'auto'],
                                userClass: "s",
                                c: [
                                {
                                    id: 'Text9Copy27',
                                    display: 'block',
                                    type: 'text',
                                    rect: ['1px', '57px','530px','24px','auto', 'auto'],
                                    text: "ÍNDICE DE FIGURAS CONTENIDO PDF – ADMINISTRACIÓN DE PROYECTOS DE NEGOCIOS ONLINE",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(12,92,117,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text9Copy26',
                                    display: 'block',
                                    type: 'text',
                                    rect: ['1px', '118px','530px','34px','auto', 'auto'],
                                    text: "Figura 1. Cantidad de usuarios de internet en el mundo\t",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(28,28,30,1.00)", "400", "none", "normal"]
                                }]
                            },
                            {
                                id: 'indice_tablas_cont1',
                                display: 'none',
                                type: 'group',
                                rect: ['59px', '111px','530','66','auto', 'auto'],
                                userClass: "s",
                                c: [
                                {
                                    id: 'Text9Copy21',
                                    display: 'block',
                                    type: 'text',
                                    rect: ['-10px', '-9px','530px','30px','auto', 'auto'],
                                    text: "Tabla 1. Tipos de marketing relacional\t<br><br>Tabla 2. Clientes como defensores de las organizaciones<br><br>Tabla 3. Ventajas y desventajas del CRM\t<br><br>Tabla 4. Las clases de sociedades que se pueden crear\t<br><br>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(28,28,30,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text9Copy20',
                                    display: 'block',
                                    type: 'text',
                                    rect: ['-10px', '-70px','530px','24px','auto', 'auto'],
                                    text: "ÍNDICE DE TABLAS CONTENIDO OVA – CRM SATISFACCIÓN<br> DEL CLIENTE",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(12,92,117,1.00)", "700", "none", "normal"]
                                }]
                            },
                            {
                                id: 'indice_tablas_cont2',
                                display: 'none',
                                type: 'group',
                                rect: ['59px', '111px','530','66','auto', 'auto'],
                                userClass: "s",
                                c: [
                                {
                                    id: 'Text9Copy19',
                                    display: 'block',
                                    type: 'text',
                                    rect: ['-10px', '43px','530px','30px','auto', 'auto'],
                                    text: "Tabla 1. Ejemplo de cómo se ponen en práctica los elementos básicos para la prestación de un servicio a clientes",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(28,28,30,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text9Copy18',
                                    display: 'block',
                                    type: 'text',
                                    rect: ['-10px', '-21px','530px','24px','auto', 'auto'],
                                    text: "ÍNDICE DE TABLAS CONTENIDO PDF – DETERMINACIÓN DEL PRECIO DE UN SERVICIO DE MERCADEO",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(12,92,117,1.00)", "700", "none", "normal"]
                                }]
                            },
                            {
                                id: 'indice_tablas_cont3',
                                display: 'none',
                                type: 'group',
                                rect: ['68px', '111px','530','66','auto', 'auto'],
                                userClass: "s",
                                c: [
                                {
                                    id: 'Text9Copy17',
                                    display: 'block',
                                    type: 'text',
                                    rect: ['-10px', '-6px','530px','30px','auto', 'auto'],
                                    text: "Tabla 1. Penetración y usuarios en las regiones del mundo\t<br><br>Tabla 2. Capacidades del marketing electrónico\t<br><br>Tabla 3. Beneficios del marketing electrónico (B2B)\t<br><br>Tabla 4. Desafíos del E-Commerce\t<br><br>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(28,28,30,1.00)", "400", "none", "normal"]
                                },
                                {
                                    id: 'Text9Copy16',
                                    display: 'block',
                                    type: 'text',
                                    rect: ['-10px', '-71px','530px','24px','auto', 'auto'],
                                    text: "ÍNDICE DE TABLAS CONTENIDO PDF – ADMINISTRACIÓN DE PROYECTOS DE NEGOCIOS ONLINE",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(12,92,117,1.00)", "700", "none", "normal"]
                                }]
                            },
                            {
                                id: 'imagenes_cont1',
                                display: 'none',
                                type: 'group',
                                rect: ['58px', '42px','530','425','auto', 'auto'],
                                userClass: "s",
                                c: [
                                {
                                    id: 'Text9Copy15',
                                    display: 'block',
                                    type: 'text',
                                    rect: ['-10px', '60px','530px','24px','auto', 'auto'],
                                    text: "IMÁGENES CONTENIDO OVA – CRM SATISFACCIÓN DEL CLIENTE",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(12,92,117,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text9Copy14',
                                    display: 'block',
                                    type: 'text',
                                    rect: ['-10px', '105px','530px','45px','auto', 'auto'],
                                    text: "Imagen 1. Modelo de comunicación interactiva. Tomada de: http://monsedessin.wordpress.com/",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(28,28,30,1.00)", "400", "none", "normal"]
                                }]
                            },
                            {
                                id: 'imagenes_cont2',
                                display: 'none',
                                type: 'group',
                                rect: ['58px', '41px','530','425','auto', 'auto'],
                                userClass: "s",
                                c: [
                                {
                                    id: 'Text9Copy29',
                                    display: 'block',
                                    type: 'text',
                                    rect: ['-10px', '43px','530px','24px','auto', 'auto'],
                                    text: "IMÁGENES CONTENIDO PDF – ADMINISTRACIÓN DE PROYECTOS DE NEGOCIOS ONLINE",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(12,92,117,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text9Copy28',
                                    display: 'block',
                                    type: 'text',
                                    rect: ['-10px', '101px','530px','45px','auto', 'auto'],
                                    text: "Imagen 1. Marketing electrónico. Tomada de: SENA.<br><br>Imagen 2. Compras electrónicas. Tomado de: SENA.<br>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(28,28,30,1.00)", "400", "none", "normal"]
                                }]
                            },
                            {
                                id: 'bibliografia_guia',
                                display: 'none',
                                type: 'group',
                                rect: ['46px', '76px','530','148','auto', 'auto'],
                                userClass: "s",
                                c: [
                                {
                                    id: 'Text9Copy13',
                                    display: 'block',
                                    type: 'text',
                                    rect: ['0px', '-36px','530px','24px','auto', 'auto'],
                                    text: "BIBLIOGRAFÍA GUÍA DE APRENDIZAJE / CONTENIDO OVA - CRM SATISFACCIÓN DEL CLIENTE",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(12,92,117,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Group11',
                                    type: 'group',
                                    rect: ['0', '22px','564px','155px','auto', 'auto'],
                                    c: [
                                    {
                                        id: 'Text9Copy12',
                                        display: 'block',
                                        type: 'text',
                                        rect: ['0px', '0px','530px','121px','auto', 'auto'],
                                        text: "Gates, B. (1999). Los negocios en la era digital. Como adaptar la tecnología informática para obtener el mayor beneficio. México: Plaza &amp; Janés.<br><br>Peter, P., &amp; Olson, J, P. (2006). Comportamiento del consumidor y estrategia de marketing. México D.F.: McGraw-Hill<br><br>Reinares, P.J., &amp;  Ponzoa, J.M. (2006). Marketing Relacional. Un nuevo enfoque para la seducción y fidelización del cliente. Madrid: Financial Times – Prentice Hall.<br>",
                                        align: "left",
                                        font: ['Arial, Helvetica, sans-serif', 14, "rgba(28,28,30,1.00)", "400", "none", "normal"]
                                    }]
                                }]
                            },
                            {
                                id: 'bibliografia_cont1',
                                display: 'none',
                                type: 'group',
                                rect: ['46px', '75px','530','148','auto', 'auto'],
                                userClass: "s",
                                c: [
                                {
                                    id: 'Text9Copy11',
                                    display: 'block',
                                    type: 'text',
                                    rect: ['0px', '-38px','530px','24px','auto', 'auto'],
                                    text: "BIBLIOGRAFÍA CONTENIDO PDF – ADMINISTRACIÓN DE PROYECTOS DE NEGOCIOS ONLINE ",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(12,92,117,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Group3',
                                    type: 'group',
                                    rect: ['0', '26','576px','156px','auto', 'auto'],
                                    c: [
                                    {
                                        id: 'Text9Copy10',
                                        display: 'block',
                                        type: 'text',
                                        rect: ['0px', '0px','541px','167px','auto', 'auto'],
                                        text: "Griffin, Ricky W. (2011). Administración. México D.F. Editorial Cengage Learning. 10 ediciones. <br><br>Hair, Joseph F. y Mehta, Rajiv. (2009). Administración de Ventas. México. CENGAGE Learning.<br><br>Jaime, Camilo y Vigaray, Maria Dolores. (2002). La promoción de ventas. España. ESIC.<br><br>Kurtz, L. David. (2012). Marketing Contemporáneo. México D.F. Editorial Cengage Learning. 15 ediciones. <br><br>McDaniel, Carl y Gates Roger. (2005). Investigación de Mercados. México, D.F. Editorial Thomson, S.A. de C.V. Sexta Edición.<br><br>Sara, Calabro. (2005). Sales &amp; Marketing Management. Measurig Up.<br><br>Xaviera, Doris. (2013). Marketing Ventas por Internet. Perú. Editorial Macro.<br>",
                                        align: "left",
                                        font: ['Arial, Helvetica, sans-serif', 14, "rgba(28,28,30,1.00)", "400", "none", "normal"]
                                    }]
                                }]
                            },
                            {
                                id: 'webgrafia_guia1',
                                display: 'none',
                                type: 'group',
                                rect: ['46px', '75px','530','148','auto', 'auto'],
                                userClass: "s",
                                c: [
                                {
                                    id: 'Text9Copy9',
                                    display: 'block',
                                    type: 'text',
                                    rect: ['-3px', '-34px','530px','24px','auto', 'auto'],
                                    text: "WEBGRAFÍA GUÍA DE APRENDIZAJE / CONTENIDO OVA - CRM SATISFACCIÓN DEL CLIENTE",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(12,92,117,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Group7',
                                    type: 'group',
                                    rect: ['-3px', '40','577px','133px','auto', 'auto'],
                                    c: [
                                    {
                                        id: 'Text9Copy8',
                                        display: 'block',
                                        type: 'text',
                                        rect: ['0px', '0px','543px','126px','auto', 'auto'],
                                        text: "Aguirre, G. M. S., &amp; Aparicio, C. M. G. (2002). La gestión de calidad y el marketing interno como factores de competitividad en empresas de servicios: el caso de empresas vascas de servicios con gestión avanzada. https://addi.ehu.es/handle/10810/7045<br><br>Balido, L. R. (2007). Del Marketing Relacional a los Sistemas de Gestión de las Relaciones con los Clientes (CRM). Metodologías para su implantación. Contribuciones a la Economía, Nº 82. http://www.eumed.net/ce/2007b/rbl.htm<br><br>Christopher, M., Payne, A., &amp; Ballantyne, D. (1994). Relationship marketing: <br>bringing quality customer service and marketing together. http://imsresearchnetwork.com/wp-content/uploads/2011/02/swp3191.pdf<br><br>CRM. (2014), En Wikipedia, la enciclopedia libre. http://es.wikipedia.org/wiki/Customer_relationship_management<br><br>Interactividad. (2014). RAE diccionario en línea. <br>http://lema.rae.es/drae/?val=interactividad<br><br>Kotler, P., &amp; Keller, K. L. (2006). Dirección de marketing. Pearson educación. Recuperado de http://books.google.com.co/books?hl=en&amp;lr=&amp;id=CoHT8SmJVDQC&amp;oi=fnd&amp;pg=PR29&amp;dq=Kotler+y+Keller+(2006).&amp;ots=l3AGWxFK0m&amp;sig=EhJ3N5n1yRuaxHAwf4UoVeYWcm4#v=<br>onepage&amp;q=Kotler%20y%20Keller%20(2006).&amp;f=false <br><br>Martínez, A. C. (2010). Estrategias empresariales en la Web 2.0. Las redes sociales online. Editorial Club Universitario.  http://books.google.com.co/books?hl=es&amp;lr=&amp;id=AboiQRDrB4QC&amp;oi=fnd&amp;pg=PA13&amp;dq=CRM+SOCIAL:+LA+ORIENTACI<br>%C3%93N+EMPRESARIAL&amp;ots=FK5gAt2tUZ&amp;sig=J0BSj60LKEa7jOqMUo168DkJ2HI#v<br>=onepage&amp;q=CRM%20SOCIAL%3A%20LA%20ORIENTACI%C3%93N%20<br>EMPRESARIAL&amp;f=false<br><br>Renart, L. G., &amp; Parés, F. (2002). Marketing relacional:¿ café para todos?. Harvard Deusto Marketing &amp; Ventas. Recuperado de http://www.iese.edu/research/pdfs/OP-03-08.pdf<br>",
                                        align: "left",
                                        font: ['Arial, Helvetica, sans-serif', 14, "rgba(28,28,30,1.00)", "400", "none", "normal"]
                                    }]
                                }]
                            },
                            {
                                id: 'webgrafia_cont1',
                                display: 'none',
                                type: 'group',
                                rect: ['58px', '42px','530','433','auto', 'auto'],
                                userClass: "s",
                                c: [
                                {
                                    id: 'Text9Copy7',
                                    display: 'block',
                                    type: 'text',
                                    rect: ['-10px', '-8px','530px','24px','auto', 'auto'],
                                    text: "WEBGRAFÍA CONTENIDO PDF – DETERMINACIÓN DEL PRECIO DE UN SERVICIO DE MERCADEO ",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(12,92,117,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Group8',
                                    type: 'group',
                                    rect: ['-10', '62px','566px','155px','auto', 'auto'],
                                    c: [
                                    {
                                        id: 'Text9Copy6',
                                        display: 'block',
                                        type: 'text',
                                        rect: ['0px', '0px','533px','500px','auto', 'auto'],
                                        text: "Arnoletto, E.J.: (2007) Administración de la producción como ventaja competitiva. Edición electrónica gratuita en www.eumed.net/libros/2007b/299/<br><br>Banco de la República de Colombia. Indicadores económicos. http://www.banrep.gov.co/ Consultado el 28 de febrero de 2014.  <br><br>Bolsa de Valores de Colombia (BVC). Información bursátil. http://www.bvc.com.co/pps/tibco/portalbvc. Consultado el 28 de febrero de 2013.<br><br>COLCIENCIAS. Investigación y desarrollo. http://www.colciencias.gov.co/ <br><br>Constitución Política de Colombia (1991). Normatividad nacional. http://www.senado.gov.co/images/stories/Informacion_General/<br>constitucion_politica.pdf  <br><br>DANE (s.f). Economía, Demografía. http://www.dane.gov.co/. Consultado el 28 de febrero de 2014.<br><br>DRAE (2014). Diccionario de la lengua española.  http://www.rae.es/recursos/diccionarios/drae. Consultado el 28 de febrero de 2014.<br><br>IGAC (2010). Geografía nacional. http://www.igac.gov.co/igac. Consultado el 28 de febrero de 2014.<br><br>MinAmbiente (2011). Corporaciones Autónomas Regionales - CAR. http://www.minambiente.gov.co/contenido/contenido.aspx?conID=8099&amp;catID=796. Consultado el 28 de febrero de 2014.<br><br>MinTransporte (2011). Tránsito y Transporte. https://www.mintransporte.gov.co/ Consultado el 28 de febrero de 2014. <br><br>Pacto Global de las Naciones Unidas. Responsabilidad Social Empresarial, Principios del Pacto Global. http://www.unglobalcompact.org/languages/spanish/los_diez_principios.html. Consultado el 28 de febrero de 2014.<br><br>SESCOLOMBIA (2011). Agencias del Gobierno y estatales. http://www.sescolombia.com/index.php?option=com_content&amp;view=article&amp;id=13&amp;Itemid=23. Consultado el 28 de febrero de 2014.<br><br>SIC (s.f). Patentes, marcas y propiedad industrial. http://www.sic.gov.co/. Consultado el 28 de febrero de 2014.<br><br>SOGEOCOL (2014). Geografía. http://www.sogeocol.com.co/ <br><br>Superintendencia Financiera de Colombia (2014). Información financiera. https://www.superfinanciera.gov.co/jsp/index.jsf. Consultado el 28 de febrero de 2014.   <br><br>Superintendencia de Puertos y Transporte (2009). Puertos, aeropuertos. http://www.supertransporte.gov.co/super/. Consultado el 28 de febrero de 2014.<br>",
                                        align: "left",
                                        font: ['Arial, Helvetica, sans-serif', 14, "rgba(28,28,30,1.00)", "400", "none", "normal"]
                                    }]
                                }]
                            },
                            {
                                id: 'webgrafia_cont2',
                                type: 'group',
                                rect: ['53px', '42px','530','433','auto', 'auto'],
                                userClass: "s",
                                c: [
                                {
                                    id: 'Text9Copy5',
                                    display: 'block',
                                    type: 'text',
                                    rect: ['-10px', '38px','530px','24px','auto', 'auto'],
                                    text: "WEBGRAFÍA CONTENIDO PDF – ADMINISTRACIÓN DE PROYECTOS DE NEGOCIOS ONLINE ",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(12,92,117,1.00)", "700", "none", "normal"]
                                },
                                {
                                    id: 'Text9Copy4',
                                    display: 'block',
                                    type: 'text',
                                    rect: ['-10px', '103px','560px','79px','auto', 'auto'],
                                    text: "Porta web Internet World Stats. Usage Statistics. “El primer lugar lo ocupa China con un crecimiento del 1500% desde el año 2000, los siguientes tres países son Estados Unidos, Japón e India (…)”. www.internetworldstats.com. Traducción del autor.",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(28,28,30,1.00)", "400", "none", "normal"]
                                }]
                            }]
                        }]
                    }]
                },
                {
                    id: 'boton-atras',
                    display: 'none',
                    type: 'image',
                    rect: ['1px', '175px','52px','50px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"boton-atras2.png",'0px','0px']
                },
                {
                    id: 'boton-siguiente',
                    display: 'block',
                    type: 'image',
                    rect: ['761px', '175px','51px','46px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"boton-siguiente2.png",'0px','0px']
                },
                {
                    id: 'botonCerrarMenuCopy2',
                    type: 'image',
                    rect: ['813px', '-56px','53px','58px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"boton-cerrar32.png",'0px','0px']
                }]
            },
            {
                id: 'glosario',
                display: 'none',
                type: 'group',
                rect: ['142px', '56px','820','442','auto', 'auto'],
                c: [
                {
                    id: 'fondo-glosario',
                    type: 'image',
                    rect: ['-42px', '-47px','911px','490px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"glosario2.png",'0px','0px']
                },
                {
                    id: 'fondo_tex1',
                    type: 'rect',
                    rect: ['42px', '49px','746px','310px','auto', 'auto'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    opacity: 0.07,
                    fill: ["rgba(0,0,0,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'palabras',
                    type: 'group',
                    rect: ['70px', '86px','699px','243px','auto', 'auto'],
                    c: [
                    {
                        id: 'Text10',
                        type: 'text',
                        rect: ['0px', '0px','663px','241px','auto', 'auto'],
                        text: "Administración de las relaciones con el cliente (CRM): Combinación de estrategias y herramientas que impulsan los programas de relaciones, reorientado a toda la organización hacia un enfoque de satisfacción de los clientes.<br><br>Adquisición electrónica (e-procurement): Uso del internet por parte de organizaciones para solicitar ofertas subastadas y comprar bienes y servicios de los proveedores.<br><br>Anuncios antes del video: Mensaje breve de marketing que aparece antes del contenido de videos específicos.<br><br>Back-End: Todos los elementos que involucran la administración de operaciones de un sitio, desde tecnología hasta fullfilment e integración de sistemas. <br><br>Banner publicitario: Mensaje en tira colocado en áreas sumamente visible de sitios web visitados con frecuencia.<br><br>Benchmarking: Filosofía japonesa en la que se analiza a la competencia para aprender de ellos y mejorarlos. <br><br>Blog: Forma abreviada de web log, es un diario en línea de un individuo u organización.<br><br>Bot (bot de compra): Programa de software que permite a los compradores en línea comparar los precios de un producto en particular que ofrecen varios minoristas en línea.<br><br>Brand Equity: Término que hace referencia al valor de una marca conocida; este valor puede afectar el precio de compra de una compañía. <br><br>Brand Loyalty (lealtad de marca): Es cuando un mismo consumidor repite la compra de una misma marca de una categoría de producto. <br><br>Branding: Hace referencia a una serie de estrategias alrededor de la construcción de una marca. En Internet, branding va más allá de estrategias publicitarias. <br><br>B2B: Siglas de \"Business to Business\". Se basa en la interacción de empresas por medio de Internet. Puede incluir intercambios de información, plataformas de subastas y mercados de negocios. <br><br>B2C: Siglas de \"Business to Consumer\". Se basa en transacciones entre empresas y consumidores finales. <br><br>B2I: Siglas de \"Business to Investor\". Se basa en transacciones entre empresas e Inversionistas. <br><br>Banner publicitario: Mensaje en tira colocado en áreas sumamente visible de sitios web visitados con frecuencia.<br><br>Blog: Forma abreviada de web log, es un diario en línea de un individuo u organización.<br><br>Bot (bot de compra): Programa de software que permite a los compradores en línea comparar los precios de un producto en particular que ofrecen varios minoristas en línea.<br><br>Canales De Comunicación Personal: Medio mediante el cual se comunican dos o más personas directamente, es decir, cara a cara, persona a auditorio, por teléfono o por correo.<br><br>Cambio de clientes: Cambio en la base de clientes de la empresa.<br><br>Cartera de Negocios: Conjunto de negocios y productos que conforman la compañía.<br><br>Carrito de compras electrónicas: Archivo que contiene los artículos que el comprador en línea eligió adquirir.<br><br>Clientes externos: Personas y organizaciones que compran o usan los bienes y servicios de una empresa.<br><br>Clientes internos: Empleados y departamentos dentro de la organización cuyo éxito depende del trabajo de otros empleados o departamentos para desempeñar las tareas.<br><br>Co-Branding: Situación en la que se juntan las fuerzas de dos marcas para ofrecer un producto o servicio en conjunto. Normalmente los productos de cada una de las marcas son complementarios y en este caso los ofrece como paquete. <br><br>Competencia: El significado de la palabra competencia (del latín competentia) tiene dos grandes vertientes: por un lado, hace referencia al enfrentamiento o a la contienda que llevan a cabo dos o más sujetos respecto a algo. En el mismo sentido, se refiere a la rivalidad entre aquellos que pretenden acceder a lo mismo, a la realidad que viven las empresas que luchan en un determinado sector del mercado al vender o demandar un mismo bien o servicio, y a la competición que se lleva a cabo en el ámbito del deporte.<br><br>Conflicto de canal: Conflictos entre fabricantes, mayoristas y minoristas.<br><br>C2C: Siglas de \"Consumer to Consumer\". Se basa en transacciones de consumidor a consumidor donde actúa usualmente, una empresa mediadora que acerca la oferta y demanda de artículos o servicios. <br><br>Demarketing: Táctica utilizada para decrecer la demanda del mercado para un producto, utiliza variables de mercadotecnia para bajar la demanda en caso que la compañía no pueda o no quiera ofrecer. <br><br>Desmercadotecnia: Mercadotecnia cuya función es reducir la demanda temporal o permanente.<br><br>EDI (Intercambio Electrónico De Datos): Es la comunicación de información estructurada de computadora a computadora, de aplicación a aplicación, con una mínima intervención humana, entre corporaciones, instituciones o individuos, utilizando un formato estándar para los documentos de negocios entre las empresas. <br><br>Efectividad: La efectividad de un sistema de ventas está relacionada con varios factores asociados al tipo y calidad del producto, el precio, las habilidades y preparación del vendedor.<br><br>Empresa: Unidad de control y decisión que utiliza diferentes insumos para producir bienes o servicios. Las empresas, según su propiedad, pueden ser privadas o públicas; en el primer caso pertenecen a un empresario o conjunto de empresarios, mientras que en el segundo la propiedad es del Estado, ya sea a nivel nacional, regional o municipal.<br><br>Empresa Conjunta: Penetración en mercados extranjeros, asociándose con compañías de los países respectivos para producir o vender un producto o servicio<br><br>Encriptación: Proceso de codificar los datos con propósitos de seguridad.<br><br>ERP (Enterprise Resource Planning): Sistema o Software administrativo que integra todas las áreas de una empresa (Como contabilidad, compras, o inventarios), mediante procesos transparentes y en tiempo real en bases de datos relacionales y centralizados. <br><br>Escaparates electrónicos: Sitio web de la empresa que vende productos a los consumidores.<br><br>Especificación De La Rutina De Pedidos: Etapa del proceso industrial de compra en la que el comprador establece el pedido final con el proveedor o proveedores seleccionados, enumera especificaciones técnicas, cantidad necesaria, tiempo de entrega esperado, políticas de devolución y garantías.<br><br>Especificación Del Producto: Etapa del proceso industrial de compra en que la organización compradora decide y especifica las características técnicas de un artículo necesario.<br><br>Estrategia: La palabra estrategia deriva del latín strategĭa, que a su vez procede de dos términos griegos: stratos (“ejército”) y agein (“conductor”, “guía”). Por lo tanto, el significado primario de estrategia es el arte de dirigir las operaciones militares.<br>El concepto también se utiliza para referirse al plan ideado para dirigir un asunto y para designar al conjunto de reglas que aseguran una decisión óptima en cada momento. En otras palabras, una estrategia es el proceso seleccionado a través del cual se prevé alcanzar un cierto estado futuro.<br><br>Estrategia De Empujar: Estrategia de mercadotecnia diseñada para que los consumidores pidan a los distribuidores un producto en específico. <br><br>Estrategia De Jalar: Estrategia de mercadotecnia diseñada para que los distribuidores ofrezcan un producto en específico a los consumidores. <br><br>Extranet: Red que además del concepto de intranet, involucra a la cadena de suministro (proveedores) y a los clientes. <br><br>Extensión De Línea: Agregar más productos a la línea existente, mediante la introducción de nuevos productos en la misma categoría. Las extensiones de línea ofrecen a los consumidores más opciones y ayudan a la empresa a protegerse de ataques de los competidores. <br><br>Firewall: Barrera electrónica entre la red interna de una empresa e internet que limita el acceso hacia y desde la red.<br><br>Firmas electrónicas: Identificación electrónica que permite la ejecución en línea de contratos legales como hipotecas o viviendas y pólizas de seguros.<br><br>Globalización de los mercados: Superación del sistema económico en el que los mercados nacionales son entidades diferenciadas, aisladas por barreras comerciales y los obstáculos que imponen la distancia, el tiempo y la cultura, en favor de un sistema en el que estos mercados se funden en un mercado global.<br><br>Globalización de la producción: Se refiere a la subcontratación de bienes y servicios en diversos lugares del mundo para aprovechar las diferencias nacionales de costo y calidad de los factores de producción (como mano de obra, electricidad, tierra y capital).<br><br>Grassroots marketing: Esfuerzos que se conectan directamente con los clientes actuales y potenciales mediante canales secundarios.<br><br>Lovemark: marca que logra posicionarse en el corazón del cliente. Se relaciona con las emociones y sentimientos que una marca provoca en el consumidor, sensaciones tan profundas que no podrá dejarla jamás.<br><br>Marketing basado en transacciones: Intercambio entre comprador y el vendedor caracterizados por comunicaciones limitadas y poca o ninguna relación continúa entre las partes.<br><br>Marketing de búsqueda: Pago de una cuota a las empresas de motores de búsqueda, como Google, por tener seguridad que su nombre de una empresa aparezca en los primeros resultados de la búsqueda.<br><br>Marketing de rumor (buzz marketing): Marketing que reúne a voluntarios para que prueben algún producto y confía en que ellos hablaran de sus experiencias con sus amigos y colegas.<br><br>Marketing electrónico de negocio a consumidor (B2C): Venta directa a los consumidores por internet.<br><br>Marketing electrónico de negocio a negocio (B2B): Uso de internet para operaciones de negocios entre organizaciones.<br><br>Marketing electrónico o e-marketing: Proceso estratégico de crear, distribuir, promover y fijar los precios de bienes y servicios para un mercado meta en internet o mediante herramientas digitales.<br><br>Marketing interactivo: Comunicaciones entre comprador y vendedor en las que el cliente controla la cantidad y el tipo de información recibida de una empresa mediante canales como internet y terminales de realidad virtual.<br><br>Marketing interno: Acciones gerenciales que ayudan a todos los miembros de una organización a comprender, aceptar y cumplir con sus respectivos roles en la implementación de una estrategia de marketing.<br><br>Marketing relacional: Desarrollo, crecimiento y mantenimiento de relaciones a largo plazo y costo-efectivas con los clientes individuales, los proveedores, los distribuidores, los minoristas y otros socios para obtener un beneficio mutuo.<br><br>Marketing viral: Esfuerzo que permite que los clientes satisfechos corran la voz sobre ciertos productos entre consumidores.<br><br>Phishing: Estafa de alta tecnología que usa mensajes por correo electrónico o instantáneo que parecen auténticos, para lograr que las víctimas confiadas den a conocer información personal. <br><br>Podcast: Archivo de audio o video en línea que se puede descargar a otros dispositivos digitales.<br><br>Política empresarial: Las políticas son planteamientos generales o maneras de comprender que guían o canalizan el pensamiento y la acción en la toma de decisiones de todos los miembros de la organización.  <br><br>Pop-ups: (anuncios emergentes) Mensajes publicitarios que aparecen en una ventana aparte.<br><br>Precio: es el valor monetario que se le asigna a algo. Todos los productos y servicios que se ofrecen en el mercado tienen un precio, que es el dinero que el comprador o cliente debe abonar para concretar la operación.<br><br>Proveedores de servicios de aplicación (PSA): Empresas externas que se especializan en proporcionar tanto las computadoras como el apoyo de la aplicación para administrar los sistemas de información de los clientes de negocios.<br><br>Satisfacción del empleado: Nivel de satisfacción del empleado a su empresa y el grado al cual la lealtad, o la carencia de ella, se comunica a clientes externos. <br><br>Satisfacción del cliente: Grado al cual los clientes se sienten satisfechos con sus compras.<br><br>Secure Sockets Layer (SSL): Tecnología que asegura un sitio web al encriptar la información y ofrecer verificación de autenticidad.<br><br>Servicio al cliente: Es el conjunto de actividades interrelacionadas que ofrece un proveedor con el fin de que el cliente obtenga el producto en el momento y lugar adecuado y se asegure un uso correcto del mismo. <br><br>Sistema: Del latín systema, un sistema es módulo ordenado de elementos que se encuentran interrelacionados y que interactúan entre sí. El concepto se utiliza tanto para definir a un conjunto de conceptos como a objetos reales dotados de organización<br><br>Sitio web corporativo: Sitio creado para incrementar la visibilidad de una empresa, promover sus ofertas y proporcionar información a las partes interesadas.<br><br>Sitio web de marketing: Sitio cuyo objetivo principal es incrementar las compras de los visitantes.<br><br>Sociedad: Afiliación de dos o más empresas que se ayudan unas a otras para alcanzar metas comunes.<br><br>Sociedad de comprador: Relación en la cual una empresa compra bienes y servicios a uno o más proveedores.<br><br>Sociedad de vendedor: Relaciones que implica intercambios a largo plazo de bienes y servicios, a cambio de efectivo a de otra cosa valiosa.<br><br>Satisfacción del cliente: Grado al cual los clientes se sienten satisfechos con sus compras.<br><br>Satisfacción del empleado: Nivel de satisfacción del empleado a su empresa y el grado al cual la lealtad, o la carencia de ella, se comunica a clientes externos. <br><br>Sociedad interna: Relación que involucra a los clientes dentro de una organización.<br><br>Sociedad lateral: Relación estratégica que abarca las entidades externas, pero involucra las relaciones no directas entre comprador y vendedor.<br><br>Tableros de boletines electrónicos: Foro en internet que permite a los usuarios publicar y leer mensajes sobre un tema específico.<br><br>Valor de por vida de un cliente: Los ingresos y beneficios intangibles, como referencias y retroalimentación del cliente, que un cliente ofrece al vendedor a lo largo de su vida promedio, menos la cantidad que la empresa debe gastar para adquirir un cliente, venderle y atenderlo.<br><br>Vishing: Fraude en el que se recaba información personal mediante los sistemas de respuesta de voz, equivale a phishing de voz.<br><br>Volver a ganarse al cliente: Proceso de rejuvenecer las relaciones perdidas con los clientes.<br><br>Widgets: Diminutas aplicaciones interactivas que los usuarios de internet pueden copiar y agregar a sus propias páginas para reproducir música, video o diapositivas.<br><br>Wiki: Página web que cualquiera puede editar.<br><br>",
                        align: "justify",
                        font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1.00)", "400", "none", "normal"]
                    }]
                },
                {
                    id: 'botonCerrarMenuCopy',
                    type: 'image',
                    rect: ['819px', '-54px','53px','58px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"boton-cerrar4.png",'0px','0px']
                }]
            },
            {
                id: 'creditos',
                display: 'none',
                type: 'group',
                rect: ['91', '96px','911','490','auto', 'auto'],
                c: [
                {
                    id: 'fondo_creditos',
                    display: 'block',
                    type: 'image',
                    rect: ['0px', '0px','911px','490px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"creditos222.png",'0px','0px']
                },
                {
                    id: 'creditos_bombillo',
                    type: 'image',
                    rect: ['329px', '63px','255px','422px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"creditos_bombillo22.png",'0px','0px']
                },
                {
                    id: 'lineas_blancas_bombillo',
                    type: 'group',
                    rect: ['365', '103','179','227','auto', 'auto'],
                    c: [
                    {
                        id: 'Rectangle10',
                        type: 'rect',
                        rect: ['89px', '24px','2px','62px','auto', 'auto'],
                        fill: ["rgba(255,255,255,1.00)"],
                        stroke: [0,"rgba(0,0,0,1)","none"],
                        userClass: "lineas",
                        transform: [[],['179']]
                    },
                    {
                        id: 'Rectangle20',
                        type: 'rect',
                        rect: ['137px', '72px','2px','62px','auto', 'auto'],
                        fill: ["rgba(255,255,255,1.00)"],
                        stroke: [0,"rgba(0,0,0,1)","none"],
                        userClass: "lineas",
                        transform: [[],['86']]
                    },
                    {
                        id: 'Rectangle30',
                        type: 'rect',
                        rect: ['109px', '100px','2px','62px','auto', 'auto'],
                        fill: ["rgba(255,255,255,1.00)"],
                        stroke: [0,"rgba(0,0,0,1)","none"],
                        userClass: "lineas",
                        transform: [[],['-32']]
                    },
                    {
                        id: 'Rectangle40',
                        type: 'rect',
                        rect: ['88px', '114px','2px','103px','auto', 'auto'],
                        fill: ["rgba(255,255,255,1.00)"],
                        stroke: [0,"rgba(0,0,0,1)","none"],
                        userClass: "lineas",
                        transform: [[],['-8']]
                    },
                    {
                        id: 'Rectangle50',
                        type: 'rect',
                        rect: ['46px', '54px','2px','62px','auto', 'auto'],
                        fill: ["rgba(255,255,255,1.00)"],
                        stroke: [0,"rgba(0,0,0,1)","none"],
                        userClass: "lineas",
                        transform: [[],['-64']]
                    },
                    {
                        id: 'Rectangle60',
                        type: 'rect',
                        rect: ['34px', '-2px','2px','87px','auto', 'auto'],
                        fill: ["rgba(255,255,255,1.00)"],
                        stroke: [0,"rgba(0,0,0,1)","none"],
                        userClass: "lineas",
                        transform: [[],['47']]
                    },
                    {
                        id: 'Rectangle70',
                        type: 'rect',
                        rect: ['11px', '95px','2px','62px','auto', 'auto'],
                        fill: ["rgba(255,255,255,1.00)"],
                        stroke: [0,"rgba(0,0,0,1)","none"],
                        userClass: "lineas",
                        transform: [[],['-21']]
                    },
                    {
                        id: 'Rectangle80',
                        type: 'rect',
                        rect: ['57px', '172px','2px','62px','auto', 'auto'],
                        fill: ["rgba(255,255,255,1.00)"],
                        stroke: [0,"rgba(0,0,0,1)","none"],
                        userClass: "lineas",
                        transform: [[],['-43']]
                    },
                    {
                        id: 'Rectangle90',
                        type: 'rect',
                        rect: ['114px', '172px','2px','62px','auto', 'auto'],
                        fill: ["rgba(255,255,255,1.00)"],
                        stroke: [0,"rgba(0,0,0,1)","none"],
                        userClass: "lineas",
                        transform: [[],['42']]
                    },
                    {
                        id: 'Rectangle100',
                        type: 'rect',
                        rect: ['167px', '101px','2px','62px','auto', 'auto'],
                        fill: ["rgba(255,255,255,1.00)"],
                        stroke: [0,"rgba(0,0,0,1)","none"],
                        userClass: "lineas",
                        transform: [[],['18']]
                    },
                    {
                        id: 'Rectangle110',
                        type: 'rect',
                        rect: ['135px', '-18px','2px','99px','auto', 'auto'],
                        fill: ["rgba(255,255,255,1.00)"],
                        stroke: [0,"rgba(0,0,0,1)","none"],
                        userClass: "lineas",
                        transform: [[],['133']]
                    }]
                },
                {
                    id: 'cre_btn1',
                    display: 'block',
                    type: 'group',
                    rect: ['28px', '201px','412','148','auto', 'auto'],
                    clip: ['rect(0px 411.61572265625px 148px -0.23095703125px)'],
                    c: [
                    {
                        id: 'Ellipse3Copy6',
                        type: 'ellipse',
                        rect: ['388px', '1px','9px','9px','auto', 'auto'],
                        borderRadius: ["50%", "50%", "50%", "50%"],
                        fill: ["rgba(0,0,0,1)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'Rectangle7Copy14',
                        type: 'rect',
                        rect: ['276px', '2px','129px','4px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"],
                        transform: [[],['-10']]
                    },
                    {
                        id: 'Rectangle7Copy13',
                        type: 'rect',
                        rect: ['39px', '25px','239px','4px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'c_lider_tecno',
                        type: 'image',
                        rect: ['0px', '0px','52px','52px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"c_lider_tecno22.png",'0px','0px']
                    },
                    {
                        id: 'Text6Copy6',
                        type: 'text',
                        rect: ['57px', '8px','220px','32px','auto', 'auto'],
                        text: "Líder  Equipo Tecnopedagógico",
                        font: ['Arial', 14, "rgba(0,0,0,1)", "700", "none", ""]
                    },
                    {
                        id: 'creditos_lider_tecno',
                        type: 'image',
                        rect: ['52px', '41px','239px','107px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"creditos_lider_tecno2.png",'0px','0px']
                    }]
                },
                {
                    id: 'cre_btn2',
                    display: 'block',
                    type: 'group',
                    rect: ['466px', '110px','420','279','auto', 'auto'],
                    c: [
                    {
                        id: 'Ellipse3Copy5',
                        type: 'ellipse',
                        rect: ['14px', '7px','9px','9px','auto', 'auto'],
                        borderRadius: ["50%", "50%", "50%", "50%"],
                        fill: ["rgba(0,0,0,1)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'Rectangle7Copy12',
                        type: 'rect',
                        rect: ['6px', '5px','143px','4px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"],
                        transform: [[],['26']]
                    },
                    {
                        id: 'Rectangle7Copy11',
                        type: 'rect',
                        rect: ['134px', '66px','238px','4px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'c_expertos',
                        type: 'image',
                        rect: ['368px', '41px','52px','52px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"c_expertos22.png",'0px','0px']
                    },
                    {
                        id: 'Text6Copy5',
                        type: 'text',
                        rect: ['133px', '48px','242px','31px','auto', 'auto'],
                        text: "Expertos Temáticos<br>",
                        align: "center",
                        font: ['Arial', 14, "rgba(0,0,0,1)", "700", "none", ""]
                    },
                    {
                        id: 'creditos_expertos',
                        type: 'image',
                        rect: ['124px', '79px','265px','200px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"creditos_expertos2.png",'0px','0px']
                    }]
                },
                {
                    id: 'cre_btn3',
                    display: 'block',
                    type: 'group',
                    rect: ['552px', '164px','336px','234','auto', 'auto'],
                    c: [
                    {
                        id: 'Ellipse3Copy4',
                        type: 'ellipse',
                        rect: ['12px', '14px','9px','9px','auto', 'auto'],
                        borderRadius: ["50%", "50%", "50%", "50%"],
                        fill: ["rgba(0,0,0,1)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'Rectangle7Copy10',
                        type: 'rect',
                        rect: ['5px', '14px','43px','4px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"],
                        transform: [[],['15']]
                    },
                    {
                        id: 'Rectangle7Copy9',
                        type: 'rect',
                        rect: ['46px', '25px','244px','4px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'c_lider_linea',
                        type: 'image',
                        rect: ['284px', '0px','52px','52px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"c_lider_linea22.png",'0px','0px']
                    },
                    {
                        id: 'Text6Copy4',
                        type: 'text',
                        rect: ['48px', '10px','242px','19px','auto', 'auto'],
                        text: "Líder de Línea<br>",
                        align: "center",
                        font: ['Arial', 14, "rgba(0,0,0,1)", "700", "none", ""]
                    },
                    {
                        id: 'creditos_lider_linea',
                        type: 'image',
                        rect: ['43px', '44px','263px','190px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"creditos_lider_linea2.png",'0px','0px']
                    }]
                },
                {
                    id: 'cre_btn4',
                    display: 'block',
                    type: 'group',
                    rect: ['519px', '162px','370','216','auto', 'auto'],
                    c: [
                    {
                        id: 'Ellipse3Copy3',
                        type: 'ellipse',
                        rect: ['11px', '94px','9px','9px','auto', 'auto'],
                        borderRadius: ["50%", "50%", "50%", "50%"],
                        fill: ["rgba(0,0,0,1)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'Rectangle7Copy8',
                        type: 'rect',
                        rect: ['6px', '106px','109px','4px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"],
                        transform: [[],['-47']]
                    },
                    {
                        id: 'Rectangle7Copy7',
                        type: 'rect',
                        rect: ['79px', '27px','244px','4px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'Text6Copy3',
                        type: 'text',
                        rect: ['81px', '8px','242px','19px','auto', 'auto'],
                        text: "Asesora Pedagógica <br>",
                        align: "center",
                        font: ['Arial', 14, "rgba(0,0,0,1)", "700", "none", ""]
                    },
                    {
                        id: 'c_asesoras',
                        type: 'image',
                        rect: ['318px', '0px','52px','52px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"c_asesoras22.png",'0px','0px']
                    },
                    {
                        id: 'creditos_asesoras',
                        type: 'image',
                        rect: ['74px', '38px','263px','178px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"creditos_asesoras2.png",'0px','0px']
                    }]
                },
                {
                    id: 'cre_btn5',
                    display: 'block',
                    type: 'group',
                    rect: ['475px', '157px','415','213','auto', 'auto'],
                    c: [
                    {
                        id: 'Ellipse3Copy2',
                        type: 'ellipse',
                        rect: ['15px', '169px','9px','9px','auto', 'auto'],
                        borderRadius: ["50%", "50%", "50%", "50%"],
                        fill: ["rgba(0,0,0,1)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'Rectangle7Copy6',
                        type: 'rect',
                        rect: ['5px', '172px','113px','4px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'Rectangle7Copy5',
                        type: 'rect',
                        rect: ['-32px', '173px','150px','4px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"],
                        transform: [[],['90']]
                    },
                    {
                        id: 'Rectangle7Copy4',
                        type: 'rect',
                        rect: ['116px', '24px','249px','4px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'c_editora',
                        type: 'image',
                        rect: ['363px', '0px','52px','52px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"c_editora22.png",'0px','0px']
                    },
                    {
                        id: 'Text6Copy2',
                        type: 'text',
                        rect: ['122px', '7px','242px','19px','auto', 'auto'],
                        text: "Equipo de Edición<br>",
                        align: "center",
                        font: ['Arial', 14, "rgba(0,0,0,1)", "700", "none", ""]
                    },
                    {
                        id: 'creditos_editora',
                        type: 'image',
                        rect: ['118px', '38px','268px','175px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"creditos_editora2.png",'0px','0px']
                    }]
                },
                {
                    id: 'cre_btn6',
                    display: 'block',
                    type: 'group',
                    rect: ['21px', '134px','370','260','auto', 'auto'],
                    clip: ['rect(0px 366px 260px -2.23095703125px)'],
                    c: [
                    {
                        id: 'Ellipse3Copy',
                        type: 'ellipse',
                        rect: ['353px', '105px','9px','9px','auto', 'auto'],
                        borderRadius: ["50%", "50%", "50%", "50%"],
                        fill: ["rgba(0,0,0,1)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'Rectangle7Copy3',
                        type: 'rect',
                        rect: ['238px', '117px','129px','4px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"],
                        transform: [[],['45']]
                    },
                    {
                        id: 'Rectangle7Copy2',
                        type: 'rect',
                        rect: ['38px', '26px','239px','4px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'c_diseno',
                        type: 'image',
                        rect: ['0px', '0px','52px','52px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"c_diseno22.png",'0px','0px']
                    },
                    {
                        id: 'Text6Copy',
                        type: 'text',
                        rect: ['44px', '9px','228px','32px','auto', 'auto'],
                        text: "Equipo de Diseño<br>",
                        align: "center",
                        font: ['Arial', 14, "rgba(0,0,0,1)", "700", "none", ""]
                    },
                    {
                        id: 'creditos_diseno',
                        type: 'image',
                        rect: ['28px', '42px','268px','218px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"creditos_diseno2.png",'0px','0px']
                    }]
                },
                {
                    id: 'cre_btn7',
                    display: 'block',
                    type: 'group',
                    rect: ['22px', '126px','335','290','auto', 'auto'],
                    clip: ['rect(0px 335px 290px 2.6923828125px)'],
                    c: [
                    {
                        id: 'Ellipse3',
                        type: 'ellipse',
                        rect: ['312px', '45px','9px','9px','auto', 'auto'],
                        borderRadius: ["50%", "50%", "50%", "50%"],
                        fill: ["rgba(0,0,0,1)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'Rectangle7Copy',
                        type: 'rect',
                        rect: ['267px', '55px','61px','4px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"],
                        transform: [[],['32']]
                    },
                    {
                        id: 'Rectangle7',
                        type: 'rect',
                        rect: ['38px', '23px','239px','4px','auto', 'auto'],
                        fill: ["rgba(0,0,0,1.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'c_programadores',
                        type: 'image',
                        rect: ['0px', '0px','52px','52px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"c_programadores22.png",'0px','0px']
                    },
                    {
                        id: 'Text6',
                        type: 'text',
                        rect: ['50px', '6px','228px','32px','auto', 'auto'],
                        text: "Equipo de Programación<br>",
                        align: "center",
                        font: ['Arial', 14, "rgba(0,0,0,1)", "700", "none", ""]
                    },
                    {
                        id: 'creditos_programadores',
                        type: 'image',
                        rect: ['32px', '38px','283px','252px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"creditos_programadores2.png",'0px','0px']
                    }]
                },
                {
                    id: 'c1',
                    display: 'none',
                    type: 'ellipse',
                    rect: ['332px', '74px','64px','64px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [0,"rgba(0,0,0,1)","none"],
                    userClass: "cirs",
                    boxShadow: ["", 3, 3, 24, 6, "rgba(255,255,255,0.65)"],
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                },
                {
                    id: 'c2',
                    display: 'none',
                    type: 'ellipse',
                    rect: ['329px', '-17px','64px','64px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [0,"rgba(0,0,0,1)","none"],
                    userClass: "cirs",
                    boxShadow: ["", 3, 3, 24, 6, "rgba(255,255,255,0.65)"],
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                },
                {
                    id: 'c3',
                    display: 'none',
                    type: 'ellipse',
                    rect: ['413px', '61px','64px','64px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [0,"rgba(0,0,0,1)","none"],
                    userClass: "cirs",
                    boxShadow: ["", 3, 3, 24, 6, "rgba(255,255,255,0.65)"],
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                },
                {
                    id: 'c4',
                    display: 'none',
                    type: 'ellipse',
                    rect: ['379px', '139px','64px','64px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [0,"rgba(0,0,0,1)","none"],
                    userClass: "cirs",
                    boxShadow: ["", 3, 3, 24, 6, "rgba(255,255,255,0.65)"],
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                },
                {
                    id: 'c5',
                    display: 'none',
                    type: 'ellipse',
                    rect: ['337px', '205px','64px','64px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [0,"rgba(0,0,0,1)","none"],
                    userClass: "cirs",
                    boxShadow: ["", 3, 3, 24, 6, "rgba(255,255,255,0.65)"],
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                },
                {
                    id: 'c6',
                    display: 'none',
                    type: 'ellipse',
                    rect: ['283px', '134px','64px','64px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [0,"rgba(0,0,0,1)","none"],
                    userClass: "cirs",
                    boxShadow: ["", 3, 3, 24, 6, "rgba(255,255,255,0.65)"],
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                },
                {
                    id: 'c7',
                    display: 'none',
                    type: 'ellipse',
                    rect: ['247px', '50px','64px','64px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [0,"rgba(0,0,0,1)","none"],
                    userClass: "cirs",
                    boxShadow: ["", 3, 3, 24, 6, "rgba(255,255,255,0.65)"],
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                },
                {
                    id: 'creditos_btn1',
                    display: 'block',
                    type: 'group',
                    rect: ['421', '169','68','66','auto', 'auto'],
                    userClass: "creditos",
                    c: [
                    {
                        id: 'EllipseGlow',
                        type: 'ellipse',
                        rect: ['5px', '4px','59px','59px','auto', 'auto'],
                        borderRadius: ["50%", "50%", "50%", "50%"],
                        fill: ["rgba(0,0,0,1)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'btn1_cre',
                        type: 'image',
                        rect: ['0px', '0px','68px','66px','auto', 'auto'],
                        cursor: ['pointer'],
                        fill: ["rgba(0,0,0,0)",im+"creditos_btn122.png",'0px','0px']
                    }]
                },
                {
                    id: 'creditos_btn2',
                    type: 'image',
                    rect: ['417px', '79px','68px','66px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"creditos_btn222.png",'0px','0px'],
                    userClass: "creditos"
                },
                {
                    id: 'creditos_btn3',
                    type: 'image',
                    rect: ['502px', '156px','68px','66px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"creditos_btn322.png",'0px','0px'],
                    userClass: "creditos"
                },
                {
                    id: 'creditos_btn4',
                    type: 'image',
                    rect: ['468px', '235px','68px','66px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"creditos_btn422.png",'0px','0px'],
                    userClass: "creditos"
                },
                {
                    id: 'creditos_btn5',
                    type: 'image',
                    rect: ['426px', '300px','68px','66px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"creditos_btn522.png",'0px','0px'],
                    userClass: "creditos"
                },
                {
                    id: 'creditos_btn6',
                    type: 'image',
                    rect: ['372px', '229px','68px','66px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"creditos_btn622.png",'0px','0px'],
                    userClass: "creditos"
                },
                {
                    id: 'creditos_btn7',
                    type: 'image',
                    rect: ['336px', '146px','68px','66px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"creditos_btn722.png",'0px','0px'],
                    userClass: "creditos"
                },
                {
                    id: 'botonCerrar',
                    display: 'block',
                    type: 'image',
                    rect: ['864px', '-3px','53px','57px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"boton-cerrar.png",'0px','0px']
                }]
            },
            {
                id: 'mapa-contenido',
                display: 'none',
                type: 'group',
                rect: ['78', '84','947','557','auto', 'auto'],
                c: [
                {
                    id: 'Rectangle',
                    type: 'rect',
                    rect: ['0px', '0px','946px','557px','auto', 'auto'],
                    fill: ["rgba(213,241,251,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'mg_fondoCopy',
                    type: 'image',
                    rect: ['52px', '68px','844px','425px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"mg_fondo.png",'0px','0px'],
                    filter: [0.25641025641026, 0, 1.7179487179487, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                },
                {
                    id: 'mapa_pequeno',
                    type: 'image',
                    rect: ['1px', '0px','946px','557px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"mapa_pequeno.png",'0px','0px']
                },
                {
                    id: 'Zoom1',
                    type: 'image',
                    rect: ['775px', '367px','85px','85px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"Zoom.png",'0px','0px']
                },
                {
                    id: 'btnCerrarMapa',
                    type: 'image',
                    rect: ['870px', '11px','53px','58px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"boton-cerrar2.png",'0px','0px']
                }]
            },
            {
                id: 'cabecera',
                display: 'block',
                type: 'group',
                rect: ['0px', '0px','1055','84','auto', 'auto'],
                c: [
                {
                    id: 'cabezote1',
                    type: 'image',
                    rect: ['0px', '0px','1025px','84px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"cabezote1.png",'0px','0px']
                },
                {
                    id: 'nombre-proyecto',
                    type: 'text',
                    rect: ['94px', '10px','285px','20px','auto', 'auto'],
                    text: "Nombre del Proyecto Formativo",
                    align: "center",
                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(28,187,221,1.00)", "700", "none", "normal"]
                },
                {
                    id: 'Text4Copy2',
                    type: 'text',
                    rect: ['94px', '30px','285px','48px','auto', 'auto'],
                    text: "Gestión de Servicios de Outsourcing en Colombia para la Consolidación de Sectores de Talla Mundial",
                    align: "center",
                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(255,255,255,1.00)", "700", "none", "normal"]
                },
                {
                    id: 'Text3Copy',
                    type: 'text',
                    rect: ['406px', '25px','149px','34px','auto', 'auto'],
                    text: "Fase del Proyecto<br>",
                    align: "center",
                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(28,187,221,1.00)", "700", "none", "normal"]
                },
                {
                    id: 'Text4Copy',
                    type: 'text',
                    rect: ['394px', '46px','173px','19px','auto', 'auto'],
                    text: "Evaluación - 1118 horas",
                    align: "center",
                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(255,255,255,1.00)", "700", "none", "normal"]
                },
                {
                    id: 'Text3',
                    type: 'text',
                    rect: ['579px', '16px','376px','21px','auto', 'auto'],
                    text: "Actividad de Proyecto",
                    align: "center",
                    font: ['Arial, Helvetica, sans-serif', 14, "rgba(28,187,221,1.00)", "700", "none", "normal"]
                },
                {
                    id: 'Text4',
                    type: 'text',
                    rect: ['624px', '38px','285px','38px','auto', 'auto'],
                    text: "Validar Planes de Mejoramiento para la Prestación del Servicio de Outsourcing",
                    align: "center",
                    font: ['Arial', 14, "rgba(255,255,255,1.00)", "700", "none", "normal"]
                },
                {
                    id: 'boton_sonido',
                    type: 'rect',
                    rect: ['979', '25','auto','auto','auto', 'auto']
                }]
            },
            {
                id: 'Botonera_General',
                display: 'block',
                type: 'group',
                rect: ['-1px', '84px','81px','557px','auto', 'auto'],
                c: [
                {
                    id: 'rolloverContex',
                    display: 'none',
                    type: 'group',
                    rect: ['80px', '82px','188','67','auto', 'auto'],
                    c: [
                    {
                        id: 'fondo-rollover2Copy3',
                        type: 'image',
                        rect: ['0px', '0px','188px','67px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"fondo-rollover2.png",'0px','0px']
                    },
                    {
                        id: 'Text2Copy4',
                        type: 'text',
                        rect: ['0px', '25px','188px','25px','auto', 'auto'],
                        text: "Contextualización",
                        align: "center",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(255,255,255,1)", "bold", "none", "normal"]
                    }]
                },
                {
                    id: 'rolloverMestudio',
                    display: 'none',
                    type: 'group',
                    rect: ['80px', '149px','188','67','auto', 'auto'],
                    c: [
                    {
                        id: 'fondo-rollover2Copy2',
                        type: 'image',
                        rect: ['0px', '0px','188px','67px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"fondo-rollover2.png",'0px','0px']
                    },
                    {
                        id: 'Text2Copy3',
                        type: 'text',
                        rect: ['0px', '25px','188px','25px','auto', 'auto'],
                        text: "Material de Estudio",
                        align: "center",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(255,255,255,1)", "bold", "none", "normal"]
                    }]
                },
                {
                    id: 'rolloverGpdf',
                    display: 'none',
                    type: 'group',
                    rect: ['80px', '217px','188','67','auto', 'auto'],
                    c: [
                    {
                        id: 'fondo-rollover2Copy',
                        type: 'image',
                        rect: ['0px', '0px','188px','67px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"fondo-rollover2.png",'0px','0px']
                    },
                    {
                        id: 'Text2Copy2',
                        type: 'text',
                        rect: ['0px', '25px','188px','25px','auto', 'auto'],
                        text: "Guía en PDF",
                        align: "center",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(255,255,255,1)", "bold", "none", "normal"]
                    }]
                },
                {
                    id: 'rolloverEvidencias',
                    display: 'none',
                    type: 'group',
                    rect: ['80px', '282px','188','67','auto', 'auto'],
                    c: [
                    {
                        id: 'fondo-rollover2',
                        type: 'image',
                        rect: ['0px', '0px','188px','67px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"fondo-rollover2.png",'0px','0px']
                    },
                    {
                        id: 'Text2Copy',
                        type: 'text',
                        rect: ['0px', '16px','188px','35px','auto', 'auto'],
                        text: "Evidencias <br>de Aprendizaje",
                        align: "center",
                        font: ['Arial, Helvetica, sans-serif', 15, "rgba(255,255,255,1)", "bold", "none", "normal"]
                    }]
                },
                {
                    id: 'rolloverMapa',
                    display: 'none',
                    type: 'group',
                    rect: ['80px', '463px','204','48','auto', 'auto'],
                    c: [
                    {
                        id: 'fondo-rollover',
                        type: 'image',
                        rect: ['0px', '0px','204px','48px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"fondo-rollover.png",'0px','0px']
                    },
                    {
                        id: 'Text2',
                        type: 'text',
                        rect: ['0px', '16px','204px','21px','auto', 'auto'],
                        text: "Mapa de Contenido",
                        align: "center",
                        font: ['Arial, Helvetica, sans-serif', 16, "rgba(255,255,255,1)", "bold", "none", "normal"]
                    }]
                },
                {
                    id: 'botoneraSub',
                    display: 'none',
                    type: 'group',
                    rect: ['79', '509px','204','48','auto', 'auto'],
                    cursor: ['pointer'],
                    c: [
                    {
                        id: 'botonera3',
                        display: 'block',
                        type: 'image',
                        rect: ['0px', '0px','204px','48px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"botonera32.png",'0px','0px']
                    },
                    {
                        id: 'iconoGlosario',
                        display: 'block',
                        type: 'rect',
                        rect: ['1px', '4px','auto','auto','auto', 'auto']
                    },
                    {
                        id: 'iconoRefe',
                        display: 'block',
                        type: 'rect',
                        rect: ['51px', '4px','auto','auto','auto', 'auto']
                    },
                    {
                        id: 'iconoCreative',
                        display: 'block',
                        type: 'rect',
                        rect: ['104px', '3px','auto','auto','auto', 'auto']
                    },
                    {
                        id: 'iconoCreditos',
                        display: 'block',
                        type: 'rect',
                        rect: ['153px', '4px','auto','auto','auto', 'auto']
                    }]
                },
                {
                    id: 'botonera1',
                    type: 'image',
                    rect: ['1px', '0px','79px','557px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"botonera1.png",'0px','0px']
                },
                {
                    id: 'botonContex',
                    type: 'rect',
                    rect: ['1px', '82px','auto','auto','auto', 'auto'],
                    cursor: ['pointer']
                },
                {
                    id: 'botonMestudio',
                    type: 'rect',
                    rect: ['0px', '149px','auto','auto','auto', 'auto'],
                    cursor: ['pointer']
                },
                {
                    id: 'botonGuiapdf',
                    type: 'rect',
                    rect: ['1px', '218px','auto','auto','auto', 'auto'],
                    cursor: ['pointer']
                },
                {
                    id: 'botonEvidencias',
                    type: 'rect',
                    rect: ['1px', '282px','auto','auto','auto', 'auto'],
                    cursor: ['pointer']
                },
                {
                    id: 'botonMapa',
                    type: 'rect',
                    rect: ['8px', '464px','auto','auto','auto', 'auto'],
                    cursor: ['pointer']
                },
                {
                    id: 'botonClic',
                    type: 'rect',
                    rect: ['10px', '508px','auto','auto','auto', 'auto'],
                    cursor: ['pointer']
                }]
            },
            {
                id: 'zoom1',
                display: 'none',
                type: 'group',
                rect: ['80px', '84px','946','557','auto', 'auto'],
                c: [
                {
                    id: 'fondo_mapas_contenidos',
                    type: 'rect',
                    rect: ['-80px', '-84px','1024px','640px','auto', 'auto'],
                    opacity: 0.76804956896552,
                    fill: ["rgba(8,62,79,1.00)"],
                    stroke: [0,"rgba(0,0,0,1)","none"],
                    transform: [[],[],[],['1.01206']]
                },
                {
                    id: 'mg_fondo',
                    type: 'image',
                    rect: ['20px', '18px','844px','425px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"mg_fondo.png",'0px','0px'],
                    filter: [0.25641025641026, 0, 1.7179487179487, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                },
                {
                    id: 'titulo',
                    type: 'image',
                    rect: ['287px', '-101px','399px','127px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"titulo.png",'0px','0px']
                },
                {
                    id: 'linea_general',
                    type: 'image',
                    rect: ['466px', '-9px','38px','564px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"linea_general.png",'0px','0px']
                },
                {
                    id: 'linea_sub1',
                    type: 'image',
                    rect: ['-8px', '152px','385px','34px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"linea_sub1.png",'0px','0px']
                },
                {
                    id: 'tema1',
                    type: 'image',
                    rect: ['103px', '173px','232px','26px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"tema1.png",'0px','0px']
                },
                {
                    id: 'linea_sub1_1',
                    type: 'image',
                    rect: ['34px', '205px','364px','27px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"linea_sub1_1.png",'0px','0px']
                },
                {
                    id: 'linea_sub2',
                    type: 'image',
                    rect: ['565px', '252px','315px','37px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"linea_sub2.png",'0px','0px']
                },
                {
                    id: 'tema2',
                    type: 'image',
                    rect: ['595px', '276px','240px','53px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"tema2.png",'0px','0px']
                },
                {
                    id: 'linea_sub2_1',
                    type: 'image',
                    rect: ['562px', '333px','319px','27px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"linea_sub2_1.png",'0px','0px']
                },
                {
                    id: 'linea_sub3',
                    type: 'image',
                    rect: ['-6px', '465px','425px','26px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"linea_sub3.png",'0px','0px']
                },
                {
                    id: 'tema3',
                    type: 'image',
                    rect: ['241px', '408px','231px','56px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"tema3.png",'0px','0px']
                },
                {
                    id: 'linea_tema1',
                    type: 'image',
                    rect: ['-77px', '177px','578px','42px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"linea_tema1.png",'0px','0px']
                },
                {
                    id: 'linea_tema2',
                    type: 'image',
                    rect: ['460px', '304px','485px','41px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"linea_tema2.png",'0px','0px']
                },
                {
                    id: 'linea_tema3',
                    type: 'image',
                    rect: ['214px', '435px','292px','43px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"linea_tema3.png",'0px','0px']
                },
                {
                    id: 'subtema1_1',
                    type: 'image',
                    rect: ['-34px', '214px','174px','76px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"subtema1_1.png",'0px','0px']
                },
                {
                    id: 'subtema1_1_1',
                    type: 'image',
                    rect: ['-87px', '267px','581px','162px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"subtema1_1_1.png",'0px','0px']
                },
                {
                    id: 'subtema1_2',
                    type: 'image',
                    rect: ['-78px', '98px','172px','67px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"subtema1_2.png",'0px','0px']
                },
                {
                    id: 'subtema1_2_1',
                    type: 'image',
                    rect: ['-80px', '-80px','187px','195px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"subtema1_2_1.png",'0px','0px']
                },
                {
                    id: 'subtema1_3',
                    type: 'image',
                    rect: ['115px', '96px','163px','76px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"subtema1_3.png",'0px','0px']
                },
                {
                    id: 'subtema1_4',
                    type: 'image',
                    rect: ['283px', '98px','150px','74px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"subtema1_4.png",'0px','0px']
                },
                {
                    id: 'subtema1_4_1',
                    type: 'image',
                    rect: ['282px', '4px','190px','118px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"subtema1_4_1.png",'0px','0px']
                },
                {
                    id: 'subtema1_5',
                    type: 'image',
                    rect: ['304px', '216px','163px','76px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"subtema1_5.png",'0px','0px']
                },
                {
                    id: 'subtema2_1',
                    type: 'image',
                    rect: ['486px', '202px','163px','65px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"subtema2_1.png",'0px','0px']
                },
                {
                    id: 'subtema2_2',
                    type: 'image',
                    rect: ['623px', '178px','182px','88px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"subtema2_2.png",'0px','0px']
                },
                {
                    id: 'subtema2_2_1',
                    type: 'image',
                    rect: ['613px', '73px','190px','118px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"subtema2_2_1.png",'0px','0px']
                },
                {
                    id: 'subtema2_3',
                    type: 'image',
                    rect: ['786px', '183px','163px','83px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"subtema2_3.png",'0px','0px']
                },
                {
                    id: 'subtema2_3_1',
                    type: 'image',
                    rect: ['783px', '42px','169px','151px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"subtema2_3_1.png",'0px','0px']
                },
                {
                    id: 'subtema2_4',
                    type: 'image',
                    rect: ['489px', '350px','179px','83px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"subtema2_4.png",'0px','0px']
                },
                {
                    id: 'subtema2_4_1',
                    type: 'image',
                    rect: ['486px', '413px','184px','82px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"subtema2_4_1.png",'0px','0px']
                },
                {
                    id: 'subtema2_5',
                    type: 'image',
                    rect: ['648px', '351px','163px','83px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"subtema2_5.png",'0px','0px']
                },
                {
                    id: 'subtema2_6',
                    type: 'image',
                    rect: ['788px', '350px','163px','83px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"subtema2_6.png",'0px','0px']
                },
                {
                    id: 'subtema2_6_1',
                    type: 'image',
                    rect: ['776px', '417px','184px','144px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"subtema2_6_1.png",'0px','0px']
                },
                {
                    id: 'subtema3_1',
                    type: 'image',
                    rect: ['-91px', '478px','198px','81px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"subtema3_1.png",'0px','0px']
                },
                {
                    id: 'subtema3_2',
                    type: 'image',
                    rect: ['84px', '478px','212px','88px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"subtema3_2.png",'0px','0px']
                },
                {
                    id: 'subtema3_3',
                    type: 'image',
                    rect: ['273px', '478px','209px','88px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"subtema3_3.png",'0px','0px']
                },
                {
                    id: 'boton-cerrar',
                    type: 'image',
                    rect: ['875px', '-69px','53px','58px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"boton-cerrar2.png",'0px','0px']
                }]
            }],
            symbolInstances: [
            {
                id: 'botonContex',
                symbolName: 'botonContex',
                autoPlay: {

                }
            },
            {
                id: 'iconoRefe',
                symbolName: 'iconoRefe_3',
                autoPlay: {

                }
            },
            {
                id: 'botonGuiapdf',
                symbolName: 'botonGuiapdf',
                autoPlay: {

                }
            },
            {
                id: 'botonMapa',
                symbolName: 'botonMapa',
                autoPlay: {

                }
            },
            {
                id: 'boton_sonido',
                symbolName: 'boton_sonido',
                autoPlay: {

                }
            },
            {
                id: 'botonEvidencias',
                symbolName: 'botonEvidencias',
                autoPlay: {

                }
            },
            {
                id: 'b2',
                symbolName: 'b2',
                autoPlay: {

                }
            },
            {
                id: 'b3',
                symbolName: 'b3',
                autoPlay: {

                }
            },
            {
                id: 'barco3',
                symbolName: 'barco3'
            },
            {
                id: 'material_carro1',
                symbolName: 'material_carro1'
            },
            {
                id: 'botonMestudio',
                symbolName: 'botonMestudio',
                autoPlay: {

                }
            },
            {
                id: 'bar1',
                symbolName: 'bar1',
                autoPlay: {

                }
            },
            {
                id: 'botonClic',
                symbolName: 'botonClic',
                autoPlay: {

                }
            },
            {
                id: 'botonVolver2',
                symbolName: 'botonVolver',
                autoPlay: {

                }
            },
            {
                id: 'iconoCreditos',
                symbolName: 'iconoCreditos_3',
                autoPlay: {

                }
            },
            {
                id: 'iconoCreative',
                symbolName: 'iconoCreative_3',
                autoPlay: {

                }
            },
            {
                id: 'carro1',
                symbolName: 'carro1',
                autoPlay: {

                }
            },
            {
                id: 'aion',
                symbolName: 'aion',
                autoPlay: {

                }
            },
            {
                id: 'cabezaEvide',
                symbolName: 'cabezaEvide',
                autoPlay: {

                }
            },
            {
                id: 'barco4',
                symbolName: 'barco4',
                autoPlay: {

                }
            },
            {
                id: 'iconoGlosario',
                symbolName: 'iconoGlosario_3',
                autoPlay: {

                }
            },
            {
                id: 'cabezaPer1',
                symbolName: 'cabezaPer1',
                autoPlay: {

                }
            },
            {
                id: 'material_carro2',
                symbolName: 'material_carro2'
            }
            ]
        },
    states: {
        "Base State": {
            "${_text_evidencia13_2}": [
                ["style", "top", '48px']
            ],
            "${_linea_tema1}": [
                ["style", "top", '177px'],
                ["style", "left", '-77px']
            ],
            "${_fondo-rollover2Copy2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_boton-atras}": [
                ["style", "display", 'none'],
                ["style", "left", '1px'],
                ["style", "cursor", 'pointer'],
                ["style", "top", '175px']
            ],
            "${_evi_boton9}": [
                ["style", "top", '86px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '440px'],
                ["style", "cursor", 'pointer']
            ],
            "${_evi_roll3}": [
                ["style", "top", '564px'],
                ["style", "left", '834px'],
                ["style", "height", '24px']
            ],
            "${_Text5Copy104}": [
                ["style", "top", '48px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '281px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text3Copy5}": [
                ["style", "top", '3px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '14px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "height", '49px'],
                ["style", "left", '0px'],
                ["style", "width", '83px']
            ],
            "${_Text5Copy212}": [
                ["style", "top", '208px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '26px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_text_evidencia1_2}": [
                ["style", "top", '48px']
            ],
            "${_conte_evi4}": [
                ["color", "background-color", 'rgba(84,255,0,0)'],
                ["style", "overflow", 'visible'],
                ["style", "height", '372px'],
                ["style", "top", '120px'],
                ["style", "left", '180px'],
                ["style", "width", '687px']
            ],
            "${_fondo-rollover2Copy}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text5Copy71}": [
                ["style", "top", '0px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '382px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Group52}": [
                ["style", "height", '243px'],
                ["style", "width", '620px'],
                ["style", "overflow", 'auto']
            ],
            "${_material_tienda3}": [
                ["style", "top", '106px'],
                ["style", "left", '2560px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_Text5Copy178}": [
                ["style", "top", '80px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '39px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_btn1}": [
                ["style", "top", '-57px'],
                ["style", "height", '114px'],
                ["style", "left", '0px'],
                ["style", "overflow", 'visible']
            ],
            "${_instru_teclado_texto}": [
                ["style", "top", '79px'],
                ["style", "left", '0px'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_c3}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["subproperty", "boxShadow.color", 'rgba(255,255,255,0.65098)'],
                ["style", "left", '505px'],
                ["style", "width", '64px'],
                ["style", "top", '158px'],
                ["subproperty", "boxShadow.blur", '24px'],
                ["style", "display", 'none'],
                ["subproperty", "boxShadow.spread", '6px'],
                ["style", "height", '64px'],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["subproperty", "filter.blur", '0px']
            ],
            "${_Text5Copy14}": [
                ["style", "top", '23px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '26px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_text_evidencia3_2}": [
                ["style", "top", '53px'],
                ["style", "width", '580px']
            ],
            "${_Group55Copy6}": [
                ["style", "top", '50px'],
                ["style", "width", '621px'],
                ["style", "height", '244px'],
                ["style", "overflow", 'auto']
            ],
            "${_Text5Copy67}": [
                ["style", "top", '38px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '282px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Group57Copy3}": [
                ["style", "top", '8px'],
                ["style", "overflow", 'auto'],
                ["style", "height", '264px'],
                ["style", "width", '621px']
            ],
            "${_Group46}": [
                ["style", "top", '64px'],
                ["style", "width", '620px'],
                ["style", "height", '205px'],
                ["style", "overflow", 'auto']
            ],
            "${_Text5Copy93}": [
                ["style", "top", '17px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '23px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy128}": [
                ["style", "top", '0px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '23px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_rolloverGpdf}": [
                ["style", "top", '217px'],
                ["style", "left", '80px'],
                ["style", "display", 'none']
            ],
            "${_Text5Copy231}": [
                ["style", "top", '417px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '26px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_eviCon_3}": [
                ["style", "top", '151px'],
                ["style", "left", '230px'],
                ["style", "display", 'block']
            ],
            "${_Text5Copy98}": [
                ["style", "top", '203px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '39px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Rectangle7Copy}": [
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '32deg'],
                ["style", "height", '4px'],
                ["style", "top", '55px'],
                ["style", "left", '267px'],
                ["style", "width", '61px']
            ],
            "${_Text9Copy17}": [
                ["style", "top", '-6px'],
                ["style", "width", '530px'],
                ["style", "line-height", '22px'],
                ["style", "display", 'block'],
                ["color", "color", 'rgba(28,28,30,1)'],
                ["style", "height", '30px'],
                ["style", "left", '-10px'],
                ["style", "font-size", '14px']
            ],
            "${_Text5Copy76}": [
                ["style", "top", '158px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '25px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_subtema1_5}": [
                ["style", "left", '304px'],
                ["style", "top", '216px']
            ],
            "${_evidencias}": [
                ["style", "top", '78px'],
                ["style", "left", '96px'],
                ["style", "display", 'none']
            ],
            "${_Text5Copy229}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px'],
                ["style", "top", '248px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '64px'],
                ["style", "font-style", 'italic']
            ],
            "${_Text5Copy66}": [
                ["style", "top", '0px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '25px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text6Copy4}": [
                ["style", "top", '10px'],
                ["style", "width", '242px'],
                ["style", "text-align", 'center'],
                ["style", "font-family", 'Arial'],
                ["style", "height", '19px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '48px'],
                ["style", "font-size", '14px']
            ],
            "${_Text5Copy119}": [
                ["style", "top", '642px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '25px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy156}": [
                ["style", "top", '653px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '26px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy113}": [
                ["style", "top", '160px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '25px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_fondo_general_creditos}": [
                ["style", "top", '73px'],
                ["style", "left", '-12px'],
                ["style", "display", 'block']
            ],
            "${_mg_fondoCopy}": [
                ["style", "top", '68px'],
                ["subproperty", "filter.invert", '0.25641025641026'],
                ["style", "left", '52px'],
                ["subproperty", "filter.contrast", '1.7179487179487']
            ],
            "${_subtema2_4}": [
                ["style", "left", '489px'],
                ["style", "top", '350px']
            ],
            "${_Text5Copy}": [
                ["style", "top", '0px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '452px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_mapa_pequeno}": [
                ["style", "top", '0px'],
                ["style", "left", '1px']
            ],
            "${_Text5Copy28}": [
                ["style", "top", '0px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '25px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy54}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '1px'],
                ["style", "width", '579px'],
                ["style", "top", '240px'],
                ["style", "text-align", 'justify'],
                ["style", "text-indent", '228px'],
                ["style", "height", '21px']
            ],
            "${_evi_boton4}": [
                ["style", "top", '254px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '331px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Rectangle5Copy3}": [
                ["style", "top", '-3px'],
                ["style", "height", '5px'],
                ["color", "background-color", 'rgba(211,42,42,1)'],
                ["style", "left", '0px'],
                ["style", "width", '83px']
            ],
            "${_Text5Copy99}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px'],
                ["style", "top", '244px'],
                ["style", "text-align", 'justify'],
                ["style", "text-indent", '255px'],
                ["style", "height", '20px']
            ],
            "${_glow1Tecla}": [
                ["style", "top", '5px'],
                ["style", "border-bottom-left-radius", [21,21], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-left-radius", [17,17], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [28,28], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '78px'],
                ["style", "left", '19px'],
                ["style", "border-top-right-radius", [26,26], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '113px']
            ],
            "${_Rectangle10}": [
                ["style", "top", '24px'],
                ["transform", "rotateZ", '179deg'],
                ["style", "height", '62px'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "left", '89px'],
                ["style", "width", '2px']
            ],
            "${_c_diseno}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_text_evidencia5}": [
                ["style", "left", '34px']
            ],
            "${_botonEvidencias}": [
                ["style", "top", '282px'],
                ["style", "left", '1px'],
                ["style", "-webkit-transform-origin", [25,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [25,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [25,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [25,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [25,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [25,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "cursor", 'pointer'],
                ["style", "clip", [0,78.02734375,68,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Text5Copy45}": [
                ["style", "top", '0px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '382px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Rectangle}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Group47}": [
                ["style", "height", '262px'],
                ["style", "width", '619px'],
                ["style", "overflow", 'auto']
            ],
            "${_material_palmas1}": [
                ["style", "top", '194px'],
                ["style", "left", '1455px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_Text5Copy23}": [
                ["style", "top", '458px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '39px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text9Copy8}": [
                ["style", "top", '0px'],
                ["style", "width", '543px'],
                ["style", "line-height", '22px'],
                ["style", "display", 'block'],
                ["color", "color", 'rgba(28,28,30,1)'],
                ["style", "height", '126px'],
                ["style", "left", '0px'],
                ["style", "font-size", '14px']
            ],
            "${_linea_general}": [
                ["style", "left", '466px'],
                ["style", "top", '-9px']
            ],
            "${_ma_boton3}": [
                ["style", "top", '159px'],
                ["style", "left", '2694px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_evi_roll4}": [
                ["style", "top", '551px'],
                ["style", "left", '834px'],
                ["style", "height", '24px']
            ],
            "${_Text5Copy34}": [
                ["style", "top", '157px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '25px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy203}": [
                ["style", "top", '620px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '26px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_evi_roll8}": [
                ["style", "top", '550px'],
                ["style", "left", '834px'],
                ["style", "height", '48px']
            ],
            "${_Text5Copy79}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px'],
                ["style", "top", '325px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '40px'],
                ["style", "font-style", 'normal']
            ],
            "${_Text2}": [
                ["style", "top", '16px'],
                ["style", "height", '21px'],
                ["style", "font-size", '16px'],
                ["style", "left", '0px'],
                ["style", "width", '204px']
            ],
            "${_Text9Copy22}": [
                ["style", "line-height", '22px'],
                ["style", "font-size", '14px'],
                ["style", "top", '59px'],
                ["color", "color", 'rgba(28,28,30,1)'],
                ["style", "height", '159px'],
                ["style", "display", 'block'],
                ["style", "left", '1px'],
                ["style", "width", '530px']
            ],
            "${_Text5Copy126}": [
                ["style", "top", '0px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '368px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_botonCerrarMenuCopy2}": [
                ["style", "top", '-56px'],
                ["style", "left", '813px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Text5Copy60}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '1px'],
                ["style", "width", '579px'],
                ["style", "top", '342px'],
                ["style", "text-align", 'justify'],
                ["style", "text-indent", '264px'],
                ["style", "height", '18px']
            ],
            "${_evi_boton1}": [
                ["style", "top", '352px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "cursor", 'pointer'],
                ["style", "left", '402px']
            ],
            "${_Text5Copy147}": [
                ["style", "top", '165px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '23px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_fondo_tex1}": [
                ["style", "height", '310px'],
                ["style", "opacity", '0.07000000029802322'],
                ["style", "top", '49px']
            ],
            "${_Text5Copy8}": [
                ["style", "top", '0px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '26px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy25}": [
                ["style", "top", '44px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '282px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_conte_evi8}": [
                ["color", "background-color", 'rgba(84,255,0,0)'],
                ["style", "overflow", 'visible'],
                ["style", "height", '372px'],
                ["style", "top", '120px'],
                ["style", "left", '180px'],
                ["style", "width", '687px']
            ],
            "${_Text5Copy219}": [
                ["style", "top", '620px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '26px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy157}": [
                ["style", "top", '9px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '26px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_evi_boton11}": [
                ["style", "top", '36px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '321px'],
                ["style", "cursor", 'pointer']
            ],
            "${_evi_roll10}": [
                ["style", "top", '550px'],
                ["style", "left", '834px'],
                ["style", "height", '48px']
            ],
            "${_Text5Copy19}": [
                ["style", "top", '208px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '26px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy166}": [
                ["style", "top", '331px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '74px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_boton_siguiente1}": [
                ["style", "display", 'block'],
                ["style", "left", '543px'],
                ["style", "cursor", 'pointer'],
                ["style", "top", '505px']
            ],
            "${_c1}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["subproperty", "boxShadow.color", 'rgba(255,255,255,0.65098)'],
                ["style", "left", '424px'],
                ["style", "width", '64px'],
                ["style", "top", '171px'],
                ["subproperty", "boxShadow.blur", '24px'],
                ["style", "display", 'none'],
                ["subproperty", "boxShadow.spread", '6px'],
                ["style", "height", '64px'],
                ["subproperty", "filter.blur", '0px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["subproperty", "boxShadow.offsetV", '3px']
            ],
            "${_Rectangle70}": [
                ["style", "top", '95px'],
                ["transform", "rotateZ", '-21deg'],
                ["style", "height", '62px'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "left", '11px'],
                ["style", "width", '2px']
            ],
            "${_Text5Copy38}": [
                ["style", "top", '418px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '25px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy142}": [
                ["style", "top", '0px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '384px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Rectangle7Copy14}": [
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '-10deg'],
                ["style", "height", '4px'],
                ["style", "top", '2px'],
                ["style", "left", '276px'],
                ["style", "width", '129px']
            ],
            "${_evi_per1_brazo}": [
                ["style", "left", '86px'],
                ["style", "top", '52px']
            ],
            "${_diseno_evidencias}": [
                ["style", "display", 'none']
            ],
            "${_guiaPDF_per_cuerpo}": [
                ["style", "top", '190px'],
                ["style", "left", '169px']
            ],
            "${_evi_boton10}": [
                ["style", "top", '0px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '486px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Text}": [
                ["style", "top", '23px'],
                ["style", "text-align", 'center'],
                ["style", "font-family", 'Arial'],
                ["color", "color", 'rgba(0,36,55,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '19px'],
                ["style", "height", '32px']
            ],
            "${_boton-siguiente}": [
                ["style", "display", 'block'],
                ["style", "left", '761px'],
                ["style", "cursor", 'pointer'],
                ["style", "top", '175px']
            ],
            "${_Text5Copy16}": [
                ["style", "top", '40px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '26px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Rectangle7Copy4}": [
                ["style", "top", '24px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "height", '4px'],
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "left", '116px'],
                ["style", "width", '249px']
            ],
            "${_Ellipse3Copy6}": [
                ["style", "top", '1px'],
                ["style", "height", '9px'],
                ["style", "left", '388px'],
                ["style", "width", '9px']
            ],
            "${_rolloverContex}": [
                ["style", "top", '82px'],
                ["style", "left", '80px'],
                ["style", "display", 'none']
            ],
            "${_subtema1_1_1}": [
                ["style", "left", '-87px'],
                ["style", "top", '267px']
            ],
            "${_Botonera_General}": [
                ["style", "top", '84px'],
                ["style", "height", '557px'],
                ["style", "display", 'block'],
                ["style", "left", '-1px'],
                ["style", "width", '81px']
            ],
            "${_Group43}": [
                ["style", "top", '65px'],
                ["style", "width", '620px'],
                ["style", "height", '207px'],
                ["style", "overflow", 'auto']
            ],
            "${_Group55Copy}": [
                ["style", "top", '50px'],
                ["style", "overflow", 'auto'],
                ["style", "height", '244px'],
                ["style", "width", '621px']
            ],
            "${_Text5Copy137}": [
                ["style", "top", '0px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '26px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy146}": [
                ["style", "top", '80px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '39px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_evi_per2_brazo2}": [
                ["style", "top", '126px'],
                ["style", "left", '113px']
            ],
            "${_Text9Copy4}": [
                ["style", "top", '103px'],
                ["style", "width", '560px'],
                ["style", "line-height", '22px'],
                ["color", "color", 'rgba(28,28,30,1)'],
                ["style", "height", '79px'],
                ["style", "display", 'block'],
                ["style", "left", '-10px'],
                ["style", "font-size", '14px']
            ],
            "${_text_evidencia13_1}": [
                ["style", "top", '37px']
            ],
            "${_text_evidencia3_1}": [
                ["style", "top", '45px'],
                ["style", "width", '621px'],
                ["style", "height", '291px'],
                ["style", "overflow", 'visible']
            ],
            "${_Group45}": [
                ["style", "top", '73px'],
                ["style", "width", '622px'],
                ["style", "height", '222px'],
                ["style", "overflow", 'auto']
            ],
            "${_creditos_programadores}": [
                ["style", "top", '38px'],
                ["style", "left", '32px'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_Text5Copy96}": [
                ["style", "top", '80px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '64px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text2Copy3}": [
                ["style", "top", '25px'],
                ["style", "left", '0px'],
                ["style", "font-size", '16px']
            ],
            "${_text_evidencia2_2}": [
                ["style", "top", '34px']
            ],
            "${_creditos_btn6}": [
                ["style", "top", '229px'],
                ["style", "left", '372px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Text5Copy130}": [
                ["style", "top", '80px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '41px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_cabecera}": [
                ["style", "display", 'block']
            ],
            "${_btn4}": [
                ["style", "left", '0px'],
                ["style", "top", '-57px']
            ],
            "${_indice_figuras_cont1}": [
                ["style", "top", '41px'],
                ["style", "left", '68px'],
                ["style", "display", 'none']
            ],
            "${_evi_roll11}": [
                ["style", "top", '550px'],
                ["style", "left", '834px'],
                ["style", "height", '48px']
            ],
            "${_iconoGlosario}": [
                ["style", "display", 'block'],
                ["style", "left", '1px'],
                ["style", "clip", [0,50.79296875,40,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "top", '4px']
            ],
            "${_material_tienda1}": [
                ["style", "top", '106px'],
                ["style", "left", '1195px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_Text5Copy101}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px'],
                ["style", "top", '263px'],
                ["style", "text-align", 'justify'],
                ["style", "text-indent", '142px'],
                ["style", "height", '39px']
            ],
            "${_subtema1_2}": [
                ["style", "left", '-78px'],
                ["style", "top", '98px']
            ],
            "${_Text5Copy49}": [
                ["style", "top", '80px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '84px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '1px'],
                ["style", "width", '579px']
            ],
            "${_Rectangle110}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["transform", "rotateZ", '133deg'],
                ["style", "height", '99px'],
                ["style", "top", '-18px'],
                ["style", "left", '135px'],
                ["style", "width", '2px']
            ],
            "${_roll2}": [
                ["style", "top", '592px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(0,18,45,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '796px'],
                ["style", "font-size", '14px']
            ],
            "${_Rectangle40}": [
                ["style", "top", '114px'],
                ["transform", "rotateZ", '-8deg'],
                ["style", "height", '103px'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "left", '88px'],
                ["style", "width", '2px']
            ],
            "${_botonVolver2}": [
                ["style", "display", 'block'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer'],
                ["style", "top", '24px']
            ],
            "${_evi_indicador_azul1Copy5}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text5Copy199}": [
                ["style", "top", '417px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '26px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_palabras}": [
                ["style", "top", '86px'],
                ["style", "overflow", 'auto'],
                ["style", "height", '243px'],
                ["style", "left", '70px'],
                ["style", "width", '699px']
            ],
            "${_Text5Copy218}": [
                ["style", "top", '38px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '285px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy227}": [
                ["style", "top", '165px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '23px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_evi_roll12}": [
                ["style", "top", '550px'],
                ["style", "left", '834px'],
                ["style", "height", '48px']
            ],
            "${_Text5Copy162}": [
                ["style", "top", '80px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '39px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_material_moto}": [
                ["style", "top", '75px'],
                ["style", "left", '0px']
            ],
            "${_Text5Copy29}": [
                ["style", "top", '0px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '379px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_subtema2_1}": [
                ["style", "left", '486px'],
                ["style", "top", '202px']
            ],
            "${_cre_btn5}": [
                ["style", "display", 'block'],
                ["style", "left", '475px'],
                ["style", "top", '157px']
            ],
            "${_Text5Copy11}": [
                ["style", "top", '653px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '26px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text3Copy4}": [
                ["style", "top", '10px'],
                ["style", "text-align", 'center'],
                ["style", "width", '83px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "height", '35px'],
                ["style", "left", '0px'],
                ["style", "font-size", '14px']
            ],
            "${_evi_edificio5}": [
                ["style", "top", '186px'],
                ["style", "left", '205px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_subtema2_6_1}": [
                ["style", "top", '417px'],
                ["style", "left", '776px']
            ],
            "${_Text5Copy217}": [
                ["style", "top", '0px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '26px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_material_tienda2}": [
                ["style", "top", '110px'],
                ["style", "left", '1895px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_Group57Copy2}": [
                ["style", "top", '8px'],
                ["style", "width", '621px'],
                ["style", "height", '264px'],
                ["style", "overflow", 'auto']
            ],
            "${_evi_moto}": [
                ["style", "top", '162px'],
                ["style", "left", '583px']
            ],
            "${_Text5Copy190}": [
                ["style", "top", '0px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '384px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_text_evidencia11_2}": [
                ["style", "top", '48px']
            ],
            "${_RectangleCopy3}": [
                ["style", "top", '0px'],
                ["style", "height", '114px'],
                ["color", "background-color", 'rgba(252,185,59,1)'],
                ["style", "left", '1px'],
                ["style", "width", '83px']
            ],
            "${_Text5Copy179}": [
                ["style", "top", '165px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '23px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_evi_roll5}": [
                ["style", "top", '542px'],
                ["style", "left", '834px'],
                ["style", "height", '24px']
            ],
            "${_Text5Copy150}": [
                ["style", "top", '331px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '74px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Rectangle5}": [
                ["style", "top", '-3px'],
                ["style", "height", '5px'],
                ["color", "background-color", 'rgba(0,60,86,1)'],
                ["style", "left", '0px'],
                ["style", "width", '83px']
            ],
            "${_Text5Copy177}": [
                ["style", "top", '40px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '26px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text6Copy2}": [
                ["style", "top", '7px'],
                ["style", "width", '242px'],
                ["style", "text-align", 'center'],
                ["style", "font-family", 'Arial'],
                ["style", "height", '19px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '122px'],
                ["style", "font-size", '14px']
            ],
            "${_creditos_btn3}": [
                ["style", "top", '156px'],
                ["style", "left", '502px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Text5Copy222}": [
                ["style", "top", '0px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '384px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text6Copy3}": [
                ["style", "top", '8px'],
                ["style", "font-size", '14px'],
                ["style", "text-align", 'center'],
                ["style", "font-weight", 'bold'],
                ["style", "height", '19px'],
                ["style", "font-family", 'Arial'],
                ["style", "left", '81px'],
                ["style", "width", '242px']
            ],
            "${_linea_tema2}": [
                ["style", "top", '304px'],
                ["style", "left", '460px']
            ],
            "${_btn3}": [
                ["style", "left", '-1px'],
                ["style", "top", '-57px']
            ],
            "${_estrategias_aprendizaje}": [
                ["style", "left", '0px'],
                ["style", "top", '59px']
            ],
            "${_c_lider_linea}": [
                ["style", "top", '0px'],
                ["style", "left", '284px']
            ],
            "${_Text5Copy57}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '1px'],
                ["style", "width", '579px'],
                ["style", "top", '320px'],
                ["style", "text-align", 'justify'],
                ["style", "text-indent", '489px'],
                ["style", "height", '18px']
            ],
            "${_linea_sub3}": [
                ["style", "top", '465px'],
                ["style", "left", '-6px']
            ],
            "${_Group54Copy}": [
                ["style", "top", '73px'],
                ["style", "overflow", 'auto'],
                ["style", "height", '234px'],
                ["style", "width", '621px']
            ],
            "${_Text9Copy16}": [
                ["style", "top", '-71px'],
                ["color", "color", 'rgba(12,92,117,1)'],
                ["style", "line-height", '22px'],
                ["style", "height", '24px'],
                ["style", "display", 'block'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '-10px'],
                ["style", "width", '530px']
            ],
            "${_material_flores1}": [
                ["style", "top", '294px'],
                ["style", "left", '974px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_Text5Copy26}": [
                ["style", "top", '625px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '25px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Ellipse3Copy2}": [
                ["style", "top", '169px'],
                ["style", "height", '9px'],
                ["style", "left", '15px'],
                ["style", "width", '9px']
            ],
            "${_Text4Copy2}": [
                ["style", "top", '30px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "height", '48px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '94px'],
                ["style", "width", '285px']
            ],
            "${_Rectangle7Copy9}": [
                ["style", "top", '25px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "height", '4px'],
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "left", '46px'],
                ["style", "width", '244px']
            ],
            "${_Text5Copy143}": [
                ["style", "top", '23px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '26px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_fondo_creditos}": [
                ["style", "-webkit-transform-origin", [1.91,98.4], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [1.91,98.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [1.91,98.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [1.91,98.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [1.91,98.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [1.91,98.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "display", 'block'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_vista}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "overflow", 'hidden']
            ],
            "${_evi_fondo}": [
                ["style", "top", '80px'],
                ["style", "left", '10px']
            ],
            "${_Text5Copy196}": [
                ["style", "top", '208px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '26px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy201}": [
                ["style", "top", '0px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '26px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy172}": [
                ["style", "top", '653px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '26px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_subtema3_1}": [
                ["style", "left", '-91px'],
                ["style", "top", '478px']
            ],
            "${_creditos_btn1}": [
                ["style", "display", 'block']
            ],
            "${_c6}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["subproperty", "boxShadow.color", 'rgba(255,255,255,0.65098)'],
                ["style", "left", '375px'],
                ["style", "width", '63px'],
                ["style", "top", '231px'],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["style", "display", 'none'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '63px'],
                ["subproperty", "boxShadow.spread", '6px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["subproperty", "boxShadow.blur", '24px']
            ],
            "${_material_edificio3}": [
                ["style", "top", '114px'],
                ["style", "left", '2268px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_Ellipse3Copy5}": [
                ["style", "height", '9px'],
                ["style", "top", '7px'],
                ["style", "left", '14px'],
                ["style", "width", '9px']
            ],
            "${_Rectangle7Copy8}": [
                ["style", "top", '106px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '-47deg'],
                ["style", "height", '4px'],
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "left", '6px'],
                ["style", "width", '109px']
            ],
            "${_Text5Copy18}": [
                ["style", "top", '165px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '23px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_personaje1_evidencias}": [
                ["style", "top", '258px'],
                ["style", "left", '94px'],
                ["style", "overflow", 'hidden']
            ],
            "${_btn1_cre}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Text5Copy9}": [
                ["style", "top", '38px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '285px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Group57Copy}": [
                ["style", "top", '8px'],
                ["style", "overflow", 'auto'],
                ["style", "height", '264px'],
                ["style", "width", '621px']
            ],
            "${_botonMapa}": [
                ["style", "top", '464px'],
                ["style", "left", '8px'],
                ["style", "-webkit-transform-origin", [24,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [24,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [24,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [24,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [24,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [24,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "cursor", 'pointer'],
                ["style", "clip", [0,62.36328125,50,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_cre_btn4}": [
                ["style", "display", 'block'],
                ["style", "left", '519px'],
                ["style", "top", '162px']
            ],
            "${_Text5Copy86}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px'],
                ["style", "top", '43px'],
                ["style", "text-align", 'justify'],
                ["style", "overflow", 'visible'],
                ["style", "height", '283px']
            ],
            "${_Text5Copy92}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px'],
                ["style", "top", '440px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '43px'],
                ["style", "font-style", 'italic']
            ],
            "${_Group50}": [
                ["style", "top", '7px'],
                ["style", "width", '619px'],
                ["style", "height", '259px'],
                ["style", "overflow", 'auto']
            ],
            "${_evi_roll13}": [
                ["style", "top", '550px'],
                ["style", "left", '834px'],
                ["style", "height", '48px']
            ],
            "${_TextCopy4}": [
                ["style", "top", '25px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(0,36,55,1)'],
                ["style", "height", '32px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '19px'],
                ["style", "font-family", 'Arial']
            ],
            "${_Text5Copy42}": [
                ["style", "top", '622px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '26px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy215}": [
                ["style", "top", '417px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '26px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Group11}": [
                ["style", "top", '22px'],
                ["style", "overflow", 'auto'],
                ["style", "height", '155px'],
                ["style", "width", '564px']
            ],
            "${_linea_sub2_1}": [
                ["style", "top", '333px'],
                ["style", "left", '562px']
            ],
            "${_personaje1_material}": [
                ["style", "top", '324px'],
                ["style", "left", '198px']
            ],
            "${_refeImagenes}": [
                ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "overflow", 'visible'],
                ["style", "display", 'none'],
                ["style", "top", '149px'],
                ["style", "left", '142px'],
                ["style", "width", '858px']
            ],
            "${_conte_evi10}": [
                ["color", "background-color", 'rgba(84,255,0,0)'],
                ["style", "overflow", 'visible'],
                ["style", "height", '372px'],
                ["style", "top", '120px'],
                ["style", "left", '180px'],
                ["style", "width", '687px']
            ],
            "${_zoom1}": [
                ["style", "top", '84px'],
                ["style", "left", '80px'],
                ["style", "display", 'none']
            ],
            "${_Text5Copy15}": [
                ["style", "top", '0px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '26px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_evi_indicador_azul2Copy3}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_conte_evi11}": [
                ["style", "top", '120px'],
                ["style", "overflow", 'visible'],
                ["style", "height", '372px'],
                ["color", "background-color", 'rgba(84,255,0,0)'],
                ["style", "left", '180px'],
                ["style", "width", '687px']
            ],
            "${_Text5Copy129}": [
                ["style", "top", '40px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '26px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy206}": [
                ["style", "top", '0px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '384px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Group13}": [
                ["style", "top", '63px'],
                ["style", "width", '621px'],
                ["style", "height", '239px'],
                ["style", "overflow", 'auto']
            ],
            "${_webgrafia_guia1}": [
                ["style", "top", '75px'],
                ["style", "left", '46px'],
                ["style", "display", 'none']
            ],
            "${_Text5Copy220}": [
                ["style", "top", '653px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '26px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_roll1}": [
                ["style", "top", '594px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(0,18,45,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '799px'],
                ["style", "font-size", '14px']
            ],
            "${_Text5Copy63}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '1px'],
                ["style", "width", '579px'],
                ["style", "top", '422px'],
                ["style", "text-align", 'justify'],
                ["style", "text-indent", '307px'],
                ["style", "height", '18px']
            ],
            "${_material_fondo_rollover}": [
                ["style", "top", '576px'],
                ["style", "left", '774px']
            ],
            "${_Text5Copy197}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px'],
                ["style", "top", '248px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '64px'],
                ["style", "font-style", 'italic']
            ],
            "${_linea_tema3}": [
                ["style", "left", '214px'],
                ["style", "top", '435px']
            ],
            "${_mapa-contenido}": [
                ["style", "display", 'none']
            ],
            "${_emiter1}": [
                ["style", "height", '50px'],
                ["color", "background-color", 'rgba(122,166,248,0.00)'],
                ["style", "width", '50px']
            ],
            "${_Text3Copy3}": [
                ["style", "top", '4px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '14px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "height", '49px'],
                ["style", "left", '0px'],
                ["style", "width", '83px']
            ],
            "${_Text5Copy173}": [
                ["style", "top", '9px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '26px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_subtema1_4_1}": [
                ["style", "left", '282px'],
                ["style", "top", '4px']
            ],
            "${_linea_sub2}": [
                ["style", "top", '252px'],
                ["style", "left", '565px']
            ],
            "${_Text5Copy31}": [
                ["style", "top", '0px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '22px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_guiaPDF_boton}": [
                ["style", "top", '325px'],
                ["style", "left", '710px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Text9Copy27}": [
                ["style", "line-height", '22px'],
                ["color", "color", 'rgba(12,92,117,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '1px'],
                ["style", "width", '530px'],
                ["style", "top", '57px'],
                ["style", "text-align", 'left'],
                ["style", "height", '24px'],
                ["style", "display", 'block']
            ],
            "${_boton_sonido}": [
                ["style", "clip", [0,40.42578125,40,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '975px']
            ],
            "${_Text9Copy14}": [
                ["style", "line-height", '22px'],
                ["style", "font-size", '14px'],
                ["style", "top", '105px'],
                ["style", "height", '45px'],
                ["style", "display", 'block'],
                ["color", "color", 'rgba(28,28,30,1)'],
                ["style", "left", '-10px'],
                ["style", "width", '530px']
            ],
            "${_Text5Copy111}": [
                ["style", "top", '40px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '25px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy10}": [
                ["style", "top", '620px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '26px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text9Copy28}": [
                ["style", "top", '101px'],
                ["style", "width", '530px'],
                ["style", "line-height", '22px'],
                ["color", "color", 'rgba(28,28,30,1)'],
                ["style", "height", '45px'],
                ["style", "display", 'block'],
                ["style", "left", '-10px'],
                ["style", "font-size", '14px']
            ],
            "${_Text5Copy160}": [
                ["style", "top", '0px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '26px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_cont13}": [
                ["style", "top", '0px'],
                ["style", "left", '11px'],
                ["style", "display", 'block']
            ],
            "${_Text5Copy167}": [
                ["style", "top", '417px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '26px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_cont7}": [
                ["style", "top", '0px'],
                ["style", "left", '11px'],
                ["style", "display", 'block']
            ],
            "${_boton-cerrar}": [
                ["style", "top", '-69px'],
                ["style", "left", '875px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Text9Copy12}": [
                ["style", "top", '0px'],
                ["style", "width", '530px'],
                ["style", "line-height", '22px'],
                ["style", "height", '121px'],
                ["style", "display", 'block'],
                ["color", "color", 'rgba(28,28,30,1)'],
                ["style", "left", '0px'],
                ["style", "font-size", '14px']
            ],
            "${_text_evidencia9_2}": [
                ["style", "top", '48px']
            ],
            "${_TextCopy10}": [
                ["style", "top", '23px'],
                ["style", "text-align", 'center'],
                ["style", "height", '32px'],
                ["color", "color", 'rgba(0,36,55,1)'],
                ["style", "font-family", 'Arial'],
                ["style", "left", '19px'],
                ["style", "font-weight", 'bold']
            ],
            "${_material_puente}": [
                ["style", "top", '137px'],
                ["style", "left", '68px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_Text5Copy138}": [
                ["style", "top", '38px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '285px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Group54Copy2}": [
                ["style", "top", '73px'],
                ["style", "width", '621px'],
                ["style", "height", '234px'],
                ["style", "overflow", 'auto']
            ],
            "${_Text5Copy59}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '1px'],
                ["style", "width", '579px'],
                ["style", "top", '342px'],
                ["style", "text-align", 'justify'],
                ["style", "text-indent", '191px'],
                ["style", "height", '18px']
            ],
            "${_c2}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["subproperty", "boxShadow.color", 'rgba(255,255,255,0.65098)'],
                ["style", "left", '421px'],
                ["style", "width", '64px'],
                ["style", "top", '80px'],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["style", "display", 'none'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '64px'],
                ["subproperty", "boxShadow.spread", '6px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["subproperty", "boxShadow.blur", '24px']
            ],
            "${_material_fondo}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text5Copy46}": [
                ["style", "top", '31px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '26px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '579px']
            ],
            "${_Zoom1}": [
                ["style", "left", '775px'],
                ["style", "top", '367px']
            ],
            "${_tema2}": [
                ["style", "top", '276px'],
                ["style", "left", '595px']
            ],
            "${_Text5Copy82}": [
                ["style", "top", '406px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '25px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '582px']
            ],
            "${_Group7}": [
                ["style", "height", '133px'],
                ["style", "width", '577px'],
                ["style", "left", '-3px'],
                ["style", "overflow", 'auto']
            ],
            "${_creditos_diseno}": [
                ["style", "top", '42px'],
                ["style", "left", '28px'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_Rectangle90}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["transform", "rotateZ", '42deg'],
                ["style", "height", '62px'],
                ["style", "top", '172px'],
                ["style", "left", '114px'],
                ["style", "width", '2px']
            ],
            "${_Rectangle60}": [
                ["style", "top", '-2px'],
                ["transform", "rotateZ", '47deg'],
                ["style", "height", '87px'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "left", '34px'],
                ["style", "width", '2px']
            ],
            "${_indice_tablas_cont2}": [
                ["style", "top", '111px'],
                ["style", "left", '59px'],
                ["style", "display", 'none']
            ],
            "${_fondo_gris_mapaCopy}": [
                ["style", "top", '92px'],
                ["style", "left", '166px'],
                ["style", "clip", [21.333251953125,742,431,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "display", 'block']
            ],
            "${_evi_indicador_azul2Copy2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_c_programadores}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text5Copy151}": [
                ["style", "top", '417px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '26px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text9Copy19}": [
                ["style", "line-height", '22px'],
                ["style", "font-size", '14px'],
                ["style", "top", '43px'],
                ["color", "color", 'rgba(28,28,30,1)'],
                ["style", "height", '30px'],
                ["style", "display", 'block'],
                ["style", "left", '-10px'],
                ["style", "width", '530px']
            ],
            "${_cre_btn3}": [
                ["style", "top", '164px'],
                ["style", "left", '552px'],
                ["style", "display", 'block']
            ],
            "${_Rectangle7Copy5}": [
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '4px'],
                ["style", "top", '173px'],
                ["style", "left", '-32px'],
                ["style", "width", '150px']
            ],
            "${_TextCopy8}": [
                ["style", "top", '23px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(0,36,55,1)'],
                ["style", "height", '32px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '19px'],
                ["style", "font-family", 'Arial']
            ],
            "${_cre_btn2}": [
                ["style", "display", 'block'],
                ["style", "left", '466px'],
                ["style", "top", '110px']
            ],
            "${_Ellipse3Copy}": [
                ["style", "height", '9px'],
                ["style", "top", '105px'],
                ["style", "left", '353px'],
                ["style", "width", '9px']
            ],
            "${_ma_boton1}": [
                ["style", "top", '164px'],
                ["style", "left", '1386px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_text_evidencia4_2}": [
                ["style", "top", '35px'],
                ["style", "left", '38px'],
                ["style", "width", '580px']
            ],
            "${_botonClic}": [
                ["style", "top", '508px'],
                ["style", "left", '10px'],
                ["style", "-webkit-transform-origin", [25,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [25,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [25,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [25,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [25,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [25,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "cursor", 'pointer'],
                ["style", "clip", [0,63.2265625,50,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Text5Copy32}": [
                ["style", "top", '40px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '18px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy198}": [
                ["style", "top", '331px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '74px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_roll4}": [
                ["style", "top", '600px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(0,18,45,1)'],
                ["style", "height", '20px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '796px'],
                ["style", "font-size", '14px']
            ],
            "${_sprite_ojos_instrucciones}": [
                ["style", "top", '101px'],
                ["transform", "rotateZ", '12deg'],
                ["style", "background-size", [35,35], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "left", '115px'],
                ["style", "clip", [0,48.64349365234375,14.089519500732422,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_evi_edificio8}": [
                ["style", "top", '376px'],
                ["style", "left", '227px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_Text5Copy175}": [
                ["style", "top", '23px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '26px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_btn_eviGen3}": [
                ["color", "background-color", 'rgba(84,255,0,1)'],
                ["style", "top", '0px'],
                ["style", "overflow", 'visible'],
                ["style", "height", '57px'],
                ["style", "left", '165px'],
                ["style", "clip", [-3,83,57,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '83px']
            ],
            "${_Text9Copy18}": [
                ["style", "top", '-21px'],
                ["style", "line-height", '22px'],
                ["style", "display", 'block'],
                ["color", "color", 'rgba(12,92,117,1)'],
                ["style", "height", '24px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '-10px'],
                ["style", "width", '530px']
            ],
            "${_Text5Copy183}": [
                ["style", "top", '417px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '26px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy21}": [
                ["style", "top", '331px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '74px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_cont12}": [
                ["style", "top", '0px'],
                ["style", "left", '11px'],
                ["style", "display", 'block']
            ],
            "${_subtema1_2_1}": [
                ["style", "left", '-80px'],
                ["style", "top", '-80px']
            ],
            "${_material_calle}": [
                ["style", "left", '0px'],
                ["style", "top", '338px']
            ],
            "${_rolloverMapa}": [
                ["style", "top", '462px'],
                ["style", "left", '79px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle7Copy2}": [
                ["style", "top", '26px'],
                ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "height", '4px'],
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "left", '38px'],
                ["style", "width", '239px']
            ],
            "${_fondo_referencias}": [
                ["style", "top", '54px'],
                ["style", "display", 'block'],
                ["style", "overflow", 'visible'],
                ["style", "height", '291px'],
                ["style", "opacity", '0.07000000029802322'],
                ["style", "left", '87px'],
                ["style", "width", '647px']
            ],
            "${_Text5Copy159}": [
                ["style", "top", '23px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '26px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy133}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px'],
                ["style", "top", '220px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '64px'],
                ["style", "font-style", 'italic']
            ],
            "${_Text5Copy106}": [
                ["style", "top", '669px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '27px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_cabezaPer1}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text5Copy77}": [
                ["style", "top", '200px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '22px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Ellipse3}": [
                ["style", "top", '45px'],
                ["style", "height", '9px'],
                ["style", "left", '312px'],
                ["style", "width", '9px']
            ],
            "${_bibliografia}": [
                ["style", "left", '0px'],
                ["style", "top", '59px']
            ],
            "${_Text5Copy170}": [
                ["style", "top", '38px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '285px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_creditos_btn2}": [
                ["style", "top", '79px'],
                ["style", "left", '417px'],
                ["style", "cursor", 'pointer']
            ],
            "${_evi_edificio3}": [
                ["style", "top", '61px'],
                ["style", "left", '154px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_subtema1_4}": [
                ["style", "top", '98px'],
                ["style", "left", '283px']
            ],
            "${_Text3Copy6}": [
                ["style", "top", '21px'],
                ["style", "text-align", 'center'],
                ["style", "width", '83px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "height", '17px'],
                ["style", "left", '0px'],
                ["style", "font-size", '14px']
            ],
            "${_Group27}": [
                ["style", "top", '16px'],
                ["style", "width", '619px'],
                ["style", "height", '272px'],
                ["style", "overflow", 'auto']
            ],
            "${_Text9Copy15}": [
                ["style", "top", '60px'],
                ["style", "display", 'block'],
                ["style", "line-height", '22px'],
                ["style", "height", '24px'],
                ["color", "color", 'rgba(12,92,117,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '-10px'],
                ["style", "width", '530px']
            ],
            "${_Group54Copy6}": [
                ["style", "top", '73px'],
                ["style", "width", '621px'],
                ["style", "height", '234px'],
                ["style", "overflow", 'auto']
            ],
            "${_ma_boton4}": [
                ["style", "top", '157px'],
                ["style", "left", '3191px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_Text5Copy207}": [
                ["style", "top", '23px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '26px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Group54Copy4}": [
                ["style", "top", '73px'],
                ["style", "width", '621px'],
                ["style", "height", '234px'],
                ["style", "overflow", 'auto']
            ],
            "${_tema3}": [
                ["style", "left", '241px'],
                ["style", "top", '408px']
            ],
            "${_creative}": [
                ["style", "display", 'block'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_Text5Copy120}": [
                ["style", "top", '682px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '42px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_text_evidencia8_2}": [
                ["style", "top", '48px']
            ],
            "${_Text9Copy24}": [
                ["style", "top", '59px'],
                ["style", "width", '530px'],
                ["style", "line-height", '22px'],
                ["style", "height", '130px'],
                ["style", "display", 'block'],
                ["color", "color", 'rgba(28,28,30,1)'],
                ["style", "left", '-10px'],
                ["style", "font-size", '14px']
            ],
            "${_Text5Copy230}": [
                ["style", "top", '331px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '74px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_evi_boton6}": [
                ["style", "top", '178px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '532px'],
                ["style", "cursor", 'pointer']
            ],
            "${_imagenes_cont1}": [
                ["style", "top", '42px'],
                ["style", "left", '58px'],
                ["style", "display", 'none']
            ],
            "${_rolloverEvidencias}": [
                ["style", "top", '282px'],
                ["style", "left", '80px'],
                ["style", "display", 'none']
            ],
            "${_Text5Copy40}": [
                ["style", "top", '0px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '26px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_RectangleCopy4}": [
                ["style", "top", '0px'],
                ["style", "height", '114px'],
                ["color", "background-color", 'rgba(241,52,52,1)'],
                ["style", "left", '0px'],
                ["style", "width", '83px']
            ],
            "${_subtema1_1}": [
                ["style", "left", '-34px'],
                ["style", "top", '214px']
            ],
            "${_evi_edificio4}": [
                ["style", "top", '112px'],
                ["style", "left", '270px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_RectangleCopy}": [
                ["style", "top", '0px'],
                ["style", "height", '114px'],
                ["color", "background-color", 'rgba(4,81,125,1)'],
                ["style", "left", '0px'],
                ["style", "width", '83px']
            ],
            "${_material_estudio}": [
                ["style", "display", 'none']
            ],
            "${_evi_boton3}": [
                ["style", "top", '254px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '142px'],
                ["style", "cursor", 'pointer']
            ],
            "${_creditos_lider_linea}": [
                ["style", "top", '44px'],
                ["style", "left", '43px'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_subtema3_3}": [
                ["style", "top", '478px'],
                ["style", "left", '273px']
            ],
            "${_c_editora}": [
                ["style", "top", '0px'],
                ["style", "left", '363px']
            ],
            "${_Text5Copy192}": [
                ["style", "top", '0px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '26px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy53}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '1px'],
                ["style", "width", '579px'],
                ["style", "top", '180px'],
                ["style", "text-align", 'justify'],
                ["style", "text-indent", '114px'],
                ["style", "height", '84px']
            ],
            "${_mask}": [
                ["style", "clip", [0,647,476,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_fondo-rollover}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Group55Copy2}": [
                ["style", "top", '50px'],
                ["style", "width", '621px'],
                ["style", "height", '244px'],
                ["style", "overflow", 'auto']
            ],
            "${_contex_per2}": [
                ["style", "left", '857px'],
                ["style", "top", '315px']
            ],
            "${_contex_fondo}": [
                ["style", "left", '0px'],
                ["style", "top", '156px']
            ],
            "${_evi_indicador_azul2Copy6}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_Text5Copy168}": [
                ["style", "top", '458px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '39px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_evi_edificio6}": [
                ["style", "top", '271px'],
                ["style", "left", '155px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_Text5Copy210}": [
                ["style", "top", '80px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '39px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Rectangle7Copy10}": [
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '15deg'],
                ["style", "height", '4px'],
                ["style", "top", '14px'],
                ["style", "left", '5px'],
                ["style", "width", '43px']
            ],
            "${_linea_sub1}": [
                ["style", "left", '-8px'],
                ["style", "top", '152px']
            ],
            "${_Text9Copy11}": [
                ["style", "top", '-38px'],
                ["style", "line-height", '22px'],
                ["style", "display", 'block'],
                ["style", "height", '24px'],
                ["color", "color", 'rgba(12,92,117,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '530px']
            ],
            "${_Rectangle100}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["transform", "rotateZ", '18deg'],
                ["style", "height", '62px'],
                ["style", "top", '101px'],
                ["style", "left", '167px'],
                ["style", "width", '2px']
            ],
            "${_nombre-proyecto}": [
                ["style", "top", '10px'],
                ["style", "font-size", '14px'],
                ["style", "text-align", 'center'],
                ["style", "height", '20px'],
                ["color", "color", 'rgba(28,187,221,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '94px'],
                ["style", "width", '285px']
            ],
            "${_fondo-glosario}": [
                ["style", "left", '-42px'],
                ["style", "top", '-47px']
            ],
            "${_TextCopy9}": [
                ["style", "top", '23px'],
                ["style", "text-align", 'center'],
                ["style", "font-family", 'Arial'],
                ["color", "color", 'rgba(0,36,55,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '19px'],
                ["style", "height", '32px']
            ],
            "${_Rectangle80}": [
                ["style", "top", '172px'],
                ["transform", "rotateZ", '-43deg'],
                ["style", "height", '62px'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "left", '57px'],
                ["style", "width", '2px']
            ],
            "${_evidencias12}": [
                ["style", "left", '0px'],
                ["style", "top", '60px']
            ],
            "${_Text5Copy208}": [
                ["style", "top", '0px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '26px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_material_per_cabeza}": [
                ["style", "left", '103px'],
                ["style", "top", '-1px']
            ],
            "${_referencias-imagenes2}": [
                ["style", "top", '-47px'],
                ["style", "display", 'block'],
                ["style", "left", '-48px'],
                ["style", "overflow", 'visible']
            ],
            "${_Text5Copy39}": [
                ["style", "top", '455px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '46px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Group55Copy5}": [
                ["style", "top", '50px'],
                ["style", "overflow", 'auto'],
                ["style", "height", '244px'],
                ["style", "width", '621px']
            ],
            "${_Text5Copy121}": [
                ["style", "top", '0px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '26px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_evi_per1_cuerpo}": [
                ["style", "left", '19px'],
                ["style", "top", '114px']
            ],
            "${_Text5Copy125}": [
                ["style", "top", '28px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '26px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_RectangleCopy2}": [
                ["style", "top", '0px'],
                ["style", "height", '114px'],
                ["color", "background-color", 'rgba(0,160,160,1)'],
                ["style", "left", '0px'],
                ["style", "width", '83px']
            ],
            "${_Text5Copy189}": [
                ["style", "top", '9px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '26px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_evi_piedra}": [
                ["style", "top", '295px'],
                ["style", "left", '18px']
            ],
            "${_Group55Copy4}": [
                ["style", "top", '50px'],
                ["style", "width", '621px'],
                ["style", "height", '244px'],
                ["style", "overflow", 'auto']
            ],
            "${_Text5Copy214}": [
                ["style", "top", '331px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '74px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text9Copy29}": [
                ["style", "top", '43px'],
                ["style", "line-height", '22px'],
                ["style", "display", 'block'],
                ["color", "color", 'rgba(12,92,117,1)'],
                ["style", "height", '24px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '-10px'],
                ["style", "width", '530px']
            ],
            "${_conte_evi7}": [
                ["style", "top", '120px'],
                ["style", "overflow", 'visible'],
                ["style", "height", '372px'],
                ["color", "background-color", 'rgba(84,255,0,0)'],
                ["style", "left", '180px'],
                ["style", "width", '687px']
            ],
            "${_c_asesoras}": [
                ["style", "top", '0px'],
                ["style", "left", '318px']
            ],
            "${_material_pasto}": [
                ["style", "top", '268px'],
                ["style", "left", '655px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_Text5Copy110}": [
                ["style", "top", '0px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '21px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy24}": [
                ["style", "top", '0px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '25px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_botonCerrarMenuCopy}": [
                ["style", "top", '-54px'],
                ["style", "cursor", 'pointer']
            ],
            "${_bibliografia_guia}": [
                ["style", "top", '76px'],
                ["style", "left", '46px'],
                ["style", "display", 'none']
            ],
            "${_Text5Copy141}": [
                ["style", "top", '9px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '26px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_indice_figuras_cont2}": [
                ["style", "top", '40px'],
                ["style", "left", '58px'],
                ["style", "display", 'none']
            ],
            "${_Text5Copy43}": [
                ["style", "top", '661px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '26px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_evi_boton2}": [
                ["style", "top", '306px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '252px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Group48}": [
                ["style", "top", '72px'],
                ["style", "width", '622px'],
                ["style", "height", '224px'],
                ["style", "overflow", 'auto']
            ],
            "${_botonera3}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'block']
            ],
            "${_evi_boton12}": [
                ["style", "top", '87px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '175px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Text5Copy228}": [
                ["style", "top", '208px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '26px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text9Copy7}": [
                ["style", "top", '-8px'],
                ["style", "display", 'block'],
                ["style", "line-height", '22px'],
                ["color", "color", 'rgba(12,92,117,1)'],
                ["style", "height", '24px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '-10px'],
                ["style", "width", '530px']
            ],
            "${_Text5Copy118}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px'],
                ["style", "top", '576px'],
                ["style", "text-align", 'justify'],
                ["style", "text-indent", '159px'],
                ["style", "height", '46px'],
                ["style", "font-style", 'normal']
            ],
            "${_Group8}": [
                ["style", "top", '62px'],
                ["style", "width", '566px'],
                ["style", "height", '155px'],
                ["style", "overflow", 'auto']
            ],
            "${_c5}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["subproperty", "boxShadow.color", 'rgba(255,255,255,0.65098)'],
                ["style", "left", '429px'],
                ["style", "width", '64px'],
                ["style", "top", '302px'],
                ["subproperty", "boxShadow.blur", '24px'],
                ["style", "display", 'none'],
                ["subproperty", "boxShadow.spread", '6px'],
                ["style", "height", '64px'],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["subproperty", "filter.blur", '0px']
            ],
            "${_text_evidencia12_1}": [
                ["style", "top", '37px']
            ],
            "${_Rectangle7Copy13}": [
                ["style", "top", '25px'],
                ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "height", '4px'],
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "left", '39px'],
                ["style", "width", '239px']
            ],
            "${_Text5Copy209}": [
                ["style", "top", '40px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '26px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy78}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px'],
                ["style", "top", '240px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '62px'],
                ["style", "font-style", 'italic']
            ],
            "${_Rectangle7}": [
                ["style", "top", '23px'],
                ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "height", '4px'],
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "left", '38px'],
                ["style", "width", '239px']
            ],
            "${_Group19}": [
                ["style", "top", '4px'],
                ["style", "width", '621px'],
                ["style", "height", '272px'],
                ["style", "overflow", 'auto']
            ],
            "${_Text5Copy17}": [
                ["style", "top", '80px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '39px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_subtema2_6}": [
                ["style", "top", '350px'],
                ["style", "left", '788px']
            ],
            "${_text_evidencia10_2}": [
                ["style", "top", '48px']
            ],
            "${_fondo_gris_mapa}": [
                ["style", "display", 'block'],
                ["style", "top", '92px'],
                ["style", "clip", [21.333251953125,742,431,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '166px']
            ],
            "${_Text5Copy193}": [
                ["style", "top", '40px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '26px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_conte_evi6}": [
                ["color", "background-color", 'rgba(84,255,0,0)'],
                ["style", "overflow", 'visible'],
                ["style", "height", '372px'],
                ["style", "top", '120px'],
                ["style", "left", '180px'],
                ["style", "width", '687px']
            ],
            "${_contex_cartel}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '1'],
                ["style", "display", 'block'],
                ["transform", "scaleX", '1'],
                ["style", "left", '158px'],
                ["style", "top", '-22px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '1024px'],
                ["style", "height", '640px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Group57Copy4}": [
                ["style", "top", '8px'],
                ["style", "width", '621px'],
                ["style", "height", '264px'],
                ["style", "overflow", 'auto']
            ],
            "${_eviCon_4}": [
                ["style", "top", '236px'],
                ["style", "left", '230px'],
                ["style", "display", 'block']
            ],
            "${_Text5Copy124}": [
                ["style", "top", '666px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '26px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy117}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px'],
                ["style", "top", '558px'],
                ["style", "text-align", 'justify'],
                ["style", "text-indent", '229px'],
                ["style", "height", '46px'],
                ["style", "font-style", 'normal']
            ],
            "${_Group57Copy6}": [
                ["style", "top", '8px'],
                ["style", "width", '621px'],
                ["style", "height", '264px'],
                ["style", "overflow", 'auto']
            ],
            "${_Group54Copy5}": [
                ["style", "top", '73px'],
                ["style", "overflow", 'auto'],
                ["style", "height", '234px'],
                ["style", "width", '621px']
            ],
            "${_evi_per2_brazo1}": [
                ["style", "top", '136px'],
                ["style", "left", '35px']
            ],
            "${_Text5Copy152}": [
                ["style", "top", '458px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '39px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Rectangle7Copy11}": [
                ["style", "top", '66px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "height", '4px'],
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "left", '134px'],
                ["style", "width", '238px']
            ],
            "${_Text5Copy164}": [
                ["style", "top", '208px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '26px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_text_evidencia10_1}": [
                ["style", "top", '37px']
            ],
            "${_Text5Copy204}": [
                ["style", "top", '653px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '26px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy148}": [
                ["style", "top", '208px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '26px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Group26}": [
                ["style", "top", '69px'],
                ["style", "width", '620px'],
                ["style", "height", '202px'],
                ["style", "overflow", 'auto']
            ],
            "${_creative-commons}": [
                ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "display", 'none']
            ],
            "${_Text2Copy}": [
                ["style", "height", '35px'],
                ["style", "top", '16px'],
                ["style", "left", '0px'],
                ["style", "font-size", '15px']
            ],
            "${_Text5Copy109}": [
                ["style", "top", '12px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '25px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy169}": [
                ["style", "top", '0px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '26px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy139}": [
                ["style", "top", '620px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '26px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text9Copy5}": [
                ["style", "top", '38px'],
                ["style", "line-height", '22px'],
                ["style", "display", 'block'],
                ["style", "height", '24px'],
                ["color", "color", 'rgba(12,92,117,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '-10px'],
                ["style", "width", '530px']
            ],
            "${_material_flores3}": [
                ["style", "top", '294px'],
                ["style", "left", '3282px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_Text5Copy116}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px'],
                ["style", "top", '318px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '260px'],
                ["style", "font-style", 'normal']
            ],
            "${_creditos_asesoras}": [
                ["style", "top", '38px'],
                ["style", "left", '74px'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_Group55Copy3}": [
                ["style", "top", '50px'],
                ["style", "overflow", 'auto'],
                ["style", "height", '244px'],
                ["style", "width", '621px']
            ],
            "${_Text5}": [
                ["style", "top", '-61px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '25px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '-4px'],
                ["color", "color", 'rgba(0,57,86,1)']
            ],
            "${_Rectangle7Copy12}": [
                ["style", "top", '5px'],
                ["style", "-webkit-transform-origin", [2,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [2,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [2,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [2,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [2,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [2,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '26deg'],
                ["style", "height", '4px'],
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "left", '6px'],
                ["style", "width", '143px']
            ],
            "${_Text5Copy30}": [
                ["style", "top", '32px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '22px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy56}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '1px'],
                ["style", "width", '579px'],
                ["style", "top", '320px'],
                ["style", "text-align", 'justify'],
                ["style", "text-indent", '350px'],
                ["style", "height", '18px']
            ],
            "${_subtema3_2}": [
                ["style", "top", '478px'],
                ["style", "left", '84px']
            ],
            "${_ambientes_requeridos}": [
                ["style", "left", '2px'],
                ["style", "top", '59px']
            ],
            "${_ma_boton2}": [
                ["style", "top", '159px'],
                ["style", "left", '2052px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_cont1}": [
                ["style", "top", '0px'],
                ["style", "left", '12px'],
                ["style", "display", 'block']
            ],
            "${_TextCopy5}": [
                ["style", "top", '25px'],
                ["style", "text-align", 'center'],
                ["style", "font-family", 'Arial'],
                ["color", "color", 'rgba(0,36,55,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '20px'],
                ["style", "height", '32px']
            ],
            "${_Group54Copy3}": [
                ["style", "top", '73px'],
                ["style", "overflow", 'auto'],
                ["style", "height", '234px'],
                ["style", "width", '621px']
            ],
            "${_Group12}": [
                ["style", "height", '226px'],
                ["style", "width", '621px'],
                ["style", "overflow", 'auto']
            ],
            "${_TextCopy6}": [
                ["style", "top", '25px'],
                ["style", "text-align", 'center'],
                ["style", "height", '32px'],
                ["color", "color", 'rgba(0,36,55,1)'],
                ["style", "font-family", 'Arial'],
                ["style", "left", '20px'],
                ["style", "font-weight", 'bold']
            ],
            "${_Text6Copy6}": [
                ["style", "top", '8px'],
                ["style", "font-family", 'Arial'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '57px'],
                ["style", "font-size", '14px']
            ],
            "${_Text5Copy186}": [
                ["style", "top", '38px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '285px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy107}": [
                ["style", "top", '25px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '25px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_subtema1_3}": [
                ["style", "left", '115px'],
                ["style", "top", '96px']
            ],
            "${_linea_sub1_1}": [
                ["style", "left", '34px'],
                ["style", "top", '205px']
            ],
            "${_Text5Copy161}": [
                ["style", "top", '40px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '26px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy123}": [
                ["style", "top", '628px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '26px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Rectangle5Copy4}": [
                ["style", "top", '-3px'],
                ["style", "height", '5px'],
                ["color", "background-color", 'rgba(229,64,19,1)'],
                ["style", "left", '0px'],
                ["style", "width", '83px']
            ],
            "${_Group18}": [
                ["style", "height", '208px'],
                ["style", "width", '622px'],
                ["style", "overflow", 'auto']
            ],
            "${_Text5Copy95}": [
                ["style", "top", '40px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '21px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy185}": [
                ["style", "top", '0px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '26px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_material_palmas2}": [
                ["style", "top", '219px'],
                ["style", "left", '2748px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_creditos_expertos}": [
                ["style", "top", '79px'],
                ["style", "left", '124px'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_Text5Copy187}": [
                ["style", "top", '620px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '26px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy176}": [
                ["style", "top", '0px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '26px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy2}": [
                ["style", "top", '27px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '25px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["color", "color", 'rgba(0,57,86,1)']
            ],
            "${_Text5Copy37}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px'],
                ["style", "top", '316px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '25px'],
                ["style", "font-style", 'normal']
            ],
            "${_subtema2_3}": [
                ["style", "top", '183px'],
                ["style", "left", '786px']
            ],
            "${_text_evidencia12_2}": [
                ["style", "top", '48px']
            ],
            "${_Group9}": [
                ["style", "top", '67px'],
                ["style", "width", '621px'],
                ["style", "height", '223px'],
                ["style", "overflow", 'auto']
            ],
            "${_Text5Copy127}": [
                ["style", "top", '22px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '26px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_material_flores2}": [
                ["style", "top", '294px'],
                ["style", "left", '2142px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_Group57}": [
                ["style", "top", '8px'],
                ["style", "width", '621px'],
                ["style", "height", '264px'],
                ["style", "overflow", 'auto']
            ],
            "${_evi_roll1}": [
                ["style", "left", '834px'],
                ["style", "top", '540px']
            ],
            "${_Text9Copy26}": [
                ["style", "top", '118px'],
                ["style", "width", '530px'],
                ["style", "line-height", '22px'],
                ["style", "display", 'block'],
                ["color", "color", 'rgba(28,28,30,1)'],
                ["style", "height", '34px'],
                ["style", "left", '1px'],
                ["style", "font-size", '14px']
            ],
            "${_Text5Copy65}": [
                ["style", "top", '547px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '46px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '582px']
            ],
            "${_TextCopy3}": [
                ["style", "top", '25px'],
                ["style", "text-align", 'center'],
                ["style", "font-weight", 'bold'],
                ["style", "height", '32px'],
                ["style", "font-family", 'Arial'],
                ["style", "left", '20px'],
                ["color", "color", 'rgba(0,36,55,1)']
            ],
            "${_titulo}": [
                ["style", "left", '287px'],
                ["style", "top", '-101px']
            ],
            "${_iconoCreditos}": [
                ["style", "display", 'block'],
                ["style", "left", '153px'],
                ["style", "clip", [0,50.0546875,40,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "top", '4px']
            ],
            "${_Text5Copy122}": [
                ["style", "top", '47px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '285px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Group53}": [
                ["style", "top", '17px'],
                ["style", "width", '618px'],
                ["style", "height", '246px'],
                ["style", "overflow", 'auto']
            ],
            "${_Text9Copy23}": [
                ["style", "line-height", '22px'],
                ["color", "color", 'rgba(12,92,117,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '1px'],
                ["style", "width", '530px'],
                ["style", "top", '-2px'],
                ["style", "text-align", 'left'],
                ["style", "height", '24px'],
                ["style", "display", 'block']
            ],
            "${_creditos_btn4}": [
                ["style", "top", '235px'],
                ["style", "left", '468px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Text9Copy6}": [
                ["style", "line-height", '22px'],
                ["style", "font-size", '14px'],
                ["style", "top", '0px'],
                ["style", "height", '500px'],
                ["style", "display", 'block'],
                ["color", "color", 'rgba(28,28,30,1)'],
                ["style", "left", '0px'],
                ["style", "width", '533px']
            ],
            "${_Text5Copy55}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '1px'],
                ["style", "width", '579px'],
                ["style", "top", '240px'],
                ["style", "text-align", 'justify'],
                ["style", "text-indent", '555px'],
                ["style", "height", '84px']
            ],
            "${_fondo_mapas_contenidos}": [
                ["style", "top", '-84px'],
                ["color", "background-color", 'rgba(213,241,251,1)'],
                ["style", "height", '640px'],
                ["style", "overflow", 'visible'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '-80px'],
                ["style", "width", '1024px']
            ],
            "${_indice_tablas_cont1}": [
                ["style", "top", '111px'],
                ["style", "left", '59px'],
                ["style", "display", 'none']
            ],
            "${_material_edificio1}": [
                ["style", "top", '124px'],
                ["style", "left", '741px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_Text5Copy52}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '1px'],
                ["style", "width", '579px'],
                ["style", "top", '160px'],
                ["style", "text-align", 'justify'],
                ["style", "text-indent", '478px'],
                ["style", "height", '22px']
            ],
            "${_Text5Copy36}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px'],
                ["style", "top", '236px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '25px'],
                ["style", "font-style", 'italic']
            ],
            "${_evi_indicador_azul2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_Text5Copy153}": [
                ["style", "top", '0px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '26px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_text_evidencia5_2}": [
                ["style", "top", '48px']
            ],
            "${_Text6Copy5}": [
                ["style", "top", '48px'],
                ["style", "font-size", '14px'],
                ["style", "text-align", 'center'],
                ["style", "font-weight", 'bold'],
                ["style", "height", '31px'],
                ["style", "font-family", 'Arial'],
                ["style", "left", '133px'],
                ["style", "width", '242px']
            ],
            "${_text_evidencia2}": [
                ["style", "top", '35px'],
                ["style", "left", '38px']
            ],
            "${_rolloverMestudio}": [
                ["style", "top", '149px'],
                ["style", "left", '80px'],
                ["style", "display", 'none']
            ],
            "${_iconoRefe}": [
                ["style", "display", 'block'],
                ["style", "left", '51px'],
                ["style", "clip", [0,52.09765625,40,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "top", '4px']
            ],
            "${_Text5Copy225}": [
                ["style", "top", '40px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '26px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy181}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px'],
                ["style", "top", '248px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '64px'],
                ["style", "font-style", 'italic']
            ],
            "${_botonMestudio}": [
                ["style", "top", '149px'],
                ["style", "left", '0px'],
                ["style", "-webkit-transform-origin", [24,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [24,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [24,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [24,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [24,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [24,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "cursor", 'pointer'],
                ["style", "clip", [0,80.64453125,68,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_eviCon_1}": [
                ["style", "top", '215px'],
                ["style", "left", '230px'],
                ["style", "display", 'block']
            ],
            "${_botonera1}": [
                ["style", "left", '1px'],
                ["style", "top", '0px']
            ],
            "${_Text4}": [
                ["style", "top", '38px'],
                ["style", "width", '285px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "height", '38px'],
                ["style", "font-family", 'Arial'],
                ["style", "left", '624px'],
                ["style", "font-size", '14px']
            ],
            "${_Group49}": [
                ["style", "height", '248px'],
                ["style", "width", '622px'],
                ["style", "overflow", 'auto']
            ],
            "${_botonGuiapdf}": [
                ["style", "top", '218px'],
                ["style", "left", '1px'],
                ["style", "-webkit-transform-origin", [24,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [24,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [24,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [24,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [24,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [24,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "cursor", 'pointer'],
                ["style", "clip", [0,77.25390625,68,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_mg_fondo}": [
                ["style", "top", '18px'],
                ["style", "left", '20px'],
                ["subproperty", "filter.contrast", '1.7179487179487'],
                ["subproperty", "filter.invert", '0.25641025641026']
            ],
            "${_Text5Copy108}": [
                ["style", "top", '0px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '383px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy149}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px'],
                ["style", "top", '248px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '64px'],
                ["style", "font-style", 'italic']
            ],
            "${_fondo-rollover2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text6Copy}": [
                ["style", "top", '9px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '14px'],
                ["style", "font-weight", 'bold'],
                ["style", "font-family", 'Arial'],
                ["style", "left", '44px'],
                ["style", "width", '228px']
            ],
            "${_Text5Copy188}": [
                ["style", "top", '653px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '26px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text2Copy4}": [
                ["style", "top", '25px'],
                ["style", "left", '0px'],
                ["style", "font-size", '16px']
            ],
            "${_Rectangle7Copy3}": [
                ["style", "top", '117px'],
                ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '45deg'],
                ["style", "height", '4px'],
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "left", '238px'],
                ["style", "width", '129px']
            ],
            "${_evi_boton8}": [
                ["style", "top", '60px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '643px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Text3Copy2}": [
                ["style", "top", '20px'],
                ["style", "text-align", 'center'],
                ["style", "width", '83px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "height", '19px'],
                ["style", "left", '0px'],
                ["style", "font-size", '14px']
            ],
            "${_Rectangle7Copy7}": [
                ["style", "top", '27px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "height", '4px'],
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "left", '79px'],
                ["style", "width", '244px']
            ],
            "${_indice_figuras_cont3}": [
                ["style", "top", '40px'],
                ["style", "left", '58px'],
                ["style", "display", 'none']
            ],
            "${_TextCopy}": [
                ["style", "top", '25px'],
                ["style", "text-align", 'center'],
                ["style", "height", '32px'],
                ["color", "color", 'rgba(0,36,55,1)'],
                ["style", "font-family", 'Arial'],
                ["style", "left", '20px'],
                ["style", "font-weight", 'bold']
            ],
            "${_Text2Copy2}": [
                ["style", "top", '25px'],
                ["style", "left", '0px'],
                ["style", "font-size", '16px']
            ],
            "${_boton-cerrar8}": [
                ["style", "top", '-10px'],
                ["style", "left", '526px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Text5Copy213}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px'],
                ["style", "top", '248px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '64px'],
                ["style", "font-style", 'italic']
            ],
            "${_bibliografia_cont1}": [
                ["style", "top", '75px'],
                ["style", "left", '46px'],
                ["style", "display", 'none']
            ],
            "${_cre_btn6}": [
                ["style", "top", '134px'],
                ["style", "display", 'block'],
                ["style", "clip", [0,366,260,-2.23095703125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '21px']
            ],
            "${_evi_indicador_azul1Copy6}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Ellipse3Copy3}": [
                ["style", "height", '9px'],
                ["style", "top", '94px'],
                ["style", "left", '11px'],
                ["style", "width", '9px']
            ],
            "${_evi_roll6}": [
                ["style", "top", '551px'],
                ["style", "left", '834px'],
                ["style", "height", '48px']
            ],
            "${_evi_per2_maleta}": [
                ["style", "top", '140px'],
                ["style", "left", '0px']
            ],
            "${_evi_boton7}": [
                ["style", "top", '226px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "cursor", 'pointer'],
                ["style", "left", '638px']
            ],
            "${_evi_barco_rollover}": [
                ["style", "left", '660px']
            ],
            "${_volverNOBorrar}": [
                ["style", "left", '968px'],
                ["style", "top", '74px']
            ],
            "${_Text9Copy9}": [
                ["style", "top", '-34px'],
                ["style", "height", '24px'],
                ["style", "line-height", '22px'],
                ["color", "color", 'rgba(12,92,117,1)'],
                ["style", "display", 'block'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '-3px'],
                ["style", "width", '530px']
            ],
            "${_Text5Copy140}": [
                ["style", "top", '653px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '26px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_botonesGenericos}": [
                ["style", "display", 'block'],
                ["style", "left", '554px'],
                ["style", "top", '57px']
            ],
            "${_btnCerrarMapa}": [
                ["style", "top", '11px'],
                ["style", "left", '870px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Text5Copy171}": [
                ["style", "top", '620px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '26px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Rectangle5Copy}": [
                ["style", "top", '-3px'],
                ["style", "height", '5px'],
                ["color", "background-color", 'rgba(0,130,126,1)'],
                ["style", "left", '0px'],
                ["style", "width", '83px']
            ],
            "${_evi_indicador_azul2Copy4}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_evi_indicador_azul1Copy4}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text5Copy89}": [
                ["style", "top", '15px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '25px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy50}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '1px'],
                ["style", "width", '579px'],
                ["style", "top", '160px'],
                ["style", "text-align", 'justify'],
                ["style", "text-indent", '192px'],
                ["style", "height", '23px']
            ],
            "${_evi_indicador_azul1}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text10}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '663px'],
                ["style", "top", '0px'],
                ["style", "text-align", 'justify'],
                ["style", "overflow", 'visible'],
                ["style", "height", '241px'],
                ["style", "font-size", '14px']
            ],
            "${_evi_edificio7}": [
                ["style", "top", '331px'],
                ["style", "left", '85px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_roll3}": [
                ["style", "top", '592px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(0,18,45,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '799px'],
                ["style", "font-size", '14px']
            ],
            "${_creditos_btn7}": [
                ["style", "top", '146px'],
                ["style", "left", '336px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Text5Copy100}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px'],
                ["style", "top", '243px'],
                ["style", "text-align", 'justify'],
                ["style", "text-indent", '291px'],
                ["style", "height", '39px']
            ],
            "${_Text5Copy211}": [
                ["style", "top", '165px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '23px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_material_letrero}": [
                ["style", "top", '227px'],
                ["style", "left", '590px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_Rectangle30}": [
                ["style", "top", '100px'],
                ["transform", "rotateZ", '-32deg'],
                ["style", "height", '62px'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "left", '109px'],
                ["style", "width", '2px']
            ],
            "${_TextCopy12}": [
                ["style", "top", '25px'],
                ["style", "text-align", 'center'],
                ["style", "font-family", 'Arial'],
                ["color", "color", 'rgba(0,36,55,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '20px'],
                ["style", "height", '32px']
            ],
            "${_btn_eviGen1}": [
                ["color", "background-color", 'rgba(84,255,0,1)'],
                ["style", "top", '0px'],
                ["style", "overflow", 'visible'],
                ["style", "height", '57px'],
                ["style", "left", '0px'],
                ["style", "clip", [-2.949951171875,83,57,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '83px']
            ],
            "${_Text5Copy182}": [
                ["style", "top", '331px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '74px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_subtema2_2_1}": [
                ["style", "left", '613px'],
                ["style", "top", '73px']
            ],
            "${_Group54}": [
                ["style", "top", '73px'],
                ["style", "width", '621px'],
                ["style", "height", '234px'],
                ["style", "overflow", 'auto']
            ],
            "${_cont10}": [
                ["style", "top", '0px'],
                ["style", "left", '11px'],
                ["style", "display", 'block']
            ],
            "${_material_edificio4}": [
                ["style", "top", '96px'],
                ["style", "left", '2833px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_Text5Copy87}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px'],
                ["style", "top", '623px'],
                ["style", "text-align", 'justify'],
                ["style", "overflow", 'visible'],
                ["style", "height", '25px']
            ],
            "${_Text5Copy158}": [
                ["style", "top", '0px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '384px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_contextualizacion}": [
                ["style", "display", 'none']
            ],
            "${_webgrafia_cont1}": [
                ["style", "top", '42px'],
                ["style", "left", '58px'],
                ["style", "display", 'none']
            ],
            "${_Text5Copy91}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px'],
                ["style", "top", '400px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '25px'],
                ["style", "font-style", 'italic']
            ],
            "${_botoneraSub}": [
                ["style", "display", 'none'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "cursor", 'pointer'],
                ["style", "top", '509px']
            ],
            "${_contex_maleta}": [
                ["style", "left", '797px'],
                ["style", "top", '457px']
            ],
            "${_text_evidencia6}": [
                ["style", "top", '25px']
            ],
            "${_conte_evi5}": [
                ["style", "top", '120px'],
                ["style", "display", 'block'],
                ["style", "overflow", 'visible'],
                ["style", "height", '372px'],
                ["color", "background-color", 'rgba(84,255,0,0)'],
                ["style", "left", '180px'],
                ["style", "width", '687px']
            ],
            "${_evi_isla2}": [
                ["style", "left", '476px'],
                ["style", "top", '295px']
            ],
            "${_material_arena}": [
                ["style", "top", '226px'],
                ["style", "left", '735px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_creditos}": [
                ["style", "display", 'none'],
                ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_Text5Copy105}": [
                ["style", "top", '630px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '25px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy136}": [
                ["style", "top", '609px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '20px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Group51}": [
                ["style", "top", '78px'],
                ["style", "width", '622px'],
                ["style", "height", '236px'],
                ["style", "overflow", 'auto']
            ],
            "${_text_evidencia3}": [
                ["style", "top", '38px'],
                ["style", "overflow", 'visible'],
                ["style", "height", '296px'],
                ["style", "width", '621px']
            ],
            "${_Text5Copy80}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px'],
                ["style", "top", '345px'],
                ["style", "text-align", 'justify'],
                ["style", "text-indent", '38px'],
                ["style", "height", '40px'],
                ["style", "font-style", 'normal']
            ],
            "${_Text5Copy35}": [
                ["style", "top", '196px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '23px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy51}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '1px'],
                ["style", "width", '579px'],
                ["style", "top", '160px'],
                ["style", "text-align", 'justify'],
                ["style", "text-indent", '317px'],
                ["style", "height", '22px']
            ],
            "${_Text5Copy75}": [
                ["style", "top", '76px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '62px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '582px']
            ],
            "${_Rectangle20}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["transform", "rotateZ", '86deg'],
                ["style", "height", '62px'],
                ["style", "top", '72px'],
                ["style", "left", '137px'],
                ["style", "width", '2px']
            ],
            "${_subtema2_4_1}": [
                ["style", "left", '486px'],
                ["style", "top", '413px']
            ],
            "${_Text5Copy205}": [
                ["style", "top", '9px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '26px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_creditos_lider_tecno}": [
                ["style", "top", '41px'],
                ["style", "left", '52px'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_Text5Copy5}": [
                ["style", "top", '150px'],
                ["style", "text-align", 'justify'],
                ["style", "line-height", '20px'],
                ["style", "height", '49px'],
                ["style", "font-weight", '400'],
                ["style", "left", '1px'],
                ["color", "color", 'rgba(0,57,86,1)']
            ],
            "${_Text5Copy20}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px'],
                ["style", "top", '248px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '64px'],
                ["style", "font-style", 'italic']
            ],
            "${_guiaPDF_fondo}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text5Copy191}": [
                ["style", "top", '23px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '26px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy68}": [
                ["style", "top", '623px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '25px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_tema1}": [
                ["style", "top", '173px'],
                ["style", "left", '103px']
            ],
            "${_webgrafia_cont2}": [
                ["style", "top", '42px'],
                ["style", "left", '53px']
            ],
            "${_evi_roll2}": [
                ["style", "top", '549px'],
                ["style", "left", '834px'],
                ["style", "height", '54px']
            ],
            "${_cont9}": [
                ["style", "top", '0px'],
                ["style", "left", '11px'],
                ["style", "display", 'block']
            ],
            "${_botonCerrar}": [
                ["style", "top", '-3px'],
                ["style", "height", '57px'],
                ["style", "display", 'block'],
                ["style", "left", '864px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '53px']
            ],
            "${_Text9Copy21}": [
                ["style", "top", '-9px'],
                ["style", "width", '530px'],
                ["style", "line-height", '22px'],
                ["style", "height", '30px'],
                ["style", "display", 'block'],
                ["color", "color", 'rgba(28,28,30,1)'],
                ["style", "left", '-10px'],
                ["style", "font-size", '14px']
            ],
            "${_Text5Copy61}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '1px'],
                ["style", "width", '579px'],
                ["style", "top", '342px'],
                ["style", "text-align", 'justify'],
                ["style", "text-indent", '390px'],
                ["style", "height", '18px']
            ],
            "${_Rectangle5Copy2}": [
                ["style", "top", '-3px'],
                ["style", "height", '5px'],
                ["color", "background-color", 'rgba(216,141,19,1)'],
                ["style", "left", '0px'],
                ["style", "width", '83px']
            ],
            "${_Text9Copy20}": [
                ["style", "top", '-70px'],
                ["style", "display", 'block'],
                ["style", "line-height", '22px'],
                ["style", "height", '24px'],
                ["color", "color", 'rgba(12,92,117,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '-10px'],
                ["style", "width", '530px']
            ],
            "${_conte_evi13}": [
                ["style", "top", '120px'],
                ["style", "overflow", 'visible'],
                ["style", "height", '372px'],
                ["color", "background-color", 'rgba(84,255,0,0)'],
                ["style", "left", '180px'],
                ["style", "width", '687px']
            ],
            "${_cont5}": [
                ["style", "top", '0px'],
                ["style", "left", '12px'],
                ["style", "display", 'block']
            ],
            "${_evi_indicador_azul1Copy2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text5Copy135}": [
                ["style", "top", '569px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '26px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_evi_indicador_azul2Copy5}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_Text5Copy184}": [
                ["style", "top", '458px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '39px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy73}": [
                ["style", "top", '0px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '22px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '581px']
            ],
            "${_btn_eviGen2}": [
                ["color", "background-color", 'rgba(84,255,0,1)'],
                ["style", "top", '0px'],
                ["style", "overflow", 'visible'],
                ["style", "height", '57px'],
                ["style", "left", '83px'],
                ["style", "clip", [-3,83,57,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '83px']
            ],
            "${_subtema2_2}": [
                ["style", "top", '178px'],
                ["style", "left", '623px']
            ],
            "${_sprite_ojos_instrucciones3}": [
                ["style", "top", '74px'],
                ["style", "background-size", [52,52], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "left", '163px'],
                ["style", "clip", [0,71.33349609375,21.333251953125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Text5Copy6}": [
                ["style", "top", '-46px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '25px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["color", "color", 'rgba(0,57,86,1)']
            ],
            "${_eviCon_2}": [
                ["style", "top", '155px'],
                ["style", "left", '230px'],
                ["style", "display", 'block']
            ],
            "${_evi_per2_cabeza}": [
                ["style", "left", '130px'],
                ["style", "top", '0px']
            ],
            "${_material_edificio2}": [
                ["style", "top", '110px'],
                ["style", "left", '1594px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_botonContex}": [
                ["style", "top", '82px'],
                ["style", "left", '1px'],
                ["style", "-webkit-transform-origin", [26,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [26,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [26,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [26,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [26,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [26,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "cursor", 'pointer'],
                ["style", "clip", [0,78.07421875,68,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Text5Copy112}": [
                ["style", "top", '80px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '63px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text9Copy25}": [
                ["style", "line-height", '22px'],
                ["color", "color", 'rgba(12,92,117,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '-10px'],
                ["style", "width", '530px'],
                ["style", "top", '1px'],
                ["style", "text-align", 'left'],
                ["style", "height", '24px'],
                ["style", "display", 'block']
            ],
            "${_Text5Copy194}": [
                ["style", "top", '80px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '39px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_conte_evi3}": [
                ["style", "top", '120px'],
                ["style", "overflow", 'visible'],
                ["style", "height", '372px'],
                ["color", "background-color", 'rgba(84,255,0,0)'],
                ["style", "left", '180px'],
                ["style", "width", '687px']
            ],
            "${_btn2}": [
                ["style", "left", '0px'],
                ["style", "top", '-57px']
            ],
            "${_TextCopy7}": [
                ["style", "top", '23px'],
                ["style", "text-align", 'center'],
                ["style", "font-weight", 'bold'],
                ["style", "height", '32px'],
                ["style", "font-family", 'Arial'],
                ["style", "left", '19px'],
                ["color", "color", 'rgba(0,36,55,1)']
            ],
            "${_Text5Copy84}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '582px'],
                ["style", "top", '456px'],
                ["style", "text-align", 'justify'],
                ["style", "text-indent", '145px'],
                ["style", "height", '20px']
            ],
            "${_Text5Copy81}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px'],
                ["style", "top", '345px'],
                ["style", "text-align", 'justify'],
                ["style", "text-indent", '398px'],
                ["style", "height", '40px'],
                ["style", "font-style", 'normal']
            ],
            "${_Group3}": [
                ["style", "height", '156px'],
                ["style", "width", '576px'],
                ["style", "overflow", 'auto']
            ],
            "${_Text5Copy103}": [
                ["style", "top", '0px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '25px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy69}": [
                ["style", "top", '663px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '27px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_glosario}": [
                ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "display", 'none'],
                ["style", "left", '136px'],
                ["style", "top", '147px']
            ],
            "${_cont4}": [
                ["style", "top", '0px'],
                ["style", "left", '12px'],
                ["style", "display", 'block']
            ],
            "${_Text5Copy12}": [
                ["style", "top", '9px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '26px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_cont6}": [
                ["style", "top", '0px'],
                ["style", "left", '12px'],
                ["style", "display", 'block']
            ],
            "${_subtema2_3_1}": [
                ["style", "left", '783px'],
                ["style", "top", '42px']
            ],
            "${_Text5Copy72}": [
                ["style", "top", '29px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '22px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '581px']
            ],
            "${_conte_evi2}": [
                ["color", "background-color", 'rgba(84,255,0,0)'],
                ["style", "overflow", 'visible'],
                ["style", "height", '372px'],
                ["style", "top", '120px'],
                ["style", "left", '180px'],
                ["style", "width", '687px']
            ],
            "${_cont2}": [
                ["style", "top", '0px'],
                ["style", "left", '12px'],
                ["style", "display", 'block']
            ],
            "${_Group57Copy5}": [
                ["style", "top", '8px'],
                ["style", "overflow", 'auto'],
                ["style", "height", '264px'],
                ["style", "width", '621px']
            ],
            "${_cre_btn7}": [
                ["style", "top", '126px'],
                ["style", "clip", [0,335,290,2.6923828125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '22px'],
                ["style", "display", 'block']
            ],
            "${_Text5Copy90}": [
                ["style", "top", '0px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '387px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy62}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '1px'],
                ["style", "width", '579px'],
                ["style", "top", '402px'],
                ["style", "text-align", 'justify'],
                ["style", "text-indent", '276px'],
                ["style", "height", '18px']
            ],
            "${_Group44}": [
                ["style", "top", '11px'],
                ["style", "width", '619px'],
                ["style", "height", '243px'],
                ["style", "overflow", 'auto']
            ],
            "${_cre_btn1}": [
                ["style", "display", 'block'],
                ["style", "top", '201px'],
                ["style", "clip", [0,411.61572265625,148,-0.23095703125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '28px']
            ],
            "${_Text5Copy163}": [
                ["style", "top", '165px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '23px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy97}": [
                ["style", "top", '163px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '25px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy70}": [
                ["style", "top", '18px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '25px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy85}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px'],
                ["style", "top", '0px'],
                ["style", "text-align", 'justify'],
                ["style", "overflow", 'visible'],
                ["style", "height", '25px']
            ],
            "${_Text5Copy7}": [
                ["style", "top", '-6px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '240px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '612px']
            ],
            "${_indice_tablas_cont3}": [
                ["style", "top", '111px'],
                ["style", "left", '68px'],
                ["style", "display", 'none']
            ],
            "${_text_evidencia9_1}": [
                ["style", "top", '37px']
            ],
            "${_Text5Copy83}": [
                ["style", "top", '436px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '39px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '582px']
            ],
            "${_creditos_editora}": [
                ["style", "top", '38px'],
                ["style", "left", '118px'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_Text5Copy155}": [
                ["style", "top", '620px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '26px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy13}": [
                ["style", "top", '0px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '384px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy3}": [
                ["style", "top", '0px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '282px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy27}": [
                ["style", "top", '663px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '27px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_text_evidencia8_1}": [
                ["style", "top", '37px']
            ],
            "${_TextCopy11}": [
                ["style", "top", '23px'],
                ["style", "text-align", 'center'],
                ["style", "font-weight", 'bold'],
                ["style", "height", '32px'],
                ["style", "font-family", 'Arial'],
                ["style", "left", '18px'],
                ["color", "color", 'rgba(0,36,55,1)']
            ],
            "${_Text5Copy102}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px'],
                ["style", "top", '263px'],
                ["style", "text-align", 'justify'],
                ["style", "text-indent", '223px'],
                ["style", "height", '39px']
            ],
            "${_Text5Copy180}": [
                ["style", "top", '208px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '26px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text3}": [
                ["style", "top", '16px'],
                ["style", "font-size", '14px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(28,187,221,1)'],
                ["style", "height", '21px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '579px'],
                ["style", "width", '376px']
            ],
            "${_Text5Copy223}": [
                ["style", "top", '23px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '26px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy232}": [
                ["style", "top", '458px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '39px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_boton_atras1}": [
                ["style", "display", 'block'],
                ["style", "left", '483px'],
                ["style", "cursor", 'pointer'],
                ["style", "top", '503px']
            ],
            "${_btn_eviGen4}": [
                ["color", "background-color", 'rgba(84,255,0,1)'],
                ["style", "top", '0px'],
                ["style", "overflow", 'visible'],
                ["style", "height", '57px'],
                ["style", "left", '247px'],
                ["style", "clip", [-3,83,57,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '83px']
            ],
            "${_c7}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["subproperty", "boxShadow.color", 'rgba(255,255,255,0.65098)'],
                ["style", "left", '339px'],
                ["style", "width", '64px'],
                ["style", "top", '147px'],
                ["subproperty", "boxShadow.blur", '24px'],
                ["style", "display", 'none'],
                ["subproperty", "boxShadow.spread", '6px'],
                ["style", "height", '64px'],
                ["subproperty", "filter.blur", '0px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["subproperty", "boxShadow.offsetV", '3px']
            ],
            "${_Group40}": [
                ["style", "top", '60px'],
                ["style", "width", '623px'],
                ["style", "height", '222px'],
                ["style", "overflow", 'auto']
            ],
            "${_material_tienda4}": [
                ["style", "top", '84px'],
                ["style", "left", '2997px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_Text5Copy134}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px'],
                ["style", "top", '300px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '64px'],
                ["style", "font-style", 'normal']
            ],
            "${_fondo-rollover2Copy3}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text5Copy33}": [
                ["style", "top", '74px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '41px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_evi_indicador_azul1Copy3}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_conte_evi1}": [
                ["style", "top", '120px'],
                ["style", "overflow", 'visible'],
                ["style", "height", '372px'],
                ["color", "background-color", 'rgba(84,255,0,0)'],
                ["style", "left", '180px'],
                ["style", "width", '687px']
            ],
            "${_creditos_btn5}": [
                ["style", "top", '300px'],
                ["style", "left", '426px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Text5Copy131}": [
                ["style", "top", '140px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '26px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy58}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '1px'],
                ["style", "width", '579px'],
                ["style", "top", '342px'],
                ["style", "text-align", 'justify'],
                ["style", "text-indent", '0px'],
                ["style", "height", '18px']
            ],
            "${_resultados_aprendizaje5}": [
                ["style", "top", '59px'],
                ["style", "left", '0px']
            ],
            "${_Text9Copy13}": [
                ["style", "top", '-36px'],
                ["style", "display", 'block'],
                ["style", "line-height", '22px'],
                ["color", "color", 'rgba(12,92,117,1)'],
                ["style", "height", '24px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '530px']
            ],
            "${_Text5Copy47}": [
                ["style", "top", '0px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '26px'],
                ["style", "font-weight", '400'],
                ["style", "left", '1px'],
                ["style", "width", '579px']
            ],
            "${_iconoCreative}": [
                ["style", "top", '3px'],
                ["style", "left", '104px'],
                ["style", "clip", [0,50.271484375,40,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "display", 'block']
            ],
            "${_Text5Copy22}": [
                ["style", "top", '417px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '26px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text4Copy}": [
                ["style", "top", '46px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "height", '19px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '394px'],
                ["style", "width", '173px']
            ],
            "${_Text5Copy195}": [
                ["style", "top", '165px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '23px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy224}": [
                ["style", "top", '0px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '26px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_boton_play}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${_evi_roll9}": [
                ["style", "top", '550px'],
                ["style", "left", '834px'],
                ["style", "height", '48px']
            ],
            "${_evi_isla1}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_evi_roll7}": [
                ["style", "top", '550px'],
                ["style", "left", '834px'],
                ["style", "height", '48px']
            ],
            "${_cont11}": [
                ["style", "top", '0px'],
                ["style", "left", '11px'],
                ["style", "display", 'block']
            ],
            "${_Text5Copy144}": [
                ["style", "top", '0px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '26px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_evi_edificio2}": [
                ["style", "top", '0px'],
                ["style", "left", '67px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_conte_evi12}": [
                ["color", "background-color", 'rgba(84,255,0,0)'],
                ["style", "overflow", 'visible'],
                ["style", "height", '372px'],
                ["style", "top", '120px'],
                ["style", "left", '180px'],
                ["style", "width", '687px']
            ],
            "${_c_expertos}": [
                ["style", "left", '368px'],
                ["style", "top", '41px']
            ],
            "${_Ellipse3Copy4}": [
                ["style", "top", '14px'],
                ["style", "height", '9px'],
                ["style", "left", '12px'],
                ["style", "width", '9px']
            ],
            "${_Text3Copy}": [
                ["style", "top", '25px'],
                ["style", "width", '149px'],
                ["style", "text-align", 'center'],
                ["style", "height", '34px'],
                ["color", "color", 'rgba(28,187,221,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '406px'],
                ["style", "font-size", '14px']
            ],
            "${_RectangleCopy5}": [
                ["style", "top", '0px'],
                ["style", "height", '114px'],
                ["color", "background-color", 'rgba(255,109,59,1)'],
                ["style", "left", '0px'],
                ["style", "width", '83px']
            ],
            "${_Rectangle7Copy6}": [
                ["style", "top", '172px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "height", '4px'],
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "left", '5px'],
                ["style", "width", '113px']
            ],
            "${_Text5Copy94}": [
                ["style", "top", '0px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '22px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy41}": [
                ["style", "top", '38px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '300px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy226}": [
                ["style", "top", '80px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '39px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy165}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px'],
                ["style", "top", '248px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '64px'],
                ["style", "font-style", 'italic']
            ],
            "${_subtema2_5}": [
                ["style", "top", '351px'],
                ["style", "left", '648px']
            ],
            "${_Text5Copy154}": [
                ["style", "top", '38px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '285px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_evi_edificio1}": [
                ["style", "top", '114px'],
                ["style", "left", '0px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_Text5Copy216}": [
                ["style", "top", '458px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '39px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy115}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px'],
                ["style", "top", '238px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '62px'],
                ["style", "font-style", 'italic']
            ],
            "${_c4}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["subproperty", "boxShadow.color", 'rgba(255,255,255,0.65098)'],
                ["style", "left", '471px'],
                ["style", "width", '64px'],
                ["style", "top", '236px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "display", 'none'],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["style", "height", '64px'],
                ["subproperty", "boxShadow.spread", '6px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["subproperty", "boxShadow.blur", '24px']
            ],
            "${_guia_PDF}": [
                ["style", "display", 'none']
            ],
            "${_Text5Copy114}": [
                ["style", "top", '198px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '22px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_evi_indicador_azul1Copy}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text5Copy200}": [
                ["style", "top", '458px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '39px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_btn_eviGen0}": [
                ["color", "background-color", 'rgba(84,255,0,1)'],
                ["style", "top", '0px'],
                ["style", "overflow", 'visible'],
                ["style", "height", '57px'],
                ["style", "left", '-80px'],
                ["style", "clip", [-2.7712399959564,83,57,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '83px']
            ],
            "${_guiaPDF_maleta}": [
                ["style", "top", '304px'],
                ["style", "left", '183px']
            ],
            "${_sprite_bocas_instru}": [
                ["style", "top", '108px'],
                ["style", "background-size", [40,40], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "left", '0px'],
                ["style", "clip", [0,229.3330078125,27.66650390625,176], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Text5Copy132}": [
                ["style", "top", '180px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '26px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_c_lider_tecno}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_Group21}": [
                ["style", "height", '239px'],
                ["style", "width", '619px'],
                ["style", "overflow", 'auto']
            ],
            "${_text_evidencia1_1}": [
                ["style", "top", '37px']
            ],
            "${_borde}": [
                ["style", "top", '7px'],
                ["color", "background-color", 'rgba(255,255,255,0)'],
                ["style", "left", '7px'],
                ["color", "border-color", 'rgb(255, 255, 255)'],
                ["style", "height", '148px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '3px'],
                ["style", "width", '148px']
            ],
            "${_botonPlay}": [
                ["style", "left", '474px'],
                ["style", "top", '357px']
            ],
            "${_evi_boton13}": [
                ["style", "top", '16px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${_conte_evi9}": [
                ["style", "top", '120px'],
                ["style", "overflow", 'visible'],
                ["style", "height", '372px'],
                ["color", "background-color", 'rgba(84,255,0,0)'],
                ["style", "left", '180px'],
                ["style", "width", '687px']
            ],
            "${_contex_per1}": [
                ["style", "left", '87px'],
                ["style", "top", '313px']
            ],
            "${_Text5Copy145}": [
                ["style", "top", '40px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '26px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_cont8}": [
                ["style", "top", '0px'],
                ["style", "left", '11px'],
                ["style", "display", 'block']
            ],
            "${_Text5Copy202}": [
                ["style", "top", '38px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '285px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_cabezote1}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_text_evidencia11_1}": [
                ["style", "top", '37px']
            ],
            "${_Text5Copy88}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px'],
                ["style", "top", '657px'],
                ["style", "text-align", 'justify'],
                ["style", "overflow", 'visible'],
                ["style", "height", '27px']
            ],
            "${_Rectangle50}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["transform", "rotateZ", '-64deg'],
                ["style", "height", '62px'],
                ["style", "top", '54px'],
                ["style", "left", '46px'],
                ["style", "width", '2px']
            ],
            "${_rol3Copy2}": [
                ["style", "top", '592px'],
                ["color", "color", 'rgba(0,18,45,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '796px'],
                ["style", "font-size", '14px']
            ],
            "${_TextCopy2}": [
                ["style", "top", '23px'],
                ["style", "text-align", 'center'],
                ["style", "height", '32px'],
                ["color", "color", 'rgba(0,36,55,1)'],
                ["style", "font-family", 'Arial'],
                ["style", "left", '19px'],
                ["style", "font-weight", 'bold']
            ],
            "${_Text5Copy174}": [
                ["style", "top", '0px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '384px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_Text5Copy44}": [
                ["style", "top", '0px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '25px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_text_evidencia7_1}": [
                ["style", "top", '37px']
            ],
            "${_Group55}": [
                ["style", "top", '50px'],
                ["style", "width", '621px'],
                ["style", "height", '244px'],
                ["style", "overflow", 'auto']
            ],
            "${_evi_boton5}": [
                ["style", "top", '168px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '382px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Text5Copy74}": [
                ["style", "top", '42px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '18px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '581px']
            ],
            "${_Text5Copy64}": [
                ["style", "top", '508px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '25px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '582px']
            ],
            "${_evi_puente}": [
                ["style", "top", '78px'],
                ["style", "left", '482px'],
                ["style", "clip", [0,224,88,217], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_cont3}": [
                ["style", "top", '0px'],
                ["style", "left", '12px'],
                ["style", "display", 'block']
            ],
            "${_Text9Copy10}": [
                ["style", "line-height", '22px'],
                ["style", "font-size", '14px'],
                ["style", "top", '0px'],
                ["color", "color", 'rgba(28,28,30,1)'],
                ["style", "height", '167px'],
                ["style", "display", 'block'],
                ["style", "left", '0px'],
                ["style", "width", '541px']
            ],
            "${_Text5Copy48}": [
                ["style", "top", '40px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "height", '26px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '1px'],
                ["style", "width", '579px']
            ],
            "${_instru_teclado}": [
                ["style", "top", '0px'],
                ["style", "left", '12px'],
                ["style", "cursor", 'pointer']
            ],
            "${_text_evidencia7_2}": [
                ["style", "top", '48px']
            ],
            "${_EllipseGlow}": [
                ["style", "top", '4px'],
                ["style", "height", '59px'],
                ["style", "left", '5px'],
                ["style", "width", '59px']
            ],
            "${_btn5}": [
                ["style", "left", '0px'],
                ["style", "top", '-100%']
            ],
            "${_evi_per2_cuerpo}": [
                ["style", "left", '57px'],
                ["style", "top", '120px']
            ],
            "${_Text5Copy221}": [
                ["style", "top", '9px'],
                ["style", "line-height", '20px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '26px'],
                ["color", "color", 'rgba(0,57,86,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "width", '580px']
            ],
            "${_imagenes_cont2}": [
                ["style", "top", '41px'],
                ["style", "left", '58px'],
                ["style", "display", 'none']
            ],
            "${_Text5Copy4}": [
                ["style", "top", '110px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '25px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '1px'],
                ["color", "color", 'rgba(0,57,86,1)']
            ],
            "${_creditos_bombillo}": [
                ["style", "top", '63px'],
                ["style", "-webkit-transform-origin", [50,95], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,95],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,95],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,95],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,95],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,95],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '329px'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 75000,
            autoPlay: true,
            timeline: [
                { id: "eid8", tween: [ "style", "${_refeImagenes}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid24", tween: [ "style", "${_bibliografia_cont1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2068", tween: [ "style", "${_rolloverMestudio}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid15", tween: [ "style", "${_indice_figuras_cont1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid25", tween: [ "style", "${_webgrafia_guia1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2067", tween: [ "style", "${_rolloverGpdf}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid14", tween: [ "style", "${_boton-atras}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid22", tween: [ "style", "${_imagenes_cont2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid23", tween: [ "style", "${_bibliografia_guia}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid9", tween: [ "style", "${_creative-commons}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid11", tween: [ "style", "${_fondo_general_creditos}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid19", tween: [ "style", "${_indice_tablas_cont2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid20", tween: [ "style", "${_indice_tablas_cont3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2069", tween: [ "style", "${_rolloverContex}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid13", tween: [ "style", "${_creditos}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid5", tween: [ "style", "${_material_estudio}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid27", tween: [ "style", "${_contex_cartel}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2066", tween: [ "style", "${_rolloverEvidencias}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid7", tween: [ "style", "${_glosario}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1", tween: [ "style", "${_zoom1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_evidencias}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid12", tween: [ "style", "${_mapa-contenido}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid17", tween: [ "style", "${_indice_figuras_cont3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid18", tween: [ "style", "${_indice_tablas_cont1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid16", tween: [ "style", "${_indice_figuras_cont2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2065", tween: [ "style", "${_rolloverMapa}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2064", tween: [ "style", "${_botoneraSub}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid26", tween: [ "style", "${_webgrafia_cont1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3", tween: [ "style", "${_diseno_evidencias}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid6", tween: [ "style", "${_contextualizacion}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid21", tween: [ "style", "${_imagenes_cont1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_guia_PDF}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }            ]
        }
    }
},
"boton_sonido": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'sprite_sonido',
                    type: 'image',
                    rect: ['0px', '0px', '80px', '40px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sprite_sonido.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_sprite_sonido}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '40px'],
                ["style", "width", '80px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"botonClic": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'sprite_icono_clic',
                    type: 'image',
                    rect: ['0px', '0px', '130px', '50px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sprite_icono_clic.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_sprite_icono_clic}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '50px'],
                ["style", "width", '130px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"botonMapa": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'sprite_icono_mapa',
                    type: 'image',
                    rect: ['0px', '0px', '130px', '50px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sprite_icono_mapa.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_sprite_icono_mapa}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '50px'],
                ["style", "width", '130px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"botonEvidencias": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'sprite_icono_evidencias',
                    type: 'image',
                    rect: ['0px', '0px', '165px', '68px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sprite_icono_evidencias.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '68px'],
                ["style", "width", '165px']
            ],
            "${_sprite_icono_evidencias}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"botonGuiapdf": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'sprite_icono_gpdf',
                    type: 'image',
                    rect: ['0px', '0px', '165px', '68px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sprite_icono_gpdf.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_sprite_icono_gpdf}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '68px'],
                ["style", "width", '165px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"botonMestudio": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'sprite_icono_mestudio',
                    type: 'image',
                    rect: ['0px', '0px', '165px', '68px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sprite_icono_mestudio.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_sprite_icono_mestudio}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '68px'],
                ["style", "width", '165px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"botonContex": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'sprite_icono_contex',
                    type: 'image',
                    rect: ['0px', '0px', '160px', '68px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sprite_icono_contex.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_sprite_icono_contex}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '68px'],
                ["style", "width", '160px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"iconoCreditos_3": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'sprite_icono_creditos',
                    type: 'image',
                    rect: ['0px', '0px', '110px', '40px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sprite_icono_creditos3.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_sprite_icono_creditos}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '40px'],
                ["style", "width", '110px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"iconoCreative_3": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'sprite_icono_creative',
                    type: 'image',
                    rect: ['0px', '0px', '110px', '40px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sprite_icono_creative3.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_sprite_icono_creative}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '40px'],
                ["style", "width", '110px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"iconoRefe_3": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'sprite_icono_referencias',
                    type: 'image',
                    rect: ['0px', '0px', '110px', '40px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sprite_icono_referencias3.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_sprite_icono_referencias}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '40px'],
                ["style", "width", '110px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"iconoGlosario_3": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'sprite_icono_glosario',
                    type: 'image',
                    rect: ['0px', '0px', '110px', '40px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sprite_icono_glosario3.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_sprite_icono_glosario}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '40px'],
                ["style", "width", '110px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"botonVolver": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['47px', '0px', '140px', '92px', 'auto', 'auto'],
                    id: 'rolloverVolver',
                    transform: [[0, 0], [], [], [], ['0%']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/rolloverVolver.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '95px', '92px', 'auto', 'auto'],
                    id: 'botonVolver',
                    type: 'image',
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/botonAtras.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_botonVolver}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${_rolloverVolver}": [
                ["style", "top", '0px'],
                ["style", "left", '47px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${symbolSelector}": [
                ["style", "height", '92px'],
                ["style", "width", '95px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"cabezaPer1": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'cabeza_per_guia',
                    type: 'group',
                    rect: ['0px', '0px', '794', '242', 'auto', 'auto'],
                    c: [
                    {
                        id: 'guiaPDF_per_cabeza',
                        type: 'image',
                        rect: ['171px', '0px', '230px', '236px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/guiaPDF_per_cabeza.png', '0px', '0px']
                    },
                    {
                        rect: ['0px', '177px', '680px', '65px', 'auto', 'auto'],
                        id: 'sprite_bocas_instru2',
                        type: 'image',
                        clip: ['rect(0px 349px 39px 273px)'],
                        fill: ['rgba(0,0,0,0)', 'images/sprite_bocas_instru.png', '0px', '0px', '60%', '60%']
                    },
                    {
                        rect: ['244px', '123px', '550px', '40px', 'auto', 'auto'],
                        id: 'sprite_ojos_instrucciones2',
                        type: 'image',
                        clip: ['rect(0px 103px 30px 0px)'],
                        fill: ['rgba(0,0,0,0)', 'images/sprite_ojos_instrucciones.png', '0px', '0px', '75%', '75%']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_sprite_ojos_instrucciones2}": [
                ["style", "top", '123px'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "background-size", [75,75], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "clip", [0,103,30,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '244px']
            ],
            "${symbolSelector}": [
                ["style", "height", '242px'],
                ["style", "width", '794px']
            ],
            "${_cabeza_per_guia}": [
                ["style", "top", '0px'],
                ["style", "-webkit-transform-origin", [38,94], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [38,94],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [38,94],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [38,94],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [38,94],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [38,94],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_sprite_bocas_instru2}": [
                ["style", "top", '177px'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "background-size", [60,60], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "clip", [0,349,39,273], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px']
            ],
            "${_guiaPDF_per_cabeza}": [
                ["style", "top", '0px'],
                ["style", "left", '171px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 9000,
            autoPlay: true,
            timeline: [
                { id: "eid34", tween: [ "style", "${_cabeza_per_guia}", "-webkit-transform-origin", [38,94], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38,94]}], position: 0, duration: 0 },
                { id: "eid2306", tween: [ "style", "${_cabeza_per_guia}", "-moz-transform-origin", [38,94], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38,94]}], position: 0, duration: 0 },
                { id: "eid2307", tween: [ "style", "${_cabeza_per_guia}", "-ms-transform-origin", [38,94], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38,94]}], position: 0, duration: 0 },
                { id: "eid2308", tween: [ "style", "${_cabeza_per_guia}", "msTransformOrigin", [38,94], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38,94]}], position: 0, duration: 0 },
                { id: "eid2309", tween: [ "style", "${_cabeza_per_guia}", "-o-transform-origin", [38,94], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38,94]}], position: 0, duration: 0 },
                { id: "eid2310", tween: [ "style", "${_cabeza_per_guia}", "transform-origin", [38,94], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38,94]}], position: 0, duration: 0 },
                { id: "eid35", tween: [ "style", "${_cabeza_per_guia}", "-webkit-transform-origin", [38,94], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38,94]}], position: 4000, duration: 0 },
                { id: "eid2311", tween: [ "style", "${_cabeza_per_guia}", "-moz-transform-origin", [38,94], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38,94]}], position: 4000, duration: 0 },
                { id: "eid2312", tween: [ "style", "${_cabeza_per_guia}", "-ms-transform-origin", [38,94], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38,94]}], position: 4000, duration: 0 },
                { id: "eid2313", tween: [ "style", "${_cabeza_per_guia}", "msTransformOrigin", [38,94], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38,94]}], position: 4000, duration: 0 },
                { id: "eid2314", tween: [ "style", "${_cabeza_per_guia}", "-o-transform-origin", [38,94], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38,94]}], position: 4000, duration: 0 },
                { id: "eid2315", tween: [ "style", "${_cabeza_per_guia}", "transform-origin", [38,94], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38,94]}], position: 4000, duration: 0 },
                { id: "eid32", tween: [ "style", "${_sprite_bocas_instru2}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
                { id: "eid33", tween: [ "style", "${_sprite_bocas_instru2}", "background-position", [-73,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 4000, duration: 0 },
                { id: "eid29", tween: [ "style", "${_sprite_ojos_instrucciones2}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
                { id: "eid31", tween: [ "style", "${_sprite_ojos_instrucciones2}", "background-position", [-108,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 500, duration: 0 },
                { id: "eid30", tween: [ "style", "${_sprite_ojos_instrucciones2}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-108,0]}], position: 1000, duration: 0 },
                { id: "eid69", tween: [ "style", "${_sprite_ojos_instrucciones2}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 6000, duration: 0 },
                { id: "eid71", tween: [ "style", "${_sprite_ojos_instrucciones2}", "background-position", [-105,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 6500, duration: 0 },
                { id: "eid70", tween: [ "style", "${_sprite_ojos_instrucciones2}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-105,0]}], position: 7000, duration: 0 },
                { id: "eid72", tween: [ "transform", "${_cabeza_per_guia}", "rotateZ", '12deg', { fromValue: '0deg'}], position: 0, duration: 2000 },
                { id: "eid73", tween: [ "transform", "${_cabeza_per_guia}", "rotateZ", '8deg', { fromValue: '12deg'}], position: 2000, duration: 1142 },
                { id: "eid75", tween: [ "transform", "${_cabeza_per_guia}", "rotateZ", '0deg', { fromValue: '8deg'}], position: 3142, duration: 858 }            ]
        }
    }
},
"cabezaEvide": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], [], ['29%', '80%']],
                    id: 'cabeza_per_evi',
                    type: 'group',
                    clip: ['rect(0px 338.46142578125px 173px 0px)'],
                    rect: ['0px', '0px', '680', '173', 'auto', 'auto'],
                    c: [
                    {
                        id: 'evi_per1_cabeza',
                        type: 'image',
                        rect: ['122px', '0px', '154px', '152px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/evi_per1_cabeza.png', '0px', '0px']
                    },
                    {
                        rect: ['0px', '108px', '680px', '65px', 'auto', 'auto'],
                        id: 'sprite_bocas_instru3',
                        type: 'image',
                        clip: ['rect(0px 228px 25px 178px)'],
                        fill: ['rgba(0,0,0,0)', 'images/sprite_bocas_instru.png', '0px', '0px', '40%', '40%']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '173px'],
                ["style", "width", '680px']
            ],
            "${_cabeza_per_evi}": [
                ["style", "-webkit-transform-origin", [29,80], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [29,80],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [29,80],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [29,80],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [29,80],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [29,80],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["style", "top", '0px'],
                ["style", "clip", [0,338.46142578125,173,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px']
            ],
            "${_sprite_bocas_instru3}": [
                ["style", "top", '108px'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "background-size", [40,40], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "clip", [0,228,25,178], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px']
            ],
            "${_evi_per1_cabeza}": [
                ["style", "top", '0px'],
                ["style", "left", '122px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7000,
            autoPlay: true,
            timeline: [
                { id: "eid250", tween: [ "transform", "${_cabeza_per_evi}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 0, duration: 1500 },
                { id: "eid251", tween: [ "transform", "${_cabeza_per_evi}", "rotateZ", '0deg', { fromValue: '-3deg'}], position: 1500, duration: 1500 },
                { id: "eid246", tween: [ "style", "${_sprite_bocas_instru3}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
                { id: "eid247", tween: [ "style", "${_sprite_bocas_instru3}", "background-position", [-45,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 4000, duration: 0 }            ]
        }
    }
},
"bar1": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'evi_barco',
                    type: 'image',
                    rect: ['0px', '0px', '353px', '130px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/evi_barco.png', '0px', '0px']
                },
                {
                    id: 'evi_olas4',
                    type: 'image',
                    rect: ['-13px', '77px', '171px', '38px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/evi_olas.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_evi_olas4}": [
                ["style", "top", '77px'],
                ["style", "left", '-13px']
            ],
            "${_evi_barco}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '130px'],
                ["style", "width", '353px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7000,
            autoPlay: true,
            timeline: [
                { id: "eid2177", tween: [ "style", "${_evi_olas4}", "left", '0px', { fromValue: '-13px'}], position: 0, duration: 1750 },
                { id: "eid2178", tween: [ "style", "${_evi_olas4}", "left", '-13px', { fromValue: '0px'}], position: 1750, duration: 1750 },
                { id: "eid2179", tween: [ "style", "${_evi_olas4}", "left", '4px', { fromValue: '-13px'}], position: 3500, duration: 1750 },
                { id: "eid2180", tween: [ "style", "${_evi_olas4}", "left", '-13px', { fromValue: '4px'}], position: 5250, duration: 1742 },
                { id: "eid424", tween: [ "style", "${_evi_barco}", "top", '4px', { fromValue: '0px'}], position: 0, duration: 3500 },
                { id: "eid425", tween: [ "style", "${_evi_barco}", "top", '0px', { fromValue: '4px'}], position: 3500, duration: 3500 }            ]
        }
    }
},
"b2": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'evi_barco1',
                    type: 'image',
                    rect: ['0px', '0px', '136px', '73px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/evi_barco1.png', '0px', '0px']
                },
                {
                    id: 'evi_olas1',
                    type: 'image',
                    rect: ['-18px', '45px', '171px', '38px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/evi_olas.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_evi_barco1}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_evi_olas1}": [
                ["style", "top", '45px'],
                ["style", "left", '-18px']
            ],
            "${symbolSelector}": [
                ["style", "height", '73px'],
                ["style", "width", '136px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5000,
            autoPlay: true,
            timeline: [
                { id: "eid518", tween: [ "style", "${_evi_barco1}", "top", '8px', { fromValue: '0px'}], position: 0, duration: 2500 },
                { id: "eid519", tween: [ "style", "${_evi_barco1}", "top", '0px', { fromValue: '8px'}], position: 2500, duration: 2500 },
                { id: "eid522", tween: [ "style", "${_evi_olas1}", "left", '-27px', { fromValue: '-18px'}], position: 0, duration: 1250 },
                { id: "eid523", tween: [ "style", "${_evi_olas1}", "left", '-18px', { fromValue: '-27px'}], position: 1250, duration: 1122 },
                { id: "eid525", tween: [ "style", "${_evi_olas1}", "left", '-33px', { fromValue: '-18px'}], position: 2500, duration: 1250 },
                { id: "eid526", tween: [ "style", "${_evi_olas1}", "left", '-18px', { fromValue: '-33px'}], position: 3750, duration: 1250 }            ]
        }
    }
},
"b3": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'evi_barco2',
                    type: 'image',
                    rect: ['0px', '0px', '78px', '63px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/evi_barco2.png', '0px', '0px']
                },
                {
                    id: 'evi_olas2',
                    type: 'image',
                    rect: ['-48px', '44px', '171px', '38px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/evi_olas.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_evi_barco2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_evi_olas2}": [
                ["style", "top", '44px'],
                ["style", "left", '-48px']
            ],
            "${symbolSelector}": [
                ["style", "height", '63px'],
                ["style", "width", '78px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5000,
            autoPlay: true,
            timeline: [
                { id: "eid529", tween: [ "style", "${_evi_barco2}", "top", '5px', { fromValue: '0px'}], position: 0, duration: 2340 },
                { id: "eid530", tween: [ "style", "${_evi_barco2}", "top", '0px', { fromValue: '5px'}], position: 2340, duration: 2660 },
                { id: "eid2170", tween: [ "style", "${_evi_olas2}", "left", '-38px', { fromValue: '-48px'}], position: 0, duration: 1000 },
                { id: "eid2171", tween: [ "style", "${_evi_olas2}", "left", '-48px', { fromValue: '-38px'}], position: 1000, duration: 1340 },
                { id: "eid2172", tween: [ "style", "${_evi_olas2}", "left", '-37px', { fromValue: '-48px'}], position: 2340, duration: 1410 },
                { id: "eid2173", tween: [ "style", "${_evi_olas2}", "left", '-48px', { fromValue: '-37px'}], position: 3750, duration: 1250 }            ]
        }
    }
},
"barco4": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'material_olas',
                    type: 'image',
                    rect: ['0px', '41px', '169px', '39px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/material_olas.png', '0px', '0px']
                },
                {
                    id: 'material_barco',
                    type: 'image',
                    rect: ['12px', '0px', '138px', '62px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/material_barco.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_material_barco}": [
                ["style", "left", '12px'],
                ["style", "top", '0px']
            ],
            "${_material_olas}": [
                ["style", "left", '0px'],
                ["style", "top", '44px']
            ],
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "width", '169px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5021,
            autoPlay: true,
            timeline: [
                { id: "eid663", tween: [ "style", "${_material_olas}", "left", '10px', { fromValue: '0px'}], position: 0, duration: 2500 },
                { id: "eid664", tween: [ "style", "${_material_olas}", "left", '0px', { fromValue: '10px'}], position: 2500, duration: 2500 },
                { id: "eid660", tween: [ "style", "${_material_barco}", "top", '5px', { fromValue: '0px'}], position: 0, duration: 2500 },
                { id: "eid661", tween: [ "style", "${_material_barco}", "top", '0px', { fromValue: '5px'}], position: 2500, duration: 2500 }            ]
        }
    }
},
"aion": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'material_avion',
                    type: 'image',
                    rect: ['1185px', '0px', '151px', '68px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/material_avion.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '68px'],
                ["style", "width", '151px']
            ],
            "${_material_avion}": [
                ["style", "left", '1185px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 12000,
            autoPlay: true,
            timeline: [
                { id: "eid666", tween: [ "style", "${_material_avion}", "left", '-2394px', { fromValue: '1185px'}], position: 0, duration: 5049 }            ]
        }
    }
},
"carro1": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'material_carro3',
                    type: 'image',
                    rect: ['-2626px', '0px', '109px', '56px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/material_carro3.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_material_carro3}": [
                ["style", "top", '0px'],
                ["style", "left", '-2626px']
            ],
            "${symbolSelector}": [
                ["style", "height", '56px'],
                ["style", "width", '109px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 75000,
            autoPlay: true,
            timeline: [
                { id: "eid668", tween: [ "style", "${_material_carro3}", "left", '1041px', { fromValue: '-2626px'}], position: 0, duration: 59447 }            ]
        }
    }
},
"barco3": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'evi_olas3',
                    type: 'image',
                    rect: ['0px', '28px', '171px', '38px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/evi_olas.png', '0px', '0px']
                },
                {
                    id: 'evi_barco3',
                    type: 'image',
                    rect: ['55px', '0px', '50px', '55px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/evi_barco3.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_evi_olas3}": [
                ["style", "top", '28px'],
                ["style", "left", '0px']
            ],
            "${_evi_barco3}": [
                ["style", "left", '55px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '66px'],
                ["style", "width", '171px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5000,
            autoPlay: true,
            timeline: [
                { id: "eid2198", tween: [ "style", "${_evi_olas3}", "left", '10px', { fromValue: '0px'}], position: 0, duration: 1250 },
                { id: "eid2199", tween: [ "style", "${_evi_olas3}", "left", '0px', { fromValue: '10px'}], position: 1250, duration: 1250 },
                { id: "eid2200", tween: [ "style", "${_evi_olas3}", "left", '16px', { fromValue: '0px'}], position: 2500, duration: 1156 },
                { id: "eid2201", tween: [ "style", "${_evi_olas3}", "left", '0px', { fromValue: '16px'}], position: 3656, duration: 1344 },
                { id: "eid2193", tween: [ "style", "${_evi_barco3}", "top", '9px', { fromValue: '0px'}], position: 0, duration: 2500 },
                { id: "eid2194", tween: [ "style", "${_evi_barco3}", "top", '0px', { fromValue: '9px'}], position: 2500, duration: 2500 }            ]
        }
    }
},
"material_carro2": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'material_carro2a',
                    type: 'image',
                    rect: ['0px', '0px', '51px', '25px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/material_carro2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_material_carro2a}": [
                ["style", "left", '358px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '25px'],
                ["style", "width", '51px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 14000,
            autoPlay: true,
            timeline: [
                { id: "eid2223", tween: [ "style", "${_material_carro2a}", "left", '-459px', { fromValue: '358px'}], position: 0, duration: 4000 }            ]
        }
    }
},
"material_carro1": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'material_carro1a',
                    type: 'image',
                    rect: ['-302px', '0px', '68px', '41px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/material_carro1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_material_carro1a}": [
                ["style", "top", '0px'],
                ["style", "left", '-302px']
            ],
            "${symbolSelector}": [
                ["style", "height", '41px'],
                ["style", "width", '68px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 11000,
            autoPlay: true,
            timeline: [
                { id: "eid2225", tween: [ "style", "${_material_carro1a}", "left", '545px', { fromValue: '-302px'}], position: 0, duration: 4000 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-29415170");
