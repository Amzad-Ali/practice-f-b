const express = require('express');
const router = express.Router();
const {getDocs,createDocs,updateDocs,deleteDocs,createDocsAndUserId,getUserAndDocsData} = require('../controller/Praccontroller');

router.post('/create',createDocs)
router.get('/getdata',getDocs);
router.put('/updatedata/:id',updateDocs);
router.delete('/deletedata/:id',deleteDocs);
router.post('/docsAndUser',createDocsAndUserId);
router.get('/docsanduser/:id',getUserAndDocsData);

module.exports = router;

