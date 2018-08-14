/**
 * Created by martyna.smolarek on 07.08.2018.
 */

public with sharing class ShowTvSeries {

    @AuraEnabled
    public static List <Tv_Serie__c> getMyObjects () {

        List<TV_Serie__c> seriesList = new List <TV_Serie__c> ();
        seriesList = [SELECT Name, Description__c, Trailer__c, Rate__c, Photo_URL__c, Photo_URL_Formula__c, CountOfMarks__c, Marks__c FROM Tv_Serie__c];

        if (seriesList.size() == 0)
        {
            System.debug('lista pusta');
        }

        return seriesList;
    }

    // serie controller?
    @AuraEnabled
    public static List <Tv_Serie__c> getNameOfSerie() {
        List <Tv_Serie__c> about =  [SELECT Name, Trailer__c FROM Tv_Serie__c  LIMIT 1];

        if (about.size() == 0)
        {
            System.debug('lista pusta');
        }

        return about;
    }

    //season controller?
    @AuraEnabled
    public static List <Season__c> getSeasons(String tv_serie_id) {

        System.debug('tv_serie_id: ' + tv_serie_id);

        // tu odnosze sie do pol polaczonych relacja master-detail
        List <Season__c> aboutSeasons =  [SELECT Name, NumberOfSeason__c, TV_Serie_Relation__c FROM Season__c WHERE TV_Serie_Relation__c =: tv_serie_id ORDER BY Name ASC];

        if (aboutSeasons.size() == 0)
        {
            System.debug('lista pusta');
        }
        return aboutSeasons;
    }

    //episode controller?
    @AuraEnabled
    public static List <Episode__c> getEpisodes(String season_id) {

        System.debug('season_id: ' + season_id);
        List <Episode__c> aboutEpisodes =  [SELECT Name, Episode_Number__c, Season__c, Title__c, Story__c FROM Episode__c WHERE Season__c =: season_id ORDER BY Name ASC];
//
        if (aboutEpisodes.size() == 0)
        {
            System.debug('lista pusta');
        }

        return aboutEpisodes;
    }



}