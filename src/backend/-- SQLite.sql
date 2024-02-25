-- SQLite
CREATE TABLE review(
    subject TEXT, 
    classCode INTEGER NOT NULL, 
    reviewer TEXT NOT NULL, 
    reviewee TEXT NOT NULL,
    comments TEXT,
    quality INTEGER CHECK (quality >= 0 AND quality <= 5), 
    personality INTEGER, 
    hate INTEGER,
    partnerAgain TEXT,
    FOREIGN KEY (reviewer) REFERENCES user(email)
    FOREIGN KEY (reviewee) REFERENCES user(email)
);
DROP TABLE review;
INSERT INTO review(subject, classCode, reviewer, reviewee, comments, quality, personality, hate, partnerAgain) 
VALUES ('CS', 2500, 'huskseas@northeastern.edu', 'dong.nelson@northeastern.edu', 'I want that headband!', 5, 100000, -1000, '100% YESSS')
INSERT INTO review(subject, classCode, reviewer, reviewee, comments, quality, personality, hate, partnerAgain) 
VALUES ('CS', 2501, 'huskseas@northeastern.edu', 'dong.nelson@northeastern.edu', 'President of the Nelson Fan Club. WOULD RECOMMEND!!', 5, 100000, -1000, '100% YESSS')
INSERT INTO review(subject, classCode, reviewer, reviewee, comments, quality, personality, hate, partnerAgain) 
VALUES ('CS', 2510, 'huskseas@northeastern.edu', 'dong.nelson@northeastern.edu', 'Amazing explainer!', 5, 100000/10, -1000, '100% YESSS')