require('dotenv').config();
const { Matter } = require('../../database/models/index');
const sequelize = require('sequelize');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

//API

const identifyById = async (req,res) => {
    const id = req.params.id

    console.log('identificando materia por el id: '+id);

    let matter = await Matter.findOne({ 
        attributes: ['id', 'name', 'quota', 'registered', 'contents']
    });

    console.log(matter);

    if (matter) 
        return res.status(200).json({'status':200, matter})
    else 
        return res.status(404).json({'status':404, 'msg':'Materia no encontrada'})
};


const search = async (req,res) => {
    let pageAsNumber = Number.parseInt(req.query.page);
    let page = 0, size = 10;
    
    if (!Number.isNaN(pageAsNumber)) 
        page = pageAsNumber;
    
    console.log('obteniendo el listado de materias.....');

    let matters = await Matter.findAndCountAll({
        limit: size, 
        offset: page * size,
        attributes: ['id', 'name', 'quota', 'registered', 'updatedAt', 'createdAt'],
    });

    console.log(matters);

    return res.status(200).json({
        'status':200, 
        content: matters.rows,
        totalPages: Math.ceil(matters.count / size),
        page,
    });
};


const register = async (req,res) => {

    let params = req.body;

    console.log(params);

    console.log('creando materia.....');

    try {
        let matter = await Matter.create(params)

        if (matter) 
        return res.status(200).json({'status':200, matter, 'msg':'Creado correctamente'});
    else 
        return res.status(404).json({'msg':'No se recibieron los datos'});  

    } catch (error) {
        console.log(error);
    }
};


const destroy = async (req,res) => {
    const id = req.params.id;

    console.log('identificando materia por el id: '+id);

    let matter = await Matter.findOne({ 
        where: { id: id } 
    });

    if (!matter)
        return res.status(404).json({msg:"Materia no encontrada"});
    else {
        console.log(matter);
        console.log('eliminando la amateria de la bd.....');
        matter.destroy().then(matter => {
        res.status(200).json({status:200,msg:"operation complete"});
        })
    }
};

const edit = async(req,res) => {
    const id = req.params.id;
    const body = req.body;

    let matter = await Matter.findOne({ 
        where: { id: id } 
    });

    if(!matter) {
        console.log('No se edito');
    } else {
        try {
            matter.set({...body});
            await matter.save();
            return res.status(200).json({msg:"Subject Editado"});
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Error. Subject No Editado"});
        }
    }
};

module.exports = {
    identifyById,
    search,
    register,
    destroy,
    edit
};