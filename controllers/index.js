const mongoose = require("mongoose");
const Testimonials = require("../models/testimonials");
const Blogs = require("../models/blogs");
const Settings = require("../models/settings");
const CmsPages = require("../models/cmspages");
const NewsLetter = require("../models/newsletter");
const Enquiry = require("../models/enquiry");

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
    Settings.find({})
      .then((settings) => {
        return resolve(settings);
      })
      .catch((error) => {
        console.error("Error getting Settings:", error);
        return reject(error);
      });
  });
};

const getCmsPage = async (slug) => {
  return new Promise(async (resolve, reject) => {
    CmsPages.findOne({ slug: slug })
      .then((page) => {
        return resolve(page);
      })
      .catch((error) => {
        console.error("Error getting CmsPages:", error);
        return reject(error);
      });
  });
};

const saveNewsLetter = async (obj) => {
  const newData = new NewsLetter({
    name: obj.name,
    email: obj.email,
  });

  newData
    .save()
    .then((saved) => {
      return saved;
    })
    .catch((error) => {
      console.error("Error saving news letter:", error);
      return error;
    });
};

const saveEnquiry = async (obj) => {
  const newData = new Enquiry({
    name: obj.name,
    email: obj.email,
    subject: obj.subject,
    phone: obj.phone,
    enquiry: obj.enquiry,
  });

  newData
    .save()
    .then((saved) => {
      return saved;
    })
    .catch((error) => {
      console.error("Error saving enquiry:", error);
      return error;
    });
};

module.exports = {
  getTestimonialsList,
  getBlogsList,
  getSettings,
  getCmsPage,
  saveNewsLetter,
  saveEnquiry
};
