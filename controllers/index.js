const mongoose = require("mongoose");
const Testimonials = require("../models/testimonials");
const Blogs = require("../models/blogs");
const Settings = require('../models/settings');

// export const saveSession = async (obj) => {
//   const newSession = new PuppeteerSession({
//     sessionId: obj.id,
//     sessionData: obj,
//   });

//   newSession
//     .save()
//     .then((savedSession) => {
//       return savedSession;
//     })
//     .catch((error) => {
//       console.error("Error saving user:", error);
//       return error;
//     });
// };

const getBlogsList = async () => {
  return new Promise(async (resolve, reject) => {
    Blogs.find()
      .then((blogs) => {
        return resolve(blogs);
      })
      .catch((error) => {
        console.error("Error getting blogs:", error);
        return reject(error);
      });
  });
};

// export const updateSession = async (id, sessionData) => {
//   return new Promise(async (resolve, reject) => {
//     PuppeteerSession.findOneAndUpdate(
//       { sessionId: id },
//       { sessionData: sessionData }
//     )
//       .then((sessionData) => {
//         return resolve(sessionData);
//       })
//       .catch((error) => {
//         console.error("Error saving user:", error);
//         return reject(error);
//       });
//   });
// };

// export const savePuppeteerSession = async (id, obj, page, browser) => {
//   return new Promise(async (resolve, reject) => {
//     const newSession = new PuppeteerInstance({
//       sessionId: id,
//       puppeteerData: obj,
//       page: page,
//       browser: browser
//     });

//     newSession
//       .save()
//       .then((savedSession) => {
//         return resolve(savedSession);
//       })
//       .catch((error) => {
//         console.error("Error saving user:", error);
//         return reject(error);
//       });
//   });
// };

const getTestimonialsList = async () => {
  return new Promise(async (resolve, reject) => {
    Testimonials.find()
      .then((testimonials) => {
        return resolve(testimonials);
      })
      .catch((error) => {
        console.error("Error getting testimonials:", error);
        return reject(error);
      });
  });
};

const getSettings = async () => {
    return new Promise(async (resolve, reject) => {
        Settings.find()
        .then((testimonials) => {
          return resolve(testimonials);
        })
        .catch((error) => {
          console.error("Error getting Settings:", error);
          return reject(error);
        });
    });
  };

module.exports = {
    getTestimonialsList,
    getBlogsList,
    getSettings
}
