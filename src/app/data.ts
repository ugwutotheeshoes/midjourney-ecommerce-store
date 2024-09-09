export interface ProductDataProp {
    name: string;
    url: string;
    price: number;
}

const transformations = "h_300,w_200,f_auto,q_auto,dpr_auto,bo_3px_solid_black,e_blur:50,o_90,b_black/l_text:arial_30:FOR SALE,c_lfill,o_70,co_rgb:ffffff,a_12"

export const ProductData: ProductDataProp[] = [
    {
        name: "Crayon Art Illustration",
        url: `https://res.cloudinary.com/ugwutotheeshoes/image/upload/${transformations}/v1725571897/crayon%20illustration.png`,
        price: 1200,
    },
    {
        name: "Miniature Farmers",
        url: `https://res.cloudinary.com/ugwutotheeshoes/image/upload/${transformations}/v1725571895/Miniature%20scenes%20of%20rice%20harvesting.png`,
        price: 2100,
    },
    {
        name: "The Boy and the Toy Car",
        url: `https://res.cloudinary.com/ugwutotheeshoes/image/upload/${transformations}/v1725571890/boy%20playing%20with%20a%20toy%20car.png`,
        price: 10000,
    },
    {
        name: "One Cocktail Please",
        url: `https://res.cloudinary.com/ugwutotheeshoes/image/upload/${transformations}/v1725571890/cocktail.png`,
        price: 1300,
    },
    {
        name: "Travel Poster",
        url: `https://res.cloudinary.com/ugwutotheeshoes/image/upload/${transformations}/v1725571889/Travel%20Poster.png`,
        price: 200,
    },
    {
        name: "High Rise Buildings",
        url: `https://res.cloudinary.com/ugwutotheeshoes/image/upload/${transformations}/v1725571888/modern%20high%20rise%20buildings.png`,
        price: 700,
    }
]