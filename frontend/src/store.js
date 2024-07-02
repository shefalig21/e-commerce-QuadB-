import { createStore, combineReducers } from 'edux';

const initialState = {
  testimonials: [
    {
      quote: "This product has changed my life!",
      author: "John Doe",
      image: "https://via.placeholder.com/50x50"
    },
    {
      quote: "I'm so impressed with the quality!",
      author: "Jane Smith",
      image: "https://via.placeholder.com/50x50"
    },
    {
      quote: "Best purchase I've ever made!",
      author: "Bob Johnson",
      image: "https://via.placeholder.com/50x50"
    }
  ],
  newsletterEmail: ''
};

const testimonialsReducer = (state = initialState.testimonials, action) => {
  switch (action.type) {
    case 'NEXT_TESTIMONIAL':
      return state.slice(1).concat(state.slice(0, 1));
    case 'PREV_TESTIMONIAL':
      return state.slice(-1).concat(state.slice(0, -1));
    default:
      return state;
  }
};

const newsletterReducer = (state = initialState.newsletterEmail, action) => {
  switch (action.type) {
    case 'UPDATE_NEWSLETTER_EMAIL':
      return action.email;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  testimonials: testimonialsReducer,
  newsletterEmail: newsletterReducer
});

export default createStore(rootReducer);