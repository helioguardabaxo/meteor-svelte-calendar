import { Template } from 'meteor/templating';
import './main.html';
import MyComponent from './Components/MyComponent.svelte';
import Calendar from './Components/Calendar.svelte';


Template.MyTemplate.helpers({
  MyComponent: () => MyComponent,
});


Template.Calendar.helpers({
  Calendar: () => Calendar,
});
