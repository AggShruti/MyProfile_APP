from django.contrib.postgres.fields import JSONField
from django.db import models



class Portfolio(models.Model):
    name = models.CharField(max_length=120)
    education_qualification = models.TextField()
    experiences = JSONField()
    tech_stack = JSONField()

    def __str__(self):
        return self.name

class Comments(models.Model):
    email = models.CharField(max_length=120)
    content = models.TextField()
    timeStamp = models.TimeField()

    def __str__(self):
        return self.email