const router = require('express').Router();

const { Posting, User, Comment } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const dbpostData = await Posting.findAll({
           include: [
            {
                model: Comment,
            },
            {
                model: User,
            }
           ],
        });

        const postings = dbpostData.map((posting) =>
        posting.get({ plain: true })
        );

        res.status(200).json({ postings });
    }   catch (err) {
        res.status(500).json(err);
    }
    
});


router.get('/:id', async (req, res) => {
    try {
        const posting = await Posting.findByPk(req.params.id, {
            indclude: [{
                    model: Comment,
                    include: [{
                            model: User
                        }]
                    }]
        });
    }
})