import businessContainer from "../business/business.container";

const postEndpoint = (router) => {
    const url = '/api/posts';

    router.get(url, async (req, res, next) => {
        try {
            let result = await businessContainer.getPostManager().query();
            res.status(200).send(result);
        } catch (err) {
            console.log(err);
        }
    });

    router.post(url, async (req, res, next) => {
        try {
            let result = await businessContainer.getPostManager().createNewOrUpdate(req.body);
            res.status(200).send(result);
        } catch (err) {
            console.log(err);
        }
    });

    router.get('/api/post/:id', async (req, res, next) => {
        try {
            const postID = req.params.id;
            let result = await businessContainer.getPostManager().get(postID);
            if(result) res.status(200).send(result);
            else res.status(404).send('Post not found.');
        } catch (err) {
            console.log(err);
        }
    });

    router.put('/api/post/:id', async (req, res, next) => {
        try {
            const postID = req.params.id;
            let result = await businessContainer.getPostManager().createNewOrUpdate({ ...req.body, id: postID });
            res.status(200).send(result);
        } catch (err) {
            console.log(err);
        }
    });

    router.delete('/api/post/:id', async (req, res, next) => {
        try {
            const postID = req.params.id;
            let result = await businessContainer.getPostManager().drop(postID);
            if(result) res.status(200).send(result);
            else res.status(404).send('Post with specified ID not found.');
        } catch (err) {
            console.log(err);
        }
    });
};

export default postEndpoint;
