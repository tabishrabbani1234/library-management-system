import { BorrowingHistory } from "../../../types.js";
export class Member {
    // name, member ID, contact information, and borrowing history.
    public name: string;
    public member_id: number;
    public email_id: string;
    public phone_number: string;
    public borrowing_history: BorrowingHistory[];
    public borrowedBooksCount: number;

    constructor(name: string, member_id: number, email_id: string, phone_number: string) {
        this.name = name;
        this.member_id = member_id;
        this.email_id = email_id;
        this.phone_number = phone_number;
        this.borrowedBooksCount = 0;
        this.borrowing_history = [];
    }

    public borrow_book(book_id: number) {
        const borrowingEvent: BorrowingHistory = {
            bookId: book_id,
            startDate: Date.now(),
            endDate: null
        }

        this.borrowing_history.push(borrowingEvent);
        this.borrowedBooksCount++;
    }

    public returnBook(bookId: number) {
        for(const borrowingEvent of this.borrowing_history) {
            if(borrowingEvent.bookId == bookId && !borrowingEvent.endDate) {
                borrowingEvent.endDate = Date.now();
                this.borrowedBooksCount--;
            }
        }
    }
}