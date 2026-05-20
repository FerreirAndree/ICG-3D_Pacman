(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Mc="180",Xs={ROTATE:0,DOLLY:1,PAN:2},Gs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ep=0,du=1,tp=2,$h=1,np=2,li=3,Bi=0,cn=1,Ut=2,Ui=0,rs=1,ki=2,fu=3,pu=4,ip=5,es=100,sp=101,rp=102,op=103,ap=104,lp=200,cp=201,up=202,hp=203,Sl=204,El=205,dp=206,fp=207,pp=208,mp=209,gp=210,vp=211,_p=212,xp=213,yp=214,bl=0,wl=1,Tl=2,nr=3,Al=4,Rl=5,Cl=6,Pl=7,Jh=0,Mp=1,Sp=2,Ni=0,Ep=1,bp=2,wp=3,Sc=4,Tp=5,Ap=6,Rp=7,jh=300,ir=301,sr=302,Dl=303,Ll=304,xa=306,Il=1e3,is=1001,Ul=1002,_n=1003,Cp=1004,vo=1005,Yn=1006,Ua=1007,ss=1008,Jn=1009,Qh=1010,ed=1011,Vr=1012,Ec=1013,hs=1014,Zn=1015,to=1016,bc=1017,wc=1018,Wr=1020,td=35902,nd=35899,id=1021,sd=1022,Bn=1023,qr=1026,Xr=1027,Tc=1028,Ac=1029,rd=1030,Rc=1031,Cc=1033,Ko=33776,$o=33777,Jo=33778,jo=33779,Nl=35840,Fl=35841,Ol=35842,Bl=35843,kl=36196,zl=37492,Gl=37496,Hl=37808,Vl=37809,Wl=37810,ql=37811,Xl=37812,Yl=37813,Zl=37814,Kl=37815,$l=37816,Jl=37817,jl=37818,Ql=37819,ec=37820,tc=37821,nc=36492,ic=36494,sc=36495,rc=36283,oc=36284,ac=36285,lc=36286,Pp=3200,Dp=3201,od=0,Lp=1,Ci="",on="srgb",rr="srgb-linear",ia="linear",pt="srgb",bs=7680,mu=519,Ip=512,Up=513,Np=514,ad=515,Fp=516,Op=517,Bp=518,kp=519,gu=35044,zp=35048,vu="300 es",Kn=2e3,sa=2001;class ms{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _u=1234567;const Fr=Math.PI/180,Yr=180/Math.PI;function gs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function Ze(n,e,t){return Math.max(e,Math.min(t,n))}function Pc(n,e){return(n%e+e)%e}function Gp(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Hp(n,e,t){return n!==e?(t-n)/(e-n):0}function Or(n,e,t){return(1-t)*n+t*e}function Vp(n,e,t,i){return Or(n,e,1-Math.exp(-t*i))}function Wp(n,e=1){return e-Math.abs(Pc(n,e*2)-e)}function qp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Xp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Yp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Zp(n,e){return n+Math.random()*(e-n)}function Kp(n){return n*(.5-Math.random())}function $p(n){n!==void 0&&(_u=n);let e=_u+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jp(n){return n*Fr}function jp(n){return n*Yr}function Qp(n){return(n&n-1)===0&&n!==0}function em(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function tm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function nm(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),p=o((e-i)/2),d=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*p,a*c);break;case"YZY":n.set(l*p,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*p,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function zs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function $t(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const En={DEG2RAD:Fr,RAD2DEG:Yr,generateUUID:gs,clamp:Ze,euclideanModulo:Pc,mapLinear:Gp,inverseLerp:Hp,lerp:Or,damp:Vp,pingpong:Wp,smoothstep:qp,smootherstep:Xp,randInt:Yp,randFloat:Zp,randFloatSpread:Kp,seededRandom:$p,degToRad:Jp,radToDeg:jp,isPowerOfTwo:Qp,ceilPowerOfTwo:em,floorPowerOfTwo:tm,setQuaternionFromProperEuler:nm,normalize:$t,denormalize:zs};class ie{constructor(e=0,t=0){ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ds{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const p=r[o+0],d=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=p,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==p||c!==d||u!==g){let m=1-a;const f=l*p+c*d+u*g+h*v,E=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const A=Math.sqrt(y),R=Math.atan2(A,f*E);m=Math.sin(m*R)/A,a=Math.sin(a*R)/A}const _=a*E;if(l=l*m+p*_,c=c*m+d*_,u=u*m+g*_,h=h*m+v*_,m===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],p=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*d-c*p,e[t+1]=l*g+u*p+c*h-a*d,e[t+2]=c*g+u*d+a*p-l*h,e[t+3]=u*g-a*h-l*p-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),p=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=p*u*h+c*d*g,this._y=c*d*h-p*u*g,this._z=c*u*g+p*d*h,this._w=c*u*h-p*d*g;break;case"YXZ":this._x=p*u*h+c*d*g,this._y=c*d*h-p*u*g,this._z=c*u*g-p*d*h,this._w=c*u*h+p*d*g;break;case"ZXY":this._x=p*u*h-c*d*g,this._y=c*d*h+p*u*g,this._z=c*u*g+p*d*h,this._w=c*u*h-p*d*g;break;case"ZYX":this._x=p*u*h-c*d*g,this._y=c*d*h+p*u*g,this._z=c*u*g-p*d*h,this._w=c*u*h+p*d*g;break;case"YZX":this._x=p*u*h+c*d*g,this._y=c*d*h+p*u*g,this._z=c*u*g-p*d*h,this._w=c*u*h-p*d*g;break;case"XZY":this._x=p*u*h-c*d*g,this._y=c*d*h-p*u*g,this._z=c*u*g+p*d*h,this._w=c*u*h+p*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],p=i+a+h;if(p>0){const d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=o*h+this._w*p,this._x=i*h+this._x*p,this._y=s*h+this._y*p,this._z=r*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(e=0,t=0,i=0){T.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Na.copy(this).projectOnVector(e),this.sub(Na)}reflect(e){return this.sub(Na.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Na=new T,xu=new ds;class Ye{constructor(e,t,i,s,r,o,a,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],p=i[2],d=i[5],g=i[8],v=s[0],m=s[3],f=s[6],E=s[1],y=s[4],_=s[7],A=s[2],R=s[5],C=s[8];return r[0]=o*v+a*E+l*A,r[3]=o*m+a*y+l*R,r[6]=o*f+a*_+l*C,r[1]=c*v+u*E+h*A,r[4]=c*m+u*y+h*R,r[7]=c*f+u*_+h*C,r[2]=p*v+d*E+g*A,r[5]=p*m+d*y+g*R,r[8]=p*f+d*_+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,p=a*l-u*r,d=c*r-o*l,g=t*h+i*p+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=p*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=d*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Fa.makeScale(e,t)),this}rotate(e){return this.premultiply(Fa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fa=new Ye;function ld(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ra(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function im(){const n=ra("canvas");return n.style.display="block",n}const yu={};function Zr(n){n in yu||(yu[n]=!0,console.warn(n))}function sm(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Mu=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Su=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rm(){const n={enabled:!0,workingColorSpace:rr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pt&&(s.r=mi(s.r),s.g=mi(s.g),s.b=mi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pt&&(s.r=Ys(s.r),s.g=Ys(s.g),s.b=Ys(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ci?ia:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Zr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Zr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[rr]:{primaries:e,whitePoint:i,transfer:ia,toXYZ:Mu,fromXYZ:Su,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:Mu,fromXYZ:Su,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),n}const rt=rm();function mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ys(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ws;class om{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ws===void 0&&(ws=ra("canvas")),ws.width=e.width,ws.height=e.height;const s=ws.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ws}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ra("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=mi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(mi(t[i]/255)*255):t[i]=mi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let am=0;class Dc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=gs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Oa(s[o].image)):r.push(Oa(s[o]))}else r=Oa(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Oa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?om.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lm=0;const Ba=new T;class Qt extends ms{constructor(e=Qt.DEFAULT_IMAGE,t=Qt.DEFAULT_MAPPING,i=is,s=is,r=Yn,o=ss,a=Bn,l=Jn,c=Qt.DEFAULT_ANISOTROPY,u=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=gs(),this.name="",this.source=new Dc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ba).x}get height(){return this.source.getSize(Ba).y}get depth(){return this.source.getSize(Ba).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Il:e.x=e.x-Math.floor(e.x);break;case is:e.x=e.x<0?0:1;break;case Ul:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Il:e.y=e.y-Math.floor(e.y);break;case is:e.y=e.y<0?0:1;break;case Ul:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=jh;Qt.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,i=0,s=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],p=l[1],d=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(u-p)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,_=(d+1)/2,A=(f+1)/2,R=(u+p)/4,C=(h+v)/4,L=(g+m)/4;return y>_&&y>A?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=R/i,r=C/i):_>A?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=R/s,r=L/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=C/r,s=L/r),this.set(i,s,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(p-u)*(p-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-v)/E,this.z=(p-u)/E,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cm extends ms{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new Qt(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Dc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fs extends cm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class cd extends Qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class um extends Qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vs{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,An):An.fromBufferAttribute(r,o),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_o.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_o.copy(i.boundingBox)),_o.applyMatrix4(e.matrixWorld),this.union(_o)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_r),xo.subVectors(this.max,_r),Ts.subVectors(e.a,_r),As.subVectors(e.b,_r),Rs.subVectors(e.c,_r),Mi.subVectors(As,Ts),Si.subVectors(Rs,As),qi.subVectors(Ts,Rs);let t=[0,-Mi.z,Mi.y,0,-Si.z,Si.y,0,-qi.z,qi.y,Mi.z,0,-Mi.x,Si.z,0,-Si.x,qi.z,0,-qi.x,-Mi.y,Mi.x,0,-Si.y,Si.x,0,-qi.y,qi.x,0];return!ka(t,Ts,As,Rs,xo)||(t=[1,0,0,0,1,0,0,0,1],!ka(t,Ts,As,Rs,xo))?!1:(yo.crossVectors(Mi,Si),t=[yo.x,yo.y,yo.z],ka(t,Ts,As,Rs,xo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ii=[new T,new T,new T,new T,new T,new T,new T,new T],An=new T,_o=new vs,Ts=new T,As=new T,Rs=new T,Mi=new T,Si=new T,qi=new T,_r=new T,xo=new T,yo=new T,Xi=new T;function ka(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Xi.fromArray(n,r);const a=s.x*Math.abs(Xi.x)+s.y*Math.abs(Xi.y)+s.z*Math.abs(Xi.z),l=e.dot(Xi),c=t.dot(Xi),u=i.dot(Xi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const hm=new vs,xr=new T,za=new T;class _s{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):hm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xr.subVectors(e,this.center);const t=xr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(xr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(za.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xr.copy(e.center).add(za)),this.expandByPoint(xr.copy(e.center).sub(za))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const si=new T,Ga=new T,Mo=new T,Ei=new T,Ha=new T,So=new T,Va=new T;class no{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,t),si.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ga.copy(e).add(t).multiplyScalar(.5),Mo.copy(t).sub(e).normalize(),Ei.copy(this.origin).sub(Ga);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Mo),a=Ei.dot(this.direction),l=-Ei.dot(Mo),c=Ei.lengthSq(),u=Math.abs(1-o*o);let h,p,d,g;if(u>0)if(h=o*l-a,p=o*a-l,g=r*u,h>=0)if(p>=-g)if(p<=g){const v=1/u;h*=v,p*=v,d=h*(h+o*p+2*a)+p*(o*h+p+2*l)+c}else p=r,h=Math.max(0,-(o*p+a)),d=-h*h+p*(p+2*l)+c;else p=-r,h=Math.max(0,-(o*p+a)),d=-h*h+p*(p+2*l)+c;else p<=-g?(h=Math.max(0,-(-o*r+a)),p=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+p*(p+2*l)+c):p<=g?(h=0,p=Math.min(Math.max(-r,-l),r),d=p*(p+2*l)+c):(h=Math.max(0,-(o*r+a)),p=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+p*(p+2*l)+c);else p=o>0?-r:r,h=Math.max(0,-(o*p+a)),d=-h*h+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ga).addScaledVector(Mo,p),d}intersectSphere(e,t){si.subVectors(e.center,this.origin);const i=si.dot(this.direction),s=si.dot(si)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),u>=0?(r=(e.min.y-p.y)*u,o=(e.max.y-p.y)*u):(r=(e.max.y-p.y)*u,o=(e.min.y-p.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-p.z)*h,l=(e.max.z-p.z)*h):(a=(e.max.z-p.z)*h,l=(e.min.z-p.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,t,i,s,r){Ha.subVectors(t,e),So.subVectors(i,e),Va.crossVectors(Ha,So);let o=this.direction.dot(Va),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ei.subVectors(this.origin,e);const l=a*this.direction.dot(So.crossVectors(Ei,So));if(l<0)return null;const c=a*this.direction.dot(Ha.cross(Ei));if(c<0||l+c>o)return null;const u=-a*Ei.dot(Va);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,i,s,r,o,a,l,c,u,h,p,d,g,v,m){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,p,d,g,v,m)}set(e,t,i,s,r,o,a,l,c,u,h,p,d,g,v,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=p,f[3]=d,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Cs.setFromMatrixColumn(e,0).length(),r=1/Cs.setFromMatrixColumn(e,1).length(),o=1/Cs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const p=o*u,d=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=p-v*c,t[9]=-a*l,t[2]=v-p*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const p=l*u,d=l*h,g=c*u,v=c*h;t[0]=p+v*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=v+p*a,t[10]=o*l}else if(e.order==="ZXY"){const p=l*u,d=l*h,g=c*u,v=c*h;t[0]=p-v*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=v-p*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const p=o*u,d=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=p*c+v,t[1]=l*h,t[5]=v*c+p,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const p=o*l,d=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-p*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=p-v*h}else if(e.order==="XZY"){const p=o*l,d=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=p*h+v,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=v*h+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dm,e,fm)}lookAt(e,t,i){const s=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),bi.crossVectors(i,dn),bi.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),bi.crossVectors(i,dn)),bi.normalize(),Eo.crossVectors(dn,bi),s[0]=bi.x,s[4]=Eo.x,s[8]=dn.x,s[1]=bi.y,s[5]=Eo.y,s[9]=dn.y,s[2]=bi.z,s[6]=Eo.z,s[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],p=i[9],d=i[13],g=i[2],v=i[6],m=i[10],f=i[14],E=i[3],y=i[7],_=i[11],A=i[15],R=s[0],C=s[4],L=s[8],S=s[12],M=s[1],D=s[5],B=s[9],z=s[13],G=s[2],V=s[6],X=s[10],$=s[14],U=s[3],se=s[7],fe=s[11],xe=s[15];return r[0]=o*R+a*M+l*G+c*U,r[4]=o*C+a*D+l*V+c*se,r[8]=o*L+a*B+l*X+c*fe,r[12]=o*S+a*z+l*$+c*xe,r[1]=u*R+h*M+p*G+d*U,r[5]=u*C+h*D+p*V+d*se,r[9]=u*L+h*B+p*X+d*fe,r[13]=u*S+h*z+p*$+d*xe,r[2]=g*R+v*M+m*G+f*U,r[6]=g*C+v*D+m*V+f*se,r[10]=g*L+v*B+m*X+f*fe,r[14]=g*S+v*z+m*$+f*xe,r[3]=E*R+y*M+_*G+A*U,r[7]=E*C+y*D+_*V+A*se,r[11]=E*L+y*B+_*X+A*fe,r[15]=E*S+y*z+_*$+A*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],p=e[10],d=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+r*l*h-s*c*h-r*a*p+i*c*p+s*a*d-i*l*d)+v*(+t*l*d-t*c*p+r*o*p-s*o*d+s*c*u-r*l*u)+m*(+t*c*h-t*a*d-r*o*h+i*o*d+r*a*u-i*c*u)+f*(-s*a*u-t*l*h+t*a*p+s*o*h-i*o*p+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],p=e[10],d=e[11],g=e[12],v=e[13],m=e[14],f=e[15],E=h*m*c-v*p*c+v*l*d-a*m*d-h*l*f+a*p*f,y=g*p*c-u*m*c-g*l*d+o*m*d+u*l*f-o*p*f,_=u*v*c-g*h*c+g*a*d-o*v*d-u*a*f+o*h*f,A=g*h*l-u*v*l-g*a*p+o*v*p+u*a*m-o*h*m,R=t*E+i*y+s*_+r*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=E*C,e[1]=(v*p*r-h*m*r-v*s*d+i*m*d+h*s*f-i*p*f)*C,e[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*f+i*l*f)*C,e[3]=(h*l*r-a*p*r-h*s*c+i*p*c+a*s*d-i*l*d)*C,e[4]=y*C,e[5]=(u*m*r-g*p*r+g*s*d-t*m*d-u*s*f+t*p*f)*C,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*f-t*l*f)*C,e[7]=(o*p*r-u*l*r+u*s*c-t*p*c-o*s*d+t*l*d)*C,e[8]=_*C,e[9]=(g*h*r-u*v*r-g*i*d+t*v*d+u*i*f-t*h*f)*C,e[10]=(o*v*r-g*a*r+g*i*c-t*v*c-o*i*f+t*a*f)*C,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*d-t*a*d)*C,e[12]=A*C,e[13]=(u*v*s-g*h*s+g*i*p-t*v*p-u*i*m+t*h*m)*C,e[14]=(g*a*s-o*v*s-g*i*l+t*v*l+o*i*m-t*a*m)*C,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*p+t*a*p)*C,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,p=r*c,d=r*u,g=r*h,v=o*u,m=o*h,f=a*h,E=l*c,y=l*u,_=l*h,A=i.x,R=i.y,C=i.z;return s[0]=(1-(v+f))*A,s[1]=(d+_)*A,s[2]=(g-y)*A,s[3]=0,s[4]=(d-_)*R,s[5]=(1-(p+f))*R,s[6]=(m+E)*R,s[7]=0,s[8]=(g+y)*C,s[9]=(m-E)*C,s[10]=(1-(p+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Cs.set(s[0],s[1],s[2]).length();const o=Cs.set(s[4],s[5],s[6]).length(),a=Cs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Rn.copy(this);const c=1/r,u=1/o,h=1/a;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=u,Rn.elements[5]*=u,Rn.elements[6]*=u,Rn.elements[8]*=h,Rn.elements[9]*=h,Rn.elements[10]*=h,t.setFromRotationMatrix(Rn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Kn,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(i-s),p=(t+e)/(t-e),d=(i+s)/(i-s);let g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===Kn)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===sa)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Kn,l=!1){const c=this.elements,u=2/(t-e),h=2/(i-s),p=-(t+e)/(t-e),d=-(i+s)/(i-s);let g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===Kn)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===sa)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Cs=new T,Rn=new ut,dm=new T(0,0,0),fm=new T(1,1,1),bi=new T,Eo=new T,dn=new T,Eu=new ut,bu=new ds;class jn{constructor(e=0,t=0,i=0,s=jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],p=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Eu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bu.setFromEuler(this),this.setFromQuaternion(bu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jn.DEFAULT_ORDER="XYZ";class Lc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pm=0;const wu=new T,Ps=new ds,ri=new ut,bo=new T,yr=new T,mm=new T,gm=new ds,Tu=new T(1,0,0),Au=new T(0,1,0),Ru=new T(0,0,1),Cu={type:"added"},vm={type:"removed"},Ds={type:"childadded",child:null},Wa={type:"childremoved",child:null};class Nt extends ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new T,t=new jn,i=new ds,s=new T(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ut},normalMatrix:{value:new Ye}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ps.setFromAxisAngle(e,t),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,t){return Ps.setFromAxisAngle(e,t),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis(Tu,e)}rotateY(e){return this.rotateOnAxis(Au,e)}rotateZ(e){return this.rotateOnAxis(Ru,e)}translateOnAxis(e,t){return wu.copy(e).applyQuaternion(this.quaternion),this.position.add(wu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tu,e)}translateY(e){return this.translateOnAxis(Au,e)}translateZ(e){return this.translateOnAxis(Ru,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?bo.copy(e):bo.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(yr,bo,this.up):ri.lookAt(bo,yr,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),Ps.setFromRotationMatrix(ri),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cu),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vm),Wa.child=e,this.dispatchEvent(Wa),Wa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cu),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,e,mm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,gm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),p=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),p.length>0&&(i.skeletons=p),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Nt.DEFAULT_UP=new T(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new T,oi=new T,qa=new T,ai=new T,Ls=new T,Is=new T,Pu=new T,Xa=new T,Ya=new T,Za=new T,Ka=new gt,$a=new gt,Ja=new gt;class Un{constructor(e=new T,t=new T,i=new T){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Cn.subVectors(e,t),s.cross(Cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Cn.subVectors(s,t),oi.subVectors(i,t),qa.subVectors(e,t);const o=Cn.dot(Cn),a=Cn.dot(oi),l=Cn.dot(qa),c=oi.dot(oi),u=oi.dot(qa),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const p=1/h,d=(c*l-a*u)*p,g=(o*u-a*l)*p;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ai.x),l.addScaledVector(o,ai.y),l.addScaledVector(a,ai.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Ka.setScalar(0),$a.setScalar(0),Ja.setScalar(0),Ka.fromBufferAttribute(e,t),$a.fromBufferAttribute(e,i),Ja.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ka,r.x),o.addScaledVector($a,r.y),o.addScaledVector(Ja,r.z),o}static isFrontFacing(e,t,i,s){return Cn.subVectors(i,t),oi.subVectors(e,t),Cn.cross(oi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Cn.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Un.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Ls.subVectors(s,i),Is.subVectors(r,i),Xa.subVectors(e,i);const l=Ls.dot(Xa),c=Is.dot(Xa);if(l<=0&&c<=0)return t.copy(i);Ya.subVectors(e,s);const u=Ls.dot(Ya),h=Is.dot(Ya);if(u>=0&&h<=u)return t.copy(s);const p=l*h-u*c;if(p<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ls,o);Za.subVectors(e,r);const d=Ls.dot(Za),g=Is.dot(Za);if(g>=0&&d<=g)return t.copy(r);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Is,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Pu.subVectors(r,s),a=(h-u)/(h-u+(d-g)),t.copy(s).addScaledVector(Pu,a);const f=1/(m+v+p);return o=v*f,a=p*f,t.copy(i).addScaledVector(Ls,o).addScaledVector(Is,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ud={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},wo={h:0,s:0,l:0};function ja(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class He{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=rt.workingColorSpace){if(e=Pc(e,1),t=Ze(t,0,1),i=Ze(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ja(o,r,e+1/3),this.g=ja(o,r,e),this.b=ja(o,r,e-1/3)}return rt.colorSpaceToWorking(this,s),this}setStyle(e,t=on){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=on){const i=ud[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return rt.workingToColorSpace(Yt.copy(this),e),Math.round(Ze(Yt.r*255,0,255))*65536+Math.round(Ze(Yt.g*255,0,255))*256+Math.round(Ze(Yt.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(Yt.copy(this),t);const i=Yt.r,s=Yt.g,r=Yt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=on){rt.workingToColorSpace(Yt.copy(this),e);const t=Yt.r,i=Yt.g,s=Yt.b;return e!==on?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+t,wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(wi),e.getHSL(wo);const i=Or(wi.h,wo.h,t),s=Or(wi.s,wo.s,t),r=Or(wi.l,wo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new He;He.NAMES=ud;let _m=0;class xs extends ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=gs(),this.name="",this.type="Material",this.blending=rs,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sl,this.blendDst=El,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(i.blending=this.blending),this.side!==Bi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Sl&&(i.blendSrc=this.blendSrc),this.blendDst!==El&&(i.blendDst=this.blendDst),this.blendEquation!==es&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==nr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ot extends xs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new T,To=new ie;let xm=0;class bn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=gu,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)To.fromBufferAttribute(this,t),To.applyMatrix3(e),this.setXY(t,To.x,To.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=zs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=$t(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zs(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zs(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zs(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array),s=$t(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array),s=$t(s,this.array),r=$t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gu&&(e.usage=this.usage),e}}class hd extends bn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class dd extends bn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class et extends bn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ym=0;const Sn=new ut,Qa=new Nt,Us=new T,fn=new vs,Mr=new vs,zt=new T;class Lt extends ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ld(e)?dd:hd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ye().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,i){return Sn.makeTranslation(e,t,i),this.applyMatrix4(Sn),this}scale(e,t,i){return Sn.makeScale(e,t,i),this.applyMatrix4(Sn),this}lookAt(e){return Qa.lookAt(e),Qa.updateMatrix(),this.applyMatrix4(Qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new et(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _s);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Mr.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(fn.min,Mr.min),fn.expandByPoint(zt),zt.addVectors(fn.max,Mr.max),fn.expandByPoint(zt)):(fn.expandByPoint(Mr.min),fn.expandByPoint(Mr.max))}fn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)zt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(zt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)zt.fromBufferAttribute(a,c),l&&(Us.fromBufferAttribute(e,c),zt.add(Us)),s=Math.max(s,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new T,l[L]=new T;const c=new T,u=new T,h=new T,p=new ie,d=new ie,g=new ie,v=new T,m=new T;function f(L,S,M){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,S),h.fromBufferAttribute(i,M),p.fromBufferAttribute(r,L),d.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),u.sub(c),h.sub(c),d.sub(p),g.sub(p);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(D),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(D),a[L].add(v),a[S].add(v),a[M].add(v),l[L].add(m),l[S].add(m),l[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let L=0,S=E.length;L<S;++L){const M=E[L],D=M.start,B=M.count;for(let z=D,G=D+B;z<G;z+=3)f(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const y=new T,_=new T,A=new T,R=new T;function C(L){A.fromBufferAttribute(s,L),R.copy(A);const S=a[L];y.copy(S),y.sub(A.multiplyScalar(A.dot(S))).normalize(),_.crossVectors(R,S);const D=_.dot(l[L])<0?-1:1;o.setXYZW(L,y.x,y.y,y.z,D)}for(let L=0,S=E.length;L<S;++L){const M=E[L],D=M.start,B=M.count;for(let z=D,G=D+B;z<G;z+=3)C(e.getX(z+0)),C(e.getX(z+1)),C(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new bn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,d=i.count;p<d;p++)i.setXYZ(p,0,0,0);const s=new T,r=new T,o=new T,a=new T,l=new T,c=new T,u=new T,h=new T;if(e)for(let p=0,d=e.count;p<d;p+=3){const g=e.getX(p+0),v=e.getX(p+1),m=e.getX(p+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,d=t.count;p<d;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,p=new c.constructor(l.length*u);let d=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*u;for(let f=0;f<u;f++)p[g++]=c[d++]}return new bn(p,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lt,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const p=c[u],d=e(p,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,p=c.length;h<p;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let p=0,d=h.length;p<d;p++)u.push(h[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Du=new ut,Yi=new no,Ao=new _s,Lu=new T,Ro=new T,Co=new T,Po=new T,el=new T,Do=new T,Iu=new T,Lo=new T;class we extends Nt{constructor(e=new Lt,t=new Ot){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Do.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(el.fromBufferAttribute(h,e),o?Do.addScaledVector(el,u):Do.addScaledVector(el.sub(t),u))}t.add(Do)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ao.copy(i.boundingSphere),Ao.applyMatrix4(r),Yi.copy(e.ray).recast(e.near),!(Ao.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(Ao,Lu)===null||Yi.origin.distanceToSquared(Lu)>(e.far-e.near)**2))&&(Du.copy(r).invert(),Yi.copy(e.ray).applyMatrix4(Du),!(i.boundingBox!==null&&Yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Yi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,p=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=p.length;g<v;g++){const m=p[g],f=o[m.materialIndex],E=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let _=E,A=y;_<A;_+=3){const R=a.getX(_),C=a.getX(_+1),L=a.getX(_+2);s=Io(this,f,e,i,c,u,h,R,C,L),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=g,f=v;m<f;m+=3){const E=a.getX(m),y=a.getX(m+1),_=a.getX(m+2);s=Io(this,o,e,i,c,u,h,E,y,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=p.length;g<v;g++){const m=p[g],f=o[m.materialIndex],E=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let _=E,A=y;_<A;_+=3){const R=_,C=_+1,L=_+2;s=Io(this,f,e,i,c,u,h,R,C,L),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,f=v;m<f;m+=3){const E=m,y=m+1,_=m+2;s=Io(this,o,e,i,c,u,h,E,y,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Mm(n,e,t,i,s,r,o,a){let l;if(e.side===cn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Bi,a),l===null)return null;Lo.copy(a),Lo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Lo);return c<t.near||c>t.far?null:{distance:c,point:Lo.clone(),object:n}}function Io(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Ro),n.getVertexPosition(l,Co),n.getVertexPosition(c,Po);const u=Mm(n,e,t,i,Ro,Co,Po,Iu);if(u){const h=new T;Un.getBarycoord(Iu,Ro,Co,Po,h),s&&(u.uv=Un.getInterpolatedAttribute(s,a,l,c,h,new ie)),r&&(u.uv1=Un.getInterpolatedAttribute(r,a,l,c,h,new ie)),o&&(u.normal=Un.getInterpolatedAttribute(o,a,l,c,h,new T),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const p={a,b:l,c,normal:new T,materialIndex:0};Un.getNormal(Ro,Co,Po,p.normal),u.face=p,u.barycoord=h}return u}class gn extends Lt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let p=0,d=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(u,3)),this.setAttribute("uv",new et(h,2));function g(v,m,f,E,y,_,A,R,C,L,S){const M=_/C,D=A/L,B=_/2,z=A/2,G=R/2,V=C+1,X=L+1;let $=0,U=0;const se=new T;for(let fe=0;fe<X;fe++){const xe=fe*D-z;for(let Ie=0;Ie<V;Ie++){const ke=Ie*M-B;se[v]=ke*E,se[m]=xe*y,se[f]=G,c.push(se.x,se.y,se.z),se[v]=0,se[m]=0,se[f]=R>0?1:-1,u.push(se.x,se.y,se.z),h.push(Ie/C),h.push(1-fe/L),$+=1}}for(let fe=0;fe<L;fe++)for(let xe=0;xe<C;xe++){const Ie=p+xe+V*fe,ke=p+xe+V*(fe+1),it=p+(xe+1)+V*(fe+1),Ke=p+(xe+1)+V*fe;l.push(Ie,ke,Ke),l.push(ke,it,Ke),U+=6}a.addGroup(d,U,S),d+=U,p+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function or(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Jt(n){const e={};for(let t=0;t<n.length;t++){const i=or(n[t]);for(const s in i)e[s]=i[s]}return e}function Sm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function fd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const Em={clone:or,merge:Jt};var bm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qn extends xs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bm,this.fragmentShader=wm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=or(e.uniforms),this.uniformsGroups=Sm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class pd extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=Kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new T,Uu=new ie,Nu=new ie;class ln extends pd{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yr*2*Math.atan(Math.tan(Fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,t){return this.getViewBounds(e,Uu,Nu),t.subVectors(Nu,Uu)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ns=-90,Fs=1;class Tm extends Nt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ln(Ns,Fs,e,t);s.layers=this.layers,this.add(s);const r=new ln(Ns,Fs,e,t);r.layers=this.layers,this.add(r);const o=new ln(Ns,Fs,e,t);o.layers=this.layers,this.add(o);const a=new ln(Ns,Fs,e,t);a.layers=this.layers,this.add(a);const l=new ln(Ns,Fs,e,t);l.layers=this.layers,this.add(l);const c=new ln(Ns,Fs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Kn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===sa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,p,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class md extends Qt{constructor(e=[],t=ir,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Am extends fs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new md(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new gn(5,5,5),r=new Qn({name:"CubemapFromEquirect",uniforms:or(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:Ui});r.uniforms.tEquirect.value=t;const o=new we(s,r),a=t.minFilter;return t.minFilter===ss&&(t.minFilter=Yn),new Tm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class ot extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rm={type:"move"};class tl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&p>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Rm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ot;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Ic{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new He(e),this.density=t}clone(){return new Ic(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class gd extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Cm extends Qt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=_n,u=_n,h,p){super(null,o,a,l,c,u,s,r,h,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fu extends bn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Os=new ut,Ou=new ut,Uo=[],Bu=new vs,Pm=new ut,Sr=new we,Er=new _s;class ku extends we{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fu(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Pm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Os),Bu.copy(e.boundingBox).applyMatrix4(Os),this.boundingBox.union(Bu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _s),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Os),Er.copy(e.boundingSphere).applyMatrix4(Os),this.boundingSphere.union(Er)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Sr.geometry=this.geometry,Sr.material=this.material,Sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Er.copy(this.boundingSphere),Er.applyMatrix4(i),e.ray.intersectsSphere(Er)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Os),Ou.multiplyMatrices(i,Os),Sr.matrixWorld=Ou,Sr.raycast(e,Uo);for(let o=0,a=Uo.length;o<a;o++){const l=Uo[o];l.instanceId=r,l.object=this,t.push(l)}Uo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Fu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Cm(new Float32Array(s*this.count),s,this.count,Tc,Zn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const nl=new T,Dm=new T,Lm=new Ye;class Ri{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=nl.subVectors(i,t).cross(Dm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(nl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Lm.getNormalMatrix(e),s=this.coplanarPoint(nl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zi=new _s,Im=new ie(.5,.5),No=new T;class Uc{constructor(e=new Ri,t=new Ri,i=new Ri,s=new Ri,r=new Ri,o=new Ri){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Kn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],p=r[6],d=r[7],g=r[8],v=r[9],m=r[10],f=r[11],E=r[12],y=r[13],_=r[14],A=r[15];if(s[0].setComponents(c-o,d-u,f-g,A-E).normalize(),s[1].setComponents(c+o,d+u,f+g,A+E).normalize(),s[2].setComponents(c+a,d+h,f+v,A+y).normalize(),s[3].setComponents(c-a,d-h,f-v,A-y).normalize(),i)s[4].setComponents(l,p,m,_).normalize(),s[5].setComponents(c-l,d-p,f-m,A-_).normalize();else if(s[4].setComponents(c-l,d-p,f-m,A-_).normalize(),t===Kn)s[5].setComponents(c+l,d+p,f+m,A+_).normalize();else if(t===sa)s[5].setComponents(l,p,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(e){Zi.center.set(0,0,0);const t=Im.distanceTo(e.center);return Zi.radius=.7071067811865476+t,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(No.x=s.normal.x>0?e.max.x:e.min.x,No.y=s.normal.y>0?e.max.y:e.min.y,No.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(No)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vd extends xs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const oa=new T,aa=new T,zu=new ut,br=new no,Fo=new _s,il=new T,Gu=new T;class Um extends Nt{constructor(e=new Lt,t=new vd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)oa.fromBufferAttribute(t,s-1),aa.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=oa.distanceTo(aa);e.setAttribute("lineDistance",new et(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fo.copy(i.boundingSphere),Fo.applyMatrix4(s),Fo.radius+=r,e.ray.intersectsSphere(Fo)===!1)return;zu.copy(s).invert(),br.copy(e.ray).applyMatrix4(zu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,p=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=d,m=g-1;v<m;v+=c){const f=u.getX(v),E=u.getX(v+1),y=Oo(this,e,br,l,f,E,v);y&&t.push(y)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(d),f=Oo(this,e,br,l,v,m,g-1);f&&t.push(f)}}else{const d=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let v=d,m=g-1;v<m;v+=c){const f=Oo(this,e,br,l,v,v+1,v);f&&t.push(f)}if(this.isLineLoop){const v=Oo(this,e,br,l,g-1,d,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Oo(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(oa.fromBufferAttribute(a,s),aa.fromBufferAttribute(a,r),t.distanceSqToSegment(oa,aa,il,Gu)>i)return;il.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(il);if(!(c<e.near||c>e.far))return{distance:c,point:Gu.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Hu=new T,Vu=new T;class Nm extends Um{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Hu.fromBufferAttribute(t,s),Vu.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Hu.distanceTo(Vu);e.setAttribute("lineDistance",new et(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _d extends xs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wu=new ut,cc=new no,Bo=new _s,ko=new T;class Fm extends Nt{constructor(e=new Lt,t=new _d){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bo.copy(i.boundingSphere),Bo.applyMatrix4(s),Bo.radius+=r,e.ray.intersectsSphere(Bo)===!1)return;Wu.copy(s).invert(),cc.copy(e.ray).applyMatrix4(Wu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const p=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=p,v=d;g<v;g++){const m=c.getX(g);ko.fromBufferAttribute(h,m),qu(ko,m,l,s,e,t,this)}}else{const p=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=p,v=d;g<v;g++)ko.fromBufferAttribute(h,g),qu(ko,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function qu(n,e,t,i,s,r,o){const a=cc.distanceSqToPoint(n);if(a<t){const l=new T;cc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class xd extends Qt{constructor(e,t,i=hs,s,r,o,a=_n,l=_n,c,u=qr,h=1){if(u!==qr&&u!==Xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:h};super(p,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class yd extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ei extends Lt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new T,u=new ie;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,p=3;h<=t;h++,p+=3){const d=i+h/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[p]/e+1)/2,u.y=(o[p+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new et(o,3)),this.setAttribute("normal",new et(a,3)),this.setAttribute("uv",new et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ei(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class vn extends Lt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],p=[],d=[];let g=0;const v=[],m=i/2;let f=0;E(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new et(h,3)),this.setAttribute("normal",new et(p,3)),this.setAttribute("uv",new et(d,2));function E(){const _=new T,A=new T;let R=0;const C=(t-e)/i;for(let L=0;L<=r;L++){const S=[],M=L/r,D=M*(t-e)+e;for(let B=0;B<=s;B++){const z=B/s,G=z*l+a,V=Math.sin(G),X=Math.cos(G);A.x=D*V,A.y=-M*i+m,A.z=D*X,h.push(A.x,A.y,A.z),_.set(V,C,X).normalize(),p.push(_.x,_.y,_.z),d.push(z,1-M),S.push(g++)}v.push(S)}for(let L=0;L<s;L++)for(let S=0;S<r;S++){const M=v[S][L],D=v[S+1][L],B=v[S+1][L+1],z=v[S][L+1];(e>0||S!==0)&&(u.push(M,D,z),R+=3),(t>0||S!==r-1)&&(u.push(D,B,z),R+=3)}c.addGroup(f,R,0),f+=R}function y(_){const A=g,R=new ie,C=new T;let L=0;const S=_===!0?e:t,M=_===!0?1:-1;for(let B=1;B<=s;B++)h.push(0,m*M,0),p.push(0,M,0),d.push(.5,.5),g++;const D=g;for(let B=0;B<=s;B++){const G=B/s*l+a,V=Math.cos(G),X=Math.sin(G);C.x=S*X,C.y=m*M,C.z=S*V,h.push(C.x,C.y,C.z),p.push(0,M,0),R.x=V*.5+.5,R.y=X*.5*M+.5,d.push(R.x,R.y),g++}for(let B=0;B<s;B++){const z=A+B,G=D+B;_===!0?u.push(G,G+1,z):u.push(G+1,G,z),L+=3}c.addGroup(f,L,_===!0?1:2),f+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Nc extends Lt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new et(r,3)),this.setAttribute("normal",new et(r.slice(),3)),this.setAttribute("uv",new et(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const y=new T,_=new T,A=new T;for(let R=0;R<t.length;R+=3)d(t[R+0],y),d(t[R+1],_),d(t[R+2],A),l(y,_,A,E)}function l(E,y,_,A){const R=A+1,C=[];for(let L=0;L<=R;L++){C[L]=[];const S=E.clone().lerp(_,L/R),M=y.clone().lerp(_,L/R),D=R-L;for(let B=0;B<=D;B++)B===0&&L===R?C[L][B]=S:C[L][B]=S.clone().lerp(M,B/D)}for(let L=0;L<R;L++)for(let S=0;S<2*(R-L)-1;S++){const M=Math.floor(S/2);S%2===0?(p(C[L][M+1]),p(C[L+1][M]),p(C[L][M])):(p(C[L][M+1]),p(C[L+1][M+1]),p(C[L+1][M]))}}function c(E){const y=new T;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(E),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function u(){const E=new T;for(let y=0;y<r.length;y+=3){E.x=r[y+0],E.y=r[y+1],E.z=r[y+2];const _=m(E)/2/Math.PI+.5,A=f(E)/Math.PI+.5;o.push(_,1-A)}g(),h()}function h(){for(let E=0;E<o.length;E+=6){const y=o[E+0],_=o[E+2],A=o[E+4],R=Math.max(y,_,A),C=Math.min(y,_,A);R>.9&&C<.1&&(y<.2&&(o[E+0]+=1),_<.2&&(o[E+2]+=1),A<.2&&(o[E+4]+=1))}}function p(E){r.push(E.x,E.y,E.z)}function d(E,y){const _=E*3;y.x=e[_+0],y.y=e[_+1],y.z=e[_+2]}function g(){const E=new T,y=new T,_=new T,A=new T,R=new ie,C=new ie,L=new ie;for(let S=0,M=0;S<r.length;S+=9,M+=6){E.set(r[S+0],r[S+1],r[S+2]),y.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),R.set(o[M+0],o[M+1]),C.set(o[M+2],o[M+3]),L.set(o[M+4],o[M+5]),A.copy(E).add(y).add(_).divideScalar(3);const D=m(A);v(R,M+0,E,D),v(C,M+2,y,D),v(L,M+4,_,D)}}function v(E,y,_,A){A<0&&E.x===1&&(o[y]=E.x-1),_.x===0&&_.z===0&&(o[y]=A/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function f(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nc(e.vertices,e.indices,e.radius,e.details)}}class Hn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],p=i[s+1]-u,d=(o-u)/p;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ie:new T);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new T,s=[],r=[],o=[],a=new T,l=new ut;for(let d=0;d<=e;d++){const g=d/e;s[d]=this.getTangentAt(g,new T)}r[0]=new T,o[0]=new T;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),p=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),p<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ze(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Ze(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Fc extends Hn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ie){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),p=l-this.aX,d=c-this.aY;l=p*u-d*h+this.aX,c=p*h+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Om extends Fc{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Oc(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let p=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;p*=u,d*=u,s(o,a,p,d)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const zo=new T,sl=new Oc,rl=new Oc,ol=new Oc;class uc extends Hn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new T){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(zo.subVectors(s[0],s[1]).add(s[0]),c=zo);const h=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(zo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=zo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),v=Math.pow(h.distanceToSquared(p),d),m=Math.pow(p.distanceToSquared(u),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),sl.initNonuniformCatmullRom(c.x,h.x,p.x,u.x,g,v,m),rl.initNonuniformCatmullRom(c.y,h.y,p.y,u.y,g,v,m),ol.initNonuniformCatmullRom(c.z,h.z,p.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(sl.initCatmullRom(c.x,h.x,p.x,u.x,this.tension),rl.initCatmullRom(c.y,h.y,p.y,u.y,this.tension),ol.initCatmullRom(c.z,h.z,p.z,u.z,this.tension));return i.set(sl.calc(l),rl.calc(l),ol.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new T().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Xu(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function Bm(n,e){const t=1-n;return t*t*e}function km(n,e){return 2*(1-n)*n*e}function zm(n,e){return n*n*e}function Br(n,e,t,i){return Bm(n,e)+km(n,t)+zm(n,i)}function Gm(n,e){const t=1-n;return t*t*t*e}function Hm(n,e){const t=1-n;return 3*t*t*n*e}function Vm(n,e){return 3*(1-n)*n*n*e}function Wm(n,e){return n*n*n*e}function kr(n,e,t,i,s){return Gm(n,e)+Hm(n,t)+Vm(n,i)+Wm(n,s)}class Md extends Hn{constructor(e=new ie,t=new ie,i=new ie,s=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ie){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(kr(e,s.x,r.x,o.x,a.x),kr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class qm extends Hn{constructor(e=new T,t=new T,i=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new T){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(kr(e,s.x,r.x,o.x,a.x),kr(e,s.y,r.y,o.y,a.y),kr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Sd extends Hn{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Lr extends Hn{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ed extends Hn{constructor(e=new ie,t=new ie,i=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ie){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Br(e,s.x,r.x,o.x),Br(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bd extends Hn{constructor(e=new T,t=new T,i=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new T){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Br(e,s.x,r.x,o.x),Br(e,s.y,r.y,o.y),Br(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wd extends Hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(Xu(a,l.x,c.x,u.x,h.x),Xu(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new ie().fromArray(s))}return this}}var la=Object.freeze({__proto__:null,ArcCurve:Om,CatmullRomCurve3:uc,CubicBezierCurve:Md,CubicBezierCurve3:qm,EllipseCurve:Fc,LineCurve:Sd,LineCurve3:Lr,QuadraticBezierCurve:Ed,QuadraticBezierCurve3:bd,SplineCurve:wd});class Td extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new la[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new la[s.type]().fromJSON(s))}return this}}class Yu extends Td{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Sd(this.currentPoint.clone(),new ie(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new Ed(this.currentPoint.clone(),new ie(e,t),new ie(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new Md(this.currentPoint.clone(),new ie(e,t),new ie(i,s),new ie(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new wd(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){const c=new Fc(e,t,i,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Zs extends Yu{constructor(e){super(e),this.uuid=gs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Yu().fromJSON(s))}return this}}function Xm(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=Ad(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=Jm(n,e,r,t)),n.length>80*t){a=1/0,l=1/0;let u=-1/0,h=-1/0;for(let p=t;p<s;p+=t){const d=n[p],g=n[p+1];d<a&&(a=d),g<l&&(l=g),d>u&&(u=d),g>h&&(h=g)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return Kr(r,o,t,a,l,c,0),o}function Ad(n,e,t,i,s){let r;if(s===lg(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Zu(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Zu(o/i|0,n[o],n[o+1],r);return r&&ar(r,r.next)&&(Jr(r),r=r.next),r}function ps(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ar(t,t.next)||Rt(t.prev,t,t.next)===0)){if(Jr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Kr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&ng(n,i,s,r);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(r?Zm(n,i,s,r):Ym(n)){e.push(l.i,n.i,c.i),Jr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Km(ps(n),e),Kr(n,e,t,i,s,r,2)):o===2&&$m(n,e,t,i,s,r):Kr(ps(n),e,t,i,s,r,1);break}}}function Ym(n){const e=n.prev,t=n,i=n.next;if(Rt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(s,r,o),h=Math.min(a,l,c),p=Math.max(s,r,o),d=Math.max(a,l,c);let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=p&&g.y>=h&&g.y<=d&&Ir(s,a,r,l,o,c,g.x,g.y)&&Rt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Zm(n,e,t,i){const s=n.prev,r=n,o=n.next;if(Rt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,p=o.y,d=Math.min(a,l,c),g=Math.min(u,h,p),v=Math.max(a,l,c),m=Math.max(u,h,p),f=hc(d,g,e,t,i),E=hc(v,m,e,t,i);let y=n.prevZ,_=n.nextZ;for(;y&&y.z>=f&&_&&_.z<=E;){if(y.x>=d&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Ir(a,u,l,h,c,p,y.x,y.y)&&Rt(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Ir(a,u,l,h,c,p,_.x,_.y)&&Rt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=f;){if(y.x>=d&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Ir(a,u,l,h,c,p,y.x,y.y)&&Rt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=E;){if(_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Ir(a,u,l,h,c,p,_.x,_.y)&&Rt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Km(n,e){let t=n;do{const i=t.prev,s=t.next.next;!ar(i,s)&&Cd(i,t,t.next,s)&&$r(i,s)&&$r(s,i)&&(e.push(i.i,t.i,s.i),Jr(t),Jr(t.next),t=n=s),t=t.next}while(t!==n);return ps(t)}function $m(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&rg(o,a)){let l=Pd(o,a);o=ps(o,o.next),l=ps(l,l.next),Kr(o,e,t,i,s,r,0),Kr(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Jm(n,e,t,i){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Ad(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(sg(c))}s.sort(jm);for(let r=0;r<s.length;r++)t=Qm(s[r],t);return t}function jm(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Qm(n,e){const t=eg(n,e);if(!t)return e;const i=Pd(t,n);return ps(i,i.next),ps(t,t.next)}function eg(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,o;if(ar(n,t))return t;do{if(ar(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Rd(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){const h=Math.abs(s-t.y)/(i-t.x);$r(t,n)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&tg(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function tg(n,e){return Rt(n.prev,n,e.prev)<0&&Rt(e.next,n,n.next)<0}function ng(n,e,t,i){let s=n;do s.z===0&&(s.z=hc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,ig(s)}function ig(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function hc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function sg(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Rd(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Ir(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Rd(n,e,t,i,s,r,o,a)}function rg(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!og(n,e)&&($r(n,e)&&$r(e,n)&&ag(n,e)&&(Rt(n.prev,n,e.prev)||Rt(n,e.prev,e))||ar(n,e)&&Rt(n.prev,n,n.next)>0&&Rt(e.prev,e,e.next)>0)}function Rt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ar(n,e){return n.x===e.x&&n.y===e.y}function Cd(n,e,t,i){const s=Ho(Rt(n,e,t)),r=Ho(Rt(n,e,i)),o=Ho(Rt(t,i,n)),a=Ho(Rt(t,i,e));return!!(s!==r&&o!==a||s===0&&Go(n,t,e)||r===0&&Go(n,i,e)||o===0&&Go(t,n,i)||a===0&&Go(t,e,i))}function Go(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ho(n){return n>0?1:n<0?-1:0}function og(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Cd(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function $r(n,e){return Rt(n.prev,n,n.next)<0?Rt(n,e,n.next)>=0&&Rt(n,n.prev,e)>=0:Rt(n,e,n.prev)<0||Rt(n,n.next,e)<0}function ag(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Pd(n,e){const t=dc(n.i,n.x,n.y),i=dc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Zu(n,e,t,i){const s=dc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Jr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function dc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function lg(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class cg{static triangulate(e,t,i=2){return Xm(e,t,i)}}class ui{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return ui.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];Ku(e),$u(i,e);let o=e.length;t.forEach(Ku);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,$u(i,t[l]);const a=cg.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Ku(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function $u(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class ca extends Lt{constructor(e=new Zs([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new et(s,3)),this.setAttribute("uv",new et(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:ug;let y,_=!1,A,R,C,L;f&&(y=f.getSpacedPoints(u),_=!0,p=!1,A=f.computeFrenetFrames(u,!1),R=new T,C=new T,L=new T),p||(m=0,d=0,g=0,v=0);const S=a.extractPoints(c);let M=S.shape;const D=S.holes;if(!ui.isClockWise(M)){M=M.reverse();for(let ee=0,J=D.length;ee<J;ee++){const K=D[ee];ui.isClockWise(K)&&(D[ee]=K.reverse())}}function z(ee){const K=10000000000000001e-36;let k=ee[0];for(let le=1;le<=ee.length;le++){const ne=le%ee.length,ce=ee[ne],Oe=ce.x-k.x,Le=ce.y-k.y,w=Oe*Oe+Le*Le,x=Math.max(Math.abs(ce.x),Math.abs(ce.y),Math.abs(k.x),Math.abs(k.y)),O=K*x*x;if(w<=O){ee.splice(ne,1),le--;continue}k=ce}}z(M),D.forEach(z);const G=D.length,V=M;for(let ee=0;ee<G;ee++){const J=D[ee];M=M.concat(J)}function X(ee,J,K){return J||console.error("THREE.ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(J,K)}const $=M.length;function U(ee,J,K){let k,le,ne;const ce=ee.x-J.x,Oe=ee.y-J.y,Le=K.x-ee.x,w=K.y-ee.y,x=ce*ce+Oe*Oe,O=ce*w-Oe*Le;if(Math.abs(O)>Number.EPSILON){const q=Math.sqrt(x),te=Math.sqrt(Le*Le+w*w),Y=J.x-Oe/q,Pe=J.y+ce/q,he=K.x-w/te,Ae=K.y+Le/te,Re=((he-Y)*w-(Ae-Pe)*Le)/(ce*w-Oe*Le);k=Y+ce*Re-ee.x,le=Pe+Oe*Re-ee.y;const re=k*k+le*le;if(re<=2)return new ie(k,le);ne=Math.sqrt(re/2)}else{let q=!1;ce>Number.EPSILON?Le>Number.EPSILON&&(q=!0):ce<-Number.EPSILON?Le<-Number.EPSILON&&(q=!0):Math.sign(Oe)===Math.sign(w)&&(q=!0),q?(k=-Oe,le=ce,ne=Math.sqrt(x)):(k=ce,le=Oe,ne=Math.sqrt(x/2))}return new ie(k/ne,le/ne)}const se=[];for(let ee=0,J=V.length,K=J-1,k=ee+1;ee<J;ee++,K++,k++)K===J&&(K=0),k===J&&(k=0),se[ee]=U(V[ee],V[K],V[k]);const fe=[];let xe,Ie=se.concat();for(let ee=0,J=G;ee<J;ee++){const K=D[ee];xe=[];for(let k=0,le=K.length,ne=le-1,ce=k+1;k<le;k++,ne++,ce++)ne===le&&(ne=0),ce===le&&(ce=0),xe[k]=U(K[k],K[ne],K[ce]);fe.push(xe),Ie=Ie.concat(xe)}let ke;if(m===0)ke=ui.triangulateShape(V,D);else{const ee=[],J=[];for(let K=0;K<m;K++){const k=K/m,le=d*Math.cos(k*Math.PI/2),ne=g*Math.sin(k*Math.PI/2)+v;for(let ce=0,Oe=V.length;ce<Oe;ce++){const Le=X(V[ce],se[ce],ne);Te(Le.x,Le.y,-le),k===0&&ee.push(Le)}for(let ce=0,Oe=G;ce<Oe;ce++){const Le=D[ce];xe=fe[ce];const w=[];for(let x=0,O=Le.length;x<O;x++){const q=X(Le[x],xe[x],ne);Te(q.x,q.y,-le),k===0&&w.push(q)}k===0&&J.push(w)}}ke=ui.triangulateShape(ee,J)}const it=ke.length,Ke=g+v;for(let ee=0;ee<$;ee++){const J=p?X(M[ee],Ie[ee],Ke):M[ee];_?(C.copy(A.normals[0]).multiplyScalar(J.x),R.copy(A.binormals[0]).multiplyScalar(J.y),L.copy(y[0]).add(C).add(R),Te(L.x,L.y,L.z)):Te(J.x,J.y,0)}for(let ee=1;ee<=u;ee++)for(let J=0;J<$;J++){const K=p?X(M[J],Ie[J],Ke):M[J];_?(C.copy(A.normals[ee]).multiplyScalar(K.x),R.copy(A.binormals[ee]).multiplyScalar(K.y),L.copy(y[ee]).add(C).add(R),Te(L.x,L.y,L.z)):Te(K.x,K.y,h/u*ee)}for(let ee=m-1;ee>=0;ee--){const J=ee/m,K=d*Math.cos(J*Math.PI/2),k=g*Math.sin(J*Math.PI/2)+v;for(let le=0,ne=V.length;le<ne;le++){const ce=X(V[le],se[le],k);Te(ce.x,ce.y,h+K)}for(let le=0,ne=D.length;le<ne;le++){const ce=D[le];xe=fe[le];for(let Oe=0,Le=ce.length;Oe<Le;Oe++){const w=X(ce[Oe],xe[Oe],k);_?Te(w.x,w.y+y[u-1].y,y[u-1].x+K):Te(w.x,w.y,h+K)}}}Z(),j();function Z(){const ee=s.length/3;if(p){let J=0,K=$*J;for(let k=0;k<it;k++){const le=ke[k];Me(le[2]+K,le[1]+K,le[0]+K)}J=u+m*2,K=$*J;for(let k=0;k<it;k++){const le=ke[k];Me(le[0]+K,le[1]+K,le[2]+K)}}else{for(let J=0;J<it;J++){const K=ke[J];Me(K[2],K[1],K[0])}for(let J=0;J<it;J++){const K=ke[J];Me(K[0]+$*u,K[1]+$*u,K[2]+$*u)}}i.addGroup(ee,s.length/3-ee,0)}function j(){const ee=s.length/3;let J=0;ye(V,J),J+=V.length;for(let K=0,k=D.length;K<k;K++){const le=D[K];ye(le,J),J+=le.length}i.addGroup(ee,s.length/3-ee,1)}function ye(ee,J){let K=ee.length;for(;--K>=0;){const k=K;let le=K-1;le<0&&(le=ee.length-1);for(let ne=0,ce=u+m*2;ne<ce;ne++){const Oe=$*ne,Le=$*(ne+1),w=J+k+Oe,x=J+le+Oe,O=J+le+Le,q=J+k+Le;Je(w,x,O,q)}}}function Te(ee,J,K){l.push(ee),l.push(J),l.push(K)}function Me(ee,J,K){dt(ee),dt(J),dt(K);const k=s.length/3,le=E.generateTopUV(i,s,k-3,k-2,k-1);P(le[0]),P(le[1]),P(le[2])}function Je(ee,J,K,k){dt(ee),dt(J),dt(k),dt(J),dt(K),dt(k);const le=s.length/3,ne=E.generateSideWallUV(i,s,le-6,le-3,le-2,le-1);P(ne[0]),P(ne[1]),P(ne[3]),P(ne[1]),P(ne[2]),P(ne[3])}function dt(ee){s.push(l[ee*3+0]),s.push(l[ee*3+1]),s.push(l[ee*3+2])}function P(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return hg(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new la[s.type]().fromJSON(s)),new ca(i,e.options)}}const ug={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new ie(r,o),new ie(a,l),new ie(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],p=e[s*3],d=e[s*3+1],g=e[s*3+2],v=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ie(o,1-l),new ie(c,1-h),new ie(p,1-g),new ie(v,1-f)]:[new ie(a,1-l),new ie(u,1-h),new ie(d,1-g),new ie(m,1-f)]}};function hg(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Bc extends Nc{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Bc(e.radius,e.detail)}}class gi extends Lt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,p=t/l,d=[],g=[],v=[],m=[];for(let f=0;f<u;f++){const E=f*p-o;for(let y=0;y<c;y++){const _=y*h-r;g.push(_,-E,0),v.push(0,0,1),m.push(y/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<a;E++){const y=E+c*f,_=E+c*(f+1),A=E+1+c*(f+1),R=E+1+c*f;d.push(y,_,R),d.push(_,A,R)}this.setIndex(d),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(v,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gi(e.width,e.height,e.widthSegments,e.heightSegments)}}class ya extends Lt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let h=e;const p=(t-e)/s,d=new T,g=new ie;for(let v=0;v<=s;v++){for(let m=0;m<=i;m++){const f=r+m/i*o;d.x=h*Math.cos(f),d.y=h*Math.sin(f),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,u.push(g.x,g.y)}h+=p}for(let v=0;v<s;v++){const m=v*(i+1);for(let f=0;f<i;f++){const E=f+m,y=E,_=E+i+1,A=E+i+2,R=E+1;a.push(y,_,R),a.push(_,A,R)}}this.setIndex(a),this.setAttribute("position",new et(l,3)),this.setAttribute("normal",new et(c,3)),this.setAttribute("uv",new et(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ya(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ma extends Lt{constructor(e=new Zs([new ie(0,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new et(s,3)),this.setAttribute("normal",new et(r,3)),this.setAttribute("uv",new et(o,2));function c(u){const h=s.length/3,p=u.extractPoints(t);let d=p.shape;const g=p.holes;ui.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,f=g.length;m<f;m++){const E=g[m];ui.isClockWise(E)===!0&&(g[m]=E.reverse())}const v=ui.triangulateShape(d,g);for(let m=0,f=g.length;m<f;m++){const E=g[m];d=d.concat(E)}for(let m=0,f=d.length;m<f;m++){const E=d[m];s.push(E.x,E.y,0),r.push(0,0,1),o.push(E.x,E.y)}for(let m=0,f=v.length;m<f;m++){const E=v[m],y=E[0]+h,_=E[1]+h,A=E[2]+h;i.push(y,_,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return dg(t,e)}static fromJSON(e,t){const i=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];i.push(o)}return new Ma(i,e.curveSegments)}}function dg(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}class Xn extends Lt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new T,p=new T,d=[],g=[],v=[],m=[];for(let f=0;f<=i;f++){const E=[],y=f/i;let _=0;f===0&&o===0?_=.5/t:f===i&&l===Math.PI&&(_=-.5/t);for(let A=0;A<=t;A++){const R=A/t;h.x=-e*Math.cos(s+R*r)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(s+R*r)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),p.copy(h).normalize(),v.push(p.x,p.y,p.z),m.push(R+_,1-y),E.push(c++)}u.push(E)}for(let f=0;f<i;f++)for(let E=0;E<t;E++){const y=u[f][E+1],_=u[f][E],A=u[f+1][E],R=u[f+1][E+1];(f!==0||o>0)&&d.push(y,_,R),(f!==i-1||l<Math.PI)&&d.push(_,A,R)}this.setIndex(d),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(v,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class os extends Lt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new T,h=new T,p=new T;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){const v=g/s*r,m=d/i*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(v),h.y=(e+t*Math.cos(m))*Math.sin(v),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),p.subVectors(h,u).normalize(),l.push(p.x,p.y,p.z),c.push(g/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){const v=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,f=(s+1)*(d-1)+g,E=(s+1)*d+g;o.push(v,m,E),o.push(m,f,E)}this.setIndex(o),this.setAttribute("position",new et(a,3)),this.setAttribute("normal",new et(l,3)),this.setAttribute("uv",new et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new os(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Pi extends Lt{constructor(e=new bd(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new T,l=new T,c=new ie;let u=new T;const h=[],p=[],d=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new et(h,3)),this.setAttribute("normal",new et(p,3)),this.setAttribute("uv",new et(d,2));function v(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),E(),f()}function m(y){u=e.getPointAt(y/t,u);const _=o.normals[y],A=o.binormals[y];for(let R=0;R<=s;R++){const C=R/s*Math.PI*2,L=Math.sin(C),S=-Math.cos(C);l.x=S*_.x+L*A.x,l.y=S*_.y+L*A.y,l.z=S*_.z+L*A.z,l.normalize(),p.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,h.push(a.x,a.y,a.z)}}function f(){for(let y=1;y<=t;y++)for(let _=1;_<=s;_++){const A=(s+1)*(y-1)+(_-1),R=(s+1)*y+(_-1),C=(s+1)*y+_,L=(s+1)*(y-1)+_;g.push(A,R,L),g.push(R,C,L)}}function E(){for(let y=0;y<=t;y++)for(let _=0;_<=s;_++)c.x=y/t,c.y=_/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Pi(new la[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Nn extends xs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=od,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fg extends Nn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class pg extends xs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mg extends xs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Sa extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class gg extends Sa{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const al=new ut,Ju=new T,ju=new T;class Dd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.mapType=Jn,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uc,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ju.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ju),ju.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ju),t.updateMatrixWorld(),al.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(al,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(al)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Qu=new ut,wr=new T,ll=new T;class vg extends Dd{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ie(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),wr.setFromMatrixPosition(e.matrixWorld),i.position.copy(wr),ll.copy(i.position),ll.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ll),i.updateMatrixWorld(),s.makeTranslation(-wr.x,-wr.y,-wr.z),Qu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qu,i.coordinateSystem,i.reversedDepth)}}class _g extends Sa{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new vg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ld extends pd{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class xg extends Dd{constructor(){super(new Ld(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fc extends Sa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new xg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class yg extends Sa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Mg extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Sg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const eh=new ut;class Eg{constructor(e,t,i=0,s=1/0){this.ray=new no(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Lc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return eh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(eh),this}intersectObject(e,t=!0,i=[]){return pc(e,this,i,t),i.sort(th),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)pc(e[s],this,i,t);return i.sort(th),i}}function th(n,e){return n.distance-e.distance}function pc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)pc(r[o],e,t,!0)}}class nh{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ze(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class bg extends Nm{constructor(e=10,t=10,i=4473924,s=8947848){i=new He(i),s=new He(s);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let p=0,d=0,g=-a;p<=t;p++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const v=p===r?i:s;v.toArray(c,d),d+=3,v.toArray(c,d),d+=3,v.toArray(c,d),d+=3,v.toArray(c,d),d+=3}const u=new Lt;u.setAttribute("position",new et(l,3)),u.setAttribute("color",new et(c,3));const h=new vd({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class wg extends ms{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function ih(n,e,t,i){const s=Tg(i);switch(t){case id:return n*e;case Tc:return n*e/s.components*s.byteLength;case Ac:return n*e/s.components*s.byteLength;case rd:return n*e*2/s.components*s.byteLength;case Rc:return n*e*2/s.components*s.byteLength;case sd:return n*e*3/s.components*s.byteLength;case Bn:return n*e*4/s.components*s.byteLength;case Cc:return n*e*4/s.components*s.byteLength;case Ko:case $o:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Jo:case jo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fl:case Bl:return Math.max(n,16)*Math.max(e,8)/4;case Nl:case Ol:return Math.max(n,8)*Math.max(e,8)/2;case kl:case zl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Gl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ql:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case $l:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case jl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ql:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ec:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case tc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case nc:case ic:case sc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case rc:case oc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ac:case lc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Tg(n){switch(n){case Jn:case Qh:return{byteLength:1,components:1};case Vr:case ed:case to:return{byteLength:2,components:1};case bc:case wc:return{byteLength:2,components:4};case hs:case Ec:case Zn:return{byteLength:4,components:1};case td:case nd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mc);function Id(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Ag(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,p=n.createBuffer();n.bindBuffer(l,p),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let p=0;for(let d=1;d<h.length;d++){const g=h[p],v=h[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++p,h[p]=v)}h.length=p+1;for(let d=0,g=h.length;d<g;d++){const v=h[d];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Rg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Pg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ig=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ug=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ng=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Og=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Gg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Hg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$g=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Jg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Qg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,e0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,t0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,n0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,i0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,s0="gl_FragColor = linearToOutputTexel( gl_FragColor );",r0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,o0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,a0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,l0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,c0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,u0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,h0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,d0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,f0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,p0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,m0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,g0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,v0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,x0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,y0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,M0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,S0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,E0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,b0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,w0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,T0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,A0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,R0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,C0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,P0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,D0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,U0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,N0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,F0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,O0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,k0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,z0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,G0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,H0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,W0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,X0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,J0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,j0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Q0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ev=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,iv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ov=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,av=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,uv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_v=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ev=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Tv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Av=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Uv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Nv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Fv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ov=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Hv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Xv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Kv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$v=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,n_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,i_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,r_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,o_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:Rg,alphahash_pars_fragment:Cg,alphamap_fragment:Pg,alphamap_pars_fragment:Dg,alphatest_fragment:Lg,alphatest_pars_fragment:Ig,aomap_fragment:Ug,aomap_pars_fragment:Ng,batching_pars_vertex:Fg,batching_vertex:Og,begin_vertex:Bg,beginnormal_vertex:kg,bsdfs:zg,iridescence_fragment:Gg,bumpmap_pars_fragment:Hg,clipping_planes_fragment:Vg,clipping_planes_pars_fragment:Wg,clipping_planes_pars_vertex:qg,clipping_planes_vertex:Xg,color_fragment:Yg,color_pars_fragment:Zg,color_pars_vertex:Kg,color_vertex:$g,common:Jg,cube_uv_reflection_fragment:jg,defaultnormal_vertex:Qg,displacementmap_pars_vertex:e0,displacementmap_vertex:t0,emissivemap_fragment:n0,emissivemap_pars_fragment:i0,colorspace_fragment:s0,colorspace_pars_fragment:r0,envmap_fragment:o0,envmap_common_pars_fragment:a0,envmap_pars_fragment:l0,envmap_pars_vertex:c0,envmap_physical_pars_fragment:y0,envmap_vertex:u0,fog_vertex:h0,fog_pars_vertex:d0,fog_fragment:f0,fog_pars_fragment:p0,gradientmap_pars_fragment:m0,lightmap_pars_fragment:g0,lights_lambert_fragment:v0,lights_lambert_pars_fragment:_0,lights_pars_begin:x0,lights_toon_fragment:M0,lights_toon_pars_fragment:S0,lights_phong_fragment:E0,lights_phong_pars_fragment:b0,lights_physical_fragment:w0,lights_physical_pars_fragment:T0,lights_fragment_begin:A0,lights_fragment_maps:R0,lights_fragment_end:C0,logdepthbuf_fragment:P0,logdepthbuf_pars_fragment:D0,logdepthbuf_pars_vertex:L0,logdepthbuf_vertex:I0,map_fragment:U0,map_pars_fragment:N0,map_particle_fragment:F0,map_particle_pars_fragment:O0,metalnessmap_fragment:B0,metalnessmap_pars_fragment:k0,morphinstance_vertex:z0,morphcolor_vertex:G0,morphnormal_vertex:H0,morphtarget_pars_vertex:V0,morphtarget_vertex:W0,normal_fragment_begin:q0,normal_fragment_maps:X0,normal_pars_fragment:Y0,normal_pars_vertex:Z0,normal_vertex:K0,normalmap_pars_fragment:$0,clearcoat_normal_fragment_begin:J0,clearcoat_normal_fragment_maps:j0,clearcoat_pars_fragment:Q0,iridescence_pars_fragment:ev,opaque_fragment:tv,packing:nv,premultiplied_alpha_fragment:iv,project_vertex:sv,dithering_fragment:rv,dithering_pars_fragment:ov,roughnessmap_fragment:av,roughnessmap_pars_fragment:lv,shadowmap_pars_fragment:cv,shadowmap_pars_vertex:uv,shadowmap_vertex:hv,shadowmask_pars_fragment:dv,skinbase_vertex:fv,skinning_pars_vertex:pv,skinning_vertex:mv,skinnormal_vertex:gv,specularmap_fragment:vv,specularmap_pars_fragment:_v,tonemapping_fragment:xv,tonemapping_pars_fragment:yv,transmission_fragment:Mv,transmission_pars_fragment:Sv,uv_pars_fragment:Ev,uv_pars_vertex:bv,uv_vertex:wv,worldpos_vertex:Tv,background_vert:Av,background_frag:Rv,backgroundCube_vert:Cv,backgroundCube_frag:Pv,cube_vert:Dv,cube_frag:Lv,depth_vert:Iv,depth_frag:Uv,distanceRGBA_vert:Nv,distanceRGBA_frag:Fv,equirect_vert:Ov,equirect_frag:Bv,linedashed_vert:kv,linedashed_frag:zv,meshbasic_vert:Gv,meshbasic_frag:Hv,meshlambert_vert:Vv,meshlambert_frag:Wv,meshmatcap_vert:qv,meshmatcap_frag:Xv,meshnormal_vert:Yv,meshnormal_frag:Zv,meshphong_vert:Kv,meshphong_frag:$v,meshphysical_vert:Jv,meshphysical_frag:jv,meshtoon_vert:Qv,meshtoon_frag:e_,points_vert:t_,points_frag:n_,shadow_vert:i_,shadow_frag:s_,sprite_vert:r_,sprite_frag:o_},pe={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Wn={basic:{uniforms:Jt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Jt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new He(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Jt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Jt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Jt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new He(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Jt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Jt([pe.points,pe.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Jt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Jt([pe.common,pe.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Jt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Jt([pe.sprite,pe.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Jt([pe.common,pe.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Jt([pe.lights,pe.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Wn.physical={uniforms:Jt([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Vo={r:0,b:0,g:0},Ki=new jn,a_=new ut;function l_(n,e,t,i,s,r,o){const a=new He(0);let l=r===!0?0:1,c,u,h=null,p=0,d=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function v(y){let _=!1;const A=g(y);A===null?f(a,l):A&&A.isColor&&(f(A,1),_=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,_){const A=g(_);A&&(A.isCubeTexture||A.mapping===xa)?(u===void 0&&(u=new we(new gn(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:or(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ki.copy(_.backgroundRotation),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(a_.makeRotationFromEuler(Ki)),u.material.toneMapped=rt.getTransfer(A.colorSpace)!==pt,(h!==A||p!==A.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=A,p=A.version,d=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new we(new gi(2,2),new Qn({name:"BackgroundMaterial",uniforms:or(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=rt.getTransfer(A.colorSpace)!==pt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||p!==A.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=A,p=A.version,d=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,_){y.getRGB(Vo,fd(n)),i.buffers.color.setClear(Vo.r,Vo.g,Vo.b,_,o)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),l=_,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(a,l)},render:v,addToRenderList:m,dispose:E}}function c_(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=p(null);let r=s,o=!1;function a(M,D,B,z,G){let V=!1;const X=h(z,B,D);r!==X&&(r=X,c(r.object)),V=d(M,z,B,G),V&&g(M,z,B,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,_(M,D,B,z),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function h(M,D,B){const z=B.wireframe===!0;let G=i[M.id];G===void 0&&(G={},i[M.id]=G);let V=G[D.id];V===void 0&&(V={},G[D.id]=V);let X=V[z];return X===void 0&&(X=p(l()),V[z]=X),X}function p(M){const D=[],B=[],z=[];for(let G=0;G<t;G++)D[G]=0,B[G]=0,z[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:z,object:M,attributes:{},index:null}}function d(M,D,B,z){const G=r.attributes,V=D.attributes;let X=0;const $=B.getAttributes();for(const U in $)if($[U].location>=0){const fe=G[U];let xe=V[U];if(xe===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&(xe=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&(xe=M.instanceColor)),fe===void 0||fe.attribute!==xe||xe&&fe.data!==xe.data)return!0;X++}return r.attributesNum!==X||r.index!==z}function g(M,D,B,z){const G={},V=D.attributes;let X=0;const $=B.getAttributes();for(const U in $)if($[U].location>=0){let fe=V[U];fe===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&(fe=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&(fe=M.instanceColor));const xe={};xe.attribute=fe,fe&&fe.data&&(xe.data=fe.data),G[U]=xe,X++}r.attributes=G,r.attributesNum=X,r.index=z}function v(){const M=r.newAttributes;for(let D=0,B=M.length;D<B;D++)M[D]=0}function m(M){f(M,0)}function f(M,D){const B=r.newAttributes,z=r.enabledAttributes,G=r.attributeDivisors;B[M]=1,z[M]===0&&(n.enableVertexAttribArray(M),z[M]=1),G[M]!==D&&(n.vertexAttribDivisor(M,D),G[M]=D)}function E(){const M=r.newAttributes,D=r.enabledAttributes;for(let B=0,z=D.length;B<z;B++)D[B]!==M[B]&&(n.disableVertexAttribArray(B),D[B]=0)}function y(M,D,B,z,G,V,X){X===!0?n.vertexAttribIPointer(M,D,B,G,V):n.vertexAttribPointer(M,D,B,z,G,V)}function _(M,D,B,z){v();const G=z.attributes,V=B.getAttributes(),X=D.defaultAttributeValues;for(const $ in V){const U=V[$];if(U.location>=0){let se=G[$];if(se===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(se=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(se=M.instanceColor)),se!==void 0){const fe=se.normalized,xe=se.itemSize,Ie=e.get(se);if(Ie===void 0)continue;const ke=Ie.buffer,it=Ie.type,Ke=Ie.bytesPerElement,Z=it===n.INT||it===n.UNSIGNED_INT||se.gpuType===Ec;if(se.isInterleavedBufferAttribute){const j=se.data,ye=j.stride,Te=se.offset;if(j.isInstancedInterleavedBuffer){for(let Me=0;Me<U.locationSize;Me++)f(U.location+Me,j.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Me=0;Me<U.locationSize;Me++)m(U.location+Me);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let Me=0;Me<U.locationSize;Me++)y(U.location+Me,xe/U.locationSize,it,fe,ye*Ke,(Te+xe/U.locationSize*Me)*Ke,Z)}else{if(se.isInstancedBufferAttribute){for(let j=0;j<U.locationSize;j++)f(U.location+j,se.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let j=0;j<U.locationSize;j++)m(U.location+j);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let j=0;j<U.locationSize;j++)y(U.location+j,xe/U.locationSize,it,fe,xe*Ke,xe/U.locationSize*j*Ke,Z)}}else if(X!==void 0){const fe=X[$];if(fe!==void 0)switch(fe.length){case 2:n.vertexAttrib2fv(U.location,fe);break;case 3:n.vertexAttrib3fv(U.location,fe);break;case 4:n.vertexAttrib4fv(U.location,fe);break;default:n.vertexAttrib1fv(U.location,fe)}}}}E()}function A(){L();for(const M in i){const D=i[M];for(const B in D){const z=D[B];for(const G in z)u(z[G].object),delete z[G];delete D[B]}delete i[M]}}function R(M){if(i[M.id]===void 0)return;const D=i[M.id];for(const B in D){const z=D[B];for(const G in z)u(z[G].object),delete z[G];delete D[B]}delete i[M.id]}function C(M){for(const D in i){const B=i[D];if(B[M.id]===void 0)continue;const z=B[M.id];for(const G in z)u(z[G].object),delete z[G];delete B[M.id]}}function L(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:E}}function u_(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,i,1)}function l(c,u,h,p){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],p[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,p,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*p[v];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function h_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Bn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const L=C===to&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Jn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Zn&&!L)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:p,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:A,maxSamples:R}}function d_(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Ri,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const d=h.length!==0||p||i!==0||s;return s=p,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,p){t=u(h,p,0)},this.setState=function(h,p,d){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const E=r?0:i,y=E*4;let _=f.clippingState||null;l.value=_,_=u(g,p,y,d);for(let A=0;A!==y;++A)_[A]=t[A];f.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,p,d,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=d+v*4,E=p.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,_=d;y!==v;++y,_+=4)o.copy(h[y]).applyMatrix4(E,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function f_(n){let e=new WeakMap;function t(o,a){return a===Dl?o.mapping=ir:a===Ll&&(o.mapping=sr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Dl||a===Ll)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Am(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Hs=4,sh=[.125,.215,.35,.446,.526,.582],ts=20,cl=new Ld,rh=new He;let ul=null,hl=0,dl=0,fl=!1;const Ji=(1+Math.sqrt(5))/2,Bs=1/Ji,oh=[new T(-Ji,Bs,0),new T(Ji,Bs,0),new T(-Bs,0,Ji),new T(Bs,0,Ji),new T(0,Ji,-Bs),new T(0,Ji,Bs),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],p_=new T;class ah{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=p_}=r;ul=this._renderer.getRenderTarget(),hl=this._renderer.getActiveCubeFace(),dl=this._renderer.getActiveMipmapLevel(),fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ch(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ul,hl,dl),this._renderer.xr.enabled=fl,e.scissorTest=!1,Wo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ir||e.mapping===sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ul=this._renderer.getRenderTarget(),hl=this._renderer.getActiveCubeFace(),dl=this._renderer.getActiveMipmapLevel(),fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:to,format:Bn,colorSpace:rr,depthBuffer:!1},s=lh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lh(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=m_(r)),this._blurMaterial=g_(r,e,t)}return s}_compileMaterial(e){const t=new we(this._lodPlanes[0],e);this._renderer.compile(t,cl)}_sceneToCubeUV(e,t,i,s,r){const l=new ln(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,d=h.toneMapping;h.getClearColor(rh),h.toneMapping=Ni,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const v=new Ot({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),m=new we(new gn,v);let f=!1;const E=e.background;E?E.isColor&&(v.color.copy(E),e.background=null,f=!0):(v.color.copy(rh),f=!0);for(let y=0;y<6;y++){const _=y%3;_===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[y],r.y,r.z)):_===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[y]));const A=this._cubeSize;Wo(s,_*A,y>2?A:0,A,A),h.setRenderTarget(s),f&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=p,e.background=E}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ir||e.mapping===sr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ch());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new we(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Wo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,cl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=oh[(s-r-1)%oh.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new we(this._lodPlanes[s],c),p=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ts-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):ts;m>ts&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ts}`);const f=[];let E=0;for(let C=0;C<ts;++C){const L=C/v,S=Math.exp(-L*L/2);f.push(S),C===0?E+=S:C<m&&(E+=2*S)}for(let C=0;C<f.length;C++)f[C]=f[C]/E;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:y}=this;p.dTheta.value=g,p.mipInt.value=y-i;const _=this._sizeLods[s],A=3*_*(s>y-Hs?s-y+Hs:0),R=4*(this._cubeSize-_);Wo(t,A,R,3*_,2*_),l.setRenderTarget(t),l.render(h,cl)}}function m_(n){const e=[],t=[],i=[];let s=n;const r=n-Hs+1+sh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Hs?l=sh[o-n+Hs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,p=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,v=3,m=2,f=1,E=new Float32Array(v*g*d),y=new Float32Array(m*g*d),_=new Float32Array(f*g*d);for(let R=0;R<d;R++){const C=R%3*2/3-1,L=R>2?0:-1,S=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];E.set(S,v*g*R),y.set(p,m*g*R);const M=[R,R,R,R,R,R];_.set(M,f*g*R)}const A=new Lt;A.setAttribute("position",new bn(E,v)),A.setAttribute("uv",new bn(y,m)),A.setAttribute("faceIndex",new bn(_,f)),e.push(A),s>Hs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function lh(n,e,t){const i=new fs(n,e,t);return i.texture.mapping=xa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function g_(n,e,t){const i=new Float32Array(ts),s=new T(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function ch(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function uh(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function kc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function v_(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Dl||l===Ll,u=l===ir||l===sr;if(c||u){let h=e.get(a);const p=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new ah(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new ah(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function __(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Zr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function x_(n,e,t,i){const s={},r=new WeakMap;function o(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete s[p.id];const d=r.get(p);d&&(e.remove(d),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(h,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,t.memory.geometries++),p}function l(h){const p=h.attributes;for(const d in p)e.update(p[d],n.ARRAY_BUFFER)}function c(h){const p=[],d=h.index,g=h.attributes.position;let v=0;if(d!==null){const E=d.array;v=d.version;for(let y=0,_=E.length;y<_;y+=3){const A=E[y+0],R=E[y+1],C=E[y+2];p.push(A,R,R,C,C,A)}}else if(g!==void 0){const E=g.array;v=g.version;for(let y=0,_=E.length/3-1;y<_;y+=3){const A=y+0,R=y+1,C=y+2;p.push(A,R,R,C,C,A)}}else return;const m=new(ld(p)?dd:hd)(p,1);m.version=v;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function u(h){const p=r.get(h);if(p){const d=h.index;d!==null&&p.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function y_(n,e,t){let i;function s(p){i=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,d){n.drawElements(i,d,r,p*o),t.update(d,i,1)}function c(p,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,p*o,g),t.update(d,i,g))}function u(p,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,p,0,g);let m=0;for(let f=0;f<g;f++)m+=d[f];t.update(m,i,1)}function h(p,d,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<p.length;f++)c(p[f]/o,d[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,p,0,v,0,g);let f=0;for(let E=0;E<g;E++)f+=d[E]*v[E];t.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function M_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function S_(n,e,t){const i=new WeakMap,s=new gt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let p=i.get(a);if(p===void 0||p.count!==h){let M=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var d=M;p!==void 0&&p.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let A=a.attributes.position.count*_,R=1;A>e.maxTextureSize&&(R=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const C=new Float32Array(A*R*4*h),L=new cd(C,A,R,h);L.type=Zn,L.needsUpdate=!0;const S=_*4;for(let D=0;D<h;D++){const B=f[D],z=E[D],G=y[D],V=A*R*4*D;for(let X=0;X<B.count;X++){const $=X*S;g===!0&&(s.fromBufferAttribute(B,X),C[V+$+0]=s.x,C[V+$+1]=s.y,C[V+$+2]=s.z,C[V+$+3]=0),v===!0&&(s.fromBufferAttribute(z,X),C[V+$+4]=s.x,C[V+$+5]=s.y,C[V+$+6]=s.z,C[V+$+7]=0),m===!0&&(s.fromBufferAttribute(G,X),C[V+$+8]=s.x,C[V+$+9]=s.y,C[V+$+10]=s.z,C[V+$+11]=G.itemSize===4?s.w:1)}}p={count:h,texture:L,size:new ie(A,R)},i.set(a,p),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:r}}function E_(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Ud=new Qt,hh=new xd(1,1),Nd=new cd,Fd=new um,Od=new md,dh=[],fh=[],ph=new Float32Array(16),mh=new Float32Array(9),gh=new Float32Array(4);function hr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=dh[s];if(r===void 0&&(r=new Float32Array(s),dh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ea(n,e){let t=fh[e];t===void 0&&(t=new Int32Array(e),fh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function b_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function w_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2fv(this.addr,e),kt(t,e)}}function T_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;n.uniform3fv(this.addr,e),kt(t,e)}}function A_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4fv(this.addr,e),kt(t,e)}}function R_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,i))return;gh.set(i),n.uniformMatrix2fv(this.addr,!1,gh),kt(t,i)}}function C_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,i))return;mh.set(i),n.uniformMatrix3fv(this.addr,!1,mh),kt(t,i)}}function P_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,i))return;ph.set(i),n.uniformMatrix4fv(this.addr,!1,ph),kt(t,i)}}function D_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function L_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2iv(this.addr,e),kt(t,e)}}function I_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3iv(this.addr,e),kt(t,e)}}function U_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4iv(this.addr,e),kt(t,e)}}function N_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function F_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2uiv(this.addr,e),kt(t,e)}}function O_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3uiv(this.addr,e),kt(t,e)}}function B_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4uiv(this.addr,e),kt(t,e)}}function k_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(hh.compareFunction=ad,r=hh):r=Ud,t.setTexture2D(e||r,s)}function z_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Fd,s)}function G_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Od,s)}function H_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Nd,s)}function V_(n){switch(n){case 5126:return b_;case 35664:return w_;case 35665:return T_;case 35666:return A_;case 35674:return R_;case 35675:return C_;case 35676:return P_;case 5124:case 35670:return D_;case 35667:case 35671:return L_;case 35668:case 35672:return I_;case 35669:case 35673:return U_;case 5125:return N_;case 36294:return F_;case 36295:return O_;case 36296:return B_;case 35678:case 36198:case 36298:case 36306:case 35682:return k_;case 35679:case 36299:case 36307:return z_;case 35680:case 36300:case 36308:case 36293:return G_;case 36289:case 36303:case 36311:case 36292:return H_}}function W_(n,e){n.uniform1fv(this.addr,e)}function q_(n,e){const t=hr(e,this.size,2);n.uniform2fv(this.addr,t)}function X_(n,e){const t=hr(e,this.size,3);n.uniform3fv(this.addr,t)}function Y_(n,e){const t=hr(e,this.size,4);n.uniform4fv(this.addr,t)}function Z_(n,e){const t=hr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function K_(n,e){const t=hr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function $_(n,e){const t=hr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function J_(n,e){n.uniform1iv(this.addr,e)}function j_(n,e){n.uniform2iv(this.addr,e)}function Q_(n,e){n.uniform3iv(this.addr,e)}function ex(n,e){n.uniform4iv(this.addr,e)}function tx(n,e){n.uniform1uiv(this.addr,e)}function nx(n,e){n.uniform2uiv(this.addr,e)}function ix(n,e){n.uniform3uiv(this.addr,e)}function sx(n,e){n.uniform4uiv(this.addr,e)}function rx(n,e,t){const i=this.cache,s=e.length,r=Ea(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Ud,r[o])}function ox(n,e,t){const i=this.cache,s=e.length,r=Ea(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Fd,r[o])}function ax(n,e,t){const i=this.cache,s=e.length,r=Ea(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Od,r[o])}function lx(n,e,t){const i=this.cache,s=e.length,r=Ea(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Nd,r[o])}function cx(n){switch(n){case 5126:return W_;case 35664:return q_;case 35665:return X_;case 35666:return Y_;case 35674:return Z_;case 35675:return K_;case 35676:return $_;case 5124:case 35670:return J_;case 35667:case 35671:return j_;case 35668:case 35672:return Q_;case 35669:case 35673:return ex;case 5125:return tx;case 36294:return nx;case 36295:return ix;case 36296:return sx;case 35678:case 36198:case 36298:case 36306:case 35682:return rx;case 35679:case 36299:case 36307:return ox;case 35680:case 36300:case 36308:case 36293:return ax;case 36289:case 36303:case 36311:case 36292:return lx}}class ux{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=V_(t.type)}}class hx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cx(t.type)}}class dx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const pl=/(\w+)(\])?(\[|\.)?/g;function vh(n,e){n.seq.push(e),n.map[e.id]=e}function fx(n,e,t){const i=n.name,s=i.length;for(pl.lastIndex=0;;){const r=pl.exec(i),o=pl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){vh(t,c===void 0?new ux(a,n,e):new hx(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new dx(a),vh(t,h)),t=h}}}class Qo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);fx(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function _h(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const px=37297;let mx=0;function gx(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const xh=new Ye;function vx(n){rt._getMatrix(xh,rt.workingColorSpace,n);const e=`mat3( ${xh.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(n)){case ia:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function yh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+gx(n.getShaderSource(e),a)}else return r}function _x(n,e){const t=vx(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function xx(n,e){let t;switch(e){case Ep:t="Linear";break;case bp:t="Reinhard";break;case wp:t="Cineon";break;case Sc:t="ACESFilmic";break;case Ap:t="AgX";break;case Rp:t="Neutral";break;case Tp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const qo=new T;function yx(){rt.getLuminanceCoefficients(qo);const n=qo.x.toFixed(4),e=qo.y.toFixed(4),t=qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ur).join(`
`)}function Sx(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Ex(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ur(n){return n!==""}function Mh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bx=/^[ \t]*#include +<([\w\d./]+)>/gm;function mc(n){return n.replace(bx,Tx)}const wx=new Map;function Tx(n,e){let t=$e[e];if(t===void 0){const i=wx.get(e);if(i!==void 0)t=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return mc(t)}const Ax=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eh(n){return n.replace(Ax,Rx)}function Rx(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bh(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Cx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===$h?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===np?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===li&&(e="SHADOWMAP_TYPE_VSM"),e}function Px(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ir:case sr:e="ENVMAP_TYPE_CUBE";break;case xa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Dx(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===sr&&(e="ENVMAP_MODE_REFRACTION"),e}function Lx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Jh:e="ENVMAP_BLENDING_MULTIPLY";break;case Mp:e="ENVMAP_BLENDING_MIX";break;case Sp:e="ENVMAP_BLENDING_ADD";break}return e}function Ix(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Ux(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Cx(t),c=Px(t),u=Dx(t),h=Lx(t),p=Ix(t),d=Mx(t),g=Sx(r),v=s.createProgram();let m,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ur).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ur).join(`
`),f.length>0&&(f+=`
`)):(m=[bh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ur).join(`
`),f=[bh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ni?"#define TONE_MAPPING":"",t.toneMapping!==Ni?$e.tonemapping_pars_fragment:"",t.toneMapping!==Ni?xx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,_x("linearToOutputTexel",t.outputColorSpace),yx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ur).join(`
`)),o=mc(o),o=Mh(o,t),o=Sh(o,t),a=mc(a),a=Mh(a,t),a=Sh(a,t),o=Eh(o),a=Eh(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===vu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=E+m+o,_=E+f+a,A=_h(s,s.VERTEX_SHADER,y),R=_h(s,s.FRAGMENT_SHADER,_);s.attachShader(v,A),s.attachShader(v,R),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(D){if(n.debug.checkShaderErrors){const B=s.getProgramInfoLog(v)||"",z=s.getShaderInfoLog(A)||"",G=s.getShaderInfoLog(R)||"",V=B.trim(),X=z.trim(),$=G.trim();let U=!0,se=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(U=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,A,R);else{const fe=yh(s,A,"vertex"),xe=yh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+V+`
`+fe+`
`+xe)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(X===""||$==="")&&(se=!1);se&&(D.diagnostics={runnable:U,programLog:V,vertexShader:{log:X,prefix:m},fragmentShader:{log:$,prefix:f}})}s.deleteShader(A),s.deleteShader(R),L=new Qo(s,v),S=Ex(s,v)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,px)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mx++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=R,this}let Nx=0;class Fx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Ox(e),t.set(e,i)),i}}class Ox{constructor(e){this.id=Nx++,this.code=e,this.usedTimes=0}}function Bx(n,e,t,i,s,r,o){const a=new Lc,l=new Fx,c=new Set,u=[],h=s.logarithmicDepthBuffer,p=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,D,B,z){const G=B.fog,V=z.geometry,X=S.isMeshStandardMaterial?B.environment:null,$=(S.isMeshStandardMaterial?t:e).get(S.envMap||X),U=$&&$.mapping===xa?$.image.height:null,se=g[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const fe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,xe=fe!==void 0?fe.length:0;let Ie=0;V.morphAttributes.position!==void 0&&(Ie=1),V.morphAttributes.normal!==void 0&&(Ie=2),V.morphAttributes.color!==void 0&&(Ie=3);let ke,it,Ke,Z;if(se){const at=Wn[se];ke=at.vertexShader,it=at.fragmentShader}else ke=S.vertexShader,it=S.fragmentShader,l.update(S),Ke=l.getVertexShaderID(S),Z=l.getFragmentShaderID(S);const j=n.getRenderTarget(),ye=n.state.buffers.depth.getReversed(),Te=z.isInstancedMesh===!0,Me=z.isBatchedMesh===!0,Je=!!S.map,dt=!!S.matcap,P=!!$,ee=!!S.aoMap,J=!!S.lightMap,K=!!S.bumpMap,k=!!S.normalMap,le=!!S.displacementMap,ne=!!S.emissiveMap,ce=!!S.metalnessMap,Oe=!!S.roughnessMap,Le=S.anisotropy>0,w=S.clearcoat>0,x=S.dispersion>0,O=S.iridescence>0,q=S.sheen>0,te=S.transmission>0,Y=Le&&!!S.anisotropyMap,Pe=w&&!!S.clearcoatMap,he=w&&!!S.clearcoatNormalMap,Ae=w&&!!S.clearcoatRoughnessMap,Re=O&&!!S.iridescenceMap,re=O&&!!S.iridescenceThicknessMap,ve=q&&!!S.sheenColorMap,ze=q&&!!S.sheenRoughnessMap,De=!!S.specularMap,me=!!S.specularColorMap,Xe=!!S.specularIntensityMap,I=te&&!!S.transmissionMap,ue=te&&!!S.thicknessMap,de=!!S.gradientMap,Ee=!!S.alphaMap,oe=S.alphaTest>0,Q=!!S.alphaHash,Ce=!!S.extensions;let Ve=Ni;S.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ve=n.toneMapping);const yt={shaderID:se,shaderType:S.type,shaderName:S.name,vertexShader:ke,fragmentShader:it,defines:S.defines,customVertexShaderID:Ke,customFragmentShaderID:Z,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Me,batchingColor:Me&&z._colorsTexture!==null,instancing:Te,instancingColor:Te&&z.instanceColor!==null,instancingMorph:Te&&z.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:rr,alphaToCoverage:!!S.alphaToCoverage,map:Je,matcap:dt,envMap:P,envMapMode:P&&$.mapping,envMapCubeUVHeight:U,aoMap:ee,lightMap:J,bumpMap:K,normalMap:k,displacementMap:p&&le,emissiveMap:ne,normalMapObjectSpace:k&&S.normalMapType===Lp,normalMapTangentSpace:k&&S.normalMapType===od,metalnessMap:ce,roughnessMap:Oe,anisotropy:Le,anisotropyMap:Y,clearcoat:w,clearcoatMap:Pe,clearcoatNormalMap:he,clearcoatRoughnessMap:Ae,dispersion:x,iridescence:O,iridescenceMap:Re,iridescenceThicknessMap:re,sheen:q,sheenColorMap:ve,sheenRoughnessMap:ze,specularMap:De,specularColorMap:me,specularIntensityMap:Xe,transmission:te,transmissionMap:I,thicknessMap:ue,gradientMap:de,opaque:S.transparent===!1&&S.blending===rs&&S.alphaToCoverage===!1,alphaMap:Ee,alphaTest:oe,alphaHash:Q,combine:S.combine,mapUv:Je&&v(S.map.channel),aoMapUv:ee&&v(S.aoMap.channel),lightMapUv:J&&v(S.lightMap.channel),bumpMapUv:K&&v(S.bumpMap.channel),normalMapUv:k&&v(S.normalMap.channel),displacementMapUv:le&&v(S.displacementMap.channel),emissiveMapUv:ne&&v(S.emissiveMap.channel),metalnessMapUv:ce&&v(S.metalnessMap.channel),roughnessMapUv:Oe&&v(S.roughnessMap.channel),anisotropyMapUv:Y&&v(S.anisotropyMap.channel),clearcoatMapUv:Pe&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:he&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:re&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:ze&&v(S.sheenRoughnessMap.channel),specularMapUv:De&&v(S.specularMap.channel),specularColorMapUv:me&&v(S.specularColorMap.channel),specularIntensityMapUv:Xe&&v(S.specularIntensityMap.channel),transmissionMapUv:I&&v(S.transmissionMap.channel),thicknessMapUv:ue&&v(S.thicknessMap.channel),alphaMapUv:Ee&&v(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(k||Le),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!V.attributes.uv&&(Je||Ee),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ye,skinning:z.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Ie,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ve,decodeVideoTexture:Je&&S.map.isVideoTexture===!0&&rt.getTransfer(S.map.colorSpace)===pt,decodeVideoTextureEmissive:ne&&S.emissiveMap.isVideoTexture===!0&&rt.getTransfer(S.emissiveMap.colorSpace)===pt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ut,flipSided:S.side===cn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ce&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&S.extensions.multiDraw===!0||Me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return yt.vertexUv1s=c.has(1),yt.vertexUv2s=c.has(2),yt.vertexUv3s=c.has(3),c.clear(),yt}function f(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)M.push(D),M.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(E(M,S),y(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function E(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){const M=g[S.type];let D;if(M){const B=Wn[M];D=Em.clone(B.uniforms)}else D=S.uniforms;return D}function A(S,M){let D;for(let B=0,z=u.length;B<z;B++){const G=u[B];if(G.cacheKey===M){D=G,++D.usedTimes;break}}return D===void 0&&(D=new Ux(n,M,S,r),u.push(D)),D}function R(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function C(S){l.remove(S)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:A,releaseProgram:R,releaseShaderCache:C,programs:u,dispose:L}}function kx(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function zx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function wh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Th(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,p,d,g,v,m){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:p,material:d,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},n[e]=f):(f.id=h.id,f.object=h,f.geometry=p,f.material=d,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=v,f.group=m),e++,f}function a(h,p,d,g,v,m){const f=o(h,p,d,g,v,m);d.transmission>0?i.push(f):d.transparent===!0?s.push(f):t.push(f)}function l(h,p,d,g,v,m){const f=o(h,p,d,g,v,m);d.transmission>0?i.unshift(f):d.transparent===!0?s.unshift(f):t.unshift(f)}function c(h,p){t.length>1&&t.sort(h||zx),i.length>1&&i.sort(p||wh),s.length>1&&s.sort(p||wh)}function u(){for(let h=e,p=n.length;h<p;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Gx(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Th,n.set(i,[o])):s>=r.length?(o=new Th,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Hx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new He};break;case"SpotLight":t={position:new T,direction:new T,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new T,halfWidth:new T,halfHeight:new T};break}return n[e.id]=t,t}}}function Vx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Wx=0;function qx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Xx(n){const e=new Hx,t=Vx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new T);const s=new T,r=new ut,o=new ut;function a(c){let u=0,h=0,p=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let d=0,g=0,v=0,m=0,f=0,E=0,y=0,_=0,A=0,R=0,C=0;c.sort(qx);for(let S=0,M=c.length;S<M;S++){const D=c[S],B=D.color,z=D.intensity,G=D.distance,V=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=B.r*z,h+=B.g*z,p+=B.b*z;else if(D.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(D.sh.coefficients[X],z);C++}else if(D.isDirectionalLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const $=D.shadow,U=t.get(D);U.shadowIntensity=$.intensity,U.shadowBias=$.bias,U.shadowNormalBias=$.normalBias,U.shadowRadius=$.radius,U.shadowMapSize=$.mapSize,i.directionalShadow[d]=U,i.directionalShadowMap[d]=V,i.directionalShadowMatrix[d]=D.shadow.matrix,E++}i.directional[d]=X,d++}else if(D.isSpotLight){const X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(B).multiplyScalar(z),X.distance=G,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,i.spot[v]=X;const $=D.shadow;if(D.map&&(i.spotLightMap[A]=D.map,A++,$.updateMatrices(D),D.castShadow&&R++),i.spotLightMatrix[v]=$.matrix,D.castShadow){const U=t.get(D);U.shadowIntensity=$.intensity,U.shadowBias=$.bias,U.shadowNormalBias=$.normalBias,U.shadowRadius=$.radius,U.shadowMapSize=$.mapSize,i.spotShadow[v]=U,i.spotShadowMap[v]=V,_++}v++}else if(D.isRectAreaLight){const X=e.get(D);X.color.copy(B).multiplyScalar(z),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=X,m++}else if(D.isPointLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const $=D.shadow,U=t.get(D);U.shadowIntensity=$.intensity,U.shadowBias=$.bias,U.shadowNormalBias=$.normalBias,U.shadowRadius=$.radius,U.shadowMapSize=$.mapSize,U.shadowCameraNear=$.camera.near,U.shadowCameraFar=$.camera.far,i.pointShadow[g]=U,i.pointShadowMap[g]=V,i.pointShadowMatrix[g]=D.shadow.matrix,y++}i.point[g]=X,g++}else if(D.isHemisphereLight){const X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(z),X.groundColor.copy(D.groundColor).multiplyScalar(z),i.hemi[f]=X,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=p;const L=i.hash;(L.directionalLength!==d||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==E||L.numPointShadows!==y||L.numSpotShadows!==_||L.numSpotMaps!==A||L.numLightProbes!==C)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=_+A-R,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=C,L.directionalLength=d,L.pointLength=g,L.spotLength=v,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=E,L.numPointShadows=y,L.numSpotShadows=_,L.numSpotMaps=A,L.numLightProbes=C,i.version=Wx++)}function l(c,u){let h=0,p=0,d=0,g=0,v=0;const m=u.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){const y=c[f];if(y.isDirectionalLight){const _=i.directional[h];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),h++}else if(y.isSpotLight){const _=i.spot[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const _=i.point[p];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),p++}else if(y.isHemisphereLight){const _=i.hemi[v];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Ah(n){const e=new Xx(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Yx(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Ah(n),e.set(s,[a])):r>=o.length?(a=new Ah(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Zx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $x(n,e,t){let i=new Uc;const s=new ie,r=new ie,o=new gt,a=new pg({depthPacking:Dp}),l=new mg,c={},u=t.maxTextureSize,h={[Bi]:cn,[cn]:Bi,[Ut]:Ut},p=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:Zx,fragmentShader:Kx}),d=p.clone();d.defines.HORIZONTAL_PASS=1;const g=new Lt;g.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new we(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$h;let f=this.type;this.render=function(R,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const S=n.getRenderTarget(),M=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Ui),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const z=f!==li&&this.type===li,G=f===li&&this.type!==li;for(let V=0,X=R.length;V<X;V++){const $=R[V],U=$.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const se=U.getFrameExtents();if(s.multiply(se),r.copy(U.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/se.x),s.x=r.x*se.x,U.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/se.y),s.y=r.y*se.y,U.mapSize.y=r.y)),U.map===null||z===!0||G===!0){const xe=this.type!==li?{minFilter:_n,magFilter:_n}:{};U.map!==null&&U.map.dispose(),U.map=new fs(s.x,s.y,xe),U.map.texture.name=$.name+".shadowMap",U.camera.updateProjectionMatrix()}n.setRenderTarget(U.map),n.clear();const fe=U.getViewportCount();for(let xe=0;xe<fe;xe++){const Ie=U.getViewport(xe);o.set(r.x*Ie.x,r.y*Ie.y,r.x*Ie.z,r.y*Ie.w),B.viewport(o),U.updateMatrices($,xe),i=U.getFrustum(),_(C,L,U.camera,$,this.type)}U.isPointLightShadow!==!0&&this.type===li&&E(U,L),U.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(S,M,D)};function E(R,C){const L=e.update(v);p.defines.VSM_SAMPLES!==R.blurSamples&&(p.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new fs(s.x,s.y)),p.uniforms.shadow_pass.value=R.map.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(C,null,L,p,v,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(C,null,L,d,v,null)}function y(R,C,L,S){let M=null;const D=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)M=D;else if(M=L.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const B=M.uuid,z=C.uuid;let G=c[B];G===void 0&&(G={},c[B]=G);let V=G[z];V===void 0&&(V=M.clone(),G[z]=V,C.addEventListener("dispose",A)),M=V}if(M.visible=C.visible,M.wireframe=C.wireframe,S===li?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:h[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=n.properties.get(M);B.light=L}return M}function _(R,C,L,S,M){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===li)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const z=e.update(R),G=R.material;if(Array.isArray(G)){const V=z.groups;for(let X=0,$=V.length;X<$;X++){const U=V[X],se=G[U.materialIndex];if(se&&se.visible){const fe=y(R,se,S,M);R.onBeforeShadow(n,R,C,L,z,fe,U),n.renderBufferDirect(L,null,z,fe,R,U),R.onAfterShadow(n,R,C,L,z,fe,U)}}}else if(G.visible){const V=y(R,G,S,M);R.onBeforeShadow(n,R,C,L,z,V,null),n.renderBufferDirect(L,null,z,V,R,null),R.onAfterShadow(n,R,C,L,z,V,null)}}const B=R.children;for(let z=0,G=B.length;z<G;z++)_(B[z],C,L,S,M)}function A(R){R.target.removeEventListener("dispose",A);for(const L in c){const S=c[L],M=R.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const Jx={[bl]:wl,[Tl]:Cl,[Al]:Pl,[nr]:Rl,[wl]:bl,[Cl]:Tl,[Pl]:Al,[Rl]:nr};function jx(n,e){function t(){let I=!1;const ue=new gt;let de=null;const Ee=new gt(0,0,0,0);return{setMask:function(oe){de!==oe&&!I&&(n.colorMask(oe,oe,oe,oe),de=oe)},setLocked:function(oe){I=oe},setClear:function(oe,Q,Ce,Ve,yt){yt===!0&&(oe*=Ve,Q*=Ve,Ce*=Ve),ue.set(oe,Q,Ce,Ve),Ee.equals(ue)===!1&&(n.clearColor(oe,Q,Ce,Ve),Ee.copy(ue))},reset:function(){I=!1,de=null,Ee.set(-1,0,0,0)}}}function i(){let I=!1,ue=!1,de=null,Ee=null,oe=null;return{setReversed:function(Q){if(ue!==Q){const Ce=e.get("EXT_clip_control");Q?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),ue=Q;const Ve=oe;oe=null,this.setClear(Ve)}},getReversed:function(){return ue},setTest:function(Q){Q?j(n.DEPTH_TEST):ye(n.DEPTH_TEST)},setMask:function(Q){de!==Q&&!I&&(n.depthMask(Q),de=Q)},setFunc:function(Q){if(ue&&(Q=Jx[Q]),Ee!==Q){switch(Q){case bl:n.depthFunc(n.NEVER);break;case wl:n.depthFunc(n.ALWAYS);break;case Tl:n.depthFunc(n.LESS);break;case nr:n.depthFunc(n.LEQUAL);break;case Al:n.depthFunc(n.EQUAL);break;case Rl:n.depthFunc(n.GEQUAL);break;case Cl:n.depthFunc(n.GREATER);break;case Pl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ee=Q}},setLocked:function(Q){I=Q},setClear:function(Q){oe!==Q&&(ue&&(Q=1-Q),n.clearDepth(Q),oe=Q)},reset:function(){I=!1,de=null,Ee=null,oe=null,ue=!1}}}function s(){let I=!1,ue=null,de=null,Ee=null,oe=null,Q=null,Ce=null,Ve=null,yt=null;return{setTest:function(at){I||(at?j(n.STENCIL_TEST):ye(n.STENCIL_TEST))},setMask:function(at){ue!==at&&!I&&(n.stencilMask(at),ue=at)},setFunc:function(at,ni,Vn){(de!==at||Ee!==ni||oe!==Vn)&&(n.stencilFunc(at,ni,Vn),de=at,Ee=ni,oe=Vn)},setOp:function(at,ni,Vn){(Q!==at||Ce!==ni||Ve!==Vn)&&(n.stencilOp(at,ni,Vn),Q=at,Ce=ni,Ve=Vn)},setLocked:function(at){I=at},setClear:function(at){yt!==at&&(n.clearStencil(at),yt=at)},reset:function(){I=!1,ue=null,de=null,Ee=null,oe=null,Q=null,Ce=null,Ve=null,yt=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},p=new WeakMap,d=[],g=null,v=!1,m=null,f=null,E=null,y=null,_=null,A=null,R=null,C=new He(0,0,0),L=0,S=!1,M=null,D=null,B=null,z=null,G=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,$=0;const U=n.getParameter(n.VERSION);U.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(U)[1]),X=$>=1):U.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),X=$>=2);let se=null,fe={};const xe=n.getParameter(n.SCISSOR_BOX),Ie=n.getParameter(n.VIEWPORT),ke=new gt().fromArray(xe),it=new gt().fromArray(Ie);function Ke(I,ue,de,Ee){const oe=new Uint8Array(4),Q=n.createTexture();n.bindTexture(I,Q),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ce=0;Ce<de;Ce++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,Ee,0,n.RGBA,n.UNSIGNED_BYTE,oe):n.texImage2D(ue+Ce,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,oe);return Q}const Z={};Z[n.TEXTURE_2D]=Ke(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=Ke(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=Ke(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=Ke(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(n.DEPTH_TEST),o.setFunc(nr),K(!1),k(du),j(n.CULL_FACE),ee(Ui);function j(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function ye(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function Te(I,ue){return h[I]!==ue?(n.bindFramebuffer(I,ue),h[I]=ue,I===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ue),I===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function Me(I,ue){let de=d,Ee=!1;if(I){de=p.get(ue),de===void 0&&(de=[],p.set(ue,de));const oe=I.textures;if(de.length!==oe.length||de[0]!==n.COLOR_ATTACHMENT0){for(let Q=0,Ce=oe.length;Q<Ce;Q++)de[Q]=n.COLOR_ATTACHMENT0+Q;de.length=oe.length,Ee=!0}}else de[0]!==n.BACK&&(de[0]=n.BACK,Ee=!0);Ee&&n.drawBuffers(de)}function Je(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const dt={[es]:n.FUNC_ADD,[sp]:n.FUNC_SUBTRACT,[rp]:n.FUNC_REVERSE_SUBTRACT};dt[op]=n.MIN,dt[ap]=n.MAX;const P={[lp]:n.ZERO,[cp]:n.ONE,[up]:n.SRC_COLOR,[Sl]:n.SRC_ALPHA,[gp]:n.SRC_ALPHA_SATURATE,[pp]:n.DST_COLOR,[dp]:n.DST_ALPHA,[hp]:n.ONE_MINUS_SRC_COLOR,[El]:n.ONE_MINUS_SRC_ALPHA,[mp]:n.ONE_MINUS_DST_COLOR,[fp]:n.ONE_MINUS_DST_ALPHA,[vp]:n.CONSTANT_COLOR,[_p]:n.ONE_MINUS_CONSTANT_COLOR,[xp]:n.CONSTANT_ALPHA,[yp]:n.ONE_MINUS_CONSTANT_ALPHA};function ee(I,ue,de,Ee,oe,Q,Ce,Ve,yt,at){if(I===Ui){v===!0&&(ye(n.BLEND),v=!1);return}if(v===!1&&(j(n.BLEND),v=!0),I!==ip){if(I!==m||at!==S){if((f!==es||_!==es)&&(n.blendEquation(n.FUNC_ADD),f=es,_=es),at)switch(I){case rs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ki:n.blendFunc(n.ONE,n.ONE);break;case fu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case pu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case rs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ki:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case fu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}E=null,y=null,A=null,R=null,C.set(0,0,0),L=0,m=I,S=at}return}oe=oe||ue,Q=Q||de,Ce=Ce||Ee,(ue!==f||oe!==_)&&(n.blendEquationSeparate(dt[ue],dt[oe]),f=ue,_=oe),(de!==E||Ee!==y||Q!==A||Ce!==R)&&(n.blendFuncSeparate(P[de],P[Ee],P[Q],P[Ce]),E=de,y=Ee,A=Q,R=Ce),(Ve.equals(C)===!1||yt!==L)&&(n.blendColor(Ve.r,Ve.g,Ve.b,yt),C.copy(Ve),L=yt),m=I,S=!1}function J(I,ue){I.side===Ut?ye(n.CULL_FACE):j(n.CULL_FACE);let de=I.side===cn;ue&&(de=!de),K(de),I.blending===rs&&I.transparent===!1?ee(Ui):ee(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const Ee=I.stencilWrite;a.setTest(Ee),Ee&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ne(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):ye(n.SAMPLE_ALPHA_TO_COVERAGE)}function K(I){M!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),M=I)}function k(I){I!==ep?(j(n.CULL_FACE),I!==D&&(I===du?n.cullFace(n.BACK):I===tp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ye(n.CULL_FACE),D=I}function le(I){I!==B&&(X&&n.lineWidth(I),B=I)}function ne(I,ue,de){I?(j(n.POLYGON_OFFSET_FILL),(z!==ue||G!==de)&&(n.polygonOffset(ue,de),z=ue,G=de)):ye(n.POLYGON_OFFSET_FILL)}function ce(I){I?j(n.SCISSOR_TEST):ye(n.SCISSOR_TEST)}function Oe(I){I===void 0&&(I=n.TEXTURE0+V-1),se!==I&&(n.activeTexture(I),se=I)}function Le(I,ue,de){de===void 0&&(se===null?de=n.TEXTURE0+V-1:de=se);let Ee=fe[de];Ee===void 0&&(Ee={type:void 0,texture:void 0},fe[de]=Ee),(Ee.type!==I||Ee.texture!==ue)&&(se!==de&&(n.activeTexture(de),se=de),n.bindTexture(I,ue||Z[I]),Ee.type=I,Ee.texture=ue)}function w(){const I=fe[se];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function O(){try{n.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{n.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{n.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pe(){try{n.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{n.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{n.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(){try{n.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{n.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(I){ke.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),ke.copy(I))}function ze(I){it.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),it.copy(I))}function De(I,ue){let de=c.get(ue);de===void 0&&(de=new WeakMap,c.set(ue,de));let Ee=de.get(I);Ee===void 0&&(Ee=n.getUniformBlockIndex(ue,I.name),de.set(I,Ee))}function me(I,ue){const Ee=c.get(ue).get(I);l.get(ue)!==Ee&&(n.uniformBlockBinding(ue,Ee,I.__bindingPointIndex),l.set(ue,Ee))}function Xe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},se=null,fe={},h={},p=new WeakMap,d=[],g=null,v=!1,m=null,f=null,E=null,y=null,_=null,A=null,R=null,C=new He(0,0,0),L=0,S=!1,M=null,D=null,B=null,z=null,G=null,ke.set(0,0,n.canvas.width,n.canvas.height),it.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:ye,bindFramebuffer:Te,drawBuffers:Me,useProgram:Je,setBlending:ee,setMaterial:J,setFlipSided:K,setCullFace:k,setLineWidth:le,setPolygonOffset:ne,setScissorTest:ce,activeTexture:Oe,bindTexture:Le,unbindTexture:w,compressedTexImage2D:x,compressedTexImage3D:O,texImage2D:Re,texImage3D:re,updateUBOMapping:De,uniformBlockBinding:me,texStorage2D:he,texStorage3D:Ae,texSubImage2D:q,texSubImage3D:te,compressedTexSubImage2D:Y,compressedTexSubImage3D:Pe,scissor:ve,viewport:ze,reset:Xe}}function Qx(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ie,u=new WeakMap;let h;const p=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,x){return d?new OffscreenCanvas(w,x):ra("canvas")}function v(w,x,O){let q=1;const te=Le(w);if((te.width>O||te.height>O)&&(q=O/Math.max(te.width,te.height)),q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Y=Math.floor(q*te.width),Pe=Math.floor(q*te.height);h===void 0&&(h=g(Y,Pe));const he=x?g(Y,Pe):h;return he.width=Y,he.height=Pe,he.getContext("2d").drawImage(w,0,0,Y,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Y+"x"+Pe+")."),he}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),w;return w}function m(w){return w.generateMipmaps}function f(w){n.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(w,x,O,q,te=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Y=x;if(x===n.RED&&(O===n.FLOAT&&(Y=n.R32F),O===n.HALF_FLOAT&&(Y=n.R16F),O===n.UNSIGNED_BYTE&&(Y=n.R8)),x===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.R8UI),O===n.UNSIGNED_SHORT&&(Y=n.R16UI),O===n.UNSIGNED_INT&&(Y=n.R32UI),O===n.BYTE&&(Y=n.R8I),O===n.SHORT&&(Y=n.R16I),O===n.INT&&(Y=n.R32I)),x===n.RG&&(O===n.FLOAT&&(Y=n.RG32F),O===n.HALF_FLOAT&&(Y=n.RG16F),O===n.UNSIGNED_BYTE&&(Y=n.RG8)),x===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.RG8UI),O===n.UNSIGNED_SHORT&&(Y=n.RG16UI),O===n.UNSIGNED_INT&&(Y=n.RG32UI),O===n.BYTE&&(Y=n.RG8I),O===n.SHORT&&(Y=n.RG16I),O===n.INT&&(Y=n.RG32I)),x===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),O===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),O===n.UNSIGNED_INT&&(Y=n.RGB32UI),O===n.BYTE&&(Y=n.RGB8I),O===n.SHORT&&(Y=n.RGB16I),O===n.INT&&(Y=n.RGB32I)),x===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),O===n.UNSIGNED_INT&&(Y=n.RGBA32UI),O===n.BYTE&&(Y=n.RGBA8I),O===n.SHORT&&(Y=n.RGBA16I),O===n.INT&&(Y=n.RGBA32I)),x===n.RGB&&(O===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),x===n.RGBA){const Pe=te?ia:rt.getTransfer(q);O===n.FLOAT&&(Y=n.RGBA32F),O===n.HALF_FLOAT&&(Y=n.RGBA16F),O===n.UNSIGNED_BYTE&&(Y=Pe===pt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function _(w,x){let O;return w?x===null||x===hs||x===Wr?O=n.DEPTH24_STENCIL8:x===Zn?O=n.DEPTH32F_STENCIL8:x===Vr&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===hs||x===Wr?O=n.DEPTH_COMPONENT24:x===Zn?O=n.DEPTH_COMPONENT32F:x===Vr&&(O=n.DEPTH_COMPONENT16),O}function A(w,x){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==_n&&w.minFilter!==Yn?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function R(w){const x=w.target;x.removeEventListener("dispose",R),L(x),x.isVideoTexture&&u.delete(x)}function C(w){const x=w.target;x.removeEventListener("dispose",C),M(x)}function L(w){const x=i.get(w);if(x.__webglInit===void 0)return;const O=w.source,q=p.get(O);if(q){const te=q[x.__cacheKey];te.usedTimes--,te.usedTimes===0&&S(w),Object.keys(q).length===0&&p.delete(O)}i.remove(w)}function S(w){const x=i.get(w);n.deleteTexture(x.__webglTexture);const O=w.source,q=p.get(O);delete q[x.__cacheKey],o.memory.textures--}function M(w){const x=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let te=0;te<x.__webglFramebuffer[q].length;te++)n.deleteFramebuffer(x.__webglFramebuffer[q][te]);else n.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)n.deleteFramebuffer(x.__webglFramebuffer[q]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=w.textures;for(let q=0,te=O.length;q<te;q++){const Y=i.get(O[q]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(O[q])}i.remove(w)}let D=0;function B(){D=0}function z(){const w=D;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),D+=1,w}function G(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function V(w,x){const O=i.get(w);if(w.isVideoTexture&&ce(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&O.__version!==w.version){const q=w.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(O,w,x);return}}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+x)}function X(w,x){const O=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){Z(O,w,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+x)}function $(w,x){const O=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){Z(O,w,x);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+x)}function U(w,x){const O=i.get(w);if(w.version>0&&O.__version!==w.version){j(O,w,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+x)}const se={[Il]:n.REPEAT,[is]:n.CLAMP_TO_EDGE,[Ul]:n.MIRRORED_REPEAT},fe={[_n]:n.NEAREST,[Cp]:n.NEAREST_MIPMAP_NEAREST,[vo]:n.NEAREST_MIPMAP_LINEAR,[Yn]:n.LINEAR,[Ua]:n.LINEAR_MIPMAP_NEAREST,[ss]:n.LINEAR_MIPMAP_LINEAR},xe={[Ip]:n.NEVER,[kp]:n.ALWAYS,[Up]:n.LESS,[ad]:n.LEQUAL,[Np]:n.EQUAL,[Bp]:n.GEQUAL,[Fp]:n.GREATER,[Op]:n.NOTEQUAL};function Ie(w,x){if(x.type===Zn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Yn||x.magFilter===Ua||x.magFilter===vo||x.magFilter===ss||x.minFilter===Yn||x.minFilter===Ua||x.minFilter===vo||x.minFilter===ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,se[x.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,se[x.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,se[x.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,fe[x.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,fe[x.minFilter]),x.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,xe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===_n||x.minFilter!==vo&&x.minFilter!==ss||x.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function ke(w,x){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",R));const q=x.source;let te=p.get(q);te===void 0&&(te={},p.set(q,te));const Y=G(x);if(Y!==w.__cacheKey){te[Y]===void 0&&(te[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),te[Y].usedTimes++;const Pe=te[w.__cacheKey];Pe!==void 0&&(te[w.__cacheKey].usedTimes--,Pe.usedTimes===0&&S(x)),w.__cacheKey=Y,w.__webglTexture=te[Y].texture}return O}function it(w,x,O){return Math.floor(Math.floor(w/O)/x)}function Ke(w,x,O,q){const Y=w.updateRanges;if(Y.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,O,q,x.data);else{Y.sort((re,ve)=>re.start-ve.start);let Pe=0;for(let re=1;re<Y.length;re++){const ve=Y[Pe],ze=Y[re],De=ve.start+ve.count,me=it(ze.start,x.width,4),Xe=it(ve.start,x.width,4);ze.start<=De+1&&me===Xe&&it(ze.start+ze.count-1,x.width,4)===me?ve.count=Math.max(ve.count,ze.start+ze.count-ve.start):(++Pe,Y[Pe]=ze)}Y.length=Pe+1;const he=n.getParameter(n.UNPACK_ROW_LENGTH),Ae=n.getParameter(n.UNPACK_SKIP_PIXELS),Re=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let re=0,ve=Y.length;re<ve;re++){const ze=Y[re],De=Math.floor(ze.start/4),me=Math.ceil(ze.count/4),Xe=De%x.width,I=Math.floor(De/x.width),ue=me,de=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Xe),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),t.texSubImage2D(n.TEXTURE_2D,0,Xe,I,ue,de,O,q,x.data)}w.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,he),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ae),n.pixelStorei(n.UNPACK_SKIP_ROWS,Re)}}function Z(w,x,O){let q=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=n.TEXTURE_3D);const te=ke(w,x),Y=x.source;t.bindTexture(q,w.__webglTexture,n.TEXTURE0+O);const Pe=i.get(Y);if(Y.version!==Pe.__version||te===!0){t.activeTexture(n.TEXTURE0+O);const he=rt.getPrimaries(rt.workingColorSpace),Ae=x.colorSpace===Ci?null:rt.getPrimaries(x.colorSpace),Re=x.colorSpace===Ci||he===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let re=v(x.image,!1,s.maxTextureSize);re=Oe(x,re);const ve=r.convert(x.format,x.colorSpace),ze=r.convert(x.type);let De=y(x.internalFormat,ve,ze,x.colorSpace,x.isVideoTexture);Ie(q,x);let me;const Xe=x.mipmaps,I=x.isVideoTexture!==!0,ue=Pe.__version===void 0||te===!0,de=Y.dataReady,Ee=A(x,re);if(x.isDepthTexture)De=_(x.format===Xr,x.type),ue&&(I?t.texStorage2D(n.TEXTURE_2D,1,De,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,De,re.width,re.height,0,ve,ze,null));else if(x.isDataTexture)if(Xe.length>0){I&&ue&&t.texStorage2D(n.TEXTURE_2D,Ee,De,Xe[0].width,Xe[0].height);for(let oe=0,Q=Xe.length;oe<Q;oe++)me=Xe[oe],I?de&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,me.width,me.height,ve,ze,me.data):t.texImage2D(n.TEXTURE_2D,oe,De,me.width,me.height,0,ve,ze,me.data);x.generateMipmaps=!1}else I?(ue&&t.texStorage2D(n.TEXTURE_2D,Ee,De,re.width,re.height),de&&Ke(x,re,ve,ze)):t.texImage2D(n.TEXTURE_2D,0,De,re.width,re.height,0,ve,ze,re.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){I&&ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,De,Xe[0].width,Xe[0].height,re.depth);for(let oe=0,Q=Xe.length;oe<Q;oe++)if(me=Xe[oe],x.format!==Bn)if(ve!==null)if(I){if(de)if(x.layerUpdates.size>0){const Ce=ih(me.width,me.height,x.format,x.type);for(const Ve of x.layerUpdates){const yt=me.data.subarray(Ve*Ce/me.data.BYTES_PER_ELEMENT,(Ve+1)*Ce/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,Ve,me.width,me.height,1,ve,yt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,me.width,me.height,re.depth,ve,me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,oe,De,me.width,me.height,re.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?de&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,me.width,me.height,re.depth,ve,ze,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,oe,De,me.width,me.height,re.depth,0,ve,ze,me.data)}else{I&&ue&&t.texStorage2D(n.TEXTURE_2D,Ee,De,Xe[0].width,Xe[0].height);for(let oe=0,Q=Xe.length;oe<Q;oe++)me=Xe[oe],x.format!==Bn?ve!==null?I?de&&t.compressedTexSubImage2D(n.TEXTURE_2D,oe,0,0,me.width,me.height,ve,me.data):t.compressedTexImage2D(n.TEXTURE_2D,oe,De,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?de&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,me.width,me.height,ve,ze,me.data):t.texImage2D(n.TEXTURE_2D,oe,De,me.width,me.height,0,ve,ze,me.data)}else if(x.isDataArrayTexture)if(I){if(ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,De,re.width,re.height,re.depth),de)if(x.layerUpdates.size>0){const oe=ih(re.width,re.height,x.format,x.type);for(const Q of x.layerUpdates){const Ce=re.data.subarray(Q*oe/re.data.BYTES_PER_ELEMENT,(Q+1)*oe/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,re.width,re.height,1,ve,ze,Ce)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ve,ze,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,re.width,re.height,re.depth,0,ve,ze,re.data);else if(x.isData3DTexture)I?(ue&&t.texStorage3D(n.TEXTURE_3D,Ee,De,re.width,re.height,re.depth),de&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ve,ze,re.data)):t.texImage3D(n.TEXTURE_3D,0,De,re.width,re.height,re.depth,0,ve,ze,re.data);else if(x.isFramebufferTexture){if(ue)if(I)t.texStorage2D(n.TEXTURE_2D,Ee,De,re.width,re.height);else{let oe=re.width,Q=re.height;for(let Ce=0;Ce<Ee;Ce++)t.texImage2D(n.TEXTURE_2D,Ce,De,oe,Q,0,ve,ze,null),oe>>=1,Q>>=1}}else if(Xe.length>0){if(I&&ue){const oe=Le(Xe[0]);t.texStorage2D(n.TEXTURE_2D,Ee,De,oe.width,oe.height)}for(let oe=0,Q=Xe.length;oe<Q;oe++)me=Xe[oe],I?de&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,ve,ze,me):t.texImage2D(n.TEXTURE_2D,oe,De,ve,ze,me);x.generateMipmaps=!1}else if(I){if(ue){const oe=Le(re);t.texStorage2D(n.TEXTURE_2D,Ee,De,oe.width,oe.height)}de&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,ze,re)}else t.texImage2D(n.TEXTURE_2D,0,De,ve,ze,re);m(x)&&f(q),Pe.__version=Y.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function j(w,x,O){if(x.image.length!==6)return;const q=ke(w,x),te=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+O);const Y=i.get(te);if(te.version!==Y.__version||q===!0){t.activeTexture(n.TEXTURE0+O);const Pe=rt.getPrimaries(rt.workingColorSpace),he=x.colorSpace===Ci?null:rt.getPrimaries(x.colorSpace),Ae=x.colorSpace===Ci||Pe===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Re=x.isCompressedTexture||x.image[0].isCompressedTexture,re=x.image[0]&&x.image[0].isDataTexture,ve=[];for(let Q=0;Q<6;Q++)!Re&&!re?ve[Q]=v(x.image[Q],!0,s.maxCubemapSize):ve[Q]=re?x.image[Q].image:x.image[Q],ve[Q]=Oe(x,ve[Q]);const ze=ve[0],De=r.convert(x.format,x.colorSpace),me=r.convert(x.type),Xe=y(x.internalFormat,De,me,x.colorSpace),I=x.isVideoTexture!==!0,ue=Y.__version===void 0||q===!0,de=te.dataReady;let Ee=A(x,ze);Ie(n.TEXTURE_CUBE_MAP,x);let oe;if(Re){I&&ue&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,Xe,ze.width,ze.height);for(let Q=0;Q<6;Q++){oe=ve[Q].mipmaps;for(let Ce=0;Ce<oe.length;Ce++){const Ve=oe[Ce];x.format!==Bn?De!==null?I?de&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ce,0,0,Ve.width,Ve.height,De,Ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ce,Xe,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ce,0,0,Ve.width,Ve.height,De,me,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ce,Xe,Ve.width,Ve.height,0,De,me,Ve.data)}}}else{if(oe=x.mipmaps,I&&ue){oe.length>0&&Ee++;const Q=Le(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,Xe,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(re){I?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ve[Q].width,ve[Q].height,De,me,ve[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Xe,ve[Q].width,ve[Q].height,0,De,me,ve[Q].data);for(let Ce=0;Ce<oe.length;Ce++){const yt=oe[Ce].image[Q].image;I?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ce+1,0,0,yt.width,yt.height,De,me,yt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ce+1,Xe,yt.width,yt.height,0,De,me,yt.data)}}else{I?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,De,me,ve[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Xe,De,me,ve[Q]);for(let Ce=0;Ce<oe.length;Ce++){const Ve=oe[Ce];I?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ce+1,0,0,De,me,Ve.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ce+1,Xe,De,me,Ve.image[Q])}}}m(x)&&f(n.TEXTURE_CUBE_MAP),Y.__version=te.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function ye(w,x,O,q,te,Y){const Pe=r.convert(O.format,O.colorSpace),he=r.convert(O.type),Ae=y(O.internalFormat,Pe,he,O.colorSpace),Re=i.get(x),re=i.get(O);if(re.__renderTarget=x,!Re.__hasExternalTextures){const ve=Math.max(1,x.width>>Y),ze=Math.max(1,x.height>>Y);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,Y,Ae,ve,ze,x.depth,0,Pe,he,null):t.texImage2D(te,Y,Ae,ve,ze,0,Pe,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),ne(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,te,re.__webglTexture,0,le(x)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,te,re.__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Te(w,x,O){if(n.bindRenderbuffer(n.RENDERBUFFER,w),x.depthBuffer){const q=x.depthTexture,te=q&&q.isDepthTexture?q.type:null,Y=_(x.stencilBuffer,te),Pe=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=le(x);ne(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,Y,x.width,x.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,Y,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Y,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pe,n.RENDERBUFFER,w)}else{const q=x.textures;for(let te=0;te<q.length;te++){const Y=q[te],Pe=r.convert(Y.format,Y.colorSpace),he=r.convert(Y.type),Ae=y(Y.internalFormat,Pe,he,Y.colorSpace),Re=le(x);O&&ne(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,Ae,x.width,x.height):ne(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re,Ae,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Me(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(x.depthTexture);q.__renderTarget=x,(!q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V(x.depthTexture,0);const te=q.__webglTexture,Y=le(x);if(x.depthTexture.format===qr)ne(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(x.depthTexture.format===Xr)ne(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Je(w){const x=i.get(w),O=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const q=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){const te=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",te)};q.addEventListener("dispose",te),x.__depthDisposeCallback=te}x.__boundDepthTexture=q}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const q=w.texture.mipmaps;q&&q.length>0?Me(x.__webglFramebuffer[0],w):Me(x.__webglFramebuffer,w)}else if(O){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=n.createRenderbuffer(),Te(x.__webglDepthbuffer[q],w,!1);else{const te=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,Y)}}else{const q=w.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Te(x.__webglDepthbuffer,w,!1);else{const te=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,Y)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function dt(w,x,O){const q=i.get(w);x!==void 0&&ye(q.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Je(w)}function P(w){const x=w.texture,O=i.get(w),q=i.get(x);w.addEventListener("dispose",C);const te=w.textures,Y=w.isWebGLCubeRenderTarget===!0,Pe=te.length>1;if(Pe||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=x.version,o.memory.textures++),Y){O.__webglFramebuffer=[];for(let he=0;he<6;he++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[he]=[];for(let Ae=0;Ae<x.mipmaps.length;Ae++)O.__webglFramebuffer[he][Ae]=n.createFramebuffer()}else O.__webglFramebuffer[he]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let he=0;he<x.mipmaps.length;he++)O.__webglFramebuffer[he]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Pe)for(let he=0,Ae=te.length;he<Ae;he++){const Re=i.get(te[he]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&ne(w)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let he=0;he<te.length;he++){const Ae=te[he];O.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[he]);const Re=r.convert(Ae.format,Ae.colorSpace),re=r.convert(Ae.type),ve=y(Ae.internalFormat,Re,re,Ae.colorSpace,w.isXRRenderTarget===!0),ze=le(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,ve,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,O.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Te(O.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Ie(n.TEXTURE_CUBE_MAP,x);for(let he=0;he<6;he++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ae=0;Ae<x.mipmaps.length;Ae++)ye(O.__webglFramebuffer[he][Ae],w,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae);else ye(O.__webglFramebuffer[he],w,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(x)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let he=0,Ae=te.length;he<Ae;he++){const Re=te[he],re=i.get(Re);let ve=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ve=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,re.__webglTexture),Ie(ve,Re),ye(O.__webglFramebuffer,w,Re,n.COLOR_ATTACHMENT0+he,ve,0),m(Re)&&f(ve)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(he=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,q.__webglTexture),Ie(he,x),x.mipmaps&&x.mipmaps.length>0)for(let Ae=0;Ae<x.mipmaps.length;Ae++)ye(O.__webglFramebuffer[Ae],w,x,n.COLOR_ATTACHMENT0,he,Ae);else ye(O.__webglFramebuffer,w,x,n.COLOR_ATTACHMENT0,he,0);m(x)&&f(he),t.unbindTexture()}w.depthBuffer&&Je(w)}function ee(w){const x=w.textures;for(let O=0,q=x.length;O<q;O++){const te=x[O];if(m(te)){const Y=E(w),Pe=i.get(te).__webglTexture;t.bindTexture(Y,Pe),f(Y),t.unbindTexture()}}}const J=[],K=[];function k(w){if(w.samples>0){if(ne(w)===!1){const x=w.textures,O=w.width,q=w.height;let te=n.COLOR_BUFFER_BIT;const Y=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pe=i.get(w),he=x.length>1;if(he)for(let Re=0;Re<x.length;Re++)t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const Ae=w.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Re=0;Re<x.length;Re++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[Re]);const re=i.get(x[Re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,re,0)}n.blitFramebuffer(0,0,O,q,0,0,O,q,te,n.NEAREST),l===!0&&(J.length=0,K.length=0,J.push(n.COLOR_ATTACHMENT0+Re),w.depthBuffer&&w.resolveDepthBuffer===!1&&(J.push(Y),K.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,K)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let Re=0;Re<x.length;Re++){t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[Re]);const re=i.get(x[Re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const x=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function le(w){return Math.min(s.maxSamples,w.samples)}function ne(w){const x=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ce(w){const x=o.render.frame;u.get(w)!==x&&(u.set(w,x),w.update())}function Oe(w,x){const O=w.colorSpace,q=w.format,te=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==rr&&O!==Ci&&(rt.getTransfer(O)===pt?(q!==Bn||te!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}function Le(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=B,this.setTexture2D=V,this.setTexture2DArray=X,this.setTexture3D=$,this.setTextureCube=U,this.rebindTextures=dt,this.setupRenderTarget=P,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=k,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=ne}function ey(n,e){function t(i,s=Ci){let r;const o=rt.getTransfer(s);if(i===Jn)return n.UNSIGNED_BYTE;if(i===bc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===wc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===td)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===nd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Qh)return n.BYTE;if(i===ed)return n.SHORT;if(i===Vr)return n.UNSIGNED_SHORT;if(i===Ec)return n.INT;if(i===hs)return n.UNSIGNED_INT;if(i===Zn)return n.FLOAT;if(i===to)return n.HALF_FLOAT;if(i===id)return n.ALPHA;if(i===sd)return n.RGB;if(i===Bn)return n.RGBA;if(i===qr)return n.DEPTH_COMPONENT;if(i===Xr)return n.DEPTH_STENCIL;if(i===Tc)return n.RED;if(i===Ac)return n.RED_INTEGER;if(i===rd)return n.RG;if(i===Rc)return n.RG_INTEGER;if(i===Cc)return n.RGBA_INTEGER;if(i===Ko||i===$o||i===Jo||i===jo)if(o===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ko)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ko)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$o)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Jo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===jo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nl||i===Fl||i===Ol||i===Bl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Nl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ol)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===kl||i===zl||i===Gl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===kl||i===zl)return o===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Gl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Hl||i===Vl||i===Wl||i===ql||i===Xl||i===Yl||i===Zl||i===Kl||i===$l||i===Jl||i===jl||i===Ql||i===ec||i===tc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Hl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Vl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ql)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Yl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Zl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Kl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$l)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===jl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ql)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ec)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===tc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===nc||i===ic||i===sc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===nc)return o===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ic)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rc||i===oc||i===ac||i===lc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===rc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===oc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ac)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===lc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Wr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const ty=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ny=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class iy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new yd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Qn({vertexShader:ty,fragmentShader:ny,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new we(new gi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sy extends ms{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,p=null,d=null,g=null;const v=typeof XRWebGLBinding<"u",m=new iy,f={},E=t.getContextAttributes();let y=null,_=null;const A=[],R=[],C=new ie;let L=null;const S=new ln;S.viewport=new gt;const M=new ln;M.viewport=new gt;const D=[S,M],B=new Mg;let z=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let j=A[Z];return j===void 0&&(j=new tl,A[Z]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Z){let j=A[Z];return j===void 0&&(j=new tl,A[Z]=j),j.getGripSpace()},this.getHand=function(Z){let j=A[Z];return j===void 0&&(j=new tl,A[Z]=j),j.getHandSpace()};function V(Z){const j=R.indexOf(Z.inputSource);if(j===-1)return;const ye=A[j];ye!==void 0&&(ye.update(Z.inputSource,Z.frame,c||o),ye.dispatchEvent({type:Z.type,data:Z.inputSource}))}function X(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",$);for(let Z=0;Z<A.length;Z++){const j=R[Z];j!==null&&(R[Z]=null,A[Z].disconnect(j))}z=null,G=null,m.reset();for(const Z in f)delete f[Z];e.setRenderTarget(y),d=null,p=null,h=null,s=null,_=null,Ke.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",X),s.addEventListener("inputsourceschange",$),E.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Te=null,Me=null;E.depth&&(Me=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=E.stencil?Xr:qr,Te=E.stencil?Wr:hs);const Je={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};h=this.getBinding(),p=h.createProjectionLayer(Je),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),_=new fs(p.textureWidth,p.textureHeight,{format:Bn,type:Jn,depthTexture:new xd(p.textureWidth,p.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const ye={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new fs(d.framebufferWidth,d.framebufferHeight,{format:Bn,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ke.setContext(s),Ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(Z){for(let j=0;j<Z.removed.length;j++){const ye=Z.removed[j],Te=R.indexOf(ye);Te>=0&&(R[Te]=null,A[Te].disconnect(ye))}for(let j=0;j<Z.added.length;j++){const ye=Z.added[j];let Te=R.indexOf(ye);if(Te===-1){for(let Je=0;Je<A.length;Je++)if(Je>=R.length){R.push(ye),Te=Je;break}else if(R[Je]===null){R[Je]=ye,Te=Je;break}if(Te===-1)break}const Me=A[Te];Me&&Me.connect(ye)}}const U=new T,se=new T;function fe(Z,j,ye){U.setFromMatrixPosition(j.matrixWorld),se.setFromMatrixPosition(ye.matrixWorld);const Te=U.distanceTo(se),Me=j.projectionMatrix.elements,Je=ye.projectionMatrix.elements,dt=Me[14]/(Me[10]-1),P=Me[14]/(Me[10]+1),ee=(Me[9]+1)/Me[5],J=(Me[9]-1)/Me[5],K=(Me[8]-1)/Me[0],k=(Je[8]+1)/Je[0],le=dt*K,ne=dt*k,ce=Te/(-K+k),Oe=ce*-K;if(j.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Oe),Z.translateZ(ce),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Me[10]===-1)Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const Le=dt+ce,w=P+ce,x=le-Oe,O=ne+(Te-Oe),q=ee*P/w*Le,te=J*P/w*Le;Z.projectionMatrix.makePerspective(x,O,q,te,Le,w),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function xe(Z,j){j===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(j.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let j=Z.near,ye=Z.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(ye=m.depthFar)),B.near=M.near=S.near=j,B.far=M.far=S.far=ye,(z!==B.near||G!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),z=B.near,G=B.far),B.layers.mask=Z.layers.mask|6,S.layers.mask=B.layers.mask&3,M.layers.mask=B.layers.mask&5;const Te=Z.parent,Me=B.cameras;xe(B,Te);for(let Je=0;Je<Me.length;Je++)xe(Me[Je],Te);Me.length===2?fe(B,S,M):B.projectionMatrix.copy(S.projectionMatrix),Ie(Z,B,Te)};function Ie(Z,j,ye){ye===null?Z.matrix.copy(j.matrixWorld):(Z.matrix.copy(ye.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(j.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Yr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(p===null&&d===null))return l},this.setFoveation=function(Z){l=Z,p!==null&&(p.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(Z){return f[Z]};let ke=null;function it(Z,j){if(u=j.getViewerPose(c||o),g=j,u!==null){const ye=u.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let Te=!1;ye.length!==B.cameras.length&&(B.cameras.length=0,Te=!0);for(let P=0;P<ye.length;P++){const ee=ye[P];let J=null;if(d!==null)J=d.getViewport(ee);else{const k=h.getViewSubImage(p,ee);J=k.viewport,P===0&&(e.setRenderTargetTextures(_,k.colorTexture,k.depthStencilTexture),e.setRenderTarget(_))}let K=D[P];K===void 0&&(K=new ln,K.layers.enable(P),K.viewport=new gt,D[P]=K),K.matrix.fromArray(ee.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(ee.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(J.x,J.y,J.width,J.height),P===0&&(B.matrix.copy(K.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Te===!0&&B.cameras.push(K)}const Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){h=i.getBinding();const P=h.getDepthInformation(ye[0]);P&&P.isValid&&P.texture&&m.init(P,s.renderState)}if(Me&&Me.includes("camera-access")&&v){e.state.unbindTexture(),h=i.getBinding();for(let P=0;P<ye.length;P++){const ee=ye[P].camera;if(ee){let J=f[ee];J||(J=new yd,f[ee]=J);const K=h.getCameraImage(ee);J.sourceTexture=K}}}}for(let ye=0;ye<A.length;ye++){const Te=R[ye],Me=A[ye];Te!==null&&Me!==void 0&&Me.update(Te,j,c||o)}ke&&ke(Z,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}const Ke=new Id;Ke.setAnimationLoop(it),this.setAnimationLoop=function(Z){ke=Z},this.dispose=function(){}}}const $i=new jn,ry=new ut;function oy(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,fd(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,E,y,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),p(m,f),f.isMeshPhysicalMaterial&&d(m,f,_)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,E,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===cn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===cn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const E=e.get(f),y=E.envMap,_=E.envMapRotation;y&&(m.envMap.value=y,$i.copy(_),$i.x*=-1,$i.y*=-1,$i.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),m.envMapRotation.value.setFromMatrix4(ry.makeRotationFromEuler($i)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,E,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=y*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===cn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const E=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ay(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,y){const _=y.program;i.uniformBlockBinding(E,_)}function c(E,y){let _=s[E.id];_===void 0&&(g(E),_=u(E),s[E.id]=_,E.addEventListener("dispose",m));const A=y.program;i.updateUBOMapping(E,A);const R=e.render.frame;r[E.id]!==R&&(p(E),r[E.id]=R)}function u(E){const y=h();E.__bindingPointIndex=y;const _=n.createBuffer(),A=E.__size,R=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,A,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,_),_}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(E){const y=s[E.id],_=E.uniforms,A=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let R=0,C=_.length;R<C;R++){const L=Array.isArray(_[R])?_[R]:[_[R]];for(let S=0,M=L.length;S<M;S++){const D=L[S];if(d(D,R,S,A)===!0){const B=D.__offset,z=Array.isArray(D.value)?D.value:[D.value];let G=0;for(let V=0;V<z.length;V++){const X=z[V],$=v(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,B+G,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,G),G+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(E,y,_,A){const R=E.value,C=y+"_"+_;if(A[C]===void 0)return typeof R=="number"||typeof R=="boolean"?A[C]=R:A[C]=R.clone(),!0;{const L=A[C];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return A[C]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function g(E){const y=E.uniforms;let _=0;const A=16;for(let C=0,L=y.length;C<L;C++){const S=Array.isArray(y[C])?y[C]:[y[C]];for(let M=0,D=S.length;M<D;M++){const B=S[M],z=Array.isArray(B.value)?B.value:[B.value];for(let G=0,V=z.length;G<V;G++){const X=z[G],$=v(X),U=_%A,se=U%$.boundary,fe=U+se;_+=se,fe!==0&&A-fe<$.storage&&(_+=A-fe),B.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=$.storage}}}const R=_%A;return R>0&&(_+=A-R),E.__size=_,E.__cache={},this}function v(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function m(E){const y=E.target;y.removeEventListener("dispose",m);const _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function f(){for(const E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class Bd{constructor(e={}){const{canvas:t=im(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,f=null;const E=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let A=!1;this._outputColorSpace=on;let R=0,C=0,L=null,S=-1,M=null;const D=new gt,B=new gt;let z=null;const G=new He(0);let V=0,X=t.width,$=t.height,U=1,se=null,fe=null;const xe=new gt(0,0,X,$),Ie=new gt(0,0,X,$);let ke=!1;const it=new Uc;let Ke=!1,Z=!1;const j=new ut,ye=new T,Te=new gt,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function dt(){return L===null?U:1}let P=i;function ee(b,N){return t.getContext(b,N)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mc}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",oe,!1),P===null){const N="webgl2";if(P=ee(N,b),P===null)throw ee(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let J,K,k,le,ne,ce,Oe,Le,w,x,O,q,te,Y,Pe,he,Ae,Re,re,ve,ze,De,me,Xe;function I(){J=new __(P),J.init(),De=new ey(P,J),K=new h_(P,J,e,De),k=new jx(P,J),K.reversedDepthBuffer&&p&&k.buffers.depth.setReversed(!0),le=new M_(P),ne=new kx,ce=new Qx(P,J,k,ne,K,De,le),Oe=new f_(_),Le=new v_(_),w=new Ag(P),me=new c_(P,w),x=new x_(P,w,le,me),O=new E_(P,x,w,le),re=new S_(P,K,ce),he=new d_(ne),q=new Bx(_,Oe,Le,J,K,me,he),te=new oy(_,ne),Y=new Gx,Pe=new Yx(J),Re=new l_(_,Oe,Le,k,O,d,l),Ae=new $x(_,O,K),Xe=new ay(P,le,K,k),ve=new u_(P,J,le),ze=new y_(P,J,le),le.programs=q.programs,_.capabilities=K,_.extensions=J,_.properties=ne,_.renderLists=Y,_.shadowMap=Ae,_.state=k,_.info=le}I();const ue=new sy(_,P);this.xr=ue,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const b=J.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=J.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(b){b!==void 0&&(U=b,this.setSize(X,$,!1))},this.getSize=function(b){return b.set(X,$)},this.setSize=function(b,N,H=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=b,$=N,t.width=Math.floor(b*U),t.height=Math.floor(N*U),H===!0&&(t.style.width=b+"px",t.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(X*U,$*U).floor()},this.setDrawingBufferSize=function(b,N,H){X=b,$=N,U=H,t.width=Math.floor(b*H),t.height=Math.floor(N*H),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(D)},this.getViewport=function(b){return b.copy(xe)},this.setViewport=function(b,N,H,W){b.isVector4?xe.set(b.x,b.y,b.z,b.w):xe.set(b,N,H,W),k.viewport(D.copy(xe).multiplyScalar(U).round())},this.getScissor=function(b){return b.copy(Ie)},this.setScissor=function(b,N,H,W){b.isVector4?Ie.set(b.x,b.y,b.z,b.w):Ie.set(b,N,H,W),k.scissor(B.copy(Ie).multiplyScalar(U).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(b){k.setScissorTest(ke=b)},this.setOpaqueSort=function(b){se=b},this.setTransparentSort=function(b){fe=b},this.getClearColor=function(b){return b.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(b=!0,N=!0,H=!0){let W=0;if(b){let F=!1;if(L!==null){const ae=L.texture.format;F=ae===Cc||ae===Rc||ae===Ac}if(F){const ae=L.texture.type,ge=ae===Jn||ae===hs||ae===Vr||ae===Wr||ae===bc||ae===wc,be=Re.getClearColor(),Se=Re.getClearAlpha(),Be=be.r,Ge=be.g,Ue=be.b;ge?(g[0]=Be,g[1]=Ge,g[2]=Ue,g[3]=Se,P.clearBufferuiv(P.COLOR,0,g)):(v[0]=Be,v[1]=Ge,v[2]=Ue,v[3]=Se,P.clearBufferiv(P.COLOR,0,v))}else W|=P.COLOR_BUFFER_BIT}N&&(W|=P.DEPTH_BUFFER_BIT),H&&(W|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),Re.dispose(),Y.dispose(),Pe.dispose(),ne.dispose(),Oe.dispose(),Le.dispose(),O.dispose(),me.dispose(),Xe.dispose(),q.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Vn),ue.removeEventListener("sessionend",ou),Vi.stop()};function de(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const b=le.autoReset,N=Ae.enabled,H=Ae.autoUpdate,W=Ae.needsUpdate,F=Ae.type;I(),le.autoReset=b,Ae.enabled=N,Ae.autoUpdate=H,Ae.needsUpdate=W,Ae.type=F}function oe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Q(b){const N=b.target;N.removeEventListener("dispose",Q),Ce(N)}function Ce(b){Ve(b),ne.remove(b)}function Ve(b){const N=ne.get(b).programs;N!==void 0&&(N.forEach(function(H){q.releaseProgram(H)}),b.isShaderMaterial&&q.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,H,W,F,ae){N===null&&(N=Me);const ge=F.isMesh&&F.matrixWorld.determinant()<0,be=Zf(b,N,H,W,F);k.setMaterial(W,ge);let Se=H.index,Be=1;if(W.wireframe===!0){if(Se=x.getWireframeAttribute(H),Se===void 0)return;Be=2}const Ge=H.drawRange,Ue=H.attributes.position;let tt=Ge.start*Be,ft=(Ge.start+Ge.count)*Be;ae!==null&&(tt=Math.max(tt,ae.start*Be),ft=Math.min(ft,(ae.start+ae.count)*Be)),Se!==null?(tt=Math.max(tt,0),ft=Math.min(ft,Se.count)):Ue!=null&&(tt=Math.max(tt,0),ft=Math.min(ft,Ue.count));const Ct=ft-tt;if(Ct<0||Ct===1/0)return;me.setup(F,W,be,H,Se);let Mt,_t=ve;if(Se!==null&&(Mt=w.get(Se),_t=ze,_t.setIndex(Mt)),F.isMesh)W.wireframe===!0?(k.setLineWidth(W.wireframeLinewidth*dt()),_t.setMode(P.LINES)):_t.setMode(P.TRIANGLES);else if(F.isLine){let Fe=W.linewidth;Fe===void 0&&(Fe=1),k.setLineWidth(Fe*dt()),F.isLineSegments?_t.setMode(P.LINES):F.isLineLoop?_t.setMode(P.LINE_LOOP):_t.setMode(P.LINE_STRIP)}else F.isPoints?_t.setMode(P.POINTS):F.isSprite&&_t.setMode(P.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Zr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_t.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))_t.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Fe=F._multiDrawStarts,wt=F._multiDrawCounts,st=F._multiDrawCount,un=Se?w.get(Se).bytesPerElement:1,Es=ne.get(W).currentProgram.getUniforms();for(let hn=0;hn<st;hn++)Es.setValue(P,"_gl_DrawID",hn),_t.render(Fe[hn]/un,wt[hn])}else if(F.isInstancedMesh)_t.renderInstances(tt,Ct,F.count);else if(H.isInstancedBufferGeometry){const Fe=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,wt=Math.min(H.instanceCount,Fe);_t.renderInstances(tt,Ct,wt)}else _t.render(tt,Ct)};function yt(b,N,H){b.transparent===!0&&b.side===Ut&&b.forceSinglePass===!1?(b.side=cn,b.needsUpdate=!0,go(b,N,H),b.side=Bi,b.needsUpdate=!0,go(b,N,H),b.side=Ut):go(b,N,H)}this.compile=function(b,N,H=null){H===null&&(H=b),f=Pe.get(H),f.init(N),y.push(f),H.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),b!==H&&b.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();const W=new Set;return b.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ae=F.material;if(ae)if(Array.isArray(ae))for(let ge=0;ge<ae.length;ge++){const be=ae[ge];yt(be,H,F),W.add(be)}else yt(ae,H,F),W.add(ae)}),f=y.pop(),W},this.compileAsync=function(b,N,H=null){const W=this.compile(b,N,H);return new Promise(F=>{function ae(){if(W.forEach(function(ge){ne.get(ge).currentProgram.isReady()&&W.delete(ge)}),W.size===0){F(b);return}setTimeout(ae,10)}J.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let at=null;function ni(b){at&&at(b)}function Vn(){Vi.stop()}function ou(){Vi.start()}const Vi=new Id;Vi.setAnimationLoop(ni),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(b){at=b,ue.setAnimationLoop(b),b===null?Vi.stop():Vi.start()},ue.addEventListener("sessionstart",Vn),ue.addEventListener("sessionend",ou),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(N),N=ue.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,N,L),f=Pe.get(b,y.length),f.init(N),y.push(f),j.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),it.setFromProjectionMatrix(j,Kn,N.reversedDepth),Z=this.localClippingEnabled,Ke=he.init(this.clippingPlanes,Z),m=Y.get(b,E.length),m.init(),E.push(m),ue.enabled===!0&&ue.isPresenting===!0){const ae=_.xr.getDepthSensingMesh();ae!==null&&La(ae,N,-1/0,_.sortObjects)}La(b,N,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(se,fe),Je=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,Je&&Re.addToRenderList(m,b),this.info.render.frame++,Ke===!0&&he.beginShadows();const H=f.state.shadowsArray;Ae.render(H,b,N),Ke===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,F=m.transmissive;if(f.setupLights(),N.isArrayCamera){const ae=N.cameras;if(F.length>0)for(let ge=0,be=ae.length;ge<be;ge++){const Se=ae[ge];lu(W,F,b,Se)}Je&&Re.render(b);for(let ge=0,be=ae.length;ge<be;ge++){const Se=ae[ge];au(m,b,Se,Se.viewport)}}else F.length>0&&lu(W,F,b,N),Je&&Re.render(b),au(m,b,N);L!==null&&C===0&&(ce.updateMultisampleRenderTarget(L),ce.updateRenderTargetMipmap(L)),b.isScene===!0&&b.onAfterRender(_,b,N),me.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(f=y[y.length-1],Ke===!0&&he.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function La(b,N,H,W){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||it.intersectsSprite(b)){W&&Te.setFromMatrixPosition(b.matrixWorld).applyMatrix4(j);const ge=O.update(b),be=b.material;be.visible&&m.push(b,ge,be,H,Te.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||it.intersectsObject(b))){const ge=O.update(b),be=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Te.copy(b.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Te.copy(ge.boundingSphere.center)),Te.applyMatrix4(b.matrixWorld).applyMatrix4(j)),Array.isArray(be)){const Se=ge.groups;for(let Be=0,Ge=Se.length;Be<Ge;Be++){const Ue=Se[Be],tt=be[Ue.materialIndex];tt&&tt.visible&&m.push(b,ge,tt,H,Te.z,Ue)}}else be.visible&&m.push(b,ge,be,H,Te.z,null)}}const ae=b.children;for(let ge=0,be=ae.length;ge<be;ge++)La(ae[ge],N,H,W)}function au(b,N,H,W){const F=b.opaque,ae=b.transmissive,ge=b.transparent;f.setupLightsView(H),Ke===!0&&he.setGlobalState(_.clippingPlanes,H),W&&k.viewport(D.copy(W)),F.length>0&&mo(F,N,H),ae.length>0&&mo(ae,N,H),ge.length>0&&mo(ge,N,H),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function lu(b,N,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new fs(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?to:Jn,minFilter:ss,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const ae=f.state.transmissionRenderTarget[W.id],ge=W.viewport||D;ae.setSize(ge.z*_.transmissionResolutionScale,ge.w*_.transmissionResolutionScale);const be=_.getRenderTarget(),Se=_.getActiveCubeFace(),Be=_.getActiveMipmapLevel();_.setRenderTarget(ae),_.getClearColor(G),V=_.getClearAlpha(),V<1&&_.setClearColor(16777215,.5),_.clear(),Je&&Re.render(H);const Ge=_.toneMapping;_.toneMapping=Ni;const Ue=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),Ke===!0&&he.setGlobalState(_.clippingPlanes,W),mo(b,H,W),ce.updateMultisampleRenderTarget(ae),ce.updateRenderTargetMipmap(ae),J.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let ft=0,Ct=N.length;ft<Ct;ft++){const Mt=N[ft],_t=Mt.object,Fe=Mt.geometry,wt=Mt.material,st=Mt.group;if(wt.side===Ut&&_t.layers.test(W.layers)){const un=wt.side;wt.side=cn,wt.needsUpdate=!0,cu(_t,H,W,Fe,wt,st),wt.side=un,wt.needsUpdate=!0,tt=!0}}tt===!0&&(ce.updateMultisampleRenderTarget(ae),ce.updateRenderTargetMipmap(ae))}_.setRenderTarget(be,Se,Be),_.setClearColor(G,V),Ue!==void 0&&(W.viewport=Ue),_.toneMapping=Ge}function mo(b,N,H){const W=N.isScene===!0?N.overrideMaterial:null;for(let F=0,ae=b.length;F<ae;F++){const ge=b[F],be=ge.object,Se=ge.geometry,Be=ge.group;let Ge=ge.material;Ge.allowOverride===!0&&W!==null&&(Ge=W),be.layers.test(H.layers)&&cu(be,N,H,Se,Ge,Be)}}function cu(b,N,H,W,F,ae){b.onBeforeRender(_,N,H,W,F,ae),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(_,N,H,W,b,ae),F.transparent===!0&&F.side===Ut&&F.forceSinglePass===!1?(F.side=cn,F.needsUpdate=!0,_.renderBufferDirect(H,N,W,F,b,ae),F.side=Bi,F.needsUpdate=!0,_.renderBufferDirect(H,N,W,F,b,ae),F.side=Ut):_.renderBufferDirect(H,N,W,F,b,ae),b.onAfterRender(_,N,H,W,F,ae)}function go(b,N,H){N.isScene!==!0&&(N=Me);const W=ne.get(b),F=f.state.lights,ae=f.state.shadowsArray,ge=F.state.version,be=q.getParameters(b,F.state,ae,N,H),Se=q.getProgramCacheKey(be);let Be=W.programs;W.environment=b.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(b.isMeshStandardMaterial?Le:Oe).get(b.envMap||W.environment),W.envMapRotation=W.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Be===void 0&&(b.addEventListener("dispose",Q),Be=new Map,W.programs=Be);let Ge=Be.get(Se);if(Ge!==void 0){if(W.currentProgram===Ge&&W.lightsStateVersion===ge)return hu(b,be),Ge}else be.uniforms=q.getUniforms(b),b.onBeforeCompile(be,_),Ge=q.acquireProgram(be,Se),Be.set(Se,Ge),W.uniforms=be.uniforms;const Ue=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ue.clippingPlanes=he.uniform),hu(b,be),W.needsLights=$f(b),W.lightsStateVersion=ge,W.needsLights&&(Ue.ambientLightColor.value=F.state.ambient,Ue.lightProbe.value=F.state.probe,Ue.directionalLights.value=F.state.directional,Ue.directionalLightShadows.value=F.state.directionalShadow,Ue.spotLights.value=F.state.spot,Ue.spotLightShadows.value=F.state.spotShadow,Ue.rectAreaLights.value=F.state.rectArea,Ue.ltc_1.value=F.state.rectAreaLTC1,Ue.ltc_2.value=F.state.rectAreaLTC2,Ue.pointLights.value=F.state.point,Ue.pointLightShadows.value=F.state.pointShadow,Ue.hemisphereLights.value=F.state.hemi,Ue.directionalShadowMap.value=F.state.directionalShadowMap,Ue.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ue.spotShadowMap.value=F.state.spotShadowMap,Ue.spotLightMatrix.value=F.state.spotLightMatrix,Ue.spotLightMap.value=F.state.spotLightMap,Ue.pointShadowMap.value=F.state.pointShadowMap,Ue.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=Ge,W.uniformsList=null,Ge}function uu(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=Qo.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function hu(b,N){const H=ne.get(b);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function Zf(b,N,H,W,F){N.isScene!==!0&&(N=Me),ce.resetTextureUnits();const ae=N.fog,ge=W.isMeshStandardMaterial?N.environment:null,be=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:rr,Se=(W.isMeshStandardMaterial?Le:Oe).get(W.envMap||ge),Be=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ge=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ue=!!H.morphAttributes.position,tt=!!H.morphAttributes.normal,ft=!!H.morphAttributes.color;let Ct=Ni;W.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ct=_.toneMapping);const Mt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,_t=Mt!==void 0?Mt.length:0,Fe=ne.get(W),wt=f.state.lights;if(Ke===!0&&(Z===!0||b!==M)){const Kt=b===M&&W.id===S;he.setState(W,b,Kt)}let st=!1;W.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==wt.state.version||Fe.outputColorSpace!==be||F.isBatchedMesh&&Fe.batching===!1||!F.isBatchedMesh&&Fe.batching===!0||F.isBatchedMesh&&Fe.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Fe.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Fe.instancing===!1||!F.isInstancedMesh&&Fe.instancing===!0||F.isSkinnedMesh&&Fe.skinning===!1||!F.isSkinnedMesh&&Fe.skinning===!0||F.isInstancedMesh&&Fe.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Fe.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Fe.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Fe.instancingMorph===!1&&F.morphTexture!==null||Fe.envMap!==Se||W.fog===!0&&Fe.fog!==ae||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==he.numPlanes||Fe.numIntersection!==he.numIntersection)||Fe.vertexAlphas!==Be||Fe.vertexTangents!==Ge||Fe.morphTargets!==Ue||Fe.morphNormals!==tt||Fe.morphColors!==ft||Fe.toneMapping!==Ct||Fe.morphTargetsCount!==_t)&&(st=!0):(st=!0,Fe.__version=W.version);let un=Fe.currentProgram;st===!0&&(un=go(W,N,F));let Es=!1,hn=!1,vr=!1;const Tt=un.getUniforms(),yn=Fe.uniforms;if(k.useProgram(un.program)&&(Es=!0,hn=!0,vr=!0),W.id!==S&&(S=W.id,hn=!0),Es||M!==b){k.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Tt.setValue(P,"projectionMatrix",b.projectionMatrix),Tt.setValue(P,"viewMatrix",b.matrixWorldInverse);const tn=Tt.map.cameraPosition;tn!==void 0&&tn.setValue(P,ye.setFromMatrixPosition(b.matrixWorld)),K.logarithmicDepthBuffer&&Tt.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Tt.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,hn=!0,vr=!0)}if(F.isSkinnedMesh){Tt.setOptional(P,F,"bindMatrix"),Tt.setOptional(P,F,"bindMatrixInverse");const Kt=F.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),Tt.setValue(P,"boneTexture",Kt.boneTexture,ce))}F.isBatchedMesh&&(Tt.setOptional(P,F,"batchingTexture"),Tt.setValue(P,"batchingTexture",F._matricesTexture,ce),Tt.setOptional(P,F,"batchingIdTexture"),Tt.setValue(P,"batchingIdTexture",F._indirectTexture,ce),Tt.setOptional(P,F,"batchingColorTexture"),F._colorsTexture!==null&&Tt.setValue(P,"batchingColorTexture",F._colorsTexture,ce));const Mn=H.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&re.update(F,H,un),(hn||Fe.receiveShadow!==F.receiveShadow)&&(Fe.receiveShadow=F.receiveShadow,Tt.setValue(P,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(yn.envMap.value=Se,yn.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&N.environment!==null&&(yn.envMapIntensity.value=N.environmentIntensity),hn&&(Tt.setValue(P,"toneMappingExposure",_.toneMappingExposure),Fe.needsLights&&Kf(yn,vr),ae&&W.fog===!0&&te.refreshFogUniforms(yn,ae),te.refreshMaterialUniforms(yn,W,U,$,f.state.transmissionRenderTarget[b.id]),Qo.upload(P,uu(Fe),yn,ce)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Qo.upload(P,uu(Fe),yn,ce),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Tt.setValue(P,"center",F.center),Tt.setValue(P,"modelViewMatrix",F.modelViewMatrix),Tt.setValue(P,"normalMatrix",F.normalMatrix),Tt.setValue(P,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Kt=W.uniformsGroups;for(let tn=0,Ia=Kt.length;tn<Ia;tn++){const Wi=Kt[tn];Xe.update(Wi,un),Xe.bind(Wi,un)}}return un}function Kf(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function $f(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(b,N,H){const W=ne.get(b);W.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),ne.get(b.texture).__webglTexture=N,ne.get(b.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:H,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,N){const H=ne.get(b);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0};const Jf=P.createFramebuffer();this.setRenderTarget=function(b,N=0,H=0){L=b,R=N,C=H;let W=!0,F=null,ae=!1,ge=!1;if(b){const Se=ne.get(b);if(Se.__useDefaultFramebuffer!==void 0)k.bindFramebuffer(P.FRAMEBUFFER,null),W=!1;else if(Se.__webglFramebuffer===void 0)ce.setupRenderTarget(b);else if(Se.__hasExternalTextures)ce.rebindTextures(b,ne.get(b.texture).__webglTexture,ne.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ue=b.depthTexture;if(Se.__boundDepthTexture!==Ue){if(Ue!==null&&ne.has(Ue)&&(b.width!==Ue.image.width||b.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ce.setupDepthRenderbuffer(b)}}const Be=b.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(ge=!0);const Ge=ne.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ge[N])?F=Ge[N][H]:F=Ge[N],ae=!0):b.samples>0&&ce.useMultisampledRTT(b)===!1?F=ne.get(b).__webglMultisampledFramebuffer:Array.isArray(Ge)?F=Ge[H]:F=Ge,D.copy(b.viewport),B.copy(b.scissor),z=b.scissorTest}else D.copy(xe).multiplyScalar(U).floor(),B.copy(Ie).multiplyScalar(U).floor(),z=ke;if(H!==0&&(F=Jf),k.bindFramebuffer(P.FRAMEBUFFER,F)&&W&&k.drawBuffers(b,F),k.viewport(D),k.scissor(B),k.setScissorTest(z),ae){const Se=ne.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,Se.__webglTexture,H)}else if(ge){const Se=N;for(let Be=0;Be<b.textures.length;Be++){const Ge=ne.get(b.textures[Be]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Be,Ge.__webglTexture,H,Se)}}else if(b!==null&&H!==0){const Se=ne.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Se.__webglTexture,H)}S=-1},this.readRenderTargetPixels=function(b,N,H,W,F,ae,ge,be=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=ne.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ge!==void 0&&(Se=Se[ge]),Se){k.bindFramebuffer(P.FRAMEBUFFER,Se);try{const Be=b.textures[be],Ge=Be.format,Ue=Be.type;if(!K.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-W&&H>=0&&H<=b.height-F&&(b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+be),P.readPixels(N,H,W,F,De.convert(Ge),De.convert(Ue),ae))}finally{const Be=L!==null?ne.get(L).__webglFramebuffer:null;k.bindFramebuffer(P.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(b,N,H,W,F,ae,ge,be=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=ne.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ge!==void 0&&(Se=Se[ge]),Se)if(N>=0&&N<=b.width-W&&H>=0&&H<=b.height-F){k.bindFramebuffer(P.FRAMEBUFFER,Se);const Be=b.textures[be],Ge=Be.format,Ue=Be.type;if(!K.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,tt),P.bufferData(P.PIXEL_PACK_BUFFER,ae.byteLength,P.STREAM_READ),b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+be),P.readPixels(N,H,W,F,De.convert(Ge),De.convert(Ue),0);const ft=L!==null?ne.get(L).__webglFramebuffer:null;k.bindFramebuffer(P.FRAMEBUFFER,ft);const Ct=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await sm(P,Ct,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,tt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ae),P.deleteBuffer(tt),P.deleteSync(Ct),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,N=null,H=0){const W=Math.pow(2,-H),F=Math.floor(b.image.width*W),ae=Math.floor(b.image.height*W),ge=N!==null?N.x:0,be=N!==null?N.y:0;ce.setTexture2D(b,0),P.copyTexSubImage2D(P.TEXTURE_2D,H,0,0,ge,be,F,ae),k.unbindTexture()};const jf=P.createFramebuffer(),Qf=P.createFramebuffer();this.copyTextureToTexture=function(b,N,H=null,W=null,F=0,ae=null){ae===null&&(F!==0?(Zr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ae=F,F=0):ae=0);let ge,be,Se,Be,Ge,Ue,tt,ft,Ct;const Mt=b.isCompressedTexture?b.mipmaps[ae]:b.image;if(H!==null)ge=H.max.x-H.min.x,be=H.max.y-H.min.y,Se=H.isBox3?H.max.z-H.min.z:1,Be=H.min.x,Ge=H.min.y,Ue=H.isBox3?H.min.z:0;else{const Mn=Math.pow(2,-F);ge=Math.floor(Mt.width*Mn),be=Math.floor(Mt.height*Mn),b.isDataArrayTexture?Se=Mt.depth:b.isData3DTexture?Se=Math.floor(Mt.depth*Mn):Se=1,Be=0,Ge=0,Ue=0}W!==null?(tt=W.x,ft=W.y,Ct=W.z):(tt=0,ft=0,Ct=0);const _t=De.convert(N.format),Fe=De.convert(N.type);let wt;N.isData3DTexture?(ce.setTexture3D(N,0),wt=P.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(ce.setTexture2DArray(N,0),wt=P.TEXTURE_2D_ARRAY):(ce.setTexture2D(N,0),wt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);const st=P.getParameter(P.UNPACK_ROW_LENGTH),un=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Es=P.getParameter(P.UNPACK_SKIP_PIXELS),hn=P.getParameter(P.UNPACK_SKIP_ROWS),vr=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Mt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Mt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Be),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ge),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ue);const Tt=b.isDataArrayTexture||b.isData3DTexture,yn=N.isDataArrayTexture||N.isData3DTexture;if(b.isDepthTexture){const Mn=ne.get(b),Kt=ne.get(N),tn=ne.get(Mn.__renderTarget),Ia=ne.get(Kt.__renderTarget);k.bindFramebuffer(P.READ_FRAMEBUFFER,tn.__webglFramebuffer),k.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ia.__webglFramebuffer);for(let Wi=0;Wi<Se;Wi++)Tt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ne.get(b).__webglTexture,F,Ue+Wi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ne.get(N).__webglTexture,ae,Ct+Wi)),P.blitFramebuffer(Be,Ge,ge,be,tt,ft,ge,be,P.DEPTH_BUFFER_BIT,P.NEAREST);k.bindFramebuffer(P.READ_FRAMEBUFFER,null),k.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(F!==0||b.isRenderTargetTexture||ne.has(b)){const Mn=ne.get(b),Kt=ne.get(N);k.bindFramebuffer(P.READ_FRAMEBUFFER,jf),k.bindFramebuffer(P.DRAW_FRAMEBUFFER,Qf);for(let tn=0;tn<Se;tn++)Tt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Mn.__webglTexture,F,Ue+tn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Mn.__webglTexture,F),yn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Kt.__webglTexture,ae,Ct+tn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Kt.__webglTexture,ae),F!==0?P.blitFramebuffer(Be,Ge,ge,be,tt,ft,ge,be,P.COLOR_BUFFER_BIT,P.NEAREST):yn?P.copyTexSubImage3D(wt,ae,tt,ft,Ct+tn,Be,Ge,ge,be):P.copyTexSubImage2D(wt,ae,tt,ft,Be,Ge,ge,be);k.bindFramebuffer(P.READ_FRAMEBUFFER,null),k.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else yn?b.isDataTexture||b.isData3DTexture?P.texSubImage3D(wt,ae,tt,ft,Ct,ge,be,Se,_t,Fe,Mt.data):N.isCompressedArrayTexture?P.compressedTexSubImage3D(wt,ae,tt,ft,Ct,ge,be,Se,_t,Mt.data):P.texSubImage3D(wt,ae,tt,ft,Ct,ge,be,Se,_t,Fe,Mt):b.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ae,tt,ft,ge,be,_t,Fe,Mt.data):b.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ae,tt,ft,Mt.width,Mt.height,_t,Mt.data):P.texSubImage2D(P.TEXTURE_2D,ae,tt,ft,ge,be,_t,Fe,Mt);P.pixelStorei(P.UNPACK_ROW_LENGTH,st),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,un),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Es),P.pixelStorei(P.UNPACK_SKIP_ROWS,hn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,vr),ae===0&&N.generateMipmaps&&P.generateMipmap(wt),k.unbindTexture()},this.initRenderTarget=function(b){ne.get(b).__webglFramebuffer===void 0&&ce.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?ce.setTextureCube(b,0):b.isData3DTexture?ce.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ce.setTexture2DArray(b,0):ce.setTexture2D(b,0),k.unbindTexture()},this.resetState=function(){R=0,C=0,L=null,k.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}const Rh={type:"change"},zc={type:"start"},kd={type:"end"},Xo=new no,Ch=new Ri,ly=Math.cos(70*En.DEG2RAD),Ft=new T,nn=2*Math.PI,mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ml=1e-6;class cy extends wg{constructor(e,t=null){super(e,t),this.state=mt.NONE,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xs.ROTATE,MIDDLE:Xs.DOLLY,RIGHT:Xs.PAN},this.touches={ONE:Gs.ROTATE,TWO:Gs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new T,this._lastQuaternion=new ds,this._lastTargetPosition=new T,this._quat=new ds().setFromUnitVectors(e.up,new T(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new nh,this._sphericalDelta=new nh,this._scale=1,this._panOffset=new T,this._rotateStart=new ie,this._rotateEnd=new ie,this._rotateDelta=new ie,this._panStart=new ie,this._panEnd=new ie,this._panDelta=new ie,this._dollyStart=new ie,this._dollyEnd=new ie,this._dollyDelta=new ie,this._dollyDirection=new T,this._mouse=new ie,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=hy.bind(this),this._onPointerDown=uy.bind(this),this._onPointerUp=dy.bind(this),this._onContextMenu=xy.bind(this),this._onMouseWheel=my.bind(this),this._onKeyDown=gy.bind(this),this._onTouchStart=vy.bind(this),this._onTouchMove=_y.bind(this),this._onMouseDown=fy.bind(this),this._onMouseMove=py.bind(this),this._interceptControlDown=yy.bind(this),this._interceptControlUp=My.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Rh),this.update(),this.state=mt.NONE}update(e=null){const t=this.object.position;Ft.copy(t).sub(this.target),Ft.applyQuaternion(this._quat),this._spherical.setFromVector3(Ft),this.autoRotate&&this.state===mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=nn:i>Math.PI&&(i-=nn),s<-Math.PI?s+=nn:s>Math.PI&&(s-=nn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ft.setFromSpherical(this._spherical),Ft.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ft),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ft.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new T(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new T(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ft.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Xo.origin.copy(this.object.position),Xo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Xo.direction))<ly?this.object.lookAt(this.target):(Ch.setFromNormalAndCoplanarPoint(this.object.up,this.target),Xo.intersectPlane(Ch,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ml||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ml||this._lastTargetPosition.distanceToSquared(this.target)>ml?(this.dispatchEvent(Rh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?nn/60*this.autoRotateSpeed*e:nn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ft.setFromMatrixColumn(t,0),Ft.multiplyScalar(-e),this._panOffset.add(Ft)}_panUp(e,t){this.screenSpacePanning===!0?Ft.setFromMatrixColumn(t,1):(Ft.setFromMatrixColumn(t,0),Ft.crossVectors(this.object.up,Ft)),Ft.multiplyScalar(e),this._panOffset.add(Ft)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ft.copy(s).sub(this.target);let r=Ft.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/t.clientHeight),this._rotateUp(nn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/t.clientHeight),this._rotateUp(nn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ie,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function uy(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function hy(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function dy(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(kd),this.state=mt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function fy(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Xs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=mt.DOLLY;break;case Xs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=mt.ROTATE}break;case Xs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=mt.PAN}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(zc)}function py(n){switch(this.state){case mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function my(n){this.enabled===!1||this.enableZoom===!1||this.state!==mt.NONE||(n.preventDefault(),this.dispatchEvent(zc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(kd))}function gy(n){this.enabled!==!1&&this._handleKeyDown(n)}function vy(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Gs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=mt.TOUCH_ROTATE;break;case Gs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=mt.TOUCH_PAN;break;default:this.state=mt.NONE}break;case 2:switch(this.touches.TWO){case Gs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=mt.TOUCH_DOLLY_PAN;break;case Gs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=mt.TOUCH_DOLLY_ROTATE;break;default:this.state=mt.NONE}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(zc)}function _y(n){switch(this._trackPointer(n),this.state){case mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=mt.NONE}}function xy(n){this.enabled!==!1&&n.preventDefault()}function yy(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function My(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function zd(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Lt;let c=0;for(let u=0;u<n.length;++u){const h=n[u];let p=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),p++}if(p!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(t){let u=0;const h=[];for(let p=0;p<n.length;++p){const d=n[p].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=n[p].attributes.position.count}l.setIndex(h)}for(const u in r){const h=Ph(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let p=0;p<h;++p){const d=[];for(let v=0;v<o[u].length;++v)d.push(o[u][v][p]);const g=Ph(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Ph(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){const u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new bn(o,t,i);let l=0;for(let c=0;c<n.length;++c){const u=n[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let p=0,d=u.count;p<d;p++)for(let g=0;g<t;g++){const v=u.getComponent(p,g);a.setComponent(p+h,g,v)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function Sy(n,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},i=n.getIndex(),s=n.getAttribute("position"),r=i?i.count:s.count;let o=0;const a=Object.keys(n.attributes),l={},c={},u=[],h=["getX","getY","getZ","getW"],p=["setX","setY","setZ","setW"];for(let E=0,y=a.length;E<y;E++){const _=a[E],A=n.attributes[_];l[_]=new A.constructor(new A.array.constructor(A.count*A.itemSize),A.itemSize,A.normalized);const R=n.morphAttributes[_];R&&(c[_]||(c[_]=[]),R.forEach((C,L)=>{const S=new C.array.constructor(C.count*C.itemSize);c[_][L]=new C.constructor(S,C.itemSize,C.normalized)}))}const d=e*.5,g=Math.log10(1/e),v=Math.pow(10,g),m=d*v;for(let E=0;E<r;E++){const y=i?i.getX(E):E;let _="";for(let A=0,R=a.length;A<R;A++){const C=a[A],L=n.getAttribute(C),S=L.itemSize;for(let M=0;M<S;M++)_+=`${~~(L[h[M]](y)*v+m)},`}if(_ in t)u.push(t[_]);else{for(let A=0,R=a.length;A<R;A++){const C=a[A],L=n.getAttribute(C),S=n.morphAttributes[C],M=L.itemSize,D=l[C],B=c[C];for(let z=0;z<M;z++){const G=h[z],V=p[z];if(D[V](o,L[G](y)),S)for(let X=0,$=S.length;X<$;X++)B[X][V](o,S[X][G](y))}}t[_]=o,u.push(o),o++}}const f=n.clone();for(const E in n.attributes){const y=l[E];if(f.setAttribute(E,new y.constructor(y.array.slice(0,o*y.itemSize),y.itemSize,y.normalized)),E in c)for(let _=0;_<c[E].length;_++){const A=c[E][_];f.morphAttributes[E][_]=new A.constructor(A.array.slice(0,o*A.itemSize),A.itemSize,A.normalized)}}return f.setIndex(u),f}const We=18,lt=3.2,je=2.55,an=We/2,Tr=8.8,lr=je*1.2,jt=je*1.4,Vs=je*1.08,Ey=.22,dr={straight:["north","south"],corner:["north","east"],tjunction:["north","east","west"],crossroad:["north","east","south","west"],teleport:["east","west"],ghostchamber:["north"]},by=[{type:"straight",position:[-24,0,-6],rotation:Math.PI/2},{type:"corner",position:[-10,0,15],rotation:Math.PI/2},{type:"crossroad",position:[12,0,15],rotation:0},{type:"tjunction",position:[26,0,-5],rotation:Math.PI},{type:"teleport",position:[1,0,-22],rotation:0},{type:"ghostchamber",position:[0,0,0],rotation:0}],Et=wy(),Ks=Ty(),Yo=new Map;function wy(){return{glass:new fg({color:14742783,transmission:.98,thickness:Ey,roughness:.04,metalness:.02,ior:1.48,reflectivity:.5,transparent:!0,side:Ut,attenuationColor:16777215,attenuationDistance:.8,userData:{isMazeGlass:!0}}),rim:new Nn({color:1920728,emissive:996512,emissiveIntensity:.6,roughness:.24,metalness:.4}),structure:new Nn({color:1384239,emissive:330516,roughness:.64,metalness:.2}),walkway:new Nn({color:3818839,emissive:791330,roughness:.76,metalness:.08}),led:new Nn({color:2909439,emissive:1459442,emissiveIntensity:2.1,roughness:.14,metalness:.08}),halo:new Ot({color:1919743,transparent:!0,opacity:.1,side:Ut}),ledGlow:new Ot({color:1655252,transparent:!0,opacity:.24,side:Ut}),teleport:new Nn({color:9236479,emissive:4645631,emissiveIntensity:1.55,transparent:!0,opacity:.66,roughness:.12,metalness:.08})}}function Ty(){return{pedestalBase:new vn(Tr,Tr+.6,1.35,10),pedestalTop:new vn(Tr-1.1,Tr-.45,.36,10),pedestalHalo:new ei(Tr+.85,28),hubDeck:new vn(je*1.02,je*1.08,.18,18),rimRing:new os(je+.02,.12,8,24),hubHalo:new os(je*.76,.08,8,20),pipeShell:new vn(je,je,an,20,1,!0),walkwayX:new gn(an,.18,lr*1.34),walkwayZ:new gn(lr*1.34,.18,an),ledStripX:new gn(an*.98,.06,.18),ledStripZ:new gn(.18,.06,an*.98),ledGlowX:new gi(an*.98,.95),ledGlowZ:new gi(.95,an*.98),portalRing:new os(je*.9,.14,10,24),portalFace:new ei(je*.72,20)}}function Pn(n,e,t,i,s=Math.random()*Math.PI*2){return n.userData.pulse={base:e,amplitude:t,speed:i,phase:s},n}function Gd(n){return n==="east"||n==="west"?"x":"z"}function Hd(n){return n==="east"||n==="south"?1:-1}function Vd(n,e){n.rotation.set(0,0,0),e==="x"?n.rotation.z=Math.PI/2:n.rotation.x=Math.PI/2}function Ay(n,e,t,i,s,r=24,o=1){const a=new vn(t,t,e,r,o,i),l=new we(a);return Vd(l,n),l.position.copy(s),l.updateMatrixWorld(!0),a.applyMatrix4(l.matrixWorld),a.deleteAttribute("uv"),a}function xn(){const n=new ot,e=new we(Ks.pedestalBase,Et.structure);e.position.y=-.24;const t=new we(Ks.pedestalTop,Et.walkway);t.position.y=.44;const i=new we(Ks.pedestalHalo,Et.halo);return i.rotation.x=-Math.PI/2,i.position.y=.052,n.add(e,t,i),n}function Wd(){const n=new ot,e=new we(Ks.hubDeck,Et.walkway);e.position.y=lt-je+.14;const t=Pn(new we(Ks.hubHalo,Et.led),1.2,.18,1.3);return t.position.y=lt-je+.22,t.rotation.x=Math.PI/2,n.add(e,t),n}function Ry(n,e){const t=new we(Ks.rimRing,Et.rim);return t.position.copy(e),n==="x"&&(t.rotation.y=Math.PI/2),t}function Cy(n,e,t=an,i=0){const s=n==="x"?new gn(t,.18,lr*1.34):new gn(lr*1.34,.18,t),r=new we(s,Et.walkway),o=i+t*.5;return n==="x"?r.position.set(e*o,lt-je+.14,0):r.position.set(0,lt-je+.14,e*o),r}function Py(n,e,t=an,i=0){const s=new ot,r=n==="x"?new gn(t*.98,.06,.18):new gn(.18,.06,t*.98),o=n==="x"?new gi(t*.98,.95):new gi(.95,t*.98),a=i+t*.5;return[-1,1].forEach(l=>{const c=Pn(new we(r,Et.led),1.4,.34,1.2,l),u=new we(o,Et.ledGlow);n==="x"?(c.position.set(e*a,lt-je+.3,l*1.08),u.position.set(e*a,lt-je+.14,l*1.02)):(c.position.set(l*1.08,lt-je+.3,e*a),u.position.set(l*1.02,lt-je+.14,e*a)),u.rotation.x=-Math.PI/2,s.add(c,u)}),s}function jr(n,e={}){const t=new ot,i=Gd(n),s=Hd(n),r=e.length??an,o=e.startOffset??0,a=o+r*.5,l=new we(new vn(je,je,r,20,1,!0),Et.glass);Vd(l,i),i==="x"?l.position.set(s*a,lt,0):l.position.set(0,lt,s*a);const c=i==="x"?new T(s*(o+r),lt,0):new T(0,lt,s*(o+r));return t.add(l),t.add(Ry(i,c)),t.add(Cy(i,s,r,o)),t.add(Py(i,s,r,o)),t}function qd(n,e){return new class extends Hn{getPoint(t,i=new T){const s=Math.PI-t*(Math.PI/2),r=jt+n*Math.cos(s),o=-jt+n*Math.sin(s);return i.set(r,e,o)}}}function Dy(){const n=jt+lr*.67,e=jt-lr*.67,t=new Zs;t.absarc(jt,-jt,n,Math.PI,Math.PI/2,!0),t.absarc(jt,-jt,e,Math.PI/2,Math.PI,!1);const i=new we(new Ma(t,20),Et.walkway);return i.rotation.x=-Math.PI/2,i.position.y=lt-je+.14,i}function Ly(){const n=new ot;return[jt-1.08,jt+1.08].forEach((t,i)=>{const s=qd(t,lt-je+.3),r=Pn(new we(new Pi(s,18,.05,8,!1),Et.led),1.35,.28,1.15,i);n.add(r)}),n}function Iy(){const n=new ot,e=qd(jt,lt),t=new we(new Pi(e,24,je,16,!1),Et.glass);return n.add(t),n.add(Dy()),n.add(Ly()),n}function Uy(){const n=new ot;return n.userData.type="corner",n.add(xn()),n.add(jr("north",{length:an-jt,startOffset:jt})),n.add(jr("east",{length:an-jt,startOffset:jt})),n.add(Iy()),n}function Ny(n){const e=[{axis:"x",length:Vs*2,position:new T(0,lt,0)}];return n==="crossroad"?e.push({axis:"z",length:Vs*2,position:new T(0,lt,0)}):e.push({axis:"z",length:Vs,position:new T(0,lt,-Vs*.5)}),e}function Fy(n){if(Yo.has(n))return Yo.get(n);const t=Ny(n).map(s=>Ay(s.axis,s.length,je,!0,s.position,48));let i=zd(t,!1);return i=Sy(i,.001),i.computeVertexNormals(),Yo.set(n,i.clone()),Yo.get(n)}const gl=new Map;function Oy(n){if(gl.has(n))return gl.get(n);const e=Et.glass.clone();return e.userData.isMazeGlass=!0,e.customProgramCacheKey=()=>n,e.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
      varying vec3 vRawPos;`),t.vertexShader=t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vRawPos = position;`);let i="";n==="crossroad"?i=`
          float rSq = 2.54 * 2.54; 
          float dy = vRawPos.y - 3.2; // HUB_HEIGHT
          float distSqX = dy * dy + vRawPos.z * vRawPos.z;
          float distSqZ = vRawPos.x * vRawPos.x + dy * dy;
          // Delete overlapping interiors
          if (distSqX < rSq || distSqZ < rSq) discard;
        `:n==="tjunction"&&(i=`
          float rSq = 2.54 * 2.54;
          float dy = vRawPos.y - 3.2; // HUB_HEIGHT
          float distSqX = dy * dy + vRawPos.z * vRawPos.z;
          float distSqZ = vRawPos.x * vRawPos.x + dy * dy;
          
          if (distSqX < rSq) {
              // Pixel is inside the X pipe
              discard;
          }
          if (distSqZ < rSq && vRawPos.z < 0.0) {
              // Pixel is inside the Z pipe (which only exists on the negative Z side)
              discard;
          }
        `),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
      varying vec3 vRawPos;`),t.fragmentShader=t.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
      ${i}
      `)},gl.set(n,e),e}function By(n){const e=new ot;return e.userData.type=n,e.add(xn()),e.add(Wd()),e.add(new we(Fy(n),Oy(n))),dr[n].forEach(t=>{e.add(jr(t,{length:an-Vs,startOffset:Vs}))}),e}function ky(n){const e=Gd(n),t=Hd(n),i=new ot,s=t*(an-.3),r=new ei(je*.96,64),o=new Qn({uniforms:{uTime:{value:0}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform float uTime;
      varying vec2 vUv;

      void main() {
        vec2 uv = vUv - 0.5;
        float r = length(uv) * 2.0;
        float a = atan(uv.y, uv.x);

        // Singularity hole mask
        float hole = smoothstep(0.2, 0.25, r);
        
        // Vortex physics: the "suction" twist
        float twist = 8.0 / (r + 0.1);
        
        // Create a grid of "Digital Pieces"
        float rFreq = 14.0;
        float aFreq = 10.0;
        float rCoord = r * rFreq - uTime * 6.0;
        float aCoord = a * aFreq + twist;
        
        vec2 grid = fract(vec2(rCoord, aCoord));
        float piece = step(0.6, grid.x) * step(0.2, grid.y);
        
        // Deep Saturated Blue
        vec3 deepBlue = vec3(0.05, 0.2, 1.0);
        
        // Subtle energy flicker
        float flicker = 0.85 + 0.15 * sin(uTime * 12.0 + rCoord * 10.0);

        // Intensity
        float intensity = 2.2;

        // Final color
        vec3 color = deepBlue * intensity * flicker;

        // Space between pieces is unfilled (alpha = 0)
        float alpha = piece * hole * (1.0 - smoothstep(0.92, 1.0, r));
        
        // Use discard for alphaTest compatibility
        if (alpha < 0.1) discard;

        gl_FragColor = vec4(color, 1.0);
      }
    `,transparent:!1,alphaTest:.1,side:Ut,depthWrite:!0}),a=new we(r,o);a.onBeforeRender=()=>{o.uniforms.uTime.value=performance.now()*.001};const l=new ya(je*.88,je*1.05,32),c=new Ot({color:65535,transparent:!0,opacity:.12,blending:ki,side:Ut,depthWrite:!1}),u=new we(l,c);return u.renderOrder=10,e==="x"?(a.position.set(s,lt,0),a.rotation.y=Math.PI/2,u.position.set(s+t*.05,lt,0),u.rotation.y=Math.PI/2):(a.position.set(0,lt,s),a.rotation.y=t>0?Math.PI:0,u.position.set(0,lt,s+t*.05),u.rotation.y=t>0?Math.PI:0),i.add(a,u),i}function io(n){let e;if(n==="corner")e=Uy();else if(n==="ghostchamber")e=zy();else if(n==="tjunction"||n==="crossroad")e=By(n);else{e=new ot,e.userData.type=n;const t=dr[n];if(!t)throw new Error(`Unknown maze piece type: ${n}`);e.add(xn()),e.add(Wd()),t.forEach(i=>{e.add(jr(i))}),n==="teleport"&&e.add(ky("west"))}return e.traverse(t=>{t.isMesh&&t.material?.userData?.isMazeGlass&&(t.renderOrder=1)}),e}function zy(){const n=new ot;n.userData.type="ghostchamber";const e=new ot;e.position.z=4.5,n.add(e),n.add(xn());const t=je,i=18.9,s=13.9,r=4,o=new Zs,a=-i/2,l=-s/2;o.moveTo(a,l+r),o.lineTo(a,l+s-r),o.quadraticCurveTo(a,l+s,a+r,l+s),o.lineTo(a+i-r,l+s),o.quadraticCurveTo(a+i,l+s,a+i,l+s-r),o.lineTo(a+i,l+r),o.quadraticCurveTo(a+i,l,a+i-r,l),o.lineTo(a+r,l),o.quadraticCurveTo(a,l,a,l+r);const c={depth:.01,bevelEnabled:!0,bevelThickness:t,bevelSize:t,bevelSegments:20,curveSegments:24},u=new ca(o,c),h=Et.glass.clone();h.userData.isMazeGlass=!0,h.customProgramCacheKey=()=>"ghostchamber",h.onBeforeCompile=k=>{k.vertexShader=k.vertexShader.replace("#include <common>",`#include <common>
      varying vec3 vRawPos;`),k.vertexShader=k.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vRawPos = position;`),k.fragmentShader=k.fragmentShader.replace("#include <common>",`#include <common>
      varying vec3 vRawPos;`),k.fragmentShader=k.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
      // The shell is rotated -90deg on X, so Local Y becomes World -Z.
      if (vRawPos.y > 6.9) { 
        float distToPipeCenter = sqrt(vRawPos.x * vRawPos.x + vRawPos.z * vRawPos.z);
        if (distToPipeCenter < 2.54) {
            discard;
        }
      }
      `)};const p=new we(u,h);p.rotation.x=-Math.PI/2,p.position.y=lt,e.add(p);const d=18,g=14,v=3,m=new Zs,f=-d/2,E=-g/2;m.moveTo(f,E+v),m.lineTo(f,E+g-v),m.quadraticCurveTo(f,E+g,f+v,E+g),m.lineTo(f+d-v,E+g),m.quadraticCurveTo(f+d,E+g,f+d,E+g-v),m.lineTo(f+d,E+v),m.quadraticCurveTo(f+d,E,f+d-v,E),m.lineTo(f+v,E),m.quadraticCurveTo(f,E,f,E+v);const y=new ca(m,{depth:.18,bevelEnabled:!1,curveSegments:16});y.computeBoundingBox();const _=-.5*(y.boundingBox.max.z-y.boundingBox.min.z);y.translate(0,0,_);const A=new we(y,Et.walkway);A.rotation.x=-Math.PI/2,A.position.set(0,lt-je+.14,0),e.add(A);const C=m.getPoints(24).map(k=>new T(k.x,0,k.y)),L=new uc(C,!0),S=new Pi(L,128,.06,8,!0),M=Pn(new we(S,Et.led),1.4,.34,1.2,0);M.position.set(0,lt-je+.3,0),e.add(M);const D=new Pi(L,128,.4,8,!0),B=new we(D,Et.ledGlow);B.position.set(0,lt-je+.14,0),e.add(B);const z=1.8,G=new Zs;G.absarc(0,.5,z,0,Math.PI,!1),G.lineTo(-z,-1.5),G.lineTo(-z/2,-.5),G.lineTo(0,-1.5),G.lineTo(z/2,-.5),G.lineTo(z,-1.5),G.lineTo(z,.5);const X=G.getPoints(16).map(k=>new T(k.x,0,k.y)),$=new uc(X,!0),U=new Pi($,64,.08,8,!0),se=new Ma(G,16),fe=[-4.5,4.5],xe=[-3,3],Ie=new Td,ke=[new T(-.6,0,-.2),new T(-.3,0,.1),new T(0,0,-.2),new T(.3,0,.1),new T(.6,0,-.2)];Ie.add(new Lr(ke[0],ke[1])),Ie.add(new Lr(ke[1],ke[2])),Ie.add(new Lr(ke[2],ke[3])),Ie.add(new Lr(ke[3],ke[4]));const it=new Pi(Ie,16,.05,8,!1),Ke=new os(.25,.05,8,16);let Z=0;fe.forEach(k=>{let le=0;xe.forEach(ne=>{const ce=(Z+le)%2===1,Oe=Pn(new we(U,Et.led),1.2,.4,1.8,Math.random()*Math.PI);Oe.position.set(k,lt-je+.24,ne);const Le=new we(se,Et.ledGlow);Le.rotation.x=Math.PI/2,Le.position.set(k,lt-je+.24,ne),e.add(Oe,Le);const w=new ot,x=Pn(new we(Ke,Et.led),1.4,.3,2,Math.random());x.rotation.x=Math.PI/2,x.position.set(-.7,0,.6);const O=Pn(new we(Ke,Et.led),1.4,.3,2,Math.random());if(O.rotation.x=Math.PI/2,O.position.set(.7,0,.6),w.add(x,O),ce){const q=Pn(new we(it,Et.led),1.4,.3,2,Math.random());w.add(q)}w.position.set(k,lt-je+.24,ne),e.add(w),le++}),Z++});const j=jr("north",{length:6.55,startOffset:6.95}),ye=j.children[0],Te=Et.glass.clone();Te.userData.isMazeGlass=!0,Te.customProgramCacheKey=()=>"ghostchamber_pipe",Te.onBeforeCompile=k=>{k.vertexShader=k.vertexShader.replace("#include <common>",`#include <common>
      varying vec3 vWorldPos;`),k.vertexShader=k.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;`),k.fragmentShader=k.fragmentShader.replace("#include <common>",`#include <common>
      varying vec3 vWorldPos;`),k.fragmentShader=k.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
      
      float rSq = 2.54 * 2.54; 
      float dy = vWorldPos.y - 3.2;
      float dz = vWorldPos.z - (-6.95);
      float distSqX = dy * dy + dz * dz;
      
      if (distSqX < rSq) {
          discard;
      }
      `)},ye.material=Te,e.add(j);const Me=new ot,Je=new Ot({color:16711680,transparent:!0,opacity:.15,blending:ki,side:Ut,depthWrite:!1}),dt=new ei(je-.1,32),P=Pn(new we(dt,Je),1.1,.1,1.5,0);Me.add(P);const ee=new Ot({color:16720418}),J=new Ot({color:16711680,transparent:!0,opacity:.5,blending:ki,depthWrite:!1}),K=[-1.2,-.4,.4,1.2];return K.forEach(k=>{const le=Math.sqrt(Math.pow(je-.15,2)-Math.pow(k,2))*2,ne=new vn(.04,.04,le,8),ce=Pn(new we(ne,ee),1.3,.7,2,Math.random());ce.rotation.z=Math.PI/2,ce.position.y=k;const Oe=new vn(.12,.12,le,8),Le=new we(Oe,J);Le.rotation.z=Math.PI/2,Le.position.y=k,Me.add(ce,Le)}),K.forEach(k=>{const le=Math.sqrt(Math.pow(je-.15,2)-Math.pow(k,2))*2,ne=new vn(.04,.04,le,8),ce=Pn(new we(ne,ee),1.3,.7,2,Math.random());ce.position.x=k;const Oe=new vn(.12,.12,le,8),Le=new we(Oe,J);Le.position.x=k,Me.add(ce,Le)}),Me.position.set(0,lt,-13.1),e.add(Me),n}function Gy(n){const e=new ot;return n.forEach((t,i)=>{const s=i%2,r=Math.floor(i/2),o=s*24,a=r*24,l=io(t.type);l.position.set(o,6,a),e.add(l)}),e}function ys(){const n=new ot,e=new ot,t=new ot,i=3.5,s=new Nn({color:16765466,emissive:16756736,emissiveIntensity:.45,roughness:.32,metalness:.05,transparent:!1,opacity:1,depthWrite:!0}),r=s.clone(),o={blink:{value:1},power:{value:0}};r.customProgramCacheKey=()=>"showroom-pacman-painted-eyes",r.onBeforeCompile=U=>{U.uniforms.uEyeBlink=o.blink,U.uniforms.uPowerMode=o.power,U.vertexShader=U.vertexShader.replace("#include <common>",`#include <common>
      varying vec3 vLocalPos;`),U.vertexShader=U.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vLocalPos = position;`),U.fragmentShader=U.fragmentShader.replace("#include <common>",`#include <common>
      uniform float uEyeBlink;
      uniform float uPowerMode;
      varying vec3 vLocalPos;`),U.fragmentShader=U.fragmentShader.replace("#include <opaque_fragment>",`
      if (vLocalPos.z > 0.0 && vLocalPos.y > 0.35) {
        float blinkHeight = max(0.08, uEyeBlink);
        vec2 rightEye = vec2((vLocalPos.x - 1.18) / 0.42, (vLocalPos.y - 1.7) / (0.43 * blinkHeight));
        vec2 leftEye = vec2((vLocalPos.x + 1.18) / 0.42, (vLocalPos.y - 1.7) / (0.43 * blinkHeight));
        float rightEyeMask = 1.0 - smoothstep(0.76, 1.0, dot(rightEye, rightEye));
        float leftEyeMask = 1.0 - smoothstep(0.76, 1.0, dot(leftEye, leftEye));

        vec2 rightGlint = vec2((vLocalPos.x - 1.18) / 0.08, (vLocalPos.y - 1.76) / (0.08 * blinkHeight));
        vec2 leftGlint = vec2((vLocalPos.x + 1.18) / 0.08, (vLocalPos.y - 1.76) / (0.08 * blinkHeight));
        float rightGlintMask = 1.0 - smoothstep(0.55, 1.0, dot(rightGlint, rightGlint));
        float leftGlintMask = 1.0 - smoothstep(0.55, 1.0, dot(leftGlint, leftGlint));

        float eyeMask = max(rightEyeMask, leftEyeMask);
        float glintMask = max(rightGlintMask, leftGlintMask);
        float eyeGlow = 1.0 - smoothstep(1.0, 2.0, min(dot(rightEye, rightEye), dot(leftEye, leftEye)));

        outgoingLight = mix(outgoingLight, vec3(0.18, 0.15, 0.03), eyeGlow * 0.18 * uEyeBlink);
        outgoingLight = mix(outgoingLight, vec3(0.006, 0.007, 0.01), eyeMask);
        vec3 glintColor = mix(vec3(0.95, 0.82, 0.34), vec3(0.15, 0.92, 1.0), uPowerMode);
        outgoingLight = mix(outgoingLight, glintColor, glintMask * uEyeBlink);
      }
      #include <opaque_fragment>`)};const a=new Ot({color:65795,side:Ut,transparent:!1,opacity:1,depthWrite:!0}),l={mouthAngle:{value:.35},eyeBlink:{value:1},eyeFade:{value:1}},c=s.clone();c.customProgramCacheKey=()=>"pacman-death-mouth-cut",c.onBeforeCompile=U=>{U.uniforms.uDeathMouthAngle=l.mouthAngle,U.vertexShader=U.vertexShader.replace("#include <common>",`#include <common>
      varying vec3 vDeathLocalPos;`),U.vertexShader=U.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vDeathLocalPos = position;`),U.fragmentShader=U.fragmentShader.replace("#include <common>",`#include <common>
      uniform float uDeathMouthAngle;
      uniform float uDeathEyeBlink;
      uniform float uDeathEyeFade;
      varying vec3 vDeathLocalPos;`),U.uniforms.uDeathEyeBlink=l.eyeBlink,U.uniforms.uDeathEyeFade=l.eyeFade,U.fragmentShader=U.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
      float deathAngle = atan(abs(vDeathLocalPos.y), vDeathLocalPos.z);
      float deathBlinkHeight = max(0.08, uDeathEyeBlink);
      vec2 deathRightEye = vec2((vDeathLocalPos.x - 1.18) / 0.42, (vDeathLocalPos.y - 1.7) / (0.43 * deathBlinkHeight));
      vec2 deathLeftEye = vec2((vDeathLocalPos.x + 1.18) / 0.42, (vDeathLocalPos.y - 1.7) / (0.43 * deathBlinkHeight));
      float deathRightEyeMask = 1.0 - smoothstep(0.76, 1.0, dot(deathRightEye, deathRightEye));
      float deathLeftEyeMask = 1.0 - smoothstep(0.76, 1.0, dot(deathLeftEye, deathLeftEye));
      float deathEyeMask = max(deathRightEyeMask, deathLeftEyeMask) * uDeathEyeFade;
      if (deathAngle < uDeathMouthAngle && deathEyeMask < 0.08) discard;`),U.fragmentShader=U.fragmentShader.replace("#include <opaque_fragment>",`
      if (vDeathLocalPos.z > 0.0 && vDeathLocalPos.y > 0.35) {
        float deathBlinkHeight = max(0.08, uDeathEyeBlink);
        vec2 deathRightEye = vec2((vDeathLocalPos.x - 1.18) / 0.42, (vDeathLocalPos.y - 1.7) / (0.43 * deathBlinkHeight));
        vec2 deathLeftEye = vec2((vDeathLocalPos.x + 1.18) / 0.42, (vDeathLocalPos.y - 1.7) / (0.43 * deathBlinkHeight));
        float deathRightEyeMask = 1.0 - smoothstep(0.76, 1.0, dot(deathRightEye, deathRightEye));
        float deathLeftEyeMask = 1.0 - smoothstep(0.76, 1.0, dot(deathLeftEye, deathLeftEye));

        vec2 deathRightGlint = vec2((vDeathLocalPos.x - 1.18) / 0.08, (vDeathLocalPos.y - 1.76) / (0.08 * deathBlinkHeight));
        vec2 deathLeftGlint = vec2((vDeathLocalPos.x + 1.18) / 0.08, (vDeathLocalPos.y - 1.76) / (0.08 * deathBlinkHeight));
        float deathRightGlintMask = 1.0 - smoothstep(0.55, 1.0, dot(deathRightGlint, deathRightGlint));
        float deathLeftGlintMask = 1.0 - smoothstep(0.55, 1.0, dot(deathLeftGlint, deathLeftGlint));

        float deathEyeMask = max(deathRightEyeMask, deathLeftEyeMask) * uDeathEyeFade;
        float deathGlintMask = max(deathRightGlintMask, deathLeftGlintMask) * uDeathEyeFade;
        outgoingLight = mix(outgoingLight, vec3(0.006, 0.007, 0.01), deathEyeMask);
        outgoingLight = mix(outgoingLight, vec3(0.95, 0.82, 0.34), deathGlintMask);
      }
      #include <opaque_fragment>`)};const u=new Xn(i,48,24,0,Math.PI*2,0,Math.PI/2),h=new ei(i*.985,48),p=new we(new Xn(i,48,32),c);p.visible=!1;const d=a.clone(),g=new ot,v=new we(new ei(i*.99,48,0,Math.PI),d);v.rotation.x=Math.PI/2;const m=v.clone();g.add(v,m),g.visible=!1;const f=new Ot({color:328967,transparent:!0,opacity:1,depthWrite:!1}),E=new Ot({color:15913815,transparent:!0,opacity:1,depthWrite:!1}),y=new ot,_=[],A=new T(1,0,0);[-1,1].forEach(U=>{const se=new ot,fe=new we(new Xn(.32,18,18),f),xe=new we(new Xn(.075,10,10),E);xe.position.set(0,.1,.2),se.add(fe,xe),se.userData.baseDeathPosition=new T(U*1.18,1.7,2.72),se.position.copy(se.userData.baseDeathPosition),y.add(se),_.push(se)}),y.visible=!1;const R=new we(u,r),C=new we(h,a);C.rotation.x=Math.PI/2,e.add(R,C),t.rotation.x=Math.PI;const L=new we(u,s),S=new we(h,a);S.rotation.x=-Math.PI/2,t.add(L,S);const M=new we(new Xn(i*.96,40,14,Math.PI,Math.PI),a);n.add(M,e,t,p,g,y);const D=.45,B=1.25,z=[s,r,a,c,d,f,E],G={active:!1,elapsed:0,duration:1.45,baseScale:new T(1,1,1)};let V=!1;function X(U){z.forEach(se=>{se.opacity=U})}function $(){n.visible=!0,X(1),e.visible=!0,t.visible=!0,M.visible=!0,p.visible=!1,g.visible=!1,y.visible=!1,y.rotation.x=0,l.mouthAngle.value=.35,l.eyeBlink.value=1,l.eyeFade.value=0,v.rotation.x=Math.PI/2,m.rotation.x=Math.PI/2,_.forEach(U=>{U.position.copy(U.userData.baseDeathPosition),U.rotation.set(0,0,0),U.scale.y=1}),G.active=!1,G.elapsed=0}return n.setPowerMode=U=>{V=!!U,o.power.value=V?1:0,V||(s.emissiveIntensity=D,r.emissiveIntensity=D)},n.playDeathAnimation=(U=1.45)=>{G.baseScale.copy(n.scale),$(),G.active=!0,G.duration=U,e.visible=!1,t.visible=!1,M.visible=!1,p.visible=!0,g.visible=!0,y.visible=!0,l.eyeFade.value=0},n.resetDeathAnimation=$,n.isDeathAnimationActive=()=>G.active,n.userData={type:"pacman",update:(U,se=1/60)=>{if(G.active){G.elapsed=Math.min(G.duration,G.elapsed+se);const Ie=G.duration>0?G.elapsed/G.duration:1,ke=En.smoothstep(Ie,.82,1),it=En.smoothstep(Ie,0,1);l.mouthAngle.value=En.lerp(.35,Math.PI,it),l.eyeBlink.value=1,l.eyeFade.value=0;const Ke=l.mouthAngle.value;v.rotation.x=Math.PI/2-Ke,m.rotation.x=Math.PI/2+Ke,y.rotation.x=0;const Z=1-En.smoothstep(Ie,.72,.94);f.opacity=Z,E.opacity=Z,_.forEach(j=>{j.position.copy(j.userData.baseDeathPosition).applyAxisAngle(A,-Ke),j.position.add(j.position.clone().normalize().multiplyScalar(.08)),j.rotation.set(0,0,0),j.scale.y=1}),o.blink.value=1,n.scale.copy(G.baseScale),X(1-ke),Ie>=1&&(G.active=!1,n.visible=!1);return}const fe=Math.abs(Math.sin(U*6.5))*.48;e.rotation.x=-fe,t.rotation.x=Math.PI+fe,X(1);const xe=Math.sin(U*2.1)>.985?.18:1;if(o.blink.value=xe,V){const Ie=.82+Math.sin(U*8)*.18,ke=B*Ie;s.emissiveIntensity=ke,r.emissiveIntensity=ke}}},n}function zi(n=16711748){const e=new ot,t=2.1,i=4.5,s=64,r=32,o=new Xn(t,s,16,0,Math.PI*2,0,Math.PI/2);o.translate(0,i,0);const a=new vn(t,t,i,s,r,!0);a.translate(0,i/2,0);const l=zd([o,a]);l.attributes.position.setUsage(zp);const c=l.attributes.position,u=new Float32Array(c.count);for(let _=0;_<c.count;_++)u[_]=c.getY(_);const h={uniforms:{uColor:{value:new He(n)},uHeight:{value:i},uEyeRight:{value:new T(.8,i+.65,Math.sqrt(t*t-.8*.8-.65*.65))},uEyeLeft:{value:new T(-.8,i+.65,Math.sqrt(t*t-.8*.8-.65*.65))},uIsVulnerable:{value:0},uVulnerableColor:{value:new He(8959)},uVulnerableEyeColor:{value:new He(16758920)},uTime:{value:0}},vertexShader:`
      varying vec3 vNormal;
      varying vec3 vLocalPos;
      void main() {
        // Normal in view space for Fresnel calculation
        vNormal = normalize(normalMatrix * normal);
        vLocalPos = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      uniform float uHeight;
      uniform vec3 uEyeRight;
      uniform vec3 uEyeLeft;
      uniform float uIsVulnerable;
      uniform vec3 uVulnerableColor;
      uniform vec3 uVulnerableEyeColor;
      uniform float uTime;
      
      varying vec3 vNormal;
      varying vec3 vLocalPos;
      
      void main() {
        // Fresnel Effect: glow more at grazing angles (edges)
        float fresnel = pow(1.0 - abs(vNormal.z), 2.2);
        
        // Vertical Gradient: glow more at the bottom skirt
        float bottomGlow = smoothstep(uHeight, 0.0, vLocalPos.y);
        
        // Restored to the beloved original 0.1 base opacity for the pure glow
        float baseOpacity = 0.1;           
        float rimOpacity = fresnel * 0.8;  
        float skirtOpacity = bottomGlow * 0.25; 
        
        float finalAlpha = baseOpacity + rimOpacity + skirtOpacity;
        
        // --- Vulnerability State Logic ---
        bool isVulnerable = uIsVulnerable > 0.5;
        bool isFlashing = uIsVulnerable > 1.5;
        
        // Flashing alternates cleanly between 0 and 1 every ~0.2 seconds
        float flashCycle = isFlashing ? step(0.0, sin(uTime * 15.0)) : 0.0;
        
        // Classic flashing colors: Blue body/Peach eyes -> White body/Red eyes
        vec3 activeVulnerableColor = mix(uVulnerableColor, vec3(0.9, 0.9, 1.0), flashCycle);
        vec3 activeVulnerableEyeColor = mix(uVulnerableEyeColor, vec3(1.0, 0.1, 0.1), flashCycle);
        
        // Base color shift: Transition to active vulnerable color if scared
        vec3 activeShellColor = mix(uColor, activeVulnerableColor, isVulnerable ? 1.0 : 0.0);
        vec3 finalColor = mix(activeShellColor, vec3(1.0), fresnel * 0.35);
        
        // --- Shader Eyes & Mouth (Seamlessly painted onto the curvature) ---
        // Only draw on the front half of the ghost
        if (vLocalPos.z > 0.0) {
           float dR = distance(vLocalPos, uEyeRight);
           float dL = distance(vLocalPos, uEyeLeft);
           float dEye = min(dR, dL);
           
           float eyeCoreRadius = 0.55; 
           float eyeHaloRadius = 0.8; 
           
           float eyeCore = 1.0 - smoothstep(0.28, eyeCoreRadius, dEye);
           float eyeHalo = 1.0 - smoothstep(0.28, eyeHaloRadius, dEye);
           
           float eyeIntensity = gl_FrontFacing ? 1.0 : 0.2;
           
           // Transition eye color when vulnerable
           vec3 currentEyeColor = mix(vec3(1.0), activeVulnerableEyeColor, isVulnerable ? 1.0 : 0.0);
           
           // Paint the eyes over the shell color
           finalColor = mix(finalColor, currentEyeColor, eyeCore * eyeIntensity);
           finalAlpha += ((eyeHalo * 0.15) + (eyeCore * 0.85)) * eyeIntensity; 
           
           // --- Vulnerable Animated Squiggly Mouth ---
           if (isVulnerable) {
               // Using cos() makes it perfectly symmetrical around x=0!
               // Adding uTime animates the wave, making it travel horizontally.
               float mouthY = 3.5 + cos(vLocalPos.x * 7.0 + uTime * 8.0) * 0.15;
               float dMouth = abs(vLocalPos.y - mouthY);
               
               // Constrain the mouth width
               if (abs(vLocalPos.x) < 1.4 && vLocalPos.y > 2.5 && vLocalPos.y < 4.5) {
                   // Soft fade at the edges of the mouth
                   float mouthEdgeFade = smoothstep(1.4, 1.0, abs(vLocalPos.x));
                   
                   float mouthCore = 1.0 - smoothstep(0.04, 0.08, dMouth);
                   float mouthHalo = 1.0 - smoothstep(0.08, 0.25, dMouth);
                   
                   mouthCore *= mouthEdgeFade;
                   mouthHalo *= mouthEdgeFade;
                   
                   finalColor = mix(finalColor, activeVulnerableEyeColor, mouthCore * eyeIntensity);
                   finalAlpha += ((mouthHalo * 0.2) + (mouthCore * 0.8)) * eyeIntensity;
               }
           }
        }
        
        gl_FragColor = vec4(finalColor, finalAlpha);
      }
    `},p=new Qn({uniforms:h.uniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,transparent:!0,blending:ki,depthWrite:!1,side:Ut}),d=new ot;e.add(d);const g=new we(l,p);g.renderOrder=2,d.add(g);const v=new Ot({color:0,transparent:!0,opacity:.85,blending:rs,depthWrite:!1}),m=new we(l,v);m.scale.set(.98,.98,.98),m.renderOrder=1,d.add(m);const f=6,E=.35,y=4.2;return e.userData={type:"ghost",update:_=>{h.uniforms.uTime.value=_,d.position.y=Math.sin(_*2.2)*.2;for(let A=0;A<c.count;A++){const R=u[A];if(R<2.5){const C=c.getX(A),L=c.getZ(A),S=Math.atan2(L,C),M=Math.sin(S*f+_*y),D=Math.pow((2.5-R)/2.5,1.1);c.setY(A,R+M*E*D)}}l.computeVertexNormals(),c.needsUpdate=!0}},e.setVulnerable=_=>{_==="flashing"?h.uniforms.uIsVulnerable.value=2:_?h.uniforms.uIsVulnerable.value=1:h.uniforms.uIsVulnerable.value=0},e}function so(){const n=new ot,e=16755200,t=new Nn({color:e,emissive:e,emissiveIntensity:6}),i=new Ot({color:e,transparent:!0,opacity:.4,side:Ut}),s=new we(new Bc(1,0),t);n.add(s);const r=new we(new os(1.8,.04,8,48),i);return r.rotation.x=Math.PI/2,n.add(r),n.userData={type:"pellet",update:o=>{s.rotation.y=o*2,s.rotation.z=o*1.5,n.position.y+=Math.sin(o*3)*.006,r.rotation.z=-o*3,r.scale.setScalar(1+Math.sin(o*4)*.1)}},n}function Xd(){const n=new ot,e=16755200,t=new Nn({color:e,emissive:e,emissiveIntensity:1.5,roughness:.2,metalness:.8}),i=new Ot({color:e,transparent:!0,opacity:.3,blending:ki,depthWrite:!1}),s=new Xn(.35,16,16),r=new we(s,t),o=new we(s,i);return o.scale.set(1.4,1.4,1.4),n.add(r),n.add(o),n.userData={type:"standard_pellet",update:a=>{n.position.y+=Math.sin(a*4)*.005}},n}const Hy=[{type:"teleport",position:[-18,0,18],rotation:6.283185307179586,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"corner",position:[36,0,0],rotation:9.42477796076938,hasPowerPellet:!0,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"ghostchamber",position:[0,0,-18],rotation:3.141592653589793,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"crossroad",position:[0,0,0],rotation:3.141592653589793,hasPowerPellet:!1,hasPacmanSpawn:!0,pacmanSpawnRotation:1.5707963267948966},{type:"teleport",position:[-18,0,0],rotation:6.283185307179586,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"corner",position:[36,0,18],rotation:7.853981633974483,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"crossroad",position:[0,0,18],rotation:1.5707963267948966,hasPowerPellet:!0,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"corner",position:[0,0,36],rotation:1.5707963267948966,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"teleport",position:[-18,0,36],rotation:6.283185307179586,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"tjunction",position:[18,0,0],rotation:0,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"corner",position:[18,0,-18],rotation:4.71238898038469,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"straight",position:[36,0,-18],rotation:4.71238898038469,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"corner",position:[54,0,-18],rotation:9.42477796076938,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"straight",position:[54,0,0],rotation:9.42477796076938,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"straight",position:[54,0,18],rotation:9.42477796076938,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"corner",position:[54,0,36],rotation:14.137166941154069,hasPowerPellet:!0,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"straight",position:[36,0,36],rotation:14.137166941154069,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"corner",position:[18,0,36],rotation:18.84955592153876,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"tjunction",position:[18,0,18],rotation:21.991148575128555,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0}],Gi={north:{x:0,z:-1},east:{x:1,z:0},south:{x:0,z:1},west:{x:-1,z:0}},Pt={north:"south",east:"west",south:"north",west:"east"},Vy={north:"west",east:"north",south:"east",west:"south"},Wy={north:"east",east:"south",south:"west",west:"north"},Dh={north:Math.PI,east:Math.PI/2,south:0,west:-Math.PI/2};function Ar(n,e){return`${Math.round(n)},${Math.round(e)}`}function Ws(n){const e=Gi[n];return new T(e.x,0,e.z)}function Gt(n,e){return n.map(t=>{const i=Gi[t],s=i.x*Math.cos(e)+i.z*Math.sin(e),r=-i.x*Math.sin(e)+i.z*Math.cos(e);return Object.entries(Gi).find(([,o])=>o.x===Math.round(s)&&o.z===Math.round(r))?.[0]}).filter(Boolean)}function Yd(n){const e=new Map;return n.forEach(t=>{const[i,s,r]=t.position,o=dr[t.type]||[],a=Gt(o,t.rotation);e.set(Ar(i,r),{key:Ar(i,r),type:t.type,position:new T(i,s,r),rotation:t.rotation,connectors:a,exits:new Set,hasPowerPellet:t.hasPowerPellet||!1,hasPacmanSpawn:t.hasPacmanSpawn||!1,pacmanSpawnRotation:t.pacmanSpawnRotation||0})}),e.forEach(t=>{t.connectors.forEach(i=>{const s=Gi[i],r=Ar(t.position.x+s.x*We,t.position.z+s.z*We);e.get(r)?.connectors.includes(Pt[i])&&t.exits.add(i)})}),{tiles:e,hasTileAt(t,i){return e.has(Ar(t,i))},getTileAt(t,i){return e.get(Ar(t,i))||null},getNeighbor(t,i){const s=Gi[i];return this.getTileAt(t.position.x+s.x*We,t.position.z+s.z*We)},canMove(t,i){return!!t?.exits.has(i)}}}const Nr=2,qy=.001,vl=7.5,Xy=9.25,Rr=2.55*1.4,Yy=260,Zo=.05;function zr(n){return new T(n.position.x,Nr,n.position.z)}function Cr(n,e){return zr(n).addScaledVector(Ws(e),We/2)}function Zy(n,e){return Math.atan2(Math.sin(e-n),Math.cos(e-n))}function Zd(n,e){const t=n.x*Math.cos(e)+n.z*Math.sin(e),i=-n.x*Math.sin(e)+n.z*Math.cos(e);return new T(t,n.y,i)}function Ky(){const n=[new T(0,Nr,-We/2),new T(0,Nr,-Rr)];for(let e=1;e<=8;e+=1){const t=e/8,i=Math.PI-t*(Math.PI/2);n.push(new T(Rr+Rr*Math.cos(i),Nr,-Rr+Rr*Math.sin(i)))}return n.push(new T(We/2,Nr,0)),n}function Kd(n){return Ky().map(e=>Zd(e,n.rotation).add(n.position))}function gc(n,e){const t=Gt(["north","east"],n.rotation),i=Kd(n);return t[0]===e?i[1].clone():t[1]===e?i[i.length-2].clone():zr(n)}function sn(n,e=null){return n.type==="ghostchamber"?`${n.key}:${e||"center_front"}`:n.type==="teleport"&&e==="event_horizon"?`${n.key}:event_horizon`:n.type==="corner"?`${n.key}:${e}`:`${n.key}:center`}function $y(n,e){return n.type==="corner"?sn(n,e):n.type==="ghostchamber"?sn(n,"center_front"):sn(n)}function Jy(n,e,t){const i=Gt(["north","east"],n.rotation),r=Kd(n).slice(1,-1);return i[0]===e&&i[1]===t?r:i[1]===e&&i[0]===t?r.reverse():[gc(n,e),gc(n,t)]}function Lh(n){const e=[0];let t=0;for(let i=1;i<n.length;i+=1)t+=n[i-1].distanceTo(n[i]),e.push(t);return{points:n,cumulativeLengths:e,totalLength:t,progress:0}}function ea(n){if(n.progress<=0)return n.points[0].clone();if(n.progress>=n.totalLength)return n.points[n.points.length-1].clone();const e=n.cumulativeLengths.findIndex(o=>o>=n.progress),t=Math.max(1,e),i=n.cumulativeLengths[t-1],s=n.cumulativeLengths[t],r=(n.progress-i)/(s-i);return n.points[t-1].clone().lerp(n.points[t],r)}function Pr(n,e){return ea({...n,progress:e})}function Ai(n,e,t,i,s,r={}){const o=n.tile?.type!=="ghostchamber"&&e.tile?.type==="ghostchamber";return{from:n,to:e,inputDirection:t,endDirection:i,continueDirection:r.continueDirection??null,reverseDirection:r.reverseDirection??Pt[i],reverseContinueDirection:r.reverseContinueDirection??null,allowedEntities:r.allowedEntities??(o?[]:["pacman","ghost"]),points:s}}function jy(n){const e=new Map;function t(s,r=null){const o=sn(s,r);if(e.has(o))return e.get(o);let a,l="center";if(s.type==="corner")a=gc(s,r),l="corner";else if(s.type==="ghostchamber"){const u={left_back:{x:-6,z:8.5},center_back:{x:0,z:8.5},right_back:{x:6,z:8.5},left_front:{x:-6,z:0},center_front:{x:0,z:0},right_front:{x:6,z:0}}[r],h=Zd(new T(u.x,0,u.z),s.rotation);a=zr(s).add(h),l="ghostchamber"}else if(s.type==="teleport")if(r==="event_horizon"){const u=Gt(["west"],s.rotation)[0];a=Cr(s,u),l="teleport_event_horizon"}else a=zr(s),l="center";else a=zr(s);const c={id:o,tile:s,connector:r,type:l,position:a,edges:[]};return e.set(o,c),c}n.tiles.forEach(s=>{s.type==="corner"?s.connectors.forEach(r=>t(s,r)):s.type==="ghostchamber"?["left_back","center_back","right_back","left_front","center_front","right_front"].forEach(r=>t(s,r)):s.type==="teleport"?(t(s),t(s,"event_horizon")):t(s)});function i(s,r){return e.get($y(s,r))}return n.tiles.forEach(s=>{if(s.type==="ghostchamber"){const r=Gt(["north"],s.rotation)[0],o=Gt(["south"],s.rotation)[0],a=Gt(["east"],s.rotation)[0],l=Gt(["west"],s.rotation)[0],c=(h,p,d)=>{const g=e.get(sn(s,h)),v=e.get(sn(s,p)),m=[g.position,v.position];g.edges.push(Ai(g,v,d,d,m,{reverseDirection:Pt[d],reverseContinueDirection:Pt[d]}))};c("left_back","center_back",a),c("center_back","left_back",l),c("center_back","right_back",a),c("right_back","center_back",l),c("left_front","center_front",a),c("center_front","left_front",l),c("center_front","right_front",a),c("right_front","center_front",l),c("left_back","left_front",r),c("left_front","left_back",o),c("center_back","center_front",r),c("center_front","center_back",o),c("right_back","right_front",r),c("right_front","right_back",o);const u=n.getNeighbor(s,r);if(u&&s.exits.has(r)){const h=e.get(sn(s,"center_front")),p=i(u,Pt[r]),d=[h.position,Cr(s,r),p.position];h.edges.push(Ai(h,p,r,r,d,{reverseDirection:Pt[r],reverseContinueDirection:Pt[r]}))}return}if(s.type==="teleport"){const r=e.get(sn(s)),o=Gt(["west"],s.rotation)[0],a=Gt(["east"],s.rotation)[0],l=e.get(sn(s,"event_horizon"));r.edges.push(Ai(r,l,o,o,[r.position,l.position],{reverseDirection:a,reverseContinueDirection:a})),l.edges.push(Ai(l,r,a,a,[l.position,r.position],{reverseDirection:o,reverseContinueDirection:o})),s.exits.forEach(c=>{const u=n.getNeighbor(s,c),h=i(u,Pt[c]),p=[r.position,Cr(s,c),h.position];r.edges.push(Ai(r,h,c,c,p,{reverseDirection:Pt[c],reverseContinueDirection:Pt[c]}))});return}if(s.type!=="corner"){const r=e.get(sn(s));s.exits.forEach(o=>{const a=n.getNeighbor(s,o),l=i(a,Pt[o]),c=[r.position,Cr(s,o),l.position];r.edges.push(Ai(r,l,o,o,c,{reverseDirection:Pt[o],reverseContinueDirection:Pt[o]}))});return}s.connectors.forEach(r=>{const o=e.get(sn(s,r)),a=n.getNeighbor(s,r);if(a&&s.exits.has(r)){const l=i(a,Pt[r]),c=[o.position,Cr(s,r),l.position];o.edges.push(Ai(o,l,r,r,c,{reverseDirection:Pt[r],reverseContinueDirection:null}))}s.connectors.filter(l=>l!==r).forEach(l=>{if(!n.getNeighbor(s,l)||!s.exits.has(l))return;const u=e.get(sn(s,l)),h=Jy(s,r,l);o.edges.push(Ai(o,u,l,l,h,{continueDirection:l,reverseDirection:r,reverseContinueDirection:r}))})})}),e}class $d{constructor(e,t,i={}){this.model=e,this.graph=t,this.entityType=i.entityType??"pacman",this.navigationNodes=jy(t),this.speed=i.speed??13,this.currentNode=null,this.currentDirection=null,this.desiredDirection=null,this.desiredIntent=null,this.facingDirection="east",this.bodyFacingDirection="east",this.bodyTurnResponsiveness=vl,this.boostedBodyTurnEdgesRemaining=0,this.activeEdge=null,this.route=null,this.forceContinueDirection=null,this.isMoving=!1,this.cameraTrail=[],this.startedIntentEvents=[]}reset(e,t=null,i=null){let s=i;!s&&e.type==="corner"&&(s=e.connectors[0]),this.currentNode=this.navigationNodes.get(sn(e,s)),this.currentDirection=null,this.desiredDirection=t,this.desiredIntent=null,this.facingDirection=t||"east",this.bodyFacingDirection=this.facingDirection,this.bodyTurnResponsiveness=vl,this.boostedBodyTurnEdgesRemaining=0,this.activeEdge=null,this.route=null,this.forceContinueDirection=null,this.isMoving=!1,this.cameraTrail=[this.currentNode.position.clone()],this.startedIntentEvents=[],this.model.position.copy(this.currentNode.position),this.model.rotation.set(0,Dh[this.bodyFacingDirection],0)}setDesiredDirection(e){if(Gi[e]){if(this.canReverseImmediately(e)){this.reverseActiveEdge();return}if(!this.isMoving){const t=this.findEdge(e);if(!t)return;this.desiredDirection=e,this.startEdge(t);return}this.desiredDirection=e}}setDesiredIntent(e){const t=this.resolveIntentDirection(e);if(!t)return{accepted:!1,direction:null,reverseIntent:!1};const i=e==="reverse";if(this.canReverseImmediately(t))return this.reverseActiveEdge(),{accepted:!0,direction:t,reverseIntent:i,started:!0};if(!this.isMoving){const s=this.findEdge(t);return s?(this.desiredIntent=null,this.desiredDirection=null,this.startEdge(s,null,e),{accepted:!0,direction:t,reverseIntent:i,started:!0}):{accepted:!1,direction:t,reverseIntent:i}}return this.desiredIntent=e,this.desiredDirection=null,{accepted:!0,direction:t,reverseIntent:i,queued:!0}}update(e,t){if(!this.currentNode)return;this.model.userData.update&&this.model.userData.update(t);let i=this.speed*e;for(;i>qy&&this.route;){const s=this.route,r=s.progress,o=this.route.totalLength-this.route.progress;i>=o?(this.route.progress=this.route.totalLength,this.recordCameraTrail(s,r,s.totalLength),this.model.position.copy(ea(this.route)),i-=o,this.finishActiveEdge()):(this.route.progress+=i,this.recordCameraTrail(s,r,s.progress),this.model.position.copy(ea(this.route)),i=0)}this.isMoving=!!this.route,this.updateFacing(e)}findEdge(e){return this.getAllowedEdges(this.currentNode).find(t=>t.inputDirection===e)||null}getAllowedEdges(e=this.currentNode){return(e?.edges||[]).filter(t=>this.canUseEdge(t))}canUseEdge(e){return!e.allowedEntities||e.allowedEntities.includes(this.entityType)}startEdge(e,t=null,i=null){const s=this.currentDirection&&e.inputDirection===Pt[this.currentDirection];if(this.activeEdge=e,this.route=Lh(e.points),this.forceContinueDirection=t??e.continueDirection,this.currentDirection=e.endDirection,this.facingDirection=e.endDirection,this.bodyFacingDirection=e.endDirection,this.isMoving=!0,s||i==="reverse"){this.rebuildCameraTrailBehind();const o=e.from.type==="corner"&&e.to.type==="corner"&&e.from.tile===e.to.tile?"reverse_instant":"reverse";this.startedIntentEvents.push(o)}else i&&this.startedIntentEvents.push(i)}finishActiveEdge(){const e=this.activeEdge,t=this.forceContinueDirection;if(this.currentNode=e.to,this.activeEdge=null,this.route=null,this.forceContinueDirection=null,this.currentNode.type==="teleport_event_horizon"){const o=Array.from(this.graph.tiles.values()).filter(a=>a.type==="teleport"&&a!==this.currentNode.tile);if(o.length>0){const a=o[Math.floor(Math.random()*o.length)],l=this.navigationNodes.get(sn(a,"event_horizon")),c=Gt(["east"],a.rotation)[0];this.currentNode=l,this.currentDirection=c,this.facingDirection=c,this.bodyFacingDirection=c,this.model.position.copy(l.position),this.cameraTrail=[l.position.clone()],this.startedIntentEvents.push("reverse_instant")}else{const a=Gt(["east"],this.currentNode.tile.rotation)[0];this.forceContinueDirection=a}}this.boostedBodyTurnEdgesRemaining>0&&(this.boostedBodyTurnEdgesRemaining-=1,this.boostedBodyTurnEdgesRemaining===0&&(this.bodyTurnResponsiveness=vl));const i=t?this.findEdge(t):null;if(i&&this.currentNode.type==="corner"){this.startEdge(i);return}const s=this.desiredIntent,r=this.findDesiredEdge();if(r){this.desiredDirection=null,this.desiredIntent=null,this.startEdge(r,null,s);return}if(this.desiredDirection=null,this.desiredIntent=null,i){this.startEdge(i);return}if(this.currentNode.type!=="corner"){const o=this.currentDirection?this.findEdge(this.currentDirection):null;if(o){this.startEdge(o);return}}this.currentDirection=null,this.isMoving=!1}canReverseImmediately(e){return this.route&&this.activeEdge&&this.currentDirection&&e===Pt[this.currentDirection]&&this.route.progress>.05&&this.route.totalLength-this.route.progress>.05}reverseActiveEdge(){const e=this.activeEdge,t=this.route,i=e.from.type==="corner"&&e.to.type==="corner"&&e.from.tile===e.to.tile,s=e.points.slice().reverse().map(o=>o.clone()),r={from:e.to,to:e.from,inputDirection:e.reverseDirection,endDirection:e.reverseDirection,continueDirection:e.reverseContinueDirection,reverseDirection:e.endDirection,reverseContinueDirection:e.endDirection,points:s};this.activeEdge=r,this.route=Lh(s),this.route.progress=t.totalLength-t.progress,this.forceContinueDirection=e.reverseContinueDirection,this.currentDirection=r.endDirection,this.facingDirection=r.endDirection,this.bodyFacingDirection=i?Pt[e.endDirection]:r.endDirection,i&&(this.bodyTurnResponsiveness=Xy,this.boostedBodyTurnEdgesRemaining=2),this.desiredDirection=null,this.desiredIntent=null,this.model.position.copy(ea(this.route)),this.isMoving=!0,this.rebuildCameraTrailBehind(),this.startedIntentEvents.push(i?"reverse_instant":"reverse")}consumeStartedIntent(){return this.startedIntentEvents.shift()||null}findDesiredEdge(){if(this.desiredIntent){const e=this.resolveIntentDirection(this.desiredIntent);return e?this.findEdge(e):null}return this.desiredDirection?this.findEdge(this.desiredDirection):null}resolveIntentDirection(e){const t=this.currentDirection||this.facingDirection;return e==="forward"?t:e==="right"?Wy[t]:e==="reverse"?Pt[t]:e==="left"?Vy[t]:null}updateFacing(e){if(!this.bodyFacingDirection)return;const t=Dh[this.bodyFacingDirection],i=Zy(this.model.rotation.y,t),s=1-Math.exp(-this.bodyTurnResponsiveness*e);this.model.rotation.y+=i*s}getFacingDirection(){return this.facingDirection||"east"}getFollowDirection(){return Ws(this.getFacingDirection())}getCameraTarget(){return this.model.position.clone()}getRouteCameraPoint(e=0,t=!0){if(!this.route)return this.getCameraTarget().addScaledVector(Ws(this.getFacingDirection()),e);const i=this.route.progress+e;if(!t&&(i<0||i>this.route.totalLength))return null;const s=En.clamp(i,0,this.route.totalLength);return Pr(this.route,s)}recordCameraTrail(e,t,i){if(!e||t===i)return;const s=i>t?1:-1;let r=t+s*Zo;for(;s>0&&r<i||s<0&&r>i;)this.appendCameraTrailPoint(Pr(e,r)),r+=s*Zo;this.appendCameraTrailPoint(Pr(e,i))}rebuildCameraTrailBehind(){if(this.cameraTrail=[],this.activeEdge){const t=this.activeEdge.from.connector&&this.activeEdge.from.connector!==this.activeEdge.inputDirection?this.activeEdge.from.connector:Pt[this.activeEdge.inputDirection];if(Gi[t]){const i=this.activeEdge.points[0].clone().addScaledVector(Ws(t),20);this.cameraTrail.push(i)}}if(this.route){for(let t=0;t<=this.route.progress;t+=Zo)this.cameraTrail.push(Pr(this.route,t));const e=Pr(this.route,this.route.progress);(this.cameraTrail.length===0||this.cameraTrail[this.cameraTrail.length-1].distanceTo(e)>.001)&&this.cameraTrail.push(e)}else this.currentNode?this.cameraTrail.push(this.currentNode.position.clone()):this.cameraTrail.push(this.model.position.clone())}appendCameraTrailPoint(e){if(this.cameraTrail.length>=2){const i=this.cameraTrail[this.cameraTrail.length-1],s=this.cameraTrail[this.cameraTrail.length-2];e.distanceTo(s)<i.distanceTo(s)&&this.cameraTrail.pop()}const t=this.cameraTrail[this.cameraTrail.length-1];for((!t||t.distanceTo(e)>=Zo*.5)&&this.cameraTrail.push(e.clone());this.cameraTrail.length>Yy;)this.cameraTrail.shift()}getCameraTrailPoint(e,t){let i=e,s=this.getCameraTarget();for(let o=this.cameraTrail.length-1;o>=0;o-=1){const a=this.cameraTrail[o],l=s.distanceTo(a);if(l!==0){if(l>=i){const c=i/l;return s.clone().lerp(a,c)}i-=l,s=a}}const r=t?.clone?.()||Ws(this.getFacingDirection());return s.clone().addScaledVector(r.normalize(),-i)}}const ns={STANDARD:0,POWER:1};class Qy{constructor(e){this.scene=e,this.coreMesh=null,this.glowMesh=null,this.pellets=[],this.powerPelletGroup=new ot,this.scene.add(this.powerPelletGroup),this.dummy=new Nt}buildFromMap(e){for(this.coreMesh&&(this.scene.remove(this.coreMesh),this.scene.remove(this.glowMesh),this.coreMesh.dispose(),this.glowMesh.dispose(),this.pellets=[]);this.powerPelletGroup.children.length>0;)this.powerPelletGroup.remove(this.powerPelletGroup.children[0]);this.scene.children.includes(this.powerPelletGroup)||this.scene.add(this.powerPelletGroup);const t=[];e.tiles.forEach(l=>{const c=l.position,u=l.rotation,h=l.hasPowerPellet,p=v=>{const m=Gt([v],u)[0];return e.getNeighbor(l,m)?.type!=="ghostchamber"},d=(v,m,f)=>{p(v)&&t.push({pos:c.clone().add(g(m,f)),power:!1})},g=(v,m)=>{const f=v*Math.cos(u)+m*Math.sin(u),E=-v*Math.sin(u)+m*Math.cos(u);return new T(f,2,E)};if(l.type==="straight")d("north",0,-6),t.push({pos:c.clone().add(g(0,0)),power:h}),d("south",0,6);else if(l.type==="corner"){const v=3.57*(1-Math.SQRT1_2);d("north",0,-6),t.push({pos:c.clone().add(g(v,-v)),power:h}),d("east",6,0)}else l.type==="tjunction"?(t.push({pos:c.clone().add(g(0,0)),power:h}),d("north",0,-6),d("west",-6,0),d("east",6,0)):l.type==="crossroad"&&(t.push({pos:c.clone().add(g(0,0)),power:h}),d("north",0,-6),d("south",0,6),d("west",-6,0),d("east",6,0))}),this.pellets=[];const i=[];t.forEach(l=>{if(l.power){const c=so();c.position.copy(l.pos),c.position.y=2.5,c.scale.setScalar(.65),this.powerPelletGroup.add(c),this.pellets.push({position:c.position,type:ns.POWER,active:!0,mesh:c})}else i.push(l.pos)}),i.forEach((l,c)=>{this.pellets.push({position:l,type:ns.STANDARD,active:!0,meshIndex:c})});const s=16755200,r=new Xn(.35,16,16),o=new Nn({color:s,emissive:s,emissiveIntensity:1.5,roughness:.2,metalness:.8}),a=new Ot({color:s,transparent:!0,opacity:.3,blending:ki,depthWrite:!1});this.coreMesh=new ku(r,o,i.length),this.glowMesh=new ku(r,a,i.length),this.coreMesh.frustumCulled=!1,this.glowMesh.frustumCulled=!1,i.forEach((l,c)=>{this.dummy.position.copy(l),this.dummy.scale.set(1,1,1),this.dummy.updateMatrix(),this.coreMesh.setMatrixAt(c,this.dummy.matrix),this.dummy.scale.set(1.4,1.4,1.4),this.dummy.updateMatrix(),this.glowMesh.setMatrixAt(c,this.dummy.matrix)}),this.coreMesh.instanceMatrix.needsUpdate=!0,this.glowMesh.instanceMatrix.needsUpdate=!0,this.scene.add(this.coreMesh),this.scene.add(this.glowMesh)}checkCollisions(e){const t=[];for(let s=0;s<this.pellets.length;s++){const r=this.pellets[s];if(!r.active)continue;e.distanceToSquared(r.position)<1.8*1.8&&(r.active=!1,t.push(r),r.type===ns.POWER?r.mesh.visible=!1:(this.dummy.position.copy(r.position),this.dummy.scale.set(0,0,0),this.dummy.updateMatrix(),this.coreMesh.setMatrixAt(r.meshIndex,this.dummy.matrix),this.glowMesh.setMatrixAt(r.meshIndex,this.dummy.matrix),this.coreMesh.instanceMatrix.needsUpdate=!0,this.glowMesh.instanceMatrix.needsUpdate=!0))}return t}reset(){this.coreMesh&&(this.pellets.forEach(e=>{e.active=!0,e.type===ns.POWER?e.mesh.visible=!0:(this.dummy.position.copy(e.position),this.dummy.scale.set(1,1,1),this.dummy.updateMatrix(),this.coreMesh.setMatrixAt(e.meshIndex,this.dummy.matrix),this.dummy.scale.set(1.4,1.4,1.4),this.dummy.updateMatrix(),this.glowMesh.setMatrixAt(e.meshIndex,this.dummy.matrix))}),this.coreMesh.instanceMatrix.needsUpdate=!0,this.glowMesh.instanceMatrix.needsUpdate=!0)}getEatenCount(){return this.pellets.filter(e=>!e.active).length}getTotalCount(){return this.pellets.length}update(e){this.coreMesh&&(this.pellets.forEach(t=>{t.active&&(t.type===ns.POWER?t.mesh.userData.update&&t.mesh.userData.update(e):(this.dummy.position.copy(t.position),this.dummy.position.y+=Math.sin(e*4+t.position.x)*.005,this.dummy.scale.set(1,1,1),this.dummy.updateMatrix(),this.coreMesh.setMatrixAt(t.meshIndex,this.dummy.matrix),this.dummy.scale.set(1.4,1.4,1.4),this.dummy.updateMatrix(),this.glowMesh.setMatrixAt(t.meshIndex,this.dummy.matrix)))}),this.coreMesh.instanceMatrix.needsUpdate=!0,this.glowMesh.instanceMatrix.needsUpdate=!0)}}const eM=4.5,Ih="direct",tM=4,Uh=2,nM=8,Nh=8;class iM{constructor(e={}){this.enabled=!1,this.profile=e.profile??Ih,this.lastDecisionNodeId=null,this.decisionLeadDistance=e.decisionLeadDistance??eM,this.randomSeed=e.randomSeed??this.createDefaultSeed(this.profile),this.pendingFrightenedReverse=!1}setProfile(e=Ih){this.profile=e,this.lastDecisionNodeId=null}setEnabled(e){this.enabled=e,this.lastDecisionNodeId=null}reset(){this.lastDecisionNodeId=null,this.pendingFrightenedReverse=!1}createDefaultSeed(e){return Array.from(e).reduce((t,i)=>t*31+i.charCodeAt(0)>>>0,2654435769)}forceReverse(e){const t=e?.currentDirection?Pt[e.currentDirection]:null;t&&(e.setDesiredDirection(t),this.lastDecisionNodeId=null)}queueFrightenedReverse(){this.pendingFrightenedReverse=!0,this.lastDecisionNodeId=null}update({ghostController:e,pacman:t,ghost:i,canGhostBeEaten:s,isGhostRespawning:r,ghosts:o=[]}){if(!this.enabled||!e||!t||r)return;const a=this.getDecisionContext(e);if(!a?.node||this.lastDecisionNodeId===a.node.id)return;const l=this.getTargetPosition({pacman:t,ghost:i,ghostController:e,ghosts:o,fleeing:s(i)}),c=this.chooseEdge({decisionNode:a.node,incomingDirection:a.incomingDirection,targetPosition:l,ghostController:e,fleeing:s(i)});c&&(e.setDesiredDirection(c.inputDirection),this.lastDecisionNodeId=a.node.id)}getTargetPosition({pacman:e,ghost:t,ghosts:i}){return this.profile==="ambush"?this.getPacmanLookaheadPosition(e,tM):this.profile==="vector"?this.getVectorTargetPosition({pacman:e,ghosts:i}):this.profile==="shy"?this.getShyTargetPosition({pacman:e,ghost:t}):e.position}getPacmanLookaheadPosition(e,t){const i=e.userData.controller?.getFacingDirection?.()||e.userData.facingDirection||"east";return e.position.clone().addScaledVector(Ws(i),We*t)}getVectorTargetPosition({pacman:e,ghosts:t}){const i=t.find(r=>r.id==="blinky");return i?.model?this.getPacmanLookaheadPosition(e,Uh).clone().sub(i.model.position).multiplyScalar(2).add(i.model.position):this.getPacmanLookaheadPosition(e,Uh)}getShyTargetPosition({pacman:e,ghost:t}){if(!t)return e.position;const i=We*nM;return t.position.distanceTo(e.position)>i?e.position:e.position.clone().add(new e.position.constructor(-We*Nh,0,We*Nh))}getDecisionContext(e){return!e.route||!e.activeEdge?!e.currentNode||this.isTeleportTransitionNode(e.currentNode)?null:{node:e.currentNode,incomingDirection:e.currentDirection}:this.isTeleportTransitionNode(e.activeEdge.to)||e.route.totalLength-e.route.progress>this.decisionLeadDistance?null:{node:e.activeEdge.to,incomingDirection:e.activeEdge.endDirection}}chooseEdge({decisionNode:e,incomingDirection:t,targetPosition:i,ghostController:s,fleeing:r}){if(!e?.edges?.length||!i)return null;const o=t?Pt[t]:null;let a=s?.getAllowedEdges?.(e)||e.edges;if(r&&this.pendingFrightenedReverse){this.pendingFrightenedReverse=!1;const c=o?a.find(u=>u.inputDirection===o):null;if(c)return c}const l=o?a.filter(c=>c.inputDirection!==o):a;return l.length>0&&(a=l),r?this.chooseFrightenedEdge(a):a.reduce((c,u)=>{const h=u.to.position.distanceToSquared(i);return c?h<c.distanceSq?{edge:u,distanceSq:h}:c:{edge:u,distanceSq:h}},null)?.edge||null}chooseFrightenedEdge(e){return e.length===0?null:(this.randomSeed=this.randomSeed*1664525+1013904223>>>0,e[this.randomSeed%e.length])}isTeleportTransitionNode(e){return e?.type==="teleport_event_horizon"}}let ua={},Dr=null,Di="/menu";function Gc(n){const t=String(n||"").replace(/^#/,"").trim().split("?")[0]||Di;return(t.startsWith("/")?t:`/${t}`).replace(/\/+$/,"")||Di}function Jd(n=window.location.hash){const e=String(n||"").replace(/^#/,"")||Di,[t,i=""]=e.split("?"),s=Object.fromEntries(new URLSearchParams(i));return{path:Gc(t),query:s}}function sM(n,e={}){const t=Gc(n),i=new URLSearchParams;Object.entries(e).forEach(([r,o])=>{o==null||o===!1||i.set(r,o===!0?"1":String(o))});const s=i.toString();return`#${t}${s?`?${s}`:""}`}function ha(){const n=Jd(),e=ua[n.path];if(!e){bt(Di,{replace:!0});return}if(Dr?.path===n.path){e.update?.(n),Dr=n;return}Dr&&ua[Dr.path]?.exit?.(n),Dr=n,e.enter?.(n)}function rM(n,e={}){if(ua=n,Di=Gc(e.fallbackRoute||Di),window.addEventListener("hashchange",ha),!window.location.hash){bt(Di,{replace:!0});return}if(!ua[Jd().path]){bt(Di,{replace:!0});return}ha()}function bt(n,e={}){const t=sM(n,e.query);if(window.location.hash===t){ha();return}if(e.replace){window.location.replace(t),ha();return}window.location.hash=t}const ct=new gd;ct.background=new He(66052);ct.fog=new Ic(66052,.009);const qe=new ln(48,window.innerWidth/window.innerHeight,.1,500),ro=48,oM=82,zn={pos:[-52.15,34.87,81.2],target:[13.69,0,46.19]},da={pos:[0,65,120],target:[0,0,0]};qe.position.set(...zn.pos);const Wt=new Bd({antialias:!0,powerPreference:"high-performance"});Wt.setPixelRatio(Math.min(window.devicePixelRatio,1.25));Wt.setSize(window.innerWidth,window.innerHeight);Wt.outputColorSpace=on;Wt.toneMapping=Sc;Wt.toneMappingExposure=1.1;Wt.autoClear=!1;Wt.shadowMap.enabled=!1;const vt=document.querySelector("#app");vt.appendChild(Wt.domElement);const aM=new Ot({colorWrite:!1,depthWrite:!0,depthTest:!0}),lM=`
  <div id="mode-status">Showcase</div>
  
  <div class="command-deck" id="command-deck">
    <div class="deck-header" id="deck-header">
      <div class="deck-title">Command Deck</div>
      <div class="collapse-icon">▼</div>
    </div>
    
    <div class="deck-body">
      <button class="btn btn-primary" id="btn-toggle-mode">Open Editor</button>
      <button class="btn" id="btn-toggle-game">Start Game</button>

      <div class="game-only-controls" id="game-only-controls" style="display: none; flex-direction: column; gap: 14px;">
        <div style="display: flex; gap: 10px; margin-bottom: 5px;">
          <div class="control-label" style="flex: 1; align-self: center;">Pellets: <span id="pellet-counter" style="color: #ffaa00; font-weight: bold;">0</span></div>
          <div class="control-label" style="flex: 1; align-self: center;">Lives: <span id="lives-counter" style="color: #ff4444; font-weight: bold;">3</span></div>
        </div>
        <div class="control-label" style="text-align: center;">Score: <span id="score-counter" style="color: #00ffaa; font-weight: bold;">0</span></div>
        <div id="game-state-label" class="control-label" style="display: none; color: #ff4444; font-weight: bold; text-align: center;">Game Over</div>
        <div style="display: flex; gap: 10px; margin-top: -5px;">
          <button class="btn dev-only-control" id="btn-reset-pellets" style="flex: 1; padding: 6px;">Reset Pellets</button>
          <button class="btn" id="btn-reset-run" style="flex: 1; padding: 6px;">Restart Run</button>
        </div>
        <button class="btn dev-only-control" id="btn-swap-puppet" style="margin-top: -5px; padding: 6px; background: rgba(255, 204, 0, 0.2); border-color: rgba(255, 204, 0, 0.3); color: #ffcc00;">Control: Pacman</button>
        <button class="btn dev-only-control" id="btn-cycle-ghost-count" style="margin-top: -5px; padding: 6px;">Ghosts: 4</button>
        <button class="btn dev-only-control" id="btn-toggle-ghost-ai" style="margin-top: -5px; padding: 6px;">Ghost AI: Off</button>
        <button class="btn dev-only-control" id="btn-toggle-collisions" style="margin-top: -5px; padding: 6px;">Collisions: On</button>
        <button class="btn dev-only-control" id="btn-toggle-jumpscare" style="margin-top: -5px; padding: 6px;">Jumpscare: Off</button>
        <div class="hotkey-list">
          <div class="hotkey-item"><span>Move</span> <span class="hotkey-key">WASD / Arrows</span></div>
          <div class="hotkey-item"><span>Look Back</span> <span class="hotkey-key">Hold Space</span></div>
          <div class="hotkey-item dev-only-control"><span>Swap</span> <span class="hotkey-key">Tab</span></div>
          <div class="hotkey-item"><span>Exit</span> <span class="hotkey-key">Esc</span></div>
        </div>
      </div>
      
      <div class="editor-only-controls" id="editor-only-controls" style="display: none; flex-direction: column; gap: 20px;">
        <div style="display: flex; gap: 10px;">
          <button class="btn" id="btn-export" style="flex: 1;">Export</button>
          <button class="btn" id="btn-import" style="flex: 1;">Import</button>
        </div>
        <div style="display: flex; gap: 10px; margin-top: -10px;">
          <button class="btn" id="btn-apply-shift" style="flex: 1; display: none; background: rgba(0, 255, 136, 0.2); color: #00ff88; border-color: rgba(0, 255, 136, 0.3);">Apply</button>
          <button class="btn" id="btn-shift-map" style="flex: 1;">Shift Map</button>
        </div>

        <div class="control-group">
          <div class="control-label">Zoom Level</div>
          <input type="range" id="zoom-slider" min="10" max="300" value="60">
        </div>

        <div class="segmented-toggle">
          <div class="toggle-slider" id="view-slider"></div>
          <div class="toggle-option active" data-view="3d">3D View</div>
          <div class="toggle-option" data-view="2d">Bird's Eye</div>
        </div>
        
        <div class="hotkey-list" id="hotkey-list">
          <div class="hotkey-item"><span>Free Mode</span> <span class="hotkey-key">V</span></div>
          <div class="hotkey-item"><span>Place</span> <span class="hotkey-key">Click / Space</span></div>
          <div class="hotkey-item"><span>Rotate</span> <span class="hotkey-key">R</span></div>
          <div class="hotkey-item"><span>Delete</span> <span class="hotkey-key">X</span></div>
          <div class="hotkey-item"><span>Pan</span> <span class="hotkey-key">WASD / Arrows</span></div>
          <div class="hotkey-item"><span>View</span> <span class="hotkey-key">Tab</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="showroom-nav" id="showroom-nav" aria-label="Showroom navigation">
    <button class="showroom-action btn-blue" id="btn-showroom-menu">
      <svg class="btn-icon" viewBox="0 0 24 24" fill="none">
        <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
      </svg>
      <span>Menu</span>
    </button>
    <button class="showroom-action btn-yellow" id="btn-showroom-play">
      <svg class="btn-icon" viewBox="0 0 24 24" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13 3C15.1523 3 17.1281 3.7555 18.6768 5.01576L20.124 6.46299L18.8288 7.75818L18.828 7.75738L14.5854 12L18.2236 15.6383L18.2224 15.6396L20.1273 17.5445L18.7144 18.9575L18.7122 18.9553C17.1583 20.2329 15.1687 21 13 21C8.02944 21 4 16.9706 4 12C4 7.02944 8.02944 3 13 3ZM11.7569 12L17.2893 17.5323C16.1044 18.4523 14.6162 19 13 19C9.13401 19 6 15.866 6 12C6 8.13401 9.13401 5 13 5C14.6162 5 16.1045 5.54772 17.2893 6.46768L11.7569 12Z" fill="currentColor"/>
      </svg>
      <span>Play</span>
    </button>
    <button class="showroom-action btn-blue" id="btn-showroom-create">
      <svg class="btn-icon" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        <line x1="2" y1="12" x2="6" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        <line x1="18" y1="12" x2="22" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        <line x1="12" y1="2" x2="12" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        <line x1="12" y1="18" x2="12" y2="22" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      </svg>
      <span>Create</span>
    </button>
  </div>

  <div class="editor-ui" id="editor-ui">
    <div class="left-bar">
      <div class="separator-label">Items</div>
      <div class="item-card" data-type="powerpellet">
        <span class="key-hint">P</span>
        Power
      </div>
      <div class="item-card" data-type="pacmanspawn">
        <span class="key-hint">S</span>
        Spawn
      </div>
    </div>
    <div class="bottom-bar">
      <div class="piece-card active" data-type="straight">
        <span class="key-hint">1</span>
        Straight
      </div>
      <div class="piece-card" data-type="corner">
        <span class="key-hint">2</span>
        Corner
      </div>
      <div class="piece-card" data-type="tjunction">
        <span class="key-hint">3</span>
        T-Junc
      </div>
      <div class="piece-card" data-type="crossroad">
        <span class="key-hint">4</span>
        Cross
      </div>
      <div class="piece-card" data-type="teleport">
        <span class="key-hint">5</span>
        Teleport
      </div>
      <div class="piece-card" data-type="ghostchamber">
        <span class="key-hint">6</span>
        Chamber
      </div>
    </div>
  </div>

  <button class="editor-save-fab" id="btn-save-map" type="button">
    <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
      <polyline points="17 21 17 13 7 13 7 21"></polyline>
      <polyline points="7 3 7 8 15 8"></polyline>
    </svg>
    <span class="editor-save-label">Save Map</span>
  </button>

  <div class="modal-overlay" id="export-modal">
    <div class="modal-content">
      <h3 class="modal-title">Export Maze</h3>
      <div class="modal-buttons">
        <button class="btn" id="btn-modal-copy">Copy to Clipboard</button>
        <button class="btn" id="btn-modal-download">Download File</button>
      </div>
      <div class="modal-footer">
        <button class="btn-close" id="btn-modal-close">Close</button>
      </div>
    </div>
  </div>

  <div class="modal-overlay" id="import-modal">
    <div class="modal-content" style="width: 400px;">
      <h3 class="modal-title">Import Maze</h3>
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <textarea id="import-textarea" placeholder="Paste your exported maze JSON here..." rows="6" style="width: 100%; background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1); color: #fff; border-radius: 8px; padding: 12px; font-family: monospace; resize: vertical; outline: none;"></textarea>
        <div style="text-align: center; color: rgba(255,255,255,0.4); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em;">- OR -</div>
        <div class="file-drop-zone" id="import-file-zone">
          <div class="content-wrapper">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
            <span id="import-file-name">Import File</span>
          </div>
          <input type="file" id="import-file" accept=".json">
        </div>
      </div>
      <div class="modal-buttons">
        <button class="btn btn-primary" id="btn-modal-import">Import Maze</button>
      </div>
      <div class="modal-footer">
        <button class="btn-close" id="btn-modal-import-close">Cancel</button>
      </div>
    </div>
  </div>

  <div class="modal-overlay editor-save-modal" id="editor-save-modal">
    <div class="modal-content editor-save-modal-content">
      <p class="editor-modal-eyebrow" id="editor-save-modal-eyebrow">Map Editor</p>
      <h3 class="modal-title editor-save-modal-title" id="editor-save-modal-title">Save Map</h3>
      <p class="editor-save-modal-message" id="editor-save-modal-message">Name this map before saving it to your slots.</p>
      <label class="editor-save-input-wrap" id="editor-save-input-wrap">
        <span>Map Name</span>
        <input id="editor-save-name-input" type="text" maxlength="28" autocomplete="off" />
      </label>
      <p class="editor-save-modal-error" id="editor-save-modal-error"></p>
      <div class="editor-save-modal-actions">
        <button class="editor-modal-secondary" id="btn-editor-save-cancel" type="button">Cancel</button>
        <button class="editor-modal-primary" id="btn-editor-save-confirm" type="button">Save</button>
      </div>
    </div>
  </div>

  <div class="landing-overlay" id="landing-menu">
    <div class="landing-menu-container">
      <div id="menu-3d-container">
        <canvas id="menu-3d-canvas"></canvas>
      </div>      <div class="landing-content">
        <div class="landing-logo" aria-label="3D Pacman">
          <div class="logo-top">            <svg class="logo-svg-top" viewBox="0 0 1538 780">
              <g transform="translate(40, 40)">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M266 712Q192 712 121 692.50Q50 673-1 637L62 513Q102 543 154.50 559.50Q207 576 262 576Q323 576 358 552.50Q393 529 393 486Q393 447 362 423.50Q331 400 262 400L188 400L188 293L331 130L34 130L34 0L524 0L524 105L366 284Q460 300 508 354Q556 408 556 486Q556 545 525 596.50Q494 648 429.50 680Q365 712 266 712" />
                <path transform="translate(632, 0)" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M401 700L83 700L83 0L401 0Q515 0 602 43.50Q689 87 738 165.50Q787 244 787 350Q787 456 738 534.50Q689 613 602 656.50Q515 700 401 700M245 133L245 567L393 567Q463 567 514.50 540.50Q566 514 594.50 465.50Q623 417 623 350Q623 283 594.50 234.50Q566 186 514.50 159.50Q463 133 393 133" />
              </g>
            </svg>
          </div>
          <div class="logo-word">
            <span class="logo-letter">
              <svg viewBox="0 0 792 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M245 700L83 700L83 0L386 0Q479 0 547.50 30.50Q616 61 653 118Q690 175 690 254Q690 332 653 389Q616 446 547.50 476.50Q479 507 386 507L245 507L245 700M245 132L245 375L377 375Q451 375 488.50 343Q526 311 526 254Q526 196 488.50 164Q451 132 377 132" />
                </g>
              </svg>
            </span>
            <span class="logo-letter">
              <svg viewBox="0 0 826 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M383 0L766 700L0 700ZM383 380L465 530L301 530Z" />
                </g>
              </svg>
            </span>
            <span class="logo-letter">
              <svg viewBox="0 0 784 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M418 712Q337 712 267.50 685Q198 658 147 609.50Q96 561 67.50 495Q39 429 39 350Q39 271 67.50 205Q96 139 147.50 90.50Q199 42 268 15Q337-12 419-12Q510-12 584 20Q658 52 707 112L603 208Q531 126 427 126Q361 126 310.50 154.50Q260 183 231.50 233.50Q203 284 203 350Q203 416 231.50 466.50Q260 517 310.50 545.50Q361 574 427 574Q531 574 603 491L707 587Q658 648 584 680Q510 712 418 712" />
                </g>
              </svg>
            </span>
            <span class="logo-letter">
              <svg viewBox="0 0 1015 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M235 700L83 700L83 0L217 0L479 435L737 0L870 0L872 700L720 700L719 281L513 626L440 626L235 288" />
                </g>
              </svg>
            </span>
            <span class="logo-letter">
              <svg viewBox="0 0 826 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M383 0L766 700L0 700ZM383 380L465 530L301 530Z" />
                </g>
              </svg>
            </span>
            <span class="logo-letter">
              <svg viewBox="0 0 868 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M243 700L83 700L83 0L217 0L565 426L565 0L725 0L725 700L592 700L243 274" />
                </g>
              </svg>
            </span>
          </div>
        </div>
        <div class="landing-actions">
          <button class="landing-action btn-yellow" id="btn-menu-start">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13 3C15.1523 3 17.1281 3.7555 18.6768 5.01576L20.124 6.46299L18.8288 7.75818L18.828 7.75738L14.5854 12L18.2236 15.6383L18.2224 15.6396L20.1273 17.5445L18.7144 18.9575L18.7122 18.9553C17.1583 20.2329 15.1687 21 13 21C8.02944 21 4 16.9706 4 12C4 7.02944 8.02944 3 13 3ZM11.7569 12L17.2893 17.5323C16.1044 18.4523 14.6162 19 13 19C9.13401 19 6 15.866 6 12C6 8.13401 9.13401 5 13 5C14.6162 5 16.1045 5.54772 17.2893 6.46768L11.7569 12Z" fill="currentColor"/>
            </svg>
            <span>Start Game</span>
          </button>
          <button class="landing-action btn-blue" id="btn-menu-editor">
            <svg class="btn-icon" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2" />
              <circle cx="12" cy="12" r="1.5" fill="currentColor" />
              <line x1="2" y1="12" x2="6" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              <line x1="18" y1="12" x2="22" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              <line x1="12" y1="2" x2="12" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              <line x1="12" y1="18" x2="12" y2="22" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
            <span>Create Map</span>
          </button>
          <button class="landing-action btn-blue" id="btn-menu-showroom">
            <svg class="btn-icon" viewBox="0 0 512 512" fill="none">
              <g stroke="currentColor" stroke-width="28" stroke-linecap="round" stroke-linejoin="round">
                <path d="M 104 404 L 104 198 C 104 118 168 70 256 70 C 344 70 408 118 408 198 L 408 404 L 368 368 L 312 420 L 256 370 L 200 420 L 144 368 L 104 404 Z"/>
                <circle cx="200" cy="216" r="34"/>
                <circle cx="312" cy="216" r="34"/>
              </g>
            </svg>
            <span>Showroom</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="route-overlay" id="map-select-screen">
    <div class="route-screen map-picker">
      <div class="route-screen-header">
        <button class="route-back-button route-icon-button" id="btn-map-select-back" aria-label="Back to menu">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15 5L8 12L15 19" />
          </svg>
        </button>
        <div>
          <h2>Pick a Map</h2>
        </div>
      </div>
      <div class="map-picker-grid" id="map-picker-grid"></div>
      <details class="map-advanced-panel">
        <summary>
          <span>Advanced</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 9L12 15L18 9" />
          </svg>
        </summary>
        <div class="map-advanced-controls">
          <label class="map-dev-toggle">
            <input type="checkbox" id="map-jumpscare-toggle">
            <span>Jumpscare mode</span>
          </label>
          <div class="map-ghost-count-control">
            <span>Ghosts</span>
            <div class="ghost-stepper" id="map-ghost-stepper">
              <button class="ghost-stepper-button" id="btn-ghost-count-minus" type="button" aria-label="Decrease ghost count">-</button>
              <div class="ghost-stepper-value" id="map-ghost-count" role="status" aria-live="polite">4</div>
              <button class="ghost-stepper-button ghost-stepper-button-plus" id="btn-ghost-count-plus" type="button" aria-label="Increase ghost count">+</button>
            </div>
          </div>
        </div>
      </details>
      <div class="map-picker-footer">
        <label class="map-dev-toggle">
          <input type="checkbox" id="map-dev-toggle">
          <span>Dev tools</span>
        </label>
        <button class="map-start-button" id="btn-map-select-start">Start</button>
      </div>
    </div>
  </div>

  <div class="route-overlay" id="map-manager-screen">
    <div class="route-screen map-manager">
      <div class="route-screen-header">
        <button class="route-back-button route-icon-button" id="btn-map-manager-back" aria-label="Back to menu">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15 5L8 12L15 19" />
          </svg>
        </button>
        <div>
          <h2>Your Maps</h2>
        </div>
      </div>
      <div class="map-manager-grid" id="map-manager-grid"></div>
    </div>
  </div>
  <div class="game-hud" id="game-hud">
    <svg width="0" height="0" style="position:absolute">
      <defs>
        <radialGradient id="pacman3dGrad" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#fff5a0" />
          <stop offset="25%" stop-color="#ffd91f" />
          <stop offset="75%" stop-color="#cc9a00" />
          <stop offset="100%" stop-color="#664d00" />
        </radialGradient>
      </defs>
    </svg>
    <div class="game-hud-lives" id="game-hud-lives"></div>
    <div class="game-start-overlay" id="game-start-overlay" aria-hidden="true">
      <div class="game-start-modal">
        <h2 class="game-start-title">Controls</h2>
        <div class="game-start-commands">
          <div><span>Move</span><strong>WASD / Arrows</strong></div>
          <div><span>Look back</span><strong>Hold Space</strong></div>
          <div><span>Exit</span><strong>Esc</strong></div>
        </div>
        <button class="game-start-button" id="btn-game-start" type="button">Start</button>
      </div>
    </div>
  </div>

  <div class="editor-toast" id="editor-toast"></div>
`;vt.insertAdjacentHTML("beforeend",lM);vt.classList.add("landing-active");const Ne=new cy(qe,Wt.domElement);Ne.enableDamping=!0;Ne.dampingFactor=.05;Ne.target.set(0,0,0);Ne.minDistance=10;Ne.maxDistance=300;Ne.maxPolarAngle=Math.PI/2.12;Ne.screenSpacePanning=!1;const Ms=new gg(9022975,65795,1.4);ct.add(Ms);const jd=new fc(12836607,1.1);jd.position.set(28,34,16);ct.add(jd);const Qd=new _g(3898623,10,90,2.2);Qd.position.set(6,9,3);ct.add(Qd);const ef=new we(new ei(115,64),new Nn({color:263948,emissive:66054,roughness:.96,metalness:.04}));ef.rotation.x=-Math.PI/2;const Hc=new we(new ei(72,64),new Ot({color:399434,transparent:!0,opacity:.14,side:Ut}));Hc.rotation.x=-Math.PI/2;Hc.position.y=.03;const Vc=new we(new ya(88,106,72),new Ot({color:794455,transparent:!0,opacity:.1,side:Ut}));Vc.rotation.x=-Math.PI/2;Vc.position.y=.02;const ht=Gy(by),Qe=new ot,wn=new ot;let Dt=null,$n=null,Ht=[],xt=null,hi="pacman",ci=null,Zt=new Qy(wn),en=!1,$s=!1,kn=!1,cr=!1,di=!1,Li=!0,vi=0,Fi=3,_i=!1,Tn=!1,fr=0,fi=0,ur=0,oo=0,Js=4,tf=null,as="classic",Oi=4;const nf="icg-3d-pacman-user-maps",ao=2,Wc=[{id:"classic",name:"Classic",description:"Default glass-pipe maze",source:Hy}];let Fn=$M(),On={mapId:null,name:"",saveable:!1},ba=!1,wa=null,ta=null,pn=null,pi=null,mn=null,Ln=null,In=null,qn=null,fa=[];const pa=54,ma=38,cM=12;let ji=0;const _e={forward:new T(1,0,0),reverseHoldForward:new T(1,0,0),target:new T,position:new T,isReversing:!1,reversalTimer:0,reverseSnapFramesRemaining:0},uM=8.5,_l=4.5,xl=2,Fh=.5,hM=.75,dM=3.5,fM=2.1,Oh=2,qc=3,pM=10,mM=50,gM=6,vM=.14,_M=7,xM=22,yM=.25,MM=1.5,SM=4,EM=1.25,sf=12.5,bM=8,Bh=[200,400,800,1600],wM={blinky:{enabled:!0,releaseDelay:0},pinky:{enabled:!0,releaseDelay:3},inky:{enabled:!0,releaseDelay:6},clyde:{enabled:!0,releaseDelay:9}},lo=[{id:"blinky",label:"Blinky",color:16711748,uiColor:"#ff0044",uiRgb:"255, 0, 68",spawnConnector:"center_front",aiProfile:"direct"},{id:"pinky",label:"Pinky",color:16729275,uiColor:"#ff44bb",uiRgb:"255, 68, 187",spawnConnector:"center_back",aiProfile:"ambush"},{id:"inky",label:"Inky",color:52479,uiColor:"#00ccff",uiRgb:"0, 204, 255",spawnConnector:"left_back",aiProfile:"vector"},{id:"clyde",label:"Clyde",color:16755200,uiColor:"#ffaa00",uiRgb:"255, 170, 0",spawnConnector:"right_back",aiProfile:"shy"}];function Xc(n,e,t=null){return wM[n]?.[e]??t}function TM(){return lo.slice(0,Js).filter(n=>Xc(n.id,"enabled",!0))}function Vt(){return Ht[0]||null}function Ta(){return Vt()?.controller||null}function Yc(n){return Ht.find(e=>e.id===n)||null}function qt(n=Vt()){return n?typeof n=="string"?Yc(n):Ht.includes(n)?n:Ht.find(e=>e.model===n||e.controller===n||e.ai===n)||null:null}function St(n){Ht.forEach(n)}function Zc(){return!!Ht.some(n=>n.ai.enabled)}function rf(){return hi==="pacman"?$n:Yc(hi)?.controller||Ta()}function of(){const n=document.querySelector("#btn-swap-puppet");if(!n)return;const e=Yc(hi);if(!e){n.textContent="Control: Pacman",n.style.background="rgba(255, 204, 0, 0.2)",n.style.borderColor="rgba(255, 204, 0, 0.3)",n.style.color="#ffcc00";return}n.textContent=`Control: ${e.definition.label}`,n.style.background=`rgba(${e.definition.uiRgb}, 0.2)`,n.style.borderColor=`rgba(${e.definition.uiRgb}, 0.3)`,n.style.color=e.definition.uiColor}function AM(){if(hi==="pacman")hi=Vt()?.id||"pacman";else{const n=Ht.findIndex(e=>e.id===hi);hi=n>=0&&n<Ht.length-1?Ht[n+1].id:"pacman"}xt=rf(),of()}function RM(n,e,t){const i=n.clone().setY(0).normalize(),s=e.clone().setY(0).normalize(),r=En.clamp(i.dot(s),-1,1),o=i.x*s.z-i.z*s.x,a=Math.atan2(-o,r),l=En.clamp(a,-t,t);return i.applyAxisAngle(new T(0,1,0),l).normalize()}function kh(n,e,t=!1){if(t){const i=xt.getRouteCameraPoint(n,!1);return i||xt.getCameraTarget().addScaledVector(e,-n)}return xt.getCameraTrailPoint(n,e)}function CM(n){n.traverse(e=>{e.material&&(e.material.depthTest=!0)})}function af(){const n=document.querySelector("#btn-toggle-jumpscare");n&&(n.textContent=di?"Jumpscare: On":"Jumpscare: Off",n.style.background=di?"rgba(255, 34, 34, 0.2)":"rgba(12, 22, 45, 0.84)",n.style.borderColor=di?"rgba(255, 34, 34, 0.4)":"rgba(136, 178, 255, 0.2)",n.style.color=di?"#ff5555":"#ffffff")}function lf(){const n=document.querySelector("#btn-toggle-collisions");n&&(n.textContent=Li?"Collisions: On":"Collisions: Off",n.style.background=Li?"rgba(255, 170, 0, 0.18)":"rgba(12, 22, 45, 0.84)",n.style.borderColor=Li?"rgba(255, 170, 0, 0.35)":"rgba(136, 178, 255, 0.2)",n.style.color=Li?"#ffaa00":"#ffffff")}function Kc(){const n=document.querySelector("#btn-toggle-ghost-ai");if(!n)return;const e=Zc();n.textContent=e?"Ghost AI: On":"Ghost AI: Off",n.style.background=e?"rgba(0, 255, 170, 0.16)":"rgba(12, 22, 45, 0.84)",n.style.borderColor=e?"rgba(0, 255, 170, 0.35)":"rgba(136, 178, 255, 0.2)",n.style.color=e?"#00ffaa":"#ffffff"}function cf(){const n=document.querySelector("#btn-cycle-ghost-count");n&&(n.textContent=`Ghosts: ${Js}`)}function pr(){const n=document.querySelector("#lives-counter"),e=document.querySelector("#game-state-label");n&&(n.textContent=Fi),e&&(e.style.display=_i||Tn?"block":"none",e.textContent=Tn?"Level Complete":"Game Over",e.style.color=Tn?"#00ffaa":"#ff4444");const t=document.querySelector("#game-hud-lives");if(t){t.innerHTML="";for(let i=0;i<Fi;i++){const s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.classList.add("hud-life-icon"),s.setAttribute("viewBox","0 0 24 24"),s.setAttribute("width","42"),s.setAttribute("height","42");const r=document.createElementNS("http://www.w3.org/2000/svg","path");r.setAttribute("d","M12 12 L20.66 7 A10 10 0 1 0 20.66 17 Z"),r.setAttribute("fill","url(#pacman3dGrad)"),s.appendChild(r),t.appendChild(s)}}}function co(){const n=document.querySelector("#score-counter");n&&(n.textContent=fr)}function PM(n){return n===ns.POWER?mM:pM}function DM(n){n.length!==0&&(fr+=n.reduce((e,t)=>e+PM(t.type),0),co())}function LM(){const n=Math.min(oo,Bh.length-1);return Bh[n]}function IM(){fr+=LM(),oo+=1,co()}function uf(){const n=tf?.tiles?.size??0;return En.clamp(gM+n*vM,_M,xM)}function UM(n=ur||uf()){return En.clamp(n*yM,MM,SM)}function hf(n=Vt()){return qt(n)?.powerState||null}function df(n,e){n?.setVulnerable&&n.setVulnerable(e)}function $c(n){Dt?.setPowerMode&&Dt.setPowerMode(n)}function uo(n=Vt()){if(qt(n)?.powerState.recoveringFromEaten)return!1;const t=hf(n);return!!(_f()&&t&&!t.eatenDuringCurrentPower)}function NM(){return _f()?fi<=UM()?"flashing":!0:!1}function Aa(){St(n=>{df(n.model,uo(n)?NM():!1),ff(n)})}function ff(n=null){(n?[qt(n)].filter(Boolean):Ht).forEach(t=>{t.controller.speed=uo(t)?bM:sf})}function Jc(n=Vt()){return qt(n)?.houseState||null}function jc(n=Vt()){const e=qt(n);e&&(e.houseState.houseState=e.spawnState?.tile?.type==="ghostchamber"?"inside":"active",e.houseState.releaseTimer=e.powerState.recoveringFromEaten?0:Xc(e.id,"releaseDelay",0),e.houseState.releaseDirection=e.spawnState?.direction||null)}function zh(n=Vt()){const e=Jc(n);return!!(e&&e.houseState!=="active")}function Ra(n=Vt()){const e=qt(n),t=Jc(e);!e||!t||!ho(e.controller)||(t.houseState="inside",t.releaseTimer=Xc(e.id,"releaseDelay",0),t.releaseDirection=pf(e)||e.spawnState?.direction||e.controller.currentDirection||null,e.ai.reset())}function pf(n=Vt()){const e=qt(n),t=e?.controller.activeEdge?.to||e?.controller.currentNode;if(t?.tile?.type!=="ghostchamber")return null;const s={left_back:"east",right_back:"west",center_back:"north",left_front:"east",right_front:"west",center_front:"north"}[t.connector];return s&&Gt([s],t.tile.rotation)[0]||null}function Gh(n=Vt()){const e=qt(n),t=pf(e);!e||!t||(e.houseState.releaseDirection=t,mf(e,t))}function FM(n=Vt()){const e=qt(n),t=e?.controller.activeEdge?.to||e?.controller.currentNode;if(t?.tile?.type!=="ghostchamber")return null;const s={left_back:"north",center_back:"north",right_back:"north",left_front:"south",center_front:"south",right_front:"south"}[t.connector];return s&&Gt([s],t.tile.rotation)[0]||null}function OM(n=Vt()){const e=qt(n),t=FM(e);!e||!t||mf(e,t)}function mf(n,e){const t=qt(n);!t||!e||(t.controller.isMoving?t.controller.desiredDirection=e:t.controller.setDesiredDirection(e),t.controller.desiredIntent=null)}function ho(n=Ta()){return n?n.currentNode?.tile?.type==="ghostchamber"||n.activeEdge?.from?.tile?.type==="ghostchamber"||n.activeEdge?.to?.tile?.type==="ghostchamber":!1}function gf(n=Ta()){return n?.currentNode?.tile?.type==="ghostchamber"&&!n.route}function vf(n=Ta()){return!n?.route||!n.activeEdge?!1:n.activeEdge.from?.tile?.type==="ghostchamber"&&n.activeEdge.to?.tile?.type!=="ghostchamber"&&n.route.totalLength-n.route.progress<=4.5}function BM(n=Vt()){const e=qt(n);return!e||ti(e)||gf(e.controller)?!0:ho(e.controller)?!vf(e.controller):!1}function kM(n){St(e=>{if(Hh(e),!e.ai.enabled)return;const t=Jc(e);if(!(!t||t.houseState==="active"||ti(e))){if(t.houseState==="inside"){t.releaseTimer=Math.max(0,t.releaseTimer-n),t.releaseTimer===0?(t.houseState="releasing",Gh(e),e.ai.reset()):OM(e);return}t.houseState==="releasing"&&(!ho(e.controller)||vf(e.controller)?(t.houseState="active",Hh(e),e.ai.reset()):Gh(e))}})}function zM(){ur=uf(),fi=ur,oo=0,$c(!0),St(n=>{n.powerState.eatenDuringCurrentPower=ti(n)||n.powerState.recoveringFromEaten}),Aa(),St(n=>{uo(n)&&!ti(n)&&!ho(n.controller)&&n.ai.queueFrightenedReverse()})}function fo(){fi=0,ur=0,oo=0,$c(!1),St(n=>{n.powerState.eatenDuringCurrentPower=!1}),Aa()}function yl(n){fi<=0||(fi=Math.max(0,fi-n),fi===0&&(ur=0,oo=0,$c(!1),St(e=>{e.powerState.eatenDuringCurrentPower=!1})),Aa())}function GM(n){return n.some(e=>e.type===ns.POWER)}function _f(){return fi>0}function ti(n=Vt()){return(qt(n)?.respawnTimer||0)>0}function Hh(n=Vt()){const e=qt(n);e?.powerState.recoveringFromEaten&&(ti(e)||ho(e.controller)||(e.powerState.recoveringFromEaten=!1))}function HM(n=Vt()){const e=qt(n);!e?.controller||!e.spawnState||(e.controller.reset(e.spawnState.tile,e.spawnState.direction,e.spawnState.connector),jc(e),e.model.visible=!0,Aa())}function VM(n=Vt()){const e=qt(n);if(!e||ti(e))return;const t=hf(e);t&&(t.eatenDuringCurrentPower=!0),t&&(t.recoveringFromEaten=!0),IM(),df(e.model,!1),ff(e),e.respawnTimer=EM,e.model.visible=!1}function Ml(n){St(e=>{ti(e)&&(e.respawnTimer=Math.max(0,e.respawnTimer-n),ti(e)||HM(e))})}function WM(){St(n=>{n.ai.enabled&&gf(n.controller)&&!zh(n)&&Ra(n),!zh(n)&&n.ai.update({ghostController:n.controller,pacman:Dt,ghost:n.model,ghosts:Ht,canGhostBeEaten:uo,isGhostRespawning:ti(n)})})}function qM(n){return Array.isArray(n)?n:[n]}function XM(n){return!n.isMesh||!n.visible||!n.material?!1:qM(n.material).every(e=>e&&e.visible!==!1&&e.transparent!==!0&&e.opacity!==0&&e.depthWrite!==!1)}function YM(){const n=[],e=ct.background,t=ct.overrideMaterial;ct.traverse(i=>{i.isMesh&&(XM(i)||(n.push([i,i.visible]),i.visible=!1))}),ct.background=null,ct.overrideMaterial=aM;try{Wt.render(ct,qe)}finally{ct.overrideMaterial=t,ct.background=e,n.forEach(([i,s])=>{i.visible=s})}}function ZM(){Wt.clear();const n=Ht.map(e=>e.model).filter(e=>e?.visible);if(!en||di||n.length===0){Wt.render(ct,qe);return}n.forEach(e=>{e.visible=!1}),Wt.render(ct,qe),n.forEach(e=>{e.visible=!0}),Wt.clearDepth(),YM(),n.forEach(e=>{Wt.render(e,qe)})}ht.add(ef);ht.add(Hc);ht.add(Vc);const Qc=new we(new gi(We*20,We*20),new Ot({visible:!1}));Qc.rotation.x=-Math.PI/2;ct.add(Qc);ct.add(ht);ct.add(Qe);ct.add(wn);wn.visible=!1;function KM(n,e){const t=zi(n.color);return t.scale.setScalar(.32),t.userData.ghostId=n.id,CM(t),wn.add(t),{id:n.id,definition:n,model:t,controller:new $d(t,e,{speed:sf,entityType:"ghost"}),ai:new iM({profile:n.aiProfile,randomSeed:n.id.split("").reduce((i,s)=>i*31+s.charCodeAt(0)>>>0,2654435769)}),powerState:{eatenDuringCurrentPower:!1,recoveringFromEaten:!1},houseState:{houseState:"active",releaseTimer:0,releaseDirection:null},spawnState:null,respawnTimer:0}}function $M(){try{const n=JSON.parse(localStorage.getItem(nf)||"[]");return Array.isArray(n)?n.filter(e=>e&&typeof e.id=="string"&&typeof e.name=="string"&&Array.isArray(e.source)).slice(0,ao):[]}catch{return[]}}function JM(){localStorage.setItem(nf,JSON.stringify(Fn.slice(0,ao)))}function xf(){return[...Wc,...Fn]}function jM(){return`user-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,7)}`}function Vh(n){return String(n).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function yf(n){return xf().find(e=>e.id===n)||Wc[0]}function QM(){return yf(as)}function eS(){return Qe.children.map(n=>({type:n.userData.type,position:[n.position.x,n.position.y,n.position.z],rotation:n.userData.rotation,hasPowerPellet:n.userData.hasPowerPellet||!1,hasPacmanSpawn:n.userData.hasPacmanSpawn||!1,pacmanSpawnRotation:n.userData.pacmanSpawnRotation||0}))}function xi(n=!0){ba=!!n,Mf()}function Ca(n){On={mode:n.mode||"none",mapId:n.mapId||null,name:n.name||"",saveable:!!n.saveable},xi(!1)}function vc(n){const e=document.querySelector("#editor-toast");e&&(e.textContent=n,e.classList.add("active"),clearTimeout(vc.timeoutId),vc.timeoutId=setTimeout(()=>{e.classList.remove("active")},2600))}function qs(){document.querySelector("#editor-save-modal")?.classList.remove("active"),wa=null}function Qr({title:n,message:e,variant:t="info",primaryText:i="Close"}){const s=document.querySelector("#editor-save-modal"),r=document.querySelector("#editor-save-modal-eyebrow"),o=document.querySelector("#editor-save-modal-title"),a=document.querySelector("#editor-save-modal-message"),l=document.querySelector("#editor-save-input-wrap"),c=document.querySelector("#editor-save-name-input"),u=document.querySelector("#editor-save-modal-error"),h=document.querySelector("#btn-editor-save-cancel"),p=document.querySelector("#btn-editor-save-confirm");!s||!o||!a||!l||!c||!u||!h||!p||(wa=null,s.dataset.variant=t,r.textContent=t==="success"?"Saved":"Map Editor",o.textContent=n,a.textContent=e,l.style.display="none",c.value="",u.textContent="",h.style.display="none",p.textContent=i,s.classList.add("active"),p.focus())}function tS(n,e){const t=document.querySelector("#editor-save-modal"),i=document.querySelector("#editor-save-modal-eyebrow"),s=document.querySelector("#editor-save-modal-title"),r=document.querySelector("#editor-save-modal-message"),o=document.querySelector("#editor-save-input-wrap"),a=document.querySelector("#editor-save-name-input"),l=document.querySelector("#editor-save-modal-error"),c=document.querySelector("#btn-editor-save-cancel"),u=document.querySelector("#btn-editor-save-confirm");!t||!s||!r||!o||!a||!l||!c||!u||(wa={source:n},t.dataset.variant="save",i.textContent=On.mapId?"Update Slot":"New Slot",s.textContent="Save Map",r.textContent="Name this map before saving it to your map slots.",o.style.display="",a.value=e,l.textContent="",c.style.display="",c.textContent="Cancel",u.textContent="Save Map",t.classList.add("active"),requestAnimationFrame(()=>{a.focus(),a.select()}))}function nS(n){const e=document.querySelector("#editor-save-modal"),t=document.querySelector("#editor-save-modal-eyebrow"),i=document.querySelector("#editor-save-modal-title"),s=document.querySelector("#editor-save-modal-message"),r=document.querySelector("#editor-save-input-wrap"),o=document.querySelector("#editor-save-name-input"),a=document.querySelector("#editor-save-modal-error"),l=document.querySelector("#btn-editor-save-cancel"),c=document.querySelector("#btn-editor-save-confirm");!e||!i||!s||!r||!o||!a||!l||!c||(ta=n,e.dataset.variant="confirm-discard",t.textContent="Unsaved Changes",i.textContent="Discard Changes?",s.textContent="You have unsaved changes. If you close the editor, these changes will be lost.",r.style.display="none",o.value="",a.textContent="",l.style.display="",l.textContent="Cancel",c.textContent="Discard",e.classList.add("active"),c.focus())}function Mf(){const n=document.querySelector("#btn-save-map");if(!n)return;n.disabled=!On.saveable;const e=n.querySelector(".editor-save-label"),t=n.querySelector(".editor-save-kicker");e&&(e.textContent=On.saveable?ba?"Save Map *":"Save Map":"Read Only"),t&&(t.textContent=On.saveable?On.name||"Editor Slot":"Built-In Map"),n.title=On.saveable?"Save this map to your map slots":"Built-in maps can be exported, but cannot be saved over"}function Sf(n,e={}){if(!Array.isArray(n))throw new Error("Map data must be an array of pieces.");if(e.requirePlayable&&n.length<5)throw new Error("Saved maps need at least 5 maze pieces.");const t=["straight","corner","tjunction","crossroad","teleport","ghostchamber"];let i=0,s=0;const r=new Set,o=a=>{const c=(a%(Math.PI*2)+Math.PI*2)%(Math.PI*2)%(Math.PI/2);return c<.01||Math.abs(c-Math.PI/2)<.01};for(let a=0;a<n.length;a+=1){const l=n[a];if(!l.type||!t.includes(l.type))throw new Error(`Invalid or missing piece type at index ${a}: ${l.type}`);if(!Array.isArray(l.position)||l.position.length!==3)throw new Error(`Invalid position array at index ${a}. Must have 3 coordinates.`);const c=Math.round(l.position[0]/We)*We,u=Math.round(l.position[2]/We)*We;if(Math.abs(l.position[0]-c)>.1||Math.abs(l.position[1])>.1||Math.abs(l.position[2]-u)>.1)throw new Error(`Invalid position at index ${a}. Must be aligned to the grid (multiples of ${We}) at Y=0.`);const h=`${Math.round(l.position[0])},${Math.round(l.position[2])}`;if(r.has(h))throw new Error(`Duplicate tile position at index ${a}.`);if(r.add(h),typeof l.rotation!="number")throw new Error(`Invalid rotation at index ${a}. Must be a number.`);if(!o(l.rotation))throw new Error(`Invalid rotation at index ${a}. Must be a multiple of 90 degrees (PI/2).`);if(l.hasPacmanSpawn){if(i+=1,i>1)throw new Error("Multiple Pacman spawns detected. Only one is allowed.");if(typeof l.pacmanSpawnRotation=="number"&&!o(l.pacmanSpawnRotation))throw new Error(`Invalid Pacman spawn rotation at index ${a}. Must be a multiple of 90 degrees.`);if(l.hasPowerPellet)throw new Error(`Conflict at index ${a}: A tile cannot have both a Pacman spawn and a Power Pellet.`)}if(l.type==="ghostchamber"&&(s+=1,s>1))throw new Error("Multiple Ghost Chambers detected. Only one is allowed.")}if(e.requirePlayable){if(i!==1)throw new Error("Saved maps need exactly one Pacman spawn.");if(s!==1)throw new Error("Saved maps need exactly one Ghost Chamber.");const a=Yd(n);for(const l of a.tiles.values()){const c=l.type==="teleport"?Gt(["west"],l.rotation)[0]:null;for(const u of l.connectors)if(u!==c&&!l.exits.has(u)){const h=u.charAt(0).toUpperCase()+u.slice(1);throw new Error(`Open ${h} connection at (${l.position.x}, ${l.position.z}). Every pipe opening must connect to another piece.`)}}}}function Ef({markDirty:n=!1}={}){for(;Qe.children.length>0;)Qe.remove(Qe.children[0]);po(),xi(n)}function iS(n){const e=io(n.type);if(e.position.set(...n.position),e.rotation.y=n.rotation,e.userData={type:n.type,rotation:n.rotation,hasPowerPellet:n.hasPowerPellet||!1,hasPacmanSpawn:n.hasPacmanSpawn||!1,pacmanSpawnRotation:n.pacmanSpawnRotation||0},e.userData.hasPowerPellet){const t=so();t.name="powerPelletIndicator";let i=0,s=0;if(e.userData.type==="corner"){const r=3.57*(1-Math.SQRT1_2);i=r,s=-r}t.position.set(i,2.5,s),t.scale.set(.4,.4,.4),t.traverse(r=>{r.material&&(r.material=r.material.clone(),r.material.depthTest=!1,r.renderOrder=998)}),e.add(t)}if(e.userData.hasPacmanSpawn){const t=ys();t.name="pacmanSpawnIndicator";let i=0,s=0;if(e.userData.type==="corner"){const r=3.57*(1-Math.SQRT1_2);i=r,s=-r}t.position.set(i,2.5,s),t.scale.setScalar(.32),t.rotation.y=e.userData.pacmanSpawnRotation-e.rotation.y,e.add(t)}Qe.add(e)}function eu(n,e={}){Ef({markDirty:!1}),n.forEach(iS),xi(!!e.markDirty)}function sS(n){Ca({mode:"template",mapId:n.id,name:n.name,saveable:!1}),eu(n.source),bt("/editor")}function rS(n){Ca({mode:"saved",mapId:n.id,name:n.name,saveable:!0}),eu(n.source),bt("/editor")}function oS(){if(Fn.length>=ao){Qr({title:"No Free Slots",message:"All map slots are already occupied. Edit an existing map or export your work before replacing anything.",variant:"error"});return}Ca({mode:"new",mapId:null,name:"",saveable:!0}),Ef({markDirty:!1}),bt("/editor")}function aS(n,e){const t=Fn.findIndex(s=>s.id===On.mapId);let i=On.mapId;if(t>=0)Fn[t]={...Fn[t],name:e,source:n,updatedAt:Date.now()};else{if(Fn.length>=ao){Qr({title:"No Free Slots",message:"All map slots are already occupied. Edit an existing map or export your work before replacing anything.",variant:"error"});return}i=jM(),Fn.push({id:i,name:e,source:n,updatedAt:Date.now()})}JM(),as=i,Ca({mode:"saved",mapId:i,name:e,saveable:!0}),xi(!1),bt("/maps")}function lS(){if(!On.saveable){Qr({title:"Read Only Map",message:"Classic can be opened for inspection and export, but it cannot be saved over. Create a new map slot to save changes.",variant:"error"});return}const n=eS();try{Sf(n,{requirePlayable:!0})}catch(t){Qr({title:"Map Not Ready",message:t.message,variant:"error"});return}const e=On.name||`Custom ${String(Fn.length+1).padStart(2,"0")}`;tS(n,e)}function bf(){wn.clear(),Ht=[];const n=QM().source;n.forEach(o=>{const a=io(o.type);a.position.set(...o.position),a.rotation.y=o.rotation,a.userData={type:o.type,rotation:o.rotation,hasPowerPellet:o.hasPowerPellet||!1,hasPacmanSpawn:o.hasPacmanSpawn||!1,pacmanSpawnRotation:o.pacmanSpawnRotation||0},wn.add(a)});const e=n.map(o=>({type:o.type,position:o.position,rotation:o.rotation,hasPowerPellet:o.hasPowerPellet||!1,hasPacmanSpawn:o.hasPacmanSpawn||!1,pacmanSpawnRotation:o.pacmanSpawnRotation||0})),t=Yd(e);tf=t,Dt=ys(),Dt.scale.setScalar(.32),wn.add(Dt),$n=new $d(Dt,t,{entityType:"pacman"}),Dt.userData.controller=$n,Ht=TM().map(o=>KM(o,t)),fo(),xt=$n,hi="pacman",of();let i=null,s=null,r=null;ci=null;for(const o of t.tiles.values()){if(o.hasPacmanSpawn){i=o;const a=(o.pacmanSpawnRotation%(Math.PI*2)+Math.PI*2)%(Math.PI*2);Math.abs(a-0)<.1?s="south":Math.abs(a-Math.PI/2)<.1?s="east":Math.abs(a-Math.PI)<.1?s="north":Math.abs(a-Math.PI*1.5)<.1&&(s="west")}o.type==="ghostchamber"&&(r=o)}if(!i){const o=["straight","corner","tjunction","crossroad","teleport"];i=Array.from(t.tiles.values()).find(a=>o.includes(a.type)),i||(i=Array.from(t.tiles.values())[0])}if(i&&(ci={tile:i,direction:s,connector:null},$n.reset(ci.tile,ci.direction,ci.connector)),r){const o=Gt(["north"],r.rotation)[0];St(a=>{a.spawnState={tile:r,direction:o,connector:a.definition.spawnConnector}})}else St(i?o=>{o.spawnState={tile:i,direction:s,connector:null}}:o=>{o.spawnState=null});St(o=>{o.spawnState&&(o.controller.reset(o.spawnState.tile,o.spawnState.direction,o.spawnState.connector),jc(o))}),Zt.buildFromMap(t)}function wf(n=!0){!$n||Ht.length===0||!ci||(Dt?.resetDeathAnimation&&Dt.resetDeathAnimation(),$n.reset(ci.tile,ci.direction,ci.connector),St(e=>{e.spawnState&&(e.controller.reset(e.spawnState.tile,e.spawnState.direction,e.spawnState.connector),jc(e),e.respawnTimer=0,e.model.visible=!0,e.ai.reset(),e.powerState.eatenDuringCurrentPower=!1,e.powerState.recoveringFromEaten=!1)}),kn=!1,cr=!1,_e.isReversing=!1,_e.reversalTimer=0,_e.reverseSnapFramesRemaining=0,xt=rf(),n&&xt&&(_e.forward.copy(xt.getFollowDirection()).normalize(),_e.reverseHoldForward.copy(_e.forward),_e.target.copy(xt.getCameraTarget()),Ii(1,!0)))}function cS(){if(!Dt)return null;const n=dM*Dt.scale.x;return Ht.find(e=>{if(!e.model.visible||BM(e))return!1;const t=fM*e.model.scale.x,i=n+t;return Dt.position.distanceToSquared(e.model.position)<=i*i})||null}function ga(){return vi>0}function uS(){ga()||(fo(),vi=Oh,Dt?.playDeathAnimation&&Dt.playDeathAnimation(Oh),kn=!1,cr=!1,_e.isReversing=!1,_e.reversalTimer=0,_e.reverseSnapFramesRemaining=0)}function hS(){Fi=Math.max(0,Fi-1),_i=Fi===0,pr(),_i||wf(!0)}function dS(){Tn=!0,vi=0,pr()}function fS(){Fi=qc,_i=!1,Tn=!1,fr=0,vi=0,St(n=>{n.respawnTimer=0}),fo(),Zt.reset(),document.querySelector("#pellet-counter").textContent=Zt.getEatenCount(),pr(),co(),wf(!0)}function pS(){const n=Zc();vi=0,_i=!1,Tn=!1,fr=0,Fi=qc,fo(),bf(),St(e=>{e.ai.setEnabled(n),n&&Ra(e)}),document.querySelector("#pellet-counter").textContent=Zt.getEatenCount(),Kc(),cf(),pr(),co(),xt&&(_e.forward.copy(xt.getFollowDirection()).normalize(),_e.reverseHoldForward.copy(_e.forward),_e.target.copy(xt.getCameraTarget()),_e.isReversing=!1,_e.reversalTimer=0,_e.reverseSnapFramesRemaining=0,Ii(1,!0))}const mr=0,yi=96,Tf=xn();Tf.position.set(mr,3.5,yi);ht.add(Tf);const ls=ys();ls.position.set(mr,7.5,yi);ls.rotation.y=Math.PI/1.4+Math.PI/2+Math.PI/12;ht.add(ls);const Af=xn();Af.position.set(mr-24,3.5,yi);ht.add(Af);const Dn=ys();Dn.position.set(mr-24,7.5,yi);Dn.rotation.y=ls.rotation.y;ht.add(Dn);let Wh=-1/0;const mS=5,gS=1.45;let qh=!1,ks=0;const Rf=mr,Ss=yi+24,Cf=xn();Cf.position.set(Rf,3.5,Ss);ht.add(Cf);const Gr=so();Gr.position.set(Rf,7.5,Ss);ht.add(Gr);const Pf=12,Df=144,Lf=xn();Lf.position.set(Pf,3.5,Df);ht.add(Lf);const Hr=Xd();Hr.position.set(Pf,5.5,Df);ht.add(Hr);const gr=mr+24,Pa=gr+24,If=xn();If.position.set(gr,3.5,yi);ht.add(If);const js=zi(16711748);js.position.set(gr,4.8,yi);js.rotation.y=-Math.PI/4;ht.add(js);const Uf=xn();Uf.position.set(Pa,3.5,yi);ht.add(Uf);const Qs=zi(16729275);Qs.position.set(Pa,4.8,yi);Qs.rotation.y=-Math.PI/4;ht.add(Qs);const Nf=xn();Nf.position.set(gr,3.5,Ss);ht.add(Nf);const er=zi(52479);er.position.set(gr,4.8,Ss);er.rotation.y=-Math.PI/4;ht.add(er);const Ff=xn();Ff.position.set(Pa,3.5,Ss);ht.add(Ff);const tr=zi(16755200);tr.position.set(Pa,4.8,Ss);tr.rotation.y=-Math.PI/4;ht.add(tr);const Of=gr+12,Bf=Ss+24,kf=xn();kf.position.set(Of,3.5,Bf);ht.add(kf);const cs=zi(16777215);cs.position.set(Of,4.8,Bf);cs.rotation.y=-Math.PI/4;cs.setVulnerable("flashing");ht.add(cs);Ne.target.set(...zn.target);qe.position.set(...zn.pos);window.getCameraConfig=()=>{const n=qe.position,e=Ne.target;console.log("%c --- View Captured ---","color: #2462ff; font-weight: bold;"),console.log(`Position: [${n.x.toFixed(2)}, ${n.y.toFixed(2)}, ${n.z.toFixed(2)}]`),console.log(`Target: [${e.x.toFixed(2)}, ${e.y.toFixed(2)}, ${e.z.toFixed(2)}]`),console.log("----------------------")};let Gn=!1,eo=!1,us=!1,na=null,At="straight",rn=0,nt=null;const Xh=new Eg,_c=new ie,Hi=new bg(We*20,20,2384639,1385797);Hi.position.y=.06;Hi.visible=!1;ct.add(Hi);function vS(){if(Gn)return;Gn=!0;const n=document.querySelector("#mode-status"),e=document.querySelector("#btn-toggle-mode"),t=document.querySelector("#btn-toggle-game"),i=document.querySelector("#editor-ui"),s=document.querySelector("#editor-only-controls");vt.classList.add("editor-active"),vt.classList.remove("showroom-active"),vt.classList.remove("route-overlay-active"),n.textContent="Editor",e.textContent="Close Editor",i.classList.add("active"),s.style.display="flex",t.style.display="none",Hi.visible=!0,ht.visible=!1,Qe.visible=!0,wn.visible=!1,ct.fog.density=0,Ms.intensity=2.8,Wf(),Ne.enabled=!0,Ne.enableRotate=!0,Ne.maxPolarAngle=Math.PI/2,Ne.minDistance=5,qe.fov=ro,qe.updateProjectionMatrix(),qe.position.set(...da.pos),Ne.target.set(...da.target),Mf()}function _S(){if(!Gn)return;const n=ba;Gn=!1;const e=document.querySelector("#mode-status"),t=document.querySelector("#btn-toggle-mode"),i=document.querySelector("#btn-toggle-game"),s=document.querySelector("#editor-ui"),r=document.querySelector("#editor-only-controls");vt.classList.remove("editor-active"),e.textContent="Showcase",t.textContent="Open Editor",s.classList.remove("active"),r.style.display="none",i.style.display="block",Hi.visible=!1,ht.visible=!0,Qe.visible=!1,po(),eo&&su("3d"),Ne.maxPolarAngle=Math.PI/2.12,Ne.minDistance=18,ct.fog.density=.009,Ms.intensity=1.4,qe.fov=ro,qe.updateProjectionMatrix(),qe.position.set(...zn.pos),Ne.target.set(...zn.target),n&&vc("Editor closed without saving changes.")}function tu(n){vt.classList.toggle("dev-tools-active",n)}function Da(n){$s=!!n;const e=document.querySelector("#game-start-overlay");e&&(e.classList.toggle("active",$s),e.setAttribute("aria-hidden",$s?"false":"true"))}function xS(n={}){const e=!!n.dev,t=Number(n.ghostCount);en=!0,$s=!1,kn=!1,cr=!1,di=!!n.jumpscare,Number.isInteger(t)&&(Js=En.clamp(t,1,lo.length));const i=!e;Li=!0,vi=0,fi=0,ur=0,St(l=>{l.respawnTimer=0}),Fi=qc,_i=!1,Tn=!1,fr=0,vt.classList.add("game-active"),vt.classList.remove("showroom-active"),vt.classList.remove("route-overlay-active"),tu(e);const s=document.querySelector("#mode-status"),r=document.querySelector("#btn-toggle-game"),o=document.querySelector("#btn-toggle-mode"),a=document.querySelector("#game-only-controls");s.textContent="Game",r.textContent="End Game",o.style.display="none",a.style.display="flex",af(),lf(),cf(),pr(),co(),ht.visible=!1,Qe.visible=!1,wn.visible=!0,Hi.visible=!1,po(),ct.fog.density=.004,Ms.intensity=2.2,qe.fov=oM,qe.updateProjectionMatrix(),Ne.enabled=!1,Ne.enableRotate=!1,bf(),St(l=>{l.ai.setEnabled(i),i&&Ra(l)}),Kc(),_e.forward.copy(xt.getFollowDirection()),_e.reverseHoldForward.copy(_e.forward),_e.target.copy(xt.getCameraTarget()),_e.position.copy(qe.position),_e.isReversing=!1,_e.reversalTimer=0,_e.reverseSnapFramesRemaining=0,Ii(1,!0),Da(!e)}function yS(){if(!en)return;en=!1,Da(!1),kn=!1,cr=!1,di=!1,St(s=>s.ai.setEnabled(!1)),vi=0,St(s=>{s.respawnTimer=0}),fo(),_i=!1,Tn=!1,vt.classList.remove("game-active"),tu(!1);const n=document.querySelector("#mode-status"),e=document.querySelector("#btn-toggle-game"),t=document.querySelector("#btn-toggle-mode"),i=document.querySelector("#game-only-controls");n.textContent="Showcase",e.textContent="Start Game",t.style.display="",i.style.display="none",ht.visible=!0,Qe.visible=!1,wn.visible=!1,ct.fog.density=.009,Ms.intensity=1.4,qe.fov=ro,qe.updateProjectionMatrix(),Ne.enabled=!0,Ne.enableRotate=!0,Ne.maxPolarAngle=Math.PI/2.12,Ne.minDistance=18,qe.position.set(...zn.pos),Ne.target.set(...zn.target)}function Qi(n){const e=pa,t=ma,i=e/2,s=t/2,r=2*(e+t);if(n=n%r,n<0&&(n+=r),n<e)return{pos:new T(-i+n,0,-s),dir:new T(1,0,0)};if(n<e+t){const o=n-e;return{pos:new T(i,0,-s+o),dir:new T(0,0,1)}}else if(n<2*e+t){const o=n-(e+t);return{pos:new T(i-o,0,s),dir:new T(-1,0,0)}}else{const o=n-(2*e+t);return{pos:new T(-i,0,s-o),dir:new T(0,0,-1)}}}function MS(){const n=document.querySelector("#menu-3d-canvas");if(!n)return;const e=n.clientWidth||560,t=n.clientHeight||400;pn=new gd,pi=new ln(54,e/t,.1,100),pi.position.set(0,45,8),pi.up.set(0,1,0),pi.lookAt(0,-1,0),mn=new Bd({canvas:n,alpha:!0,antialias:!0}),mn.setPixelRatio(Math.min(window.devicePixelRatio,1.25)),mn.setSize(e,t,!1),mn.outputColorSpace=on,mn.toneMapping=Sc,mn.toneMappingExposure=1.05;const i=new yg(9022975,.8);pn.add(i);const s=new fc(16765466,2.2);s.position.set(5,15,5),pn.add(s);const r=new fc(3898623,1.6);r.position.set(-5,10,-5),pn.add(r),Ln=ys(),Ln.scale.setScalar(.45),pn.add(Ln),In=zi(8959),In.scale.setScalar(.42),In.setVulnerable(!0),pn.add(In),qn=zi(16746530),qn.scale.setScalar(.42),pn.add(qn);const o=3;fa=[];const a=u=>{const h=Xd();h.scale.setScalar(1.4);const p=Qi(u);h.position.copy(p.pos),pn.add(h),fa.push({mesh:h,dist:u,eaten:!1})},l=[pa,ma,pa,ma];let c=0;l.forEach((u,h)=>{const p=Math.max(1,Math.round(u/o));for(let d=0;d<=p;d+=1)h>0&&d===0||h===l.length-1&&d===p||a(c+u*d/p);c+=u}),ji=0}function SS(n,e){if(!pn||!Ln)return;ji+=e;const t=2*(pa+ma),i=ji*cM%t,s=Qi(i);Ln.position.copy(s.pos);const r=i+.15,o=Qi(r);if(Ln.lookAt(o.pos),Ln.userData&&Ln.userData.update&&Ln.userData.update(ji,e),In){const a=(i+30)%t,l=Qi(a);In.position.copy(l.pos);const c=a+.15,u=Qi(c);In.lookAt(u.pos),In.userData&&In.userData.update&&In.userData.update(ji)}if(qn){const a=(i-30+t)%t,l=Qi(a);qn.position.copy(l.pos);const c=a+.15,u=Qi(c);qn.lookAt(u.pos),qn.userData&&qn.userData.update&&qn.userData.update(ji)}fa.forEach(a=>{let l=i-a.dist;l<0&&(l+=t),a.mesh.position.distanceTo(Ln.position)<2.3&&(a.eaten||(a.eaten=!0,a.mesh.visible=!1)),l>33&&l<t-1.5&&a.eaten&&(a.eaten=!1,a.mesh.visible=!0),a.mesh.userData&&a.mesh.userData.update&&a.mesh.userData.update(ji)}),mn.render(pn,pi)}function ES(){if(!mn||!pi)return;const n=document.querySelector("#menu-3d-canvas");if(!n)return;const e=n.clientWidth,t=n.clientHeight;pi.aspect=e/t,pi.updateProjectionMatrix(),mn.setPixelRatio(Math.min(window.devicePixelRatio,1.25)),mn.setSize(e,t,!1)}function bS(n){const e=n.map(i=>i.position[0]),t=n.map(i=>i.position[2]);return{minX:Math.min(...e),maxX:Math.max(...e),minZ:Math.min(...t),maxZ:Math.max(...t)}}function wS(n,e,t,i,s,r){n.beginPath(),n.moveTo(e+r,t),n.lineTo(e+i-r,t),n.quadraticCurveTo(e+i,t,e+i,t+r),n.lineTo(e+i,t+s-r),n.quadraticCurveTo(e+i,t+s,e+i-r,t+s),n.lineTo(e+r,t+s),n.quadraticCurveTo(e,t+s,e,t+s-r),n.lineTo(e,t+r),n.quadraticCurveTo(e,t,e+r,t),n.closePath()}function TS(n,e,t,i){n.beginPath();for(let r=0;r<8;r+=1){const o=Math.PI/8+r*(Math.PI*2/8),a=e+Math.cos(o)*i,l=t+Math.sin(o)*i;r===0?n.moveTo(a,l):n.lineTo(a,l)}n.closePath()}function AS(n){const e=n.getContext("2d"),{width:t,height:i}=n;e.clearRect(0,0,t,i);const s=e.createLinearGradient(0,0,t,i);s.addColorStop(0,"#020614"),s.addColorStop(1,"#050b1d"),e.fillStyle=s,e.fillRect(0,0,t,i),e.save(),e.globalAlpha=.42,e.strokeStyle="rgba(51, 102, 255, 0.14)",e.lineWidth=1;for(let r=24;r<t;r+=28)e.beginPath(),e.moveTo(r,0),e.lineTo(r,i),e.stroke();for(let r=24;r<i;r+=28)e.beginPath(),e.moveTo(0,r),e.lineTo(t,r),e.stroke();e.restore(),e.save(),e.fillStyle="rgba(136, 178, 255, 0.22)",e.font="700 15px Trebuchet MS, sans-serif",e.letterSpacing="2px",e.textAlign="center",e.textBaseline="middle",e.fillText("EMPTY SLOT",t/2,i/2),e.restore()}function zf(n,e){if(!e){AS(n);return}const t=n.getContext("2d"),i=n.width,s=n.height,r=bS(e),o=Math.max(We,r.maxX-r.minX+We),a=Math.max(We,r.maxZ-r.minZ+We),l=22,c=Math.min((i-l*2)/o,(s-l*2)/a),u=(r.minX+r.maxX)/2,h=(r.minZ+r.maxZ)/2,p=(v,m)=>({x:i/2+(v-u)*c,y:s/2+(m-h)*c});t.clearRect(0,0,i,s);const d=t.createLinearGradient(0,0,i,s);d.addColorStop(0,"#020614"),d.addColorStop(1,"#050b1d"),t.fillStyle=d,t.fillRect(0,0,i,s),t.save(),t.globalAlpha=.5,t.strokeStyle="rgba(51, 102, 255, 0.16)",t.lineWidth=1;for(let v=24;v<i;v+=24)t.beginPath(),t.moveTo(v,0),t.lineTo(v,s),t.stroke();for(let v=24;v<s;v+=24)t.beginPath(),t.moveTo(0,v),t.lineTo(i,v),t.stroke();t.restore(),t.save(),e.forEach(v=>{const m=p(v.position[0],v.position[2]),f=We*c*(v.type==="ghostchamber"?.52:.46);TS(t,m.x,m.y,f),t.fillStyle=v.type==="ghostchamber"?"rgba(255, 68, 187, 0.22)":"rgba(24, 63, 155, 0.55)",t.shadowColor=v.type==="ghostchamber"?"rgba(255, 68, 187, 0.45)":"rgba(51, 102, 255, 0.45)",t.shadowBlur=12,t.fill(),t.lineWidth=2,t.strokeStyle=v.type==="ghostchamber"?"rgba(255, 68, 187, 0.55)":"rgba(51, 102, 255, 0.28)",t.stroke()}),t.restore();const g=[];e.forEach(v=>{if(v.type==="ghostchamber")return;const m={type:v.type,rotation:v.rotation,position:v.position},f=p(v.position[0],v.position[2]);(dr[v.type]||[]).forEach(y=>{const _=Gt([y],m.rotation)[0],A=Gi[_];if(!A)return;const R=p(v.position[0]+A.x*We*.48,v.position[2]+A.z*We*.48);g.push({from:f,to:R})})}),[{width:Math.max(22,We*c*.78),color:"rgba(0, 34, 255, 0.2)",blur:18},{width:Math.max(15,We*c*.54),color:"rgba(0, 75, 255, 0.72)",blur:12},{width:Math.max(8,We*c*.28),color:"#0b62ff",blur:4},{width:Math.max(3,We*c*.08),color:"rgba(120, 178, 255, 0.9)",blur:0}].forEach(v=>{t.save(),t.lineCap="round",t.lineJoin="round",t.shadowColor=v.color,t.shadowBlur=v.blur,t.strokeStyle=v.color,t.lineWidth=v.width,g.forEach(m=>{t.beginPath(),t.moveTo(m.from.x,m.from.y),t.lineTo(m.to.x,m.to.y),t.stroke()}),t.restore()}),t.save(),e.filter(v=>v.type==="ghostchamber").forEach(v=>{const m=p(v.position[0],v.position[2]),f=We*c*.68;wS(t,m.x-f/2,m.y-f/2,f,f,8),t.fillStyle="rgba(255, 68, 187, 0.24)",t.fill(),t.strokeStyle="rgba(255, 68, 187, 0.9)",t.lineWidth=2,t.stroke()}),e.forEach(v=>{const m=p(v.position[0],v.position[2]);v.hasPowerPellet&&(t.beginPath(),t.fillStyle="#ffaa00",t.shadowColor="rgba(255, 170, 0, 0.95)",t.shadowBlur=12,t.arc(m.x,m.y,4.5,0,Math.PI*2),t.fill()),v.hasPacmanSpawn&&(t.beginPath(),t.fillStyle="#ffd91f",t.shadowColor="rgba(255, 217, 31, 0.95)",t.shadowBlur=10,t.moveTo(m.x+7,m.y),t.arc(m.x,m.y,7,.3,Math.PI*1.7),t.closePath(),t.fill())}),t.restore()}function RS(){const n=document.querySelector("#map-picker-grid");if(!n)return;const e=xf(),t=[...e,...Array.from({length:Math.max(0,3-e.length)},(i,s)=>({id:`empty-${s}`,name:"Empty Slot",source:null,disabled:!0}))].slice(0,3);n.innerHTML=t.map(i=>`
    <button class="map-card${i.id===as?" selected":""}${i.disabled?" disabled":""}" data-map-id="${i.id}" ${i.disabled?"disabled":""}>
      <canvas class="map-thumbnail" width="320" height="320" aria-hidden="true"></canvas>
      <span class="map-card-name">${i.name}</span>
    </button>
  `).join(""),n.querySelectorAll(".map-card").forEach(i=>{const s=t.find(o=>o.id===i.dataset.mapId),r=i.querySelector("canvas");zf(r,s.source),!s.disabled&&(i.addEventListener("click",()=>{as=s.id,n.querySelectorAll(".map-card").forEach(o=>o.classList.toggle("selected",o===i))}),i.addEventListener("dblclick",()=>{bt("/game",{query:{map:as,dev:document.querySelector("#map-dev-toggle")?.checked?1:!1}})}))})}function CS(){const n=document.querySelector("#map-manager-grid");if(!n)return;const e=[...Wc.map(t=>({...t,action:"template",readonly:!0})),...Fn.map(t=>({...t,action:"edit"}))];for(Fn.length<ao&&e.push({id:"new",name:"New Map",action:"new",source:null});e.length<3;)e.push({id:`empty-${e.length}`,name:"Empty Slot",action:"empty",source:null,disabled:!0});n.innerHTML=e.slice(0,3).map(t=>t.action==="new"?`
        <button class="manager-create-card" data-action="new" type="button">
          <span class="manager-plus">+</span>
          <span class="manager-create-label">New Map</span>
        </button>
      `:`
      <button class="manager-map-card${t.disabled?" disabled":""}" data-map-id="${Vh(t.id)}" data-action="${t.action}" ${t.disabled?"disabled":""} type="button">
        <canvas class="map-thumbnail" width="320" height="320" aria-hidden="true"></canvas>
        <span class="map-card-name">${Vh(t.name)}</span>
        ${t.disabled?"":`
          <span class="manager-card-hover" aria-hidden="true">
            ${t.readonly?`
              <svg viewBox="0 0 24 24"><path d="M8 7V5.8a4 4 0 0 1 8 0V7"/><rect x="5" y="9" width="14" height="11" rx="2"/><path d="M12 13v3"/></svg>
            `:`
              <svg viewBox="0 0 24 24"><path d="M12 20h9"/><path d="m16.5 3.5 3 3L8 18l-4 1 1-4Z"/></svg>
            `}
          </span>
        `}
      </button>
    `).join(""),n.querySelectorAll(".manager-map-card").forEach(t=>{const i=e.find(r=>r.id===t.dataset.mapId),s=t.querySelector("canvas");zf(s,i?.source)})}function nu(){const n=document.querySelector("#map-ghost-count"),e=document.querySelector("#btn-ghost-count-minus"),t=document.querySelector("#btn-ghost-count-plus");n&&(n.textContent=Oi),e&&(e.disabled=Oi<=1),t&&(t.disabled=Oi>=lo.length)}function PS(){vt.classList.add("landing-active"),vt.classList.remove("showroom-active"),vt.classList.remove("route-overlay-active"),document.querySelector("#mode-status").textContent="Showcase",ht.visible=!0,Qe.visible=!1,wn.visible=!1,Hi.visible=!1,Ne.enabled=!0,Ne.enableRotate=!0,Ne.maxPolarAngle=Math.PI/2.12,Ne.minDistance=18,ct.fog.density=.009,Ms.intensity=1.4,qe.fov=ro,qe.updateProjectionMatrix(),qe.position.set(...zn.pos),Ne.target.set(...zn.target)}function DS(){vt.classList.remove("landing-active")}function iu(){vt.classList.remove("landing-active"),vt.classList.remove("route-overlay-active"),vt.classList.add("showroom-active"),document.querySelector("#mode-status").textContent="Showcase",ht.visible=!0,Qe.visible=!1,wn.visible=!1,Hi.visible=!1,Ne.enabled=!0,Ne.enableRotate=!0,Ne.maxPolarAngle=Math.PI/2.12,Ne.minDistance=18,ct.fog.density=.009,Ms.intensity=1.4,qe.fov=ro,qe.updateProjectionMatrix(),qe.position.set(...zn.pos),Ne.target.set(...zn.target)}function LS(){vt.classList.remove("showroom-active")}function IS(){iu(),vt.classList.add("route-overlay-active"),document.querySelector("#map-select-screen").classList.add("active"),RS(),nu(),vt.classList.remove("showroom-active")}function US(){vt.classList.remove("route-overlay-active"),document.querySelector("#map-select-screen").classList.remove("active")}function NS(){iu(),vt.classList.add("route-overlay-active"),document.querySelector("#map-manager-screen").classList.add("active"),CS(),vt.classList.remove("showroom-active")}function FS(){vt.classList.remove("route-overlay-active"),document.querySelector("#map-manager-screen").classList.remove("active")}function OS(n){return n==="arrowup"||n==="w"?"forward":n==="arrowright"||n==="d"?"right":n==="arrowdown"||n==="s"?"reverse":n==="arrowleft"||n==="a"?"left":null}function Gf(){kn||_e.isReversing||(_e.isReversing=!0,_e.reverseHoldForward.copy(_e.forward),_e.reversalTimer=.35)}function Ii(n,e=!1){if(!xt)return;const t=xt.getCameraTarget(),i=xt.getFollowDirection().multiplyScalar(kn?-1:1),s=kn!==cr;let r=!1,o=e||s;if(o)_e.isReversing=!1,_e.reversalTimer=0,_e.forward.copy(i).normalize();else{const p=En.clamp(_e.forward.dot(i),-1,1);if(_e.isReversing&&p>.45&&(_e.isReversing=!1,_e.reversalTimer=0,o=!0,_e.forward.copy(i).normalize()),_e.isReversing)_e.reversalTimer-=n,_e.reversalTimer<=0||!xt.isMoving?(_e.isReversing=!1,_e.forward.copy(i).normalize(),o=!0):r=!0;else{const d=uM*n,g=RM(_e.forward,i,d),v=1-Math.exp(-7.5*n);_e.forward.copy(g.lerp(i,v*.2).normalize())}}cr=kn;const a=kn||r,l=r?t.clone().addScaledVector(_e.reverseHoldForward,-_l).add(new T(0,xl,0)):a?kh(_l,_e.forward,!0).add(new T(0,xl,0)):kh(_l,_e.forward,!1).add(new T(0,xl,0)),c=t.clone().add(new T(0,Fh,0)),u=c.clone().sub(l).setY(0);u.lengthSq()>1e-4?u.normalize():u.copy(_e.forward);const h=a?t.clone().add(new T(0,Fh,0)):c.clone().addScaledVector(u,hM);if(o)_e.position.copy(l),_e.target.copy(h);else if(r)_e.position.copy(l),_e.target.copy(h);else if(a){const p=1-Math.exp(-7*n),d=1-Math.exp(-8.5*n);_e.position.lerp(l,p),_e.target.lerp(h,d)}else _e.position.copy(l),_e.target.copy(h);qe.position.copy(_e.position),Ne.target.copy(_e.target),qe.lookAt(Ne.target),_e.reverseSnapFramesRemaining>0&&(_e.reverseSnapFramesRemaining-=1)}function su(n){eo=n==="2d";const e=document.querySelector("#view-slider");document.querySelectorAll(".toggle-option").forEach(i=>{i.classList.toggle("active",i.dataset.view===n)}),eo?(e.classList.add("right"),qe.position.set(0,160,0),Ne.target.set(0,0,0),Ne.enableRotate=!1):(e.classList.remove("right"),qe.position.set(...da.pos),Ne.target.set(...da.target),Ne.enableRotate=!0)}const BS=document.querySelector("#command-deck"),Hf=document.querySelector("#zoom-slider");document.querySelector("#deck-header").addEventListener("click",()=>{BS.classList.toggle("collapsed")});Hf.addEventListener("input",n=>{const e=parseFloat(n.target.value),t=qe.position.clone().sub(Ne.target).normalize();qe.position.copy(Ne.target).add(t.multiplyScalar(e))});document.querySelector("#btn-toggle-mode").addEventListener("click",()=>{Gn&&ba?nS(()=>{bt("/showroom")}):bt(Gn?"/showroom":"/maps")});document.querySelector("#btn-toggle-game").addEventListener("click",()=>{bt(en?"/menu":"/play/maps")});document.querySelector("#btn-menu-start").addEventListener("click",()=>bt("/play/maps"));document.querySelector("#btn-menu-editor").addEventListener("click",()=>bt("/maps"));document.querySelector("#btn-menu-showroom").addEventListener("click",()=>bt("/showroom"));document.querySelector("#btn-showroom-menu").addEventListener("click",()=>bt("/menu"));document.querySelector("#btn-showroom-play").addEventListener("click",()=>bt("/play/maps"));document.querySelector("#btn-showroom-create").addEventListener("click",()=>bt("/maps"));document.querySelector("#btn-map-select-back").addEventListener("click",()=>bt("/menu"));document.querySelector("#btn-map-select-start").addEventListener("click",()=>{bt("/game",{query:{map:as,dev:document.querySelector("#map-dev-toggle")?.checked?1:!1,jumpscare:document.querySelector("#map-jumpscare-toggle")?.checked?1:!1,ghosts:Oi}})});document.querySelector("#btn-ghost-count-minus").addEventListener("click",()=>{Oi=Math.max(1,Oi-1),nu()});document.querySelector("#btn-ghost-count-plus").addEventListener("click",()=>{Oi=Math.min(lo.length,Oi+1),nu()});document.querySelector("#btn-map-manager-back").addEventListener("click",()=>bt("/menu"));document.querySelector("#map-manager-grid").addEventListener("click",n=>{const e=n.target.closest("[data-action]");if(!e)return;const t=e.dataset.action;if(t==="new"){oS();return}const i=yf(e.dataset.mapId);t==="template"?sS(i):t==="edit"&&rS(i)});document.querySelector("#btn-save-map").addEventListener("click",lS);document.querySelector("#btn-editor-save-cancel").addEventListener("click",qs);document.querySelector("#btn-editor-save-confirm").addEventListener("click",()=>{const n=document.querySelector("#editor-save-modal");if(n?.dataset.variant==="confirm-discard"){qs(),ta&&(ta(),ta=null);return}if(n?.dataset.variant!=="save"){qs();return}const e=document.querySelector("#editor-save-name-input"),t=document.querySelector("#editor-save-modal-error"),i=e?.value.trim()||"";if(!i){t&&(t.textContent="Map name is required."),e?.focus();return}const s=wa?.source;if(!s){qs(),Qr({title:"Save Failed",message:"The editor lost the pending map data. Open the save action again.",variant:"error"});return}qs(),aS(s,i)});document.querySelector("#editor-save-name-input").addEventListener("keydown",n=>{n.key==="Enter"&&(n.preventDefault(),document.querySelector("#btn-editor-save-confirm").click())});document.querySelector("#editor-save-modal").addEventListener("click",n=>{n.target===document.querySelector("#editor-save-modal")&&qs()});rM({"/menu":{enter:PS,exit:DS},"/showroom":{enter:iu,exit:LS},"/play/maps":{enter:IS,exit:US},"/game":{enter:n=>{n.query.map&&(as=n.query.map),xS({dev:n.query.dev==="1"||n.query.dev==="true",jumpscare:n.query.jumpscare==="1"||n.query.jumpscare==="true",ghostCount:n.query.ghosts})},update:n=>tu(n.query.dev==="1"||n.query.dev==="true"),exit:yS},"/maps":{enter:NS,exit:FS},"/editor":{enter:vS,exit:_S}},{fallbackRoute:"/menu"});document.querySelector("#btn-reset-pellets").addEventListener("click",()=>{Zt&&(Zt.reset(),Tn=!1,pr(),document.querySelector("#pellet-counter").textContent=Zt.getEatenCount())});document.querySelector("#btn-reset-run").addEventListener("click",()=>{en&&fS()});document.querySelector("#btn-game-start").addEventListener("click",()=>{Da(!1)});document.querySelector("#btn-cycle-ghost-count").addEventListener("click",n=>{n.target.blur(),en&&(Js=Js>=lo.length?1:Js+1,pS())});document.querySelector("#btn-swap-puppet").addEventListener("click",n=>{n.target.blur(),en&&(AM(),_e.forward.copy(xt.getFollowDirection()),_e.reverseHoldForward.copy(_e.forward),_e.target.copy(xt.getCameraTarget()),_e.isReversing=!1,_e.reversalTimer=0,_e.reverseSnapFramesRemaining=0,Ii(.016,!0))});document.querySelector("#btn-toggle-jumpscare").addEventListener("click",n=>{n.target.blur(),en&&(di=!di,af())});document.querySelector("#btn-toggle-collisions").addEventListener("click",n=>{n.target.blur(),en&&(Li=!Li,lf())});document.querySelector("#btn-toggle-ghost-ai").addEventListener("click",n=>{if(n.target.blur(),!en)return;const e=!Zc();St(t=>{t.ai.setEnabled(e)}),e&&St(t=>Ra(t)),Kc()});document.querySelectorAll(".toggle-option").forEach(n=>{n.addEventListener("click",()=>su(n.dataset.view))});function xc(n){const e=document.querySelectorAll(".piece-card, .item-card"),t=document.querySelector(".piece-card.active, .item-card.active");if(t&&t.classList.remove("active"),n===null){At=null,po();return}const i=Array.from(e).find(s=>s.dataset.type===n);i&&i.classList.add("active"),At=n,Wf()}document.querySelectorAll(".piece-card, .item-card").forEach(n=>{n.addEventListener("click",()=>{xc(n.dataset.type)})});function va(n,e){return n.map(t=>{let i;t==="north"?i={x:0,z:-1}:t==="south"?i={x:0,z:1}:t==="east"?i={x:1,z:0}:t==="west"&&(i={x:-1,z:0});const s=i.x*Math.cos(e)+i.z*Math.sin(e),r=-i.x*Math.sin(e)+i.z*Math.cos(e);return{x:Math.round(s),z:Math.round(r)}})}function Vf(n,e,t){if(!e)return!0;if(Qe.children.find(o=>o.position.x===e.x&&o.position.z===e.z))return!1;const s=Qe.children.filter(o=>o.userData.type==="ghostchamber");if(n==="ghostchamber"&&s.length>0)return!1;if(n==="ghostchamber"){for(const o of Qe.children)if(!Yh({position:e,rotation:t},o))return!1}else for(const o of s)if(!Yh(o,{position:e,rotation:t,type:n}))return!1;const r=Qe.children.filter(o=>o.userData.type==="teleport");for(const o of r)if(!Zh(o,{position:e,rotation:t,type:n}))return!1;if(n==="teleport"){for(const o of Qe.children)if(!Zh({position:e,rotation:t},o))return!1}return!0}function Yh(n,e){const t=Math.sqrt(Math.pow(n.position.x-e.position.x,2)+Math.pow(n.position.z-e.position.z,2));if(Math.abs(t-We)>1)return!0;const i=Math.round((e.position.x-n.position.x)/We),s=Math.round((e.position.z-n.position.z)/We),r=va(["north"],n.userData?n.userData.rotation:n.rotation)[0];if(i===r.x&&s===r.z)return!0;const o=e.userData?e.userData.type:e.type,a=e.userData?e.userData.rotation:e.rotation,l=va(dr[o],a);for(const c of l)if(c.x===-i&&c.z===-s)return!1;return!0}function Zh(n,e){const t=Math.sqrt(Math.pow(n.position.x-e.position.x,2)+Math.pow(n.position.z-e.position.z,2));if(Math.abs(t-We)>1)return!0;const i=Math.round((e.position.x-n.position.x)/We),s=Math.round((e.position.z-n.position.z)/We),r=va(["west"],n.userData?n.userData.rotation:n.rotation)[0];if(i===r.x&&s===r.z){const o=e.userData?e.userData.type:e.type,a=e.userData?e.userData.rotation:e.rotation,l=va(dr[o],a);for(const c of l)if(c.x===-i&&c.z===-s)return!1}return!0}function Wf(){po(),At!==null&&(At==="powerpellet"||At==="pacmanspawn"?(At==="powerpellet"?(nt=so(),nt.scale.set(.4,.4,.4)):(nt=ys(),nt.scale.setScalar(.32)),nt.traverse(n=>{n.isLight&&(n.intensity=0),n.material&&(n.material=n.material.clone(),At==="powerpellet"?(n.material.transparent=!0,n.material.opacity=.8,n.material.depthTest=!1,n.renderOrder=999):n.material.wireframe=!0,n.material.color&&(n.userData.originalColor=n.material.color.clone()),n.material.emissive&&(n.userData.originalEmissive=n.material.emissive.clone()),n.material.emissiveIntensity!==void 0&&(n.userData.originalEmissiveIntensity=n.material.emissiveIntensity))})):(nt=io(At),nt.rotation.y=rn,nt.traverse(n=>{n.material&&(n.material=n.material.clone(),n.material.transparent=!0,n.material.opacity=.4,n.material.color&&(n.userData.originalColor=n.material.color.clone()),n.material.emissive&&(n.userData.originalEmissive=n.material.emissive.clone()))})),ct.add(nt))}function po(){nt&&(ct.remove(nt),nt=null)}window.addEventListener("click",n=>{const e=n.target.closest("button");e&&e.blur(),n.target.tagName==="INPUT"&&n.target.blur()});window.addEventListener("mousemove",n=>{Gn&&(_c.x=n.clientX/window.innerWidth*2-1,_c.y=-(n.clientY/window.innerHeight)*2+1)});window.addEventListener("keydown",n=>{if(document.querySelector("#export-modal").classList.contains("active")||document.querySelector("#import-modal").classList.contains("active")||document.querySelector("#editor-save-modal").classList.contains("active"))return;const e=n.key.toLowerCase();if(e==="c"&&window.getCameraConfig(),en){if($s){e==="escape"?bt("/menu"):e==="enter"||e===" "?(n.preventDefault(),Da(!1)):n.preventDefault();return}if(_i||Tn){e==="escape"&&bt("/menu");return}if(ga()){e==="escape"&&bt("/menu");return}if(e===" "){n.preventDefault(),kn=!0;return}const s=OS(e);if(s){if(n.preventDefault(),qt(xt)?.ai.enabled||s==="reverse"&&n.repeat)return;const o=xt.setDesiredIntent(s);o?.started&&o.reverseIntent&&Gf()}if(e==="tab"){if(n.preventDefault(),!vt.classList.contains("dev-tools-active"))return;document.querySelector("#btn-swap-puppet")?.click();return}e==="escape"&&bt("/menu");return}if(!Gn)return;if(e==="tab"&&(n.preventDefault(),su(eo?"3d":"2d")),us){const s=We;if((e==="arrowup"||e==="w")&&(Qe.position.z-=s),(e==="arrowdown"||e==="s")&&(Qe.position.z+=s),(e==="arrowleft"||e==="a")&&(Qe.position.x-=s),(e==="arrowright"||e==="d")&&(Qe.position.x+=s),e==="enter"){const r=Qe.position.clone();Qe.children.forEach(o=>{o.position.add(r)}),Qe.position.set(0,0,0),r.lengthSq()>0&&xi(!0),_a()}e==="escape"&&(Qe.position.set(0,0,0),_a());return}const t={1:"straight",2:"corner",3:"tjunction",4:"crossroad",5:"teleport",6:"ghostchamber",p:"powerpellet",s:"pacmanspawn"};t[e]&&xc(t[e]),e==="v"&&xc(null),e===" "&&(n.preventDefault(),qf()),e==="r"&&(rn+=Math.PI/2,nt&&(nt.rotation.y=rn)),e==="x"&&kS();const i=eo?5.5:2.8;(e==="arrowup"||e==="w")&&(Ne.target.z-=i,qe.position.z-=i),(e==="arrowdown"||e==="s")&&(Ne.target.z+=i,qe.position.z+=i),(e==="arrowleft"||e==="a")&&(Ne.target.x-=i,qe.position.x-=i),(e==="arrowright"||e==="d")&&(Ne.target.x+=i,qe.position.x+=i)});window.addEventListener("keyup",n=>{en&&n.key===" "&&(kn=!1)});window.addEventListener("mousedown",n=>{!Gn||us||n.button!==0||document.querySelector("#export-modal").classList.contains("active")||document.querySelector("#import-modal").classList.contains("active")||document.querySelector("#editor-save-modal").classList.contains("active")||n.target.closest(".bottom-bar")||n.target.closest(".left-bar")||n.target.closest(".top-controls")||n.target.closest("#command-deck")||n.target.closest("#btn-save-map")||n.target.closest("#export-modal")||n.target.closest("#import-modal")||n.target.closest("#editor-save-modal")||qf()});function ru(){Xh.setFromCamera(_c,qe);const n=Xh.intersectObject(Qc);if(n.length>0){const e=n[0].point;return{x:Math.round(e.x/We)*We,z:Math.round(e.z/We)*We}}return null}function qf(){if(At===null)return;const n=ru();if(!n)return;const e=Qe.children.find(i=>i.position.x===n.x&&i.position.z===n.z);if(At==="powerpellet"||At==="pacmanspawn"){const i=["straight","corner","tjunction","crossroad"];if(At==="pacmanspawn"&&i.push("teleport"),!e||!i.includes(e.userData.type))return;if(At==="powerpellet"){if(!e.userData.hasPowerPellet&&e.userData.hasPacmanSpawn){e.userData.hasPacmanSpawn=!1;const r=e.getObjectByName("pacmanSpawnIndicator");r&&e.remove(r)}e.userData.hasPowerPellet=!e.userData.hasPowerPellet;let s=e.getObjectByName("powerPelletIndicator");if(e.userData.hasPowerPellet){if(!s){s=so(),s.name="powerPelletIndicator";let r=0,o=0;if(e.userData.type==="corner"){const a=3.57*(1-Math.SQRT1_2);r=a,o=-a}s.position.set(r,2.5,o),s.scale.set(.4,.4,.4),s.traverse(a=>{a.material&&(a.material=a.material.clone(),a.material.depthTest=!1,a.renderOrder=998)}),e.add(s)}}else s&&e.remove(s)}else{if(!e.userData.hasPacmanSpawn&&e.userData.hasPowerPellet){e.userData.hasPowerPellet=!1;const s=e.getObjectByName("powerPelletIndicator");s&&e.remove(s)}if(e.userData.hasPacmanSpawn){const s=a=>(a%(Math.PI*2)+Math.PI*2)%(Math.PI*2),r=s(rn),o=s(e.userData.pacmanSpawnRotation);if(Math.abs(r-o)<.01){e.userData.hasPacmanSpawn=!1;const a=e.getObjectByName("pacmanSpawnIndicator");a&&e.remove(a)}else{e.userData.pacmanSpawnRotation=rn;const a=e.getObjectByName("pacmanSpawnIndicator");a&&(a.rotation.y=rn-e.rotation.y)}}else{Qe.children.forEach(a=>{if(a.userData.hasPacmanSpawn){a.userData.hasPacmanSpawn=!1;const l=a.getObjectByName("pacmanSpawnIndicator");l&&a.remove(l)}}),e.userData.hasPacmanSpawn=!0,e.userData.pacmanSpawnRotation=rn;const s=ys();s.name="pacmanSpawnIndicator";let r=0,o=0;if(e.userData.type==="corner"){const a=3.57*(1-Math.SQRT1_2);r=a,o=-a}s.position.set(r,2.5,o),s.scale.setScalar(.32),s.rotation.y=rn-e.rotation.y,e.add(s)}}xi(!0);return}if(e||!Vf(At,n,rn))return;const t=io(At);t.position.set(n.x,0,n.z),t.rotation.y=rn,t.userData={type:At,rotation:rn},Qe.add(t),xi(!0)}function kS(){const n=ru();if(!n)return;const e=Qe.children.find(t=>t.position.x===n.x&&t.position.z===n.z);e&&(Qe.remove(e),xi(!0))}document.querySelector("#btn-export").addEventListener("click",n=>{n.target.blur(),document.querySelector("#export-modal").classList.add("active")});document.querySelector("#btn-modal-close").addEventListener("click",()=>{document.querySelector("#export-modal").classList.remove("active")});document.querySelector("#export-modal").addEventListener("click",n=>{n.target===document.querySelector("#export-modal")&&document.querySelector("#export-modal").classList.remove("active")});document.querySelector("#btn-modal-copy").addEventListener("click",()=>{const n=Qe.children.map(t=>({type:t.userData.type,position:[t.position.x,t.position.y,t.position.z],rotation:t.userData.rotation,hasPowerPellet:t.userData.hasPowerPellet||!1,hasPacmanSpawn:t.userData.hasPacmanSpawn||!1,pacmanSpawnRotation:t.userData.pacmanSpawnRotation||0})),e=JSON.stringify(n,null,2);navigator.clipboard.writeText(e).then(()=>{const t=document.querySelector("#btn-modal-copy"),i=t.textContent;t.textContent="Copied!",setTimeout(()=>{t.textContent=i},2e3)}).catch(t=>{alert("Failed to copy to clipboard. Check console."),console.error("Could not copy text: ",t)})});document.querySelector("#btn-modal-download").addEventListener("click",()=>{const n=Qe.children.map(r=>({type:r.userData.type,position:[r.position.x,r.position.y,r.position.z],rotation:r.userData.rotation,hasPowerPellet:r.userData.hasPowerPellet||!1,hasPacmanSpawn:r.userData.hasPacmanSpawn||!1,pacmanSpawnRotation:r.userData.pacmanSpawnRotation||0})),e=JSON.stringify(n,null,2),t=new Blob([e],{type:"application/json"}),i=URL.createObjectURL(t),s=document.createElement("a");s.href=i,s.download="maze.json",document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(i)});document.querySelector("#btn-import").addEventListener("click",n=>{n.target.blur(),document.querySelector("#import-textarea").value="",document.querySelector("#import-file").value="",document.querySelector("#import-file-zone").classList.remove("has-file"),document.querySelector("#import-file-name").textContent="Import From File",document.querySelector("#import-modal").classList.add("active")});document.querySelector("#btn-modal-import-close").addEventListener("click",()=>{document.querySelector("#import-modal").classList.remove("active")});document.querySelector("#import-modal").addEventListener("click",n=>{n.target===document.querySelector("#import-modal")&&document.querySelector("#import-modal").classList.remove("active")});document.querySelector("#import-file").addEventListener("change",n=>{const e=n.target.files[0],t=document.querySelector("#import-file-zone"),i=document.querySelector("#import-file-name");if(!e){t.classList.remove("has-file"),i.textContent="Import From File";return}t.classList.add("has-file"),i.textContent=e.name;const s=new FileReader;s.onload=r=>{document.querySelector("#import-textarea").value=r.target.result},s.readAsText(e)});document.querySelector("#btn-modal-import").addEventListener("click",()=>{const n=document.querySelector("#import-textarea").value.trim();if(!n){alert("Please paste JSON or select a file first.");return}try{const e=JSON.parse(n);Sf(e),eu(e,{markDirty:!0}),document.querySelector("#import-modal").classList.remove("active");const t=document.querySelector("#btn-modal-import"),i=t.textContent;t.textContent="Success!",t.style.background="#00ff88",t.style.color="#000",setTimeout(()=>{t.textContent=i,t.style.background="",t.style.color=""},1500)}catch(e){alert(`Import failed: ${e.message}`),console.error("Import validation error:",e)}});document.querySelector("#btn-shift-map").addEventListener("click",()=>{if(!Gn)return;us=!us;const n=document.querySelector("#btn-shift-map"),e=document.querySelector("#btn-apply-shift");n.blur();const t=document.querySelector(".bottom-bar"),i=document.querySelector("#hotkey-list"),s=document.querySelector(".segmented-toggle"),r=document.querySelector("#zoom-slider").parentElement,o=document.querySelector("#btn-export").parentElement,a=document.querySelector("#btn-save-map");us?(n.textContent="Cancel",n.style.background="rgba(255, 68, 68, 0.2)",n.style.color="#ff4444",n.style.borderColor="rgba(255, 68, 68, 0.3)",e&&(e.style.display="block"),t&&(t.style.display="none"),s&&(s.style.display="none"),r&&(r.style.display="none"),o&&(o.style.display="none"),a&&(a.style.display="none"),i&&(i.innerHTML=`
        <div class="hotkey-item"><span>Move</span> <span class="hotkey-key">Arrows / WASD</span></div>
        <div class="hotkey-item"><span>Apply</span> <span class="hotkey-key" style="background: rgba(0, 255, 136, 0.2); color: #00ff88;">Enter</span></div>
        <div class="hotkey-item"><span>Cancel</span> <span class="hotkey-key" style="background: rgba(255, 68, 68, 0.2); color: #ff4444;">Esc</span></div>
      `),na={pos:qe.position.clone(),target:Ne.target.clone()},Ne.target.set(0,0,0),qe.position.set(0,300,0),Ne.update(),nt&&(nt.visible=!1)):(Qe.position.set(0,0,0),_a())});document.querySelector("#btn-apply-shift").addEventListener("click",()=>{if(!us)return;const n=Qe.position.clone();Qe.children.forEach(e=>{e.position.add(n)}),Qe.position.set(0,0,0),n.lengthSq()>0&&xi(!0),_a()});function _a(){us=!1;const n=document.querySelector("#btn-shift-map");n.textContent="Shift Map",n.classList.remove("btn-primary"),n.style.background="",n.style.color="",n.style.borderColor="";const e=document.querySelector("#btn-apply-shift");e&&(e.style.display="none");const t=document.querySelector(".bottom-bar"),i=document.querySelector("#hotkey-list"),s=document.querySelector(".segmented-toggle"),r=document.querySelector("#zoom-slider").parentElement,o=document.querySelector("#btn-export").parentElement,a=document.querySelector("#btn-save-map");t&&(t.style.display="flex"),s&&(s.style.display="flex"),r&&(r.style.display="flex"),o&&(o.style.display="flex"),a&&(a.style.display=""),i&&(i.innerHTML=`
      <div class="hotkey-item"><span>Free Mode</span> <span class="hotkey-key">V</span></div>
      <div class="hotkey-item"><span>Place</span> <span class="hotkey-key">Click / Space</span></div>
      <div class="hotkey-item"><span>Rotate</span> <span class="hotkey-key">R</span></div>
      <div class="hotkey-item"><span>Delete</span> <span class="hotkey-key">X</span></div>
      <div class="hotkey-item"><span>Pan</span> <span class="hotkey-key">WASD / Arrows</span></div>
      <div class="hotkey-item"><span>View</span> <span class="hotkey-key">Tab</span></div>
    `),na&&(qe.position.copy(na.pos),Ne.target.copy(na.target),Ne.update()),nt&&(nt.visible=!0)}const Xf=zS();ct.add(Xf);const Yf=[];ht.traverse(n=>{n.userData.pulse&&Yf.push(n)});const Kh=new Sg;function zS(){const n=[];for(let i=0;i<120;i+=1){const s=18+Math.random()*68,r=Math.random()*Math.PI*2,o=1.5+Math.random()*18;n.push(Math.cos(r)*s,o,Math.sin(r)*s)}const t=new Lt;return t.setAttribute("position",new et(n,3)),new Fm(t,new _d({color:10929919,size:.18,transparent:!0,opacity:.36,sizeAttenuation:!0}))}function GS(n){Yf.forEach(e=>{const{base:t,amplitude:i,speed:s,phase:r}=e.userData.pulse;e.material.emissiveIntensity=t+Math.sin(n*s+r)*i})}function yc(){const n=Math.min(Kh.getDelta(),.05),e=Kh.elapsedTime;if(GS(e),ls&&ls.userData.update&&ls.userData.update(e,n),Dn&&Dn.userData.update&&(ks>0&&(ks=Math.max(0,ks-n),ks===0&&Dn.resetDeathAnimation()),ks===0&&!Dn.isDeathAnimationActive?.()&&e-Wh>=mS&&(Dn.playDeathAnimation(gS),Wh=e),Dn.userData.update(e,n),qh&&!Dn.isDeathAnimationActive?.()&&(ks=.85),qh=Dn.isDeathAnimationActive?.()||!1),js&&js.userData.update&&js.userData.update(e,n),Qs&&Qs.userData.update&&Qs.userData.update(e),er&&er.userData.update&&er.userData.update(e),tr&&tr.userData.update&&tr.userData.update(e),cs&&cs.userData.update&&cs.userData.update(e),Gr&&Gr.userData.update&&Gr.userData.update(e),Hr&&Hr.userData.update&&Hr.userData.update(e),en&&xt)if($s)Dt?.userData.update&&Dt.userData.update(e,n),St(i=>{i.model.visible&&i.model.userData.update&&i.model.userData.update(e)}),Zt.update(e),Ii(n,!1);else if(_i||Tn)Dt?.userData.update&&Dt.userData.update(e,n),St(i=>{i.model.visible&&i.model.userData.update&&i.model.userData.update(e)}),Zt.update(e),yl(n),Ml(n),Ii(n,!1);else if(ga())vi=Math.max(0,vi-n),Dt?.userData.update&&Dt.userData.update(e,n),St(i=>{i.model.visible&&i.model.userData.update&&i.model.userData.update(e)}),Zt.update(e),yl(n),Ml(n),Ii(n,!1),ga()||hS();else{$n&&$n.update(n,e),kM(n),WM(),St(l=>{ti(l)?l.model.visible&&l.model.userData.update&&l.model.userData.update(e):l.controller.update(n,e)}),Ml(n);let i=!1,s=xt.consumeStartedIntent();for(;s;)s==="reverse"?Gf():s==="reverse_instant"&&(_e.isReversing=!1,_e.reversalTimer=0,_e.forward.copy(xt.getFollowDirection()).normalize(),i=!0),s=xt.consumeStartedIntent();(hi==="pacman"?Ht.map(l=>l.controller):[$n,...Ht.map(l=>l.controller).filter(l=>l!==xt)]).filter(Boolean).forEach(l=>{for(;l.consumeStartedIntent(););}),Ii(n,i),Zt.update(e),yl(n);const o=Zt.checkCollisions(Dt.position);o.length>0&&(DM(o),GM(o)&&zM(),document.querySelector("#pellet-counter").textContent=Zt.getEatenCount(),Zt.getTotalCount()>0&&Zt.getEatenCount()>=Zt.getTotalCount()&&dS());const a=Li&&!Tn?cS():null;a&&(uo(a)?VM(a):uS())}if(Gn&&(Hf.value=qe.position.distanceTo(Ne.target),Qe.children.forEach(i=>{const s=i.getObjectByName("powerPelletIndicator");s&&s.userData.update&&s.userData.update(e);const r=i.getObjectByName("pacmanSpawnIndicator");r&&r.userData.update&&r.userData.update(e)}),nt)){const i=ru();if(i)if(At==="powerpellet"||At==="pacmanspawn"){const s=Qe.children.find(o=>o.position.x===i.x&&o.position.z===i.z),r=["straight","corner","tjunction","crossroad"];if(At==="pacmanspawn"&&r.push("teleport"),s&&r.includes(s.userData.type)){let o=i.x,a=i.z;if(s.userData.type==="corner"){const l=3.57*(1-Math.SQRT1_2),c=s.userData.rotation;o+=l*Math.cos(c)+-l*Math.sin(c),a+=-l*Math.sin(c)+-l*Math.cos(c)}nt.position.set(o,2.5,a),nt.visible=!0,At==="pacmanspawn"&&(nt.rotation.y=rn),nt.traverse(l=>{l.material&&l.userData.originalColor&&(At==="pacmanspawn"?(l.material.color.set(65450),l.material.emissive&&(l.material.emissive.set(65450),l.material.emissiveIntensity=1)):(l.material.color.copy(l.userData.originalColor),l.material.emissive&&(l.material.emissive.copy(l.userData.originalEmissive),l.userData.originalEmissiveIntensity!==void 0&&(l.material.emissiveIntensity=l.userData.originalEmissiveIntensity))))}),nt.userData.update&&nt.userData.update(e)}else nt.position.set(i.x,2.5,i.z),nt.visible=!0,At==="pacmanspawn"&&(nt.rotation.y=rn),nt.traverse(o=>{o.material&&o.userData.originalColor&&(o.material.color.set(16711680),o.material.emissive&&(o.material.emissive.set(16711680),o.material.emissiveIntensity=2))}),nt.userData.update&&nt.userData.update(e)}else{nt.position.set(i.x,0,i.z),nt.visible=!0;const s=Vf(At,i,rn);nt.traverse(r=>{r.material&&r.userData.originalColor&&(s?(r.material.color.copy(r.userData.originalColor),r.material.emissive&&r.material.emissive.copy(r.userData.originalEmissive)):(r.material.color.set(16711680),r.material.emissive&&r.material.emissive.set(11141120)))})}else nt.visible=!1}if(vt.classList.contains("landing-active")){pn||MS(),SS(e,n),requestAnimationFrame(yc);return}else pn&&(mn&&mn.dispose(),pn=null,pi=null,mn=null,Ln=null,In=null,qn=null,fa=[]);Xf.rotation.y=e*.01,en||Ne.update(),ZM(),requestAnimationFrame(yc)}yc();window.addEventListener("resize",()=>{qe.aspect=window.innerWidth/window.innerHeight,qe.updateProjectionMatrix(),Wt.setPixelRatio(Math.min(window.devicePixelRatio,1.25)),Wt.setSize(window.innerWidth,window.innerHeight),ES()});
