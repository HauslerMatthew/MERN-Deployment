const Pet = require('../models/pet.model')

module.exports.findAllPets = (req, res) => {
    Pet.find()
        .then(allPets => {
            console.log("finding all Pets")
            res.json({ results: allPets })
        })
        .catch(err => res.json(err))
}

module.exports.createOnePet = (req, res) => {
    Pet.create(req.body)
        .then(newPet => {
            res.json({ results: newPet })
            console.log(`created the Pet: ${newPet}`)
        })
        .catch(err => res.json(err))
}

module.exports.findOnePet = (req, res) => {
    Pet.findOne({ _id: req.params.petid })
        .then(onePet => {
            res.json({ results: onePet });
            console.log("Found one Pet");
        })
        .catch(err => res.json(err))
}

module.exports.updatePet = (req, res) => {
    Pet.findOneAndUpdate(
        { _id: req.params.petid },
        req.body,
        {
            new: true, runValidators: true
        })
        .then(updatedPet => res.json({ results: updatedPet }))
        .catch(err => res.json(err))
}

module.exports.deletePet = (req, res) => {
    Pet.deleteOne({ _id: req.params.petid })
        .then(deletedResult => res.json({ results: deletedResult }))
        .catch(err => res.json(err))
}
