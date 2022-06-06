const {Pet,Photo} = require('../models/models')
const uuid = require('uuid')
const path = require('path')

class PetController{
    async getAll(req,res){
        const pets = await Pet.findAll()
        return res.json(pets)
    }

    async getOne(req,res){
        let {id} = req.params
        const pet = await Pet.findAll({where: {
            id:id
        }})
        return res.json(pet)
    }

    async createPet(req,res){
        const {name,age,type} = req.body
        const pet = await Pet.create({name,age,type})
        if(req.files){
            const {photo} = req.files
            const fileName = uuid.v4() + '.jpg'
            photo.mv(path.resolve(__dirname,'..','static',fileName))
            const petPhoto = await Photo.create({img:fileName,petId:pet.id})
        }
        return res.json(pet)
    }

    async deletePet(req,res){
        let {id} = req.params
        await Photo.destroy({where:{petId:id}})
        await Pet.destroy({where:{id:id}})
        return res.json({message:'ok'})
    }

    async updatePet(req,res){
        const {id} = req.params
        const {photo} = req.files
        const fileName = uuid.v4() + '.jpg'
        photo.mv(path.resolve(__dirname,'..','static',fileName))
        const petPhoto = await Photo.create({img:fileName,petId:id})
        const pet = await Pet.findOne({where:{id:id}})
        return res.json(pet)
    }
}

module.exports = new PetController()