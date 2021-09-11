const { User } = require('../../database/models')

module.exports = {
    async listUsers(req, res) {
        try {
            const users = await User.findAndCountAll({
                attributes: ["id","name", "email"]
            })
            var userlist = users.rows.map(function(user){
                user.setDataValue("Detalle","http://127.0.0.1:3050/api/users/"+user.id)
                return user
 
            })

            res.status(200).json({
                meta: {
                    status: "success",
                    total: users.count
                },
                data: {
                    users: 
                        userlist,
                }
            })
        } catch(err) {
            res.status(500).json({
                meta: {
                    status: "error"
                },
                error: {
                    msg: "Cant connect to database",
                    err
                }
            })
        }
    },

    async detailUser(req, res) {
        const user = await User.findByPk(req.params.id)   
        
        if (!user) {
            res.status(404).json({
                meta: {
                    status: "not_found",
                },
            })
            return
        }
        
        
        const newUser =  {
            id: user.id,
            name: user.name,
            image: "http://127.0.0.1:3050"+user.image
        }
        


        res.status(200).json({
            meta: {
                status: "success",
            },
            data: {
                newUser,
            }
        })
    },

    async createUser(req, res) {
        const { name, email, image, tel, password1, password2 } = req.body

        const user = await User.create({
            name, 
            email, 
            image,
            tel,
            password1,
            password2
        })

        res.status(201).json({
            meta: {
                status: "success",
            },
            data: {
                user,
            }
        })
    },

    async updateUser(req, res) {
        const user = await User.findByPk(req.params.id)

        if (!user) {
            res.status(404).json({
                meta: {
                    status: "not_found",
                },
            })
            return
        }

        const {  name, email, image, tel, password1, password2 } = req.body

        const userUpdated = await user.update({
            name, 
            email, 
            image,
            tel,
            password1,
            password2
        })

        res.status(201).json({
            meta: {
                status: "success",
            },
            data: {
                user: userUpdated,
            }
        })
    },

    async destroyUser(req, res) {
        const user = await User.findByPk(req.params.id)

        if (!user) {
            res.status(404).json({
                meta: {
                    status: "not_found",
                },
            })
            return
        }

        await user.destroy()

        res.status(200).json({
            meta: {
                status: "success",
            },
        })
    }
}