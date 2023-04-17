// const express = require('express');
// const router = express.Router();
// const Link = require('../models/taskList');

// // GET request to retrieve all links
// router.get('/links', async (req, res) => {
//   try {
//     const links = await Link.find();
//     return res.status(200).json(links);
//   } catch (err) {
//     console.error(err);
//     return res.status(500).send('Server Error');
//   }
// });

// // POST request to add a link
// router.post('/links', async (req, res) => {
//   const { description } = req.body;

//   try {
//     let link;
//     if (link) {
//       // Link exists, update description
//       link.description = description;
//       await link.save();
//       return res.status(200).json(link);
//     } else {
//       // Link doesn't exist, create new link and add description
//       link = new Link({ description });
//       await link.save();
//       return res.status(201).json(link);
//     }
//   } catch (err) {
//     console.error(err);
//     return res.status(500).send('Server Error');
//   }
// });

// // DELETE request to delete a link by ID
// router.delete('/links/:id', async (req, res) => {
//   const linkId = req.params.id;

//   try {
//     const link = await Link.findByIdAndDelete(linkId);

//     if (!link) {
//       return res.status(404).send('Link not found');
//     }

//     return res.status(200).json({ message: 'Link deleted successfully' });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).send('Server Error');
//   }
// });

// module.exports = router;
