const router = require("express").Router();
const contactscontroller = require("../controller/contacts");

router.get("/", (req, res) => {
  /* #swagger.tags = ['Contacts']
     #swagger.description = 'Get all contacts'
  */
  contactscontroller.getAll(req, res);
});

router.get("/:id", (req, res) => {
  /* #swagger.tags = ['Contacts']
     #swagger.description = 'Get a contact by id'
  */
  contactscontroller.getSingle(req, res);
});

router.post("/", (req, res) => {
  /* #swagger.tags = ['Contacts']
   #swagger.description = 'Create a new contact'
   #swagger.parameters['body'] = {
     in: 'body',
     description: 'Contact object',
     required: true,
     schema: { $ref: '#/definitions/Contact' }
   }
   #swagger.responses[201] = {
     description: 'Contact created',
     schema: { id: "60f7ad2a2c8b9c6d2f1f7b3a" }
   }
  */
  contactscontroller.createContact(req, res);
});

router.put("/:id", (req, res) => {
  /* #swagger.tags = ['Contacts']
   #swagger.description = 'Replace an existing contact'
   #swagger.parameters['id'] = { in: 'path', required: true, type: 'string' }
   #swagger.parameters['body'] = {
     in: 'body',
     description: 'Updated contact object',
     required: true,
     schema: { $ref: '#/definitions/Contact' }
   }
  */
  contactscontroller.updateContact(req, res);
});

router.delete("/:id", (req, res) => {
  /* #swagger.tags = ['Contacts']
     #swagger.description = 'Delete a contact by id'
  */
  contactscontroller.deleteContact(req, res);
});

module.exports = router;
