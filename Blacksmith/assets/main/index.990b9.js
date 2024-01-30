window.__require=function t(e,r,o){function n(s,c){if(!r[s]){if(!e[s]){var p=s.split("/");if(p=p[p.length-1],!e[p]){var a="function"==typeof __require&&__require;if(!c&&a)return a(p,!0);if(i)return i(p,!0);throw new Error("Cannot find module '"+s+"'")}s=p}var l=r[s]={exports:{}};e[s][0].call(l.exports,function(t){return n(e[s][1][t]||t)},l,l.exports,t,e,r,o)}return r[s].exports}for(var i="function"==typeof __require&&__require,s=0;s<o.length;s++)n(o[s]);return n}({Game:[function(t,e,r){"use strict";cc._RF.push(e,"578fbFojjFKHZQ1zwqUhqxy","Game");var o,n=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__decorate||function(t,e,r,o){var n,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,o);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(s=(i<3?n(s):i>3?n(e,r,s):n(e,r))||s);return i>3&&s&&Object.defineProperty(e,r,s),s};Object.defineProperty(r,"__esModule",{value:!0});var s=t("./Knife"),c=cc._decorator,p=c.ccclass,a=c.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.addBtn1=null,e.subBtn1=null,e.label1=null,e.addBtn2=null,e.subBtn2=null,e.label2=null,e.addBtn3=null,e.subBtn3=null,e.label3=null,e.knife=null,e.touchNode=null,e.buyBtn=null,e.anim=null,e.levels=[100,200,300,400],e.curLevel=0,e.tian=0,e.ger=0,e}return n(e,t),e.prototype.start=function(){var t=this.touchNode;t.on(cc.Node.EventType.TOUCH_START,this.touch,this),t.on(cc.Node.EventType.TOUCH_MOVE,this.touch,this),this.label1.string=this.levels[this.curLevel]+""},e.prototype.touch=function(t){var e=this.touchNode.convertToNodeSpaceAR(t.getLocation());this.knife.rap(e)},e.prototype.reset=function(){this.anim.play("Idle"),this.knife.init(),this.anim.node.opacity=0},e.prototype.buy=function(){this.reset(),this.anim.node.opacity=255},e.prototype.play=function(){this.anim.play("Anim1")},e.prototype.upLevel=function(){this.curLevel+=1,this.curLevel>=this.levels.length&&(this.curLevel=this.levels.length-1),this.label1.string=this.levels[this.curLevel]+""},e.prototype.dnLevel=function(){this.curLevel-=1,this.curLevel<=0&&(this.curLevel=0),this.label1.string=this.levels[this.curLevel]+""},e.prototype.addTian=function(){this.tian+=1,this.tian>=5&&(this.tian=5),this.label2.string=this.tian+""},e.prototype.subTian=function(){this.tian-=1,this.tian<=0&&(this.tian=0),this.label2.string=this.tian+""},e.prototype.addGer=function(){this.ger+=1,this.ger>=5&&(this.ger=5),this.label3.string=this.ger+""},e.prototype.subGer=function(){this.ger-=1,this.ger<=0&&(this.ger=0),this.label3.string=this.ger+""},i([a(cc.Button)],e.prototype,"addBtn1",void 0),i([a(cc.Button)],e.prototype,"subBtn1",void 0),i([a(cc.Label)],e.prototype,"label1",void 0),i([a(cc.Button)],e.prototype,"addBtn2",void 0),i([a(cc.Button)],e.prototype,"subBtn2",void 0),i([a(cc.Label)],e.prototype,"label2",void 0),i([a(cc.Button)],e.prototype,"addBtn3",void 0),i([a(cc.Button)],e.prototype,"subBtn3",void 0),i([a(cc.Label)],e.prototype,"label3",void 0),i([a(s.default)],e.prototype,"knife",void 0),i([a(cc.Node)],e.prototype,"touchNode",void 0),i([a(cc.Button)],e.prototype,"buyBtn",void 0),i([a(cc.Animation)],e.prototype,"anim",void 0),i([p],e)}(cc.Component);r.default=l,cc._RF.pop()},{"./Knife":"Knife"}],Knife:[function(t,e,r){"use strict";cc._RF.push(e,"083a6B6PklKxYAT8OvOfQ1A","Knife");var o,n=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__decorate||function(t,e,r,o){var n,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,o);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(s=(i<3?n(s):i>3?n(e,r,s):n(e,r))||s);return i>3&&s&&Object.defineProperty(e,r,s),s};Object.defineProperty(r,"__esModule",{value:!0});var s=t("./PolygonMask"),c=cc._decorator,p=c.ccclass,a=c.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.mask=null,e.verts=[],e}return n(e,t),e.prototype.start=function(){window.aa=this},e.prototype.init=function(){for(var t=[],e=0,r=0;r<2;r++)for(var o=0;o<=10;o++){var n=cc.v2(0==r?50:-50,0);n.y=0==r?30*o-150:30*(10-o)-150,t.push(n),this.mask.vertexes[e]=n,e+=1}this.verts=t,this.reset()},e.prototype.reset=function(){for(var t=[],e=0;e<2;e++)for(var r=0;r<=10;r++){var o=cc.v2(0==e?50:-50,0);o.y=0==e?30*r-150:30*(10-r)-150,t.push(o)}this.verts=t,this.mask.vertexes=this.verts},e.prototype.rap=function(t){var e=this;this.verts.forEach(function(r,o){var n=cc.Vec2.distance(t,r);if(!(n<.01)){var i=t.sub(r).normalize(),s=10-n/10,c=(10-n/10)/10;if(!(s<5)){var p=r.sub(cc.v2(i.x*s,i.y*c));r.x>0&&p.x<5&&(p.x=r.x),r.x<0&&p.x>-5&&(p.x=r.x),r.x>0&&p.x>150&&(p.x=r.x),r.x<0&&p.x<-150&&(p.x=r.x),p.y<-150&&(p.y=-150),p.y>150&&(p.y=150),0!=o&&o!=e.verts.length-1||(p.y=r.y),e.verts[o]=p}}}),this.mask.vertexes=this.verts},i([a(s.default)],e.prototype,"mask",void 0),i([p],e)}(cc.Component);r.default=l,cc._RF.pop()},{"./PolygonMask":"PolygonMask"}],PolygonMask:[function(t,e,r){"use strict";cc._RF.push(e,"b37168l0VBBzJcDepXWWro5","PolygonMask");var o,n=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__decorate||function(t,e,r,o){var n,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,o);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(s=(i<3?n(s):i>3?n(e,r,s):n(e,r))||s);return i>3&&s&&Object.defineProperty(e,r,s),s};Object.defineProperty(r,"__esModule",{value:!0});var s=cc.gfx,c=cc._decorator,p=c.ccclass,a=c.property,l=c.executeInEditMode,u=c.requireComponent,h=[cc.v2(-50,-50),cc.v2(50,-50),cc.v2(50,50),cc.v2(-50,50)],f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._editing=!1,e._offset=cc.v2(0,0),e._spriteFrame=null,e._vertexes=h,e._meshCache=null,e.renderer=null,e.mesh=null,e.texture=null,e}return n(e,t),Object.defineProperty(e.prototype,"editing",{get:function(){return this._editing},set:function(t){this._editing=t,this._applyVertexes()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"offset",{get:function(){return this._offset},set:function(t){this._offset=t,this.editing&&this._applyVertexes()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"spriteFrame",{get:function(){return this._spriteFrame},set:function(t){this._spriteFrame=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vertexes",{get:function(){return this._vertexes},set:function(t){this._vertexes=t,this._updateMesh(),this._applyVertexes()},enumerable:!1,configurable:!0}),e.prototype.start=function(){this._meshCache={},this._updateMesh();var t=this.node.getComponent(cc.MeshRenderer);t.mesh=null,this.renderer=t;var e=cc.MaterialVariant.createWithBuiltin("unlit",this).material;t.setMaterial(0,e),this._applySpriteFrame(),this._applyVertexes()},e.prototype._updateMesh=function(){var t=this._meshCache[this.vertexes.length];t||((t=new cc.Mesh).init(new s.VertexFormat([{name:s.ATTR_POSITION,type:s.ATTR_TYPE_FLOAT32,num:2},{name:s.ATTR_UV0,type:s.ATTR_TYPE_FLOAT32,num:2}]),this.vertexes.length,!0),this._meshCache[this.vertexes.length]=t),this.mesh=t},e.prototype._applyVertexes=function(){var t=this,e=this.mesh,r=this.vertexes.map(function(e){return e.add(t.offset)});if(e.setVertices(s.ATTR_POSITION,r),this.texture){for(var o=[],n=0,i=r;n<i.length;n++){var c=i[n],p=(c.x+this.texture.width/2)/this.texture.width,a=1-(c.y+this.texture.height/2)/this.texture.height;o.push(cc.v2(p,a))}e.setVertices(s.ATTR_UV0,o)}if(this.vertexes.length>=3){for(var l=[],u=[].concat(r),h=0,f=-1;u.length>3;){var y=u[h%u.length],v=u[(h+1)%u.length],d=u[(h+2)%u.length],_=v.sub(y),b=d.sub(v);if(_.cross(b)>=0){for(var g=!1,x=0,m=u;x<m.length;x++){var O=m[x];if(O!==y&&O!==v&&O!==d&&this._testInTriangle(O,y,v,d)){g=!0;break}}if(g){if((h=(h+1)%u.length)===f){cc.log("\u5faa\u73af\u4e00\u5708\u672a\u53d1\u73b0");break}}else l=l.concat([r.indexOf(y),r.indexOf(v),r.indexOf(d)]),u.splice(u.indexOf(v),1),f=h}else if((h=(h+1)%u.length)===f){cc.log("\u5faa\u73af\u4e00\u5708\u672a\u53d1\u73b0");break}}l=l.concat(u.map(function(t){return r.indexOf(t)})),e.setIndices(l),this.renderer.mesh!=e&&(this.renderer.mesh=e)}},e.prototype._testInTriangle=function(t,e,r,o){var n=r.sub(e),i=o.sub(e),s=o.sub(r),c=t.sub(e),p=t.sub(r);return n.cross(i)>=0!=n.cross(c)<0&&n.cross(i)>=0!=i.cross(c)>=0&&s.cross(n)>0!=s.cross(p)>=0},e.prototype._applySpriteFrame=function(){if(this.spriteFrame){var t=this.renderer.getMaterial(0),e=this.spriteFrame.getTexture();t.define("USE_DIFFUSE_TEXTURE",!0),t.setProperty("diffuseTexture",e),this.texture=e}},i([a({serializable:!1,readonly:!0})],e.prototype,"_editing",void 0),i([a],e.prototype,"editing",null),i([a],e.prototype,"_offset",void 0),i([a],e.prototype,"offset",null),i([a({type:cc.SpriteFrame})],e.prototype,"_spriteFrame",void 0),i([a({type:cc.SpriteFrame})],e.prototype,"spriteFrame",null),i([a({type:cc.Vec2})],e.prototype,"_vertexes",void 0),i([a({type:cc.Vec2})],e.prototype,"vertexes",null),i([p,l,u(cc.MeshRenderer)],e)}(cc.Component);r.default=f,cc._RF.pop()},{}]},{},["Game","Knife","PolygonMask"]);