import userModal from "../modals/index.js";

export const userAuthentication = async (req, res) => {

    const { username, password } = req.body.requestparameters
    const data = await userModal.findOne({ mobile: username, password: password })

    res.status(200).json({
        "code": 200,
        "message": "Login Successful",
        "result": {
            "user_id": data.user_id,
            "name": data.name,
            "role": data.role,
            "mobile": data.mobile,
            "username": data.username,
            "status": data.status
        },
        "requestname": "login"
    })

}