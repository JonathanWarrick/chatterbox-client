// YOUR CODE HERE:
// TODO:
	// Assign server 
	// Create functions called by listeners
	// Create initialize method
	// Wrap listeners in DOM ready function


var app = {
	// app is our client-side chat-room interface.
	// here we will store our default values:

	// max number of messages to display on the screen
	var messagesToDisplay = 25;

	// default username and chat-room
	var defaultUsername = "anonymous";
	var defaultRoomname = "lobby";

	// location to Parse server where chat messages are sent and received
	var server = // TODO
};

// SET UP EVENT HANDLERS TO LISTEN FOR TRIGGERS
// Listen for user to submit messages (either via submit button or via pressing enter)
// TODO: Need to define function



// Cache jQuery elements for certain IDs for efficiency
app.$main = $("#main");



// Main functionality

// Send message
app.addMessage = function(message) {

};

// Add a friend
app.addFriend = function() {

};

// Fetch messages from server
app.fetch = function() {

};





