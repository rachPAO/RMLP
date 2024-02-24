-- SQLite
DROP TABLE user_review
CREATE TABLE user_review (
    revieweeEmail TEXT NOT NULL, 
    comments TEXT,
    FOREIGN KEY (revieweeEmail) REFERENCES review(reviewee),
    FOREIGN KEY (comments) REFERENCES review(comments)
);


SELECT * FROM user_review