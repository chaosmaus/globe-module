const _0x5c950d=_0x285a;function _0x4a08(){const _0x57f7c5=['21GIlgXp','appendChild','innerHTML','Group','Mesh','body','clientY','domElement','clientX','mouseup','SphereGeometry','3GcVptf','mousemove','AdditiveBlending','3288660QBABID','PerspectiveCamera','#atmosphereFragment','scale','position','1531665onjqRT','rotation','setPixelRatio','Scene','6999788MOcNFh','querySelector','ShaderMaterial','2308366YlDXxc','add','10156616AyCgUC','46290nbyPHT','devicePixelRatio','https://uploads-ssl.webflow.com/630aa08824bca4561dfddb1b/6330f699e5a2543ce21755dd_earth-texture.jpg','TextureLoader','297051Bqfrga'];_0x4a08=function(){return _0x57f7c5;};return _0x4a08();}(function(_0x702ebc,_0x39a23f){const _0x1a12be=_0x285a,_0x31be33=_0x702ebc();while(!![]){try{const _0x20c62a=-parseInt(_0x1a12be(0x1ae))/0x1+-parseInt(_0x1a12be(0x1a7))/0x2*(-parseInt(_0x1a12be(0x1ba))/0x3)+-parseInt(_0x1a12be(0x1a4))/0x4+parseInt(_0x1a12be(0x1bd))/0x5+parseInt(_0x1a12be(0x1aa))/0x6*(parseInt(_0x1a12be(0x1af))/0x7)+parseInt(_0x1a12be(0x1a9))/0x8+-parseInt(_0x1a12be(0x1a0))/0x9;if(_0x20c62a===_0x39a23f)break;else _0x31be33['push'](_0x31be33['shift']());}catch(_0x36aab8){_0x31be33['push'](_0x31be33['shift']());}}}(_0x4a08,0xd8a9e));import*as _0x2e17a5 from'https://unpkg.com/three@0.144.0/build/three.module.js';let vertexShader=document['querySelector']('#vertex')[_0x5c950d(0x1b1)],fragmentShader=document[_0x5c950d(0x1a5)]('#fragment')[_0x5c950d(0x1b1)],atmosphereFragmentShader=document[_0x5c950d(0x1a5)](_0x5c950d(0x1bf))[_0x5c950d(0x1b1)],atmosphereVertexShader=document['querySelector']('#atmosphereVertex')['innerHTML'];const scene=new _0x2e17a5[(_0x5c950d(0x1a3))](),camera=new _0x2e17a5[(_0x5c950d(0x1be))](0x4b,innerWidth/ innerHeight,0.1,0x3e8),renderer=new _0x2e17a5['WebGLRenderer']({'antialias':!0x0,'alpha':!0x0}),sphere=(renderer['setSize'](innerWidth-0x14,innerHeight-0x14),renderer[_0x5c950d(0x1a2)](window[_0x5c950d(0x1ab)]),document[_0x5c950d(0x1b4)][_0x5c950d(0x1b0)](renderer[_0x5c950d(0x1b6)]),new _0x2e17a5[(_0x5c950d(0x1b3))](new _0x2e17a5[(_0x5c950d(0x1b9))](0x5,0x32,0x32),new _0x2e17a5[(_0x5c950d(0x1a6))]({'vertexShader':vertexShader,'fragmentShader':fragmentShader,'uniforms':{'globeTexture':{'value':new _0x2e17a5[(_0x5c950d(0x1ad))]()['load'](_0x5c950d(0x1ac))}}}))),atmosphere=new _0x2e17a5['Mesh'](new _0x2e17a5[(_0x5c950d(0x1b9))](0x5,0x32,0x32),new _0x2e17a5['ShaderMaterial']({'vertexShader':atmosphereVertexShader,'fragmentShader':atmosphereFragmentShader,'blending':_0x2e17a5[_0x5c950d(0x1bc)],'side':_0x2e17a5['BackSide']})),group=(atmosphere[_0x5c950d(0x19e)]['set'](1.2,1.2,1.2),scene['add'](atmosphere),new _0x2e17a5[(_0x5c950d(0x1b2))]()),mouse=(group[_0x5c950d(0x1a8)](sphere),scene[_0x5c950d(0x1a8)](group),camera[_0x5c950d(0x19f)]['z']=0xf,{'x':0x0,'y':0x0});let rotationRate=0.001;function _0x285a(_0x2af1ce,_0x5adced){const _0x4a0810=_0x4a08();return _0x285a=function(_0x285ac8,_0xce9029){_0x285ac8=_0x285ac8-0x19e;let _0x248be4=_0x4a0810[_0x285ac8];return _0x248be4;},_0x285a(_0x2af1ce,_0x5adced);}function animate(){const _0x5b0a1f=_0x5c950d;requestAnimationFrame(animate),renderer['render'](scene,camera),sphere[_0x5b0a1f(0x1a1)]['y']+=rotationRate,gsap['to'](group[_0x5b0a1f(0x1a1)],{'x':-mouse['y'],'y':+mouse['x'],'duration':0x2});}addEventListener('mousedown',()=>{const _0x5dce21=_0x5c950d;rotationRate=0x0,addEventListener(_0x5dce21(0x1bb),()=>{const _0x199588=_0x5dce21;mouse['x']=event[_0x199588(0x1b7)]/ innerWidth*0x2-0x1,mouse['y']=-event[_0x199588(0x1b5)]/ innerHeight*0x2+0x1;});}),addEventListener(_0x5c950d(0x1b8),()=>{const _0x412300=_0x5c950d;rotationRate=0.001;let _0xeb3085=event[_0x412300(0x1b7)]/ innerWidth*0x2-0x1,_0x2c2614=-event[_0x412300(0x1b5)]/ innerHeight*0x2+0x1;addEventListener(_0x412300(0x1bb),()=>{mouse['x']=_0xeb3085,mouse['y']=_0x2c2614;});}),animate();
