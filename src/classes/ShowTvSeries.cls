/**
 * Created by martyna.smolarek on 07.08.2018.
 */

public with sharing class ShowTvSeries {

    @AuraEnabled
    public static List <Tv_Serie__c> getMyObjects () {

        List<TV_Serie__c> seriesList = new List <TV_Serie__c> ();
        seriesList = [SELECT Name, Description__c FROM Tv_Serie__c];


        if (seriesList == null)
        {
            System.debug('lista pusta');
        }

        return seriesList;
    }
}