var _0x4710=['data','find','first','attr','href','match','replace','trim','shallowCompare','catch','log','state','detailUrl','abrupt','return','stop','getHostFromDetail','httpRequest','cheerio','base64','NOT_FOUND','/series/','/episode/','-season-','-episode-','#player2\x20>\x20div','src','indexOf','http:','https:','push','map','iframe','embed','arrSources\x20=\x20[','hollymovies','file','direct','end','all','function','HollyMovies','title','is_link','hosts','testing','length','enumerable','configurable','value','defineProperty','key','apply','done','resolve','next','throw','Cannot\x20call\x20a\x20class\x20as\x20a\x20function','http://www.novamovie.net/','http://www.novamovie.net/?zc=search&s=','Mozilla/5.0\x20(X11;\x20Linux\x20x86_64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Ubuntu\x20Chromium/66.0.3359.181\x20Chrome/66.0.3359.181\x20Safari/537.36','libs','movieInfo','settings','mark','wrap','prev','year','season','episode','type','movie','SEARCH','convertToSearchQueryString','get','HEADERS','sent','load'];(function(_0x37122c,_0x4ba5e3){var _0x3f1640=function(_0xf97aa6){while(--_0xf97aa6){_0x37122c['push'](_0x37122c['shift']());}};_0x3f1640(++_0x4ba5e3);}(_0x4710,0xca));var _0x24a8=function(_0x11895d,_0x2ad83c){_0x11895d=_0x11895d-0x0;var _0x441625=_0x4710[_0x11895d];return _0x441625;};var _createClass=function(){function _0x17e18e(_0x24bdad,_0x22d4d1){for(var _0x1c8562=0x0;_0x1c8562<_0x22d4d1[_0x24a8('0x0')];_0x1c8562++){var _0x846403=_0x22d4d1[_0x1c8562];_0x846403[_0x24a8('0x1')]=_0x846403[_0x24a8('0x1')]||![];_0x846403[_0x24a8('0x2')]=!![];if(_0x24a8('0x3')in _0x846403)_0x846403['writable']=!![];Object[_0x24a8('0x4')](_0x24bdad,_0x846403[_0x24a8('0x5')],_0x846403);}}return function(_0x3ed0e5,_0x4a30fc,_0x51b7bf){if(_0x4a30fc)_0x17e18e(_0x3ed0e5['prototype'],_0x4a30fc);if(_0x51b7bf)_0x17e18e(_0x3ed0e5,_0x51b7bf);return _0x3ed0e5;};}();function _asyncToGenerator(_0x1de1c1){return function(){var _0x54a0c3=_0x1de1c1[_0x24a8('0x6')](this,arguments);return new Promise(function(_0x3c2b29,_0x517f70){function _0x3c7567(_0x2c1986,_0x403af6){try{var _0xb7b3a9=_0x54a0c3[_0x2c1986](_0x403af6);var _0x25b2ed=_0xb7b3a9[_0x24a8('0x3')];}catch(_0x40ca14){_0x517f70(_0x40ca14);return;}if(_0xb7b3a9[_0x24a8('0x7')]){_0x3c2b29(_0x25b2ed);}else{return Promise[_0x24a8('0x8')](_0x25b2ed)['then'](function(_0x41d692){_0x3c7567(_0x24a8('0x9'),_0x41d692);},function(_0x506696){_0x3c7567(_0x24a8('0xa'),_0x506696);});}}return _0x3c7567(_0x24a8('0x9'));});};}function _classCallCheck(_0x4ce826,_0x2c9fa4){if(!(_0x4ce826 instanceof _0x2c9fa4)){throw new TypeError(_0x24a8('0xb'));}}var URL={'DOMAIN':_0x24a8('0xc'),'SEARCH':function SEARCH(_0x3a674b){return _0x24a8('0xd')+_0x3a674b;},'HEADERS':function HEADERS(){return{'User-Agent':_0x24a8('0xe')};}};var HollyMovies=function(){function _0x54e419(_0x2ca518){_classCallCheck(this,_0x54e419);this['libs']=_0x2ca518[_0x24a8('0xf')];this[_0x24a8('0x10')]=_0x2ca518['movieInfo'];this['settings']=_0x2ca518[_0x24a8('0x11')];this['state']={};}_createClass(_0x54e419,[{'key':'searchDetail','value':function(){var _0x23b641=_asyncToGenerator(regeneratorRuntime[_0x24a8('0x12')](function _callee(){var _0x5726ee,_0x958cc2,_0x518f7b,_0x5c0993,_0x8ed70,_0x3d2a70,_0x425144,_0x209756,_0x2086c8,_0x1f0f5c,_0x1eaa69,_0x58da6f,_0x362f6f,_0x19edf0,_0x142616,_0x1b193b;return regeneratorRuntime[_0x24a8('0x13')](function _callee$(_0x2c807b){while(0x1){switch(_0x2c807b[_0x24a8('0x14')]=_0x2c807b[_0x24a8('0x9')]){case 0x0:_0x5726ee=this[_0x24a8('0xf')],_0x958cc2=_0x5726ee['httpRequest'],_0x518f7b=_0x5726ee['cheerio'],_0x5c0993=_0x5726ee['stringHelper'],_0x8ed70=_0x5726ee['base64'];_0x3d2a70=this[_0x24a8('0x10')],_0x425144=_0x3d2a70['title'],_0x209756=_0x3d2a70[_0x24a8('0x15')],_0x2086c8=_0x3d2a70[_0x24a8('0x16')],_0x1f0f5c=_0x3d2a70[_0x24a8('0x17')],_0x1eaa69=_0x3d2a70[_0x24a8('0x18')];_0x58da6f=![];_0x362f6f='';if(_0x1eaa69==_0x24a8('0x19')){_0x362f6f=URL[_0x24a8('0x1a')](_0x5c0993[_0x24a8('0x1b')](_0x425144,'+'))+('+'+_0x209756);}else{_0x362f6f=URL[_0x24a8('0x1a')](_0x5c0993[_0x24a8('0x1b')](_0x425144,'+'))+('+season+'+_0x2086c8);}_0x2c807b[_0x24a8('0x14')]=0x5;_0x2c807b['next']=0x8;return _0x958cc2[_0x24a8('0x1c')](_0x362f6f,URL[_0x24a8('0x1d')]());case 0x8:_0x19edf0=_0x2c807b[_0x24a8('0x1e')];_0x142616=_0x518f7b[_0x24a8('0x1f')](_0x19edf0[_0x24a8('0x20')]);_0x1b193b=_0x142616('.movies-list\x20.ml-item');_0x1b193b['each'](function(){var _0x40f294=_0x142616(this)[_0x24a8('0x21')]('a')[_0x24a8('0x22')]()[_0x24a8('0x23')](_0x24a8('0x24'));var _0x42d78e=_0x142616(this)[_0x24a8('0x21')]('a')[_0x24a8('0x22')]()['attr']('oldtitle');var _0x3a4605=_0x42d78e[_0x24a8('0x25')](/\(([0-9]+)\)/i);_0x3a4605=_0x3a4605!=null?+_0x3a4605[0x1]:0x0;var _0x498292=_0x42d78e['match'](/season *([0-9]+)/i);_0x498292=_0x498292!=null?+_0x498292[0x1]:![];_0x42d78e=_0x42d78e[_0x24a8('0x26')](/\([0-9]+\)/i,'')[_0x24a8('0x27')]();_0x42d78e=_0x42d78e['replace'](/ *season *[0-9]+/i,'')[_0x24a8('0x27')]();if(_0x5c0993[_0x24a8('0x28')](_0x425144,_0x42d78e)){if(_0x1eaa69==_0x24a8('0x19')&&_0x498292==![]&&_0x3a4605==_0x209756){_0x58da6f=_0x40f294;return;}else if(_0x1eaa69=='tv'&&_0x498292==_0x2086c8){_0x58da6f=_0x40f294;return;}}});_0x2c807b[_0x24a8('0x9')]=0x11;break;case 0xe:_0x2c807b[_0x24a8('0x14')]=0xe;_0x2c807b['t0']=_0x2c807b[_0x24a8('0x29')](0x5);console[_0x24a8('0x2a')](String(_0x2c807b['t0']));case 0x11:this[_0x24a8('0x2b')][_0x24a8('0x2c')]=_0x58da6f;return _0x2c807b[_0x24a8('0x2d')](_0x24a8('0x2e'));case 0x13:case'end':return _0x2c807b[_0x24a8('0x2f')]();}}},_callee,this,[[0x5,0xe]]);}));function _0x130b11(){return _0x23b641['apply'](this,arguments);}return _0x130b11;}()},{'key':_0x24a8('0x30'),'value':function(){var _0x455b70=_asyncToGenerator(regeneratorRuntime[_0x24a8('0x12')](function _callee3(){var _0x264269,_0x1da223,_0x2b5abd,_0x415664,_0x48b2a1,_0x53da2e,_0x56093a,_0x62ce9f,_0x26e2c9,_0x17cb11,_0xaa0b8,_0x42472a,_0xdc832e,_0x928d27,_0x5713bb;return regeneratorRuntime['wrap'](function _callee3$(_0x6726f2){while(0x1){switch(_0x6726f2[_0x24a8('0x14')]=_0x6726f2[_0x24a8('0x9')]){case 0x0:_0x264269=this['libs'],_0x1da223=_0x264269[_0x24a8('0x31')],_0x2b5abd=_0x264269[_0x24a8('0x32')],_0x415664=_0x264269[_0x24a8('0x33')];_0x48b2a1=this[_0x24a8('0x10')],_0x53da2e=_0x48b2a1[_0x24a8('0x18')],_0x56093a=_0x48b2a1['episode'],_0x62ce9f=_0x48b2a1[_0x24a8('0x16')];if(this['state'][_0x24a8('0x2c')]){_0x6726f2[_0x24a8('0x9')]=0x4;break;}throw new Error(_0x24a8('0x34'));case 0x4:_0x26e2c9=[];_0x17cb11=[];_0xaa0b8=this[_0x24a8('0x2b')][_0x24a8('0x2c')];if(_0x53da2e=='tv'){_0xaa0b8=_0xaa0b8[_0x24a8('0x26')](_0x24a8('0x35'),_0x24a8('0x36'));_0xaa0b8=_0xaa0b8['replace'](/-season-[0-9]+\//i,_0x24a8('0x37')+_0x62ce9f+_0x24a8('0x38')+_0x56093a+'/');}_0x6726f2['next']=0xa;return _0x1da223[_0x24a8('0x1c')](_0xaa0b8,URL[_0x24a8('0x1d')]());case 0xa:_0x42472a=_0x6726f2[_0x24a8('0x1e')];_0xdc832e=_0x2b5abd[_0x24a8('0x1f')](_0x42472a[_0x24a8('0x20')]);_0x928d27=_0xdc832e(_0x24a8('0x39'));_0x928d27['each'](function(){var _0xa9c370=_0xdc832e(this)[_0x24a8('0x21')]('iframe')[_0x24a8('0x23')](_0x24a8('0x3a'));if(_0xa9c370!=undefined){if(_0xa9c370[_0x24a8('0x3b')](_0x24a8('0x3c'))==-0x1&&_0xa9c370['indexOf'](_0x24a8('0x3d'))==-0x1){_0xa9c370=_0x24a8('0x3c')+_0xa9c370;}_0x17cb11[_0x24a8('0x3e')](_0xa9c370);}});_0x5713bb=_0x17cb11[_0x24a8('0x3f')](function(){var _0x7115ef=_asyncToGenerator(regeneratorRuntime[_0x24a8('0x12')](function _callee2(_0x2e84b1){var _0x34528f,_0x40928c,_0x5c727f,_0x294fd5,_0xf8ef2b,_0x2a29b7,_0x1be460;return regeneratorRuntime[_0x24a8('0x13')](function _callee2$(_0x4c74c7){while(0x1){switch(_0x4c74c7[_0x24a8('0x14')]=_0x4c74c7[_0x24a8('0x9')]){case 0x0:_0x34528f=[];_0x40928c={};_0x4c74c7[_0x24a8('0x14')]=0x2;_0x4c74c7[_0x24a8('0x9')]=0x5;return _0x1da223['getCloudflare'](_0x2e84b1,URL['HEADERS']());case 0x5:_0x40928c=_0x4c74c7[_0x24a8('0x1e')];_0x4c74c7['next']=0xa;break;case 0x8:_0x4c74c7[_0x24a8('0x14')]=0x8;_0x4c74c7['t0']=_0x4c74c7[_0x24a8('0x29')](0x2);case 0xa:if(_0x40928c!==undefined&&_0x40928c[_0x24a8('0x20')]!==undefined){_0x5c727f=_0x40928c['data'];_0x294fd5=_0x5c727f['match'](/sources\: *\[([^\]]+)/i);if(_0x294fd5==null){_0xf8ef2b=_0x2b5abd[_0x24a8('0x1f')](_0x5c727f);_0x2a29b7=_0xf8ef2b(_0x24a8('0x40'))[_0x24a8('0x23')](_0x24a8('0x3a'));_0x2a29b7&&_0x26e2c9[_0x24a8('0x3e')]({'provider':{'url':_0xaa0b8,'name':'hollymovies'},'result':{'file':_0x2a29b7,'label':_0x24a8('0x41'),'type':_0x24a8('0x41')}});}else{_0x294fd5=_0x294fd5!=null?_0x294fd5[0x1]:'';eval(_0x24a8('0x42')+_0x294fd5+']');for(_0x1be460 in _0x34528f){if(_0x34528f[_0x1be460]['file']['indexOf']('google')==-0x1){_0x34528f[_0x1be460]['file']&&_0x26e2c9['push']({'provider':{'url':_0xaa0b8,'name':_0x24a8('0x43')},'result':{'file':_0x34528f[_0x1be460][_0x24a8('0x44')],'label':_0x24a8('0x41'),'type':_0x24a8('0x45')}});}else{_0x34528f[_0x1be460][_0x24a8('0x44')]&&_0x26e2c9[_0x24a8('0x3e')]({'provider':{'url':_0xaa0b8,'name':_0x24a8('0x43')},'result':{'file':_0x34528f[_0x1be460][_0x24a8('0x44')],'label':_0x24a8('0x41'),'type':_0x24a8('0x41')}});}}}}case 0xb:case _0x24a8('0x46'):return _0x4c74c7[_0x24a8('0x2f')]();}}},_callee2,this,[[0x2,0x8]]);}));return function(_0x28a680){return _0x7115ef[_0x24a8('0x6')](this,arguments);};}());_0x6726f2[_0x24a8('0x9')]=0x11;return Promise[_0x24a8('0x47')](_0x5713bb);case 0x11:this[_0x24a8('0x2b')]['hosts']=_0x26e2c9;return _0x6726f2[_0x24a8('0x2d')](_0x24a8('0x2e'));case 0x13:case'end':return _0x6726f2[_0x24a8('0x2f')]();}}},_callee3,this);}));function _0xcb4af0(){return _0x455b70[_0x24a8('0x6')](this,arguments);}return _0xcb4af0;}()}]);return _0x54e419;}();thisSource[_0x24a8('0x48')]=function(){var _0x34a476=_asyncToGenerator(regeneratorRuntime[_0x24a8('0x12')](function _callee4(_0x14ff4f,_0xb4a844,_0x321251){var _0x6e122e,_0x1fc5e5,_0x53aecc;return regeneratorRuntime[_0x24a8('0x13')](function _callee4$(_0x191b9c){while(0x1){switch(_0x191b9c['prev']=_0x191b9c[_0x24a8('0x9')]){case 0x0:_0x6e122e=_0x14ff4f[_0x24a8('0x31')];_0x1fc5e5=new HollyMovies({'libs':_0x14ff4f,'movieInfo':_0xb4a844,'settings':_0x321251});_0x53aecc={'name_source':_0x24a8('0x49'),'is_link':0x0,'type':_0xb4a844[_0x24a8('0x18')],'season':_0xb4a844[_0x24a8('0x16')],'episode':_0xb4a844[_0x24a8('0x17')],'title':_0xb4a844[_0x24a8('0x4a')],'year':_0xb4a844[_0x24a8('0x15')]};_0x191b9c[_0x24a8('0x9')]=0x5;return _0x1fc5e5['searchDetail']();case 0x5:if(!_0x1fc5e5[_0x24a8('0x2b')][_0x24a8('0x2c')]){_0x53aecc[_0x24a8('0x4b')]=0x0;}else{_0x53aecc[_0x24a8('0x4b')]=0x1;}_0x191b9c[_0x24a8('0x9')]=0x8;return _0x1fc5e5['getHostFromDetail']();case 0x8:if(_0x1fc5e5[_0x24a8('0x2b')][_0x24a8('0x4c')][_0x24a8('0x0')]==0x0){_0x53aecc[_0x24a8('0x4b')]=0x0;}else{_0x53aecc[_0x24a8('0x4b')]=0x1;}return _0x191b9c[_0x24a8('0x2d')](_0x24a8('0x2e'),_0x1fc5e5[_0x24a8('0x2b')][_0x24a8('0x4c')]);case 0xa:case _0x24a8('0x46'):return _0x191b9c['stop']();}}},_callee4,undefined);}));return function(_0x43a7ba,_0x139df5,_0x26bde0){return _0x34a476['apply'](this,arguments);};}();thisSource[_0x24a8('0x4d')]=HollyMovies;