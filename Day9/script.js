const reels = [
  {
    username: "tech_cams",
    likeCount: 1200,
    isLiked: false,
    commentCount: 45,
    caption: "Learning using cams features today! 🚀",
    video: "./reels/tech.mp4",
    userProfile: "https://source.unsplash.com/random/300x300/?technology",
    shareCount: 12,
    isFollowed: true
  },
  {
    username: "foodie_world",
    likeCount: 985,
    isLiked: true,
    commentCount: 30,
    caption: "Street food hits different 😋🔥",
    video: "./reels/food.mp4",
    userProfile: "https://source.unsplash.com/random/300x300/?food",
    shareCount: 20,
    isFollowed: false
  },
  {
    username: "dance_vibes",
    likeCount: 3400,
    isLiked: true,
    commentCount: 89,
    caption: "New choreography ✨💃",
    video: "./reels/dance.mp4",
    userProfile: "https://source.unsplash.com/random/300x300/?dance",
    shareCount: 54,
    isFollowed: true
  },
  {
    username: "travel_with_me",
    likeCount: 2200,
    isLiked: false,
    commentCount: 60,
    caption: "boat view is do nice❤️",
    video: "./reels/travel.mp4",
    userProfile: "https://source.unsplash.com/random/300x300/?travel",
    shareCount: 33,
    isFollowed: false
  },
  {
    username: "pet_world",
    likeCount: 450,
    isLiked: false,
    commentCount: 12,
    caption: "found a cute dog near street",
    video: "./reels/pets.mp4",
    userProfile: "https://source.unsplash.com/random/300x300/?pet",
    shareCount: 5,
    isFollowed: true
  },
  {
    username: "fit_life",
    likeCount: 1600,
    isLiked: true,
    commentCount: 28,
    caption: "No excuses! 💪 Day 23 workout",
    video: "./reels/exercise.mp4",
    userProfile: "https://source.unsplash.com/random/300x300/?fitness",
    shareCount: 19,
    isFollowed: true
  },
  {
    username: "pet_paradise",
    likeCount: 800,
    isLiked: false,
    commentCount: 21,
    caption: "My dog learned a new trick 🐶❤️",
    video: "./reels/dogtrick.mp4",
    userProfile: "https://source.unsplash.com/random/300x300/?dog",
    shareCount: 14,
    isFollowed: false
  },
  {
    username: "music_addict",
    likeCount: 2700,
    isLiked: true,
    commentCount: 72,
    caption: "New song addiction ✨",
    video: "./reels/music.mp4",
    userProfile: "https://source.unsplash.com/random/300x300/?music",
    shareCount: 40,
    isFollowed: true
  },
  {
    username: "fashion_trendz",
    likeCount: 1900,
    isLiked: false,
    commentCount: 33,
    caption: "Outfit of the day 💕✨",
    video: "./reels/fit.mp4",
    userProfile: "https://source.unsplash.com/random/300x300/?fashion",
    shareCount: 27,
    isFollowed: false
  },
  {
    username: "nature_snapper",
    likeCount: 3100,
    isLiked: true,
    commentCount: 95,
    caption: "Captured this beautiful view 🌿📸",
    video: "./reels/nature.mp4",
    userProfile: "https://source.unsplash.com/random/300x300/?nature",
    shareCount: 61,
    isFollowed: true
  }
];


var sum = ''
reels.forEach(function(elem){
    sum = sum + `<div class="reel">
                    <video autoplay loop muted src="${elem.video}"></video>
                    <div class="bottom">
                        <div class="user">
                            <img src="https://images.unsplash.com/photo-1763848841998-1aa3349d3c36?q=80&w=875&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
                            <h4>${elem.username}</h4>
                            <button>${elem.isFollowed?'Unfollow':'Follow'}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div class="like">
                            <h4 class="like-icon" >${elem.isLiked?'<i class="love ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</h4>
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon" ><i class="ri-chat-3-line"></i></h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon" ><i class="ri-share-forward-line"></i></h4>
                            <h6>${elem.shareCount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon" ><i class="ri-more-2-line"></i></h4>
                        </div>
                    </div>
                </div>`
})

var allreels = document.querySelector('.all-reels')
allreels.innerHTML = sum