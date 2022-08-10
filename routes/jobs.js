const express = require('express')
const router = express.Router()

// to import all CRUD functions
const {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
} = require('../controllers/jobs')

// structure for REST API
router.route('/').post(createJob).get(getAllJobs)
router.route('/:id').get(getJob).delete(deleteJob).patch(updateJob)

// can also use this structure
// router.post('/register', register)
// router.post('/login', login)




module.exports = router