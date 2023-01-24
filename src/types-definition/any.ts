// the Any type - the most flexible type (the I don't care type)-  Avoid as much as possible 
const personWithAnyHobby: {
    name: string;
    age: number;
    hobbies: any;
  } = {
    name: "Klaus",
    age: 30,
    hobbies: "eat",
  };
  
  personWithAnyHobby.hobbies = ['eat','sleep']
  personWithAnyHobby.hobbies = ['eat',1]