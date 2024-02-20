import request, { gql } from "graphql-request"

export const getCarsList = async () => {
    const query = gql`
        query CarLists {
            carLists {
                carAvg
                carBrand
                carType
                createdAt
                id
                name
                prices
                seats
            }
        }
    `;
    const result = await request('https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clsty0qw50dun07waxbsq3jy7/master', query)
    return result;
}