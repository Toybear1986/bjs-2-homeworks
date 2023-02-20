class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    set state(newState) {
        if (newState <= 0) {
            this._state = 0;
        } else if (newState >= 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }

    get state() {
        return this._state;
    }

    fix() {
        this.state = this._state * 1.5
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
            return library.books;
        } else {
            return "Книгу нельзя вернуть в таком состоянии";
        }
    }

    findBookBy(type, value) {
        let index = this.books.findIndex(book => book[type] == value);
        if (index === -1) {
            return null;
        }
        return this.books[index]
    }

    giveBookByName(bookName) {
        const type = "name";
        const book = this.findBookBy(type, bookName);
        if (book === null) {
            return null;
        }
        return this.books.splice(book) && book;
    }
}

const library = new Library();

library.addBook(new Magazine('Forbes', 2020, 180));
library.addBook(new Book('А. Сапковский', 'Меч Предназначения', 1919, 384));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1992, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));
library.addBook(new FantasticBook('Джон Толкин', 'Властелин колец', 1954, 2093));
library.addBook(new DetectiveBook('Агата Кристи', 'Десять негритят', 2019, 256));
library.addBook(new Book('Типовой школьный журнал', 2019, 102));
console.log(library.findBookBy("releaseDate", 1919));
console.log("Количество книг до выдачи: " + library.books.length);
console.log(library.books);
const givedBook = library.giveBookByName("Машина времени");
console.log(givedBook);
console.log("Количество книг после выдачи: " + library.books.length);
console.log(library.books);
console.log(givedBook.state = 25);
givedBook.fix();
console.log(givedBook.state);
console.log(library.addBook(givedBook));
console.log("Количество книг после возврата: " + library.books.length);

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(value, subject) {
        if (value < 2 || value > 5) {
            return;
        }
        if (!this.marks.hasOwnProperty(subject)) {
            this.marks[subject] = [];
        }
        this.marks[subject].push(value);
    }

    getAverageBySubject(subject) {
        if (!this.marks.hasOwnProperty(subject)) {
            return 0;
        }
        const average = this.marks[subject].reduce((accumulator, value) => accumulator + value, 0) / this.marks[subject].length;
        return average
    }

    getAverage() {
        const keys = Object.keys(this.marks);
        if (isNaN(keys.length)) {
            return 0;
        }
        let summ = 0;
        for (let i = 0; i < keys.length; i++) {
            const subject = keys[i];
            summ += this.getAverageBySubject(subject);
        }
        return summ / keys.length;
    }
}