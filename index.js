import { program } from "commander";
import Contacts from "./contacts.js";

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const options = program.opts();

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await Contacts.listContacts();
      console.table(contacts);
      break;

    case "get":
      // ... id
      const contact = await Contacts.getContactById(id);
      console.log(contact);
      break;

    case "add":
      // ... name email phone
      const newContact = await Contacts.addContact(name, email, phone);
      console.log(newContact);
      break;

    case "remove":
      // ... id
      const deletedContact = await Contacts.removeContact(id);
      console.log(deletedContact);
      break;
    case "update":
      const updatedContact = await Contacts.updateContact(id, updateContact);
      console.log(updatedContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);
