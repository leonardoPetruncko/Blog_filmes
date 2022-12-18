const create = (req, res) => {
    const user = req.body
    const { name, username, email, password, avatar, background } = req.body

    if (!name || !username || !email || !password || !avatar || !background) {
        res.status(400).send({message: "Submit all fields for Registration"})
    }
        res.status(201).send({
            message: "User created succesfully",
            user : {
                name,
                username,
                email,
                password,
                avatar,
                background,
            },
        })
}

module.exports = { create }