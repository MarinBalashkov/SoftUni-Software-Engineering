class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this.comments = [];
        this.likes = [];
    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        } else if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`;
        } else {
            return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
        }
    }

    set likes(value) {
        this._likes = value;
    }

    like(username) {
        const index = this._likes.indexOf(username);
        if (index > 0) {
            throw new Error(`You can't like the same story twice!`);
        }

        if (username === this.creator) {
            throw new Error(`You can't like your own story!`);
        }

        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        const index = this._likes.indexOf(username);
        if (index < 0) {
            throw new Error(`You can't dislike this story!`);
        }

        this._likes.splice(index, 1);
        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        let comment = this.comments.find(x => x.Id === id);
        if (id === undefined || comment === undefined) {
            let lastElementId = this.comments.length + 1;
            comment = {
                Id: lastElementId,
                Username: username,
                Content: content,
                Replies: []
            };

            this.comments.push(comment);
            return `${username} commented on ${this.title}`;
        } else {
            let replyId = comment.Replies.length === 0 ? comment.Id + 0.1 : comment.Replies[comment.Replies.length - 1].Id + 0.1;
            comment.Replies.push({
                Id: Number(replyId.toFixed(1)),
                Username: username,
                Content: content
            });
            return `You replied successfully`;
        }
    }

    toString(sortingType) {
        let resultComments = [];
        if (sortingType == 'asc') {
            this.comments.sort((a, b) => a.Id - b.Id);
            this.comments.forEach(x => {
                x.Replies.sort((a, b) => a.Id - b.Id)
            })
        }else if(sortingType == 'desc'){
            this.comments.sort((a, b) => b.Id - a.Id);
            this.comments.forEach(x => {
                x.Replies.sort((a, b) => b.Id - a.Id)
            })
        }else if(sortingType == 'username'){
            this.comments.sort((a, b) => a.Username.localeCompare(b.Username));
            this.comments.forEach(x => {
                x.Replies.sort((a, b) => a.Username.localeCompare(b.Username));
            })
        }

        resultComments.push('Comments:')
        this.comments.forEach(x => {
            resultComments.push(`-- ${x.Id}. ${x.Username}: ${x.Content}`);
            x.Replies.forEach(r => {
            resultComments.push(`--- ${r.Id}. ${r.Username}: ${r.Content}`);
            })
        })

        return [`Title: ${this.title}`,
            `Creator: ${this.creator}`,
            `Likes: ${this.likes.length}`,      
            ].concat(resultComments).join('\n');
    }

}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));

