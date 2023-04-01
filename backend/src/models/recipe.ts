import { Schema, SchemaTypes, model } from "mongoose";

interface IImage{
    url: string;
    id: string;
}

interface IRecipe{
    user?: string;
    title: string;
    note?: string;
    description: string;
    ingredients: string;
    image: IImage;
}

const recipeSchema = new Schema<IRecipe>(
    {
        user: {type: SchemaTypes.ObjectId, ref: "User"},
        title: {type: String, required: true, index: true},
        description: {type: String, required: true, index: true},
        note: {type: String, index: true},
        ingredients: {type: String, required: true, index: true},
        image: {
            url: {type: String, required: true},
            id: {type: String, required: true},
        },
    },
    {
        timestamps: true,
        autoIndex: true,
        toJSON:{ virtual: true },
        toObject: {virtual: true},

    }
);

export const Recipe = model<IRecipe>("Recipe", recipeSchema)