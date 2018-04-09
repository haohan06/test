
var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
        var contacts = document.getElementById("contacts")
        var list = document.getElementById("list")
        contacts.onclick = ()=>{
            var options = new ContactFindOptions();
            options.filter = "";
            options.multiple = true;
            var filter = ["name",];
            navigator.contacts.find(filter, onSuccess, onError, options);
        }
        function onSuccess(contacts) {
            for (var i = 0; i < contacts.length; i++) {
                var oli = document.createElement('li');
                oli.innerHTML =contacts[i].name.formatted;
                list.appendChild(oli)
            }
        };
        function onError(contactError) {
            alert('onError!');
        }
    }
};
