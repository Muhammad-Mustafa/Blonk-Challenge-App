import {REGISTER_USER} from '../actions/globalAction';

const initialState = {
  jobPost: [
    {
      id: 1,
      title: 'Outbound Sales Executive',
      description: `U.S. based firm with offices in the US and Pakistan. We are looking for 15 enthusiastic Sales Executive with prior experience in handling Sales for US based campaigns.`,
      postedBy: 'Mustafa',
    },
    {
      id: 2,
      title: 'Data Entry Operator',
      description: ` Responsible to gather the required information from multiple platforms and websites by following the process of downloading, formatting and conversion of content`,
      postedBy: 'Mustafa',
    },
    {
      id: 3,
      title: 'Admin Executive',
      description: `We are looking for a competent Executive Administrative Assistant to provide personalized secretarial and administrative support in a well-organized and timely manner.`,
      postedBy: 'Mustafa',
    },
    {
      id: 4,
      title: 'Junior Officer HR/Admin',
      description: `Maintains database by entering new and updated customer and account information.Prepares source data for computer entry by compiling and sorting information.`,
      postedBy: 'Mustafa',
    },
    {
      id: 5,
      title: 'Inventory Executive',
      description: `Oversee inventory and supply chain management according to company guidelines.Perform critical inventory tasks to ensure the correct amount of items are in stock.`,
      postedBy: 'Mustafa',
    },
    {
      id: 6,
      title: 'Outbound Sales Executive',
      description: `U.S. based firm with offices in the US and Pakistan. We are looking for 15 enthusiastic Sales Executive with prior experience in handling Sales for US based campaigns.`,
      postedBy: 'Mustafa',
    },
    {
      id: 7,
      title: 'Data Entry Operator',
      description: ` Responsible to gather the required information from multiple platforms and websites by following the process of downloading, formatting and conversion of content`,
      postedBy: 'Mustafa',
    },
    {
      id: 8,
      title: 'Admin Executive',
      description: `We are looking for a competent Executive Administrative Assistant to provide personalized secretarial and administrative support in a well-organized and timely manner.`,
      postedBy: 'Mustafa',
    },
    {
      id: 9,
      title: 'Junior Officer HR/Admin',
      description: `Maintains database by entering new and updated customer and account information.Prepares source data for computer entry by compiling and sorting information.`,
      postedBy: 'Mustafa',
    },
    {
      id: 10,
      title: 'Inventory Executive',
      description: `Oversee inventory and supply chain management according to company guidelines.Perform critical inventory tasks to ensure the correct amount of items are in stock.`,
      postedBy: 'Mustafa',
    },
  ],
  users: [{name: 'abc', email: 'mustafa@gmail.com', password: '111111'}],
};

export default function globalReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        users: [
          ...state.users,
          {
            name: action.payload.name,
            email: action.payload.email,
            password: action.payload.password,
          },
        ],
      };
    default:
      return state;
  }
}
