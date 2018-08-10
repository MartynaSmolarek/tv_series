/**
 * Created by martyna.smolarek on 10.08.2018.
 */

public with sharing class EpisodeControllerApex {

    @AuraEnabled
    public static List <Episode__c> getEpisodes(String season_id) {
        // tu odnosze sie do pol polaczonych relacja master-detail
        List <Episode__c> aboutEpisodes =  [SELECT Name, Episode_Number__c, Season__c, Title__c, Story__c FROM Episode__c WHERE Season__c =: season_id ORDER BY Name ASC];

        if (aboutEpisodes == null)
        {
            System.debug('lista pusta');
        }
        return aboutEpisodes;
    }
}