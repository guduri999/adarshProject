import userModal from "../modals/index.js";

export const userAuthentication = async (req, res) => {

    const data = await userModal.findOne({ userName: req.body.userName, password: req.body.password })

    res.status(200).json({
        "response": "success",
        data: (data) ? data : "credentials not valid"
    })

}