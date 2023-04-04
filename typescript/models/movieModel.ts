import mongoose,{Document, Schema, Types} from 'mongoose'


interface MovieAwards{
    wins:number;
    text:string;
    nomination:number
}

interface MovieIMDB{
    rating:number;
    votes:number;
    Id:number
}

interface MovieTomatoes{
    viewer:{
        rating:number;
        numReviews:number;
        meter:number

        
    }
    lastUpdated:Date;
}
export interface IMovie extends Document<Types.ObjectId> {
    poster?:string;
    plot: string;
    genres: string[];
    runtime: number;
    cast:string[];
    num_mflix_comments:string;
    title:string;
    fullpot:string;
    countries:string[];
    released:Date;
    directors:string[];
    rated:string;
    awards:MovieAwards;
    lastupdated:Date;
    year:number;
    IMDB:MovieIMDB
    types:string;
    tomatoes:MovieTomatoes

    




}

const MovieSchema =new Schema<IMovie>({
  
})
const MovieModel =mongoose.model<IMovie>("Movie",MovieSchema)

export default MovieModel