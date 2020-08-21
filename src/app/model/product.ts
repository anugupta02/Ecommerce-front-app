export class Product {
    id: number;
    title: string;
    rating: number;
    desc: string;
    price: number;
    image : string;
    listImages = new Array();

    constructor(id, title, rating, desc, price, image, listImages) {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.rating = rating;
        this.price = price;
        this.image = image;
        this.listImages= listImages;
    }
}