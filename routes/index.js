const controller = require('../controllers/index')

module.exports = route = (app) =>{
    app.get('/', (req, res) => {
        res.send('Hello, Express!');
    });

    app.get('/api/blog-list', async (req, res) => {
        try{
            const result = await controller.getBlogsList();
            res.send({status: true, data: result});
        }catch (err){
            console.error("Error:", err);
            res.send({status: false, data: err});
        }
    });

    app.get('/api/get-testimonial-list', async (req, res) => {
        try{
            const result = await controller.getTestimonialsList();
            res.send({status: true, data: result});
        }catch (err){
            console.error("Error:", err);
            res.send({status: false, data: err});
        }
    });

    app.get('/api/sitesetting', async (req, res) => {
        try{
            const result = await controller.getSettings();
            res.send({status: true, data: result});
        }catch (err){
            console.error("Error:", err);
            res.send({status: false, data: err});
        }
    });

    app.get('/api/getCms/:slug', async (req, res) => {
        try{
            const result = await controller.getCmsPage(req.params.slug);
            res.send({status: true, data: result});
        }catch (err){
            console.error("Error:", err);
            res.send({status: false, data: err});
        }
    });

    app.post('/api/newsletter', async (req, res) => {
        try{
            const result = await controller.saveNewsLetter(req.body);
            res.send({status: true, data: result, message: 'Saved'});
        }catch (err){
            console.error("Error:", err);
            res.send({status: false, data: err});
        }
    });

    app.post('/api/enquiry', async (req, res) => {
        try{
            const result = await controller.saveEnquiry(req.body);
            res.send({status: true, data: result, message: 'Saved'});
        }catch (err){
            console.error("Error:", err);
            res.send({status: false, data: err});
        }
    });
}