trigger TriggerOnFlight on Flight__c (before insert) {
    system.debug(trigger.new);
    FlightHandler.flightMethod(trigger.new);

}