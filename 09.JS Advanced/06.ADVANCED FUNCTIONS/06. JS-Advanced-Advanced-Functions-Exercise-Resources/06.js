function solution(action) {
    let score;
    let rating;
    const actions = {
        upvote: () => {
            this.upvotes++;
        },
        downvote: () => {
            this.downvotes++;
        },
        score: () => {
            const scoreResult = [];
            if ((this.upvotes + this.downvotes) >= 50) {
                let obfuscatedUpvotes = Math.ceil((this.upvotes * 0.25) + this.upvotes);
                let obfuscatedDownvotes = Math.ceil((this.downvotes * 0.25) + this.downvotes)
                scoreResult.push(obfuscatedUpvotes, obfuscatedDownvotes, (obfuscatedUpvotes - obfuscatedDownvotes));
                return scoreResult;
            }
        }
    }

    actions[action]();
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
solution.call(post, 'downvote');          // (executed 50 times)
score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
