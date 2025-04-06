export class Book {
    //title, author, ISBN, publication year, and availability status.
    public id: number;
    public title: string;
    public author: string;
    public publication_year: number;
    public isbn: string;
    private available: boolean;
    private rentedMemberId: number;

    constructor(title: string, author: string, publication_year: number, isbn: string) {
        this.title = title;
        this.author = author;
        this.publication_year = publication_year;
        this.isbn = isbn;
        this.available = true;
    }
    
    isAvailable() {
        return this.available;
    }

    getRentedMemberId() {
        return this.rentedMemberId;
    }

    rentBook(member_id: number) {
        this.available = false;
        this.rentedMemberId = member_id;
    }

    returnBook() {
        this.available = true;
        this.rentedMemberId = null;
    }
}