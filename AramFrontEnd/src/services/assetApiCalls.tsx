export async function getChampionAsset( championName: string ) {
    try {
        const endpoint =  "/api/asset/champion/" + championName;
        return endpoint;
    } catch (error) {
        console.log("There was an error grabbing asset for: " + championName + " : " + error);
        
    }
}

export async function getItemAssetFromItemId( itemId: number ){
    const endpoint = "/api/asset/item/" + itemId;
    try {

        return endpoint
    } catch (error) {
        console.log("There was an error grabbing asset for: " + itemId + " : " + error);
    }
}

export async function getProfileIconAsset( profileId: number ) {
    try {
        const endpoint = "/api/asset/profileicon/" + profileId;
        // const response = await axios.get(endpoint, { responseType: "blob" });
        // const imageBlob = new Blob([response.data], { type: "image/png" });
        // const imageUrl = URL.createObjectURL(imageBlob);
         return endpoint;
    } catch (error) {
        console.log(error);
        return "";
    }
}


