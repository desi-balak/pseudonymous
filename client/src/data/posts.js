// src/data/posts.js
const postsData = [
    {
        id: 1,
        username: 'user1',
        profileImage: 'https://i.pinimg.com/564x/c1/32/6c/c1326c6b61349fb69051c78c4a4b6e95.jpg',
        date: '2024-08-25',
        likesCount:10,
        commentsCount:12,
        text: 'This is the first post!',
        imageUrls: ['https://via.placeholder.com/400'],
    },
    {
        id: 2,
        username: 'user2',
        profileImage: 'https://i.pinimg.com/564x/ae/3b/04/ae3b04323e82e3097101abbcd2590616.jpg',
        date: '2024-08-24',
        likesCount: 8,
        text: 'Here is another post with an image.',
        imageUrls: ['https://i.pinimg.com/564x/20/90/86/2090864d7738df59d81334a3b53f6a4a.jpg', 'https://i.pinimg.com/564x/30/4d/2f/304d2f6c11b1950150a2810bc5414451.jpg','https://i.pinimg.com/564x/a6/8e/2d/a68e2d9020187d81b04241623c71093e.jpg','https://i.pinimg.com/564x/20/90/86/2090864d7738df59d81334a3b53f6a4a.jpg'],
    },{
        id: 3,
        username: 'user3',
        profileImage: 'https://i.pinimg.com/564x/c1/32/6c/c1326c6b61349fb69051c78c4a4b6e95.jpg',
        date: '2024-08-25T14:30:00.000Z',
        likesCount:1098968576,
        text: 'This is the third post!',
    }
    // Add more posts as needed
];

export default postsData;