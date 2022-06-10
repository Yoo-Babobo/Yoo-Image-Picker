/**
 * Yoo-Babobo Image Picker
 * Developed by The Yule
 * Website: https://www.image.yoo-babobo.com/picker
 * Github: https://github.com/Yoo-Babobo/Yoo-Image-Picker
 * License: https://github.com/Yoo-Babobo/Yoo-Image-Picker/blob/main/LICENSE
 */

/**
 * CanvasRenderingContext2D.filter polyfill 
 * https://github.com/davidenke/context-filter-polyfill
 */
!function(){"use strict";var t;!function(t){t.None="none",t.Url="url",t.Blur="blur",t.Brightness="brightness",t.Contrast="contrast",t.DropShadow="drop-shadow",t.Grayscale="grayscale",t.HueRotate="hue-rotate",t.Invert="invert",t.Opacity="opacity",t.Saturate="saturate",t.Sepia="sepia"}(t||(t={}));var r=new Map,a=function(t){var r=document.createElement("canvas");return r.height=t.canvas.height,r.width=t.canvas.width,Object.defineProperty(r,"__skipFilterPatch",{value:!0}),r.getContext("2d")};var e=["__skipFilterPatch","__currentPathMirror","canvas","filter","getImageData"];var n=["clearRect","drawImage","fill","fillRect","fillText","stroke","strokeRect","strokeText"],i=function(t,a){a.match(/([-a-z]+)(?:\(([\w\d\s\.%-]*)\))?/gim).map(function(t){return t.match(/([-a-z]+)(?:\((.*)\))?/i).slice(1,3)}).reduce(function(t,a){var e=a[0],n=a[1];return r.has(e)?r.get(e).apply(void 0,[t].concat((n||"").split(" "))):t},t)},o=function(t){var r=parseFloat(t);return/%\s*?$/i.test(t)&&(r/=100),r},s=function(t){return parseFloat(t)};var c,h;r.set(t.None,function(t){return t}),r.set(t.Blur,function(t,r){void 0===r&&(r="0");var a=s(r);if(a<=0)return t;for(var e,n,i,o,c=t.canvas,h=c.height,u=c.width,v=t.getImageData(0,0,u,h),f=v.data,p=u-1,g=h-1,l=a+1,d=[1,57,41,21,203,34,97,73,227,91,149,62,105,45,39,137,241,107,3,173,39,71,65,238,219,101,187,87,81,151,141,133,249,117,221,209,197,187,177,169,5,153,73,139,133,127,243,233,223,107,103,99,191,23,177,171,165,159,77,149,9,139,135,131,253,245,119,231,224,109,211,103,25,195,189,23,45,175,171,83,81,79,155,151,147,9,141,137,67,131,129,251,123,30,235,115,113,221,217,53,13,51,50,49,193,189,185,91,179,175,43,169,83,163,5,79,155,19,75,147,145,143,35,69,17,67,33,65,255,251,247,243,239,59,29,229,113,111,219,27,213,105,207,51,201,199,49,193,191,47,93,183,181,179,11,87,43,85,167,165,163,161,159,157,155,77,19,75,37,73,145,143,141,35,138,137,135,67,33,131,129,255,63,250,247,61,121,239,237,117,29,229,227,225,111,55,109,216,213,211,209,207,205,203,201,199,197,195,193,48,190,47,93,185,183,181,179,178,176,175,173,171,85,21,167,165,41,163,161,5,79,157,78,154,153,19,75,149,74,147,73,144,143,71,141,140,139,137,17,135,134,133,66,131,65,129,1][a],m=[0,9,10,10,14,12,14,14,16,15,16,15,16,15,15,17,18,17,12,18,16,17,17,19,19,18,19,18,18,19,19,19,20,19,20,20,20,20,20,20,15,20,19,20,20,20,21,21,21,20,20,20,21,18,21,21,21,21,20,21,17,21,21,21,22,22,21,22,22,21,22,21,19,22,22,19,20,22,22,21,21,21,22,22,22,18,22,22,21,22,22,23,22,20,23,22,22,23,23,21,19,21,21,21,23,23,23,22,23,23,21,23,22,23,18,22,23,20,22,23,23,23,21,22,20,22,21,22,24,24,24,24,24,22,21,24,23,23,24,21,24,23,24,22,24,24,22,24,24,22,23,24,24,24,20,23,22,23,24,24,24,24,24,24,24,23,21,23,22,23,24,24,24,22,24,24,24,23,22,24,24,25,23,25,25,23,24,25,25,24,22,25,25,25,24,23,24,25,25,25,25,25,25,25,25,25,25,25,25,23,25,23,24,25,25,25,25,25,25,25,25,25,24,22,25,25,23,25,25,20,24,25,24,25,25,22,24,25,24,25,24,25,25,24,25,25,25,25,22,25,25,25,24,25,24,25,18][a],_=[],w=[],y=[],D=[],P=[],I=[],b=3;b-- >0;){for(var M=0,O=0,k=0;k<h;k++){for(var C=f[M]*l,x=f[M+1]*l,F=f[M+2]*l,j=f[M+3]*l,R=1;R<=a;R++)e=M+((R>p?p:R)<<2),C+=f[e++],x+=f[e++],F+=f[e++],j+=f[e];for(var S=0;S<u;S++)_[O]=C,w[O]=x,y[O]=F,D[O]=j,0===k&&(P[S]=((e=S+l)<p?e:p)<<2,I[S]=(e=S-a)>0?e<<2:0),n=M+P[S],i=M+I[S],C+=f[n++]-f[i++],x+=f[n++]-f[i++],F+=f[n++]-f[i++],j+=f[n]-f[i],O++;M+=u<<2}for(S=0;S<u;S++){var T=S;for(C=_[T]*l,x=w[T]*l,F=y[T]*l,j=D[T]*l,R=1;R<=a;R++)C+=_[T+=R>g?0:u],x+=w[T],F+=y[T],j+=D[T];for(O=S<<2,k=0;k<h;k++)f[O+3]=o=j*d>>>m,o>0?(o=255/o,f[O]=(C*d>>>m)*o,f[O+1]=(x*d>>>m)*o,f[O+2]=(F*d>>>m)*o):f[O]=f[O+1]=f[O+2]=0,0===S&&(P[k]=((e=k+l)<g?e:g)*u,I[k]=(e=k-a)>0?e*u:0),n=S+P[k],i=S+I[k],C+=_[n]-_[i],x+=w[n]-w[i],F+=y[n]-y[i],j+=D[n]-D[i],O+=u<<2}}return t.putImageData(v,0,0),t}),r.set(t.Brightness,function(t,r){if(void 0===r&&(r="1"),1===(r=o(r)))return t;r<0&&(r=0);for(var a=t.canvas,e=a.height,n=a.width,i=t.getImageData(0,0,n,e),s=i.data,c=s.length,h=0;h<c;h+=4)s[h+0]*=r,s[h+1]*=r,s[h+2]*=r;return t.putImageData(i,0,0),t}),r.set(t.Contrast,function(t,r){if(void 0===r&&(r="1"),1===(r=o(r)))return t;r<0&&(r=0);for(var a=t.canvas,e=a.height,n=a.width,i=t.getImageData(0,0,n,e),s=i.data,c=s.length,h=0;h<c;h+=4)s[h+0]=255*((s[h+0]/255-.5)*r+.5),s[h+1]=255*((s[h+1]/255-.5)*r+.5),s[h+2]=255*((s[h+2]/255-.5)*r+.5);return t.putImageData(i,0,0),t}),r.set(t.DropShadow,function(t,r,a,e,n){var i=document.createElement("canvas").getContext("2d");i.shadowOffsetX=s(r),i.shadowOffsetY=s(a),i.shadowBlur=n?s(e||"0"):0,i.shadowColor=n||e||"transparent",i.drawImage(t.canvas,0,0);var o=t.canvas,c=o.width,h=o.height;return t.putImageData(i.getImageData(0,0,c,h),0,0),t}),r.set(t.Grayscale,function(t,r){if(void 0===r&&(r="0"),(r=o(r))<=0)return t;r>1&&(r=1);for(var a=t.canvas,e=a.height,n=a.width,i=t.getImageData(0,0,n,e),s=i.data,c=s.length,h=0;h<c;h+=4){var u=.2126*s[h]+.7152*s[h+1]+.0722*s[h+2];s[h+0]+=(u-s[h+0])*r,s[h+1]+=(u-s[h+1])*r,s[h+2]+=(u-s[h+2])*r}return t.putImageData(i,0,0),t}),r.set(t.HueRotate,function(t,r){void 0===r&&(r="0deg");var a=function(t){var r=parseFloat(t);switch(t.slice(r.toString().length)){case"deg":r/=360;break;case"grad":r/=400;break;case"rad":r/=2*Math.PI}return r}(r);if(a<=0)return t;var e,n,i,o,s,c,h,u,v,f=t.canvas,p=f.height,g=f.width,l=t.getImageData(0,0,g,p),d=l.data,m=(a%1+1)%1*3,_=Math.floor(m),w=m-_,y=1-w;switch(_){case 0:e=y,n=0,i=w,o=w,s=y,c=0,h=0,u=w,v=y;break;case 1:e=0,n=w,i=y,o=y,s=0,c=w,h=w,u=y,v=0;break;case 2:e=w,n=y,i=0,o=0,s=w,c=y,h=y,u=0,v=w}for(var D=0,P=0;P<p;++P)for(var I=0;I<g;++I){var b=d[0+(D=4*(P*g+I))],M=d[D+1],O=d[D+2];d[D+0]=Math.floor(e*b+n*M+i*O),d[D+1]=Math.floor(o*b+s*M+c*O),d[D+2]=Math.floor(h*b+u*M+v*O)}return t.putImageData(l,0,0),t}),r.set(t.Invert,function(t,r){if(void 0===r&&(r="0"),(r=o(r))<=0)return t;r>1&&(r=1);for(var a=t.canvas,e=a.height,n=a.width,i=t.getImageData(0,0,n,e),s=i.data,c=s.length,h=0;h<c;h+=4)s[h+0]=Math.abs(s[h+0]-255*r),s[h+1]=Math.abs(s[h+1]-255*r),s[h+2]=Math.abs(s[h+2]-255*r);return t.putImageData(i,0,0),t}),r.set(t.Opacity,function(t,r){if(void 0===r&&(r="1"),(r=o(r))<0)return t;r>1&&(r=1);for(var a=t.canvas,e=a.height,n=a.width,i=t.getImageData(0,0,n,e),s=i.data,c=s.length,h=3;h<c;h+=4)s[h]*=r;return t.putImageData(i,0,0),t}),r.set(t.Saturate,function(t,r){void 0===r&&(r="1");var a=o(r);if(1===a)return t;a<0&&(a=0);for(var e=t.canvas,n=e.height,i=e.width,s=t.getImageData(0,0,i,n),c=s.data,h=.3086*(1-a),u=.6094*(1-a),v=.082*(1-a),f=i<<2,p=0;p<n;p++)for(var g=p*f,l=0;l<i;l++){var d=g+(l<<2),m=c[d+0],_=c[d+1],w=c[d+2];c[d+0]=(h+a)*m+u*_+v*w,c[d+1]=h*m+(u+a)*_+v*w,c[d+2]=h*m+u*_+(v+a)*w}return t.putImageData(s,0,0),t}),r.set(t.Sepia,function(t,r){if(void 0===r&&(r="0"),(r=o(r))<=0)return t;r>1&&(r=1);for(var a=t.canvas,e=a.height,n=a.width,i=t.getImageData(0,0,n,e),s=i.data,c=s.length,h=0;h<c;h+=4){var u=s[h+0],v=s[h+1],f=s[h+2];s[h+0]=(.393*u+.769*v+.189*f)*r+u*(1-r),s[h+1]=(.349*u+.686*v+.168*f)*r+v*(1-r),s[h+2]=(.272*u+.534*v+.131*f)*r+f*(1-r)}return t.putImageData(i,0,0),t}),"filter"in CanvasRenderingContext2D.prototype||(c=HTMLCanvasElement,h=CanvasRenderingContext2D,Object.defineProperty(c.prototype,"__skipFilterPatch",{writable:!0,value:!1}),Object.defineProperty(c.prototype,"__currentPathMirror",{writable:!0,value:void 0}),Object.defineProperty(h.prototype,"filter",{writable:!0,value:t.None}),function(t){Object.keys(t.prototype).filter(function(t){return e.indexOf(t)<0}).map(function(r){return{member:r,descriptor:Object.getOwnPropertyDescriptor(t.prototype,r)}}).filter(function(t){return t.descriptor.set}).forEach(function(r){var e=r.member,n=r.descriptor;Object.defineProperty(t.prototype,e,{get:function(){return this.canvas.__skipFilterPatch?n.get.call(this):this.canvas.__currentPathMirror[e]},set:function(t){if(this.canvas.__skipFilterPatch)return n.set.call(this,t);this.canvas.__currentPathMirror||(this.canvas.__currentPathMirror=a(this)),this.canvas.__currentPathMirror[e]=t}})})}(CanvasRenderingContext2D),function(t){Object.keys(t.prototype).filter(function(t){return e.indexOf(t)<0}).map(function(r){return{member:r,descriptor:Object.getOwnPropertyDescriptor(t.prototype,r)}}).filter(function(t){var r=t.descriptor;return r.value&&"function"==typeof r.value}).forEach(function(r){var e=r.member,o=r.descriptor.value;Object.defineProperty(t.prototype,e,{value:function(){for(var t,r=[],s=0;s<arguments.length;s++)r[s]=arguments[s];if(this.canvas.__skipFilterPatch)return o.call.apply(o,[this].concat(r));this.canvas.__currentPathMirror||(this.canvas.__currentPathMirror=a(this));var c=(t=this.canvas.__currentPathMirror)[e].apply(t,r);if(n.indexOf(e)>-1){i(this.canvas.__currentPathMirror,this.filter),this.canvas.__skipFilterPatch=!0;var h=void 0;"getTransform"in this&&(h=this.getTransform(),this.setTransform(1,0,0,1,0,0)),this.drawImage(this.canvas.__currentPathMirror.canvas,0,0),h&&this.setTransform(h),this.canvas.__skipFilterPatch=!1,this.canvas.__currentPathMirror=a(this)}return c}})})}(CanvasRenderingContext2D))}();

class YooImagePickerElement extends HTMLElement {
    get value() {
        return this.export();
    }

    set value(url) {
        this.import(url);
    }

    constructor() {
        super();

        this._config = {
            zoom: false,
            rotate: false,
            filter: {
                blur: false,
                brightness: false,
                contrast: false,
                grayscale: false,
                hue: false,
                invert: false,
                opacity: false,
                saturation: false,
                sepia: false
            },
            width: 256,
            height: 256,
            autoSize: false,
            background: "transparent",
            elementWidth: 300,
            error: () => console.log("Incorrect file type"),
            canPaste: false
        };

        this._wrappers = {
            zoom: null,
            rotate: null,
            blur: null,
            brightness: null,
            contrast: null,
            grayscale: null,
            hue: null,
            invert: null,
            opacity: null,
            saturation: null,
            sepia: null
        };

        this._elements = {
            zoom: null,
            rotate: null,
            blur: null,
            brightness: null,
            contrast: null,
            grayscale: null,
            hue: null,
            invert: null,
            opacity: null,
            saturation: null,
            sepia: null,
            reset: null
        };

        this.image = null;
    }

    connectedCallback() {
        document.addEventListener("paste", event => {
            if (this._config.canPaste === false || (this._config.canPaste instanceof Function && this._config.canPaste() === false)) return;

            const item = event.clipboardData.items[0];
            const type = item.type.split("/")[0];
            
            if (item.type === "text/html") {
                prevent(event);

                const url = event.clipboardData.getData("text/html").replace(/\n+/g, "").replace(/<\/?body(.*)>|<\/?html(.*)>/g, "").replace(/(.*)<img(.*)src=("|')(.*?)("|')(.*)>(.*)/, "$4");
                
                this.import(url).then(() => URL.revokeObjectURL(url));

                return;
            } else if (type !== "image") return this._config.error();

            prevent(event);

            const file = item.getAsFile();
            const url = URL.createObjectURL(file);

            this.import(url).then(() => URL.revokeObjectURL(url));
        });

        const prevent = event => {
            event.preventDefault();
            event.stopPropagation();
        };

        const drag_enter = (event) => {
            prevent(event);
            this.canvas.classList.add("highlighted");
        };

        const drag_leave = (event) => {
            prevent(event);
            this.canvas.classList.remove("highlighted");
        };

        this.addEventListener("dragenter", event => drag_enter(event));
        this.addEventListener("dragover", event => drag_enter(event));
        this.addEventListener("dragleave", event => drag_leave(event));

        this.addEventListener("drop", event => {
            prevent(event);
            drag_leave(event);

            const dataTransfer = event.dataTransfer;
            const file = dataTransfer.files[0];
            const type = file.type.split("/")[0];

            if (type !== "image") return this._config.error();

            const url = URL.createObjectURL(file);

            this.import(url).then(() => URL.revokeObjectURL(url));
        });
        
        {
            const style = document.createElement("style");
            style.textContent = "yoo-image-picker { display: inline-block; background: var(--yoo-image-picker-background, #343434); max-width: 100%; margin: 20px; padding: 15px; border-radius: 20px; }";
            document.head.append(style);
        }

        const shadow = this.attachShadow({ mode: "open" });

        const style = document.createElement("style");
        style.textContent = "* { color: var(--yoo-image-picker-foreground, #cbcbcb); font-family: var(--yoo-image-picker-font, Arial); text-align: center; user-select: none; } canvas { display: block; max-width: 100%; height: auto; margin-left: 50%; border-radius: 10px; border: 4px dashed transparent; box-shadow: rgba(0, 0, 0, .35) 0 5px 15px; transition: border .3s ease; cursor: pointer; transform: translateX(-50%); } canvas.highlighted { border: 4px dashed var(--yoo-image-picker-foreground, #cbcbcb) } input, small { display: inline; margin: 5px; } button, input { cursor: pointer; } button { background: var(--yoo-image-picker-background, #343434); margin: 10px; margin-left: 50%; padding: 10px; border: 2px solid var(--yoo-image-picker-foreground, #cbcbcb); border-radius: 10px; transform: translateX(-50%); } a { text-decoration: none } a:hover { text-decoration: underline; } small { display: block; } #logo { width: 16px; vertical-align: bottom; } .wrapper { display: none; } .wrapper.active { display: block; } ";
        shadow.append(style);

        {
            const message = document.createElement("small");
            message.textContent = "Upload your image here.";
            shadow.append(message);
        }

        const canvas = document.createElement("canvas");
        canvas.title = "Click to upload an image, drag and drop, or paste.";
        canvas.ariaLabel = "Click to upload an image, drag and drop, or paste.";
        this.canvas = canvas;
        shadow.append(canvas);

        const click = () => {
            const input = document.createElement("input");
            input.type = "file";
            input.accept = "image/*";

            input.addEventListener("input", () => {
                const file = input.files[0];
                const type = file.type.split("/")[0];

                if (type !== "image") return this._config.error();

                const url = URL.createObjectURL(file);

                this.import(url).then(() => URL.revokeObjectURL(url));

                input.remove();
            });

            input.click();
        };
        
        canvas.addEventListener("mousedown", click);
        canvas.addEventListener("touchdown", click);

        this.context = canvas.getContext("2d");

        const wrappers = this._wrappers;
        const elements = this._elements;

        const render = () => this.render();

        {
            const wrapper = document.createElement("p");
            wrapper.classList.add("wrapper");
            wrappers.zoom = wrapper;
            shadow.append(wrapper);

            const span = document.createElement("span");
            span.textContent = "Zoom ";

            const input = document.createElement("input");
            input.type = "range";
            input.min = 50;
            input.value = 100;
            input.max = 300;
            input.title = "Zoom";
            input.ariaLabel = "Zoom";
            elements.zoom = input;

            wrapper.append(span, input);

            input.addEventListener("input", render);
        }

        {
            const wrapper = document.createElement("p");
            wrapper.classList.add("wrapper");
            wrappers.rotate = wrapper;
            shadow.append(wrapper);

            const span = document.createElement("span");
            span.textContent = "Rotate ";

            const input = document.createElement("input");
            input.type = "range";
            input.min = 0;
            input.value = 0;
            input.max = 180;
            input.title = "Rotate";
            input.ariaLabel = "Rotate";
            elements.rotate = input;

            wrapper.append(span, input);

            input.addEventListener("input", render);
        }

        {
            const wrapper = document.createElement("p");
            wrapper.classList.add("wrapper");
            wrappers.blur = wrapper;
            shadow.append(wrapper);

            const span = document.createElement("span");
            span.textContent = "Blur ";

            const input = document.createElement("input");
            input.type = "range";
            input.min = 0;
            input.value = 0;
            input.max = 100;
            input.title = "Blur";
            input.ariaLabel = "Blur";
            elements.blur = input;

            wrapper.append(span, input);

            input.addEventListener("input", render);
        }

        {
            const wrapper = document.createElement("p");
            wrapper.classList.add("wrapper");
            wrappers.brightness = wrapper;
            shadow.append(wrapper);

            const span = document.createElement("span");
            span.textContent = "Brightness ";

            const input = document.createElement("input");
            input.type = "range";
            input.min = 0;
            input.value = 100;
            input.max = 200;
            input.title = "Brightness";
            input.ariaLabel = "Brightness";
            elements.brightness = input;

            wrapper.append(span, input);

            input.addEventListener("input", render);
        }

        {
            const wrapper = document.createElement("p");
            wrapper.classList.add("wrapper");
            wrappers.contrast = wrapper;
            shadow.append(wrapper);

            const span = document.createElement("span");
            span.textContent = "Contrast ";

            const input = document.createElement("input");
            input.type = "range";
            input.min = 0;
            input.value = 100;
            input.max = 200;
            input.title = "Contrast";
            input.ariaLabel = "Contrast";
            elements.contrast = input;

            wrapper.append(span, input);

            input.addEventListener("input", render);
        }

        {
            const wrapper = document.createElement("p");
            wrapper.classList.add("wrapper");
            wrappers.grayscale = wrapper;
            shadow.append(wrapper);

            const span = document.createElement("span");
            span.textContent = "Grayscale ";

            const input = document.createElement("input");
            input.type = "range";
            input.min = 0;
            input.value = 0;
            input.max = 100;
            input.title = "Grayscale";
            input.ariaLabel = "Grayscale";
            elements.grayscale = input;

            wrapper.append(span, input);

            input.addEventListener("input", render);
        }

        {
            const wrapper = document.createElement("p");
            wrapper.classList.add("wrapper");
            wrappers.hue = wrapper;
            shadow.append(wrapper);

            const span = document.createElement("span");
            span.textContent = "Hue ";

            const input = document.createElement("input");
            input.type = "range";
            input.min = 0;
            input.value = 0;
            input.max = 360;
            input.title = "Hue";
            input.ariaLabel = "Hue";
            elements.hue = input;

            wrapper.append(span, input);

            input.addEventListener("input", render);
        }

        {
            const wrapper = document.createElement("p");
            wrapper.classList.add("wrapper");
            wrappers.invert = wrapper;
            shadow.append(wrapper);

            const span = document.createElement("span");
            span.textContent = "Invert ";

            const input = document.createElement("input");
            input.type = "range";
            input.min = 0;
            input.value = 0;
            input.max = 100;
            input.title = "Invert";
            input.ariaLabel = "Invert";
            elements.invert = input;

            wrapper.append(span, input);

            input.addEventListener("input", render);
        }

        {
            const wrapper = document.createElement("p");
            wrapper.classList.add("wrapper");
            wrappers.opacity = wrapper;
            shadow.append(wrapper);

            const span = document.createElement("span");
            span.textContent = "Opacity ";

            const input = document.createElement("input");
            input.type = "range";
            input.min = 0;
            input.value = 100;
            input.max = 100;
            input.title = "Opacity";
            input.ariaLabel = "Opacity";
            elements.opacity = input;

            wrapper.append(span, input);

            input.addEventListener("input", render);
        }

        {
            const wrapper = document.createElement("p");
            wrapper.classList.add("wrapper");
            wrappers.saturation = wrapper;
            shadow.append(wrapper);

            const span = document.createElement("span");
            span.textContent = "Saturation ";

            const input = document.createElement("input");
            input.type = "range";
            input.min = 0;
            input.value = 100;
            input.max = 200;
            input.title = "Saturation";
            input.ariaLabel = "Saturation";
            elements.saturation = input;

            wrapper.append(span, input);

            input.addEventListener("input", render);
        }

        {
            const wrapper = document.createElement("p");
            wrapper.classList.add("wrapper");
            wrappers.sepia = wrapper;
            shadow.append(wrapper);

            const span = document.createElement("span");
            span.textContent = "Sepia ";

            const input = document.createElement("input");
            input.type = "range";
            input.min = 0;
            input.value = 0;
            input.max = 100;
            input.title = "Sepia";
            input.ariaLabel = "Sepia";
            elements.sepia = input;

            wrapper.append(span, input);

            input.addEventListener("input", render);
        }

        {
            const button = document.createElement("button");
            button.classList.add("wrapper");
            button.type = "button";
            button.title = "Reset modifiers";
            button.ariaLabel = "Reset modifiers";
            button.textContent = "Reset";
            elements.reset = button;
            shadow.append(button);

            button.addEventListener("click", () => this.reset(innerWidth > 450));
        }

        {
            const message = document.createElement("small");
            message.innerHTML = "<img id=\"logo\" src=\"https://www.data.yoo-babobo.com/content/images/logos/yoo-babobo-image.webp\" alt=\"Yoo-Babobo Image\" /> <a href=\"https://www.image.yoo-babobo.com/editor\" target=\"_blank\" title=\"Open Yoo-Babobo Image for a more extensive image editor.\" aria-label=\"Open Yoo-Babobo Image for a more extensive image editor.\">Yoo-Babobo Image</a>";
            shadow.append(message);
        }

        this.config();
    }

    config(data = {}) {
        const config = this._config;
        const filter = config.filter;
        const wrappers = this._wrappers;

        config.zoom = data.zoom || config.zoom;
        config.rotate = data.rotate || config.rotate;

        filter.blur = data.blur || filter.blur;
        filter.brightness = data.brightness || filter.brightness;
        filter.contrast = data.contrast || filter.contrast;
        filter.grayscale = data.grayscale || filter.grayscale;
        filter.hue = data.hue || filter.hue;
        filter.invert = data.invert || filter.invert;
        filter.opacity = data.opacity || filter.opacity;
        filter.saturation = data.saturation || filter.saturation;
        filter.sepia = data.sepia || filter.sepia;

        config.width = data.width || config.width;
        config.height = data.height || config.height;
        config.autoSize = data.autoSize || config.autoSize;

        config.background = data.background || config.background;
        config.elementWidth = data.elementWidth || config.elementWidth;

        config.error = data.error || config.error;
        config.canPaste = data.canPaste || config.canPaste;

        if (config.zoom) wrappers.zoom.classList.add("active");
        else wrappers.zoom.classList.remove("active");
        
        if (config.rotate) wrappers.rotate.classList.add("active");
        else wrappers.rotate.classList.remove("active");

        if (filter.blur) wrappers.blur.classList.add("active");
        else wrappers.blur.classList.remove("active");

        if (filter.brightness) wrappers.brightness.classList.add("active");
        else wrappers.brightness.classList.remove("active");

        if (filter.contrast) wrappers.contrast.classList.add("active");
        else wrappers.contrast.classList.remove("active");

        if (filter.grayscale) wrappers.grayscale.classList.add("active");
        else wrappers.grayscale.classList.remove("active");
        
        if (filter.hue) wrappers.hue.classList.add("active");
        else wrappers.hue.classList.remove("active");

        if (filter.invert) wrappers.invert.classList.add("active");
        else wrappers.invert.classList.remove("active");

        if (filter.opacity) wrappers.opacity.classList.add("active");
        else wrappers.opacity.classList.remove("active");

        if (filter.saturation) wrappers.saturation.classList.add("active");
        else wrappers.saturation.classList.remove("active");

        if (filter.sepia) wrappers.sepia.classList.add("active");
        else wrappers.sepia.classList.remove("active");

        if (config.zoom || config.rotate || filter.blur || filter.brightness || filter.contrast || filter.grayscale || filter.hue || filter.invert || filter.opacity || filter.saturation || filter.sepia) this._elements.reset.classList.add("active");
        else this._elements.reset.classList.remove("active");

        const { width, height, background, elementWidth } = config;
        this.canvas.width = width;
        this.canvas.height = height;
        this.canvas.style.background = background;
        this.style.width = elementWidth + "px";

        this.render();

        return this;
    }

    import(url) {
        if (!url) return;

        const image = document.createElement("img");
        this.image = image;

        image.src = url;

        return new Promise((resolve, reject) => {
            try {
                image.addEventListener("load", () => {
                    if (this._config.autoSize) {
                        this.config({
                            width: image.width,
                            height: image.height
                        });
                    }

                    this.render();

                    resolve();
                });
            } catch (error) { reject(error); }
        });
    }

    reset(animation = true) {
        const elements = this._elements;
        const time = .33 * 60;

        if (!animation) {
            elements.zoom.value = 100;
            elements.rotate.value = 0;
            elements.blur.value = 0;
            elements.brightness.value = 100;
            elements.contrast.value = 100;
            elements.grayscale.value = 0;
            elements.hue.value = 0;
            elements.invert.value = 0;
            elements.opacity.value = 100;
            elements.saturation.value = 100;
            elements.sepia.value = 0;

            this.render();

            return this;
        }

        const animate = async (element, finish) => {
            const start = element.value;
            const offset = Math.max(start, finish) - Math.min(start, finish);
            const step = offset / time;

            await new Promise(resolve => {
                const loop = () => {
                    let value = Number(element.value);
                    const offset = Math.max(value, finish) - Math.min(value, finish);

                    if (value > finish) {
                        value -= step;
                        if (step > offset) value = finish;
                        else value -= step;
                    } else if (value < finish) {
                        if (step > offset) value = finish;
                        else value += step;
                    }

                    element.value = value;

                    this.render();

                    if (value !== finish) requestAnimationFrame(() => loop());
                    else resolve();
                };

                requestAnimationFrame(() => loop());
            });
        };

        animate(elements.zoom, 100);
        animate(elements.rotate, 0);
        animate(elements.blur, 0);
        animate(elements.brightness, 100);
        animate(elements.contrast, 100);
        animate(elements.grayscale, 0);
        animate(elements.hue, 0);
        animate(elements.invert, 0);
        animate(elements.opacity, 100);
        animate(elements.saturation, 100);
        animate(elements.sepia, 0);

        return this;
    }

    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        if (innerWidth < 450 && this._config.background === "transparent") {
            this.context.fillStyle = "black";
            this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        } else {
            this.context.fillStyle = this._config.background;
            this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }

        return this;
    }

    render() {
        const { canvas, context } = this;
        const { width, height } = canvas;
        const elements = this._elements;
        const image = this.image || false;

        this.clear();

        if (!image) return this;
        
        const width_ratio = width / image.width;
        const height_ratio = height / image.height;
        const ratio = Math.min(width_ratio, height_ratio);
        
        const x = (width - image.width * ratio) / 2;
        const y = (height - image.height * ratio) / 2;

        context.save();

        const zoom = Number(elements.zoom.value) / 100;
        const rotate = Number(elements.rotate.value) / 180 * Math.PI;
        const blur = Number(elements.blur.value) / 10;
        const brightness = Number(elements.brightness.value);
        const contrast = Number(elements.contrast.value);
        const grayscale = Number(elements.grayscale.value);
        const hue = Number(elements.hue.value);
        const invert = Number(elements.invert.value);
        const opacity = Number(elements.opacity.value) / 100;
        const saturation = Number(elements.saturation.value);
        const sepia = Number(elements.sepia.value);

        context.translate(width / 2, height / 2);
        
        context.globalAlpha = opacity;
        context.scale(zoom, zoom);
        context.rotate(rotate);
        context.filter = `blur(${blur}px) brightness(${brightness}%) contrast(${contrast}%) grayscale(${grayscale}%) hue-rotate(${hue}deg) invert(${invert}%) saturate(${saturation}%) sepia(${sepia}%)`;

        context.translate(-width / 2, -height / 2);

        context.drawImage(image, 0, 0, image.width, image.height, x, y, image.width * ratio, image.height * ratio);

        context.restore();

        return this;
    }

    export(type = "webp") {
        const data = this.canvas.toDataURL("image/" + type);
        return data;
    }
}

customElements.define("yoo-image-picker", YooImagePickerElement);
