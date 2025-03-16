'use client'
import Card from "./Card";
import { useReducer } from 'react';

export default function CardPanel() {
    const cardReducer = (
        venueList: Map<string, number>,
        action: { type: string; venueName: string; rating?: number }
    ) => {
        const newVenueList = new Map(venueList);
        switch (action.type) {
            
            case "setRating":
               
                newVenueList.set(action.venueName,action.rating??0);
                return newVenueList ;
            
            case "remove":
                
                newVenueList.delete(action.venueName);
                return newVenueList ;

            default:
                return venueList;
        }
    };

    let defaultVenue = new Map<string,number>([
        ["The Bloom Pavilion", 0],
        ["Spark Space", 0],
        ["The Grand Table", 0]
    ]);

    const [venueRatings, dispatch] = useReducer(cardReducer, defaultVenue);

    return (
        <div style={{
            margin: "20px",
            display: "flex",
            flexDirection: "row",
            alignContent: "space-around",
            justifyContent: "space-around",
            flexWrap: "wrap"
        }}>
            <Card 
                venueName="The Bloom Pavilion" 
                imgSrc="/img/bloom.jpg"
                rating={venueRatings.get("The Bloom Pavilion") || 0}
                onRatingChange={(newRating) => dispatch({ type: "setRating", venueName: "The Bloom Pavilion", rating: newRating })}
            />

            <Card 
                venueName="Spark Space" 
                imgSrc="/img/sparkspace.jpg"
                rating={venueRatings.get("Spark Space") || 0}
                onRatingChange={(newRating) => dispatch({ type: "setRating", venueName: "Spark Space", rating: newRating })}
            />

            <Card 
                venueName="The Grand Table" 
                imgSrc="/img/grandtable.jpg"
                rating={venueRatings.get("The Grand Table") || 0}
                onRatingChange={(newRating) => dispatch({ type: "setRating", venueName: "The Grand Table", rating: newRating })}
            />
            <div className="   w-full text-xl font-medium">
              Venue List with Ratings{venueRatings.size}
            </div>

            <div className="block   w-full">
            {Array.from(venueRatings).map(([venueName,rating])=>
                <div data-testid={venueName} onClick={()=>dispatch({type:'remove' , venueName:venueName ,rating:rating})}>
                    {venueName}:{rating}</div>)}

            </div>
            
        </div>
    );
}
