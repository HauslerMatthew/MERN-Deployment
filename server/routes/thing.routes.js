const PetController = require("../controllers/pet.controller")

module.exports = app => {
    app.get("/api/pets", PetController.findAllPets)
    app.post("/api/pets", PetController.createOnePet)
    app.get("/api/pets/:petid", PetController.findOnePet)
    app.put("/api/pets/:petid", PetController.updatePet)
    app.delete("/api/pets/:petid", PetController.deletePet)
}
