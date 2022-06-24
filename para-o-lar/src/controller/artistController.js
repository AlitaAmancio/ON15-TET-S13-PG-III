const artistSchema = require("../models/artistSchema");

const getAll = async (req, res) => {
    try {
        const allArtists = await artistSchema.find();
        res.status(200).send(allArtists);
    } catch (error) {
        console.error(err)
    }
}

const findById = async (request, response) => {
    try {
        const findArtist = await artistSchema.findById(request.params.id)
        response.status(200).json(findArtist)
    } catch (error) {
        response.status(500).json({message:error.message})
    }
}

const createArtist = async (req, res) => {
    try {
        if(!req.body.artistName || !req.body.birthName) {
            res.status(404).send({
                "message": "Os campos obrigatórios precisam ser preenchidos",
                "statusCode": 404
            })
        }

        const newArtist = new artistSchema({
            artistName: req.body.artistName,
            birthName: req.body.birthName,
            category: req.body.category,
            birthday: req.body.birthday,
            numberOfAlbums: req.body.numberOfAlbums
        });

        const savedArtist = await newArtist.save();

        if(savedArtist) {
            res.status(201).send({
                "message": "Artista criado com sucesso!",
                savedArtist
            })
        }
    } catch (error) {
        console.error(error)
    }
}

const updateArtist = async (req, res) => {
    try {
        const findArtist = await artistSchema.findById(req.params.id)
        console.log("Artista Encontrado", findArtist);

        if(!findArtist){
            res.status(404).send({
                "message": "Artista não encontrado",
                "statusCode": 404
            })
        }

        findArtist.artistName = req.body.artistName || findArtist.artistName
        findArtist.birthName = req.body.birthName || findArtist.birthName
        findArtist.category = req.body.category || findArtist.category
        findArtist.birthday = req.body.birthday || findArtist.birthday
        findArtist.numberOfAlbums = req.body.numberOfAlbums || findArtist.numberOfAlbums

        const savedArtist = await findArtist.save();

        res.status(200).send({
            "message": "Artista atualizado com sucesso!",
            savedArtist
        })

    } catch (error) {
        console.error(error)
    }
};

const deleteArtist = async (req, res) => {
    try {
        const deletedArtist = await artistSchema.findByIdAndDelete(req.params.id)

        res.status(200).send({
            "message": "Artista deletado com sucesso",
            deletedArtist
        })
    } catch (error) {
        console.error(error);
    };
};





module.exports = {
    getAll,
    findById,
    createArtist,
    updateArtist,
    deleteArtist
}