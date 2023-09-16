const router = require('express').Router();
let Pharmacy = require('../models/pharmacy.model');

router.route('/').get((req, res) => {
    Pharmacy.find()
    .then(pharmacies => res.json(pharmacies))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const location = req.body.location;
    const drugs = req.body.drugs;

    const newPharmacy = new Pharmacy({
        name,
        location,
        drugs
    });

    newPharmacy.save()
    .then(() => res.json('Pharmacy added!'))
    .catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;