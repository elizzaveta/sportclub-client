import {PUT} from "@/app/api/http/PUT";

export async function putGift(bonusId: number, access_token: string, body:never){
    return await PUT(`gifts/${bonusId}`, access_token, body);
}