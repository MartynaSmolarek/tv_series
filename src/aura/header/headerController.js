/**
 * Created by martyna.smolarek on 08.08.2018.
 */
({
    // przycisk do dodawania nowej tv serie
    addNew : function (component, event, helper) {
         //tu powinno otworzyc sie 'nowe okno' w ktorym bylby formularz do wypelnienia. potem tam znow klik zeby zrobic update
         //component.set("v.hideNewSerie", false);
         component.set("v.hideAll", true);
         console.log("jestem w addNew");

    },



    // pole do wyszukiwania
    handleKeyUp: function (cmp, evt) {
        var isEnterKey = evt.keyCode === 13;
        if (isEnterKey) {
            var queryTerm = cmp.find('enter-search').get('v.value');
            alert('Searched for "' + queryTerm + '"!');
        }
    },

       /* searchKeyChange: function(component, event) {
                window.location.hash = event.target.value;
        },

        locationChange: function(component, event) {
                var token = event.getParam("token") || "";
        		component.set("v.searchKey", token);
        },

        clearText: function(component) {
                window.location.hash = "";
        }*/
})