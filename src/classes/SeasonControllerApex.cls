/**
 * Created by martyna.smolarek on 10.08.2018.
 */

public with sharing class SeasonControllerApex {

    @AuraEnabled
    public static List <Season__c> getSeasons(String tv_serie_id) {
        // tu odnosze sie do pol polaczonych relacja master-detail
        List <Season__c> aboutSeasons =  [SELECT Name, NumberOfSeason__c, TV_Serie_Relation__c FROM Season__c WHERE TV_Serie_Relation__c =: tv_serie_id ORDER BY Name ASC];

        if (aboutSeasons == null)
        {
            System.debug('lista pusta');
        }
        return aboutSeasons;
    }
}