const path = require('path');

getMessages = (req,res) => {
    
    res.render("messages", {
      title: "Messages to my Friends!",
      friend: "Elon Musk",
    });
    
    //res.sendFile(path.join(__dirname, '..', 'public', 'mountain.jpg'));
    //res.send('<ul><li>Hello Albert!</li></ul>');
};

postMessages = (req,res) => {
    console.log('Updating messages ....');
};

module.exports = {
    getMessages, 
    postMessages
}