import React, { useState } from "react";

interface User {
    id: number;
    username: string;
    fullName: string;
}

interface KomentarzProps {
    id: number;
    body: string;
    postId: number;
    likes: number;
    user: User;
}

function Komentarz({ id, body, postId, likes, user }: KomentarzProps) {
    const [likeCount, setLikeCount] = useState(likes);

    const handleLike = () => {
        setLikeCount(likeCount + 1);
    };

    const handleDislike = () => {
        setLikeCount(likeCount - 1);
    };

    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", borderRadius: "5px" }}>
            <div style={{ marginBottom: "10px" }}>
                <strong>{user.fullName} (@{user.username})</strong>
            </div>
            <div style={{ marginBottom: "10px" }}>
                {body}
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <button onClick={handleLike} style={{ marginRight: "10px" }}>👍</button>
                <button onClick={handleDislike}>👎</button>
                <span style={{ marginLeft: "10px" }}>{likeCount} likes</span>
            </div>
        </div>
    );
}

export default Komentarz;