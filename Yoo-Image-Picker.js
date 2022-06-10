/**
 * Yoo-Babobo Image Picker
 * Developed by The Yule
 * Website: https://www.image.yoo-babobo.com/picker
 * Github: https://github.com/Yoo-Babobo/Yoo-Image-Picker
 * License: https://github.com/Yoo-Babobo/Yoo-Image-Picker/blob/main/LICENSE
 */

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

    connectedCallback() { // color palette https://coolors.co/e8c547-30323d-4d5061-5c80bc-cdd1c4
        document.addEventListener("paste", event => {
            if (this._config.canPaste === false || (this._config.canPaste instanceof Function && this._config.canPaste() === false)) return;

            const item = event.clipboardData.items[0];
            const type = item.type.split("/")[0];

            if (type !== "image") return this._config.error();

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
        style.textContent = "* { color: var(--yoo-image-picker-foreground, #cbcbcb); font-family: var(--yoo-image-picker-font, Arial); text-align: center; user-select: none; } canvas { display: block; max-width: 100%; height: auto; margin-left: 50%; border-radius: 10px; border: 4px dashed transparent; transition: border .3s ease; cursor: pointer; transform: translateX(-50%); } canvas.highlighted { border: 4px dashed var(--yoo-image-picker-foreground, #cbcbcb) } input, small { display: inline; margin: 5px; } button, input { cursor: pointer; } button { background: var(--yoo-image-picker-background, #343434); margin: 10px; margin-left: 50%; padding: 10px; border: 2px solid var(--yoo-image-picker-foreground, #cbcbcb); border-radius: 10px; transform: translateX(-50%); } a { text-decoration: none } a:hover { text-decoration: underline; } small { display: block; } #logo { width: 16px; vertical-align: bottom; } .wrapper { display: none; } .wrapper.active { display: block; } ";
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
            input.max = 150;
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

            button.addEventListener("click", () => {
                const time = .33 * 60;

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
            });
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
    }

    import(url = false) {
        if (!url) return;

        const image = document.createElement("img");
        this.image = image;

        image.src = url;

        return new Promise((resolve, reject) => {
            try {
                image.addEventListener("load", () => {
                    this.render();                    
                    resolve();
                });
            } catch (error) { reject(error); }
        });
    }

    reset() {
        this.context.fillStyle = this._config.background;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    render() {
        const { canvas, context } = this;
        const { width, height } = canvas;
        const elements = this._elements;
        const image = this.image || false;

        this.reset();

        if (!image) return;
        
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
    }

    export(type = "webp") {
        const data = this.canvas.toDataURL("image/" + type);
        return data;
    }
}

customElements.define("yoo-image-picker", YooImagePickerElement);
