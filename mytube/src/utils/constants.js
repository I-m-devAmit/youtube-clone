const Google_API_KEY = "AIzaSyBKGj6lRwuKzqs9vIKTAQP7Y1HYTK9vXX8";

export const YOUTUBE_VIDEOS_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=' + Google_API_KEY;

// https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=[YOUR_API_KEY] HTTP/1.1
//
// Authorization: Bearer[YOUR_ACCESS_TOKEN]
// Accept: application / json