var _0x4cd5=['libs','stringHelper','base64','title','season','episode','type','getYear','movie','MOVIE','SERIES','convertToSearchQueryString','detailUrl','return','end','getHostFromDetail','mark','httpRequest','cheerio','year','NOT_FOUND','Firefox\x2069','sent','load','text','indexOf','.mvici-right','.big-player','attr','https:','each','player-data','Episode\x20','getHTML','DOMAIN','iframe','push','match','map','embed','hosts','abrupt','stop','OnMoviesFE','cryptoJs','toLowerCase','toString','aloha','post','https://getaz.morphtv.club/source/get','data','parse','checker','stringify','expired','https://getaz.morphtv.club/source/set','emit','length','enumerable','configurable','value','writable','defineProperty','key','prototype','apply','done','resolve','next','throw','Cannot\x20call\x20a\x20class\x20as\x20a\x20function','https://onmovies.se','https://onmovies.se/film/','-season-','/watching.html?ep=','xyzzyx.com','movieInfo','settings','state','searchDetail','wrap','prev'];(function(_0xdcf916,_0x36520b){var _0xff9a10=function(_0x3c6eeb){while(--_0x3c6eeb){_0xdcf916['push'](_0xdcf916['shift']());}};_0xff9a10(++_0x36520b);}(_0x4cd5,0x12f));var _0x2d47=function(_0x292b56,_0x43d811){_0x292b56=_0x292b56-0x0;var _0x2a7510=_0x4cd5[_0x292b56];return _0x2a7510;};var _createClass=function(){function _0x504cc1(_0x228b57,_0x15c7f0){for(var _0x7f8722=0x0;_0x7f8722<_0x15c7f0[_0x2d47('0x0')];_0x7f8722++){var _0x2299f1=_0x15c7f0[_0x7f8722];_0x2299f1[_0x2d47('0x1')]=_0x2299f1['enumerable']||![];_0x2299f1[_0x2d47('0x2')]=!![];if(_0x2d47('0x3')in _0x2299f1)_0x2299f1[_0x2d47('0x4')]=!![];Object[_0x2d47('0x5')](_0x228b57,_0x2299f1[_0x2d47('0x6')],_0x2299f1);}}return function(_0xbbf113,_0x1be5ce,_0x1e20e3){if(_0x1be5ce)_0x504cc1(_0xbbf113[_0x2d47('0x7')],_0x1be5ce);if(_0x1e20e3)_0x504cc1(_0xbbf113,_0x1e20e3);return _0xbbf113;};}();function _asyncToGenerator(_0x7d256b){return function(){var _0x1a4e5a=_0x7d256b[_0x2d47('0x8')](this,arguments);return new Promise(function(_0x848c6c,_0x463436){function _0x25432d(_0x3043fe,_0x3a955e){try{var _0x138b32=_0x1a4e5a[_0x3043fe](_0x3a955e);var _0x5f2f44=_0x138b32[_0x2d47('0x3')];}catch(_0x59b188){_0x463436(_0x59b188);return;}if(_0x138b32[_0x2d47('0x9')]){_0x848c6c(_0x5f2f44);}else{return Promise[_0x2d47('0xa')](_0x5f2f44)['then'](function(_0x788c7b){_0x25432d(_0x2d47('0xb'),_0x788c7b);},function(_0x27beaa){_0x25432d(_0x2d47('0xc'),_0x27beaa);});}}return _0x25432d(_0x2d47('0xb'));});};}function _classCallCheck(_0x420f68,_0x3416d6){if(!(_0x420f68 instanceof _0x3416d6)){throw new TypeError(_0x2d47('0xd'));}}var URL={'DOMAIN':_0x2d47('0xe'),'MOVIE':function MOVIE(_0x263f56){return _0x2d47('0xf')+_0x263f56;},'SERIES':function SERIES(_0x478c0b,_0x4f1dba,_0x130198){return'https://onmovies.se/film/'+_0x478c0b+_0x2d47('0x10')+_0x4f1dba+_0x2d47('0x11')+_0x130198;}};var getDomain=function getDomain(_0x459479){var _0x22aaed=_0x459479['match'](/\/\/([^\/]+)/);if(_0x22aaed==null)return'xyzzyx.com';return _0x22aaed[0x1]!=undefined?_0x22aaed[0x1]:_0x2d47('0x12');};var OnMoviesFE=function(){function _0xbd2672(_0x53b110){_classCallCheck(this,_0xbd2672);this['libs']=_0x53b110['libs'];this[_0x2d47('0x13')]=_0x53b110[_0x2d47('0x13')];this[_0x2d47('0x14')]=_0x53b110[_0x2d47('0x14')];this[_0x2d47('0x15')]={};}_createClass(_0xbd2672,[{'key':_0x2d47('0x16'),'value':function(){var _0x4ff8fc=_asyncToGenerator(regeneratorRuntime['mark'](function _callee(){var _0x550e04,_0x32be75,_0x519fa5,_0x3562ec,_0x4d1999,_0x186579,_0x31d96d,_0x4b858f,_0xaa9001,_0x21ee07,_0x4c6a06,_0x1858cc,_0x52cdf9;return regeneratorRuntime[_0x2d47('0x17')](function _callee$(_0x142a66){while(0x1){switch(_0x142a66[_0x2d47('0x18')]=_0x142a66[_0x2d47('0xb')]){case 0x0:_0x550e04=this[_0x2d47('0x19')],_0x32be75=_0x550e04['httpRequest'],_0x519fa5=_0x550e04['cheerio'],_0x3562ec=_0x550e04[_0x2d47('0x1a')],_0x4d1999=_0x550e04[_0x2d47('0x1b')];_0x186579=this[_0x2d47('0x13')],_0x31d96d=_0x186579[_0x2d47('0x1c')],_0x4b858f=_0x186579['year'],_0xaa9001=_0x186579[_0x2d47('0x1d')],_0x21ee07=_0x186579[_0x2d47('0x1e')],_0x4c6a06=_0x186579[_0x2d47('0x1f')];_0x1858cc=this[_0x2d47('0x20')];_0x52cdf9=![];if(_0x4c6a06==_0x2d47('0x21')){_0x52cdf9=URL[_0x2d47('0x22')](_0x3562ec['convertToSearchQueryString'](_0x31d96d,'-'));}else{_0x52cdf9=URL[_0x2d47('0x23')](_0x3562ec[_0x2d47('0x24')](_0x31d96d,'-'),_0xaa9001,_0x21ee07);}this[_0x2d47('0x15')][_0x2d47('0x25')]=_0x52cdf9;return _0x142a66['abrupt'](_0x2d47('0x26'));case 0x7:case _0x2d47('0x27'):return _0x142a66['stop']();}}},_callee,this);}));function _0x302bb5(){return _0x4ff8fc[_0x2d47('0x8')](this,arguments);}return _0x302bb5;}()},{'key':_0x2d47('0x28'),'value':function(){var _0x185a73=_asyncToGenerator(regeneratorRuntime[_0x2d47('0x29')](function _callee2(){var _0x51c0c6,_0x53c26d,_0x32eb99,_0x2f6ed2,_0x42b10f,_0x578bde,_0x32e58e,_0x3780ef,_0x27546c,_0x582a20,_0x21eefe,_0x26d8e8,_0x27a927,_0x2fd591,_0x3e50ed,_0x4be87a,_0x556600,_0x1a1911,_0x3f6459,_0x39eca4;return regeneratorRuntime[_0x2d47('0x17')](function _callee2$(_0xebe999){while(0x1){switch(_0xebe999['prev']=_0xebe999[_0x2d47('0xb')]){case 0x0:_0x51c0c6=this[_0x2d47('0x19')],_0x53c26d=_0x51c0c6[_0x2d47('0x2a')],_0x32eb99=_0x51c0c6[_0x2d47('0x2b')],_0x2f6ed2=_0x51c0c6['base64'];_0x42b10f=this['movieInfo'],_0x578bde=_0x42b10f[_0x2d47('0x1c')],_0x32e58e=_0x42b10f[_0x2d47('0x2c')],_0x3780ef=_0x42b10f['season'],_0x27546c=_0x42b10f[_0x2d47('0x1e')],_0x582a20=_0x42b10f['type'];if(this[_0x2d47('0x15')][_0x2d47('0x25')]){_0xebe999['next']=0x4;break;}throw new Error(_0x2d47('0x2d'));case 0x4:_0x21eefe=[];_0x26d8e8=this['state'][_0x2d47('0x25')];_0xebe999[_0x2d47('0xb')]=0x8;return _0x53c26d['getHTML'](_0x26d8e8,{'User-Agent':_0x2d47('0x2e')});case 0x8:_0x27a927=_0xebe999[_0x2d47('0x2f')];_0x2fd591=_0x32eb99[_0x2d47('0x30')](_0x27a927);if(!(_0x582a20=='movie')){_0xebe999[_0x2d47('0xb')]=0x12;break;}if(!(_0x2fd591('.mvici-right')[_0x2d47('0x31')]()[_0x2d47('0x32')](_0x32e58e)==-0x1)){_0xebe999['next']=0x12;break;}_0xebe999[_0x2d47('0xb')]=0xe;return _0x53c26d['getHTML'](_0x26d8e8+'-'+_0x32e58e);case 0xe:_0x27a927=_0xebe999[_0x2d47('0x2f')];_0x2fd591=_0x32eb99[_0x2d47('0x30')](_0x27a927);if(!(_0x2fd591(_0x2d47('0x33'))[_0x2d47('0x31')]()['indexOf'](_0x32e58e)==-0x1)){_0xebe999[_0x2d47('0xb')]=0x12;break;}throw new Error(_0x2d47('0x2d'));case 0x12:_0x3e50ed=_0x2fd591(_0x2d47('0x34'))[_0x2d47('0x35')]('data-video');if(_0x3e50ed[_0x2d47('0x32')]('//')==0x0)_0x3e50ed=_0x2d47('0x36')+_0x3e50ed;_0x4be87a=![];_0x2fd591('#episodes-sv-1\x20li\x20a')[_0x2d47('0x37')](function(){var _0x50ce09=_0x2fd591(this)[_0x2d47('0x35')](_0x2d47('0x38'));var _0x4bba1c=_0x2fd591(this)['attr'](_0x2d47('0x1c'));if(_0x582a20=='tv'){if(_0x2d47('0x39')+_0x27546c==_0x4bba1c){_0x4be87a=_0x50ce09;}}else{_0x4be87a=_0x50ce09;}});if(_0x4be87a&&_0x4be87a[_0x2d47('0x32')]('//')==0x0)_0x4be87a=_0x2d47('0x36')+_0x4be87a;_0xebe999[_0x2d47('0xb')]=0x19;return _0x53c26d[_0x2d47('0x3a')](_0x3e50ed,{'Referer':URL[_0x2d47('0x3b')]});case 0x19:_0x27a927=_0xebe999[_0x2d47('0x2f')];_0x2fd591=_0x32eb99['load'](_0x27a927);_0x556600=_0x2fd591(_0x2d47('0x3c'))[_0x2d47('0x35')]('src');_0x1a1911=getDomain(_0x3e50ed);_0x556600='https://'+_0x1a1911+_0x556600;_0xebe999[_0x2d47('0xb')]=0x20;return _0x53c26d[_0x2d47('0x3a')](_0x556600,{'Referer':URL[_0x2d47('0x3b')]});case 0x20:_0x27a927=_0xebe999['sent'];_0x3f6459=[];_0x3f6459[_0x2d47('0x3d')](_0x4be87a);_0x39eca4=_0x27a927[_0x2d47('0x3e')](/sources\:\[{file: '([^']+)/);if(_0x39eca4[0x1]!=undefined)_0x3f6459['push'](_0x39eca4[0x1]);_0x39eca4=_0x27a927[_0x2d47('0x3e')](/window.location = "([^"]+)/);if(_0x39eca4[0x1]!=undefined)_0x3f6459[_0x2d47('0x3d')](_0x39eca4[0x1]);_0x3f6459[_0x2d47('0x3f')](function(_0x10c464){_0x21eefe[_0x2d47('0x3d')]({'provider':{'url':_0x26d8e8,'name':'OnMoviesFE'},'result':{'file':_0x10c464,'label':'embed','type':_0x2d47('0x40')}});});this[_0x2d47('0x15')][_0x2d47('0x41')]=_0x21eefe;return _0xebe999[_0x2d47('0x42')]('return');case 0x2a:case'end':return _0xebe999[_0x2d47('0x43')]();}}},_callee2,this);}));function _0x13517e(){return _0x185a73[_0x2d47('0x8')](this,arguments);}return _0x13517e;}()}]);return _0xbd2672;}();thisSource['function']=function(){var _0x2ccf51=_asyncToGenerator(regeneratorRuntime['mark'](function _callee3(_0x5dce43,_0x2fc3bc,_0x1a8a90){var _0x51abb7,_0x5ad09a,_0x103bc4,_0x10513f,_0x5ae8fe,_0x44c082;return regeneratorRuntime[_0x2d47('0x17')](function _callee3$(_0x598d67){while(0x1){switch(_0x598d67[_0x2d47('0x18')]=_0x598d67[_0x2d47('0xb')]){case 0x0:_0x51abb7=_0x5dce43[_0x2d47('0x2a')];_0x5ad09a=new OnMoviesFE({'libs':_0x5dce43,'movieInfo':_0x2fc3bc,'settings':_0x1a8a90});_0x103bc4={'name_source':_0x2d47('0x44'),'is_link':0x0,'type':_0x2fc3bc[_0x2d47('0x1f')],'season':_0x2fc3bc[_0x2d47('0x1d')],'episode':_0x2fc3bc[_0x2d47('0x1e')],'title':_0x2fc3bc[_0x2d47('0x1c')],'year':_0x2fc3bc['year'],'hash':_0x5dce43[_0x2d47('0x45')]['MD5'](_0x2fc3bc[_0x2d47('0x1c')][_0x2d47('0x46')]()+_0x2fc3bc[_0x2d47('0x1d')][_0x2d47('0x47')]()+_0x2d47('0x48')+_0x2fc3bc[_0x2d47('0x1e')][_0x2d47('0x47')]())[_0x2d47('0x47')]()};_0x598d67[_0x2d47('0xb')]=0x5;return _0x51abb7[_0x2d47('0x49')](_0x2d47('0x4a'),{},_0x103bc4);case 0x5:_0x10513f=_0x598d67['sent'];_0x5ae8fe=void 0x0,_0x44c082=[];try{_0x10513f=_0x10513f[_0x2d47('0x4b')];if(_0x10513f['status']){_0x44c082=JSON[_0x2d47('0x4c')](_0x10513f[_0x2d47('0x41')]);}}catch(_0xf326b9){console['log']('err',_0xf326b9);}if(_0x2fc3bc[_0x2d47('0x4d')]!=undefined)_0x44c082=[];if(!(_0x44c082['length']==0x0)){_0x598d67[_0x2d47('0xb')]=0x16;break;}_0x598d67[_0x2d47('0xb')]=0xc;return _0x5ad09a[_0x2d47('0x16')]();case 0xc:_0x598d67['next']=0xe;return _0x5ad09a[_0x2d47('0x28')]();case 0xe:_0x44c082=_0x5ad09a[_0x2d47('0x15')]['hosts'];if(!(_0x2fc3bc[_0x2d47('0x4d')]!=undefined)){_0x598d67[_0x2d47('0xb')]=0x11;break;}return _0x598d67[_0x2d47('0x42')]('return',_0x44c082);case 0x11:if(!(_0x44c082[_0x2d47('0x0')]>0x0)){_0x598d67[_0x2d47('0xb')]=0x16;break;}_0x103bc4[_0x2d47('0x41')]=JSON[_0x2d47('0x4e')](_0x44c082);_0x103bc4[_0x2d47('0x4f')]=0x2a30;_0x598d67['next']=0x16;return _0x51abb7[_0x2d47('0x49')](_0x2d47('0x50'),{},_0x103bc4);case 0x16:if(_0x2fc3bc['ss']!=undefined){_0x2fc3bc['ss']['to'](_0x2fc3bc['cs']['id'])[_0x2d47('0x51')](_0x2fc3bc['c'],_0x44c082);}return _0x598d67[_0x2d47('0x42')](_0x2d47('0x26'),_0x44c082);case 0x18:case _0x2d47('0x27'):return _0x598d67[_0x2d47('0x43')]();}}},_callee3,undefined);}));return function(_0x15c5fb,_0x4eca7a,_0x2230dc){return _0x2ccf51[_0x2d47('0x8')](this,arguments);};}();thisSource['testing']=OnMoviesFE;