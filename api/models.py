from django.db import models

# Create your models here.
class Note(models.Model):
    body=models.TextField(max_length=400,null=True,blank=True)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.body[0:50]
