	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.BookTemplateName="metro";bookConfig.loadingCaption="En momentos podrás disfrutar de la guía!";bookConfig.loadingCaptionColor="#000000";bookConfig.loadingBackground="#9D9989";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.toolbarColor="#444444";bookConfig.iconColor="#ffffff";bookConfig.pageNumColor="#333333";bookConfig.iconFontColor="#FFFFFF";bookConfig.InstructionsButtonVisible="Show";bookConfig.QRCode="Show";bookConfig.HomeButtonVisible="Hide";bookConfig.HomeURL="%first page%";bookConfig.ShareButtonVisible="Hide";bookConfig.EmailButtonVisible="Hide";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Show";bookConfig.bookmarkBackground="#000000";bookConfig.bookmarkFontColor="#cccccc";bookConfig.SearchButtonVisible="Show";bookConfig.leastSearchChar="3";bookConfig.searchFontColor="#FFFFFF";bookConfig.PrintButtonVisible="Yes";bookConfig.BackgroundSoundButtonVisible="No";bookConfig.FlipSound="No";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Yes";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.ZoomButtonVisible="Yes";bookConfig.minZoomWidth="403";bookConfig.minZoomHeight="518";bookConfig.mouseWheelFlip="Yes";bookConfig.DownloadButtonVisible="False";bookConfig.FullscreenButtonVisible="Show";bookConfig.bgBeginColor="#aad9eb";bookConfig.bgEndColor="#aad9eb";bookConfig.bgMRotation="90";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.3";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.3";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="10";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#FFFFFF";bookConfig.flipshortcutbutton="Show";bookConfig.BindingType="pit";bookConfig.RightToLeft="No";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.LinkDownColor="#800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.searchFontColor="#FFFDDD";bookConfig.totalPageCount=39;bookConfig.largePageWidth=1200;bookConfig.largePageHeight=1855;;bookConfig.securityType="1";bookConfig.bookTitle="GUÍA NORMAS APA";bookConfig.productName="Flip PDF Professional";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";bookConfig.searchTextJS="mobile/javascript/search_config.js";bookConfig.normalPath="files/mobile/";bookConfig.largePath="files/mobile/";bookConfig.thumbPath="files/thumb/";bookConfig.userListPath="files/extfiles/users.js";bookConfig.UIBaseURL='mobile/';var language = [{ language : "Spanish",btnFirstPage:"Primera Página",btnNextPage:"Página siguiente",btnLastPage:"Última Página",btnPrePage:"Página Anterior",btnDownload:"Descargar",btnPrint:"Imprimir",btnSearch:"Buscar",btnClearSearch:"Borrar",frmSearchPrompt:"Clear",btnBookMark:"Tabla de contenidos",btnHelp:"Ayuda",btnHome:"Inicio",btnFullScreen:"Permitir Pantalla Completa",btnDisableFullScreen:"Deshabilitar Pantalla Completa",btnSoundOn:"Sonido Encendido",btnSoundOff:"Sonido Apagado",btnShareEmail:"Compartir",btnSocialShare:"Redes Sociales",btnZoomIn:"Agrandar",btnZoomOut:"Alejar",btnDragToMove:"Modo de Arrastre",btnAutoFlip:"Auto pasar",btnStopAutoFlip:"Detener Auto Pasar",btnGoToHome:"Volver al inicio",frmHelpCaption:"Ayuda",frmHelpTip1:"Ayuda uno",frmHelpTip2:"Arrastrar el Borde con el Maus",frmPrintCaption:"Imprimir",frmPrintBtnCaption:"Imprimir",frmPrintPrintAll:"Imprimir todas las Páginas",frmPrintPrintCurrentPage:"Imprimir Página actual",frmPrintPrintRange:"Imprimir Páginas:",frmPrintExampleCaption:"Ejemplo: 2,5,8-26",frmPrintPreparePage:"Preparando la Página:",frmPrintPrintFailed:"Error de Impresión:",pnlSearchInputInvalid:"(Mínimo 3 Caracteres)",loginCaption:"Entrar",loginInvalidPassword:"Contraseña no válida!",loginPasswordLabel:"Contraseña:",loginBtnLogin:"Entrar",loginBtnCancel:"Cancelar",btnThumb:"Miniaturas",lblPages:"Páginas:",lblPagesFound:"Páginas:",lblPageIndex:"Página",btnAbout:"Acerca de",frnAboutCaption:"Acerca de y Contacto",btnSinglePage:"Página Simple",btnDoublePage:"Página doble",btnSwicthLanguage:"Cambiar el Idioma",tipChangeLanguage:"Elegir un Idioma...",btnMoreOptionsLeft:"Mas Opciones",btnMoreOptionsRight:"Mas Opciones",btnFit:"Ajustar la Ventana",smallModeCaption:"Click para ver Pantalla Completa",btnAddAnnotation:"Agregar Notas",btnAnnotation:"Notas",FlipPageEditor_SaveAndExit:"Guardar y Salir",FlipPageEditor_Exit:"Salir",DrawToolWindow_Redo:"Rehacer",DrawToolWindow_Undo:"Deshacer",DrawToolWindow_Clear:"Limpiar",DrawToolWindow_Brush:"Pincel",DrawToolWindow_Width:"Ancho",DrawToolWindow_Alpha:"Alfa",DrawToolWindow_Color:"Color",DrawToolWindow_Eraser:"Borrador",DrawToolWindow_Rectangular:"Rectangular",DrawToolWindow_Ellipse:"Elipse",TStuff_BorderWidth:"Ancho de Borde",TStuff_BorderAlph:"Borde Alfa",TStuff_BorderColor:"Color del Borde",DrawToolWindow_TextNote:"Texto Nota",AnnotMark:"Marcador",lastpagebtnHelp:"Ultima Página",firstpagebtnHelp:"Primera Página",homebtnHelp:"Volver a la Página Principal",aboubtnHelp:"Acerca de",screenbtnHelp:"Abrir en Pantalla Completa",helpbtnHelp:"Mostrar la Ayuda",searchbtnHelp:"Buscar en Páginas",pagesbtnHelp:"Ver las miniaturas de este Folleto",bookmarkbtnHelp:"Abrir Marcador",AnnotmarkbtnHelp:"Abrir la Tabla de Contenidos",printbtnHelp:"Imprimir el folleto",soundbtnHelp:"Prender o Apagar el Sonido",sharebtnHelp:"Enviar Email a",socialSharebtnHelp:"Redes Sociales",zoominbtnHelp:"Agrandar",downloadbtnHelp:"Descargar el folleto",pagemodlebtnHelp:"Cambiar entre Modo de Página Simple y Doble",languagebtnHelp:"Cambiar Idioma",annotationbtnHelp:"Agregar Anotación",addbookmarkbtnHelp:"Agregar Marcador",removebookmarkbtnHelp:"Eliminar Marcador",updatebookmarkbtnHelp:"Actualizar Marcador",btnShoppingCart:"Carrito de Compras",Help_ShoppingCartbtn:"Ayudar Carrito de Compras",Help_btnNextPage:"Siguiente Página",Help_btnPrePage:"Anterior Página",Help_btnAutoFlip:"Auto pasar",Help_StopAutoFlip:"Detener auto pasar",btnaddbookmark:"Agregar",btndeletebookmark:"Eliminar",btnupdatebookmark:"Actualizar",frmyourbookmarks:"Mis Anotaciones",frmitems:"Artículos",DownloadFullPublication:"Publicación Completa",DownloadCurrentPage:"Página Actual",DownloadAttachedFiles:"Archivos Adjuntos",lblLink:"Enlace",btnCopy:"Botón Copiar",infCopyToClipboard:"Your browser does not support clipboard. ",restorePage:"¿Desea recuperar la sesión anterior?",tmpl_Backgoundsoundon:"Fondo Sonido Encendido",tmpl_Backgoundsoundoff:"Fondo Sonido Apagado ",tmpl_Flipsoundon:"Flip Sonido Encendido",tmpl_Flipsoundoff:"Flip Sonido Apagado ",Help_PageIndex:"Número de actual Página",tmpl_PrintPageRanges:"Rango de Página",tmpl_PrintPreview:"Previsualizar",btnSelection:"Seleccionar Texto",loginNameLabel:"Nombre:",btnGotoPage:"Ir a Página",btnSettings:"Configuración",soundSettingTitle:"Sonido Configuración",closeFlipSound:"Sonido de pase de cierre",closeBackgroundSound:"Cerrar el Sonido de Fondo",frmShareCaption:"Compartiendo",frmShareLinkLabel:"Enlace:",frmShareBtnCopy:"Copiar",frmShareItemsGroupCaption:"Compartir con grupo",TAnnoActionPropertyStuff_GotoPage:"Ir a página ",btnPageBack:"Retroceder",btnPageForward:"Adelante",SelectTextCopy:"Copiar Texto",selectCopyButton:"Copiar",TStuffCart_TypeCart:"Carrito de Compras",TStuffCart_DetailedQuantity:"Cantidad",TStuffCart_DetailedPrice:"Precio",ShappingCart_Close:"Cerrar",ShappingCart_CheckOut:"Proceso",ShappingCart_Item:"Artículo",ShappingCart_Total:"Total precio",ShappingCart_AddCart:"Añadir a carrito",ShappingCart_InStock:"En Stock",TStuffCart_DetailedCost:"Costo de transporte",TStuffCart_DetailedTime:"Tiempo de entrega",TStuffCart_DetailedDay:"día(s)",ShappingCart_NotStock:"Poco en stock",btnCrop:"Ajustar",btnDragButton:"Arrastrar",btnFlipBook:"Libro flip",btnSlideMode:"Modo de presentación",btnSinglePageMode:"Modo de página sencilla",btnVertical:"Modo vertical",btnHotizontal:"Modo horizontal",btnClose:"Cerrar",btnDoublePage:"Página doble",btnBookStatus:"Book View",checkBoxInsert:"Ingrese página actual",lblLast:"Esta es la última página.",lblFirst:"Esta es la primera página.",lblFullscreen:"Clic para ver en pantalla completa",lblName:"Nombre",lblPassword:"Contraseña",lblLogin:"Entrar",lblCancel:"Cancelar",lblNoName:"Nombre de usuario no puede estar vacío.",lblNoPassword:"Contraseña no puede estar vacía.",lblNoCorrectLogin:"Ingrese el nombre y contraseña correctos.",btnVideo:"Galería de video",btnSlideShow:"Presentación",pnlSearchInputInvalid:"(Mínimo 3 Caracteres)",btnDragToMove:"Modo de Arrastre",btnPositionToMove:"Mover por posición del mouse",lblHelp1:"Arrastre la esquina de la página para ver",lblHelp2:"Doble clic para acercar y alejar",lblCopy:"Copiar",lblAddToPage:"añadir a página",lblPage:"Página",lblTitle:"Título",lblEdit:"Editar",lblDelete:"Borrar",lblRemoveAll:"Quitar todo",tltCursor:"cursor",tltAddHighlight:"añadir resaltado",tltAddTexts:"añadir textos",tltAddShapes:"añadir formas",tltAddNotes:"añadir notas",tltAddImageFile:"añadir archivo de imagen",tltAddSignature:"añadir firma",tltAddLine:"añadir línea",tltAddArrow:"añadir flecha",tltAddRect:"añadir recta",tltAddEllipse:"añadir elipse",lblDoubleClickToZoomIn:"Doble clic para acercar",frmShareCaption:"Compartiendo",frmShareLabel:"Comparir",frmShareInfo:"Puedes compartir tu publicación fácilmente a las redes sociales. Sólo haz clic abajo.",frminsertLabel:"Insertar a sitio",frminsertInfo:"Ue el código debajo para insertar en su sitio.",btnQRCode:"Clic para escanear código QR",btnRotateLeft:"Rotar a la izquierda",btnRotateRight:"Rotar a la derecha",lblSelectMode:"Select view mode please.",frmDownloadPreview:"Preview",frmHowToUse:"How To Use",lblHelpPage1:"Move your finger to flip the book page.",lblHelpPage2:"Zoom in by using gesture or double click on the page.",lblHelpPage3:"Click to view the table of content, bookmarks and share your books via social networks.",lblHelpPage4:"Add bookmarks, use search function and auto flip the book.",lblHelpPage5:"Open the thumbnails to overview all book pages.",TTActionQuiz_PlayAgain:"Do you wanna play it again",TTActionQuiz_Ration:"Your ratio is",frmBookMark:"Marcador",btnFullscreen:"Pantalla completa",btnExitFullscreen:"Salir de pantalla completa",btnMore:"Más",frmPrintall:"Imprimir todas las páginas",frmPrintcurrent:"Imprimir la página actual",frmPrintRange:"Intervalo de impresión",frmPrintexample:"Ejemplo: 2,3,5-10",frmPrintbtn:"impresión",frmaboutcaption:"contacto",frmaboutcontactinformation:"Información de Contacto",frmaboutADDRESS:"Dirección",frmaboutEMAIL:"Email",frmaboutWEBSITE:"Sitio web",frmaboutMOBILE:"Móvil",frmaboutAUTHOR:"Autor",frmaboutDESCRIPTION:"Descripción",frmSearch:"Búsqueda",frmToc:"Tabla de Contenido",btnTableOfContent:"Mostrar Tabla de Contenidos",btnNote:"anotación",lblDescription:"Título",frmLinkLabel:"Enlazar",infNotSupportHtml5:"Su navegador no soporta HTML5.",frmQrcodeCaption:"Escanee el código bidimensional inferior para verlo con el teléfono móvil."}];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{}, "pageAnnos":[[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.336793","y":"0.560523","width":"0.279015","height":"0.024559"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://es.unplag.com/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.192677","y":"0.608382","width":"0.433813","height":"0.024330"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.plagioverificador.com/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.416843","y":"0.632712","width":"0.278131","height":"0.024542"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://plagiarisma.net/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.192677","y":"0.657255","width":"0.291995","height":"0.024346"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://plagiarismdetect.org/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.488788","y":"0.657255","width":"0.340404","height":"0.024346"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://plagiarismdetect.org/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.396944","y":"0.681601","width":"0.346313","height":"0.024542"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.copygator.com/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.192677","y":"0.706144","width":"0.271136","height":"0.024559"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.plagiarism.org/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.469318","y":"0.706144","width":"0.341313","height":"0.024559"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.plagiarism.org/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.192677","y":"0.730703","width":"0.219520","height":"0.023807"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://owl.english.purdue.edu/owl/resource/589/01/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.192677","y":"0.754510","width":"0.539495","height":"0.020278"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://owl.english.purdue.edu/owl/resource/589/01/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.192677","y":"0.774788","width":"0.153384","height":"0.024559"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://turnitin.com/es/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.351566","y":"0.774788","width":"0.274798","height":"0.024559"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://turnitin.com/es/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.192677","y":"0.823154","width":"0.585202","height":"0.024338"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.paperrater.com/plagiarism_checker"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.347475","y":"0.847492","width":"0.324470","height":"0.024552"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.plagium.com/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.337197","y":"0.872044","width":"0.311010","height":"0.037624"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://www.google.com/"}}],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.347071","y":"0.532288","width":"0.313485","height":"0.028382"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.apa.org/about/contact/copyright/index.aspx"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.421768","y":"0.292141","width":"0.314470","height":"0.035376"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://es.jimdo.com/2012/08/30/creative-commons-comparte-tu-propiedad-intelectual-de-manera-segura/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.328763","y":"0.574935","width":"0.125530","height":"0.036618"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://www.iconfinder.com/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.807424","y":"0.611552","width":"0.083864","height":"0.023546"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://co.fotolia.com/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.101768","y":"0.635098","width":"0.145629","height":"0.035376"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.istockphoto.com/es"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.249922","y":"0.635098","width":"0.063790","height":"0.035376"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://foter.com/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.708005","y":"0.670474","width":"0.077727","height":"0.023546"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://www.flickr.com/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.798990","y":"0.670474","width":"0.106187","height":"0.023546"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://co.creativecommons.org/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.101768","y":"0.694020","width":"0.126326","height":"0.035376"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://co.creativecommons.org/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.223674","y":"0.694020","width":"0.100846","height":"0.035376"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://pixabay.com/es/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.327045","y":"0.694020","width":"0.108586","height":"0.035376"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://unsplash.com/"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.254419","y":"0.326650","width":"0.650758","height":"0.022304"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.iso.org/iso/home.html"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.101768","y":"0.348954","width":"0.073063","height":"0.022304"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.iso.org/iso/home.html"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.597273","y":"0.460474","width":"0.307904","height":"0.022304"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://0-www.aenor.es.fama.us.es/aenor/inicio/home/home.asp"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.101768","y":"0.482778","width":"0.470303","height":"0.035376"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://0-www.aenor.es.fama.us.es/aenor/inicio/home/home.asp"}}],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.197033","y":"0.890443","width":"0.647444","height":"-0.019897"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.msnbc.msn.com/id/39625809/ns/world"}}],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.348106","y":"0.871930","width":"0.224621","height":"0.018789"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://www.xxx.xxx/"}}],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.208279","y":"0.811761","width":"0.498490","height":"-0.020603"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://http//elibro.es/finanzas/html"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.208312","y":"0.315676","width":"0.654283","height":"-0.020782"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://repository.javeriana.edu.co/bitstream/10554/3165/1/c"}}],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.208274","y":"0.528512","width":"0.654666","height":"-0.020668"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.dreig.eu/caparazon/2014/04/14/lectura-bimodal"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.208281","y":"0.833306","width":"0.574020","height":"-0.020656"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.youtube.com/watch"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.208293","y":"0.193403","width":"0.632988","height":"-0.020547"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://itunes.apple.com"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.384394","y":"0.292240","width":"0.439506","height":"-0.020511"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://www.facebook.com/mashable"}}],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.191288","y":"0.437320","width":"0.408687","height":"0.035376"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.portal.euromonitor.com/"}}],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.168245","y":"0.505601","width":"0.547715","height":"-0.014470"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.apa.org/about/contact/copyright/index.aspx"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.168245","y":"0.835748","width":"0.530568","height":"-0.014470"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://es.slideshare.net/ivojvodic2000/redaccion-de-la-discusion"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.168245","y":"0.792611","width":"0.594760","height":"-0.014470"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://www.slideshare.net/Programa"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.412298","y":"0.648118","width":"0.428141","height":"-0.014471"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.clker.com/clipart-"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.112689","y":"0.648118","width":"0.148548","height":"-0.014471"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://clker.com"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.168245","y":"0.620029","width":"0.581629","height":"-0.014470"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.copygator.com/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.168245","y":"0.548739","width":"0.286502","height":"-0.014471"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.plagioverificador.com/"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.168245","y":"0.817448","width":"0.563558","height":"-0.014471"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.uchile.cl/portal/informacion-y-bibliotecas/ayudas-y-"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.168245","y":"0.703020","width":"0.566477","height":"-0.014471"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://es.slideshare.net/patto"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.168245","y":"0.329703","width":"0.270341","height":"-0.014471"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://normasapa.net/referencias/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.168245","y":"0.142072","width":"0.692396","height":"-0.014471"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://es.slideshare.net/alfreakm/citacin-y-referenciacin-de-documentos-normas-apa-"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.168245","y":"0.502333","width":"0.427462","height":"-0.014470"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://owl.english.purdue.edu/owl/resource/589/01/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.168245","y":"0.774310","width":"0.421401","height":"-0.014470"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://turnitin.com/es/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.168245","y":"0.659882","width":"0.213270","height":"-0.014470"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.plagium.com/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.453232","y":"0.558542","width":"0.424657","height":"-0.014470"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://pixabay.com/es/signo-"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.168245","y":"0.459147","width":"0.482058","height":"-0.014471"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.paperrater.com/plagiarism"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.168245","y":"0.286565","width":"0.425442","height":"-0.014470"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://normasapa.com/insercion-de-tablas-y-figuras/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.168245","y":"0.243428","width":"0.684154","height":"-0.014470"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://blognisaba.wordpress.com/2011/01/15/el-arte-de-integrar-las-citas-textuales/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.168245","y":"0.200291","width":"0.462361","height":"-0.014471"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.neoscientia.com/plagio-tesis/"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.168245","y":"0.157105","width":"0.539154","height":"-0.014471"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://library.canterbury.ac.nz/services/ref/apa/tables.shtml"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.168245","y":"0.113984","width":"0.679609","height":"-0.014471"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.dgbiblio.unam.mx/index.php/guias-y-consejos-de-busqueda/como-citar"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.168245","y":"0.243428","width":"0.723785","height":"-0.014470"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.uagraria.edu.ec/documentos/docentes/Guia"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.168245","y":"0.200291","width":"0.298119","height":"-0.014471"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://es.unplag.com/"}}],[],[]]}; bookConfig.isFlipPdf=false;
	bookConfig.hideMiniFullscreen=true;
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}
