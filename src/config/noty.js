import Noty from "noty";

//noty js config to show noyifications
export const showNotification = (text)=> {
     new Noty({
         text : text,
         layout : "bottomRight",
         theme : "nest",
         type : "alert",
         timeout : 750,
     }).show();
};