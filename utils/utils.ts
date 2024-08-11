export const API_HEAD = process.env.NODE_ENV === "development" ? "http://192.168.29.46:8000" : "https://api.notdoneyet.in"


export const userData = {
    "address": {
        "street": "11-1-893, New NGOs Colony",
        "city": "Nizamabad",
        "state": "Telangana",
        "country": "India",
        "postalCode": "503002"
    },
    "_id": "6632a2929c6847233d5c4110",
    "name": "Arjun Sharma",
    "email": "arjunsharma6622@gmail.com",
    "googleId": "45f8915c-7c87-48b6-bfa1-70dcf683f313",
    "image": "https://res.cloudinary.com/dexnb3wk2/image/upload/v1716748073/ndy/users/6632a2929c6847233d5c4110/profileImages/crop_j1zxdo.jpg",
    "backgroundImg": "https://res.cloudinary.com/dexnb3wk2/image/upload/v1721559718/ndy/users/6632a2929c6847233d5c4110/profileImages/crop_q1pr20.jpg",
    "role": "athlete",
    "venues": [],
    "posts": [
        "6635cea5e94505be7897d705",
        "6635d088e94505be7897d7a2",
        "66361c97d59ff8521adc9101",
        "669d24a2963ba726b18f125d",
        "669d40970d1aab44a11a8e24"
    ],
    "followers": [
        "6634d5b0e3a83ed0e86f08fe",
        "665874871d5694d1451559dc",
        "665d76034473ad880980b7ae",
        "6634e70d67deaa977849eaad"
    ],
    "sports": [
        "Table Tennis",
        "Badminton",
        "Cycling",
        "Calisthenics"
    ],
    "skills": [],
    "experience": [
        {
            "title": "44 KM Cycling in a day",
            "type": "tournament",
            "description": "I embarked on an exhilarating 44km cycling adventure, starting with a 22km ride from Dilsukhnagar to Hitech City. After reaching Hitech City, I spent time interacting with the amazing kids at Cheers Foundation Orphanage, sharing stories and spreading joy. With a heart full of memories, I pedaled the 22km back to Dilsukhnagar, completing the journey with a sense of accomplishment and purpose.",
            "location": "Hyderabad",
            "duration": "5",
            "mediaAttachments": [],
            "outcome": "",
            "healthInjury": "After completing cycling I had Muscle soreness, Headache.",
            "organization": "",
            "coach": "",
            "sport": "Cycling",
            "date": "2022-10-27T00:00:00.000Z",
            "_id": "6635ce52e94505be7897d6c4",
            "createdAt": "2024-07-21T22:17:05.008Z",
            "updatedAt": "2024-07-21T22:17:05.008Z"
        },
        {
            "title": "Kick Boxing",
            "type": "training",
            "description": "Learnt how to do kick boxing",
            "location": "Hyderabad",
            "mediaAttachments": [],
            "organization": "",
            "coach": "",
            "sport": "Kick Boxing",
            "date": "2024-07-22T00:00:00.000Z",
            "startDate": "2022-02-22T00:00:00.000Z",
            "endDate": "2022-06-22T00:00:00.000Z",
            "_id": "669d825e4d7474fbcacdcfbd",
            "createdAt": "2024-07-21T22:17:05.008Z",
            "updatedAt": "2024-07-21T22:17:05.008Z"
        }
    ],
    "education": [],
    "__v": 114,
    "following": [
        "6634d4bf433237a21631fc8b",
        "6634d5b0e3a83ed0e86f08fe",
        "6634e5a067deaa977849ea50",
        "6634d3d1433237a21631fc85"
    ],
    "bio": "Badminton | Cycling | Body weight 💪🏻💪🏻",
    "about": "Arjun Sharma, a multifaceted athlete, embodies the essence of versatility and determination. With a penchant for adventure, he conquers rugged terrains and urban landscapes alike, pedaling through 44km cycling escapades with unparalleled stamina. On the badminton court, his swift movements and strategic brilliance make him a formidable opponent, while his mastery of table tennis showcases lightning-fast reflexes and tactical acumen. Beyond traditional sports, Arjun's commitment to bodyweight training reflects his dedication to strength and fitness. Through his unwavering passion and relentless pursuit of excellence, Arjun inspires others to push their limits and embrace the thrill of athletic endeavor.",
    "conversations": [],
    "likedProfiles": [
        "6634d5b0e3a83ed0e86f08fe",
        "6634d3d1433237a21631fc85",
        "6634e5a067deaa977849ea50"
    ],
    "profileLikes": [
        "6634d5b0e3a83ed0e86f08fe",
        "6634e70d67deaa977849eaad",
        "6634e5a067deaa977849ea50",
        "665874871d5694d1451559dc",
        "665d76034473ad880980b7ae"
    ],
    "userName": "arjunsharma",
    "products": [],
    "savedPosts": [
        "664646e80e1c1d0dc7ad8d05",
        "664657a695c561209a8d63b1"
    ],
    "phone": "9700812822"
}

export const timeAgo = (dateString: string): string => {
    const inputDate = new Date(dateString);
    const now = new Date();
  
    const diffInSeconds = Math.floor(
      (now.getTime() - inputDate.getTime()) / 1000,
    );
  
    const minute = 60;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;
    const month = day * 30; // Simplified month duration
    const year = day * 365; // Simplified year duration
  
    if (diffInSeconds < minute) {
      return "just now";
    }
  
    if (diffInSeconds < hour) {
      const minutes = Math.floor(diffInSeconds / minute);
      return `${minutes} min`;
    }
  
    if (diffInSeconds < day) {
      const hours = Math.floor(diffInSeconds / hour);
      return `${hours} hr`;
    }
  
    if (diffInSeconds < week) {
      const days = Math.floor(diffInSeconds / day);
      return `${days} day${days > 1 ? "s" : ""}`;
    }
  
    if (diffInSeconds < month) {
      const weeks = Math.floor(diffInSeconds / week);
      return `${weeks} week${weeks > 1 ? "s" : ""}`;
    }
  
    if (diffInSeconds < year) {
      const months = Math.floor(diffInSeconds / month);
      return `${months} month${months > 1 ? "s" : ""}`;
    }
  
    const years = Math.floor(diffInSeconds / year);
    return `${years} year${years > 1 ? "s" : ""}`;
  };



