import API, { graphqlOperation } from '@aws-amplify/api';
import PubSub from '@aws-amplify/pubsub';
import { createTodo } from './graphql/mutations';
import { listTodos } from './graphql/queries';

import awsconfig from './aws-exports';
API.configure(awsconfig);
PubSub.configure(awsconfig);

async function createNewTodo() {
  const todo = { name: "Use AppSync" , description: "Realtime and Offline"}
  return await API.graphql(graphqlOperation(createTodo, { input: todo }))
}

const MutationButton = document.getElementById('MutationEventButton');
const MutationResult = document.getElementById('MutationResult');
const QueryResult = document.getElementById('QueryResult');

MutationButton.addEventListener('click', (evt) => {
  createNewTodo().then( (evt) => {
      getData();
  })
});

async function getData() {
  QueryResult.innerHTML = `Likes: `;
  API.graphql(graphqlOperation(listTodos)).then((evt) => {
    QueryResult.innerHTML += evt.data.listTodos.items.length;
  })
}

getData();