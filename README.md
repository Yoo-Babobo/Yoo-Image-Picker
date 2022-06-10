# Yoo-Image-Picker
A simple image picker that allows you to edit your image after uploading.

## How to Use

Here is a basic example of the color picker width the default configuration:

```html
<yoo-image-picker id="picker"></yoo-image-picker>

<script src="https://www.data.yoo-babobo.com/assets/scripts/get/Yoo-Image-Picker"></script>
<script>
    const picker = document.getElementById("picker"); // Get image picker
    
    picker.config({ // Configure the image picker
        zoom: false,
        rotate: false,
    
        // Image filters    
    
        blur: false,
        brightness: false,
        contrast: false,
        grayscale: false,
        hue: false,
        invert: false,
        opacity: false,
        saturation: false,
        sepia: false,
    
        // Other settings
    
        width: 256, // Image width
        height: 256, // Image height
        background: "transparent", // Image background
        elementWidth: 300, // Width of element
        error: () => console.log("Incorrect file type"), // Error handler
        canPaste: false // Allow image pasting
    });
</script>
```

## Import Images

You can manually import images into the picker two different ways.

```javascript
picker.value = "<url>"; // Url can also be a blob or data url
picker.import(url); // Same here
```

## Export Images

You can manually import images into the picker two different ways. Using the `export` function allows you to specify an image type.

```javascript
const data_url = picker.value;
const data_url = picker.export("webp"); // You can specify the image type with the export function. WebP is the default;
```

## Image Pasting

You can allow images to be pasted with the `canPaste` option. It can be a boolean or a function.

```javascript
picker.config({
    canPaste: () => {
        if (condition) return true;
        else return false;
    }
});
```
