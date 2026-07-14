import Contact from "../models/contact.model.js";

export const userContact = async (req, res) => {
	try {
		const { name, email, message} = req.body;

		const contact = await Contact.create({
			name,
			email,
			message,
		});

		res.status(201).json( {success: true,
      message: "Message sent successfully",
      contact,
    });
	} catch (error) {
		console.log("Error in createProduct controller", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};