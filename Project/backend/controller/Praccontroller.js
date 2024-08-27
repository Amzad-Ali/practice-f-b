const Docs = require('../schemas/docsSchema')
const User = require('../schemas/User.js')

const createDocs = async (req, res) => {
  try {
    // Validate request body here if needed
    console.log('req.body==>', req.body);
    const newDocs = await Docs.create(req.body);

    res.status(201).json({
      status: "success",
      data: newDocs
    });
  } catch (error) {
    console.error('Error creating document:', error);
    res.status(500).json({
      status: 'error',
      message: 'Could not create document'
    });
  }
}

const getDocs = async (req, res) => {
  try {
    const getData = await Docs.find();

    res.status(201).json({
      status: 'Success',
      results: Docs.length,
      data: {
        getData
      }
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error
    })
  }
}

const updateDocs = async (req, res) => {
  const { id } = req.params;
  try {
    // Find the document by ID and update it
    const updatedDocument = await Docs.findByIdAndUpdate(id, req.body,
      { new: true, runValidators: true }
    );

    if (!updatedDocument) {
      return res.status(404).send('Document not found');
    }

    res.status(200).json(updatedDocument);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteDocs = async (req, res) => {
  const documentId = req.params.id;

  try {
    // Find the document by ID and delete it
    const deletedDocument = await Docs.findByIdAndDelete(documentId);

    if (!deletedDocument) {
      return res.status(404).json({ error: 'Document not found' });
    }

    res.status(200).json({ message: 'Document deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const createDocsAndUserId = async (req, res) => {
  try {
    // Extract user data from the request body
    const userData = req.body.author;
    const docData = req.body;

    // Create a new user
    const newUser = new User(userData);
    await newUser.save();

    // Use the new user's ObjectId as the author field
    docData.author = newUser._id;

    // Create the document with the user as the author
    const newDocs = await Docs.create(docData);

    res.status(201).json({
      status: "success",
      data: newDocs
    });
  } catch (error) {
    console.error('Error creating document:', error);
    res.status(500).json({
      status: 'error',
      message: 'Could not create document'
    });
  }
}

const getUserAndDocsData = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Docs.findById(id).populate('author');
    res.status(201).json({
      status: 'success',
      message: 'data fetched successfully',
      data: data
    })
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: 'internal server error'
    })
  }
}

module.exports = {
  createDocs,
  getDocs,
  updateDocs,
  deleteDocs,
  createDocsAndUserId,
  getUserAndDocsData
};



