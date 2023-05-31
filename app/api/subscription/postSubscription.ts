import {POST} from "@/app/api/http";

export async function postSubscription(token: string, body:never){
    return await POST(`subscriptions`, token, [body])
}