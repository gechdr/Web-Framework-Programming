const db = require("../models");
const { Op } = require("sequelize");

module.exports = {
  get: async function (req, res) {
    try {
      const q = req.query.q ? req.query.q : "";
      const contacts = await db.Contact.findAll({
        where: {
          [Op.or]: [
            {
              name: {
                [Op.substring]: q,
              },
            },
            {
              phone: {
                [Op.substring]: q,
              },
            },
          ],
        },
      });
      // const delay = Math.random() * 3000;
      const delay = 0;
      setTimeout(() => res.status(200).send({ delay, q, contacts }), delay);
    } catch (err) {
      return res.status(500).send(err);
    }
  },
  insert: async function (req, res) {
    try {
      const contact = await db.Contact.create({
        name: req.body.name,
        phone: req.body.phone,
        favorite: req.body.favorite,
      });
      return res.status(200).send(contact);
    } catch (err) {
      return res.status(500).send(err);
    }
  },
  delete: async function (req,res) {
    try {
      const contact = await db.Contact.findByPk(req.params.id);
      if (contact) {
        await contact.destroy();
        return res.status(200).send(contact);
      } else {
        return res.status(404).send({ msg: "not found" });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).send(err);
    }
  }
};
