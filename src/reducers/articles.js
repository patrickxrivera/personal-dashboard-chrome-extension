import { handleActions } from 'redux-actions';

const initialState = {
  all: [
    {
      title: 'How to be a Manager – A step-by-step guide to leading a team',
      descendants: 80
    },
    {
      title: `Caltech glassblower's retirement has scientists sighing (2016)`,
      descendants: 79
    },
    {
      title: 'Archive.org and California to start a data sharing and preservation project',
      descendants: 13
    },
    {
      title: 'Deploying geographically distributed services on Kubernetes Engine',
      descendants: 0
    },
    {
      title: 'Project Capillary: End-to-end encryption for push messaging, simplified',
      descendants: 17
    }
  ]
};

export default handleActions(
  {
    SAVE_ALL: (state, action) => ({
      ...state,
      all: action.payload
    })
  },
  initialState
);

export const getAllArticles = (state) => state.articles.all;
