const Contact = require("../database/models/contact");

exports.ContactUs = async(req,res)=>{
    try {
        const {firstName , lastName , budge , email , phon} = req.body;
        if(!firstName || !lastName || !budge || !email) return res.status(500).json({success:false,message:"all fields are required!"})
        const contact = await Contact({
            firstName,
            lastName,
            budge, 
            email,
            phon
        })
        await contact.save()
        res.status(200).json({success:true,message:"message sent successfully"})
    } catch (error) {
        res.status(404).json({success:false,message:error})
    }
}