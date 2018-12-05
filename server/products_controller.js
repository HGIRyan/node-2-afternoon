module.exports = {
    // create, getOne, getAll, update, and delete
    

    create: (req, res) => {
        const dbInstance = req.app.get('db')
        const {name, description, price, image_url} = req.body
        dbInstance.create_product([name, description, price, image_url])
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: 'Oops somethings done screwed up now' }, console.log(err))
            })
    },
    getOne: (req, res) => {
        const dbInstance = req.app.get('db');
        console.log('got here fam')
        dbInstance.read_product(req.params.id)
            .then((product) => res.status(200).send(product))
            .catch(err => {
                res.status(500).send({ errorMessage: 'You done messed up now A-A-Ron' }, console.log(err))
            })
    },
    getAll: (req, res) => {
        const dbInstance = req.app.get('db');
        // console.log('got here too')
        dbInstance.read_products()
            .then((product) => res.status(200).send(product))
            .catch(err => {
                res.status(500).send({ errorMessage: 'Come On dude, its so Easy Now you gotta mess up now and stuff??' }, console.log(err))
            })
    },
    Update: (req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.update_product([req.params.id, req.query.desc])
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: 'Come on man' }, console.log(err))
            })
    },
    delete: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.delete_product(req.params.id)
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: 'You suck' }, console.log(err))
            })
    }

};