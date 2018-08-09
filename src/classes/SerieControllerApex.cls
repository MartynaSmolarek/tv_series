/**
 * Created by martyna.smolarek on 08.08.2018.
 */

public with sharing class SerieControllerApex {

    @AuraEnabled
    public static List <Tv_Serie__c> getNameOfSerie() {
        List <Tv_Serie__c> about =  [SELECT Name, Trailer__c FROM Tv_Serie__c  LIMIT 1];

        if (about == null)
        {
            System.debug('lista pusta');
        }

        return about;
    }
}