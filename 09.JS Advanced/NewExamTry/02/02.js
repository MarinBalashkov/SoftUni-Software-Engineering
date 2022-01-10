class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this.comments = [];
        this._likes = [];//TODO
    }

    get likes() {
        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`;
        }

        if (this._likes.length == 1) {
            return `${this._likes[0]} likes this story!`;
        }

        return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;//TODO first Person
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error("You can't like the same story twice!");
        }

        if (username == this.creator) {
            throw new Error("You can't like your own story!");
        }

        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error("You can't dislike this story!");
        }

        this._likes = this._likes.filter(x => x != username);
        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        const comment = this.comments.find(x => x.id == id);
        if (id == undefined || comment == undefined) {
            this.comments.push({id: this.comments.length + 1, username, content, replies: []});
            return `${username} commented on ${this.title}`;
        }

        comment.replies.push({id: `${id}.${comment.replies.length + 1}`, username, content});
        return "You replied successfully";
    }

    toString(sortingType){
        const srortComments = {
            'asc' : (a, b) => a.id - b.id,
            'desc' : (a, b) => b.id - a.id, 
            'username' : (a, b) => a.username.localeCompare(b.username)
        };

        this.comments.sort(srortComments[sortingType]).forEach(x => x.replies.sort(srortComments[sortingType]));
        let commentsString =  this.comments.map( x => {
            let comnentStr = `-- ${x.id}. ${x.username}: ${x.content}`;
            if (x.replies.length > 0) {
                const replString = x.replies.map(y => `--- ${y.id}. ${y.username}: ${y.content}`).join('\n');
               return `${comnentStr}\n` + replString
            }

            return comnentStr;
        }).join('\n');

        return `Title: ${this.title}\n` + `Creator: ${this.creator}\n` + `Likes: ${this._likes.length}\n` + `Comments:\n` + commentsString
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
