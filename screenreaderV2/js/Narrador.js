jQuery(function($){ initTooltips(); $("body").on("subform-row-add", initTooltips); function initTooltips (event, container) { container = container || document;$(container).find(".hasTooltip").tooltip({"html": true,"container": "body"});} });
window.soundManager.url = '/Style Library/screenreaderV2/js/soundmanager2.js';
window.soundManager.debugMode = false;  
window.soundManager.defaultOptions.volume = 80;
var screenReaderConfigOptions = {	baseURI: 'http://192.168.20.166:9930/',
	token: '077fe86b87a1a25cba7eaec8005a7472',
	langCode: 'es-ES',
	chunkLength: 200,
	screenReaderVolume: '80',
	screenReaderVoiceSpeed: 'normal',
	position: 'bottomleft',
	scrolling: 'fixed',
	targetAppendto: 'html',
	targetAppendMode: 'bottom',
	preload: 1,
	autoBackgroundColor: 1,
	readPage: 1,
	readChildNodes: 1,
	ieHighContrast: 0,
	ieHighContrastAdvanced: 0,
	selectedStorage: 'session',
	gtranslateIntegration: 1,
	readElementsHovering: 0,
	elementsHoveringSelector: 'p',
	selectMainpageareaText: 1,
	excludeScripts: 1,
	readImages: 0,
	readImagesAttribute: 'alt',
	readImagesOrdering: 'before',
	readImagesHovering: 0,
	mainpageSelector: 'body',
	showlabel: 1,
	labeltext: 'Accesibilidad',
	screenreaderIcon: 'wheelchair',
	screenreader: 1,
	highcontrast: 0,
	highcontrastAlternate: 0,
	colorHue: 180,
	colorBrightness: 4,
	rootTarget: 0,
	dyslexicFont: 1,
	grayHues: 1,
	spacingSize: 0,
	spacingSizeMin: 0,
	spacingSizeMax: 0,
	bigCursor: 0,
	fontsizeMinimizedToolbar: 0,
	fontsize: 0,
	fontsizeDefault: 150,
	fontsizeMin: 50,
	fontsizeMax: 200,
	fontsizeSelector: '',
	fontSizeHeadersIncrement: 20,
	toolbarBgcolor: '#eeeeee',
	template: 'elegant.css',
	templateOrientation: 'Horizontal',
	accesskey_play: '',
	accesskey_pause: '',
	accesskey_stop: '',
	accesskey_increase: '',
	accesskey_decrease: '',
	accesskey_reset: '',
	accesskey_highcontrast: '',
	accesskey_highcontrast2: '',
	accesskey_highcontrast3: '',
	accesskey_dyslexic: '',
	accesskey_grayhues: '',
	accesskey_spacingsize_increase: '',
	accesskey_spacingsize_decrease: '',
	accesskey_bigcursor: '',
	accesskey_skiptocontents: '',
	accesskey_minimized: '',
	volume_accesskeys: 1,
	readerEngine: 'proxy_responsive',
	useMobileReaderEngine: 0,
	mobileReaderEngine: 'proxy_responsive',
	proxyResponsiveApikey: 'YkiNlVQr',
	hideOnMobile: 0,
	useMinimizedToolbar: 1,
	statusMinimizedToolbar: 'closed',
	minimizedToolbarOnlyMobile: 0,
	showSkipToContents: 0,
	skipToContentsSelector: 'footer',
	removeLinksTarget: 1,
	resetButtonBehavior: 'all'
};
	