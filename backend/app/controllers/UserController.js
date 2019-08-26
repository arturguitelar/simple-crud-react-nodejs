const { User } = require('../models');

module.exports = {

    index(req, res) {
        User.findAll({})
            .then(users => res.json({
                error: false,
                data: users
            }))
            .catch(error => res.json({
                error:true,
                data: [],
                error: error
            }));
    },

    create(req, res) {
        const { name, username } = req.body;
        User.create({
            name, username
        })
        .then(user => res.status(201).json({
            error: false,
            data: user,
            message: "new user has been created"
        }))
        .catch(error => res.json({
            error:true,
            data: [],
            error: error
        }));
    },

    update(req, res) {
        const user_id = req.params.id;

        const { name, username } = req.body;

        User.update({
            name, username
        }, {
            where: {
                id: user_id
            }
        })
        .then(user => res.status(201).json({
            error: false,
            data: user,
            message: 'user has been updated'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
    },

    destroy(req, res) {
        const user_id = req.params.id;

        User.destroy({ where: {
            id: user_id
        }})
        .then(status => res.status(201).json({
            error: false,
            message: 'user has been deleted'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
    }
}