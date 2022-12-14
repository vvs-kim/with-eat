import naverAxiosClient from './naverAxiosClient';

type SearchPlaceListIp = {
    searchIp: string;
    lon: number;
    lat: number;
};

const searchPlaceList = async ({ searchIp, lon, lat }: SearchPlaceListIp) => {
    const defaultParams =
        'displayCount=20&isPlaceRecommendationReplace=true&lang=ko';
    return naverAxiosClient.get(
        `?caller=pcweb&query=${searchIp}&type=all&searchCoord=${lon};${lat}&page=1&${defaultParams}`,
    );
};

export default searchPlaceList;
