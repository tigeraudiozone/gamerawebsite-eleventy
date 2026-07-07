class Carousel {
    constructor(images, elementImage) {
        this.images = images;
        this.elementImage = elementImage;
        this.index = 0;

        this.refresh();
    }

    refresh() {
        this.elementImage.src = this.images[this.index];
    }

    next() {
        this.index++;

        if(this.index >= this.images.length) {
            this.index = 0;
        }

        this.refresh();
    }

    prev() {
        this.index--;

        if(this.index < 0) {
            this.index = this.images.length - 1;
        }

        this.refresh();
    }
}