var context = require.context('./test', true, /\w*\.\w*.jsx|\w*\.\w*.js/g); //make sure you have your directory and regex test set correctly!
context.keys().forEach(context);
