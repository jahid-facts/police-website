const express = require('express');
const { getDirectoryCategories,saveDirectoryCategories,getSingleDirectoryCategories,updateDirectoryCategories,deleteDirectoryCategories } = require('../controllers/directoryCategoriesController');
const { getSubDirectoryCategories,saveSubDirectoryCategories,getSingleSubDirectoryCategories,updateSubDirectoryCategories,deleteSubDirectoryCategories } = require('../controllers/directorySubCategoriesController');
const { getDirectory,saveDirectory,getSingleDirectory,updateDirectory,deleteDirectory } = require('../controllers/directoryController');
const router = express.Router();
// directory category
router.get('/directory-categories', getDirectoryCategories);
router.get('/directory-categories/:id', getSingleDirectoryCategories);
router.put('/update-directory-categories/:id', updateDirectoryCategories);
router.delete('/delete-directory-categories/:id', deleteDirectoryCategories);
router.post('/save-directory-categories', saveDirectoryCategories);
// directory sub category
router.get('/directory-sub-categories', getSubDirectoryCategories);
router.get('/directory-sub-categories/:id', getSingleSubDirectoryCategories);
router.put('/update-directory-sub-categories/:id', updateSubDirectoryCategories);
router.delete('/delete-directory-sub-categories/:id', deleteSubDirectoryCategories);
router.post('/save-directory-sub-categories', saveSubDirectoryCategories);
// directory
router.get('/directory', getDirectory);
router.get('/directory/:id', getSingleDirectory); 
router.put('/update-directory/:id', updateDirectory);
router.delete('/delete-directory/:id', deleteDirectory);
router.post('/save-directory', saveDirectory);

module.exports = router;