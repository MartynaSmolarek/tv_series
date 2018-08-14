/**
 * Created by martyna.smolarek on 10.08.2018.
 */

public with sharing class EpisodeControllerApex {

    /*@AuraEnabled
    public static List <Episode__c> getEpisodes(String season_id) {

        System.debug('season_id: ' + season_id);
        List <Episode__c> aboutEpisodes =  [SELECT Name, Episode_Number__c, Season__c, Title__c, Story__c FROM Episode__c WHERE Season__c =: season_id ORDER BY Name ASC];
//
        if (aboutEpisodes.size() == 0)
        {
            System.debug('lista pusta');
        }

        return aboutEpisodes;
    }*/
}