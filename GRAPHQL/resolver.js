import { title } from "process"

const data = {
    authors: [
        {id: 1, name: "infi", bookIds: [101,102,103]},
        {id: 2, name: "niko", bookIds: [104,105]}
    ],
    books: [
        {id:101, title: "book random", publishedYear: 2024, authorId: "1"},
        {id:102, title: "chronicles", publishedYear: 2001, authorId: "1"},
        {id:103, title: "cowboy", publishedYear: 2012, authorId: "1"},
        {id:104, title: "logitech", publishedYear: 1980, authorId: "2"},
        {id:105, title: "electricity", publishedYear: 1887, authorId: "2"}
    ]
};

export const resolvers = {
    Book: {
        author: (parent, args,context, info) => {
            console.log(parent);
            return data.authors.find( x => x.id === parent.authorId);
        },
    },
    Author: {
        books: (parent, args,context, info) => {
            return data.books.filter( book => parent.bookIds.includes(book.id));
        },
    }
    ,
    Query: {
        authors: (parent, args,context, info)=>{
            return data.authors;
        },
        books: (parent, args,context, info) =>{
            return data.books;
        }
    },
    Mutation: {
        addBook: (parent, args,context, info)=>{
            const newBook = {...args, id: data.books.length+1};
            data.books.push(newBook)
            return newBook;
        }
    }

}