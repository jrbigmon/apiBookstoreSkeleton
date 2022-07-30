const { Book } = require('../models');
const { Op } = require('sequelize');

const BookStoreController = {
    viewAllBooks: async (req, res) => {
        try {   
            const books = await Book.findAll();
       
            if (books.length > 0) {
                return res.status(200).json(books);
            }

            return res.status(404).json('Not found!');

        } catch (err) {
            new Error(err.message = "Server went out for coffee!");

            return res.status(500).json(err.message);
        }
    },

    viewBook: async (req, res) => {
        try {
            const { id } = req.params;
            
            const book = await Book.findByPk(id);
            
            if(book) {
                return res.status(200).json(book);
            }

            return res.status(404).json('Book not found!');

        } catch (err) {
            new Error(err.message = "Server went out for coffee!");

            return res.status(500).json(err.message);
        }

    },

    createBook: async (req, res) => {
        try {
            const {
                title, 
                numberPages,
                author, 
                releaseYear,
                inventory,
                launchCountry
            } = req.body;
            
            const book = {
                title, 
                numberPages,
                author, 
                releaseYear,
                inventory,
                launchCountry
            }
            
            const bookInDb = await Book.findOne({
                where: {
                    [Op.and]: [{ title }, { author }]
                }
            });
            
            if(bookInDb) {
                return res.status(404).json('Book exists!');
            }

            Book.create(book);

            return res.status(201).json(book);

        } catch (err) {
            new Error(err.message = "Server went out for coffee!");

            return res.status(500).json(err.message);
        }
    },

    updateBook: async (req, res) => {
        try {
            const { id } = req.params

            const {
                title, 
                numberPages,
                author, 
                releaseYear,
                inventory,
                launchCountry
            } = req.body;
            
            const book = {
                title, 
                numberPages,
                author, 
                releaseYear,
                inventory,
                launchCountry
            }

            const bookOld = await Book.findByPk(id);

            if(bookOld) {
                Book.update(book, { where: { id } });

                return res.status(200).json(book);
            }
            
            return res.status(404).json('Book not found!');

        } catch (err) {
            new Error(err.message = "Server went out for coffee!");

            return res.status(500).json(err.message);
        }
    },

    deleteBook: async (req, res) => {
        try {
            const { id } = req.params;

            const book = await Book.findByPk(id);

            if(book) {
                Book.destroy({ where: { id } });
                
                return res.status(204).json();
            }

            return res.status(404).json('Book not found!');

        } catch (err) {
            new Error(err.message = "Server went out for coffee!");

            return res.status(500).json(err.message);
        }
    }


}

module.exports = BookStoreController;
