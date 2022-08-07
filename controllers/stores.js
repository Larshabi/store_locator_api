const Store = require('../models/store');

const StoreController = {
    async getStores(req, res, next) {
        try {
            const store = await Store.find();
            return res.status(200).json({
                success: true,
                count: store.length,
                store
            })
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: 'Server error' })
        }
    },
    async addStore(req, res) {
        try {
            const store = await Store.create(req.body)
            return res.status(201).json({
                success: true,
                store
            })
        } catch (err) {
            console.log(err);
            if (err.code === 11000) {
                return res.status(400).json({
                    error: 'Address Id already exists'
                })
            }
            res.status(500).json({ error: 'Server error' })
        }
    }
}

module.exports = StoreController;