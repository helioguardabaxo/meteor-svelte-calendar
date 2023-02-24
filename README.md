# meteor-svelte-calendar
Example usage for calendar component made with Svelte in a Meteor + Blaze App

This example uses Calendar component: https://github.com/vkurko/calendar

### Steps to reproduce:
- meteor create --blaze meteor-svelte-calendar --prototype
- cd meteor-svelte-calendar/
- Install https://github.com/meteor-svelte/blaze-integration: 
  - meteor add svelte:blaze-integration
- meteor add svelte:compiler
- meteor npm install svelte
- Install Calendar https://github.com/vkurko/calendar dependencies:
  - npm install --save-dev @event-calendar/core
  - npm install --save-dev @event-calendar/time-grid
  - npm install --save-dev @event-calendar/list
  - npm install --save-dev @event-calendar/day-grid
  - npm install --save-dev @event-calendar/resource-time-grid
- Run Meteor:
  - meteor

