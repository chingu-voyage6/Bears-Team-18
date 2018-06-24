require('dotenv').config();
const { findUsers, createAdmin } = require('../lib/mongoose-helper');
const mongoose = require('mongoose');

async function run() {
  console.log('Connecting to Database.....');
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected To Database');
  } catch (e) {
    throw new Error('Could not connect to Database');
  }
  if (
    process.env.DEFAULT_ADMIN_USERNAME &&
    process.env.DEFAULT_ADMIN_PASSWORD
  ) {
    console.log('Default admin credentials present');
    let admins = await findUsers({ permission: 'admin' });
    if (admins.length > 0) {
      console.log('Admin already created');
    } else {
      console.log('Creating admin');
      try {
        await createAdmin(
          process.env.DEFAULT_ADMIN_USERNAME,
          process.env.DEFAULT_ADMIN_PASSWORD
        );
        console.log('Admin created');
      } catch (e) {
        throw new Error(`Error creating admin ${e}`);
      }
    }
  } else {
    console.log('Default admin credentials were not provided');
  }
}

run();
