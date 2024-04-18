// зроби імпорт модулів fs (у версії, яка працює з промісами - fs/promises) і path для роботи з файловою системою.
// ініціалізація модуля з промісами
// const fs = require("fs").promises;

import * as fs from "node:fs/promises";
import path from "node:path";

const contactsPath = path.resolve("db", "contacts.json");

// const contactsPath = path.join(__dirname, "contacts.json");

console.log("path:", contactsPath);

// export async function readContacts() {
//   try {
//     const data = await fs.readFile(contactsPath, "utf-8");
//     return JSON.parse(data);
//   } catch (error) {
//     console.error("Error reading contacts:", error);
//     throw error;
//   }
// }

// export async function writeContacts(contacts) {
//   try {
//     const json = JSON.stringify(contacts);
//     await fs.writeFile(contactsPath, json);
//   } catch (error) {
//     console.error("Error writing contacts:", error);
//     throw error;
//   }
// }
