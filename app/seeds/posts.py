from app.models import db, Post
from faker import Faker
faker = Faker()

def seed_posts():
    for _ in range(20):
        post = Post(
            user_id= faker.random_int(min=1,max=2),
            caption= faker.sentence(),
            image= [faker.image_url(), faker.image_url(), faker.image_url(), faker.image_url()]
        )
        db.session.add(post)
        db.session.commit()



def undo_posts():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()