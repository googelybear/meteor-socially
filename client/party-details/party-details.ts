/**
 * Created by dennisri on 21-Mar-16.
 */
import {Component, View} from 'angular2/core';
import {RouteParams, RouterLink} from 'angular2/router';
import {Parties} from 'collections/parties';

@Component({
    selector: 'party-details'
})

@View({
    templateUrl: '/client/party-details/party-details.html',
    directives: [RouterLink]
})

export class PartyDetails {
    party: Party;

    constructor(params: RouteParams) {
        var partyId= params.get('partyId');
        this.party = Parties.findOne(partyId);
    }

    saveParty(party: Party) {
        Parties.update(party._id, {
            $set: {
                name: party.name,
                description: party.description,
                location: party.location
            }
        });
    }

}