(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Dl="180",gs={ROTATE:0,DOLLY:1,PAN:2},fs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wd=0,dc=1,Td=2,Hh=1,bd=2,Wn=3,mi=0,Qe=1,Le=2,ui=0,Li=1,gi=2,fc=3,pc=4,Ad=5,Ai=100,Rd=101,Cd=102,Pd=103,Dd=104,Ld=200,Id=201,Ud=202,Nd=203,Na=204,Oa=205,Od=206,Fd=207,Bd=208,zd=209,kd=210,Hd=211,Gd=212,Vd=213,Wd=214,Fa=0,Ba=1,za=2,Rs=3,ka=4,Ha=5,Ga=6,Va=7,Gh=0,Xd=1,qd=2,di=0,Yd=1,Zd=2,Kd=3,Vh=4,Jd=5,$d=6,jd=7,Wh=300,Cs=301,Ps=302,Wa=303,Xa=304,Oo=306,qa=1e3,Pi=1001,Ya=1002,hn=1003,Qd=1004,zr=1005,Dn=1006,Yo=1007,Di=1008,Nn=1009,Xh=1010,qh=1011,mr=1012,Ll=1013,Oi=1014,Ln=1015,Ar=1016,Il=1017,Ul=1018,gr=1020,Yh=35902,Zh=35899,Kh=1021,Jh=1022,Tn=1023,_r=1026,vr=1027,Nl=1028,Ol=1029,$h=1030,Fl=1031,Bl=1033,vo=33776,xo=33777,yo=33778,Mo=33779,Za=35840,Ka=35841,Ja=35842,$a=35843,ja=36196,Qa=37492,tl=37496,el=37808,nl=37809,il=37810,sl=37811,rl=37812,ol=37813,al=37814,ll=37815,cl=37816,hl=37817,ul=37818,dl=37819,fl=37820,pl=37821,ml=36492,gl=36494,_l=36495,vl=36283,xl=36284,yl=36285,Ml=36286,tf=3200,ef=3201,jh=0,nf=1,li="",rn="srgb",Ds="srgb-linear",To="linear",de="srgb",$i=7680,mc=519,sf=512,rf=513,of=514,Qh=515,af=516,lf=517,cf=518,hf=519,gc=35044,uf=35048,_c="300 es",In=2e3,bo=2001;class Vi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vc=1234567;const ar=Math.PI/180,xr=180/Math.PI;function Wi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function Xt(i,t,e){return Math.max(t,Math.min(e,i))}function zl(i,t){return(i%t+t)%t}function df(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ff(i,t,e){return i!==t?(e-i)/(t-i):0}function lr(i,t,e){return(1-e)*i+e*t}function pf(i,t,e,n){return lr(i,t,1-Math.exp(-e*n))}function mf(i,t=1){return t-Math.abs(zl(i,t*2)-t)}function gf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function _f(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function vf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function xf(i,t){return i+Math.random()*(t-i)}function yf(i){return i*(.5-Math.random())}function Mf(i){i!==void 0&&(vc=i);let t=vc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Sf(i){return i*ar}function Ef(i){return i*xr}function wf(i){return(i&i-1)===0&&i!==0}function Tf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function bf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Af(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ds(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function We(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Fi={DEG2RAD:ar,RAD2DEG:xr,generateUUID:Wi,clamp:Xt,euclideanModulo:zl,mapLinear:df,inverseLerp:ff,lerp:lr,damp:pf,pingpong:mf,smoothstep:gf,smootherstep:_f,randInt:vf,randFloat:xf,randFloatSpread:yf,seededRandom:Mf,degToRad:Sf,radToDeg:Ef,isPowerOfTwo:wf,ceilPowerOfTwo:Tf,floorPowerOfTwo:bf,setQuaternionFromProperEuler:Af,normalize:We,denormalize:ds};class it{constructor(t=0,e=0){it.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==d||c!==f||h!==g){let m=1-a;const p=l*d+c*f+h*g+u*v,E=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const b=Math.sqrt(M),R=Math.atan2(b,p*E);m=Math.sin(m*R)/b,a=Math.sin(a*R)/b}const _=a*E;if(l=l*m+d*_,c=c*m+f*_,h=h*m+g*_,u=u*m+v*_,m===1-a){const b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,n=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zo.copy(this).projectOnVector(t),this.sub(Zo)}reflect(t){return this.sub(Zo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zo=new A,xc=new Bi;class Wt{constructor(t,e,n,s,r,o,a,l,c){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],E=s[1],M=s[4],_=s[7],b=s[2],R=s[5],C=s[8];return r[0]=o*v+a*E+l*b,r[3]=o*m+a*M+l*R,r[6]=o*p+a*_+l*C,r[1]=c*v+h*E+u*b,r[4]=c*m+h*M+u*R,r[7]=c*p+h*_+u*C,r[2]=d*v+f*E+g*b,r[5]=d*m+f*M+g*R,r[8]=d*p+f*_+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ko.makeScale(t,e)),this}rotate(t){return this.premultiply(Ko.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ko.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ko=new Wt;function tu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ao(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Rf(){const i=Ao("canvas");return i.style.display="block",i}const yc={};function yr(i){i in yc||(yc[i]=!0,console.warn(i))}function Cf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Mc=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sc=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pf(){const i={enabled:!0,workingColorSpace:Ds,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===de&&(s.r=Jn(s.r),s.g=Jn(s.g),s.b=Jn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===de&&(s.r=_s(s.r),s.g=_s(s.g),s.b=_s(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===li?To:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return yr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return yr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ds]:{primaries:t,whitePoint:n,transfer:To,toXYZ:Mc,fromXYZ:Sc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:t,whitePoint:n,transfer:de,toXYZ:Mc,fromXYZ:Sc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),i}const se=Pf();function Jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ji;class Df{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ji===void 0&&(ji=Ao("canvas")),ji.width=t.width,ji.height=t.height;const s=ji.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ji}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ao("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Jn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Jn(e[n]/255)*255):e[n]=Jn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Lf=0;class kl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=Wi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Jo(s[o].image)):r.push(Jo(s[o]))}else r=Jo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Jo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Df.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let If=0;const $o=new A;class Ye extends Vi{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,n=Pi,s=Pi,r=Dn,o=Di,a=Tn,l=Nn,c=Ye.DEFAULT_ANISOTROPY,h=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=Wi(),this.name="",this.source=new kl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize($o).x}get height(){return this.source.getSize($o).y}get depth(){return this.source.getSize($o).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qa:t.x=t.x-Math.floor(t.x);break;case Pi:t.x=t.x<0?0:1;break;case Ya:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qa:t.y=t.y-Math.floor(t.y);break;case Pi:t.y=t.y<0?0:1;break;case Ya:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=Wh;Ye.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,n=0,s=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,_=(f+1)/2,b=(p+1)/2,R=(h+d)/4,C=(u+v)/4,L=(g+m)/4;return M>_&&M>b?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=R/n,r=C/n):_>b?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=R/s,r=L/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=C/r,s=L/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-v)/E,this.z=(d-h)/E,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this.w=Xt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this.w=Xt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Uf extends Vi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Ye(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Dn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new kl(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends Uf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class eu extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nf extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xi{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,xn):xn.fromBufferAttribute(r,o),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),kr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),kr.copy(n.boundingBox)),kr.applyMatrix4(t.matrixWorld),this.union(kr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vs),Hr.subVectors(this.max,Vs),Qi.subVectors(t.a,Vs),ts.subVectors(t.b,Vs),es.subVectors(t.c,Vs),ti.subVectors(ts,Qi),ei.subVectors(es,ts),yi.subVectors(Qi,es);let e=[0,-ti.z,ti.y,0,-ei.z,ei.y,0,-yi.z,yi.y,ti.z,0,-ti.x,ei.z,0,-ei.x,yi.z,0,-yi.x,-ti.y,ti.x,0,-ei.y,ei.x,0,-yi.y,yi.x,0];return!jo(e,Qi,ts,es,Hr)||(e=[1,0,0,0,1,0,0,0,1],!jo(e,Qi,ts,es,Hr))?!1:(Gr.crossVectors(ti,ei),e=[Gr.x,Gr.y,Gr.z],jo(e,Qi,ts,es,Hr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const zn=[new A,new A,new A,new A,new A,new A,new A,new A],xn=new A,kr=new Xi,Qi=new A,ts=new A,es=new A,ti=new A,ei=new A,yi=new A,Vs=new A,Hr=new A,Gr=new A,Mi=new A;function jo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Mi.fromArray(i,r);const a=s.x*Math.abs(Mi.x)+s.y*Math.abs(Mi.y)+s.z*Math.abs(Mi.z),l=t.dot(Mi),c=e.dot(Mi),h=n.dot(Mi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Of=new Xi,Ws=new A,Qo=new A;class qi{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Of.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ws.subVectors(t,this.center);const e=Ws.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ws,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ws.copy(t.center).add(Qo)),this.expandByPoint(Ws.copy(t.center).sub(Qo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const kn=new A,ta=new A,Vr=new A,ni=new A,ea=new A,Wr=new A,na=new A;class Rr{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(kn.copy(this.origin).addScaledVector(this.direction,e),kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ta.copy(t).add(e).multiplyScalar(.5),Vr.copy(e).sub(t).normalize(),ni.copy(this.origin).sub(ta);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Vr),a=ni.dot(this.direction),l=-ni.dot(Vr),c=ni.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ta).addScaledVector(Vr,d),f}intersectSphere(t,e){kn.subVectors(t.center,this.origin);const n=kn.dot(this.direction),s=kn.dot(kn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,kn)!==null}intersectTriangle(t,e,n,s,r){ea.subVectors(e,t),Wr.subVectors(n,t),na.crossVectors(ea,Wr);let o=this.direction.dot(na),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ni.subVectors(this.origin,t);const l=a*this.direction.dot(Wr.crossVectors(ni,Wr));if(l<0)return null;const c=a*this.direction.dot(ea.cross(ni));if(c<0||l+c>o)return null;const h=-a*ni.dot(na);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,g,v,m){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,v,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ns.setFromMatrixColumn(t,0).length(),r=1/ns.setFromMatrixColumn(t,1).length(),o=1/ns.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d+v*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d-v*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ff,t,Bf)}lookAt(t,e,n){const s=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),ii.crossVectors(n,nn),ii.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),ii.crossVectors(n,nn)),ii.normalize(),Xr.crossVectors(nn,ii),s[0]=ii.x,s[4]=Xr.x,s[8]=nn.x,s[1]=ii.y,s[5]=Xr.y,s[9]=nn.y,s[2]=ii.z,s[6]=Xr.z,s[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],E=n[3],M=n[7],_=n[11],b=n[15],R=s[0],C=s[4],L=s[8],S=s[12],y=s[1],D=s[5],N=s[9],B=s[13],W=s[2],V=s[6],q=s[10],J=s[14],X=s[3],ut=s[7],mt=s[11],yt=s[15];return r[0]=o*R+a*y+l*W+c*X,r[4]=o*C+a*D+l*V+c*ut,r[8]=o*L+a*N+l*q+c*mt,r[12]=o*S+a*B+l*J+c*yt,r[1]=h*R+u*y+d*W+f*X,r[5]=h*C+u*D+d*V+f*ut,r[9]=h*L+u*N+d*q+f*mt,r[13]=h*S+u*B+d*J+f*yt,r[2]=g*R+v*y+m*W+p*X,r[6]=g*C+v*D+m*V+p*ut,r[10]=g*L+v*N+m*q+p*mt,r[14]=g*S+v*B+m*J+p*yt,r[3]=E*R+M*y+_*W+b*X,r[7]=E*C+M*D+_*V+b*ut,r[11]=E*L+M*N+_*q+b*mt,r[15]=E*S+M*B+_*J+b*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+v*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],E=u*m*c-v*d*c+v*l*f-a*m*f-u*l*p+a*d*p,M=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,_=h*v*c-g*u*c+g*a*f-o*v*f-h*a*p+o*u*p,b=g*u*l-h*v*l-g*a*d+o*v*d+h*a*m-o*u*m,R=e*E+n*M+s*_+r*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return t[0]=E*C,t[1]=(v*d*r-u*m*r-v*s*f+n*m*f+u*s*p-n*d*p)*C,t[2]=(a*m*r-v*l*r+v*s*c-n*m*c-a*s*p+n*l*p)*C,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*C,t[4]=M*C,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*C,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*C,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*C,t[8]=_*C,t[9]=(g*u*r-h*v*r-g*n*f+e*v*f+h*n*p-e*u*p)*C,t[10]=(o*v*r-g*a*r+g*n*c-e*v*c-o*n*p+e*a*p)*C,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*C,t[12]=b*C,t[13]=(h*v*s-g*u*s+g*n*d-e*v*d-h*n*m+e*u*m)*C,t[14]=(g*a*s-o*v*s-g*n*l+e*v*l+o*n*m-e*a*m)*C,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,v=o*h,m=o*u,p=a*u,E=l*c,M=l*h,_=l*u,b=n.x,R=n.y,C=n.z;return s[0]=(1-(v+p))*b,s[1]=(f+_)*b,s[2]=(g-M)*b,s[3]=0,s[4]=(f-_)*R,s[5]=(1-(d+p))*R,s[6]=(m+E)*R,s[7]=0,s[8]=(g+M)*C,s[9]=(m-E)*C,s[10]=(1-(d+v))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ns.set(s[0],s[1],s[2]).length();const o=ns.set(s[4],s[5],s[6]).length(),a=ns.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],yn.copy(this);const c=1/r,h=1/o,u=1/a;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=u,yn.elements[9]*=u,yn.elements[10]*=u,e.setFromRotationMatrix(yn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=In,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===In)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===bo)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=In,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s);let g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===In)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===bo)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ns=new A,yn=new ce,Ff=new A(0,0,0),Bf=new A(1,1,1),ii=new A,Xr=new A,nn=new A,Ec=new ce,wc=new Bi;class On{constructor(t=0,e=0,n=0,s=On.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ec.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ec,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wc.setFromEuler(this),this.setFromQuaternion(wc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class Hl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zf=0;const Tc=new A,is=new Bi,Hn=new ce,qr=new A,Xs=new A,kf=new A,Hf=new Bi,bc=new A(1,0,0),Ac=new A(0,1,0),Rc=new A(0,0,1),Cc={type:"added"},Gf={type:"removed"},ss={type:"childadded",child:null},ia={type:"childremoved",child:null};class Ie extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=Wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new A,e=new On,n=new Bi,s=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new Wt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.multiply(is),this}rotateOnWorldAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.premultiply(is),this}rotateX(t){return this.rotateOnAxis(bc,t)}rotateY(t){return this.rotateOnAxis(Ac,t)}rotateZ(t){return this.rotateOnAxis(Rc,t)}translateOnAxis(t,e){return Tc.copy(t).applyQuaternion(this.quaternion),this.position.add(Tc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bc,t)}translateY(t){return this.translateOnAxis(Ac,t)}translateZ(t){return this.translateOnAxis(Rc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?qr.copy(t):qr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Xs,qr,this.up):Hn.lookAt(qr,Xs,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),is.setFromRotationMatrix(Hn),this.quaternion.premultiply(is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Cc),ss.child=t,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gf),ia.child=t,this.dispatchEvent(ia),ia.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Cc),ss.child=t,this.dispatchEvent(ss),ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,t,kf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,Hf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ie.DEFAULT_UP=new A(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new A,Gn=new A,sa=new A,Vn=new A,rs=new A,os=new A,Pc=new A,ra=new A,oa=new A,aa=new A,la=new pe,ca=new pe,ha=new pe;class En{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Mn.subVectors(t,e),s.cross(Mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Mn.subVectors(s,e),Gn.subVectors(n,e),sa.subVectors(t,e);const o=Mn.dot(Mn),a=Mn.dot(Gn),l=Mn.dot(sa),c=Gn.dot(Gn),h=Gn.dot(sa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vn.x),l.addScaledVector(o,Vn.y),l.addScaledVector(a,Vn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return la.setScalar(0),ca.setScalar(0),ha.setScalar(0),la.fromBufferAttribute(t,e),ca.fromBufferAttribute(t,n),ha.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(la,r.x),o.addScaledVector(ca,r.y),o.addScaledVector(ha,r.z),o}static isFrontFacing(t,e,n,s){return Mn.subVectors(n,e),Gn.subVectors(t,e),Mn.cross(Gn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),Mn.cross(Gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return En.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return En.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return En.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return En.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return En.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;rs.subVectors(s,n),os.subVectors(r,n),ra.subVectors(t,n);const l=rs.dot(ra),c=os.dot(ra);if(l<=0&&c<=0)return e.copy(n);oa.subVectors(t,s);const h=rs.dot(oa),u=os.dot(oa);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(rs,o);aa.subVectors(t,r);const f=rs.dot(aa),g=os.dot(aa);if(g>=0&&f<=g)return e.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(os,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Pc.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Pc,a);const p=1/(m+v+d);return o=v*p,a=d*p,e.copy(n).addScaledVector(rs,o).addScaledVector(os,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const nu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},Yr={h:0,s:0,l:0};function ua(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=se.workingColorSpace){if(t=zl(t,1),e=Xt(e,0,1),n=Xt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ua(o,r,t+1/3),this.g=ua(o,r,t),this.b=ua(o,r,t-1/3)}return se.colorSpaceToWorking(this,s),this}setStyle(t,e=rn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=rn){const n=nu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Jn(t.r),this.g=Jn(t.g),this.b=Jn(t.b),this}copyLinearToSRGB(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return se.workingToColorSpace(He.copy(this),t),Math.round(Xt(He.r*255,0,255))*65536+Math.round(Xt(He.g*255,0,255))*256+Math.round(Xt(He.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.workingToColorSpace(He.copy(this),e);const n=He.r,s=He.g,r=He.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.workingToColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=rn){se.workingToColorSpace(He.copy(this),t);const e=He.r,n=He.g,s=He.b;return t!==rn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(si),this.setHSL(si.h+t,si.s+e,si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(si),t.getHSL(Yr);const n=lr(si.h,Yr.h,e),s=lr(si.s,Yr.s,e),r=lr(si.l,Yr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new kt;kt.NAMES=nu;let Vf=0;class Yi extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=Wi(),this.name="",this.type="Material",this.blending=Li,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Na,this.blendDst=Oa,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Li&&(n.blending=this.blending),this.side!==mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Na&&(n.blendSrc=this.blendSrc),this.blendDst!==Oa&&(n.blendDst=this.blendDst),this.blendEquation!==Ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Be extends Yi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ce=new A,Zr=new it;let Wf=0;class _n{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=gc,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Zr.fromBufferAttribute(this,e),Zr.applyMatrix3(t),this.setXY(e,Zr.x,Zr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ds(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=We(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ds(e,this.array)),e}setX(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ds(e,this.array)),e}setY(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ds(e,this.array)),e}setZ(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ds(e,this.array)),e}setW(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),s=We(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),s=We(s,this.array),r=We(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==gc&&(t.usage=this.usage),t}}class iu extends _n{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class su extends _n{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Yt extends _n{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Xf=0;const pn=new ce,da=new Ie,as=new A,sn=new Xi,qs=new Xi,Fe=new A;class Re extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=Wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tu(t)?su:iu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return da.lookAt(t),da.updateMatrix(),this.applyMatrix4(da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Yt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Fe.addVectors(sn.min,qs.min),sn.expandByPoint(Fe),Fe.addVectors(sn.max,qs.max),sn.expandByPoint(Fe)):(sn.expandByPoint(qs.min),sn.expandByPoint(qs.max))}sn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Fe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Fe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Fe.fromBufferAttribute(a,c),l&&(as.fromBufferAttribute(t,c),Fe.add(as)),s=Math.max(s,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new A,l[L]=new A;const c=new A,h=new A,u=new A,d=new it,f=new it,g=new it,v=new A,m=new A;function p(L,S,y){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(D),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),a[L].add(v),a[S].add(v),a[y].add(v),l[L].add(m),l[S].add(m),l[y].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let L=0,S=E.length;L<S;++L){const y=E[L],D=y.start,N=y.count;for(let B=D,W=D+N;B<W;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const M=new A,_=new A,b=new A,R=new A;function C(L){b.fromBufferAttribute(s,L),R.copy(b);const S=a[L];M.copy(S),M.sub(b.multiplyScalar(b.dot(S))).normalize(),_.crossVectors(R,S);const D=_.dot(l[L])<0?-1:1;o.setXYZW(L,M.x,M.y,M.z,D)}for(let L=0,S=E.length;L<S;++L){const y=E[L],D=y.start,N=y.count;for(let B=D,W=D+N;B<W;B+=3)C(t.getX(B+0)),C(t.getX(B+1)),C(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _n(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new A,r=new A,o=new A,a=new A,l=new A,c=new A,h=new A,u=new A;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new _n(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Re,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dc=new ce,Si=new Rr,Kr=new qi,Lc=new A,Jr=new A,$r=new A,jr=new A,fa=new A,Qr=new A,Ic=new A,to=new A;class Tt extends Ie{constructor(t=new Re,e=new Be){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Qr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(fa.fromBufferAttribute(u,t),o?Qr.addScaledVector(fa,h):Qr.addScaledVector(fa.sub(e),h))}e.add(Qr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(r),Si.copy(t.ray).recast(t.near),!(Kr.containsPoint(Si.origin)===!1&&(Si.intersectSphere(Kr,Lc)===null||Si.origin.distanceToSquared(Lc)>(t.far-t.near)**2))&&(Dc.copy(r).invert(),Si.copy(t.ray).applyMatrix4(Dc),!(n.boundingBox!==null&&Si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Si)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=E,b=M;_<b;_+=3){const R=a.getX(_),C=a.getX(_+1),L=a.getX(_+2);s=eo(this,p,t,n,c,h,u,R,C,L),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const E=a.getX(m),M=a.getX(m+1),_=a.getX(m+2);s=eo(this,o,t,n,c,h,u,E,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=E,b=M;_<b;_+=3){const R=_,C=_+1,L=_+2;s=eo(this,p,t,n,c,h,u,R,C,L),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const E=m,M=m+1,_=m+2;s=eo(this,o,t,n,c,h,u,E,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function qf(i,t,e,n,s,r,o,a){let l;if(t.side===Qe?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===mi,a),l===null)return null;to.copy(a),to.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(to);return c<e.near||c>e.far?null:{distance:c,point:to.clone(),object:i}}function eo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Jr),i.getVertexPosition(l,$r),i.getVertexPosition(c,jr);const h=qf(i,t,e,n,Jr,$r,jr,Ic);if(h){const u=new A;En.getBarycoord(Ic,Jr,$r,jr,u),s&&(h.uv=En.getInterpolatedAttribute(s,a,l,c,u,new it)),r&&(h.uv1=En.getInterpolatedAttribute(r,a,l,c,u,new it)),o&&(h.normal=En.getInterpolatedAttribute(o,a,l,c,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new A,materialIndex:0};En.getNormal(Jr,$r,jr,d.normal),h.face=d,h.barycoord=u}return h}class ln extends Re{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(u,2));function g(v,m,p,E,M,_,b,R,C,L,S){const y=_/C,D=b/L,N=_/2,B=b/2,W=R/2,V=C+1,q=L+1;let J=0,X=0;const ut=new A;for(let mt=0;mt<q;mt++){const yt=mt*D-B;for(let Ft=0;Ft<V;Ft++){const Ht=Ft*y-N;ut[v]=Ht*E,ut[m]=yt*M,ut[p]=W,c.push(ut.x,ut.y,ut.z),ut[v]=0,ut[m]=0,ut[p]=R>0?1:-1,h.push(ut.x,ut.y,ut.z),u.push(Ft/C),u.push(1-mt/L),J+=1}}for(let mt=0;mt<L;mt++)for(let yt=0;yt<C;yt++){const Ft=d+yt+V*mt,Ht=d+yt+V*(mt+1),re=d+(yt+1)+V*(mt+1),$t=d+(yt+1)+V*mt;l.push(Ft,Ht,$t),l.push(Ht,re,$t),X+=6}a.addGroup(f,X,S),f+=X,d+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ln(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ls(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Xe(i){const t={};for(let e=0;e<i.length;e++){const n=Ls(i[e]);for(const s in n)t[s]=n[s]}return t}function Yf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ru(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}const Zf={clone:Ls,merge:Xe};var Kf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fn extends Yi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kf,this.fragmentShader=Jf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ls(t.uniforms),this.uniformsGroups=Yf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ou extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ri=new A,Uc=new it,Nc=new it;class an extends ou{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=xr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ar*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xr*2*Math.atan(Math.tan(ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ri.x,ri.y).multiplyScalar(-t/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-t/ri.z)}getViewSize(t,e){return this.getViewBounds(t,Uc,Nc),e.subVectors(Nc,Uc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ar*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ls=-90,cs=1;class $f extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new an(ls,cs,t,e);s.layers=this.layers,this.add(s);const r=new an(ls,cs,t,e);r.layers=this.layers,this.add(r);const o=new an(ls,cs,t,e);o.layers=this.layers,this.add(o);const a=new an(ls,cs,t,e);a.layers=this.layers,this.add(a);const l=new an(ls,cs,t,e);l.layers=this.layers,this.add(l);const c=new an(ls,cs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===In)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===bo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class au extends Ye{constructor(t=[],e=Cs,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jf extends zi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new au(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ln(5,5,5),r=new Fn({name:"CubemapFromEquirect",uniforms:Ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:ui});r.uniforms.tEquirect.value=e;const o=new Tt(s,r),a=e.minFilter;return e.minFilter===Di&&(e.minFilter=Dn),new $f(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class oe extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qf={type:"move"};class pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new oe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Gl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new kt(t),this.density=e}clone(){return new Gl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class tp extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ep extends Ye{constructor(t=null,e=1,n=1,s,r,o,a,l,c=hn,h=hn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oc extends _n{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const hs=new ce,Fc=new ce,no=[],Bc=new Xi,np=new ce,Ys=new Tt,Zs=new qi;class zc extends Tt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Oc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,np)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Xi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hs),Bc.copy(t.boundingBox).applyMatrix4(hs),this.boundingBox.union(Bc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new qi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hs),Zs.copy(t.boundingSphere).applyMatrix4(hs),this.boundingSphere.union(Zs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ys.geometry=this.geometry,Ys.material=this.material,Ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zs.copy(this.boundingSphere),Zs.applyMatrix4(n),t.ray.intersectsSphere(Zs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,hs),Fc.multiplyMatrices(n,hs),Ys.matrixWorld=Fc,Ys.raycast(t,no);for(let o=0,a=no.length;o<a;o++){const l=no[o];l.instanceId=r,l.object=this,e.push(l)}no.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Oc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ep(new Float32Array(s*this.count),s,this.count,Nl,Ln));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ma=new A,ip=new A,sp=new Wt;class ai{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ma.subVectors(n,e).cross(ip.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ma),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||sp.getNormalMatrix(t),s=this.coplanarPoint(ma).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ei=new qi,rp=new it(.5,.5),io=new A;class Vl{constructor(t=new ai,e=new ai,n=new ai,s=new ai,r=new ai,o=new ai){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=In,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],E=r[12],M=r[13],_=r[14],b=r[15];if(s[0].setComponents(c-o,f-h,p-g,b-E).normalize(),s[1].setComponents(c+o,f+h,p+g,b+E).normalize(),s[2].setComponents(c+a,f+u,p+v,b+M).normalize(),s[3].setComponents(c-a,f-u,p-v,b-M).normalize(),n)s[4].setComponents(l,d,m,_).normalize(),s[5].setComponents(c-l,f-d,p-m,b-_).normalize();else if(s[4].setComponents(c-l,f-d,p-m,b-_).normalize(),e===In)s[5].setComponents(c+l,f+d,p+m,b+_).normalize();else if(e===bo)s[5].setComponents(l,d,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(t){Ei.center.set(0,0,0);const e=rp.distanceTo(t.center);return Ei.radius=.7071067811865476+e,Ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(io.x=s.normal.x>0?t.max.x:t.min.x,io.y=s.normal.y>0?t.max.y:t.min.y,io.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(io)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lu extends Yi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ro=new A,Co=new A,kc=new ce,Ks=new Rr,so=new qi,ga=new A,Hc=new A;class op extends Ie{constructor(t=new Re,e=new lu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ro.fromBufferAttribute(e,s-1),Co.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ro.distanceTo(Co);t.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(s),so.radius+=r,t.ray.intersectsSphere(so)===!1)return;kc.copy(s).invert(),Ks.copy(t.ray).applyMatrix4(kc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){const p=h.getX(v),E=h.getX(v+1),M=ro(this,t,Ks,l,p,E,v);M&&e.push(M)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(f),p=ro(this,t,Ks,l,v,m,g-1);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){const p=ro(this,t,Ks,l,v,v+1,v);p&&e.push(p)}if(this.isLineLoop){const v=ro(this,t,Ks,l,g-1,f,g-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ro(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(Ro.fromBufferAttribute(a,s),Co.fromBufferAttribute(a,r),e.distanceSqToSegment(Ro,Co,ga,Hc)>n)return;ga.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ga);if(!(c<t.near||c>t.far))return{distance:c,point:Hc.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Gc=new A,Vc=new A;class ap extends op{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Gc.fromBufferAttribute(e,s),Vc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Gc.distanceTo(Vc);t.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cu extends Yi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Wc=new ce,Sl=new Rr,oo=new qi,ao=new A;class lp extends Ie{constructor(t=new Re,e=new cu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(s),oo.radius+=r,t.ray.intersectsSphere(oo)===!1)return;Wc.copy(s).invert(),Sl.copy(t.ray).applyMatrix4(Wc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,v=f;g<v;g++){const m=c.getX(g);ao.fromBufferAttribute(u,m),Xc(ao,m,l,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,v=f;g<v;g++)ao.fromBufferAttribute(u,g),Xc(ao,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Xc(i,t,e,n,s,r,o){const a=Sl.distanceSqToPoint(i);if(a<e){const l=new A;Sl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class hu extends Ye{constructor(t,e,n=Oi,s,r,o,a=hn,l=hn,c,h=_r,u=1){if(h!==_r&&h!==vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new kl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class uu extends Ye{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Wl extends Re{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],a=[],l=[],c=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,g=n*2+r,v=s+1,m=new A,p=new A;for(let E=0;E<=g;E++){let M=0,_=0,b=0,R=0;if(E<=n){const S=E/n,y=S*Math.PI/2;_=-h-t*Math.cos(y),b=t*Math.sin(y),R=-t*Math.cos(y),M=S*u}else if(E<=n+r){const S=(E-n)/r;_=-h+S*e,b=t,R=0,M=u+S*d}else{const S=(E-n-r)/n,y=S*Math.PI/2;_=h+t*Math.sin(y),b=t*Math.cos(y),R=t*Math.sin(y),M=u+d+S*u}const C=Math.max(0,Math.min(1,M/f));let L=0;E===0?L=.5/s:E===g&&(L=-.5/s);for(let S=0;S<=s;S++){const y=S/s,D=y*Math.PI*2,N=Math.sin(D),B=Math.cos(D);p.x=-b*B,p.y=_,p.z=b*N,a.push(p.x,p.y,p.z),m.set(-b*B,R,b*N),m.normalize(),l.push(m.x,m.y,m.z),c.push(y+L,C)}if(E>0){const S=(E-1)*v;for(let y=0;y<s;y++){const D=S+y,N=S+y+1,B=E*v+y,W=E*v+y+1;o.push(D,N,B),o.push(N,W,B)}}}this.setIndex(o),this.setAttribute("position",new Yt(a,3)),this.setAttribute("normal",new Yt(l,3)),this.setAttribute("uv",new Yt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wl(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class $n extends Re{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new A,h=new it;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Yt(o,3)),this.setAttribute("normal",new Yt(a,3)),this.setAttribute("uv",new Yt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $n(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class cn extends Re{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const v=[],m=n/2;let p=0;E(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Yt(u,3)),this.setAttribute("normal",new Yt(d,3)),this.setAttribute("uv",new Yt(f,2));function E(){const _=new A,b=new A;let R=0;const C=(e-t)/n;for(let L=0;L<=r;L++){const S=[],y=L/r,D=y*(e-t)+t;for(let N=0;N<=s;N++){const B=N/s,W=B*l+a,V=Math.sin(W),q=Math.cos(W);b.x=D*V,b.y=-y*n+m,b.z=D*q,u.push(b.x,b.y,b.z),_.set(V,C,q).normalize(),d.push(_.x,_.y,_.z),f.push(B,1-y),S.push(g++)}v.push(S)}for(let L=0;L<s;L++)for(let S=0;S<r;S++){const y=v[S][L],D=v[S+1][L],N=v[S+1][L+1],B=v[S][L+1];(t>0||S!==0)&&(h.push(y,D,B),R+=3),(e>0||S!==r-1)&&(h.push(D,N,B),R+=3)}c.addGroup(p,R,0),p+=R}function M(_){const b=g,R=new it,C=new A;let L=0;const S=_===!0?t:e,y=_===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;const D=g;for(let N=0;N<=s;N++){const W=N/s*l+a,V=Math.cos(W),q=Math.sin(W);C.x=S*q,C.y=m*y,C.z=S*V,u.push(C.x,C.y,C.z),d.push(0,y,0),R.x=V*.5+.5,R.y=q*.5*y+.5,f.push(R.x,R.y),g++}for(let N=0;N<s;N++){const B=b+N,W=D+N;_===!0?h.push(W,W+1,B):h.push(W+1,W,B),L+=3}c.addGroup(p,L,_===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Xl extends Re{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Yt(r,3)),this.setAttribute("normal",new Yt(r.slice(),3)),this.setAttribute("uv",new Yt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const M=new A,_=new A,b=new A;for(let R=0;R<e.length;R+=3)f(e[R+0],M),f(e[R+1],_),f(e[R+2],b),l(M,_,b,E)}function l(E,M,_,b){const R=b+1,C=[];for(let L=0;L<=R;L++){C[L]=[];const S=E.clone().lerp(_,L/R),y=M.clone().lerp(_,L/R),D=R-L;for(let N=0;N<=D;N++)N===0&&L===R?C[L][N]=S:C[L][N]=S.clone().lerp(y,N/D)}for(let L=0;L<R;L++)for(let S=0;S<2*(R-L)-1;S++){const y=Math.floor(S/2);S%2===0?(d(C[L][y+1]),d(C[L+1][y]),d(C[L][y])):(d(C[L][y+1]),d(C[L+1][y+1]),d(C[L+1][y]))}}function c(E){const M=new A;for(let _=0;_<r.length;_+=3)M.x=r[_+0],M.y=r[_+1],M.z=r[_+2],M.normalize().multiplyScalar(E),r[_+0]=M.x,r[_+1]=M.y,r[_+2]=M.z}function h(){const E=new A;for(let M=0;M<r.length;M+=3){E.x=r[M+0],E.y=r[M+1],E.z=r[M+2];const _=m(E)/2/Math.PI+.5,b=p(E)/Math.PI+.5;o.push(_,1-b)}g(),u()}function u(){for(let E=0;E<o.length;E+=6){const M=o[E+0],_=o[E+2],b=o[E+4],R=Math.max(M,_,b),C=Math.min(M,_,b);R>.9&&C<.1&&(M<.2&&(o[E+0]+=1),_<.2&&(o[E+2]+=1),b<.2&&(o[E+4]+=1))}}function d(E){r.push(E.x,E.y,E.z)}function f(E,M){const _=E*3;M.x=t[_+0],M.y=t[_+1],M.z=t[_+2]}function g(){const E=new A,M=new A,_=new A,b=new A,R=new it,C=new it,L=new it;for(let S=0,y=0;S<r.length;S+=9,y+=6){E.set(r[S+0],r[S+1],r[S+2]),M.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),R.set(o[y+0],o[y+1]),C.set(o[y+2],o[y+3]),L.set(o[y+4],o[y+5]),b.copy(E).add(M).add(_).divideScalar(3);const D=m(b);v(R,y+0,E,D),v(C,y+2,M,D),v(L,y+4,_,D)}}function v(E,M,_,b){b<0&&E.x===1&&(o[M]=E.x-1),_.x===0&&_.z===0&&(o[M]=b/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xl(t.vertices,t.indices,t.radius,t.details)}}class Rn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new it:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new A,s=[],r=[],o=[],a=new A,l=new ce;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new A)}r[0]=new A,o[0]=new A;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Xt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Xt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ql extends Rn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new it){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class cp extends ql{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Yl(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const lo=new A,_a=new Yl,va=new Yl,xa=new Yl;class El extends Rn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new A){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(lo.subVectors(s[0],s[1]).add(s[0]),c=lo);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(lo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=lo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),_a.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,v,m),va.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,v,m),xa.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(_a.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),va.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),xa.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(_a.calc(l),va.calc(l),xa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new A().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function qc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function hp(i,t){const e=1-i;return e*e*t}function up(i,t){return 2*(1-i)*i*t}function dp(i,t){return i*i*t}function cr(i,t,e,n){return hp(i,t)+up(i,e)+dp(i,n)}function fp(i,t){const e=1-i;return e*e*e*t}function pp(i,t){const e=1-i;return 3*e*e*i*t}function mp(i,t){return 3*(1-i)*i*i*t}function gp(i,t){return i*i*i*t}function hr(i,t,e,n,s){return fp(i,t)+pp(i,e)+mp(i,n)+gp(i,s)}class du extends Rn{constructor(t=new it,e=new it,n=new it,s=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new it){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(hr(t,s.x,r.x,o.x,a.x),hr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class _p extends Rn{constructor(t=new A,e=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new A){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(hr(t,s.x,r.x,o.x,a.x),hr(t,s.y,r.y,o.y,a.y),hr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class fu extends Rn{constructor(t=new it,e=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new it){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new it){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nr extends Rn{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pu extends Rn{constructor(t=new it,e=new it,n=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new it){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(cr(t,s.x,r.x,o.x),cr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class mu extends Rn{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(cr(t,s.x,r.x,o.x),cr(t,s.y,r.y,o.y),cr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gu extends Rn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new it){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(qc(a,l.x,c.x,h.x,u.x),qc(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new it().fromArray(s))}return this}}var Po=Object.freeze({__proto__:null,ArcCurve:cp,CatmullRomCurve3:El,CubicBezierCurve:du,CubicBezierCurve3:_p,EllipseCurve:ql,LineCurve:fu,LineCurve3:nr,QuadraticBezierCurve:pu,QuadraticBezierCurve3:mu,SplineCurve:gu});class _u extends Rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Po[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Po[s.type]().fromJSON(s))}return this}}class Yc extends _u{constructor(t){super(),this.type="Path",this.currentPoint=new it,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new fu(this.currentPoint.clone(),new it(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new pu(this.currentPoint.clone(),new it(t,e),new it(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new du(this.currentPoint.clone(),new it(t,e),new it(n,s),new it(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new gu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new ql(t,e,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class vs extends Yc{constructor(t){super(t),this.uuid=Wi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Yc().fromJSON(s))}return this}}function vp(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=vu(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Ep(i,t,r,e)),i.length>80*e){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=e;d<s;d+=e){const f=i[d],g=i[d+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Mr(r,o,e,a,l,c,0),o}function vu(i,t,e,n,s){let r;if(s===Up(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Zc(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Zc(o/n|0,i[o],i[o+1],r);return r&&Is(r,r.next)&&(Er(r),r=r.next),r}function ki(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Is(e,e.next)||Te(e.prev,e,e.next)===0)){if(Er(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Mr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Rp(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?yp(i,n,s,r):xp(i)){t.push(l.i,i.i,c.i),Er(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Mp(ki(i),t),Mr(i,t,e,n,s,r,2)):o===2&&Sp(i,t,e,n,s,r):Mr(ki(i),t,e,n,s,r,1);break}}}function xp(i){const t=i.prev,e=i,n=i.next;if(Te(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&ir(s,a,r,l,o,c,g.x,g.y)&&Te(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function yp(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Te(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),g=Math.min(h,u,d),v=Math.max(a,l,c),m=Math.max(h,u,d),p=wl(f,g,t,e,n),E=wl(v,m,t,e,n);let M=i.prevZ,_=i.nextZ;for(;M&&M.z>=p&&_&&_.z<=E;){if(M.x>=f&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&ir(a,h,l,u,c,d,M.x,M.y)&&Te(M.prev,M,M.next)>=0||(M=M.prevZ,_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&ir(a,h,l,u,c,d,_.x,_.y)&&Te(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&ir(a,h,l,u,c,d,M.x,M.y)&&Te(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;_&&_.z<=E;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&ir(a,h,l,u,c,d,_.x,_.y)&&Te(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Mp(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Is(n,s)&&yu(n,e,e.next,s)&&Sr(n,s)&&Sr(s,n)&&(t.push(n.i,e.i,s.i),Er(e),Er(e.next),e=i=s),e=e.next}while(e!==i);return ki(e)}function Sp(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Dp(o,a)){let l=Mu(o,a);o=ki(o,o.next),l=ki(l,l.next),Mr(o,t,e,n,s,r,0),Mr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Ep(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=vu(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Pp(c))}s.sort(wp);for(let r=0;r<s.length;r++)e=Tp(s[r],e);return e}function wp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Tp(i,t){const e=bp(i,t);if(!e)return t;const n=Mu(e,i);return ki(n,n.next),ki(e,e.next)}function bp(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(Is(i,e))return e;do{if(Is(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&xu(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);Sr(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&Ap(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function Ap(i,t){return Te(i.prev,i,t.prev)<0&&Te(t.next,i,i.next)<0}function Rp(i,t,e,n){let s=i;do s.z===0&&(s.z=wl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Cp(s)}function Cp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function wl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Pp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function xu(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function ir(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&xu(i,t,e,n,s,r,o,a)}function Dp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Lp(i,t)&&(Sr(i,t)&&Sr(t,i)&&Ip(i,t)&&(Te(i.prev,i,t.prev)||Te(i,t.prev,t))||Is(i,t)&&Te(i.prev,i,i.next)>0&&Te(t.prev,t,t.next)>0)}function Te(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Is(i,t){return i.x===t.x&&i.y===t.y}function yu(i,t,e,n){const s=ho(Te(i,t,e)),r=ho(Te(i,t,n)),o=ho(Te(e,n,i)),a=ho(Te(e,n,t));return!!(s!==r&&o!==a||s===0&&co(i,e,t)||r===0&&co(i,n,t)||o===0&&co(e,i,n)||a===0&&co(e,t,n))}function co(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ho(i){return i>0?1:i<0?-1:0}function Lp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&yu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Sr(i,t){return Te(i.prev,i,i.next)<0?Te(i,t,i.next)>=0&&Te(i,i.prev,t)>=0:Te(i,t,i.prev)<0||Te(i,i.next,t)<0}function Ip(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Mu(i,t){const e=Tl(i.i,i.x,i.y),n=Tl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Zc(i,t,e,n){const s=Tl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Er(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Tl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Up(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Np{static triangulate(t,e,n=2){return vp(t,e,n)}}class qn{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return qn.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Kc(t),Jc(n,t);let o=t.length;e.forEach(Kc);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Jc(n,e[l]);const a=Np.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Kc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Jc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Do extends Re{constructor(t=new vs([new it(.5,.5),new it(-.5,.5),new it(-.5,-.5),new it(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Yt(s,3)),this.setAttribute("uv",new Yt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:Op;let M,_=!1,b,R,C,L;p&&(M=p.getSpacedPoints(h),_=!0,d=!1,b=p.computeFrenetFrames(h,!1),R=new A,C=new A,L=new A),d||(m=0,f=0,g=0,v=0);const S=a.extractPoints(c);let y=S.shape;const D=S.holes;if(!qn.isClockWise(y)){y=y.reverse();for(let Q=0,$=D.length;Q<$;Q++){const K=D[Q];qn.isClockWise(K)&&(D[Q]=K.reverse())}}function B(Q){const K=10000000000000001e-36;let z=Q[0];for(let at=1;at<=Q.length;at++){const nt=at%Q.length,lt=Q[nt],Nt=lt.x-z.x,Lt=lt.y-z.y,T=Nt*Nt+Lt*Lt,x=Math.max(Math.abs(lt.x),Math.abs(lt.y),Math.abs(z.x),Math.abs(z.y)),F=K*x*x;if(T<=F){Q.splice(nt,1),at--;continue}z=lt}}B(y),D.forEach(B);const W=D.length,V=y;for(let Q=0;Q<W;Q++){const $=D[Q];y=y.concat($)}function q(Q,$,K){return $||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector($,K)}const J=y.length;function X(Q,$,K){let z,at,nt;const lt=Q.x-$.x,Nt=Q.y-$.y,Lt=K.x-Q.x,T=K.y-Q.y,x=lt*lt+Nt*Nt,F=lt*T-Nt*Lt;if(Math.abs(F)>Number.EPSILON){const G=Math.sqrt(x),et=Math.sqrt(Lt*Lt+T*T),Y=$.x-Nt/G,Pt=$.y+lt/G,ht=K.x-T/et,At=K.y+Lt/et,Rt=((ht-Y)*T-(At-Pt)*Lt)/(lt*T-Nt*Lt);z=Y+lt*Rt-Q.x,at=Pt+Nt*Rt-Q.y;const st=z*z+at*at;if(st<=2)return new it(z,at);nt=Math.sqrt(st/2)}else{let G=!1;lt>Number.EPSILON?Lt>Number.EPSILON&&(G=!0):lt<-Number.EPSILON?Lt<-Number.EPSILON&&(G=!0):Math.sign(Nt)===Math.sign(T)&&(G=!0),G?(z=-Nt,at=lt,nt=Math.sqrt(x)):(z=lt,at=Nt,nt=Math.sqrt(x/2))}return new it(z/nt,at/nt)}const ut=[];for(let Q=0,$=V.length,K=$-1,z=Q+1;Q<$;Q++,K++,z++)K===$&&(K=0),z===$&&(z=0),ut[Q]=X(V[Q],V[K],V[z]);const mt=[];let yt,Ft=ut.concat();for(let Q=0,$=W;Q<$;Q++){const K=D[Q];yt=[];for(let z=0,at=K.length,nt=at-1,lt=z+1;z<at;z++,nt++,lt++)nt===at&&(nt=0),lt===at&&(lt=0),yt[z]=X(K[z],K[nt],K[lt]);mt.push(yt),Ft=Ft.concat(yt)}let Ht;if(m===0)Ht=qn.triangulateShape(V,D);else{const Q=[],$=[];for(let K=0;K<m;K++){const z=K/m,at=f*Math.cos(z*Math.PI/2),nt=g*Math.sin(z*Math.PI/2)+v;for(let lt=0,Nt=V.length;lt<Nt;lt++){const Lt=q(V[lt],ut[lt],nt);bt(Lt.x,Lt.y,-at),z===0&&Q.push(Lt)}for(let lt=0,Nt=W;lt<Nt;lt++){const Lt=D[lt];yt=mt[lt];const T=[];for(let x=0,F=Lt.length;x<F;x++){const G=q(Lt[x],yt[x],nt);bt(G.x,G.y,-at),z===0&&T.push(G)}z===0&&$.push(T)}}Ht=qn.triangulateShape(Q,$)}const re=Ht.length,$t=g+v;for(let Q=0;Q<J;Q++){const $=d?q(y[Q],Ft[Q],$t):y[Q];_?(C.copy(b.normals[0]).multiplyScalar($.x),R.copy(b.binormals[0]).multiplyScalar($.y),L.copy(M[0]).add(C).add(R),bt(L.x,L.y,L.z)):bt($.x,$.y,0)}for(let Q=1;Q<=h;Q++)for(let $=0;$<J;$++){const K=d?q(y[$],Ft[$],$t):y[$];_?(C.copy(b.normals[Q]).multiplyScalar(K.x),R.copy(b.binormals[Q]).multiplyScalar(K.y),L.copy(M[Q]).add(C).add(R),bt(L.x,L.y,L.z)):bt(K.x,K.y,u/h*Q)}for(let Q=m-1;Q>=0;Q--){const $=Q/m,K=f*Math.cos($*Math.PI/2),z=g*Math.sin($*Math.PI/2)+v;for(let at=0,nt=V.length;at<nt;at++){const lt=q(V[at],ut[at],z);bt(lt.x,lt.y,u+K)}for(let at=0,nt=D.length;at<nt;at++){const lt=D[at];yt=mt[at];for(let Nt=0,Lt=lt.length;Nt<Lt;Nt++){const T=q(lt[Nt],yt[Nt],z);_?bt(T.x,T.y+M[h-1].y,M[h-1].x+K):bt(T.x,T.y,u+K)}}}Z(),tt();function Z(){const Q=s.length/3;if(d){let $=0,K=J*$;for(let z=0;z<re;z++){const at=Ht[z];xt(at[2]+K,at[1]+K,at[0]+K)}$=h+m*2,K=J*$;for(let z=0;z<re;z++){const at=Ht[z];xt(at[0]+K,at[1]+K,at[2]+K)}}else{for(let $=0;$<re;$++){const K=Ht[$];xt(K[2],K[1],K[0])}for(let $=0;$<re;$++){const K=Ht[$];xt(K[0]+J*h,K[1]+J*h,K[2]+J*h)}}n.addGroup(Q,s.length/3-Q,0)}function tt(){const Q=s.length/3;let $=0;vt(V,$),$+=V.length;for(let K=0,z=D.length;K<z;K++){const at=D[K];vt(at,$),$+=at.length}n.addGroup(Q,s.length/3-Q,1)}function vt(Q,$){let K=Q.length;for(;--K>=0;){const z=K;let at=K-1;at<0&&(at=Q.length-1);for(let nt=0,lt=h+m*2;nt<lt;nt++){const Nt=J*nt,Lt=J*(nt+1),T=$+z+Nt,x=$+at+Nt,F=$+at+Lt,G=$+z+Lt;Kt(T,x,F,G)}}}function bt(Q,$,K){l.push(Q),l.push($),l.push(K)}function xt(Q,$,K){he(Q),he($),he(K);const z=s.length/3,at=E.generateTopUV(n,s,z-3,z-2,z-1);P(at[0]),P(at[1]),P(at[2])}function Kt(Q,$,K,z){he(Q),he($),he(z),he($),he(K),he(z);const at=s.length/3,nt=E.generateSideWallUV(n,s,at-6,at-3,at-2,at-1);P(nt[0]),P(nt[1]),P(nt[3]),P(nt[1]),P(nt[2]),P(nt[3])}function he(Q){s.push(l[Q*3+0]),s.push(l[Q*3+1]),s.push(l[Q*3+2])}function P(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Fp(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Po[s.type]().fromJSON(s)),new Do(n,t.options)}}const Op={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new it(r,o),new it(a,l),new it(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new it(o,1-l),new it(c,1-u),new it(d,1-g),new it(v,1-p)]:[new it(a,1-l),new it(h,1-u),new it(f,1-g),new it(m,1-p)]}};function Fp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Zl extends Xl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Zl(t.radius,t.detail)}}class jn extends Re{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const E=p*d-o;for(let M=0;M<c;M++){const _=M*u-r;g.push(_,-E,0),v.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){const M=E+c*p,_=E+c*(p+1),b=E+1+c*(p+1),R=E+1+c*p;f.push(M,_,R),f.push(_,b,R)}this.setIndex(f),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(v,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Cr extends Re{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let u=t;const d=(e-t)/s,f=new A,g=new it;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let v=0;v<s;v++){const m=v*(n+1);for(let p=0;p<n;p++){const E=p+m,M=E,_=E+n+1,b=E+n+2,R=E+1;a.push(M,_,R),a.push(_,b,R)}}this.setIndex(a),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(c,3)),this.setAttribute("uv",new Yt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Fo extends Re{constructor(t=new vs([new it(0,.5),new it(-.5,-.5),new it(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Yt(s,3)),this.setAttribute("normal",new Yt(r,3)),this.setAttribute("uv",new Yt(o,2));function c(h){const u=s.length/3,d=h.extractPoints(e);let f=d.shape;const g=d.holes;qn.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const E=g[m];qn.isClockWise(E)===!0&&(g[m]=E.reverse())}const v=qn.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const E=g[m];f=f.concat(E)}for(let m=0,p=f.length;m<p;m++){const E=f[m];s.push(E.x,E.y,0),r.push(0,0,1),o.push(E.x,E.y)}for(let m=0,p=v.length;m<p;m++){const E=v[m],M=E[0]+u,_=E[1]+u,b=E[2]+u;n.push(M,_,b),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Bp(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new Fo(n,t.curveSegments)}}function Bp(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class fi extends Re{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new A,d=new A,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const E=[],M=p/n;let _=0;p===0&&o===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let b=0;b<=e;b++){const R=b/e;u.x=-t*Math.cos(s+R*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(s+R*r)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(R+_,1-M),E.push(c++)}h.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){const M=h[p][E+1],_=h[p][E],b=h[p+1][E],R=h[p+1][E+1];(p!==0||o>0)&&f.push(M,_,R),(p!==n-1||l<Math.PI)&&f.push(_,b,R)}this.setIndex(f),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(v,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class pi extends Re{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new A,u=new A,d=new A;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const v=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const v=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,E=(s+1)*f+g;o.push(v,m,E),o.push(m,p,E)}this.setIndex(o),this.setAttribute("position",new Yt(a,3)),this.setAttribute("normal",new Yt(l,3)),this.setAttribute("uv",new Yt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ci extends Re{constructor(t=new mu(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new A,l=new A,c=new it;let h=new A;const u=[],d=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Yt(u,3)),this.setAttribute("normal",new Yt(d,3)),this.setAttribute("uv",new Yt(f,2));function v(){for(let M=0;M<e;M++)m(M);m(r===!1?e:0),E(),p()}function m(M){h=t.getPointAt(M/e,h);const _=o.normals[M],b=o.binormals[M];for(let R=0;R<=s;R++){const C=R/s*Math.PI*2,L=Math.sin(C),S=-Math.cos(C);l.x=S*_.x+L*b.x,l.y=S*_.y+L*b.y,l.z=S*_.z+L*b.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=e;M++)for(let _=1;_<=s;_++){const b=(s+1)*(M-1)+(_-1),R=(s+1)*M+(_-1),C=(s+1)*M+_,L=(s+1)*(M-1)+_;g.push(b,R,L),g.push(R,C,L)}}function E(){for(let M=0;M<=e;M++)for(let _=0;_<=s;_++)c.x=M/e,c.y=_/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ci(new Po[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class mn extends Yi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jh,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zp extends mn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new it(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new kt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new kt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new kt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class kp extends Yi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Hp extends Yi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Kl extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Gp extends Kl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ya=new ce,$c=new A,jc=new A;class Su{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vl,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;$c.setFromMatrixPosition(t.matrixWorld),e.position.copy($c),jc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(jc),e.updateMatrixWorld(),ya.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ya,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ya)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Qc=new ce,Js=new A,Ma=new A;class Vp extends Su{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new pe(2,1,1,1),new pe(0,1,1,1),new pe(3,1,1,1),new pe(1,1,1,1),new pe(3,0,1,1),new pe(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Js.setFromMatrixPosition(t.matrixWorld),n.position.copy(Js),Ma.copy(n.position),Ma.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ma),n.updateMatrixWorld(),s.makeTranslation(-Js.x,-Js.y,-Js.z),Qc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qc,n.coordinateSystem,n.reversedDepth)}}class Wp extends Kl{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Vp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Eu extends ou{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Xp extends Su{constructor(){super(new Eu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qp extends Kl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new Xp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Yp extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Zp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const th=new ce;class Kp{constructor(t,e,n=0,s=1/0){this.ray=new Rr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Hl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return th.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(th),this}intersectObject(t,e=!0,n=[]){return bl(t,this,n,e),n.sort(eh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)bl(t[s],this,n,e);return n.sort(eh),n}}function eh(i,t){return i.distance-t.distance}function bl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)bl(r[o],t,e,!0)}}class nh{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Xt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Xt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Jp extends ap{constructor(t=10,e=10,n=4473924,s=8947848){n=new kt(n),s=new kt(s);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let d=0,f=0,g=-a;d<=e;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const v=d===r?n:s;v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3}const h=new Re;h.setAttribute("position",new Yt(l,3)),h.setAttribute("color",new Yt(c,3));const u=new lu({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class $p extends Vi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function ih(i,t,e,n){const s=jp(n);switch(e){case Kh:return i*t;case Nl:return i*t/s.components*s.byteLength;case Ol:return i*t/s.components*s.byteLength;case $h:return i*t*2/s.components*s.byteLength;case Fl:return i*t*2/s.components*s.byteLength;case Jh:return i*t*3/s.components*s.byteLength;case Tn:return i*t*4/s.components*s.byteLength;case Bl:return i*t*4/s.components*s.byteLength;case vo:case xo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case yo:case Mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ka:case $a:return Math.max(i,16)*Math.max(t,8)/4;case Za:case Ja:return Math.max(i,8)*Math.max(t,8)/2;case ja:case Qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case el:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case nl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case il:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case sl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case rl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ol:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case al:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ll:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case cl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case hl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ul:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case dl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case fl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case pl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ml:case gl:case _l:return Math.ceil(i/4)*Math.ceil(t/4)*16;case vl:case xl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case yl:case Ml:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function jp(i){switch(i){case Nn:case Xh:return{byteLength:1,components:1};case mr:case qh:case Ar:return{byteLength:2,components:1};case Il:case Ul:return{byteLength:2,components:4};case Oi:case Ll:case Ln:return{byteLength:4,components:1};case Yh:case Zh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dl);function wu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Qp(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var tm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,em=`#ifdef USE_ALPHAHASH
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
#endif`,nm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,im=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,om=`#ifdef USE_AOMAP
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
#endif`,am=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lm=`#ifdef USE_BATCHING
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
#endif`,cm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,um=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fm=`#ifdef USE_IRIDESCENCE
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
#endif`,pm=`#ifdef USE_BUMPMAP
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
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ym=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Em=`#define PI 3.141592653589793
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
} // validated`,wm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tm=`vec3 transformedNormal = objectNormal;
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
#endif`,bm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Am=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lm=`#ifdef USE_ENVMAP
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
#endif`,Im=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Um=`#ifdef USE_ENVMAP
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
#endif`,Nm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Om=`#ifdef USE_ENVMAP
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
#endif`,Fm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,km=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hm=`#ifdef USE_GRADIENTMAP
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
}`,Gm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xm=`uniform bool receiveShadow;
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
#endif`,qm=`#ifdef USE_ENVMAP
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
#endif`,Ym=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Km=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$m=`PhysicalMaterial material;
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
#endif`,jm=`struct PhysicalMaterial {
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
}`,Qm=`
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
#endif`,tg=`#if defined( RE_IndirectDiffuse )
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
#endif`,eg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ng=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ig=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,og=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ag=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cg=`#if defined( USE_POINTS_UV )
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
#endif`,hg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ug=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mg=`#ifdef USE_MORPHTARGETS
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
#endif`,gg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_g=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sg=`#ifdef USE_NORMALMAP
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
#endif`,Eg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ag=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ig=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ug=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ng=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Og=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bg=`float getShadowMask() {
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
}`,zg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kg=`#ifdef USE_SKINNING
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
#endif`,Hg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gg=`#ifdef USE_SKINNING
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
#endif`,Vg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yg=`#ifdef USE_TRANSMISSION
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
#endif`,Zg=`#ifdef USE_TRANSMISSION
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
#endif`,Kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,t_=`uniform sampler2D t2D;
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
}`,e_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,i_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r_=`#include <common>
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
}`,o_=`#if DEPTH_PACKING == 3200
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
}`,a_=`#define DISTANCE
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
}`,l_=`#define DISTANCE
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
}`,c_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,h_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u_=`uniform float scale;
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
}`,d_=`uniform vec3 diffuse;
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
}`,f_=`#include <common>
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
}`,p_=`uniform vec3 diffuse;
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
}`,m_=`#define LAMBERT
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
}`,g_=`#define LAMBERT
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
}`,__=`#define MATCAP
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
}`,v_=`#define MATCAP
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
}`,x_=`#define NORMAL
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
}`,y_=`#define NORMAL
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
}`,M_=`#define PHONG
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
}`,S_=`#define PHONG
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
}`,E_=`#define STANDARD
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
}`,w_=`#define STANDARD
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
}`,T_=`#define TOON
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
}`,b_=`#define TOON
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
}`,A_=`uniform float size;
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
}`,R_=`uniform vec3 diffuse;
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
}`,C_=`#include <common>
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
}`,P_=`uniform vec3 color;
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
}`,D_=`uniform float rotation;
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
}`,L_=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:tm,alphahash_pars_fragment:em,alphamap_fragment:nm,alphamap_pars_fragment:im,alphatest_fragment:sm,alphatest_pars_fragment:rm,aomap_fragment:om,aomap_pars_fragment:am,batching_pars_vertex:lm,batching_vertex:cm,begin_vertex:hm,beginnormal_vertex:um,bsdfs:dm,iridescence_fragment:fm,bumpmap_pars_fragment:pm,clipping_planes_fragment:mm,clipping_planes_pars_fragment:gm,clipping_planes_pars_vertex:_m,clipping_planes_vertex:vm,color_fragment:xm,color_pars_fragment:ym,color_pars_vertex:Mm,color_vertex:Sm,common:Em,cube_uv_reflection_fragment:wm,defaultnormal_vertex:Tm,displacementmap_pars_vertex:bm,displacementmap_vertex:Am,emissivemap_fragment:Rm,emissivemap_pars_fragment:Cm,colorspace_fragment:Pm,colorspace_pars_fragment:Dm,envmap_fragment:Lm,envmap_common_pars_fragment:Im,envmap_pars_fragment:Um,envmap_pars_vertex:Nm,envmap_physical_pars_fragment:qm,envmap_vertex:Om,fog_vertex:Fm,fog_pars_vertex:Bm,fog_fragment:zm,fog_pars_fragment:km,gradientmap_pars_fragment:Hm,lightmap_pars_fragment:Gm,lights_lambert_fragment:Vm,lights_lambert_pars_fragment:Wm,lights_pars_begin:Xm,lights_toon_fragment:Ym,lights_toon_pars_fragment:Zm,lights_phong_fragment:Km,lights_phong_pars_fragment:Jm,lights_physical_fragment:$m,lights_physical_pars_fragment:jm,lights_fragment_begin:Qm,lights_fragment_maps:tg,lights_fragment_end:eg,logdepthbuf_fragment:ng,logdepthbuf_pars_fragment:ig,logdepthbuf_pars_vertex:sg,logdepthbuf_vertex:rg,map_fragment:og,map_pars_fragment:ag,map_particle_fragment:lg,map_particle_pars_fragment:cg,metalnessmap_fragment:hg,metalnessmap_pars_fragment:ug,morphinstance_vertex:dg,morphcolor_vertex:fg,morphnormal_vertex:pg,morphtarget_pars_vertex:mg,morphtarget_vertex:gg,normal_fragment_begin:_g,normal_fragment_maps:vg,normal_pars_fragment:xg,normal_pars_vertex:yg,normal_vertex:Mg,normalmap_pars_fragment:Sg,clearcoat_normal_fragment_begin:Eg,clearcoat_normal_fragment_maps:wg,clearcoat_pars_fragment:Tg,iridescence_pars_fragment:bg,opaque_fragment:Ag,packing:Rg,premultiplied_alpha_fragment:Cg,project_vertex:Pg,dithering_fragment:Dg,dithering_pars_fragment:Lg,roughnessmap_fragment:Ig,roughnessmap_pars_fragment:Ug,shadowmap_pars_fragment:Ng,shadowmap_pars_vertex:Og,shadowmap_vertex:Fg,shadowmask_pars_fragment:Bg,skinbase_vertex:zg,skinning_pars_vertex:kg,skinning_vertex:Hg,skinnormal_vertex:Gg,specularmap_fragment:Vg,specularmap_pars_fragment:Wg,tonemapping_fragment:Xg,tonemapping_pars_fragment:qg,transmission_fragment:Yg,transmission_pars_fragment:Zg,uv_pars_fragment:Kg,uv_pars_vertex:Jg,uv_vertex:$g,worldpos_vertex:jg,background_vert:Qg,background_frag:t_,backgroundCube_vert:e_,backgroundCube_frag:n_,cube_vert:i_,cube_frag:s_,depth_vert:r_,depth_frag:o_,distanceRGBA_vert:a_,distanceRGBA_frag:l_,equirect_vert:c_,equirect_frag:h_,linedashed_vert:u_,linedashed_frag:d_,meshbasic_vert:f_,meshbasic_frag:p_,meshlambert_vert:m_,meshlambert_frag:g_,meshmatcap_vert:__,meshmatcap_frag:v_,meshnormal_vert:x_,meshnormal_frag:y_,meshphong_vert:M_,meshphong_frag:S_,meshphysical_vert:E_,meshphysical_frag:w_,meshtoon_vert:T_,meshtoon_frag:b_,points_vert:A_,points_frag:R_,shadow_vert:C_,shadow_frag:P_,sprite_vert:D_,sprite_frag:L_},ft={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Pn={basic:{uniforms:Xe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Xe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new kt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Xe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Xe([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Xe([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new kt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Xe([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Xe([ft.points,ft.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Xe([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Xe([ft.common,ft.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Xe([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Xe([ft.sprite,ft.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:Xe([ft.common,ft.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:Xe([ft.lights,ft.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Pn.physical={uniforms:Xe([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const uo={r:0,b:0,g:0},wi=new On,I_=new ce;function U_(i,t,e,n,s,r,o){const a=new kt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?e:t).get(_)),_}function v(M){let _=!1;const b=g(M);b===null?p(a,l):b&&b.isColor&&(p(b,1),_=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,_){const b=g(_);b&&(b.isCubeTexture||b.mapping===Oo)?(h===void 0&&(h=new Tt(new ln(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:Ls(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),wi.copy(_.backgroundRotation),wi.x*=-1,wi.y*=-1,wi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(I_.makeRotationFromEuler(wi)),h.material.toneMapped=se.getTransfer(b.colorSpace)!==de,(u!==b||d!==b.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,f=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Tt(new jn(2,2),new Fn({name:"BackgroundMaterial",uniforms:Ls(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=se.getTransfer(b.colorSpace)!==de,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,_){M.getRGB(uo,ru(i)),n.buffers.color.setClear(uo.r,uo.g,uo.b,_,o)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,_=1){a.set(M),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:v,addToRenderList:m,dispose:E}}function N_(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(y,D,N,B,W){let V=!1;const q=u(B,N,D);r!==q&&(r=q,c(r.object)),V=f(y,B,N,W),V&&g(y,B,N,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,_(y,D,N,B),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,D,N){const B=N.wireframe===!0;let W=n[y.id];W===void 0&&(W={},n[y.id]=W);let V=W[D.id];V===void 0&&(V={},W[D.id]=V);let q=V[B];return q===void 0&&(q=d(l()),V[B]=q),q}function d(y){const D=[],N=[],B=[];for(let W=0;W<e;W++)D[W]=0,N[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:B,object:y,attributes:{},index:null}}function f(y,D,N,B){const W=r.attributes,V=D.attributes;let q=0;const J=N.getAttributes();for(const X in J)if(J[X].location>=0){const mt=W[X];let yt=V[X];if(yt===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(yt=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(yt=y.instanceColor)),mt===void 0||mt.attribute!==yt||yt&&mt.data!==yt.data)return!0;q++}return r.attributesNum!==q||r.index!==B}function g(y,D,N,B){const W={},V=D.attributes;let q=0;const J=N.getAttributes();for(const X in J)if(J[X].location>=0){let mt=V[X];mt===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(mt=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(mt=y.instanceColor));const yt={};yt.attribute=mt,mt&&mt.data&&(yt.data=mt.data),W[X]=yt,q++}r.attributes=W,r.attributesNum=q,r.index=B}function v(){const y=r.newAttributes;for(let D=0,N=y.length;D<N;D++)y[D]=0}function m(y){p(y,0)}function p(y,D){const N=r.newAttributes,B=r.enabledAttributes,W=r.attributeDivisors;N[y]=1,B[y]===0&&(i.enableVertexAttribArray(y),B[y]=1),W[y]!==D&&(i.vertexAttribDivisor(y,D),W[y]=D)}function E(){const y=r.newAttributes,D=r.enabledAttributes;for(let N=0,B=D.length;N<B;N++)D[N]!==y[N]&&(i.disableVertexAttribArray(N),D[N]=0)}function M(y,D,N,B,W,V,q){q===!0?i.vertexAttribIPointer(y,D,N,W,V):i.vertexAttribPointer(y,D,N,B,W,V)}function _(y,D,N,B){v();const W=B.attributes,V=N.getAttributes(),q=D.defaultAttributeValues;for(const J in V){const X=V[J];if(X.location>=0){let ut=W[J];if(ut===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(ut=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(ut=y.instanceColor)),ut!==void 0){const mt=ut.normalized,yt=ut.itemSize,Ft=t.get(ut);if(Ft===void 0)continue;const Ht=Ft.buffer,re=Ft.type,$t=Ft.bytesPerElement,Z=re===i.INT||re===i.UNSIGNED_INT||ut.gpuType===Ll;if(ut.isInterleavedBufferAttribute){const tt=ut.data,vt=tt.stride,bt=ut.offset;if(tt.isInstancedInterleavedBuffer){for(let xt=0;xt<X.locationSize;xt++)p(X.location+xt,tt.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let xt=0;xt<X.locationSize;xt++)m(X.location+xt);i.bindBuffer(i.ARRAY_BUFFER,Ht);for(let xt=0;xt<X.locationSize;xt++)M(X.location+xt,yt/X.locationSize,re,mt,vt*$t,(bt+yt/X.locationSize*xt)*$t,Z)}else{if(ut.isInstancedBufferAttribute){for(let tt=0;tt<X.locationSize;tt++)p(X.location+tt,ut.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let tt=0;tt<X.locationSize;tt++)m(X.location+tt);i.bindBuffer(i.ARRAY_BUFFER,Ht);for(let tt=0;tt<X.locationSize;tt++)M(X.location+tt,yt/X.locationSize,re,mt,yt*$t,yt/X.locationSize*tt*$t,Z)}}else if(q!==void 0){const mt=q[J];if(mt!==void 0)switch(mt.length){case 2:i.vertexAttrib2fv(X.location,mt);break;case 3:i.vertexAttrib3fv(X.location,mt);break;case 4:i.vertexAttrib4fv(X.location,mt);break;default:i.vertexAttrib1fv(X.location,mt)}}}}E()}function b(){L();for(const y in n){const D=n[y];for(const N in D){const B=D[N];for(const W in B)h(B[W].object),delete B[W];delete D[N]}delete n[y]}}function R(y){if(n[y.id]===void 0)return;const D=n[y.id];for(const N in D){const B=D[N];for(const W in B)h(B[W].object),delete B[W];delete D[N]}delete n[y.id]}function C(y){for(const D in n){const N=n[D];if(N[y.id]===void 0)continue;const B=N[y.id];for(const W in B)h(B[W].object),delete B[W];delete N[y.id]}}function L(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:S,dispose:b,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:E}}function O_(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function F_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Tn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const L=C===Ar&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Nn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Ln&&!L)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:b,maxSamples:R}}function B_(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ai,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const E=r?0:n,M=E*4;let _=p.clippingState||null;l.value=_,_=h(g,d,M,f);for(let b=0;b!==M;++b)_[b]=e[b];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,_=f;M!==v;++M,_+=4)o.copy(u[M]).applyMatrix4(E,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function z_(i){let t=new WeakMap;function e(o,a){return a===Wa?o.mapping=Cs:a===Xa&&(o.mapping=Ps),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Wa||a===Xa)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new jf(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const ps=4,sh=[.125,.215,.35,.446,.526,.582],Ri=20,Sa=new Eu,rh=new kt;let Ea=null,wa=0,Ta=0,ba=!1;const bi=(1+Math.sqrt(5))/2,us=1/bi,oh=[new A(-bi,us,0),new A(bi,us,0),new A(-us,0,bi),new A(us,0,bi),new A(0,bi,-us),new A(0,bi,us),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],k_=new A;class ah{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=k_}=r;Ea=this._renderer.getRenderTarget(),wa=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ch(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ea,wa,Ta),this._renderer.xr.enabled=ba,t.scissorTest=!1,fo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Cs||t.mapping===Ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ea=this._renderer.getRenderTarget(),wa=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Ar,format:Tn,colorSpace:Ds,depthBuffer:!1},s=lh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=H_(r)),this._blurMaterial=G_(r,t,e)}return s}_compileMaterial(t){const e=new Tt(this._lodPlanes[0],t);this._renderer.compile(e,Sa)}_sceneToCubeUV(t,e,n,s,r){const l=new an(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(rh),u.toneMapping=di,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const v=new Be({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1}),m=new Tt(new ln,v);let p=!1;const E=t.background;E?E.isColor&&(v.color.copy(E),t.background=null,p=!0):(v.color.copy(rh),p=!0);for(let M=0;M<6;M++){const _=M%3;_===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):_===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));const b=this._cubeSize;fo(s,_*b,M>2?b:0,b,b),u.setRenderTarget(s),p&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=E}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Cs||t.mapping===Ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ch());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Tt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;fo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Sa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=oh[(s-r-1)%oh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Tt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ri-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Ri;m>Ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ri}`);const p=[];let E=0;for(let C=0;C<Ri;++C){const L=C/v,S=Math.exp(-L*L/2);p.push(S),C===0?E+=S:C<m&&(E+=2*S)}for(let C=0;C<p.length;C++)p[C]=p[C]/E;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const _=this._sizeLods[s],b=3*_*(s>M-ps?s-M+ps:0),R=4*(this._cubeSize-_);fo(e,b,R,3*_,2*_),l.setRenderTarget(e),l.render(u,Sa)}}function H_(i){const t=[],e=[],n=[];let s=i;const r=i-ps+1+sh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-ps?l=sh[o-i+ps-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,E=new Float32Array(v*g*f),M=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let R=0;R<f;R++){const C=R%3*2/3-1,L=R>2?0:-1,S=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];E.set(S,v*g*R),M.set(d,m*g*R);const y=[R,R,R,R,R,R];_.set(y,p*g*R)}const b=new Re;b.setAttribute("position",new _n(E,v)),b.setAttribute("uv",new _n(M,m)),b.setAttribute("faceIndex",new _n(_,p)),t.push(b),s>ps&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function lh(i,t,e){const n=new zi(i,t,e);return n.texture.mapping=Oo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function G_(i,t,e){const n=new Float32Array(Ri),s=new A(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Jl(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function ch(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jl(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function hh(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Jl(){return`

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
	`}function V_(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Wa||l===Xa,h=l===Cs||l===Ps;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new ah(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new ah(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function W_(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&yr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function X_(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],i.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const E=f.array;v=f.version;for(let M=0,_=E.length;M<_;M+=3){const b=E[M+0],R=E[M+1],C=E[M+2];d.push(b,R,R,C,C,b)}}else if(g!==void 0){const E=g.array;v=g.version;for(let M=0,_=E.length/3-1;M<_;M+=3){const b=M+0,R=M+1,C=M+2;d.push(b,R,R,C,C,b)}}else return;const m=new(tu(d)?su:iu)(d,1);m.version=v;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function q_(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let p=0;for(let E=0;E<g;E++)p+=f[E]*v[E];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Y_(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Z_(i,t,e){const n=new WeakMap,s=new pe;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let y=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let b=a.attributes.position.count*_,R=1;b>t.maxTextureSize&&(R=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const C=new Float32Array(b*R*4*u),L=new eu(C,b,R,u);L.type=Ln,L.needsUpdate=!0;const S=_*4;for(let D=0;D<u;D++){const N=p[D],B=E[D],W=M[D],V=b*R*4*D;for(let q=0;q<N.count;q++){const J=q*S;g===!0&&(s.fromBufferAttribute(N,q),C[V+J+0]=s.x,C[V+J+1]=s.y,C[V+J+2]=s.z,C[V+J+3]=0),v===!0&&(s.fromBufferAttribute(B,q),C[V+J+4]=s.x,C[V+J+5]=s.y,C[V+J+6]=s.z,C[V+J+7]=0),m===!0&&(s.fromBufferAttribute(W,q),C[V+J+8]=s.x,C[V+J+9]=s.y,C[V+J+10]=s.z,C[V+J+11]=W.itemSize===4?s.w:1)}}d={count:u,texture:L,size:new it(b,R)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function K_(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Tu=new Ye,uh=new hu(1,1),bu=new eu,Au=new Nf,Ru=new au,dh=[],fh=[],ph=new Float32Array(16),mh=new Float32Array(9),gh=new Float32Array(4);function zs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=dh[s];if(r===void 0&&(r=new Float32Array(s),dh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ne(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Bo(i,t){let e=fh[t];e===void 0&&(e=new Int32Array(t),fh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function J_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function $_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2fv(this.addr,t),Oe(e,t)}}function j_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;i.uniform3fv(this.addr,t),Oe(e,t)}}function Q_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4fv(this.addr,t),Oe(e,t)}}function t0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Ne(e,n))return;gh.set(n),i.uniformMatrix2fv(this.addr,!1,gh),Oe(e,n)}}function e0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Ne(e,n))return;mh.set(n),i.uniformMatrix3fv(this.addr,!1,mh),Oe(e,n)}}function n0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Ne(e,n))return;ph.set(n),i.uniformMatrix4fv(this.addr,!1,ph),Oe(e,n)}}function i0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function s0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2iv(this.addr,t),Oe(e,t)}}function r0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3iv(this.addr,t),Oe(e,t)}}function o0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4iv(this.addr,t),Oe(e,t)}}function a0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function l0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2uiv(this.addr,t),Oe(e,t)}}function c0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3uiv(this.addr,t),Oe(e,t)}}function h0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4uiv(this.addr,t),Oe(e,t)}}function u0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(uh.compareFunction=Qh,r=uh):r=Tu,e.setTexture2D(t||r,s)}function d0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Au,s)}function f0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ru,s)}function p0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||bu,s)}function m0(i){switch(i){case 5126:return J_;case 35664:return $_;case 35665:return j_;case 35666:return Q_;case 35674:return t0;case 35675:return e0;case 35676:return n0;case 5124:case 35670:return i0;case 35667:case 35671:return s0;case 35668:case 35672:return r0;case 35669:case 35673:return o0;case 5125:return a0;case 36294:return l0;case 36295:return c0;case 36296:return h0;case 35678:case 36198:case 36298:case 36306:case 35682:return u0;case 35679:case 36299:case 36307:return d0;case 35680:case 36300:case 36308:case 36293:return f0;case 36289:case 36303:case 36311:case 36292:return p0}}function g0(i,t){i.uniform1fv(this.addr,t)}function _0(i,t){const e=zs(t,this.size,2);i.uniform2fv(this.addr,e)}function v0(i,t){const e=zs(t,this.size,3);i.uniform3fv(this.addr,e)}function x0(i,t){const e=zs(t,this.size,4);i.uniform4fv(this.addr,e)}function y0(i,t){const e=zs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function M0(i,t){const e=zs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function S0(i,t){const e=zs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function E0(i,t){i.uniform1iv(this.addr,t)}function w0(i,t){i.uniform2iv(this.addr,t)}function T0(i,t){i.uniform3iv(this.addr,t)}function b0(i,t){i.uniform4iv(this.addr,t)}function A0(i,t){i.uniform1uiv(this.addr,t)}function R0(i,t){i.uniform2uiv(this.addr,t)}function C0(i,t){i.uniform3uiv(this.addr,t)}function P0(i,t){i.uniform4uiv(this.addr,t)}function D0(i,t,e){const n=this.cache,s=t.length,r=Bo(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Tu,r[o])}function L0(i,t,e){const n=this.cache,s=t.length,r=Bo(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Au,r[o])}function I0(i,t,e){const n=this.cache,s=t.length,r=Bo(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ru,r[o])}function U0(i,t,e){const n=this.cache,s=t.length,r=Bo(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||bu,r[o])}function N0(i){switch(i){case 5126:return g0;case 35664:return _0;case 35665:return v0;case 35666:return x0;case 35674:return y0;case 35675:return M0;case 35676:return S0;case 5124:case 35670:return E0;case 35667:case 35671:return w0;case 35668:case 35672:return T0;case 35669:case 35673:return b0;case 5125:return A0;case 36294:return R0;case 36295:return C0;case 36296:return P0;case 35678:case 36198:case 36298:case 36306:case 35682:return D0;case 35679:case 36299:case 36307:return L0;case 35680:case 36300:case 36308:case 36293:return I0;case 36289:case 36303:case 36311:case 36292:return U0}}class O0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=m0(e.type)}}class F0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=N0(e.type)}}class B0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Aa=/(\w+)(\])?(\[|\.)?/g;function _h(i,t){i.seq.push(t),i.map[t.id]=t}function z0(i,t,e){const n=i.name,s=n.length;for(Aa.lastIndex=0;;){const r=Aa.exec(n),o=Aa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){_h(e,c===void 0?new O0(a,i,t):new F0(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new B0(a),_h(e,u)),e=u}}}class So{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);z0(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function vh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const k0=37297;let H0=0;function G0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const xh=new Wt;function V0(i){se._getMatrix(xh,se.workingColorSpace,i);const t=`mat3( ${xh.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(i)){case To:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function yh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+G0(i.getShaderSource(t),a)}else return r}function W0(i,t){const e=V0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function X0(i,t){let e;switch(t){case Yd:e="Linear";break;case Zd:e="Reinhard";break;case Kd:e="Cineon";break;case Vh:e="ACESFilmic";break;case $d:e="AgX";break;case jd:e="Neutral";break;case Jd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const po=new A;function q0(){se.getLuminanceCoefficients(po);const i=po.x.toFixed(4),t=po.y.toFixed(4),e=po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Y0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sr).join(`
`)}function Z0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function K0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function sr(i){return i!==""}function Mh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const J0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Al(i){return i.replace(J0,j0)}const $0=new Map;function j0(i,t){let e=Zt[t];if(e===void 0){const n=$0.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Al(e)}const Q0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eh(i){return i.replace(Q0,tv)}function tv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ev(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Hh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===bd?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Wn&&(t="SHADOWMAP_TYPE_VSM"),t}function nv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Cs:case Ps:t="ENVMAP_TYPE_CUBE";break;case Oo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function iv(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ps&&(t="ENVMAP_MODE_REFRACTION"),t}function sv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Gh:t="ENVMAP_BLENDING_MULTIPLY";break;case Xd:t="ENVMAP_BLENDING_MIX";break;case qd:t="ENVMAP_BLENDING_ADD";break}return t}function rv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ov(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=ev(e),c=nv(e),h=iv(e),u=sv(e),d=rv(e),f=Y0(e),g=Z0(r),v=s.createProgram();let m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sr).join(`
`),p.length>0&&(p+=`
`)):(m=[wh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),p=[wh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?Zt.tonemapping_pars_fragment:"",e.toneMapping!==di?X0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,W0("linearToOutputTexel",e.outputColorSpace),q0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(sr).join(`
`)),o=Al(o),o=Mh(o,e),o=Sh(o,e),a=Al(a),a=Mh(a,e),a=Sh(a,e),o=Eh(o),a=Eh(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===_c?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=E+m+o,_=E+p+a,b=vh(s,s.VERTEX_SHADER,M),R=vh(s,s.FRAGMENT_SHADER,_);s.attachShader(v,b),s.attachShader(v,R),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(D){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(v)||"",B=s.getShaderInfoLog(b)||"",W=s.getShaderInfoLog(R)||"",V=N.trim(),q=B.trim(),J=W.trim();let X=!0,ut=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,b,R);else{const mt=yh(s,b,"vertex"),yt=yh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+V+`
`+mt+`
`+yt)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(q===""||J==="")&&(ut=!1);ut&&(D.diagnostics={runnable:X,programLog:V,vertexShader:{log:q,prefix:m},fragmentShader:{log:J,prefix:p}})}s.deleteShader(b),s.deleteShader(R),L=new So(s,v),S=K0(s,v)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,k0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=H0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=R,this}let av=0;class lv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new cv(t),e.set(t,n)),n}}class cv{constructor(t){this.id=av++,this.code=t,this.usedTimes=0}}function hv(i,t,e,n,s,r,o){const a=new Hl,l=new lv,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,y,D,N,B){const W=N.fog,V=B.geometry,q=S.isMeshStandardMaterial?N.environment:null,J=(S.isMeshStandardMaterial?e:t).get(S.envMap||q),X=J&&J.mapping===Oo?J.image.height:null,ut=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const mt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,yt=mt!==void 0?mt.length:0;let Ft=0;V.morphAttributes.position!==void 0&&(Ft=1),V.morphAttributes.normal!==void 0&&(Ft=2),V.morphAttributes.color!==void 0&&(Ft=3);let Ht,re,$t,Z;if(ut){const ae=Pn[ut];Ht=ae.vertexShader,re=ae.fragmentShader}else Ht=S.vertexShader,re=S.fragmentShader,l.update(S),$t=l.getVertexShaderID(S),Z=l.getFragmentShaderID(S);const tt=i.getRenderTarget(),vt=i.state.buffers.depth.getReversed(),bt=B.isInstancedMesh===!0,xt=B.isBatchedMesh===!0,Kt=!!S.map,he=!!S.matcap,P=!!J,Q=!!S.aoMap,$=!!S.lightMap,K=!!S.bumpMap,z=!!S.normalMap,at=!!S.displacementMap,nt=!!S.emissiveMap,lt=!!S.metalnessMap,Nt=!!S.roughnessMap,Lt=S.anisotropy>0,T=S.clearcoat>0,x=S.dispersion>0,F=S.iridescence>0,G=S.sheen>0,et=S.transmission>0,Y=Lt&&!!S.anisotropyMap,Pt=T&&!!S.clearcoatMap,ht=T&&!!S.clearcoatNormalMap,At=T&&!!S.clearcoatRoughnessMap,Rt=F&&!!S.iridescenceMap,st=F&&!!S.iridescenceThicknessMap,_t=G&&!!S.sheenColorMap,Bt=G&&!!S.sheenRoughnessMap,Dt=!!S.specularMap,pt=!!S.specularColorMap,Vt=!!S.specularIntensityMap,I=et&&!!S.transmissionMap,ct=et&&!!S.thicknessMap,dt=!!S.gradientMap,Et=!!S.alphaMap,rt=S.alphaTest>0,j=!!S.alphaHash,Ct=!!S.extensions;let Gt=di;S.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Gt=i.toneMapping);const _e={shaderID:ut,shaderType:S.type,shaderName:S.name,vertexShader:Ht,fragmentShader:re,defines:S.defines,customVertexShaderID:$t,customFragmentShaderID:Z,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:xt,batchingColor:xt&&B._colorsTexture!==null,instancing:bt,instancingColor:bt&&B.instanceColor!==null,instancingMorph:bt&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Ds,alphaToCoverage:!!S.alphaToCoverage,map:Kt,matcap:he,envMap:P,envMapMode:P&&J.mapping,envMapCubeUVHeight:X,aoMap:Q,lightMap:$,bumpMap:K,normalMap:z,displacementMap:d&&at,emissiveMap:nt,normalMapObjectSpace:z&&S.normalMapType===nf,normalMapTangentSpace:z&&S.normalMapType===jh,metalnessMap:lt,roughnessMap:Nt,anisotropy:Lt,anisotropyMap:Y,clearcoat:T,clearcoatMap:Pt,clearcoatNormalMap:ht,clearcoatRoughnessMap:At,dispersion:x,iridescence:F,iridescenceMap:Rt,iridescenceThicknessMap:st,sheen:G,sheenColorMap:_t,sheenRoughnessMap:Bt,specularMap:Dt,specularColorMap:pt,specularIntensityMap:Vt,transmission:et,transmissionMap:I,thicknessMap:ct,gradientMap:dt,opaque:S.transparent===!1&&S.blending===Li&&S.alphaToCoverage===!1,alphaMap:Et,alphaTest:rt,alphaHash:j,combine:S.combine,mapUv:Kt&&v(S.map.channel),aoMapUv:Q&&v(S.aoMap.channel),lightMapUv:$&&v(S.lightMap.channel),bumpMapUv:K&&v(S.bumpMap.channel),normalMapUv:z&&v(S.normalMap.channel),displacementMapUv:at&&v(S.displacementMap.channel),emissiveMapUv:nt&&v(S.emissiveMap.channel),metalnessMapUv:lt&&v(S.metalnessMap.channel),roughnessMapUv:Nt&&v(S.roughnessMap.channel),anisotropyMapUv:Y&&v(S.anisotropyMap.channel),clearcoatMapUv:Pt&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:ht&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:st&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&v(S.sheenRoughnessMap.channel),specularMapUv:Dt&&v(S.specularMap.channel),specularColorMapUv:pt&&v(S.specularColorMap.channel),specularIntensityMapUv:Vt&&v(S.specularIntensityMap.channel),transmissionMapUv:I&&v(S.transmissionMap.channel),thicknessMapUv:ct&&v(S.thicknessMap.channel),alphaMapUv:Et&&v(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(z||Lt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!V.attributes.uv&&(Kt||Et),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:vt,skinning:B.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Ft,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Gt,decodeVideoTexture:Kt&&S.map.isVideoTexture===!0&&se.getTransfer(S.map.colorSpace)===de,decodeVideoTextureEmissive:nt&&S.emissiveMap.isVideoTexture===!0&&se.getTransfer(S.emissiveMap.colorSpace)===de,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Le,flipSided:S.side===Qe,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ct&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&S.extensions.multiDraw===!0||xt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return _e.vertexUv1s=c.has(1),_e.vertexUv2s=c.has(2),_e.vertexUv3s=c.has(3),c.clear(),_e}function p(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)y.push(D),y.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(E(y,S),M(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function E(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function M(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){const y=g[S.type];let D;if(y){const N=Pn[y];D=Zf.clone(N.uniforms)}else D=S.uniforms;return D}function b(S,y){let D;for(let N=0,B=h.length;N<B;N++){const W=h[N];if(W.cacheKey===y){D=W,++D.usedTimes;break}}return D===void 0&&(D=new ov(i,y,S,r),h.push(D)),D}function R(S){if(--S.usedTimes===0){const y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function C(S){l.remove(S)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:b,releaseProgram:R,releaseShaderCache:C,programs:h,dispose:L}}function uv(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function dv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Th(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function bh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,v,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function a(u,d,f,g,v,m){const p=o(u,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,v,m){const p=o(u,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||dv),n.length>1&&n.sort(d||Th),s.length>1&&s.sort(d||Th)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function fv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new bh,i.set(n,[o])):s>=r.length?(o=new bh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function pv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new kt};break;case"SpotLight":e={position:new A,direction:new A,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new A,halfWidth:new A,halfHeight:new A};break}return i[t.id]=e,e}}}function mv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let gv=0;function _v(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function vv(i){const t=new pv,e=mv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);const s=new A,r=new ce,o=new ce;function a(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,E=0,M=0,_=0,b=0,R=0,C=0;c.sort(_v);for(let S=0,y=c.length;S<y;S++){const D=c[S],N=D.color,B=D.intensity,W=D.distance,V=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=N.r*B,u+=N.g*B,d+=N.b*B;else if(D.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(D.sh.coefficients[q],B);C++}else if(D.isDirectionalLight){const q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const J=D.shadow,X=e.get(D);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=D.shadow.matrix,E++}n.directional[f]=q,f++}else if(D.isSpotLight){const q=t.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(N).multiplyScalar(B),q.distance=W,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,n.spot[v]=q;const J=D.shadow;if(D.map&&(n.spotLightMap[b]=D.map,b++,J.updateMatrices(D),D.castShadow&&R++),n.spotLightMatrix[v]=J.matrix,D.castShadow){const X=e.get(D);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,n.spotShadow[v]=X,n.spotShadowMap[v]=V,_++}v++}else if(D.isRectAreaLight){const q=t.get(D);q.color.copy(N).multiplyScalar(B),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=q,m++}else if(D.isPointLight){const q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),q.distance=D.distance,q.decay=D.decay,D.castShadow){const J=D.shadow,X=e.get(D);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,X.shadowCameraNear=J.camera.near,X.shadowCameraFar=J.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=D.shadow.matrix,M++}n.point[g]=q,g++}else if(D.isHemisphereLight){const q=t.get(D);q.skyColor.copy(D.color).multiplyScalar(B),q.groundColor.copy(D.groundColor).multiplyScalar(B),n.hemi[p]=q,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==E||L.numPointShadows!==M||L.numSpotShadows!==_||L.numSpotMaps!==b||L.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+b-R,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=C,L.directionalLength=f,L.pointLength=g,L.spotLength=v,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=E,L.numPointShadows=M,L.numSpotShadows=_,L.numSpotMaps=b,L.numLightProbes=C,n.version=gv++)}function l(c,h){let u=0,d=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const M=c[p];if(M.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(M.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function Ah(i){const t=new vv(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function xv(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Ah(i),t.set(s,[a])):r>=o.length?(a=new Ah(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const yv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mv=`uniform sampler2D shadow_pass;
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
}`;function Sv(i,t,e){let n=new Vl;const s=new it,r=new it,o=new pe,a=new kp({depthPacking:ef}),l=new Hp,c={},h=e.maxTextureSize,u={[mi]:Qe,[Qe]:mi,[Le]:Le},d=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:yv,fragmentShader:Mv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Re;g.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Tt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hh;let p=this.type;this.render=function(R,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const S=i.getRenderTarget(),y=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),N=i.state;N.setBlending(ui),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=p!==Wn&&this.type===Wn,W=p===Wn&&this.type!==Wn;for(let V=0,q=R.length;V<q;V++){const J=R[V],X=J.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const ut=X.getFrameExtents();if(s.multiply(ut),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ut.x),s.x=r.x*ut.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ut.y),s.y=r.y*ut.y,X.mapSize.y=r.y)),X.map===null||B===!0||W===!0){const yt=this.type!==Wn?{minFilter:hn,magFilter:hn}:{};X.map!==null&&X.map.dispose(),X.map=new zi(s.x,s.y,yt),X.map.texture.name=J.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const mt=X.getViewportCount();for(let yt=0;yt<mt;yt++){const Ft=X.getViewport(yt);o.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),N.viewport(o),X.updateMatrices(J,yt),n=X.getFrustum(),_(C,L,X.camera,J,this.type)}X.isPointLightShadow!==!0&&this.type===Wn&&E(X,L),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,y,D)};function E(R,C){const L=t.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new zi(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(C,null,L,d,v,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(C,null,L,f,v,null)}function M(R,C,L,S){let y=null;const D=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)y=D;else if(y=L.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const N=y.uuid,B=C.uuid;let W=c[N];W===void 0&&(W={},c[N]=W);let V=W[B];V===void 0&&(V=y.clone(),W[B]=V,C.addEventListener("dispose",b)),y=V}if(y.visible=C.visible,y.wireframe=C.wireframe,S===Wn?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:u[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const N=i.properties.get(y);N.light=L}return y}function _(R,C,L,S,y){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===Wn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const B=t.update(R),W=R.material;if(Array.isArray(W)){const V=B.groups;for(let q=0,J=V.length;q<J;q++){const X=V[q],ut=W[X.materialIndex];if(ut&&ut.visible){const mt=M(R,ut,S,y);R.onBeforeShadow(i,R,C,L,B,mt,X),i.renderBufferDirect(L,null,B,mt,R,X),R.onAfterShadow(i,R,C,L,B,mt,X)}}}else if(W.visible){const V=M(R,W,S,y);R.onBeforeShadow(i,R,C,L,B,V,null),i.renderBufferDirect(L,null,B,V,R,null),R.onAfterShadow(i,R,C,L,B,V,null)}}const N=R.children;for(let B=0,W=N.length;B<W;B++)_(N[B],C,L,S,y)}function b(R){R.target.removeEventListener("dispose",b);for(const L in c){const S=c[L],y=R.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const Ev={[Fa]:Ba,[za]:Ga,[ka]:Va,[Rs]:Ha,[Ba]:Fa,[Ga]:za,[Va]:ka,[Ha]:Rs};function wv(i,t){function e(){let I=!1;const ct=new pe;let dt=null;const Et=new pe(0,0,0,0);return{setMask:function(rt){dt!==rt&&!I&&(i.colorMask(rt,rt,rt,rt),dt=rt)},setLocked:function(rt){I=rt},setClear:function(rt,j,Ct,Gt,_e){_e===!0&&(rt*=Gt,j*=Gt,Ct*=Gt),ct.set(rt,j,Ct,Gt),Et.equals(ct)===!1&&(i.clearColor(rt,j,Ct,Gt),Et.copy(ct))},reset:function(){I=!1,dt=null,Et.set(-1,0,0,0)}}}function n(){let I=!1,ct=!1,dt=null,Et=null,rt=null;return{setReversed:function(j){if(ct!==j){const Ct=t.get("EXT_clip_control");j?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),ct=j;const Gt=rt;rt=null,this.setClear(Gt)}},getReversed:function(){return ct},setTest:function(j){j?tt(i.DEPTH_TEST):vt(i.DEPTH_TEST)},setMask:function(j){dt!==j&&!I&&(i.depthMask(j),dt=j)},setFunc:function(j){if(ct&&(j=Ev[j]),Et!==j){switch(j){case Fa:i.depthFunc(i.NEVER);break;case Ba:i.depthFunc(i.ALWAYS);break;case za:i.depthFunc(i.LESS);break;case Rs:i.depthFunc(i.LEQUAL);break;case ka:i.depthFunc(i.EQUAL);break;case Ha:i.depthFunc(i.GEQUAL);break;case Ga:i.depthFunc(i.GREATER);break;case Va:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Et=j}},setLocked:function(j){I=j},setClear:function(j){rt!==j&&(ct&&(j=1-j),i.clearDepth(j),rt=j)},reset:function(){I=!1,dt=null,Et=null,rt=null,ct=!1}}}function s(){let I=!1,ct=null,dt=null,Et=null,rt=null,j=null,Ct=null,Gt=null,_e=null;return{setTest:function(ae){I||(ae?tt(i.STENCIL_TEST):vt(i.STENCIL_TEST))},setMask:function(ae){ct!==ae&&!I&&(i.stencilMask(ae),ct=ae)},setFunc:function(ae,Bn,Cn){(dt!==ae||Et!==Bn||rt!==Cn)&&(i.stencilFunc(ae,Bn,Cn),dt=ae,Et=Bn,rt=Cn)},setOp:function(ae,Bn,Cn){(j!==ae||Ct!==Bn||Gt!==Cn)&&(i.stencilOp(ae,Bn,Cn),j=ae,Ct=Bn,Gt=Cn)},setLocked:function(ae){I=ae},setClear:function(ae){_e!==ae&&(i.clearStencil(ae),_e=ae)},reset:function(){I=!1,ct=null,dt=null,Et=null,rt=null,j=null,Ct=null,Gt=null,_e=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,E=null,M=null,_=null,b=null,R=null,C=new kt(0,0,0),L=0,S=!1,y=null,D=null,N=null,B=null,W=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,J=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(X)[1]),q=J>=1):X.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),q=J>=2);let ut=null,mt={};const yt=i.getParameter(i.SCISSOR_BOX),Ft=i.getParameter(i.VIEWPORT),Ht=new pe().fromArray(yt),re=new pe().fromArray(Ft);function $t(I,ct,dt,Et){const rt=new Uint8Array(4),j=i.createTexture();i.bindTexture(I,j),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ct=0;Ct<dt;Ct++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,Et,0,i.RGBA,i.UNSIGNED_BYTE,rt):i.texImage2D(ct+Ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,rt);return j}const Z={};Z[i.TEXTURE_2D]=$t(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=$t(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=$t(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=$t(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),tt(i.DEPTH_TEST),o.setFunc(Rs),K(!1),z(dc),tt(i.CULL_FACE),Q(ui);function tt(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function vt(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function bt(I,ct){return u[I]!==ct?(i.bindFramebuffer(I,ct),u[I]=ct,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ct),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function xt(I,ct){let dt=f,Et=!1;if(I){dt=d.get(ct),dt===void 0&&(dt=[],d.set(ct,dt));const rt=I.textures;if(dt.length!==rt.length||dt[0]!==i.COLOR_ATTACHMENT0){for(let j=0,Ct=rt.length;j<Ct;j++)dt[j]=i.COLOR_ATTACHMENT0+j;dt.length=rt.length,Et=!0}}else dt[0]!==i.BACK&&(dt[0]=i.BACK,Et=!0);Et&&i.drawBuffers(dt)}function Kt(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const he={[Ai]:i.FUNC_ADD,[Rd]:i.FUNC_SUBTRACT,[Cd]:i.FUNC_REVERSE_SUBTRACT};he[Pd]=i.MIN,he[Dd]=i.MAX;const P={[Ld]:i.ZERO,[Id]:i.ONE,[Ud]:i.SRC_COLOR,[Na]:i.SRC_ALPHA,[kd]:i.SRC_ALPHA_SATURATE,[Bd]:i.DST_COLOR,[Od]:i.DST_ALPHA,[Nd]:i.ONE_MINUS_SRC_COLOR,[Oa]:i.ONE_MINUS_SRC_ALPHA,[zd]:i.ONE_MINUS_DST_COLOR,[Fd]:i.ONE_MINUS_DST_ALPHA,[Hd]:i.CONSTANT_COLOR,[Gd]:i.ONE_MINUS_CONSTANT_COLOR,[Vd]:i.CONSTANT_ALPHA,[Wd]:i.ONE_MINUS_CONSTANT_ALPHA};function Q(I,ct,dt,Et,rt,j,Ct,Gt,_e,ae){if(I===ui){v===!0&&(vt(i.BLEND),v=!1);return}if(v===!1&&(tt(i.BLEND),v=!0),I!==Ad){if(I!==m||ae!==S){if((p!==Ai||_!==Ai)&&(i.blendEquation(i.FUNC_ADD),p=Ai,_=Ai),ae)switch(I){case Li:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gi:i.blendFunc(i.ONE,i.ONE);break;case fc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Li:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case fc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}E=null,M=null,b=null,R=null,C.set(0,0,0),L=0,m=I,S=ae}return}rt=rt||ct,j=j||dt,Ct=Ct||Et,(ct!==p||rt!==_)&&(i.blendEquationSeparate(he[ct],he[rt]),p=ct,_=rt),(dt!==E||Et!==M||j!==b||Ct!==R)&&(i.blendFuncSeparate(P[dt],P[Et],P[j],P[Ct]),E=dt,M=Et,b=j,R=Ct),(Gt.equals(C)===!1||_e!==L)&&(i.blendColor(Gt.r,Gt.g,Gt.b,_e),C.copy(Gt),L=_e),m=I,S=!1}function $(I,ct){I.side===Le?vt(i.CULL_FACE):tt(i.CULL_FACE);let dt=I.side===Qe;ct&&(dt=!dt),K(dt),I.blending===Li&&I.transparent===!1?Q(ui):Q(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const Et=I.stencilWrite;a.setTest(Et),Et&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),nt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?tt(i.SAMPLE_ALPHA_TO_COVERAGE):vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function K(I){y!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),y=I)}function z(I){I!==wd?(tt(i.CULL_FACE),I!==D&&(I===dc?i.cullFace(i.BACK):I===Td?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):vt(i.CULL_FACE),D=I}function at(I){I!==N&&(q&&i.lineWidth(I),N=I)}function nt(I,ct,dt){I?(tt(i.POLYGON_OFFSET_FILL),(B!==ct||W!==dt)&&(i.polygonOffset(ct,dt),B=ct,W=dt)):vt(i.POLYGON_OFFSET_FILL)}function lt(I){I?tt(i.SCISSOR_TEST):vt(i.SCISSOR_TEST)}function Nt(I){I===void 0&&(I=i.TEXTURE0+V-1),ut!==I&&(i.activeTexture(I),ut=I)}function Lt(I,ct,dt){dt===void 0&&(ut===null?dt=i.TEXTURE0+V-1:dt=ut);let Et=mt[dt];Et===void 0&&(Et={type:void 0,texture:void 0},mt[dt]=Et),(Et.type!==I||Et.texture!==ct)&&(ut!==dt&&(i.activeTexture(dt),ut=dt),i.bindTexture(I,ct||Z[I]),Et.type=I,Et.texture=ct)}function T(){const I=mt[ut];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function G(){try{i.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{i.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pt(){try{i.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ht(){try{i.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{i.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Rt(){try{i.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function st(){try{i.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _t(I){Ht.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Ht.copy(I))}function Bt(I){re.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),re.copy(I))}function Dt(I,ct){let dt=c.get(ct);dt===void 0&&(dt=new WeakMap,c.set(ct,dt));let Et=dt.get(I);Et===void 0&&(Et=i.getUniformBlockIndex(ct,I.name),dt.set(I,Et))}function pt(I,ct){const Et=c.get(ct).get(I);l.get(ct)!==Et&&(i.uniformBlockBinding(ct,Et,I.__bindingPointIndex),l.set(ct,Et))}function Vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ut=null,mt={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,E=null,M=null,_=null,b=null,R=null,C=new kt(0,0,0),L=0,S=!1,y=null,D=null,N=null,B=null,W=null,Ht.set(0,0,i.canvas.width,i.canvas.height),re.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:tt,disable:vt,bindFramebuffer:bt,drawBuffers:xt,useProgram:Kt,setBlending:Q,setMaterial:$,setFlipSided:K,setCullFace:z,setLineWidth:at,setPolygonOffset:nt,setScissorTest:lt,activeTexture:Nt,bindTexture:Lt,unbindTexture:T,compressedTexImage2D:x,compressedTexImage3D:F,texImage2D:Rt,texImage3D:st,updateUBOMapping:Dt,uniformBlockBinding:pt,texStorage2D:ht,texStorage3D:At,texSubImage2D:G,texSubImage3D:et,compressedTexSubImage2D:Y,compressedTexSubImage3D:Pt,scissor:_t,viewport:Bt,reset:Vt}}function Tv(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return f?new OffscreenCanvas(T,x):Ao("canvas")}function v(T,x,F){let G=1;const et=Lt(T);if((et.width>F||et.height>F)&&(G=F/Math.max(et.width,et.height)),G<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Y=Math.floor(G*et.width),Pt=Math.floor(G*et.height);u===void 0&&(u=g(Y,Pt));const ht=x?g(Y,Pt):u;return ht.width=Y,ht.height=Pt,ht.getContext("2d").drawImage(T,0,0,Y,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Y+"x"+Pt+")."),ht}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(T,x,F,G,et=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=x;if(x===i.RED&&(F===i.FLOAT&&(Y=i.R32F),F===i.HALF_FLOAT&&(Y=i.R16F),F===i.UNSIGNED_BYTE&&(Y=i.R8)),x===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.R8UI),F===i.UNSIGNED_SHORT&&(Y=i.R16UI),F===i.UNSIGNED_INT&&(Y=i.R32UI),F===i.BYTE&&(Y=i.R8I),F===i.SHORT&&(Y=i.R16I),F===i.INT&&(Y=i.R32I)),x===i.RG&&(F===i.FLOAT&&(Y=i.RG32F),F===i.HALF_FLOAT&&(Y=i.RG16F),F===i.UNSIGNED_BYTE&&(Y=i.RG8)),x===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RG8UI),F===i.UNSIGNED_SHORT&&(Y=i.RG16UI),F===i.UNSIGNED_INT&&(Y=i.RG32UI),F===i.BYTE&&(Y=i.RG8I),F===i.SHORT&&(Y=i.RG16I),F===i.INT&&(Y=i.RG32I)),x===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),F===i.UNSIGNED_INT&&(Y=i.RGB32UI),F===i.BYTE&&(Y=i.RGB8I),F===i.SHORT&&(Y=i.RGB16I),F===i.INT&&(Y=i.RGB32I)),x===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),F===i.UNSIGNED_INT&&(Y=i.RGBA32UI),F===i.BYTE&&(Y=i.RGBA8I),F===i.SHORT&&(Y=i.RGBA16I),F===i.INT&&(Y=i.RGBA32I)),x===i.RGB&&(F===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),x===i.RGBA){const Pt=et?To:se.getTransfer(G);F===i.FLOAT&&(Y=i.RGBA32F),F===i.HALF_FLOAT&&(Y=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Y=Pt===de?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function _(T,x){let F;return T?x===null||x===Oi||x===gr?F=i.DEPTH24_STENCIL8:x===Ln?F=i.DEPTH32F_STENCIL8:x===mr&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Oi||x===gr?F=i.DEPTH_COMPONENT24:x===Ln?F=i.DEPTH_COMPONENT32F:x===mr&&(F=i.DEPTH_COMPONENT16),F}function b(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==hn&&T.minFilter!==Dn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function R(T){const x=T.target;x.removeEventListener("dispose",R),L(x),x.isVideoTexture&&h.delete(x)}function C(T){const x=T.target;x.removeEventListener("dispose",C),y(x)}function L(T){const x=n.get(T);if(x.__webglInit===void 0)return;const F=T.source,G=d.get(F);if(G){const et=G[x.__cacheKey];et.usedTimes--,et.usedTimes===0&&S(T),Object.keys(G).length===0&&d.delete(F)}n.remove(T)}function S(T){const x=n.get(T);i.deleteTexture(x.__webglTexture);const F=T.source,G=d.get(F);delete G[x.__cacheKey],o.memory.textures--}function y(T){const x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(x.__webglFramebuffer[G]))for(let et=0;et<x.__webglFramebuffer[G].length;et++)i.deleteFramebuffer(x.__webglFramebuffer[G][et]);else i.deleteFramebuffer(x.__webglFramebuffer[G]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[G])}else{if(Array.isArray(x.__webglFramebuffer))for(let G=0;G<x.__webglFramebuffer.length;G++)i.deleteFramebuffer(x.__webglFramebuffer[G]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let G=0;G<x.__webglColorRenderbuffer.length;G++)x.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[G]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=T.textures;for(let G=0,et=F.length;G<et;G++){const Y=n.get(F[G]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(F[G])}n.remove(T)}let D=0;function N(){D=0}function B(){const T=D;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),D+=1,T}function W(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function V(T,x){const F=n.get(T);if(T.isVideoTexture&&lt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&F.__version!==T.version){const G=T.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(F,T,x);return}}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+x)}function q(T,x){const F=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){Z(F,T,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+x)}function J(T,x){const F=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){Z(F,T,x);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+x)}function X(T,x){const F=n.get(T);if(T.version>0&&F.__version!==T.version){tt(F,T,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+x)}const ut={[qa]:i.REPEAT,[Pi]:i.CLAMP_TO_EDGE,[Ya]:i.MIRRORED_REPEAT},mt={[hn]:i.NEAREST,[Qd]:i.NEAREST_MIPMAP_NEAREST,[zr]:i.NEAREST_MIPMAP_LINEAR,[Dn]:i.LINEAR,[Yo]:i.LINEAR_MIPMAP_NEAREST,[Di]:i.LINEAR_MIPMAP_LINEAR},yt={[sf]:i.NEVER,[hf]:i.ALWAYS,[rf]:i.LESS,[Qh]:i.LEQUAL,[of]:i.EQUAL,[cf]:i.GEQUAL,[af]:i.GREATER,[lf]:i.NOTEQUAL};function Ft(T,x){if(x.type===Ln&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Dn||x.magFilter===Yo||x.magFilter===zr||x.magFilter===Di||x.minFilter===Dn||x.minFilter===Yo||x.minFilter===zr||x.minFilter===Di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,ut[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,ut[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,ut[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,mt[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,mt[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,yt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===hn||x.minFilter!==zr&&x.minFilter!==Di||x.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ht(T,x){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",R));const G=x.source;let et=d.get(G);et===void 0&&(et={},d.set(G,et));const Y=W(x);if(Y!==T.__cacheKey){et[Y]===void 0&&(et[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),et[Y].usedTimes++;const Pt=et[T.__cacheKey];Pt!==void 0&&(et[T.__cacheKey].usedTimes--,Pt.usedTimes===0&&S(x)),T.__cacheKey=Y,T.__webglTexture=et[Y].texture}return F}function re(T,x,F){return Math.floor(Math.floor(T/F)/x)}function $t(T,x,F,G){const Y=T.updateRanges;if(Y.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,F,G,x.data);else{Y.sort((st,_t)=>st.start-_t.start);let Pt=0;for(let st=1;st<Y.length;st++){const _t=Y[Pt],Bt=Y[st],Dt=_t.start+_t.count,pt=re(Bt.start,x.width,4),Vt=re(_t.start,x.width,4);Bt.start<=Dt+1&&pt===Vt&&re(Bt.start+Bt.count-1,x.width,4)===pt?_t.count=Math.max(_t.count,Bt.start+Bt.count-_t.start):(++Pt,Y[Pt]=Bt)}Y.length=Pt+1;const ht=i.getParameter(i.UNPACK_ROW_LENGTH),At=i.getParameter(i.UNPACK_SKIP_PIXELS),Rt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let st=0,_t=Y.length;st<_t;st++){const Bt=Y[st],Dt=Math.floor(Bt.start/4),pt=Math.ceil(Bt.count/4),Vt=Dt%x.width,I=Math.floor(Dt/x.width),ct=pt,dt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Vt),i.pixelStorei(i.UNPACK_SKIP_ROWS,I),e.texSubImage2D(i.TEXTURE_2D,0,Vt,I,ct,dt,F,G,x.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ht),i.pixelStorei(i.UNPACK_SKIP_PIXELS,At),i.pixelStorei(i.UNPACK_SKIP_ROWS,Rt)}}function Z(T,x,F){let G=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(G=i.TEXTURE_3D);const et=Ht(T,x),Y=x.source;e.bindTexture(G,T.__webglTexture,i.TEXTURE0+F);const Pt=n.get(Y);if(Y.version!==Pt.__version||et===!0){e.activeTexture(i.TEXTURE0+F);const ht=se.getPrimaries(se.workingColorSpace),At=x.colorSpace===li?null:se.getPrimaries(x.colorSpace),Rt=x.colorSpace===li||ht===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let st=v(x.image,!1,s.maxTextureSize);st=Nt(x,st);const _t=r.convert(x.format,x.colorSpace),Bt=r.convert(x.type);let Dt=M(x.internalFormat,_t,Bt,x.colorSpace,x.isVideoTexture);Ft(G,x);let pt;const Vt=x.mipmaps,I=x.isVideoTexture!==!0,ct=Pt.__version===void 0||et===!0,dt=Y.dataReady,Et=b(x,st);if(x.isDepthTexture)Dt=_(x.format===vr,x.type),ct&&(I?e.texStorage2D(i.TEXTURE_2D,1,Dt,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,Dt,st.width,st.height,0,_t,Bt,null));else if(x.isDataTexture)if(Vt.length>0){I&&ct&&e.texStorage2D(i.TEXTURE_2D,Et,Dt,Vt[0].width,Vt[0].height);for(let rt=0,j=Vt.length;rt<j;rt++)pt=Vt[rt],I?dt&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,pt.width,pt.height,_t,Bt,pt.data):e.texImage2D(i.TEXTURE_2D,rt,Dt,pt.width,pt.height,0,_t,Bt,pt.data);x.generateMipmaps=!1}else I?(ct&&e.texStorage2D(i.TEXTURE_2D,Et,Dt,st.width,st.height),dt&&$t(x,st,_t,Bt)):e.texImage2D(i.TEXTURE_2D,0,Dt,st.width,st.height,0,_t,Bt,st.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){I&&ct&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Dt,Vt[0].width,Vt[0].height,st.depth);for(let rt=0,j=Vt.length;rt<j;rt++)if(pt=Vt[rt],x.format!==Tn)if(_t!==null)if(I){if(dt)if(x.layerUpdates.size>0){const Ct=ih(pt.width,pt.height,x.format,x.type);for(const Gt of x.layerUpdates){const _e=pt.data.subarray(Gt*Ct/pt.data.BYTES_PER_ELEMENT,(Gt+1)*Ct/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,Gt,pt.width,pt.height,1,_t,_e)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,pt.width,pt.height,st.depth,_t,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,Dt,pt.width,pt.height,st.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?dt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,pt.width,pt.height,st.depth,_t,Bt,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,Dt,pt.width,pt.height,st.depth,0,_t,Bt,pt.data)}else{I&&ct&&e.texStorage2D(i.TEXTURE_2D,Et,Dt,Vt[0].width,Vt[0].height);for(let rt=0,j=Vt.length;rt<j;rt++)pt=Vt[rt],x.format!==Tn?_t!==null?I?dt&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,pt.width,pt.height,_t,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,Dt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?dt&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,pt.width,pt.height,_t,Bt,pt.data):e.texImage2D(i.TEXTURE_2D,rt,Dt,pt.width,pt.height,0,_t,Bt,pt.data)}else if(x.isDataArrayTexture)if(I){if(ct&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Dt,st.width,st.height,st.depth),dt)if(x.layerUpdates.size>0){const rt=ih(st.width,st.height,x.format,x.type);for(const j of x.layerUpdates){const Ct=st.data.subarray(j*rt/st.data.BYTES_PER_ELEMENT,(j+1)*rt/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,st.width,st.height,1,_t,Bt,Ct)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,_t,Bt,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,st.width,st.height,st.depth,0,_t,Bt,st.data);else if(x.isData3DTexture)I?(ct&&e.texStorage3D(i.TEXTURE_3D,Et,Dt,st.width,st.height,st.depth),dt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,_t,Bt,st.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,st.width,st.height,st.depth,0,_t,Bt,st.data);else if(x.isFramebufferTexture){if(ct)if(I)e.texStorage2D(i.TEXTURE_2D,Et,Dt,st.width,st.height);else{let rt=st.width,j=st.height;for(let Ct=0;Ct<Et;Ct++)e.texImage2D(i.TEXTURE_2D,Ct,Dt,rt,j,0,_t,Bt,null),rt>>=1,j>>=1}}else if(Vt.length>0){if(I&&ct){const rt=Lt(Vt[0]);e.texStorage2D(i.TEXTURE_2D,Et,Dt,rt.width,rt.height)}for(let rt=0,j=Vt.length;rt<j;rt++)pt=Vt[rt],I?dt&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,_t,Bt,pt):e.texImage2D(i.TEXTURE_2D,rt,Dt,_t,Bt,pt);x.generateMipmaps=!1}else if(I){if(ct){const rt=Lt(st);e.texStorage2D(i.TEXTURE_2D,Et,Dt,rt.width,rt.height)}dt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,Bt,st)}else e.texImage2D(i.TEXTURE_2D,0,Dt,_t,Bt,st);m(x)&&p(G),Pt.__version=Y.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function tt(T,x,F){if(x.image.length!==6)return;const G=Ht(T,x),et=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+F);const Y=n.get(et);if(et.version!==Y.__version||G===!0){e.activeTexture(i.TEXTURE0+F);const Pt=se.getPrimaries(se.workingColorSpace),ht=x.colorSpace===li?null:se.getPrimaries(x.colorSpace),At=x.colorSpace===li||Pt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const Rt=x.isCompressedTexture||x.image[0].isCompressedTexture,st=x.image[0]&&x.image[0].isDataTexture,_t=[];for(let j=0;j<6;j++)!Rt&&!st?_t[j]=v(x.image[j],!0,s.maxCubemapSize):_t[j]=st?x.image[j].image:x.image[j],_t[j]=Nt(x,_t[j]);const Bt=_t[0],Dt=r.convert(x.format,x.colorSpace),pt=r.convert(x.type),Vt=M(x.internalFormat,Dt,pt,x.colorSpace),I=x.isVideoTexture!==!0,ct=Y.__version===void 0||G===!0,dt=et.dataReady;let Et=b(x,Bt);Ft(i.TEXTURE_CUBE_MAP,x);let rt;if(Rt){I&&ct&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,Vt,Bt.width,Bt.height);for(let j=0;j<6;j++){rt=_t[j].mipmaps;for(let Ct=0;Ct<rt.length;Ct++){const Gt=rt[Ct];x.format!==Tn?Dt!==null?I?dt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ct,0,0,Gt.width,Gt.height,Dt,Gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ct,Vt,Gt.width,Gt.height,0,Gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ct,0,0,Gt.width,Gt.height,Dt,pt,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ct,Vt,Gt.width,Gt.height,0,Dt,pt,Gt.data)}}}else{if(rt=x.mipmaps,I&&ct){rt.length>0&&Et++;const j=Lt(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,Vt,j.width,j.height)}for(let j=0;j<6;j++)if(st){I?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,_t[j].width,_t[j].height,Dt,pt,_t[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Vt,_t[j].width,_t[j].height,0,Dt,pt,_t[j].data);for(let Ct=0;Ct<rt.length;Ct++){const _e=rt[Ct].image[j].image;I?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ct+1,0,0,_e.width,_e.height,Dt,pt,_e.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ct+1,Vt,_e.width,_e.height,0,Dt,pt,_e.data)}}else{I?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Dt,pt,_t[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Vt,Dt,pt,_t[j]);for(let Ct=0;Ct<rt.length;Ct++){const Gt=rt[Ct];I?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ct+1,0,0,Dt,pt,Gt.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ct+1,Vt,Dt,pt,Gt.image[j])}}}m(x)&&p(i.TEXTURE_CUBE_MAP),Y.__version=et.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function vt(T,x,F,G,et,Y){const Pt=r.convert(F.format,F.colorSpace),ht=r.convert(F.type),At=M(F.internalFormat,Pt,ht,F.colorSpace),Rt=n.get(x),st=n.get(F);if(st.__renderTarget=x,!Rt.__hasExternalTextures){const _t=Math.max(1,x.width>>Y),Bt=Math.max(1,x.height>>Y);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,Y,At,_t,Bt,x.depth,0,Pt,ht,null):e.texImage2D(et,Y,At,_t,Bt,0,Pt,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),nt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,et,st.__webglTexture,0,at(x)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,et,st.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(T,x,F){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){const G=x.depthTexture,et=G&&G.isDepthTexture?G.type:null,Y=_(x.stencilBuffer,et),Pt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=at(x);nt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,Y,x.width,x.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,Y,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Y,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,T)}else{const G=x.textures;for(let et=0;et<G.length;et++){const Y=G[et],Pt=r.convert(Y.format,Y.colorSpace),ht=r.convert(Y.type),At=M(Y.internalFormat,Pt,ht,Y.colorSpace),Rt=at(x);F&&nt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,At,x.width,x.height):nt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Rt,At,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,At,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xt(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=n.get(x.depthTexture);G.__renderTarget=x,(!G.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V(x.depthTexture,0);const et=G.__webglTexture,Y=at(x);if(x.depthTexture.format===_r)nt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(x.depthTexture.format===vr)nt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Kt(T){const x=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const G=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),G){const et=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,G.removeEventListener("dispose",et)};G.addEventListener("dispose",et),x.__depthDisposeCallback=et}x.__boundDepthTexture=G}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const G=T.texture.mipmaps;G&&G.length>0?xt(x.__webglFramebuffer[0],T):xt(x.__webglFramebuffer,T)}else if(F){x.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[G]),x.__webglDepthbuffer[G]===void 0)x.__webglDepthbuffer[G]=i.createRenderbuffer(),bt(x.__webglDepthbuffer[G],T,!1);else{const et=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,Y)}}else{const G=T.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),bt(x.__webglDepthbuffer,T,!1);else{const et=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,Y)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function he(T,x,F){const G=n.get(T);x!==void 0&&vt(G.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Kt(T)}function P(T){const x=T.texture,F=n.get(T),G=n.get(x);T.addEventListener("dispose",C);const et=T.textures,Y=T.isWebGLCubeRenderTarget===!0,Pt=et.length>1;if(Pt||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=x.version,o.memory.textures++),Y){F.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[ht]=[];for(let At=0;At<x.mipmaps.length;At++)F.__webglFramebuffer[ht][At]=i.createFramebuffer()}else F.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let ht=0;ht<x.mipmaps.length;ht++)F.__webglFramebuffer[ht]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Pt)for(let ht=0,At=et.length;ht<At;ht++){const Rt=n.get(et[ht]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&nt(T)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ht=0;ht<et.length;ht++){const At=et[ht];F.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ht]);const Rt=r.convert(At.format,At.colorSpace),st=r.convert(At.type),_t=M(At.internalFormat,Rt,st,At.colorSpace,T.isXRRenderTarget===!0),Bt=at(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,_t,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,F.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),bt(F.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),Ft(i.TEXTURE_CUBE_MAP,x);for(let ht=0;ht<6;ht++)if(x.mipmaps&&x.mipmaps.length>0)for(let At=0;At<x.mipmaps.length;At++)vt(F.__webglFramebuffer[ht][At],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,At);else vt(F.__webglFramebuffer[ht],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(x)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let ht=0,At=et.length;ht<At;ht++){const Rt=et[ht],st=n.get(Rt);let _t=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(_t=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,st.__webglTexture),Ft(_t,Rt),vt(F.__webglFramebuffer,T,Rt,i.COLOR_ATTACHMENT0+ht,_t,0),m(Rt)&&p(_t)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ht=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,G.__webglTexture),Ft(ht,x),x.mipmaps&&x.mipmaps.length>0)for(let At=0;At<x.mipmaps.length;At++)vt(F.__webglFramebuffer[At],T,x,i.COLOR_ATTACHMENT0,ht,At);else vt(F.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,ht,0);m(x)&&p(ht),e.unbindTexture()}T.depthBuffer&&Kt(T)}function Q(T){const x=T.textures;for(let F=0,G=x.length;F<G;F++){const et=x[F];if(m(et)){const Y=E(T),Pt=n.get(et).__webglTexture;e.bindTexture(Y,Pt),p(Y),e.unbindTexture()}}}const $=[],K=[];function z(T){if(T.samples>0){if(nt(T)===!1){const x=T.textures,F=T.width,G=T.height;let et=i.COLOR_BUFFER_BIT;const Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=n.get(T),ht=x.length>1;if(ht)for(let Rt=0;Rt<x.length;Rt++)e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const At=T.texture.mipmaps;At&&At.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Rt=0;Rt<x.length;Rt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[Rt]);const st=n.get(x[Rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,st,0)}i.blitFramebuffer(0,0,F,G,0,0,F,G,et,i.NEAREST),l===!0&&($.length=0,K.length=0,$.push(i.COLOR_ATTACHMENT0+Rt),T.depthBuffer&&T.resolveDepthBuffer===!1&&($.push(Y),K.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,K)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let Rt=0;Rt<x.length;Rt++){e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[Rt]);const st=n.get(x[Rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,st,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function at(T){return Math.min(s.maxSamples,T.samples)}function nt(T){const x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function lt(T){const x=o.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function Nt(T,x){const F=T.colorSpace,G=T.format,et=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==Ds&&F!==li&&(se.getTransfer(F)===de?(G!==Tn||et!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function Lt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=N,this.setTexture2D=V,this.setTexture2DArray=q,this.setTexture3D=J,this.setTextureCube=X,this.rebindTextures=he,this.setupRenderTarget=P,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=nt}function bv(i,t){function e(n,s=li){let r;const o=se.getTransfer(s);if(n===Nn)return i.UNSIGNED_BYTE;if(n===Il)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ul)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Yh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Xh)return i.BYTE;if(n===qh)return i.SHORT;if(n===mr)return i.UNSIGNED_SHORT;if(n===Ll)return i.INT;if(n===Oi)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===Ar)return i.HALF_FLOAT;if(n===Kh)return i.ALPHA;if(n===Jh)return i.RGB;if(n===Tn)return i.RGBA;if(n===_r)return i.DEPTH_COMPONENT;if(n===vr)return i.DEPTH_STENCIL;if(n===Nl)return i.RED;if(n===Ol)return i.RED_INTEGER;if(n===$h)return i.RG;if(n===Fl)return i.RG_INTEGER;if(n===Bl)return i.RGBA_INTEGER;if(n===vo||n===xo||n===yo||n===Mo)if(o===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===vo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===vo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Za||n===Ka||n===Ja||n===$a)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ka)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ja)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$a)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ja||n===Qa||n===tl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ja||n===Qa)return o===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===tl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===el||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===el)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===il)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ol)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===al)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ll)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===hl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ul)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ml||n===gl||n===_l)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ml)return o===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_l)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vl||n===xl||n===yl||n===Ml)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===vl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===xl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ml)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Av=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rv=`
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

}`;class Cv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new uu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Fn({vertexShader:Av,fragmentShader:Rv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Tt(new jn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Pv extends Vi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const v=typeof XRWebGLBinding<"u",m=new Cv,p={},E=e.getContextAttributes();let M=null,_=null;const b=[],R=[],C=new it;let L=null;const S=new an;S.viewport=new pe;const y=new an;y.viewport=new pe;const D=[S,y],N=new Yp;let B=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let tt=b[Z];return tt===void 0&&(tt=new pa,b[Z]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Z){let tt=b[Z];return tt===void 0&&(tt=new pa,b[Z]=tt),tt.getGripSpace()},this.getHand=function(Z){let tt=b[Z];return tt===void 0&&(tt=new pa,b[Z]=tt),tt.getHandSpace()};function V(Z){const tt=R.indexOf(Z.inputSource);if(tt===-1)return;const vt=b[tt];vt!==void 0&&(vt.update(Z.inputSource,Z.frame,c||o),vt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function q(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",J);for(let Z=0;Z<b.length;Z++){const tt=R[Z];tt!==null&&(R[Z]=null,b[Z].disconnect(tt))}B=null,W=null,m.reset();for(const Z in p)delete p[Z];t.setRenderTarget(M),f=null,d=null,u=null,s=null,_=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",q),s.addEventListener("inputsourceschange",J),E.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,bt=null,xt=null;E.depth&&(xt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=E.stencil?vr:_r,bt=E.stencil?gr:Oi);const Kt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Kt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new zi(d.textureWidth,d.textureHeight,{format:Tn,type:Nn,depthTexture:new hu(d.textureWidth,d.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const vt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new zi(f.framebufferWidth,f.framebufferHeight,{format:Tn,type:Nn,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(Z){for(let tt=0;tt<Z.removed.length;tt++){const vt=Z.removed[tt],bt=R.indexOf(vt);bt>=0&&(R[bt]=null,b[bt].disconnect(vt))}for(let tt=0;tt<Z.added.length;tt++){const vt=Z.added[tt];let bt=R.indexOf(vt);if(bt===-1){for(let Kt=0;Kt<b.length;Kt++)if(Kt>=R.length){R.push(vt),bt=Kt;break}else if(R[Kt]===null){R[Kt]=vt,bt=Kt;break}if(bt===-1)break}const xt=b[bt];xt&&xt.connect(vt)}}const X=new A,ut=new A;function mt(Z,tt,vt){X.setFromMatrixPosition(tt.matrixWorld),ut.setFromMatrixPosition(vt.matrixWorld);const bt=X.distanceTo(ut),xt=tt.projectionMatrix.elements,Kt=vt.projectionMatrix.elements,he=xt[14]/(xt[10]-1),P=xt[14]/(xt[10]+1),Q=(xt[9]+1)/xt[5],$=(xt[9]-1)/xt[5],K=(xt[8]-1)/xt[0],z=(Kt[8]+1)/Kt[0],at=he*K,nt=he*z,lt=bt/(-K+z),Nt=lt*-K;if(tt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Nt),Z.translateZ(lt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),xt[10]===-1)Z.projectionMatrix.copy(tt.projectionMatrix),Z.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const Lt=he+lt,T=P+lt,x=at-Nt,F=nt+(bt-Nt),G=Q*P/T*Lt,et=$*P/T*Lt;Z.projectionMatrix.makePerspective(x,F,G,et,Lt,T),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function yt(Z,tt){tt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(tt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let tt=Z.near,vt=Z.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(vt=m.depthFar)),N.near=y.near=S.near=tt,N.far=y.far=S.far=vt,(B!==N.near||W!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),B=N.near,W=N.far),N.layers.mask=Z.layers.mask|6,S.layers.mask=N.layers.mask&3,y.layers.mask=N.layers.mask&5;const bt=Z.parent,xt=N.cameras;yt(N,bt);for(let Kt=0;Kt<xt.length;Kt++)yt(xt[Kt],bt);xt.length===2?mt(N,S,y):N.projectionMatrix.copy(S.projectionMatrix),Ft(Z,N,bt)};function Ft(Z,tt,vt){vt===null?Z.matrix.copy(tt.matrixWorld):(Z.matrix.copy(vt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(tt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(tt.projectionMatrix),Z.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=xr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(Z){return p[Z]};let Ht=null;function re(Z,tt){if(h=tt.getViewerPose(c||o),g=tt,h!==null){const vt=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let bt=!1;vt.length!==N.cameras.length&&(N.cameras.length=0,bt=!0);for(let P=0;P<vt.length;P++){const Q=vt[P];let $=null;if(f!==null)$=f.getViewport(Q);else{const z=u.getViewSubImage(d,Q);$=z.viewport,P===0&&(t.setRenderTargetTextures(_,z.colorTexture,z.depthStencilTexture),t.setRenderTarget(_))}let K=D[P];K===void 0&&(K=new an,K.layers.enable(P),K.viewport=new pe,D[P]=K),K.matrix.fromArray(Q.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(Q.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set($.x,$.y,$.width,$.height),P===0&&(N.matrix.copy(K.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),bt===!0&&N.cameras.push(K)}const xt=s.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const P=u.getDepthInformation(vt[0]);P&&P.isValid&&P.texture&&m.init(P,s.renderState)}if(xt&&xt.includes("camera-access")&&v){t.state.unbindTexture(),u=n.getBinding();for(let P=0;P<vt.length;P++){const Q=vt[P].camera;if(Q){let $=p[Q];$||($=new uu,p[Q]=$);const K=u.getCameraImage(Q);$.sourceTexture=K}}}}for(let vt=0;vt<b.length;vt++){const bt=R[vt],xt=b[vt];bt!==null&&xt!==void 0&&xt.update(bt,tt,c||o)}Ht&&Ht(Z,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}const $t=new wu;$t.setAnimationLoop(re),this.setAnimationLoop=function(Z){Ht=Z},this.dispose=function(){}}}const Ti=new On,Dv=new ce;function Lv(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ru(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,M,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,E,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=t.get(p),M=E.envMap,_=E.envMapRotation;M&&(m.envMap.value=M,Ti.copy(_),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),m.envMapRotation.value.setFromMatrix4(Dv.makeRotationFromEuler(Ti)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Iv(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,M){const _=M.program;n.uniformBlockBinding(E,_)}function c(E,M){let _=s[E.id];_===void 0&&(g(E),_=h(E),s[E.id]=_,E.addEventListener("dispose",m));const b=M.program;n.updateUBOMapping(E,b);const R=t.render.frame;r[E.id]!==R&&(d(E),r[E.id]=R)}function h(E){const M=u();E.__bindingPointIndex=M;const _=i.createBuffer(),b=E.__size,R=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,b,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,_),_}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const M=s[E.id],_=E.uniforms,b=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let R=0,C=_.length;R<C;R++){const L=Array.isArray(_[R])?_[R]:[_[R]];for(let S=0,y=L.length;S<y;S++){const D=L[S];if(f(D,R,S,b)===!0){const N=D.__offset,B=Array.isArray(D.value)?D.value:[D.value];let W=0;for(let V=0;V<B.length;V++){const q=B[V],J=v(q);typeof q=="number"||typeof q=="boolean"?(D.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,N+W,D.__data)):q.isMatrix3?(D.__data[0]=q.elements[0],D.__data[1]=q.elements[1],D.__data[2]=q.elements[2],D.__data[3]=0,D.__data[4]=q.elements[3],D.__data[5]=q.elements[4],D.__data[6]=q.elements[5],D.__data[7]=0,D.__data[8]=q.elements[6],D.__data[9]=q.elements[7],D.__data[10]=q.elements[8],D.__data[11]=0):(q.toArray(D.__data,W),W+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(E,M,_,b){const R=E.value,C=M+"_"+_;if(b[C]===void 0)return typeof R=="number"||typeof R=="boolean"?b[C]=R:b[C]=R.clone(),!0;{const L=b[C];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return b[C]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function g(E){const M=E.uniforms;let _=0;const b=16;for(let C=0,L=M.length;C<L;C++){const S=Array.isArray(M[C])?M[C]:[M[C]];for(let y=0,D=S.length;y<D;y++){const N=S[y],B=Array.isArray(N.value)?N.value:[N.value];for(let W=0,V=B.length;W<V;W++){const q=B[W],J=v(q),X=_%b,ut=X%J.boundary,mt=X+ut;_+=ut,mt!==0&&b-mt<J.storage&&(_+=b-mt),N.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=_,_+=J.storage}}}const R=_%b;return R>0&&(_+=b-R),E.__size=_,E.__cache={},this}function v(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function m(E){const M=E.target;M.removeEventListener("dispose",m);const _=o.indexOf(M.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Uv{constructor(t={}){const{canvas:e=Rf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const E=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let b=!1;this._outputColorSpace=rn;let R=0,C=0,L=null,S=-1,y=null;const D=new pe,N=new pe;let B=null;const W=new kt(0);let V=0,q=e.width,J=e.height,X=1,ut=null,mt=null;const yt=new pe(0,0,q,J),Ft=new pe(0,0,q,J);let Ht=!1;const re=new Vl;let $t=!1,Z=!1;const tt=new ce,vt=new A,bt=new pe,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Kt=!1;function he(){return L===null?X:1}let P=n;function Q(w,U){return e.getContext(w,U)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Dl}`),e.addEventListener("webglcontextlost",dt,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",rt,!1),P===null){const U="webgl2";if(P=Q(U,w),P===null)throw Q(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let $,K,z,at,nt,lt,Nt,Lt,T,x,F,G,et,Y,Pt,ht,At,Rt,st,_t,Bt,Dt,pt,Vt;function I(){$=new W_(P),$.init(),Dt=new bv(P,$),K=new F_(P,$,t,Dt),z=new wv(P,$),K.reversedDepthBuffer&&d&&z.buffers.depth.setReversed(!0),at=new Y_(P),nt=new uv,lt=new Tv(P,$,z,nt,K,Dt,at),Nt=new z_(_),Lt=new V_(_),T=new Qp(P),pt=new N_(P,T),x=new X_(P,T,at,pt),F=new K_(P,x,T,at),st=new Z_(P,K,lt),ht=new B_(nt),G=new hv(_,Nt,Lt,$,K,pt,ht),et=new Lv(_,nt),Y=new fv,Pt=new xv($),Rt=new U_(_,Nt,Lt,z,F,f,l),At=new Sv(_,F,K),Vt=new Iv(P,at,K,z),_t=new O_(P,$,at),Bt=new q_(P,$,at),at.programs=G.programs,_.capabilities=K,_.extensions=$,_.properties=nt,_.renderLists=Y,_.shadowMap=At,_.state=z,_.info=at}I();const ct=new Pv(_,P);this.xr=ct,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const w=$.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=$.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(w){w!==void 0&&(X=w,this.setSize(q,J,!1))},this.getSize=function(w){return w.set(q,J)},this.setSize=function(w,U,k=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=w,J=U,e.width=Math.floor(w*X),e.height=Math.floor(U*X),k===!0&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(q*X,J*X).floor()},this.setDrawingBufferSize=function(w,U,k){q=w,J=U,X=k,e.width=Math.floor(w*k),e.height=Math.floor(U*k),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(D)},this.getViewport=function(w){return w.copy(yt)},this.setViewport=function(w,U,k,H){w.isVector4?yt.set(w.x,w.y,w.z,w.w):yt.set(w,U,k,H),z.viewport(D.copy(yt).multiplyScalar(X).round())},this.getScissor=function(w){return w.copy(Ft)},this.setScissor=function(w,U,k,H){w.isVector4?Ft.set(w.x,w.y,w.z,w.w):Ft.set(w,U,k,H),z.scissor(N.copy(Ft).multiplyScalar(X).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(w){z.setScissorTest(Ht=w)},this.setOpaqueSort=function(w){ut=w},this.setTransparentSort=function(w){mt=w},this.getClearColor=function(w){return w.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor(...arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha(...arguments)},this.clear=function(w=!0,U=!0,k=!0){let H=0;if(w){let O=!1;if(L!==null){const ot=L.texture.format;O=ot===Bl||ot===Fl||ot===Ol}if(O){const ot=L.texture.type,gt=ot===Nn||ot===Oi||ot===mr||ot===gr||ot===Il||ot===Ul,wt=Rt.getClearColor(),Mt=Rt.getClearAlpha(),Ot=wt.r,zt=wt.g,It=wt.b;gt?(g[0]=Ot,g[1]=zt,g[2]=It,g[3]=Mt,P.clearBufferuiv(P.COLOR,0,g)):(v[0]=Ot,v[1]=zt,v[2]=It,v[3]=Mt,P.clearBufferiv(P.COLOR,0,v))}else H|=P.COLOR_BUFFER_BIT}U&&(H|=P.DEPTH_BUFFER_BIT),k&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",dt,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),Rt.dispose(),Y.dispose(),Pt.dispose(),nt.dispose(),Nt.dispose(),Lt.dispose(),F.dispose(),pt.dispose(),Vt.dispose(),G.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",Cn),ct.removeEventListener("sessionend",oc),vi.stop()};function dt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const w=at.autoReset,U=At.enabled,k=At.autoUpdate,H=At.needsUpdate,O=At.type;I(),at.autoReset=w,At.enabled=U,At.autoUpdate=k,At.needsUpdate=H,At.type=O}function rt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function j(w){const U=w.target;U.removeEventListener("dispose",j),Ct(U)}function Ct(w){Gt(w),nt.remove(w)}function Gt(w){const U=nt.get(w).programs;U!==void 0&&(U.forEach(function(k){G.releaseProgram(k)}),w.isShaderMaterial&&G.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,k,H,O,ot){U===null&&(U=xt);const gt=O.isMesh&&O.matrixWorld.determinant()<0,wt=vd(w,U,k,H,O);z.setMaterial(H,gt);let Mt=k.index,Ot=1;if(H.wireframe===!0){if(Mt=x.getWireframeAttribute(k),Mt===void 0)return;Ot=2}const zt=k.drawRange,It=k.attributes.position;let jt=zt.start*Ot,ue=(zt.start+zt.count)*Ot;ot!==null&&(jt=Math.max(jt,ot.start*Ot),ue=Math.min(ue,(ot.start+ot.count)*Ot)),Mt!==null?(jt=Math.max(jt,0),ue=Math.min(ue,Mt.count)):It!=null&&(jt=Math.max(jt,0),ue=Math.min(ue,It.count));const Ae=ue-jt;if(Ae<0||Ae===1/0)return;pt.setup(O,H,wt,k,Mt);let xe,me=_t;if(Mt!==null&&(xe=T.get(Mt),me=Bt,me.setIndex(xe)),O.isMesh)H.wireframe===!0?(z.setLineWidth(H.wireframeLinewidth*he()),me.setMode(P.LINES)):me.setMode(P.TRIANGLES);else if(O.isLine){let Ut=H.linewidth;Ut===void 0&&(Ut=1),z.setLineWidth(Ut*he()),O.isLineSegments?me.setMode(P.LINES):O.isLineLoop?me.setMode(P.LINE_LOOP):me.setMode(P.LINE_STRIP)}else O.isPoints?me.setMode(P.POINTS):O.isSprite&&me.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)yr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),me.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if($.get("WEBGL_multi_draw"))me.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ut=O._multiDrawStarts,Se=O._multiDrawCounts,ie=O._multiDrawCount,tn=Mt?T.get(Mt).bytesPerElement:1,Ji=nt.get(H).currentProgram.getUniforms();for(let en=0;en<ie;en++)Ji.setValue(P,"_gl_DrawID",en),me.render(Ut[en]/tn,Se[en])}else if(O.isInstancedMesh)me.renderInstances(jt,Ae,O.count);else if(k.isInstancedBufferGeometry){const Ut=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Se=Math.min(k.instanceCount,Ut);me.renderInstances(jt,Ae,Se)}else me.render(jt,Ae)};function _e(w,U,k){w.transparent===!0&&w.side===Le&&w.forceSinglePass===!1?(w.side=Qe,w.needsUpdate=!0,Br(w,U,k),w.side=mi,w.needsUpdate=!0,Br(w,U,k),w.side=Le):Br(w,U,k)}this.compile=function(w,U,k=null){k===null&&(k=w),p=Pt.get(k),p.init(U),M.push(p),k.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),w!==k&&w.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const H=new Set;return w.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ot=O.material;if(ot)if(Array.isArray(ot))for(let gt=0;gt<ot.length;gt++){const wt=ot[gt];_e(wt,k,O),H.add(wt)}else _e(ot,k,O),H.add(ot)}),p=M.pop(),H},this.compileAsync=function(w,U,k=null){const H=this.compile(w,U,k);return new Promise(O=>{function ot(){if(H.forEach(function(gt){nt.get(gt).currentProgram.isReady()&&H.delete(gt)}),H.size===0){O(w);return}setTimeout(ot,10)}$.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let ae=null;function Bn(w){ae&&ae(w)}function Cn(){vi.stop()}function oc(){vi.start()}const vi=new wu;vi.setAnimationLoop(Bn),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(w){ae=w,ct.setAnimationLoop(w),w===null?vi.stop():vi.start()},ct.addEventListener("sessionstart",Cn),ct.addEventListener("sessionend",oc),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(U),U=ct.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,U,L),p=Pt.get(w,M.length),p.init(U),M.push(p),tt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),re.setFromProjectionMatrix(tt,In,U.reversedDepth),Z=this.localClippingEnabled,$t=ht.init(this.clippingPlanes,Z),m=Y.get(w,E.length),m.init(),E.push(m),ct.enabled===!0&&ct.isPresenting===!0){const ot=_.xr.getDepthSensingMesh();ot!==null&&Xo(ot,U,-1/0,_.sortObjects)}Xo(w,U,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ut,mt),Kt=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,Kt&&Rt.addToRenderList(m,w),this.info.render.frame++,$t===!0&&ht.beginShadows();const k=p.state.shadowsArray;At.render(k,w,U),$t===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,O=m.transmissive;if(p.setupLights(),U.isArrayCamera){const ot=U.cameras;if(O.length>0)for(let gt=0,wt=ot.length;gt<wt;gt++){const Mt=ot[gt];lc(H,O,w,Mt)}Kt&&Rt.render(w);for(let gt=0,wt=ot.length;gt<wt;gt++){const Mt=ot[gt];ac(m,w,Mt,Mt.viewport)}}else O.length>0&&lc(H,O,w,U),Kt&&Rt.render(w),ac(m,w,U);L!==null&&C===0&&(lt.updateMultisampleRenderTarget(L),lt.updateRenderTargetMipmap(L)),w.isScene===!0&&w.onAfterRender(_,w,U),pt.resetDefaultState(),S=-1,y=null,M.pop(),M.length>0?(p=M[M.length-1],$t===!0&&ht.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Xo(w,U,k,H){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)k=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||re.intersectsSprite(w)){H&&bt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(tt);const gt=F.update(w),wt=w.material;wt.visible&&m.push(w,gt,wt,k,bt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||re.intersectsObject(w))){const gt=F.update(w),wt=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),bt.copy(w.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),bt.copy(gt.boundingSphere.center)),bt.applyMatrix4(w.matrixWorld).applyMatrix4(tt)),Array.isArray(wt)){const Mt=gt.groups;for(let Ot=0,zt=Mt.length;Ot<zt;Ot++){const It=Mt[Ot],jt=wt[It.materialIndex];jt&&jt.visible&&m.push(w,gt,jt,k,bt.z,It)}}else wt.visible&&m.push(w,gt,wt,k,bt.z,null)}}const ot=w.children;for(let gt=0,wt=ot.length;gt<wt;gt++)Xo(ot[gt],U,k,H)}function ac(w,U,k,H){const O=w.opaque,ot=w.transmissive,gt=w.transparent;p.setupLightsView(k),$t===!0&&ht.setGlobalState(_.clippingPlanes,k),H&&z.viewport(D.copy(H)),O.length>0&&Fr(O,U,k),ot.length>0&&Fr(ot,U,k),gt.length>0&&Fr(gt,U,k),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function lc(w,U,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new zi(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?Ar:Nn,minFilter:Di,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace}));const ot=p.state.transmissionRenderTarget[H.id],gt=H.viewport||D;ot.setSize(gt.z*_.transmissionResolutionScale,gt.w*_.transmissionResolutionScale);const wt=_.getRenderTarget(),Mt=_.getActiveCubeFace(),Ot=_.getActiveMipmapLevel();_.setRenderTarget(ot),_.getClearColor(W),V=_.getClearAlpha(),V<1&&_.setClearColor(16777215,.5),_.clear(),Kt&&Rt.render(k);const zt=_.toneMapping;_.toneMapping=di;const It=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),$t===!0&&ht.setGlobalState(_.clippingPlanes,H),Fr(w,k,H),lt.updateMultisampleRenderTarget(ot),lt.updateRenderTargetMipmap(ot),$.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let ue=0,Ae=U.length;ue<Ae;ue++){const xe=U[ue],me=xe.object,Ut=xe.geometry,Se=xe.material,ie=xe.group;if(Se.side===Le&&me.layers.test(H.layers)){const tn=Se.side;Se.side=Qe,Se.needsUpdate=!0,cc(me,k,H,Ut,Se,ie),Se.side=tn,Se.needsUpdate=!0,jt=!0}}jt===!0&&(lt.updateMultisampleRenderTarget(ot),lt.updateRenderTargetMipmap(ot))}_.setRenderTarget(wt,Mt,Ot),_.setClearColor(W,V),It!==void 0&&(H.viewport=It),_.toneMapping=zt}function Fr(w,U,k){const H=U.isScene===!0?U.overrideMaterial:null;for(let O=0,ot=w.length;O<ot;O++){const gt=w[O],wt=gt.object,Mt=gt.geometry,Ot=gt.group;let zt=gt.material;zt.allowOverride===!0&&H!==null&&(zt=H),wt.layers.test(k.layers)&&cc(wt,U,k,Mt,zt,Ot)}}function cc(w,U,k,H,O,ot){w.onBeforeRender(_,U,k,H,O,ot),w.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(_,U,k,H,w,ot),O.transparent===!0&&O.side===Le&&O.forceSinglePass===!1?(O.side=Qe,O.needsUpdate=!0,_.renderBufferDirect(k,U,H,O,w,ot),O.side=mi,O.needsUpdate=!0,_.renderBufferDirect(k,U,H,O,w,ot),O.side=Le):_.renderBufferDirect(k,U,H,O,w,ot),w.onAfterRender(_,U,k,H,O,ot)}function Br(w,U,k){U.isScene!==!0&&(U=xt);const H=nt.get(w),O=p.state.lights,ot=p.state.shadowsArray,gt=O.state.version,wt=G.getParameters(w,O.state,ot,U,k),Mt=G.getProgramCacheKey(wt);let Ot=H.programs;H.environment=w.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(w.isMeshStandardMaterial?Lt:Nt).get(w.envMap||H.environment),H.envMapRotation=H.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Ot===void 0&&(w.addEventListener("dispose",j),Ot=new Map,H.programs=Ot);let zt=Ot.get(Mt);if(zt!==void 0){if(H.currentProgram===zt&&H.lightsStateVersion===gt)return uc(w,wt),zt}else wt.uniforms=G.getUniforms(w),w.onBeforeCompile(wt,_),zt=G.acquireProgram(wt,Mt),Ot.set(Mt,zt),H.uniforms=wt.uniforms;const It=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(It.clippingPlanes=ht.uniform),uc(w,wt),H.needsLights=yd(w),H.lightsStateVersion=gt,H.needsLights&&(It.ambientLightColor.value=O.state.ambient,It.lightProbe.value=O.state.probe,It.directionalLights.value=O.state.directional,It.directionalLightShadows.value=O.state.directionalShadow,It.spotLights.value=O.state.spot,It.spotLightShadows.value=O.state.spotShadow,It.rectAreaLights.value=O.state.rectArea,It.ltc_1.value=O.state.rectAreaLTC1,It.ltc_2.value=O.state.rectAreaLTC2,It.pointLights.value=O.state.point,It.pointLightShadows.value=O.state.pointShadow,It.hemisphereLights.value=O.state.hemi,It.directionalShadowMap.value=O.state.directionalShadowMap,It.directionalShadowMatrix.value=O.state.directionalShadowMatrix,It.spotShadowMap.value=O.state.spotShadowMap,It.spotLightMatrix.value=O.state.spotLightMatrix,It.spotLightMap.value=O.state.spotLightMap,It.pointShadowMap.value=O.state.pointShadowMap,It.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=zt,H.uniformsList=null,zt}function hc(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=So.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function uc(w,U){const k=nt.get(w);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function vd(w,U,k,H,O){U.isScene!==!0&&(U=xt),lt.resetTextureUnits();const ot=U.fog,gt=H.isMeshStandardMaterial?U.environment:null,wt=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ds,Mt=(H.isMeshStandardMaterial?Lt:Nt).get(H.envMap||gt),Ot=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,zt=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),It=!!k.morphAttributes.position,jt=!!k.morphAttributes.normal,ue=!!k.morphAttributes.color;let Ae=di;H.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ae=_.toneMapping);const xe=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,me=xe!==void 0?xe.length:0,Ut=nt.get(H),Se=p.state.lights;if($t===!0&&(Z===!0||w!==y)){const Ve=w===y&&H.id===S;ht.setState(H,w,Ve)}let ie=!1;H.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==Se.state.version||Ut.outputColorSpace!==wt||O.isBatchedMesh&&Ut.batching===!1||!O.isBatchedMesh&&Ut.batching===!0||O.isBatchedMesh&&Ut.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ut.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ut.instancing===!1||!O.isInstancedMesh&&Ut.instancing===!0||O.isSkinnedMesh&&Ut.skinning===!1||!O.isSkinnedMesh&&Ut.skinning===!0||O.isInstancedMesh&&Ut.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ut.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ut.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ut.instancingMorph===!1&&O.morphTexture!==null||Ut.envMap!==Mt||H.fog===!0&&Ut.fog!==ot||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==ht.numPlanes||Ut.numIntersection!==ht.numIntersection)||Ut.vertexAlphas!==Ot||Ut.vertexTangents!==zt||Ut.morphTargets!==It||Ut.morphNormals!==jt||Ut.morphColors!==ue||Ut.toneMapping!==Ae||Ut.morphTargetsCount!==me)&&(ie=!0):(ie=!0,Ut.__version=H.version);let tn=Ut.currentProgram;ie===!0&&(tn=Br(H,U,O));let Ji=!1,en=!1,Gs=!1;const Ee=tn.getUniforms(),dn=Ut.uniforms;if(z.useProgram(tn.program)&&(Ji=!0,en=!0,Gs=!0),H.id!==S&&(S=H.id,en=!0),Ji||y!==w){z.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ee.setValue(P,"projectionMatrix",w.projectionMatrix),Ee.setValue(P,"viewMatrix",w.matrixWorldInverse);const Ze=Ee.map.cameraPosition;Ze!==void 0&&Ze.setValue(P,vt.setFromMatrixPosition(w.matrixWorld)),K.logarithmicDepthBuffer&&Ee.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ee.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,en=!0,Gs=!0)}if(O.isSkinnedMesh){Ee.setOptional(P,O,"bindMatrix"),Ee.setOptional(P,O,"bindMatrixInverse");const Ve=O.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),Ee.setValue(P,"boneTexture",Ve.boneTexture,lt))}O.isBatchedMesh&&(Ee.setOptional(P,O,"batchingTexture"),Ee.setValue(P,"batchingTexture",O._matricesTexture,lt),Ee.setOptional(P,O,"batchingIdTexture"),Ee.setValue(P,"batchingIdTexture",O._indirectTexture,lt),Ee.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&Ee.setValue(P,"batchingColorTexture",O._colorsTexture,lt));const fn=k.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&st.update(O,k,tn),(en||Ut.receiveShadow!==O.receiveShadow)&&(Ut.receiveShadow=O.receiveShadow,Ee.setValue(P,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(dn.envMap.value=Mt,dn.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(dn.envMapIntensity.value=U.environmentIntensity),en&&(Ee.setValue(P,"toneMappingExposure",_.toneMappingExposure),Ut.needsLights&&xd(dn,Gs),ot&&H.fog===!0&&et.refreshFogUniforms(dn,ot),et.refreshMaterialUniforms(dn,H,X,J,p.state.transmissionRenderTarget[w.id]),So.upload(P,hc(Ut),dn,lt)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(So.upload(P,hc(Ut),dn,lt),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ee.setValue(P,"center",O.center),Ee.setValue(P,"modelViewMatrix",O.modelViewMatrix),Ee.setValue(P,"normalMatrix",O.normalMatrix),Ee.setValue(P,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ve=H.uniformsGroups;for(let Ze=0,qo=Ve.length;Ze<qo;Ze++){const xi=Ve[Ze];Vt.update(xi,tn),Vt.bind(xi,tn)}}return tn}function xd(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function yd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(w,U,k){const H=nt.get(w);H.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),nt.get(w.texture).__webglTexture=U,nt.get(w.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:k,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,U){const k=nt.get(w);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0};const Md=P.createFramebuffer();this.setRenderTarget=function(w,U=0,k=0){L=w,R=U,C=k;let H=!0,O=null,ot=!1,gt=!1;if(w){const Mt=nt.get(w);if(Mt.__useDefaultFramebuffer!==void 0)z.bindFramebuffer(P.FRAMEBUFFER,null),H=!1;else if(Mt.__webglFramebuffer===void 0)lt.setupRenderTarget(w);else if(Mt.__hasExternalTextures)lt.rebindTextures(w,nt.get(w.texture).__webglTexture,nt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const It=w.depthTexture;if(Mt.__boundDepthTexture!==It){if(It!==null&&nt.has(It)&&(w.width!==It.image.width||w.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");lt.setupDepthRenderbuffer(w)}}const Ot=w.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(gt=!0);const zt=nt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(zt[U])?O=zt[U][k]:O=zt[U],ot=!0):w.samples>0&&lt.useMultisampledRTT(w)===!1?O=nt.get(w).__webglMultisampledFramebuffer:Array.isArray(zt)?O=zt[k]:O=zt,D.copy(w.viewport),N.copy(w.scissor),B=w.scissorTest}else D.copy(yt).multiplyScalar(X).floor(),N.copy(Ft).multiplyScalar(X).floor(),B=Ht;if(k!==0&&(O=Md),z.bindFramebuffer(P.FRAMEBUFFER,O)&&H&&z.drawBuffers(w,O),z.viewport(D),z.scissor(N),z.setScissorTest(B),ot){const Mt=nt.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,Mt.__webglTexture,k)}else if(gt){const Mt=U;for(let Ot=0;Ot<w.textures.length;Ot++){const zt=nt.get(w.textures[Ot]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ot,zt.__webglTexture,k,Mt)}}else if(w!==null&&k!==0){const Mt=nt.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Mt.__webglTexture,k)}S=-1},this.readRenderTargetPixels=function(w,U,k,H,O,ot,gt,wt=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=nt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&gt!==void 0&&(Mt=Mt[gt]),Mt){z.bindFramebuffer(P.FRAMEBUFFER,Mt);try{const Ot=w.textures[wt],zt=Ot.format,It=Ot.type;if(!K.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-H&&k>=0&&k<=w.height-O&&(w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+wt),P.readPixels(U,k,H,O,Dt.convert(zt),Dt.convert(It),ot))}finally{const Ot=L!==null?nt.get(L).__webglFramebuffer:null;z.bindFramebuffer(P.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(w,U,k,H,O,ot,gt,wt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=nt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&gt!==void 0&&(Mt=Mt[gt]),Mt)if(U>=0&&U<=w.width-H&&k>=0&&k<=w.height-O){z.bindFramebuffer(P.FRAMEBUFFER,Mt);const Ot=w.textures[wt],zt=Ot.format,It=Ot.type;if(!K.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const jt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,jt),P.bufferData(P.PIXEL_PACK_BUFFER,ot.byteLength,P.STREAM_READ),w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+wt),P.readPixels(U,k,H,O,Dt.convert(zt),Dt.convert(It),0);const ue=L!==null?nt.get(L).__webglFramebuffer:null;z.bindFramebuffer(P.FRAMEBUFFER,ue);const Ae=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Cf(P,Ae,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,jt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ot),P.deleteBuffer(jt),P.deleteSync(Ae),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,U=null,k=0){const H=Math.pow(2,-k),O=Math.floor(w.image.width*H),ot=Math.floor(w.image.height*H),gt=U!==null?U.x:0,wt=U!==null?U.y:0;lt.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,k,0,0,gt,wt,O,ot),z.unbindTexture()};const Sd=P.createFramebuffer(),Ed=P.createFramebuffer();this.copyTextureToTexture=function(w,U,k=null,H=null,O=0,ot=null){ot===null&&(O!==0?(yr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ot=O,O=0):ot=0);let gt,wt,Mt,Ot,zt,It,jt,ue,Ae;const xe=w.isCompressedTexture?w.mipmaps[ot]:w.image;if(k!==null)gt=k.max.x-k.min.x,wt=k.max.y-k.min.y,Mt=k.isBox3?k.max.z-k.min.z:1,Ot=k.min.x,zt=k.min.y,It=k.isBox3?k.min.z:0;else{const fn=Math.pow(2,-O);gt=Math.floor(xe.width*fn),wt=Math.floor(xe.height*fn),w.isDataArrayTexture?Mt=xe.depth:w.isData3DTexture?Mt=Math.floor(xe.depth*fn):Mt=1,Ot=0,zt=0,It=0}H!==null?(jt=H.x,ue=H.y,Ae=H.z):(jt=0,ue=0,Ae=0);const me=Dt.convert(U.format),Ut=Dt.convert(U.type);let Se;U.isData3DTexture?(lt.setTexture3D(U,0),Se=P.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(lt.setTexture2DArray(U,0),Se=P.TEXTURE_2D_ARRAY):(lt.setTexture2D(U,0),Se=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const ie=P.getParameter(P.UNPACK_ROW_LENGTH),tn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ji=P.getParameter(P.UNPACK_SKIP_PIXELS),en=P.getParameter(P.UNPACK_SKIP_ROWS),Gs=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,xe.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,xe.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ot),P.pixelStorei(P.UNPACK_SKIP_ROWS,zt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,It);const Ee=w.isDataArrayTexture||w.isData3DTexture,dn=U.isDataArrayTexture||U.isData3DTexture;if(w.isDepthTexture){const fn=nt.get(w),Ve=nt.get(U),Ze=nt.get(fn.__renderTarget),qo=nt.get(Ve.__renderTarget);z.bindFramebuffer(P.READ_FRAMEBUFFER,Ze.__webglFramebuffer),z.bindFramebuffer(P.DRAW_FRAMEBUFFER,qo.__webglFramebuffer);for(let xi=0;xi<Mt;xi++)Ee&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,nt.get(w).__webglTexture,O,It+xi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,nt.get(U).__webglTexture,ot,Ae+xi)),P.blitFramebuffer(Ot,zt,gt,wt,jt,ue,gt,wt,P.DEPTH_BUFFER_BIT,P.NEAREST);z.bindFramebuffer(P.READ_FRAMEBUFFER,null),z.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(O!==0||w.isRenderTargetTexture||nt.has(w)){const fn=nt.get(w),Ve=nt.get(U);z.bindFramebuffer(P.READ_FRAMEBUFFER,Sd),z.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ed);for(let Ze=0;Ze<Mt;Ze++)Ee?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,fn.__webglTexture,O,It+Ze):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,fn.__webglTexture,O),dn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ve.__webglTexture,ot,Ae+Ze):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ve.__webglTexture,ot),O!==0?P.blitFramebuffer(Ot,zt,gt,wt,jt,ue,gt,wt,P.COLOR_BUFFER_BIT,P.NEAREST):dn?P.copyTexSubImage3D(Se,ot,jt,ue,Ae+Ze,Ot,zt,gt,wt):P.copyTexSubImage2D(Se,ot,jt,ue,Ot,zt,gt,wt);z.bindFramebuffer(P.READ_FRAMEBUFFER,null),z.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else dn?w.isDataTexture||w.isData3DTexture?P.texSubImage3D(Se,ot,jt,ue,Ae,gt,wt,Mt,me,Ut,xe.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(Se,ot,jt,ue,Ae,gt,wt,Mt,me,xe.data):P.texSubImage3D(Se,ot,jt,ue,Ae,gt,wt,Mt,me,Ut,xe):w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ot,jt,ue,gt,wt,me,Ut,xe.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ot,jt,ue,xe.width,xe.height,me,xe.data):P.texSubImage2D(P.TEXTURE_2D,ot,jt,ue,gt,wt,me,Ut,xe);P.pixelStorei(P.UNPACK_ROW_LENGTH,ie),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,tn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ji),P.pixelStorei(P.UNPACK_SKIP_ROWS,en),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Gs),ot===0&&U.generateMipmaps&&P.generateMipmap(Se),z.unbindTexture()},this.initRenderTarget=function(w){nt.get(w).__webglFramebuffer===void 0&&lt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?lt.setTextureCube(w,0):w.isData3DTexture?lt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?lt.setTexture2DArray(w,0):lt.setTexture2D(w,0),z.unbindTexture()},this.resetState=function(){R=0,C=0,L=null,z.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}}const Rh={type:"change"},$l={type:"start"},Cu={type:"end"},mo=new Rr,Ch=new ai,Nv=Math.cos(70*Fi.DEG2RAD),Ue=new A,Ke=2*Math.PI,fe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ra=1e-6;class Ov extends $p{constructor(t,e=null){super(t,e),this.state=fe.NONE,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:gs.ROTATE,MIDDLE:gs.DOLLY,RIGHT:gs.PAN},this.touches={ONE:fs.ROTATE,TWO:fs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new Bi,this._lastTargetPosition=new A,this._quat=new Bi().setFromUnitVectors(t.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new nh,this._sphericalDelta=new nh,this._scale=1,this._panOffset=new A,this._rotateStart=new it,this._rotateEnd=new it,this._rotateDelta=new it,this._panStart=new it,this._panEnd=new it,this._panDelta=new it,this._dollyStart=new it,this._dollyEnd=new it,this._dollyDelta=new it,this._dollyDirection=new A,this._mouse=new it,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Bv.bind(this),this._onPointerDown=Fv.bind(this),this._onPointerUp=zv.bind(this),this._onContextMenu=qv.bind(this),this._onMouseWheel=Gv.bind(this),this._onKeyDown=Vv.bind(this),this._onTouchStart=Wv.bind(this),this._onTouchMove=Xv.bind(this),this._onMouseDown=kv.bind(this),this._onMouseMove=Hv.bind(this),this._interceptControlDown=Yv.bind(this),this._interceptControlUp=Zv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Rh),this.update(),this.state=fe.NONE}update(t=null){const e=this.object.position;Ue.copy(e).sub(this.target),Ue.applyQuaternion(this._quat),this._spherical.setFromVector3(Ue),this.autoRotate&&this.state===fe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ke:n>Math.PI&&(n-=Ke),s<-Math.PI?s+=Ke:s>Math.PI&&(s-=Ke),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ue.setFromSpherical(this._spherical),Ue.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ue),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ue.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new A(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new A(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ue.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(mo.origin.copy(this.object.position),mo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(mo.direction))<Nv?this.object.lookAt(this.target):(Ch.setFromNormalAndCoplanarPoint(this.object.up,this.target),mo.intersectPlane(Ch,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ra||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ra||this._lastTargetPosition.distanceToSquared(this.target)>Ra?(this.dispatchEvent(Rh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ke/60*this.autoRotateSpeed*t:Ke/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ue.setFromMatrixColumn(e,0),Ue.multiplyScalar(-t),this._panOffset.add(Ue)}_panUp(t,e){this.screenSpacePanning===!0?Ue.setFromMatrixColumn(e,1):(Ue.setFromMatrixColumn(e,0),Ue.crossVectors(this.object.up,Ue)),Ue.multiplyScalar(t),this._panOffset.add(Ue)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ue.copy(s).sub(this.target);let r=Ue.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new it,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Fv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Bv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function zv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Cu),this.state=fe.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function kv(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case gs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=fe.DOLLY;break;case gs.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=fe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=fe.ROTATE}break;case gs.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=fe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=fe.PAN}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent($l)}function Hv(i){switch(this.state){case fe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case fe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Gv(i){this.enabled===!1||this.enableZoom===!1||this.state!==fe.NONE||(i.preventDefault(),this.dispatchEvent($l),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Cu))}function Vv(i){this.enabled!==!1&&this._handleKeyDown(i)}function Wv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case fs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=fe.TOUCH_ROTATE;break;case fs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=fe.TOUCH_PAN;break;default:this.state=fe.NONE}break;case 2:switch(this.touches.TWO){case fs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=fe.TOUCH_DOLLY_PAN;break;case fs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=fe.TOUCH_DOLLY_ROTATE;break;default:this.state=fe.NONE}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent($l)}function Xv(i){switch(this._trackPointer(i),this.state){case fe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case fe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case fe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case fe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=fe.NONE}}function qv(i){this.enabled!==!1&&i.preventDefault()}function Yv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Zv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Pu(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Re;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Ph(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let v=0;v<o[h].length;++v)f.push(o[h][v][d]);const g=Ph(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Ph(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new _n(o,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){const v=h.getComponent(d,g);a.setComponent(d+u,g,v)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function Kv(i,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let o=0;const a=Object.keys(i.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let E=0,M=a.length;E<M;E++){const _=a[E],b=i.attributes[_];l[_]=new b.constructor(new b.array.constructor(b.count*b.itemSize),b.itemSize,b.normalized);const R=i.morphAttributes[_];R&&(c[_]||(c[_]=[]),R.forEach((C,L)=>{const S=new C.array.constructor(C.count*C.itemSize);c[_][L]=new C.constructor(S,C.itemSize,C.normalized)}))}const f=t*.5,g=Math.log10(1/t),v=Math.pow(10,g),m=f*v;for(let E=0;E<r;E++){const M=n?n.getX(E):E;let _="";for(let b=0,R=a.length;b<R;b++){const C=a[b],L=i.getAttribute(C),S=L.itemSize;for(let y=0;y<S;y++)_+=`${~~(L[u[y]](M)*v+m)},`}if(_ in e)h.push(e[_]);else{for(let b=0,R=a.length;b<R;b++){const C=a[b],L=i.getAttribute(C),S=i.morphAttributes[C],y=L.itemSize,D=l[C],N=c[C];for(let B=0;B<y;B++){const W=u[B],V=d[B];if(D[V](o,L[W](M)),S)for(let q=0,J=S.length;q<J;q++)N[q][V](o,S[q][W](M))}}e[_]=o,h.push(o),o++}}const p=i.clone();for(const E in i.attributes){const M=l[E];if(p.setAttribute(E,new M.constructor(M.array.slice(0,o*M.itemSize),M.itemSize,M.normalized)),E in c)for(let _=0;_<c[E].length;_++){const b=c[E][_];p.morphAttributes[E][_]=new b.constructor(b.array.slice(0,o*b.itemSize),b.itemSize,b.normalized)}}return p.setIndex(h),p}const ge=18,le=3.2,Jt=2.55,je=ge/2,$s=8.8,Us=Jt*1.2,qe=Jt*1.4,ms=Jt*1.08,Jv=.22,Pr={straight:["north","south"],corner:["north","east"],tjunction:["north","east","west"],crossroad:["north","east","south","west"],teleport:["east","west"],ghostchamber:["north"]},$v=[{type:"straight",position:[-24,0,-6],rotation:Math.PI/2},{type:"corner",position:[-10,0,15],rotation:Math.PI/2},{type:"crossroad",position:[12,0,15],rotation:0},{type:"tjunction",position:[26,0,-5],rotation:Math.PI},{type:"teleport",position:[1,0,-22],rotation:0},{type:"ghostchamber",position:[0,0,0],rotation:0}],ye=jv(),xs=Qv(),go=new Map;function jv(){return{glass:new zp({color:14742783,transmission:.98,thickness:Jv,roughness:.04,metalness:.02,ior:1.48,reflectivity:.5,transparent:!0,side:Le,attenuationColor:16777215,attenuationDistance:.8,userData:{isMazeGlass:!0}}),rim:new mn({color:1920728,emissive:996512,emissiveIntensity:.6,roughness:.24,metalness:.4}),structure:new mn({color:1384239,emissive:330516,roughness:.64,metalness:.2}),walkway:new mn({color:3818839,emissive:791330,roughness:.76,metalness:.08}),led:new mn({color:2909439,emissive:1459442,emissiveIntensity:2.1,roughness:.14,metalness:.08}),halo:new Be({color:1919743,transparent:!0,opacity:.1,side:Le}),ledGlow:new Be({color:1655252,transparent:!0,opacity:.24,side:Le}),teleport:new mn({color:9236479,emissive:4645631,emissiveIntensity:1.55,transparent:!0,opacity:.66,roughness:.12,metalness:.08})}}function Qv(){return{pedestalBase:new cn($s,$s+.6,1.35,10),pedestalTop:new cn($s-1.1,$s-.45,.36,10),pedestalHalo:new $n($s+.85,28),hubDeck:new cn(Jt*1.02,Jt*1.08,.18,18),rimRing:new pi(Jt+.02,.12,8,24),hubHalo:new pi(Jt*.76,.08,8,20),pipeShell:new cn(Jt,Jt,je,20,1,!0),walkwayX:new ln(je,.18,Us*1.34),walkwayZ:new ln(Us*1.34,.18,je),ledStripX:new ln(je*.98,.06,.18),ledStripZ:new ln(.18,.06,je*.98),ledGlowX:new jn(je*.98,.95),ledGlowZ:new jn(.95,je*.98),portalRing:new pi(Jt*.9,.14,10,24),portalFace:new $n(Jt*.72,20)}}function Sn(i,t,e,n,s=Math.random()*Math.PI*2){return i.userData.pulse={base:t,amplitude:e,speed:n,phase:s},i}function Du(i){return i==="east"||i==="west"?"x":"z"}function Lu(i){return i==="east"||i==="south"?1:-1}function Iu(i,t){i.rotation.set(0,0,0),t==="x"?i.rotation.z=Math.PI/2:i.rotation.x=Math.PI/2}function tx(i,t,e,n,s,r=24,o=1){const a=new cn(e,e,t,r,o,n),l=new Tt(a);return Iu(l,i),l.position.copy(s),l.updateMatrixWorld(!0),a.applyMatrix4(l.matrixWorld),a.deleteAttribute("uv"),a}function vn(){const i=new oe,t=new Tt(xs.pedestalBase,ye.structure);t.position.y=-.24;const e=new Tt(xs.pedestalTop,ye.walkway);e.position.y=.44;const n=new Tt(xs.pedestalHalo,ye.halo);return n.rotation.x=-Math.PI/2,n.position.y=.052,i.add(t,e,n),i}function Uu(){const i=new oe,t=new Tt(xs.hubDeck,ye.walkway);t.position.y=le-Jt+.14;const e=Sn(new Tt(xs.hubHalo,ye.led),1.2,.18,1.3);return e.position.y=le-Jt+.22,e.rotation.x=Math.PI/2,i.add(t,e),i}function ex(i,t){const e=new Tt(xs.rimRing,ye.rim);return e.position.copy(t),i==="x"&&(e.rotation.y=Math.PI/2),e}function nx(i,t,e=je,n=0){const s=i==="x"?new ln(e,.18,Us*1.34):new ln(Us*1.34,.18,e),r=new Tt(s,ye.walkway),o=n+e*.5;return i==="x"?r.position.set(t*o,le-Jt+.14,0):r.position.set(0,le-Jt+.14,t*o),r}function ix(i,t,e=je,n=0){const s=new oe,r=i==="x"?new ln(e*.98,.06,.18):new ln(.18,.06,e*.98),o=i==="x"?new jn(e*.98,.95):new jn(.95,e*.98),a=n+e*.5;return[-1,1].forEach(l=>{const c=Sn(new Tt(r,ye.led),1.4,.34,1.2,l),h=new Tt(o,ye.ledGlow);i==="x"?(c.position.set(t*a,le-Jt+.3,l*1.08),h.position.set(t*a,le-Jt+.14,l*1.02)):(c.position.set(l*1.08,le-Jt+.3,t*a),h.position.set(l*1.02,le-Jt+.14,t*a)),h.rotation.x=-Math.PI/2,s.add(c,h)}),s}function wr(i,t={}){const e=new oe,n=Du(i),s=Lu(i),r=t.length??je,o=t.startOffset??0,a=o+r*.5,l=new Tt(new cn(Jt,Jt,r,20,1,!0),ye.glass);Iu(l,n),n==="x"?l.position.set(s*a,le,0):l.position.set(0,le,s*a);const c=n==="x"?new A(s*(o+r),le,0):new A(0,le,s*(o+r));return e.add(l),e.add(ex(n,c)),e.add(nx(n,s,r,o)),e.add(ix(n,s,r,o)),e}function Nu(i,t){return new class extends Rn{getPoint(e,n=new A){const s=Math.PI-e*(Math.PI/2),r=qe+i*Math.cos(s),o=-qe+i*Math.sin(s);return n.set(r,t,o)}}}function sx(){const i=qe+Us*.67,t=qe-Us*.67,e=new vs;e.absarc(qe,-qe,i,Math.PI,Math.PI/2,!0),e.absarc(qe,-qe,t,Math.PI/2,Math.PI,!1);const n=new Tt(new Fo(e,20),ye.walkway);return n.rotation.x=-Math.PI/2,n.position.y=le-Jt+.14,n}function rx(){const i=new oe;return[qe-1.08,qe+1.08].forEach((e,n)=>{const s=Nu(e,le-Jt+.3),r=Sn(new Tt(new ci(s,18,.05,8,!1),ye.led),1.35,.28,1.15,n);i.add(r)}),i}function ox(){const i=new oe,t=Nu(qe,le),e=new Tt(new ci(t,24,Jt,16,!1),ye.glass);return i.add(e),i.add(sx()),i.add(rx()),i}function ax(){const i=new oe;return i.userData.type="corner",i.add(vn()),i.add(wr("north",{length:je-qe,startOffset:qe})),i.add(wr("east",{length:je-qe,startOffset:qe})),i.add(ox()),i}function lx(i){const t=[{axis:"x",length:ms*2,position:new A(0,le,0)}];return i==="crossroad"?t.push({axis:"z",length:ms*2,position:new A(0,le,0)}):t.push({axis:"z",length:ms,position:new A(0,le,-ms*.5)}),t}function cx(i){if(go.has(i))return go.get(i);const e=lx(i).map(s=>tx(s.axis,s.length,Jt,!0,s.position,48));let n=Pu(e,!1);return n=Kv(n,.001),n.computeVertexNormals(),go.set(i,n.clone()),go.get(i)}const Ca=new Map;function hx(i){if(Ca.has(i))return Ca.get(i);const t=ye.glass.clone();return t.userData.isMazeGlass=!0,t.customProgramCacheKey=()=>i,t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
      varying vec3 vRawPos;`),e.vertexShader=e.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vRawPos = position;`);let n="";i==="crossroad"?n=`
          float rSq = 2.54 * 2.54; 
          float dy = vRawPos.y - 3.2; // HUB_HEIGHT
          float distSqX = dy * dy + vRawPos.z * vRawPos.z;
          float distSqZ = vRawPos.x * vRawPos.x + dy * dy;
          // Delete overlapping interiors
          if (distSqX < rSq || distSqZ < rSq) discard;
        `:i==="tjunction"&&(n=`
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
        `),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
      varying vec3 vRawPos;`),e.fragmentShader=e.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
      ${n}
      `)},Ca.set(i,t),t}function ux(i){const t=new oe;return t.userData.type=i,t.add(vn()),t.add(Uu()),t.add(new Tt(cx(i),hx(i))),Pr[i].forEach(e=>{t.add(wr(e,{length:je-ms,startOffset:ms}))}),t}function dx(i){const t=Du(i),e=Lu(i),n=new oe,s=e*(je-.3),r=new $n(Jt*.96,64),o=new Fn({uniforms:{uTime:{value:0}},vertexShader:`
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
    `,transparent:!1,alphaTest:.1,side:Le,depthWrite:!0}),a=new Tt(r,o);a.onBeforeRender=()=>{o.uniforms.uTime.value=performance.now()*.001};const l=new Cr(Jt*.88,Jt*1.05,32),c=new Be({color:65535,transparent:!0,opacity:.12,blending:gi,side:Le,depthWrite:!1}),h=new Tt(l,c);return h.renderOrder=10,t==="x"?(a.position.set(s,le,0),a.rotation.y=Math.PI/2,h.position.set(s+e*.05,le,0),h.rotation.y=Math.PI/2):(a.position.set(0,le,s),a.rotation.y=e>0?Math.PI:0,h.position.set(0,le,s+e*.05),h.rotation.y=e>0?Math.PI:0),n.add(a,h),n}function Dr(i){let t;if(i==="corner")t=ax();else if(i==="ghostchamber")t=fx();else if(i==="tjunction"||i==="crossroad")t=ux(i);else{t=new oe,t.userData.type=i;const e=Pr[i];if(!e)throw new Error(`Unknown maze piece type: ${i}`);t.add(vn()),t.add(Uu()),e.forEach(n=>{t.add(wr(n))}),i==="teleport"&&t.add(dx("west"))}return t.traverse(e=>{e.isMesh&&e.material?.userData?.isMazeGlass&&(e.renderOrder=1)}),t}function fx(){const i=new oe;i.userData.type="ghostchamber";const t=new oe;t.position.z=4.5,i.add(t),i.add(vn());const e=Jt,n=18.9,s=13.9,r=4,o=new vs,a=-n/2,l=-s/2;o.moveTo(a,l+r),o.lineTo(a,l+s-r),o.quadraticCurveTo(a,l+s,a+r,l+s),o.lineTo(a+n-r,l+s),o.quadraticCurveTo(a+n,l+s,a+n,l+s-r),o.lineTo(a+n,l+r),o.quadraticCurveTo(a+n,l,a+n-r,l),o.lineTo(a+r,l),o.quadraticCurveTo(a,l,a,l+r);const c={depth:.01,bevelEnabled:!0,bevelThickness:e,bevelSize:e,bevelSegments:20,curveSegments:24},h=new Do(o,c),u=ye.glass.clone();u.userData.isMazeGlass=!0,u.customProgramCacheKey=()=>"ghostchamber",u.onBeforeCompile=z=>{z.vertexShader=z.vertexShader.replace("#include <common>",`#include <common>
      varying vec3 vRawPos;`),z.vertexShader=z.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vRawPos = position;`),z.fragmentShader=z.fragmentShader.replace("#include <common>",`#include <common>
      varying vec3 vRawPos;`),z.fragmentShader=z.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
      // The shell is rotated -90deg on X, so Local Y becomes World -Z.
      if (vRawPos.y > 6.9) { 
        float distToPipeCenter = sqrt(vRawPos.x * vRawPos.x + vRawPos.z * vRawPos.z);
        if (distToPipeCenter < 2.54) {
            discard;
        }
      }
      `)};const d=new Tt(h,u);d.rotation.x=-Math.PI/2,d.position.y=le,t.add(d);const f=18,g=14,v=3,m=new vs,p=-f/2,E=-g/2;m.moveTo(p,E+v),m.lineTo(p,E+g-v),m.quadraticCurveTo(p,E+g,p+v,E+g),m.lineTo(p+f-v,E+g),m.quadraticCurveTo(p+f,E+g,p+f,E+g-v),m.lineTo(p+f,E+v),m.quadraticCurveTo(p+f,E,p+f-v,E),m.lineTo(p+v,E),m.quadraticCurveTo(p,E,p,E+v);const M=new Do(m,{depth:.18,bevelEnabled:!1,curveSegments:16});M.computeBoundingBox();const _=-.5*(M.boundingBox.max.z-M.boundingBox.min.z);M.translate(0,0,_);const b=new Tt(M,ye.walkway);b.rotation.x=-Math.PI/2,b.position.set(0,le-Jt+.14,0),t.add(b);const C=m.getPoints(24).map(z=>new A(z.x,0,z.y)),L=new El(C,!0),S=new ci(L,128,.06,8,!0),y=Sn(new Tt(S,ye.led),1.4,.34,1.2,0);y.position.set(0,le-Jt+.3,0),t.add(y);const D=new ci(L,128,.4,8,!0),N=new Tt(D,ye.ledGlow);N.position.set(0,le-Jt+.14,0),t.add(N);const B=1.8,W=new vs;W.absarc(0,.5,B,0,Math.PI,!1),W.lineTo(-B,-1.5),W.lineTo(-B/2,-.5),W.lineTo(0,-1.5),W.lineTo(B/2,-.5),W.lineTo(B,-1.5),W.lineTo(B,.5);const q=W.getPoints(16).map(z=>new A(z.x,0,z.y)),J=new El(q,!0),X=new ci(J,64,.08,8,!0),ut=new Fo(W,16),mt=[-4.5,4.5],yt=[-3,3],Ft=new _u,Ht=[new A(-.6,0,-.2),new A(-.3,0,.1),new A(0,0,-.2),new A(.3,0,.1),new A(.6,0,-.2)];Ft.add(new nr(Ht[0],Ht[1])),Ft.add(new nr(Ht[1],Ht[2])),Ft.add(new nr(Ht[2],Ht[3])),Ft.add(new nr(Ht[3],Ht[4]));const re=new ci(Ft,16,.05,8,!1),$t=new pi(.25,.05,8,16);let Z=0;mt.forEach(z=>{let at=0;yt.forEach(nt=>{const lt=(Z+at)%2===1,Nt=Sn(new Tt(X,ye.led),1.2,.4,1.8,Math.random()*Math.PI);Nt.position.set(z,le-Jt+.24,nt);const Lt=new Tt(ut,ye.ledGlow);Lt.rotation.x=Math.PI/2,Lt.position.set(z,le-Jt+.24,nt),t.add(Nt,Lt);const T=new oe,x=Sn(new Tt($t,ye.led),1.4,.3,2,Math.random());x.rotation.x=Math.PI/2,x.position.set(-.7,0,.6);const F=Sn(new Tt($t,ye.led),1.4,.3,2,Math.random());if(F.rotation.x=Math.PI/2,F.position.set(.7,0,.6),T.add(x,F),lt){const G=Sn(new Tt(re,ye.led),1.4,.3,2,Math.random());T.add(G)}T.position.set(z,le-Jt+.24,nt),t.add(T),at++}),Z++});const tt=wr("north",{length:6.55,startOffset:6.95}),vt=tt.children[0],bt=ye.glass.clone();bt.userData.isMazeGlass=!0,bt.customProgramCacheKey=()=>"ghostchamber_pipe",bt.onBeforeCompile=z=>{z.vertexShader=z.vertexShader.replace("#include <common>",`#include <common>
      varying vec3 vWorldPos;`),z.vertexShader=z.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;`),z.fragmentShader=z.fragmentShader.replace("#include <common>",`#include <common>
      varying vec3 vWorldPos;`),z.fragmentShader=z.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
      
      float rSq = 2.54 * 2.54; 
      float dy = vWorldPos.y - 3.2;
      float dz = vWorldPos.z - (-6.95);
      float distSqX = dy * dy + dz * dz;
      
      if (distSqX < rSq) {
          discard;
      }
      `)},vt.material=bt,t.add(tt);const xt=new oe,Kt=new Be({color:16711680,transparent:!0,opacity:.15,blending:gi,side:Le,depthWrite:!1}),he=new $n(Jt-.1,32),P=Sn(new Tt(he,Kt),1.1,.1,1.5,0);xt.add(P);const Q=new Be({color:16720418}),$=new Be({color:16711680,transparent:!0,opacity:.5,blending:gi,depthWrite:!1}),K=[-1.2,-.4,.4,1.2];return K.forEach(z=>{const at=Math.sqrt(Math.pow(Jt-.15,2)-Math.pow(z,2))*2,nt=new cn(.04,.04,at,8),lt=Sn(new Tt(nt,Q),1.3,.7,2,Math.random());lt.rotation.z=Math.PI/2,lt.position.y=z;const Nt=new cn(.12,.12,at,8),Lt=new Tt(Nt,$);Lt.rotation.z=Math.PI/2,Lt.position.y=z,xt.add(lt,Lt)}),K.forEach(z=>{const at=Math.sqrt(Math.pow(Jt-.15,2)-Math.pow(z,2))*2,nt=new cn(.04,.04,at,8),lt=Sn(new Tt(nt,Q),1.3,.7,2,Math.random());lt.position.x=z;const Nt=new cn(.12,.12,at,8),Lt=new Tt(Nt,$);Lt.position.x=z,xt.add(lt,Lt)}),xt.position.set(0,le,-13.1),t.add(xt),i}function px(i){const t=new oe;return i.forEach((e,n)=>{const s=n%2,r=Math.floor(n/2),o=s*24,a=r*24,l=Dr(e.type);l.position.set(o,6,a),t.add(l)}),t}function Lr(){const i=new oe,t=new mn({color:16763904,metalness:.1,roughness:.2,transparent:!1,opacity:1,depthWrite:!0}),e=new Be({color:0,side:Le}),n=new mn({color:15597619,roughness:.6}),s=new Be({color:65535}),r=new oe,o=new fi(3.5,32,16,0,Math.PI*2,0,Math.PI/2),a=new $n(3.48,32),l=new Tt(o,t),c=new Tt(a,e);c.rotation.x=Math.PI/2,r.add(l,c);const h=new oe;h.rotation.x=Math.PI;const u=new Tt(o,t),d=new Tt(a,e);d.rotation.x=-Math.PI/2,h.add(u,d);const f=new fi(3.45,32,16,Math.PI,Math.PI),g=new Tt(f,e);i.add(g);const v=new oe,m=new Tt(new Wl(1.4,1.5,4,16),n);m.scale.set(1.2,.4,1),m.rotation.x=Math.PI/2,m.position.set(0,.2,-.8),v.add(m),h.add(v),i.add(r,h);function p(_){const b=new oe,R=new Tt(new Cr(.42,.48,6),s),C=new Tt(new pi(.3,.04,8,32),s);C.name="eyeRing";const L=new Tt(new fi(.1,12,12),s);return b.add(R,C,L),b.position.set(_,1.8,2.45),b.rotation.y=_>0?.35:-.35,b.rotation.z=Math.PI/6,b}const E=p(1.6),M=p(-1.6);return r.add(E,M),i.userData={type:"pacman",update:_=>{const b=Math.abs(Math.sin(_*6.5))*.48;r.rotation.x=-b,h.rotation.x=Math.PI+b,E.getObjectByName("eyeRing").rotation.z=_*2.5,M.getObjectByName("eyeRing").rotation.z=-_*2.5}},i}function ks(i=16711748){const t=new oe,e=2.1,n=4.5,s=64,r=32,o=new fi(e,s,16,0,Math.PI*2,0,Math.PI/2);o.translate(0,n,0);const a=new cn(e,e,n,s,r,!0);a.translate(0,n/2,0);const l=Pu([o,a]);l.attributes.position.setUsage(uf);const c=l.attributes.position,h=new Float32Array(c.count);for(let _=0;_<c.count;_++)h[_]=c.getY(_);const u={uniforms:{uColor:{value:new kt(i)},uHeight:{value:n},uEyeRight:{value:new A(.8,n+.65,Math.sqrt(e*e-.8*.8-.65*.65))},uEyeLeft:{value:new A(-.8,n+.65,Math.sqrt(e*e-.8*.8-.65*.65))},uIsVulnerable:{value:0},uVulnerableColor:{value:new kt(8959)},uVulnerableEyeColor:{value:new kt(16758920)},uTime:{value:0}},vertexShader:`
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
    `},d=new Fn({uniforms:u.uniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,transparent:!0,blending:gi,depthWrite:!1,side:Le}),f=new oe;t.add(f);const g=new Tt(l,d);g.renderOrder=2,f.add(g);const v=new Be({color:0,transparent:!0,opacity:.85,blending:Li,depthWrite:!1}),m=new Tt(l,v);m.scale.set(.98,.98,.98),m.renderOrder=1,f.add(m);const p=6,E=.35,M=4.2;return t.userData={type:"ghost",update:_=>{u.uniforms.uTime.value=_,f.position.y=Math.sin(_*2.2)*.2;for(let b=0;b<c.count;b++){const R=h[b];if(R<2.5){const C=c.getX(b),L=c.getZ(b),S=Math.atan2(L,C),y=Math.sin(S*p+_*M),D=Math.pow((2.5-R)/2.5,1.1);c.setY(b,R+y*E*D)}}l.computeVertexNormals(),c.needsUpdate=!0}},t.setVulnerable=_=>{_==="flashing"?u.uniforms.uIsVulnerable.value=2:_?u.uniforms.uIsVulnerable.value=1:u.uniforms.uIsVulnerable.value=0},t}function Ir(){const i=new oe,t=16755200,e=new mn({color:t,emissive:t,emissiveIntensity:6}),n=new Be({color:t,transparent:!0,opacity:.4,side:Le}),s=new Tt(new Zl(1,0),e);i.add(s);const r=new Tt(new pi(1.8,.04,8,48),n);return r.rotation.x=Math.PI/2,i.add(r),i.userData={type:"pellet",update:o=>{s.rotation.y=o*2,s.rotation.z=o*1.5,i.position.y+=Math.sin(o*3)*.006,r.rotation.z=-o*3,r.scale.setScalar(1+Math.sin(o*4)*.1)}},i}function mx(){const i=new oe,t=16755200,e=new mn({color:t,emissive:t,emissiveIntensity:1.5,roughness:.2,metalness:.8}),n=new Be({color:t,transparent:!0,opacity:.3,blending:gi,depthWrite:!1}),s=new fi(.35,16,16),r=new Tt(s,e),o=new Tt(s,n);return o.scale.set(1.4,1.4,1.4),i.add(r),i.add(o),i.userData={type:"standard_pellet",update:a=>{i.position.y+=Math.sin(a*4)*.005}},i}const gx=[{type:"teleport",position:[-18,0,18],rotation:6.283185307179586,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"straight",position:[18,0,0],rotation:7.853981633974483,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:1.5707963267948966},{type:"corner",position:[36,0,0],rotation:9.42477796076938,hasPowerPellet:!0,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"ghostchamber",position:[0,0,-18],rotation:3.141592653589793,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"crossroad",position:[0,0,0],rotation:3.141592653589793,hasPowerPellet:!1,hasPacmanSpawn:!0,pacmanSpawnRotation:1.5707963267948966},{type:"teleport",position:[-18,0,0],rotation:6.283185307179586,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"corner",position:[36,0,18],rotation:7.853981633974483,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"straight",position:[18,0,18],rotation:1.5707963267948966,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"crossroad",position:[0,0,18],rotation:1.5707963267948966,hasPowerPellet:!0,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"corner",position:[0,0,36],rotation:1.5707963267948966,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"teleport",position:[-18,0,36],rotation:6.283185307179586,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0}],Ns={north:{x:0,z:-1},east:{x:1,z:0},south:{x:0,z:1},west:{x:-1,z:0}},De={north:"south",east:"west",south:"north",west:"east"},_x={north:"west",east:"north",south:"east",west:"south"},vx={north:"east",east:"south",south:"west",west:"north"},Dh={north:Math.PI,east:Math.PI/2,south:0,west:-Math.PI/2};function js(i,t){return`${Math.round(i)},${Math.round(t)}`}function rr(i){const t=Ns[i];return new A(t.x,0,t.z)}function on(i,t){return i.map(e=>{const n=Ns[e],s=n.x*Math.cos(t)+n.z*Math.sin(t),r=-n.x*Math.sin(t)+n.z*Math.cos(t);return Object.entries(Ns).find(([,o])=>o.x===Math.round(s)&&o.z===Math.round(r))?.[0]}).filter(Boolean)}function xx(i){const t=new Map;return i.forEach(e=>{const[n,s,r]=e.position,o=Pr[e.type]||[],a=on(o,e.rotation);t.set(js(n,r),{key:js(n,r),type:e.type,position:new A(n,s,r),rotation:e.rotation,connectors:a,exits:new Set,hasPowerPellet:e.hasPowerPellet||!1,hasPacmanSpawn:e.hasPacmanSpawn||!1,pacmanSpawnRotation:e.pacmanSpawnRotation||0})}),t.forEach(e=>{e.connectors.forEach(n=>{const s=Ns[n],r=js(e.position.x+s.x*ge,e.position.z+s.z*ge);t.get(r)?.connectors.includes(De[n])&&e.exits.add(n)})}),{tiles:t,hasTileAt(e,n){return t.has(js(e,n))},getTileAt(e,n){return t.get(js(e,n))||null},getNeighbor(e,n){const s=Ns[n];return this.getTileAt(e.position.x+s.x*ge,e.position.z+s.z*ge)},canMove(e,n){return!!e?.exits.has(n)}}}const or=2,yx=.001,Pa=7.5,Mx=9.25,Qs=2.55*1.4,Sx=260,_o=.05;function ur(i){return new A(i.position.x,or,i.position.z)}function tr(i,t){return ur(i).addScaledVector(rr(t),ge/2)}function Ex(i,t){return Math.atan2(Math.sin(t-i),Math.cos(t-i))}function Ou(i,t){const e=i.x*Math.cos(t)+i.z*Math.sin(t),n=-i.x*Math.sin(t)+i.z*Math.cos(t);return new A(e,i.y,n)}function wx(){const i=[new A(0,or,-ge/2),new A(0,or,-Qs)];for(let t=1;t<=8;t+=1){const e=t/8,n=Math.PI-e*(Math.PI/2);i.push(new A(Qs+Qs*Math.cos(n),or,-Qs+Qs*Math.sin(n)))}return i.push(new A(ge/2,or,0)),i}function Fu(i){return wx().map(t=>Ou(t,i.rotation).add(i.position))}function Rl(i,t){const e=on(["north","east"],i.rotation),n=Fu(i);return e[0]===t?n[1].clone():e[1]===t?n[n.length-2].clone():ur(i)}function Je(i,t=null){return i.type==="ghostchamber"?`${i.key}:${t||"center_front"}`:i.type==="teleport"&&t==="event_horizon"?`${i.key}:event_horizon`:i.type==="corner"?`${i.key}:${t}`:`${i.key}:center`}function Tx(i,t){return i.type==="corner"?Je(i,t):i.type==="ghostchamber"?Je(i,"center_front"):Je(i)}function bx(i,t,e){const n=on(["north","east"],i.rotation),r=Fu(i).slice(1,-1);return n[0]===t&&n[1]===e?r:n[1]===t&&n[0]===e?r.reverse():[Rl(i,t),Rl(i,e)]}function Lh(i){const t=[0];let e=0;for(let n=1;n<i.length;n+=1)e+=i[n-1].distanceTo(i[n]),t.push(e);return{points:i,cumulativeLengths:t,totalLength:e,progress:0}}function Eo(i){if(i.progress<=0)return i.points[0].clone();if(i.progress>=i.totalLength)return i.points[i.points.length-1].clone();const t=i.cumulativeLengths.findIndex(o=>o>=i.progress),e=Math.max(1,t),n=i.cumulativeLengths[e-1],s=i.cumulativeLengths[e],r=(i.progress-n)/(s-n);return i.points[e-1].clone().lerp(i.points[e],r)}function er(i,t){return Eo({...i,progress:t})}function oi(i,t,e,n,s,r={}){return{from:i,to:t,inputDirection:e,endDirection:n,continueDirection:r.continueDirection??null,reverseDirection:r.reverseDirection??De[n],reverseContinueDirection:r.reverseContinueDirection??null,points:s}}function Ax(i){const t=new Map;function e(s,r=null){const o=Je(s,r);if(t.has(o))return t.get(o);let a,l="center";if(s.type==="corner")a=Rl(s,r),l="corner";else if(s.type==="ghostchamber"){const h={left_back:{x:-6,z:8.5},center_back:{x:0,z:8.5},right_back:{x:6,z:8.5},left_front:{x:-6,z:0},center_front:{x:0,z:0},right_front:{x:6,z:0}}[r],u=Ou(new A(h.x,0,h.z),s.rotation);a=ur(s).add(u),l="ghostchamber"}else if(s.type==="teleport")if(r==="event_horizon"){const h=on(["west"],s.rotation)[0];a=tr(s,h),l="teleport_event_horizon"}else a=ur(s),l="center";else a=ur(s);const c={id:o,tile:s,connector:r,type:l,position:a,edges:[]};return t.set(o,c),c}i.tiles.forEach(s=>{s.type==="corner"?s.connectors.forEach(r=>e(s,r)):s.type==="ghostchamber"?["left_back","center_back","right_back","left_front","center_front","right_front"].forEach(r=>e(s,r)):s.type==="teleport"?(e(s),e(s,"event_horizon")):e(s)});function n(s,r){return t.get(Tx(s,r))}return i.tiles.forEach(s=>{if(s.type==="ghostchamber"){const r=on(["north"],s.rotation)[0],o=on(["south"],s.rotation)[0],a=on(["east"],s.rotation)[0],l=on(["west"],s.rotation)[0],c=(u,d,f)=>{const g=t.get(Je(s,u)),v=t.get(Je(s,d)),m=[g.position,v.position];g.edges.push(oi(g,v,f,f,m,{reverseDirection:De[f],reverseContinueDirection:De[f]}))};c("left_back","center_back",a),c("center_back","left_back",l),c("center_back","right_back",a),c("right_back","center_back",l),c("left_front","center_front",a),c("center_front","left_front",l),c("center_front","right_front",a),c("right_front","center_front",l),c("left_back","left_front",r),c("left_front","left_back",o),c("center_back","center_front",r),c("center_front","center_back",o),c("right_back","right_front",r),c("right_front","right_back",o);const h=i.getNeighbor(s,r);if(h&&s.exits.has(r)){const u=t.get(Je(s,"center_front")),d=n(h,De[r]),f=[u.position,tr(s,r),d.position];u.edges.push(oi(u,d,r,r,f,{reverseDirection:De[r],reverseContinueDirection:De[r]}))}return}if(s.type==="teleport"){const r=t.get(Je(s)),o=on(["west"],s.rotation)[0],a=on(["east"],s.rotation)[0],l=t.get(Je(s,"event_horizon"));r.edges.push(oi(r,l,o,o,[r.position,l.position],{reverseDirection:a,reverseContinueDirection:a})),l.edges.push(oi(l,r,a,a,[l.position,r.position],{reverseDirection:o,reverseContinueDirection:o})),s.exits.forEach(c=>{const h=i.getNeighbor(s,c),u=n(h,De[c]),d=[r.position,tr(s,c),u.position];r.edges.push(oi(r,u,c,c,d,{reverseDirection:De[c],reverseContinueDirection:De[c]}))});return}if(s.type!=="corner"){const r=t.get(Je(s));s.exits.forEach(o=>{const a=i.getNeighbor(s,o),l=n(a,De[o]),c=[r.position,tr(s,o),l.position];r.edges.push(oi(r,l,o,o,c,{reverseDirection:De[o],reverseContinueDirection:De[o]}))});return}s.connectors.forEach(r=>{const o=t.get(Je(s,r)),a=i.getNeighbor(s,r);if(a&&s.exits.has(r)){const l=n(a,De[r]),c=[o.position,tr(s,r),l.position];o.edges.push(oi(o,l,r,r,c,{reverseDirection:De[r],reverseContinueDirection:null}))}s.connectors.filter(l=>l!==r).forEach(l=>{if(!i.getNeighbor(s,l)||!s.exits.has(l))return;const h=t.get(Je(s,l)),u=bx(s,r,l);o.edges.push(oi(o,h,l,l,u,{continueDirection:l,reverseDirection:r,reverseContinueDirection:r}))})})}),t}class Ih{constructor(t,e,n={}){this.model=t,this.graph=e,this.navigationNodes=Ax(e),this.speed=n.speed??13,this.currentNode=null,this.currentDirection=null,this.desiredDirection=null,this.desiredIntent=null,this.facingDirection="east",this.bodyFacingDirection="east",this.bodyTurnResponsiveness=Pa,this.boostedBodyTurnEdgesRemaining=0,this.activeEdge=null,this.route=null,this.forceContinueDirection=null,this.isMoving=!1,this.cameraTrail=[],this.startedIntentEvents=[]}reset(t,e=null,n=null){let s=n;!s&&t.type==="corner"&&(s=t.connectors[0]),this.currentNode=this.navigationNodes.get(Je(t,s)),this.currentDirection=null,this.desiredDirection=e,this.desiredIntent=null,this.facingDirection=e||"east",this.bodyFacingDirection=this.facingDirection,this.bodyTurnResponsiveness=Pa,this.boostedBodyTurnEdgesRemaining=0,this.activeEdge=null,this.route=null,this.forceContinueDirection=null,this.isMoving=!1,this.cameraTrail=[this.currentNode.position.clone()],this.startedIntentEvents=[],this.model.position.copy(this.currentNode.position),this.model.rotation.set(0,Dh[this.bodyFacingDirection],0)}setDesiredDirection(t){if(Ns[t]){if(this.canReverseImmediately(t)){this.reverseActiveEdge();return}if(!this.isMoving){const e=this.findEdge(t);if(!e)return;this.desiredDirection=t,this.startEdge(e);return}this.desiredDirection=t}}setDesiredIntent(t){const e=this.resolveIntentDirection(t);if(!e)return{accepted:!1,direction:null,reverseIntent:!1};const n=t==="reverse";if(this.canReverseImmediately(e))return this.reverseActiveEdge(),{accepted:!0,direction:e,reverseIntent:n,started:!0};if(!this.isMoving){const s=this.findEdge(e);return s?(this.desiredIntent=null,this.desiredDirection=null,this.startEdge(s,null,t),{accepted:!0,direction:e,reverseIntent:n,started:!0}):{accepted:!1,direction:e,reverseIntent:n}}return this.desiredIntent=t,this.desiredDirection=null,{accepted:!0,direction:e,reverseIntent:n,queued:!0}}update(t,e){if(!this.currentNode)return;this.model.userData.update&&this.model.userData.update(e);let n=this.speed*t;for(;n>yx&&this.route;){const s=this.route,r=s.progress,o=this.route.totalLength-this.route.progress;n>=o?(this.route.progress=this.route.totalLength,this.recordCameraTrail(s,r,s.totalLength),this.model.position.copy(Eo(this.route)),n-=o,this.finishActiveEdge()):(this.route.progress+=n,this.recordCameraTrail(s,r,s.progress),this.model.position.copy(Eo(this.route)),n=0)}this.isMoving=!!this.route,this.updateFacing(t)}findEdge(t){return this.currentNode?.edges.find(e=>e.inputDirection===t)||null}startEdge(t,e=null,n=null){const s=this.currentDirection&&t.inputDirection===De[this.currentDirection];if(this.activeEdge=t,this.route=Lh(t.points),this.forceContinueDirection=e??t.continueDirection,this.currentDirection=t.endDirection,this.facingDirection=t.endDirection,this.bodyFacingDirection=t.endDirection,this.isMoving=!0,s||n==="reverse"){this.rebuildCameraTrailBehind();const o=t.from.type==="corner"&&t.to.type==="corner"&&t.from.tile===t.to.tile?"reverse_instant":"reverse";this.startedIntentEvents.push(o)}else n&&this.startedIntentEvents.push(n)}finishActiveEdge(){const t=this.activeEdge,e=this.forceContinueDirection;if(this.currentNode=t.to,this.activeEdge=null,this.route=null,this.forceContinueDirection=null,this.currentNode.type==="teleport_event_horizon"){const o=Array.from(this.graph.tiles.values()).filter(a=>a.type==="teleport"&&a!==this.currentNode.tile);if(o.length>0){const a=o[Math.floor(Math.random()*o.length)],l=this.navigationNodes.get(Je(a,"event_horizon")),c=on(["east"],a.rotation)[0];this.currentNode=l,this.currentDirection=c,this.facingDirection=c,this.bodyFacingDirection=c,this.model.position.copy(l.position),this.cameraTrail=[l.position.clone()],this.startedIntentEvents.push("reverse_instant")}else{const a=on(["east"],this.currentNode.tile.rotation)[0];this.forceContinueDirection=a}}this.boostedBodyTurnEdgesRemaining>0&&(this.boostedBodyTurnEdgesRemaining-=1,this.boostedBodyTurnEdgesRemaining===0&&(this.bodyTurnResponsiveness=Pa));const n=e?this.findEdge(e):null;if(n&&this.currentNode.type==="corner"){this.startEdge(n);return}const s=this.desiredIntent,r=this.findDesiredEdge();if(r){this.desiredDirection=null,this.desiredIntent=null,this.startEdge(r,null,s);return}if(this.desiredDirection=null,this.desiredIntent=null,n){this.startEdge(n);return}if(this.currentNode.type!=="corner"){const o=this.currentDirection?this.findEdge(this.currentDirection):null;if(o){this.startEdge(o);return}}this.currentDirection=null,this.isMoving=!1}canReverseImmediately(t){return this.route&&this.activeEdge&&this.currentDirection&&t===De[this.currentDirection]&&this.route.progress>.05&&this.route.totalLength-this.route.progress>.05}reverseActiveEdge(){const t=this.activeEdge,e=this.route,n=t.from.type==="corner"&&t.to.type==="corner"&&t.from.tile===t.to.tile,s=t.points.slice().reverse().map(o=>o.clone()),r={from:t.to,to:t.from,inputDirection:t.reverseDirection,endDirection:t.reverseDirection,continueDirection:t.reverseContinueDirection,reverseDirection:t.endDirection,reverseContinueDirection:t.endDirection,points:s};this.activeEdge=r,this.route=Lh(s),this.route.progress=e.totalLength-e.progress,this.forceContinueDirection=t.reverseContinueDirection,this.currentDirection=r.endDirection,this.facingDirection=r.endDirection,this.bodyFacingDirection=n?De[t.endDirection]:r.endDirection,n&&(this.bodyTurnResponsiveness=Mx,this.boostedBodyTurnEdgesRemaining=2),this.desiredDirection=null,this.desiredIntent=null,this.model.position.copy(Eo(this.route)),this.isMoving=!0,this.rebuildCameraTrailBehind(),this.startedIntentEvents.push(n?"reverse_instant":"reverse")}consumeStartedIntent(){return this.startedIntentEvents.shift()||null}findDesiredEdge(){if(this.desiredIntent){const t=this.resolveIntentDirection(this.desiredIntent);return t?this.findEdge(t):null}return this.desiredDirection?this.findEdge(this.desiredDirection):null}resolveIntentDirection(t){const e=this.currentDirection||this.facingDirection;return t==="forward"?e:t==="right"?vx[e]:t==="reverse"?De[e]:t==="left"?_x[e]:null}updateFacing(t){if(!this.bodyFacingDirection)return;const e=Dh[this.bodyFacingDirection],n=Ex(this.model.rotation.y,e),s=1-Math.exp(-this.bodyTurnResponsiveness*t);this.model.rotation.y+=n*s}getFacingDirection(){return this.facingDirection||"east"}getFollowDirection(){return rr(this.getFacingDirection())}getCameraTarget(){return this.model.position.clone()}getRouteCameraPoint(t=0,e=!0){if(!this.route)return this.getCameraTarget().addScaledVector(rr(this.getFacingDirection()),t);const n=this.route.progress+t;if(!e&&(n<0||n>this.route.totalLength))return null;const s=Fi.clamp(n,0,this.route.totalLength);return er(this.route,s)}recordCameraTrail(t,e,n){if(!t||e===n)return;const s=n>e?1:-1;let r=e+s*_o;for(;s>0&&r<n||s<0&&r>n;)this.appendCameraTrailPoint(er(t,r)),r+=s*_o;this.appendCameraTrailPoint(er(t,n))}rebuildCameraTrailBehind(){if(this.cameraTrail=[],this.activeEdge){const e=this.activeEdge.from.connector&&this.activeEdge.from.connector!==this.activeEdge.inputDirection?this.activeEdge.from.connector:De[this.activeEdge.inputDirection];if(e){const n=this.activeEdge.points[0].clone().addScaledVector(rr(e),20);this.cameraTrail.push(n)}}if(this.route){for(let e=0;e<=this.route.progress;e+=_o)this.cameraTrail.push(er(this.route,e));const t=er(this.route,this.route.progress);(this.cameraTrail.length===0||this.cameraTrail[this.cameraTrail.length-1].distanceTo(t)>.001)&&this.cameraTrail.push(t)}else this.currentNode?this.cameraTrail.push(this.currentNode.position.clone()):this.cameraTrail.push(this.model.position.clone())}appendCameraTrailPoint(t){if(this.cameraTrail.length>=2){const n=this.cameraTrail[this.cameraTrail.length-1],s=this.cameraTrail[this.cameraTrail.length-2];t.distanceTo(s)<n.distanceTo(s)&&this.cameraTrail.pop()}const e=this.cameraTrail[this.cameraTrail.length-1];for((!e||e.distanceTo(t)>=_o*.5)&&this.cameraTrail.push(t.clone());this.cameraTrail.length>Sx;)this.cameraTrail.shift()}getCameraTrailPoint(t,e){let n=t,s=this.getCameraTarget();for(let o=this.cameraTrail.length-1;o>=0;o-=1){const a=this.cameraTrail[o],l=s.distanceTo(a);if(l!==0){if(l>=n){const c=n/l;return s.clone().lerp(a,c)}n-=l,s=a}}const r=e?.clone?.()||rr(this.getFacingDirection());return s.clone().addScaledVector(r.normalize(),-n)}}const Ci={STANDARD:0,POWER:1};class Rx{constructor(t){this.scene=t,this.coreMesh=null,this.glowMesh=null,this.pellets=[],this.powerPelletGroup=new oe,this.scene.add(this.powerPelletGroup),this.dummy=new Ie}buildFromMap(t){for(this.coreMesh&&(this.scene.remove(this.coreMesh),this.scene.remove(this.glowMesh),this.coreMesh.dispose(),this.glowMesh.dispose(),this.pellets=[]);this.powerPelletGroup.children.length>0;)this.powerPelletGroup.remove(this.powerPelletGroup.children[0]);this.scene.children.includes(this.powerPelletGroup)||this.scene.add(this.powerPelletGroup);const e=[];t.tiles.forEach(l=>{const c=l.position,h=l.rotation,u=l.hasPowerPellet,d=(f,g)=>{const v=f*Math.cos(h)+g*Math.sin(h),m=-f*Math.sin(h)+g*Math.cos(h);return new A(v,2,m)};if(l.type==="straight")e.push({pos:c.clone().add(d(0,-6)),power:!1}),e.push({pos:c.clone().add(d(0,0)),power:u}),e.push({pos:c.clone().add(d(0,6)),power:!1});else if(l.type==="corner"){const f=3.57*(1-Math.SQRT1_2);e.push({pos:c.clone().add(d(0,-6)),power:!1}),e.push({pos:c.clone().add(d(f,-f)),power:u}),e.push({pos:c.clone().add(d(6,0)),power:!1})}else l.type==="tjunction"?(e.push({pos:c.clone().add(d(0,0)),power:u}),e.push({pos:c.clone().add(d(0,-6)),power:!1}),e.push({pos:c.clone().add(d(-6,0)),power:!1}),e.push({pos:c.clone().add(d(6,0)),power:!1})):l.type==="crossroad"&&(e.push({pos:c.clone().add(d(0,0)),power:u}),e.push({pos:c.clone().add(d(0,-6)),power:!1}),e.push({pos:c.clone().add(d(0,6)),power:!1}),e.push({pos:c.clone().add(d(-6,0)),power:!1}),e.push({pos:c.clone().add(d(6,0)),power:!1}))}),this.pellets=[];const n=[];e.forEach(l=>{if(l.power){const c=Ir();c.position.copy(l.pos),c.position.y=2.5,c.scale.setScalar(.65),this.powerPelletGroup.add(c),this.pellets.push({position:c.position,type:Ci.POWER,active:!0,mesh:c})}else n.push(l.pos)}),n.forEach((l,c)=>{this.pellets.push({position:l,type:Ci.STANDARD,active:!0,meshIndex:c})});const s=16755200,r=new fi(.35,16,16),o=new mn({color:s,emissive:s,emissiveIntensity:1.5,roughness:.2,metalness:.8}),a=new Be({color:s,transparent:!0,opacity:.3,blending:gi,depthWrite:!1});this.coreMesh=new zc(r,o,n.length),this.glowMesh=new zc(r,a,n.length),this.coreMesh.frustumCulled=!1,this.glowMesh.frustumCulled=!1,n.forEach((l,c)=>{this.dummy.position.copy(l),this.dummy.scale.set(1,1,1),this.dummy.updateMatrix(),this.coreMesh.setMatrixAt(c,this.dummy.matrix),this.dummy.scale.set(1.4,1.4,1.4),this.dummy.updateMatrix(),this.glowMesh.setMatrixAt(c,this.dummy.matrix)}),this.coreMesh.instanceMatrix.needsUpdate=!0,this.glowMesh.instanceMatrix.needsUpdate=!0,this.scene.add(this.coreMesh),this.scene.add(this.glowMesh)}checkCollisions(t){const e=[];for(let s=0;s<this.pellets.length;s++){const r=this.pellets[s];if(!r.active)continue;t.distanceToSquared(r.position)<1.8*1.8&&(r.active=!1,e.push(r),r.type===Ci.POWER?r.mesh.visible=!1:(this.dummy.position.copy(r.position),this.dummy.scale.set(0,0,0),this.dummy.updateMatrix(),this.coreMesh.setMatrixAt(r.meshIndex,this.dummy.matrix),this.glowMesh.setMatrixAt(r.meshIndex,this.dummy.matrix),this.coreMesh.instanceMatrix.needsUpdate=!0,this.glowMesh.instanceMatrix.needsUpdate=!0))}return e}reset(){this.coreMesh&&(this.pellets.forEach(t=>{t.active=!0,t.type===Ci.POWER?t.mesh.visible=!0:(this.dummy.position.copy(t.position),this.dummy.scale.set(1,1,1),this.dummy.updateMatrix(),this.coreMesh.setMatrixAt(t.meshIndex,this.dummy.matrix),this.dummy.scale.set(1.4,1.4,1.4),this.dummy.updateMatrix(),this.glowMesh.setMatrixAt(t.meshIndex,this.dummy.matrix))}),this.coreMesh.instanceMatrix.needsUpdate=!0,this.glowMesh.instanceMatrix.needsUpdate=!0)}getEatenCount(){return this.pellets.filter(t=>!t.active).length}getTotalCount(){return this.pellets.length}update(t){this.coreMesh&&(this.pellets.forEach(e=>{e.active&&(e.type===Ci.POWER?e.mesh.userData.update&&e.mesh.userData.update(t):(this.dummy.position.copy(e.position),this.dummy.position.y+=Math.sin(t*4+e.position.x)*.005,this.dummy.scale.set(1,1,1),this.dummy.updateMatrix(),this.coreMesh.setMatrixAt(e.meshIndex,this.dummy.matrix),this.dummy.scale.set(1.4,1.4,1.4),this.dummy.updateMatrix(),this.glowMesh.setMatrixAt(e.meshIndex,this.dummy.matrix)))}),this.coreMesh.instanceMatrix.needsUpdate=!0,this.glowMesh.instanceMatrix.needsUpdate=!0)}}const ve=new tp;ve.background=new kt(66052);ve.fog=new Gl(66052,.009);const ne=new an(48,window.innerWidth/window.innerHeight,.1,500),Cx=48,Px=82,Hi={pos:[-52.15,34.87,81.2],target:[13.69,0,46.19]},Lo={pos:[0,65,120],target:[0,0,0]};ne.position.set(...Hi.pos);const ze=new Uv({antialias:!0,powerPreference:"high-performance"});ze.setPixelRatio(Math.min(window.devicePixelRatio,1.25));ze.setSize(window.innerWidth,window.innerHeight);ze.outputColorSpace=rn;ze.toneMapping=Vh;ze.toneMappingExposure=1.1;ze.autoClear=!1;ze.shadowMap.enabled=!1;const Os=document.querySelector("#app");Os.appendChild(ze.domElement);const Dx=new Be({colorWrite:!1,depthWrite:!0,depthTest:!0}),Lx=`
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
          <button class="btn" id="btn-reset-pellets" style="flex: 1; padding: 6px;">Reset Pellets</button>
          <button class="btn" id="btn-reset-run" style="flex: 1; padding: 6px;">Restart Run</button>
        </div>
        <button class="btn" id="btn-swap-puppet" style="margin-top: -5px; padding: 6px; background: rgba(255, 0, 68, 0.2); border-color: rgba(255, 0, 68, 0.3); color: #ff0044;">Control: Pacman</button>
        <button class="btn" id="btn-toggle-collisions" style="margin-top: -5px; padding: 6px;">Collisions: On</button>
        <button class="btn" id="btn-toggle-jumpscare" style="margin-top: -5px; padding: 6px;">Jumpscare: Off</button>
        <div class="hotkey-list">
          <div class="hotkey-item"><span>Move</span> <span class="hotkey-key">WASD / Arrows</span></div>
          <div class="hotkey-item"><span>Look Back</span> <span class="hotkey-key">Hold Space</span></div>
          <div class="hotkey-item"><span>Swap</span> <span class="hotkey-key">Tab</span></div>
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

`;Os.insertAdjacentHTML("beforeend",Lx);const qt=new Ov(ne,ze.domElement);qt.enableDamping=!0;qt.dampingFactor=.05;qt.target.set(0,0,0);qt.minDistance=10;qt.maxDistance=300;qt.maxPolarAngle=Math.PI/2.12;qt.screenSpacePanning=!1;const zo=new Gp(9022975,65795,1.4);ve.add(zo);const Bu=new qp(12836607,1.1);Bu.position.set(28,34,16);ve.add(Bu);const zu=new Wp(3898623,10,90,2.2);zu.position.set(6,9,3);ve.add(zu);const ku=new Tt(new $n(115,64),new mn({color:263948,emissive:66054,roughness:.96,metalness:.04}));ku.rotation.x=-Math.PI/2;const jl=new Tt(new $n(72,64),new Be({color:399434,transparent:!0,opacity:.14,side:Le}));jl.rotation.x=-Math.PI/2;jl.position.y=.03;const Ql=new Tt(new Cr(88,106,72),new Be({color:794455,transparent:!0,opacity:.1,side:Le}));Ql.rotation.x=-Math.PI/2;Ql.position.y=.02;const Me=px($v),te=new oe,Yn=new oe;let gn=null,Qt=null,Un=null,An=null,be=null,ys="pacman",Xn=null,Ge=null,wn=new Rx(Yn),un=!1,bn=!1,Fs=!1,Zn=!1,hi=!0,Gi=0,Ms=3,_i=!1,Ur=0,Kn=0,Bs=0,Nr=0,Qn=0,Hu=null;const Ii=new Map,St={forward:new A(1,0,0),reverseHoldForward:new A(1,0,0),target:new A,position:new A,isReversing:!1,reversalTimer:0,reverseSnapFramesRemaining:0},Ix=8.5,Da=4.5,La=2,Uh=.5,Ux=.75,Nx=3.5,Ox=2.1,Fx=1,Gu=3,Bx=10,zx=50,kx=6,Hx=.12,Gx=7,Vx=18,Wx=.25,Xx=1.5,qx=4,Yx=1.25,Nh=[200,400,800,1600];function Zx(i,t,e){const n=i.clone().setY(0).normalize(),s=t.clone().setY(0).normalize(),r=Fi.clamp(n.dot(s),-1,1),o=n.x*s.z-n.z*s.x,a=Math.atan2(-o,r),l=Fi.clamp(a,-e,e);return n.applyAxisAngle(new A(0,1,0),l).normalize()}function Oh(i,t,e=!1){if(e){const n=be.getRouteCameraPoint(i,!1);return n||be.getCameraTarget().addScaledVector(t,-i)}return be.getCameraTrailPoint(i,t)}function Kx(i){i.traverse(t=>{t.material&&(t.material.depthTest=!0)})}function Vu(){const i=document.querySelector("#btn-toggle-jumpscare");i&&(i.textContent=Zn?"Jumpscare: On":"Jumpscare: Off",i.style.background=Zn?"rgba(255, 34, 34, 0.2)":"rgba(12, 22, 45, 0.84)",i.style.borderColor=Zn?"rgba(255, 34, 34, 0.4)":"rgba(136, 178, 255, 0.2)",i.style.color=Zn?"#ff5555":"#ffffff")}function Wu(){const i=document.querySelector("#btn-toggle-collisions");i&&(i.textContent=hi?"Collisions: On":"Collisions: Off",i.style.background=hi?"rgba(255, 170, 0, 0.18)":"rgba(12, 22, 45, 0.84)",i.style.borderColor=hi?"rgba(255, 170, 0, 0.35)":"rgba(136, 178, 255, 0.2)",i.style.color=hi?"#ffaa00":"#ffffff")}function tc(){const i=document.querySelector("#lives-counter"),t=document.querySelector("#game-state-label");i&&(i.textContent=Ms),t&&(t.style.display=_i?"block":"none")}function ko(){const i=document.querySelector("#score-counter");i&&(i.textContent=Ur)}function Jx(i){return i===Ci.POWER?zx:Bx}function $x(i){i.length!==0&&(Ur+=i.reduce((t,e)=>t+Jx(e.type),0),ko())}function jx(){const i=Math.min(Nr,Nh.length-1);return Nh[i]}function Qx(){Ur+=jx(),Nr+=1,ko()}function Xu(){const i=Hu?.tiles?.size??0;return Fi.clamp(kx+i*Hx,Gx,Vx)}function ty(i=Bs||Xu()){return Fi.clamp(i*Wx,Xx,qx)}function ec(i=Qt){return i?(Ii.has(i)||Ii.set(i,{eatenDuringCurrentPower:!1}),Ii.get(i)):null}function qu(i,t){i?.setVulnerable&&i.setVulnerable(t)}function Yu(i=Qt){const t=ec(i);return!!(Zu()&&t&&!t.eatenDuringCurrentPower)}function ey(){return Zu()?Kn<=ty()?"flashing":!0:!1}function Ho(){Qt&&qu(Qt,Yu(Qt)?ey():!1)}function ny(){Bs=Xu(),Kn=Bs,Nr=0,Ii.forEach(i=>{i.eatenDuringCurrentPower=!1}),Ho()}function nc(){Kn=0,Bs=0,Nr=0,Ii.forEach(i=>{i.eatenDuringCurrentPower=!1}),Ho()}function Ia(i){Kn<=0||(Kn=Math.max(0,Kn-i),Kn===0&&(Bs=0,Nr=0,Ii.forEach(t=>{t.eatenDuringCurrentPower=!1})),Ho())}function iy(i){return i.some(t=>t.type===Ci.POWER)}function Zu(){return Kn>0}function Tr(){return Qn>0}function sy(){!An||!Ge||(An.reset(Ge.tile,Ge.direction,Ge.connector),Qt.visible=!0,Ho())}function ry(){if(!Qt||Tr())return;const i=ec(Qt);i&&(i.eatenDuringCurrentPower=!0),Qx(),qu(Qt,!1),Qn=Yx,Qt.visible=!1}function Ua(i){Tr()&&(Qn=Math.max(0,Qn-i),Tr()||sy())}function oy(i){return Array.isArray(i)?i:[i]}function ay(i){return!i.isMesh||!i.visible||!i.material?!1:oy(i.material).every(t=>t&&t.visible!==!1&&t.transparent!==!0&&t.opacity!==0&&t.depthWrite!==!1)}function ly(){const i=[],t=ve.background,e=ve.overrideMaterial;ve.traverse(n=>{n.isMesh&&(ay(n)||(i.push([n,n.visible]),n.visible=!1))}),ve.background=null,ve.overrideMaterial=Dx;try{ze.render(ve,ne)}finally{ve.overrideMaterial=e,ve.background=t,i.forEach(([n,s])=>{n.visible=s})}}function cy(){if(ze.clear(),!un||Zn||!Qt||!Qt.visible){ze.render(ve,ne);return}Qt.visible=!1,ze.render(ve,ne),Qt.visible=!0,ze.clearDepth(),ly(),ze.render(Qt,ne)}Me.add(ku);Me.add(jl);Me.add(Ql);const ic=new Tt(new jn(ge*20,ge*20),new Be({visible:!1}));ic.rotation.x=-Math.PI/2;ve.add(ic);ve.add(Me);ve.add(te);ve.add(Yn);Yn.visible=!1;function hy(){Yn.clear();let i=[];te.children.length>0?i=te.children.map(a=>({type:a.userData.type,position:[a.position.x,a.position.y,a.position.z],rotation:a.userData.rotation,hasPowerPellet:a.userData.hasPowerPellet||!1,hasPacmanSpawn:a.userData.hasPacmanSpawn||!1,pacmanSpawnRotation:a.userData.pacmanSpawnRotation||0})):i=gx,i.forEach(a=>{const l=Dr(a.type);l.position.set(...a.position),l.rotation.y=a.rotation,l.userData={type:a.type,rotation:a.rotation,hasPowerPellet:a.hasPowerPellet||!1,hasPacmanSpawn:a.hasPacmanSpawn||!1,pacmanSpawnRotation:a.pacmanSpawnRotation||0},Yn.add(l)});const t=i.map(a=>({type:a.type,position:a.position,rotation:a.rotation,hasPowerPellet:a.hasPowerPellet||!1,hasPacmanSpawn:a.hasPacmanSpawn||!1,pacmanSpawnRotation:a.pacmanSpawnRotation||0})),e=xx(t);Hu=e,gn=Lr(),gn.scale.setScalar(.32),Yn.add(gn),Un=new Ih(gn,e),Qt=ks(16711748),Qt.scale.setScalar(.32),Kx(Qt),Yn.add(Qt),An=new Ih(Qt,e,{speed:12.5}),Ii.clear(),ec(Qt),Qn=0,nc(),be=Un,ys="pacman";const n=document.querySelector("#btn-swap-puppet");n&&(n.textContent="Control: Pacman");let s=null,r=null,o=null;Xn=null,Ge=null;for(const a of e.tiles.values()){if(a.hasPacmanSpawn){s=a;const l=(a.pacmanSpawnRotation%(Math.PI*2)+Math.PI*2)%(Math.PI*2);Math.abs(l-0)<.1?r="south":Math.abs(l-Math.PI/2)<.1?r="east":Math.abs(l-Math.PI)<.1?r="north":Math.abs(l-Math.PI*1.5)<.1&&(r="west")}a.type==="ghostchamber"&&(o=a)}if(!s){const a=["straight","corner","tjunction","crossroad","teleport"];s=Array.from(e.tiles.values()).find(l=>a.includes(l.type)),s||(s=Array.from(e.tiles.values())[0])}if(s&&(Xn={tile:s,direction:r,connector:null},Un.reset(Xn.tile,Xn.direction,Xn.connector)),o){const a=on(["north"],o.rotation)[0];Ge={tile:o,direction:a,connector:"center_back"}}else s?Ge={tile:s,direction:r,connector:null}:Ge=null;Ge&&An.reset(Ge.tile,Ge.direction,Ge.connector),wn.buildFromMap(e)}function Ku(i=!0){!Un||!An||!Xn||!Ge||(Un.reset(Xn.tile,Xn.direction,Xn.connector),An.reset(Ge.tile,Ge.direction,Ge.connector),Qn=0,Qt&&(Qt.visible=!0),bn=!1,Fs=!1,St.isReversing=!1,St.reversalTimer=0,St.reverseSnapFramesRemaining=0,be=ys==="ghost"?An:Un,i&&be&&(St.forward.copy(be.getFollowDirection()).normalize(),St.reverseHoldForward.copy(St.forward),St.target.copy(be.getCameraTarget()),As(1,!0)))}function uy(){if(!gn||!Qt)return!1;const i=Nx*gn.scale.x,t=Ox*Qt.scale.x,e=i+t;return gn.position.distanceToSquared(Qt.position)<=e*e}function Io(){return Gi>0}function dy(){Io()||(Gi=Fx,bn=!1,Fs=!1,St.isReversing=!1,St.reversalTimer=0,St.reverseSnapFramesRemaining=0)}function fy(){Ms=Math.max(0,Ms-1),_i=Ms===0,tc(),_i||Ku(!0)}function py(){Ms=Gu,_i=!1,Ur=0,Gi=0,Qn=0,nc(),wn.reset(),document.querySelector("#pellet-counter").textContent=wn.getEatenCount(),tc(),ko(),Ku(!0)}const Go=0,Zi=96,Ju=vn();Ju.position.set(Go,3.5,Zi);Me.add(Ju);const Ss=Lr();Ss.position.set(Go,7.5,Zi);Ss.rotation.y=Math.PI/1.4+Math.PI/2+Math.PI/12;Me.add(Ss);const $u=Go,Ki=Zi+24,ju=vn();ju.position.set($u,3.5,Ki);Me.add(ju);const dr=Ir();dr.position.set($u,7.5,Ki);Me.add(dr);const Qu=12,td=144,ed=vn();ed.position.set(Qu,3.5,td);Me.add(ed);const fr=mx();fr.position.set(Qu,5.5,td);Me.add(fr);const Hs=Go+24,Vo=Hs+24,nd=vn();nd.position.set(Hs,3.5,Zi);Me.add(nd);const Es=ks(16711748);Es.position.set(Hs,4.8,Zi);Es.rotation.y=-Math.PI/4;Me.add(Es);const id=vn();id.position.set(Vo,3.5,Zi);Me.add(id);const ws=ks(16729275);ws.position.set(Vo,4.8,Zi);ws.rotation.y=-Math.PI/4;Me.add(ws);const sd=vn();sd.position.set(Hs,3.5,Ki);Me.add(sd);const Ts=ks(52479);Ts.position.set(Hs,4.8,Ki);Ts.rotation.y=-Math.PI/4;Me.add(Ts);const rd=vn();rd.position.set(Vo,3.5,Ki);Me.add(rd);const bs=ks(16755200);bs.position.set(Vo,4.8,Ki);bs.rotation.y=-Math.PI/4;Me.add(bs);const od=Hs+12,ad=Ki+24,ld=vn();ld.position.set(od,3.5,ad);Me.add(ld);const Ui=ks(16777215);Ui.position.set(od,4.8,ad);Ui.rotation.y=-Math.PI/4;Ui.setVulnerable("flashing");Me.add(Ui);qt.target.set(...Hi.target);ne.position.set(...Hi.pos);window.getCameraConfig=()=>{const i=ne.position,t=qt.target;console.log("%c --- View Captured ---","color: #2462ff; font-weight: bold;"),console.log(`Position: [${i.x.toFixed(2)}, ${i.y.toFixed(2)}, ${i.z.toFixed(2)}]`),console.log(`Target: [${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)}]`),console.log("----------------------")};let Pe=!1,br=!1,Ni=!1,wo=null,we="straight",$e=0,ee=null;const Fh=new Kp,Cl=new it,Or=new Jp(ge*20,20,2384639,1385797);Or.position.y=.06;Or.visible=!1;ve.add(Or);function cd(){un&&pr(),Pe=!Pe;const i=document.querySelector("#mode-status"),t=document.querySelector("#btn-toggle-mode"),e=document.querySelector("#btn-toggle-game"),n=document.querySelector("#editor-ui"),s=document.querySelector("#editor-only-controls");Pe?Os.classList.add("editor-active"):Os.classList.remove("editor-active"),i.textContent=Pe?"Editor":"Showcase",t.textContent=Pe?"Close Editor":"Open Editor",n.classList.toggle("active",Pe),s.style.display=Pe?"flex":"none",e.style.display=Pe?"none":"block",Or.visible=Pe,Me.visible=!Pe,te.visible=Pe,ve.fog.density=Pe?0:.009,zo.intensity=Pe?2.8:1.4,Pe?(fd(),qt.maxPolarAngle=Math.PI/2,qt.minDistance=5,ne.position.set(...Lo.pos),qt.target.set(...Lo.target)):(Wo(),br&&sc(),qt.maxPolarAngle=Math.PI/2.12,qt.minDistance=18,ne.position.set(...Hi.pos),qt.target.set(...Hi.target))}function my(){Pe&&cd(),un=!0,bn=!1,Fs=!1,Zn=!1,hi=!0,Gi=0,Kn=0,Bs=0,Qn=0,Ms=Gu,_i=!1,Ur=0,Os.classList.add("game-active");const i=document.querySelector("#mode-status"),t=document.querySelector("#btn-toggle-game"),e=document.querySelector("#btn-toggle-mode"),n=document.querySelector("#game-only-controls");i.textContent="Game",t.textContent="End Game",e.style.display="none",n.style.display="flex",Vu(),Wu(),tc(),ko(),Me.visible=!1,te.visible=!1,Yn.visible=!0,Or.visible=!1,Wo(),ve.fog.density=.004,zo.intensity=2.2,ne.fov=Px,ne.updateProjectionMatrix(),qt.enabled=!1,qt.enableRotate=!1,hy(),St.forward.copy(be.getFollowDirection()),St.reverseHoldForward.copy(St.forward),St.target.copy(be.getCameraTarget()),St.position.copy(ne.position),St.isReversing=!1,St.reversalTimer=0,St.reverseSnapFramesRemaining=0,As(1,!0)}function pr(){un=!1,bn=!1,Fs=!1,Zn=!1,Gi=0,Qn=0,nc(),_i=!1,Os.classList.remove("game-active");const i=document.querySelector("#mode-status"),t=document.querySelector("#btn-toggle-game"),e=document.querySelector("#btn-toggle-mode"),n=document.querySelector("#game-only-controls");i.textContent="Showcase",t.textContent="Start Game",e.style.display="",n.style.display="none",Me.visible=!0,te.visible=!1,Yn.visible=!1,ve.fog.density=.009,zo.intensity=1.4,ne.fov=Cx,ne.updateProjectionMatrix(),qt.enabled=!0,qt.enableRotate=!0,qt.maxPolarAngle=Math.PI/2.12,qt.minDistance=18,ne.position.set(...Hi.pos),qt.target.set(...Hi.target)}function gy(){un?pr():my()}function _y(i){return i==="arrowup"||i==="w"?"forward":i==="arrowright"||i==="d"?"right":i==="arrowdown"||i==="s"?"reverse":i==="arrowleft"||i==="a"?"left":null}function hd(){bn||St.isReversing||(St.isReversing=!0,St.reverseHoldForward.copy(St.forward),St.reversalTimer=.35)}function As(i,t=!1){if(!be)return;const e=be.getCameraTarget(),n=be.getFollowDirection().multiplyScalar(bn?-1:1),s=bn!==Fs;let r=!1,o=t||s;if(o)St.isReversing=!1,St.reversalTimer=0,St.forward.copy(n).normalize();else{const d=Fi.clamp(St.forward.dot(n),-1,1);if(St.isReversing&&d>.45&&(St.isReversing=!1,St.reversalTimer=0,o=!0,St.forward.copy(n).normalize()),St.isReversing)St.reversalTimer-=i,St.reversalTimer<=0||!be.isMoving?(St.isReversing=!1,St.forward.copy(n).normalize(),o=!0):r=!0;else{const f=Ix*i,g=Zx(St.forward,n,f),v=1-Math.exp(-7.5*i);St.forward.copy(g.lerp(n,v*.2).normalize())}}Fs=bn;const a=bn||r,l=r?e.clone().addScaledVector(St.reverseHoldForward,-Da).add(new A(0,La,0)):a?Oh(Da,St.forward,!0).add(new A(0,La,0)):Oh(Da,St.forward,!1).add(new A(0,La,0)),c=e.clone().add(new A(0,Uh,0)),h=c.clone().sub(l).setY(0);h.lengthSq()>1e-4?h.normalize():h.copy(St.forward);const u=a?e.clone().add(new A(0,Uh,0)):c.clone().addScaledVector(h,Ux);if(o)St.position.copy(l),St.target.copy(u);else if(r)St.position.copy(l),St.target.copy(u);else if(a){const d=1-Math.exp(-7*i),f=1-Math.exp(-8.5*i);St.position.lerp(l,d),St.target.lerp(u,f)}else St.position.copy(l),St.target.copy(u);ne.position.copy(St.position),qt.target.copy(St.target),ne.lookAt(qt.target),St.reverseSnapFramesRemaining>0&&(St.reverseSnapFramesRemaining-=1)}function sc(i){br=i==="2d";const t=document.querySelector("#view-slider");document.querySelectorAll(".toggle-option").forEach(n=>{n.classList.toggle("active",n.dataset.view===i)}),br?(t.classList.add("right"),ne.position.set(0,160,0),qt.target.set(0,0,0),qt.enableRotate=!1):(t.classList.remove("right"),ne.position.set(...Lo.pos),qt.target.set(...Lo.target),qt.enableRotate=!0)}const vy=document.querySelector("#command-deck"),ud=document.querySelector("#zoom-slider");document.querySelector("#deck-header").addEventListener("click",()=>{vy.classList.toggle("collapsed")});ud.addEventListener("input",i=>{const t=parseFloat(i.target.value),e=ne.position.clone().sub(qt.target).normalize();ne.position.copy(qt.target).add(e.multiplyScalar(t))});document.querySelector("#btn-toggle-mode").addEventListener("click",cd);document.querySelector("#btn-toggle-game").addEventListener("click",gy);document.querySelector("#btn-reset-pellets").addEventListener("click",()=>{wn&&(wn.reset(),document.querySelector("#pellet-counter").textContent=wn.getEatenCount())});document.querySelector("#btn-reset-run").addEventListener("click",()=>{un&&py()});document.querySelector("#btn-swap-puppet").addEventListener("click",i=>{i.target.blur(),un&&(ys==="pacman"?(ys="ghost",be=An,i.target.textContent="Control: Ghost",i.target.style.background="rgba(255, 68, 187, 0.2)",i.target.style.borderColor="rgba(255, 68, 187, 0.3)",i.target.style.color="#ff44bb"):(ys="pacman",be=Un,i.target.textContent="Control: Pacman",i.target.style.background="rgba(255, 204, 0, 0.2)",i.target.style.borderColor="rgba(255, 204, 0, 0.3)",i.target.style.color="#ffcc00"),St.forward.copy(be.getFollowDirection()),St.reverseHoldForward.copy(St.forward),St.target.copy(be.getCameraTarget()),St.isReversing=!1,St.reversalTimer=0,St.reverseSnapFramesRemaining=0,As(.016,!0))});document.querySelector("#btn-toggle-jumpscare").addEventListener("click",i=>{i.target.blur(),un&&(Zn=!Zn,Vu())});document.querySelector("#btn-toggle-collisions").addEventListener("click",i=>{i.target.blur(),un&&(hi=!hi,Wu())});document.querySelectorAll(".toggle-option").forEach(i=>{i.addEventListener("click",()=>sc(i.dataset.view))});function Pl(i){const t=document.querySelectorAll(".piece-card, .item-card"),e=document.querySelector(".piece-card.active, .item-card.active");if(e&&e.classList.remove("active"),i===null){we=null,Wo();return}const n=Array.from(t).find(s=>s.dataset.type===i);n&&n.classList.add("active"),we=i,fd()}document.querySelectorAll(".piece-card, .item-card").forEach(i=>{i.addEventListener("click",()=>{Pl(i.dataset.type)})});function Uo(i,t){return i.map(e=>{let n;e==="north"?n={x:0,z:-1}:e==="south"?n={x:0,z:1}:e==="east"?n={x:1,z:0}:e==="west"&&(n={x:-1,z:0});const s=n.x*Math.cos(t)+n.z*Math.sin(t),r=-n.x*Math.sin(t)+n.z*Math.cos(t);return{x:Math.round(s),z:Math.round(r)}})}function dd(i,t,e){if(!t)return!0;if(te.children.find(o=>o.position.x===t.x&&o.position.z===t.z))return!1;const s=te.children.filter(o=>o.userData.type==="ghostchamber");if(i==="ghostchamber"&&s.length>0)return!1;if(i==="ghostchamber"){for(const o of te.children)if(!Bh({position:t,rotation:e},o))return!1}else for(const o of s)if(!Bh(o,{position:t,rotation:e,type:i}))return!1;const r=te.children.filter(o=>o.userData.type==="teleport");for(const o of r)if(!zh(o,{position:t,rotation:e,type:i}))return!1;if(i==="teleport"){for(const o of te.children)if(!zh({position:t,rotation:e},o))return!1}return!0}function Bh(i,t){const e=Math.sqrt(Math.pow(i.position.x-t.position.x,2)+Math.pow(i.position.z-t.position.z,2));if(Math.abs(e-ge)>1)return!0;const n=Math.round((t.position.x-i.position.x)/ge),s=Math.round((t.position.z-i.position.z)/ge),r=Uo(["north"],i.userData?i.userData.rotation:i.rotation)[0];if(n===r.x&&s===r.z)return!0;const o=t.userData?t.userData.type:t.type,a=t.userData?t.userData.rotation:t.rotation,l=Uo(Pr[o],a);for(const c of l)if(c.x===-n&&c.z===-s)return!1;return!0}function zh(i,t){const e=Math.sqrt(Math.pow(i.position.x-t.position.x,2)+Math.pow(i.position.z-t.position.z,2));if(Math.abs(e-ge)>1)return!0;const n=Math.round((t.position.x-i.position.x)/ge),s=Math.round((t.position.z-i.position.z)/ge),r=Uo(["west"],i.userData?i.userData.rotation:i.rotation)[0];if(n===r.x&&s===r.z){const o=t.userData?t.userData.type:t.type,a=t.userData?t.userData.rotation:t.rotation,l=Uo(Pr[o],a);for(const c of l)if(c.x===-n&&c.z===-s)return!1}return!0}function fd(){Wo(),we!==null&&(we==="powerpellet"||we==="pacmanspawn"?(we==="powerpellet"?(ee=Ir(),ee.scale.set(.4,.4,.4)):(ee=Lr(),ee.scale.setScalar(.32)),ee.traverse(i=>{i.isLight&&(i.intensity=0),i.material&&(i.material=i.material.clone(),we==="powerpellet"?(i.material.transparent=!0,i.material.opacity=.8,i.material.depthTest=!1,i.renderOrder=999):i.material.wireframe=!0,i.material.color&&(i.userData.originalColor=i.material.color.clone()),i.material.emissive&&(i.userData.originalEmissive=i.material.emissive.clone()),i.material.emissiveIntensity!==void 0&&(i.userData.originalEmissiveIntensity=i.material.emissiveIntensity))})):(ee=Dr(we),ee.rotation.y=$e,ee.traverse(i=>{i.material&&(i.material=i.material.clone(),i.material.transparent=!0,i.material.opacity=.4,i.material.color&&(i.userData.originalColor=i.material.color.clone()),i.material.emissive&&(i.userData.originalEmissive=i.material.emissive.clone()))})),ve.add(ee))}function Wo(){ee&&(ve.remove(ee),ee=null)}window.addEventListener("click",i=>{const t=i.target.closest("button");t&&t.blur(),i.target.tagName==="INPUT"&&i.target.blur()});window.addEventListener("mousemove",i=>{Pe&&(Cl.x=i.clientX/window.innerWidth*2-1,Cl.y=-(i.clientY/window.innerHeight)*2+1)});window.addEventListener("keydown",i=>{if(document.querySelector("#export-modal").classList.contains("active")||document.querySelector("#import-modal").classList.contains("active"))return;const t=i.key.toLowerCase();if(t==="c"&&window.getCameraConfig(),un){if(_i){t==="escape"&&pr();return}if(Io()){t==="escape"&&pr();return}if(t===" "){i.preventDefault(),bn=!0;return}const s=_y(t);if(s){if(i.preventDefault(),s==="reverse"&&i.repeat)return;const r=be.setDesiredIntent(s);r?.started&&r.reverseIntent&&hd()}if(t==="tab"){i.preventDefault(),document.querySelector("#btn-swap-puppet")?.click();return}t==="escape"&&pr();return}if(!Pe)return;if(t==="tab"&&(i.preventDefault(),sc(br?"3d":"2d")),Ni){const s=ge;if((t==="arrowup"||t==="w")&&(te.position.z-=s),(t==="arrowdown"||t==="s")&&(te.position.z+=s),(t==="arrowleft"||t==="a")&&(te.position.x-=s),(t==="arrowright"||t==="d")&&(te.position.x+=s),t==="enter"){const r=te.position.clone();te.children.forEach(o=>{o.position.add(r)}),te.position.set(0,0,0),No()}t==="escape"&&(te.position.set(0,0,0),No());return}const e={1:"straight",2:"corner",3:"tjunction",4:"crossroad",5:"teleport",6:"ghostchamber",p:"powerpellet",s:"pacmanspawn"};e[t]&&Pl(e[t]),t==="v"&&Pl(null),t===" "&&(i.preventDefault(),pd()),t==="r"&&($e+=Math.PI/2,ee&&(ee.rotation.y=$e)),t==="x"&&xy();const n=br?5.5:2.8;(t==="arrowup"||t==="w")&&(qt.target.z-=n,ne.position.z-=n),(t==="arrowdown"||t==="s")&&(qt.target.z+=n,ne.position.z+=n),(t==="arrowleft"||t==="a")&&(qt.target.x-=n,ne.position.x-=n),(t==="arrowright"||t==="d")&&(qt.target.x+=n,ne.position.x+=n)});window.addEventListener("keyup",i=>{un&&i.key===" "&&(bn=!1)});window.addEventListener("mousedown",i=>{!Pe||Ni||i.button!==0||document.querySelector("#export-modal").classList.contains("active")||document.querySelector("#import-modal").classList.contains("active")||i.target.closest(".bottom-bar")||i.target.closest(".left-bar")||i.target.closest(".top-controls")||i.target.closest("#command-deck")||i.target.closest("#export-modal")||i.target.closest("#import-modal")||pd()});function rc(){Fh.setFromCamera(Cl,ne);const i=Fh.intersectObject(ic);if(i.length>0){const t=i[0].point;return{x:Math.round(t.x/ge)*ge,z:Math.round(t.z/ge)*ge}}return null}function pd(){if(we===null)return;const i=rc();if(!i)return;const t=te.children.find(n=>n.position.x===i.x&&n.position.z===i.z);if(we==="powerpellet"||we==="pacmanspawn"){const n=["straight","corner","tjunction","crossroad"];if(we==="pacmanspawn"&&n.push("teleport"),t&&n.includes(t.userData.type))if(we==="powerpellet"){if(!t.userData.hasPowerPellet&&t.userData.hasPacmanSpawn){t.userData.hasPacmanSpawn=!1;const r=t.getObjectByName("pacmanSpawnIndicator");r&&t.remove(r)}t.userData.hasPowerPellet=!t.userData.hasPowerPellet;let s=t.getObjectByName("powerPelletIndicator");if(t.userData.hasPowerPellet){if(!s){s=Ir(),s.name="powerPelletIndicator";let r=0,o=0;if(t.userData.type==="corner"){const a=3.57*(1-Math.SQRT1_2);r=a,o=-a}s.position.set(r,2.5,o),s.scale.set(.4,.4,.4),s.traverse(a=>{a.material&&(a.material=a.material.clone(),a.material.depthTest=!1,a.renderOrder=998)}),t.add(s)}}else s&&t.remove(s)}else{if(!t.userData.hasPacmanSpawn&&t.userData.hasPowerPellet){t.userData.hasPowerPellet=!1;const s=t.getObjectByName("powerPelletIndicator");s&&t.remove(s)}if(t.userData.hasPacmanSpawn){const s=a=>(a%(Math.PI*2)+Math.PI*2)%(Math.PI*2),r=s($e),o=s(t.userData.pacmanSpawnRotation);if(Math.abs(r-o)<.01){t.userData.hasPacmanSpawn=!1;const a=t.getObjectByName("pacmanSpawnIndicator");a&&t.remove(a)}else{t.userData.pacmanSpawnRotation=$e;const a=t.getObjectByName("pacmanSpawnIndicator");a&&(a.rotation.y=$e-t.rotation.y)}}else{te.children.forEach(a=>{if(a.userData.hasPacmanSpawn){a.userData.hasPacmanSpawn=!1;const l=a.getObjectByName("pacmanSpawnIndicator");l&&a.remove(l)}}),t.userData.hasPacmanSpawn=!0,t.userData.pacmanSpawnRotation=$e;const s=Lr();s.name="pacmanSpawnIndicator";let r=0,o=0;if(t.userData.type==="corner"){const a=3.57*(1-Math.SQRT1_2);r=a,o=-a}s.position.set(r,2.5,o),s.scale.setScalar(.32),s.rotation.y=$e-t.rotation.y,t.add(s)}}return}if(t||!dd(we,i,$e))return;const e=Dr(we);e.position.set(i.x,0,i.z),e.rotation.y=$e,e.userData={type:we,rotation:$e},te.add(e)}function xy(){const i=rc();if(!i)return;const t=te.children.find(e=>e.position.x===i.x&&e.position.z===i.z);t&&te.remove(t)}document.querySelector("#btn-export").addEventListener("click",i=>{i.target.blur(),document.querySelector("#export-modal").classList.add("active")});document.querySelector("#btn-modal-close").addEventListener("click",()=>{document.querySelector("#export-modal").classList.remove("active")});document.querySelector("#export-modal").addEventListener("click",i=>{i.target===document.querySelector("#export-modal")&&document.querySelector("#export-modal").classList.remove("active")});document.querySelector("#btn-modal-copy").addEventListener("click",()=>{const i=te.children.map(e=>({type:e.userData.type,position:[e.position.x,e.position.y,e.position.z],rotation:e.userData.rotation,hasPowerPellet:e.userData.hasPowerPellet||!1,hasPacmanSpawn:e.userData.hasPacmanSpawn||!1,pacmanSpawnRotation:e.userData.pacmanSpawnRotation||0})),t=JSON.stringify(i,null,2);navigator.clipboard.writeText(t).then(()=>{const e=document.querySelector("#btn-modal-copy"),n=e.textContent;e.textContent="Copied!",setTimeout(()=>{e.textContent=n},2e3)}).catch(e=>{alert("Failed to copy to clipboard. Check console."),console.error("Could not copy text: ",e)})});document.querySelector("#btn-modal-download").addEventListener("click",()=>{const i=te.children.map(r=>({type:r.userData.type,position:[r.position.x,r.position.y,r.position.z],rotation:r.userData.rotation,hasPowerPellet:r.userData.hasPowerPellet||!1,hasPacmanSpawn:r.userData.hasPacmanSpawn||!1,pacmanSpawnRotation:r.userData.pacmanSpawnRotation||0})),t=JSON.stringify(i,null,2),e=new Blob([t],{type:"application/json"}),n=URL.createObjectURL(e),s=document.createElement("a");s.href=n,s.download="maze.json",document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(n)});document.querySelector("#btn-import").addEventListener("click",i=>{i.target.blur(),document.querySelector("#import-textarea").value="",document.querySelector("#import-file").value="",document.querySelector("#import-file-zone").classList.remove("has-file"),document.querySelector("#import-file-name").textContent="Import From File",document.querySelector("#import-modal").classList.add("active")});document.querySelector("#btn-modal-import-close").addEventListener("click",()=>{document.querySelector("#import-modal").classList.remove("active")});document.querySelector("#import-modal").addEventListener("click",i=>{i.target===document.querySelector("#import-modal")&&document.querySelector("#import-modal").classList.remove("active")});document.querySelector("#import-file").addEventListener("change",i=>{const t=i.target.files[0],e=document.querySelector("#import-file-zone"),n=document.querySelector("#import-file-name");if(!t){e.classList.remove("has-file"),n.textContent="Import From File";return}e.classList.add("has-file"),n.textContent=t.name;const s=new FileReader;s.onload=r=>{document.querySelector("#import-textarea").value=r.target.result},s.readAsText(t)});document.querySelector("#btn-modal-import").addEventListener("click",()=>{const i=document.querySelector("#import-textarea").value.trim();if(!i){alert("Please paste JSON or select a file first.");return}try{const t=JSON.parse(i);if(!Array.isArray(t))throw new Error("Imported data must be an array of pieces.");const e=["straight","corner","tjunction","crossroad","teleport","ghostchamber"];let n=0,s=0;for(let a=0;a<t.length;a++){const l=t[a];if(!l.type||!e.includes(l.type))throw new Error(`Invalid or missing piece type at index ${a}: ${l.type}`);if(!Array.isArray(l.position)||l.position.length!==3)throw new Error(`Invalid position array at index ${a}. Must have 3 coordinates.`);const c=Math.round(l.position[0]/ge)*ge,h=Math.round(l.position[2]/ge)*ge;if(Math.abs(l.position[0]-c)>.1||Math.abs(l.position[1])>.1||Math.abs(l.position[2]-h)>.1)throw new Error(`Invalid position at index ${a}. Must be aligned to the grid (multiples of ${ge}) at Y=0.`);if(typeof l.rotation!="number")throw new Error(`Invalid rotation at index ${a}. Must be a number.`);const u=d=>{const g=(d%(Math.PI*2)+Math.PI*2)%(Math.PI*2)%(Math.PI/2);return g<.01||Math.abs(g-Math.PI/2)<.01};if(!u(l.rotation))throw new Error(`Invalid rotation at index ${a}. Must be a multiple of 90 degrees (PI/2).`);if(l.hasPacmanSpawn){if(n++,n>1)throw new Error("Multiple Pacman spawns detected. Only one is allowed.");if(typeof l.pacmanSpawnRotation=="number"&&!u(l.pacmanSpawnRotation))throw new Error(`Invalid Pacman spawn rotation at index ${a}. Must be a multiple of 90 degrees.`);if(l.hasPowerPellet)throw new Error(`Conflict at index ${a}: A tile cannot have both a Pacman spawn and a Power Pellet.`)}if(l.type==="ghostchamber"&&(s++,s>1))throw new Error("Multiple Ghost Chambers detected. Only one is allowed.")}for(;te.children.length>0;)te.remove(te.children[0]);t.forEach(a=>{const l=Dr(a.type);if(l.position.set(a.position[0],a.position[1],a.position[2]),l.rotation.y=a.rotation,l.userData={type:a.type,rotation:a.rotation,hasPowerPellet:a.hasPowerPellet||!1,hasPacmanSpawn:a.hasPacmanSpawn||!1,pacmanSpawnRotation:a.pacmanSpawnRotation||0},l.userData.hasPowerPellet){const c=Ir();c.name="powerPelletIndicator";let h=0,u=0;if(l.userData.type==="corner"){const d=3.57*(1-Math.SQRT1_2);h=d,u=-d}c.position.set(h,2.5,u),c.scale.set(.4,.4,.4),c.traverse(d=>{d.material&&(d.material=d.material.clone(),d.material.depthTest=!1,d.renderOrder=998)}),l.add(c)}if(l.userData.hasPacmanSpawn){const c=Lr();c.name="pacmanSpawnIndicator";let h=0,u=0;if(l.userData.type==="corner"){const d=3.57*(1-Math.SQRT1_2);h=d,u=-d}c.position.set(h,2.5,u),c.scale.setScalar(.32),c.rotation.y=l.userData.pacmanSpawnRotation-l.rotation.y,l.add(c)}te.add(l)}),document.querySelector("#import-modal").classList.remove("active");const r=document.querySelector("#btn-modal-import"),o=r.textContent;r.textContent="Success!",r.style.background="#00ff88",r.style.color="#000",setTimeout(()=>{r.textContent=o,r.style.background="",r.style.color=""},1500)}catch(t){alert(`Import failed: ${t.message}`),console.error("Import validation error:",t)}});document.querySelector("#btn-shift-map").addEventListener("click",()=>{if(!Pe)return;Ni=!Ni;const i=document.querySelector("#btn-shift-map"),t=document.querySelector("#btn-apply-shift");i.blur();const e=document.querySelector(".bottom-bar"),n=document.querySelector("#hotkey-list"),s=document.querySelector(".segmented-toggle"),r=document.querySelector("#zoom-slider").parentElement,o=document.querySelector("#btn-export").parentElement;Ni?(i.textContent="Cancel",i.style.background="rgba(255, 68, 68, 0.2)",i.style.color="#ff4444",i.style.borderColor="rgba(255, 68, 68, 0.3)",t&&(t.style.display="block"),e&&(e.style.display="none"),s&&(s.style.display="none"),r&&(r.style.display="none"),o&&(o.style.display="none"),n&&(n.innerHTML=`
        <div class="hotkey-item"><span>Move</span> <span class="hotkey-key">Arrows / WASD</span></div>
        <div class="hotkey-item"><span>Apply</span> <span class="hotkey-key" style="background: rgba(0, 255, 136, 0.2); color: #00ff88;">Enter</span></div>
        <div class="hotkey-item"><span>Cancel</span> <span class="hotkey-key" style="background: rgba(255, 68, 68, 0.2); color: #ff4444;">Esc</span></div>
      `),wo={pos:ne.position.clone(),target:qt.target.clone()},qt.target.set(0,0,0),ne.position.set(0,300,0),qt.update(),ee&&(ee.visible=!1)):(te.position.set(0,0,0),No())});document.querySelector("#btn-apply-shift").addEventListener("click",()=>{if(!Ni)return;const i=te.position.clone();te.children.forEach(t=>{t.position.add(i)}),te.position.set(0,0,0),No()});function No(){Ni=!1;const i=document.querySelector("#btn-shift-map");i.textContent="Shift Map",i.classList.remove("btn-primary"),i.style.background="",i.style.color="",i.style.borderColor="";const t=document.querySelector("#btn-apply-shift");t&&(t.style.display="none");const e=document.querySelector(".bottom-bar"),n=document.querySelector("#hotkey-list"),s=document.querySelector(".segmented-toggle"),r=document.querySelector("#zoom-slider").parentElement,o=document.querySelector("#btn-export").parentElement;e&&(e.style.display="flex"),s&&(s.style.display="flex"),r&&(r.style.display="flex"),o&&(o.style.display="flex"),n&&(n.innerHTML=`
      <div class="hotkey-item"><span>Free Mode</span> <span class="hotkey-key">V</span></div>
      <div class="hotkey-item"><span>Place</span> <span class="hotkey-key">Click / Space</span></div>
      <div class="hotkey-item"><span>Rotate</span> <span class="hotkey-key">R</span></div>
      <div class="hotkey-item"><span>Delete</span> <span class="hotkey-key">X</span></div>
      <div class="hotkey-item"><span>Pan</span> <span class="hotkey-key">WASD / Arrows</span></div>
      <div class="hotkey-item"><span>View</span> <span class="hotkey-key">Tab</span></div>
    `),wo&&(ne.position.copy(wo.pos),qt.target.copy(wo.target),qt.update()),ee&&(ee.visible=!0)}const md=yy();ve.add(md);const gd=[];Me.traverse(i=>{i.userData.pulse&&gd.push(i)});const kh=new Zp;function yy(){const i=[];for(let n=0;n<120;n+=1){const s=18+Math.random()*68,r=Math.random()*Math.PI*2,o=1.5+Math.random()*18;i.push(Math.cos(r)*s,o,Math.sin(r)*s)}const e=new Re;return e.setAttribute("position",new Yt(i,3)),new lp(e,new cu({color:10929919,size:.18,transparent:!0,opacity:.36,sizeAttenuation:!0}))}function My(i){gd.forEach(t=>{const{base:e,amplitude:n,speed:s,phase:r}=t.userData.pulse;t.material.emissiveIntensity=e+Math.sin(i*s+r)*n})}function _d(){const i=Math.min(kh.getDelta(),.05),t=kh.elapsedTime;if(My(t),Ss&&Ss.userData.update&&Ss.userData.update(t),Es&&Es.userData.update&&Es.userData.update(t),ws&&ws.userData.update&&ws.userData.update(t),Ts&&Ts.userData.update&&Ts.userData.update(t),bs&&bs.userData.update&&bs.userData.update(t),Ui&&Ui.userData.update&&Ui.userData.update(t),dr&&dr.userData.update&&dr.userData.update(t),fr&&fr.userData.update&&fr.userData.update(t),un&&be)if(_i)gn?.userData.update&&gn.userData.update(t),Qt?.visible&&Qt.userData.update&&Qt.userData.update(t),wn.update(t),Ia(i),Ua(i),As(i,!1);else if(Io())Gi=Math.max(0,Gi-i),gn?.userData.update&&gn.userData.update(t),Qt?.visible&&Qt.userData.update&&Qt.userData.update(t),wn.update(t),Ia(i),Ua(i),As(i,!1),Io()||fy();else{Un&&Un.update(i,t),An&&!Tr()?An.update(i,t):Qt?.visible&&Qt.userData.update&&Qt.userData.update(t),Ua(i);let e=!1,n=be.consumeStartedIntent();for(;n;)n==="reverse"?hd():n==="reverse_instant"&&(St.isReversing=!1,St.reversalTimer=0,St.forward.copy(be.getFollowDirection()).normalize(),e=!0),n=be.consumeStartedIntent();const s=ys==="pacman"?An:Un;if(s)for(;s.consumeStartedIntent(););As(i,e),wn.update(t),Ia(i);const r=wn.checkCollisions(gn.position);r.length>0&&($x(r),iy(r)&&ny(),document.querySelector("#pellet-counter").textContent=wn.getEatenCount()),hi&&!Tr()&&uy()&&(Yu(Qt)?ry():dy())}if(Pe&&(ud.value=ne.position.distanceTo(qt.target),te.children.forEach(e=>{const n=e.getObjectByName("powerPelletIndicator");n&&n.userData.update&&n.userData.update(t);const s=e.getObjectByName("pacmanSpawnIndicator");s&&s.userData.update&&s.userData.update(t)}),ee)){const e=rc();if(e)if(we==="powerpellet"||we==="pacmanspawn"){const n=te.children.find(r=>r.position.x===e.x&&r.position.z===e.z),s=["straight","corner","tjunction","crossroad"];if(we==="pacmanspawn"&&s.push("teleport"),n&&s.includes(n.userData.type)){let r=e.x,o=e.z;if(n.userData.type==="corner"){const a=3.57*(1-Math.SQRT1_2),l=n.userData.rotation;r+=a*Math.cos(l)+-a*Math.sin(l),o+=-a*Math.sin(l)+-a*Math.cos(l)}ee.position.set(r,2.5,o),ee.visible=!0,we==="pacmanspawn"&&(ee.rotation.y=$e),ee.traverse(a=>{a.material&&a.userData.originalColor&&(we==="pacmanspawn"?(a.material.color.set(65450),a.material.emissive&&(a.material.emissive.set(65450),a.material.emissiveIntensity=1)):(a.material.color.copy(a.userData.originalColor),a.material.emissive&&(a.material.emissive.copy(a.userData.originalEmissive),a.userData.originalEmissiveIntensity!==void 0&&(a.material.emissiveIntensity=a.userData.originalEmissiveIntensity))))}),ee.userData.update&&ee.userData.update(t)}else ee.position.set(e.x,2.5,e.z),ee.visible=!0,we==="pacmanspawn"&&(ee.rotation.y=$e),ee.traverse(r=>{r.material&&r.userData.originalColor&&(r.material.color.set(16711680),r.material.emissive&&(r.material.emissive.set(16711680),r.material.emissiveIntensity=2))}),ee.userData.update&&ee.userData.update(t)}else{ee.position.set(e.x,0,e.z),ee.visible=!0;const n=dd(we,e,$e);ee.traverse(s=>{s.material&&s.userData.originalColor&&(n?(s.material.color.copy(s.userData.originalColor),s.material.emissive&&s.material.emissive.copy(s.userData.originalEmissive)):(s.material.color.set(16711680),s.material.emissive&&s.material.emissive.set(11141120)))})}else ee.visible=!1}md.rotation.y=t*.01,un||qt.update(),cy(),requestAnimationFrame(_d)}_d();window.addEventListener("resize",()=>{ne.aspect=window.innerWidth/window.innerHeight,ne.updateProjectionMatrix(),ze.setPixelRatio(Math.min(window.devicePixelRatio,1.25)),ze.setSize(window.innerWidth,window.innerHeight)});
